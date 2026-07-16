# Логика расчёта блока «Итого»

Источник: `src/hooks/useCalculator.ts`, функция `calculate()`.

## Константы

```
INSURANCE_RATE      = 0.30  (30%)
BANK_GUARANTEE_RATE = 0.03  (3%)
ALT_YIELD_RATE      = 0.15  (15%)
DAYS_IN_YEAR        = 365
```

## 1. Прямые затраты (`directCosts`)

Считаются по-разному в зависимости от «Тип предмета закупки» (`purchaseType`).

**Если «Товар»:**
```
goodsTotal = Σ по каждой строке товаров: qty × price + customs + logistics + pack
directCosts = goodsTotal + extraCosts
```

**Если «Услуга»:**
```
fop (ФОТ) = Σ по каждому специалисту: qty × hours × rate
directCosts = fop × (1 + INSURANCE_RATE) + extraCosts   // ФОТ + 30% страховых взносов
```

Где `extraCosts` — сумма 9 полей специфических/накладных статей расходов (одинаковая для обоих случаев):
```
extraCosts = serviceMaterials + serviceRent + serviceLicenses
           + contractDelivery + contractInstall + contractTravel
           + contractCert + contractInsurance + contractDocs
```
(поля «Материалы», «Аренда оборудования», «Лицензии на ПО», «Доставка», «Монтаж», «Командировочные», «Сертификация», «Страхование», «Документация» — см. `ARTICLE_CONFIG` в `src/constants/calculator.ts`).

## 2. Накладные расходы (`overheadTotal`)

База зависит от категории закупки — локальная таблица в `useCalculator.ts` (строки 8–14; не путать с `OVERHEAD_NORMS` из `src/constants/calculator.ts`, та используется только для текстовой подсказки в форме):

```
it, other                     → база: ФОТ (payroll)
goods, construction, medical  → база: прямые затраты (cost)
```

```
payrollBase   = fop (для услуг) или directCosts (для товаров — совпадает с directCosts)
overheadBase  = usePayroll ? payrollBase : directCosts
overheadTotal = overheadBase × (overheadPercent / 100)
```

`overheadPercent` — значение поля «Коэффициент накладных расходов» (по умолчанию подставляется средним значением рекомендованного диапазона при смене категории).

## 3. Специфические расходы (`specificCosts`)

Сумма пяти компонентов, три из них вычисляются, два — прямой ввод.

**Обеспечение заявки** (`bidSecCost`):
```
bidSecCost = bidSecurityAmount × (ALT_YIELD_RATE × (bidSecurityDays / DAYS_IN_YEAR))
```
Логика: деньги на обеспечение «заморожены» на срок `bidSecurityDays`, трактуется как упущенная альтернативная доходность 15% годовых.

**Обеспечение контракта** (`contSecCost`):
```
contSecCost = contractSecurityAmount × (BANK_GUARANTEE_RATE × (contractDurationDays / DAYS_IN_YEAR))
```
Логика: стоимость банковской гарантии — 3% годовых от суммы обеспечения за срок контракта `contractDurationDays`.

**Стоимость отсрочки платежа** (`delayCost`):
```
costBeforeDelay = directCosts + overheadTotal + bidSecCost + contSecCost
delayCost = costBeforeDelay × (ALT_YIELD_RATE × (paymentDelayDays / DAYS_IN_YEAR))
```
Логика: та же альтернативная доходность 15% годовых, но от накопленной себестоимости (прямые + накладные + оба обеспечения), за срок отсрочки платежа заказчиком.

**Резерв на риск** (`riskAmount`):
```
costForRisk = costBeforeDelay + delayCost
riskAmount = costForRisk × (riskReservePercent / 100)
```
`riskReservePercent` — поле «Резерв на риск»; подсказка по диапазону берётся из `RESERVE_HINTS[category].risk`.

**Прямой ввод** (без вычислений): `tenderMgmt` («Управление тендером») и `warrantyReserve` («Гарантийный резерв») — берутся из полей как есть.

```
specificCosts = bidSecCost + contSecCost + delayCost + riskAmount + tenderMgmt + warrantyReserve
```

## 4. Себестоимость (`fullCost`)

```
fullCost = directCosts + overheadTotal + specificCosts
```

Показывается в блоке «Итого» отдельной строкой «Себестоимость».

## 5. Прибыль (`profitAmount`)

```
profitAmount = fullCost × (profitPercent / 100)
priceBeforeTax = fullCost + profitAmount
```

`profitPercent` — поле «Целевая рентабельность».

## 6. Налог (`taxAmount`) и итоговая цена (`finalPrice`)

Зависит от системы налогообложения (`taxSystem`):

```
ОСНО (НДС 20%):
  taxAmount = priceBeforeTax × 0.2
  finalPrice = priceBeforeTax + taxAmount

УСН «Доходы» (6%):
  finalPrice = priceBeforeTax / 0.94
  taxAmount = finalPrice − priceBeforeTax

УСН «Доходы-Расходы» (15%):
  taxAmount = profitAmount × 0.15
  finalPrice = priceBeforeTax + taxAmount
```

`finalPrice` — это строка «Итого».

## 7. Вердикт по тендеру

Использует `finalPrice`, сравнивая его с НМЦК заказчика (`nmcc`):

```
nmccDiff = nmcc − finalPrice
nmccDiffPercent = (nmccDiff / nmcc) × 100

verdict =
  nmccDiff ≥ 0
    ? (nmccDiffPercent > 5 ? 'success' : 'caution')   // Перспективно / Осторожно
    : 'danger'                                         // Убыточно
```

Вердикт не считается (`verdict = null`), если НМЦК не заполнен (`nmcc === 0`).
