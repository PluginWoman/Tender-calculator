# Дизайн: переработка блока «Прямые затраты» (услуги и товары)

**Дата:** 2026-07-07  
**Файлы:** `src/components/calculator/CalculatorForm.tsx`, `src/components/calculator/CalculatorForm.module.css`, `src/hooks/useCalculator.ts`, `src/components/calculator/ResultsSidebar.tsx`

---

## Scope

Два связанных изменения:

1. **Вертикальные отступы** — визуально разделить группы «Трудозатраты (ФОТ)» и «Прочие затраты» внутри блока «Прямые затраты» с помощью увеличенного отступа `--content-group-list-spacing`.
2. **Расширение статей** — расширить список «Прочие затраты» с 3 до 9 статей, поглотив поля из блока «Прямые затраты по контракту», который удаляется. Та же таблица «Прочие затраты» появляется и в блоке «ТОВАРЫ».

---

## Часть 1: Вертикальные отступы

### Проблема

`FormBlock` оборачивает всё содержимое в `<div className={styles.blockContent}>` с `gap: var(--spacing-4x)`. Из-за этого отступ между группами «Трудозатраты» и «Прочие затраты» ничем не отличается от отступа между элементами внутри группы — блок воспринимается как единый список.

### Решение

Обернуть каждую логическую группу в `<div className={styles.blockContent}>` и поместить оба враппера в `<div className={styles.costGroupsContainer}>`. Этот контейнер передаётся единственным дочерним элементом в `FormBlock`.

**Структура JSX (блок услуг):**
```tsx
<FormBlock title="Прямые затраты">
  <div className={styles.costGroupsContainer}>

    {/* Группа 1: Трудозатраты */}
    <div className={styles.blockContent}>
      <p className="ts-500-s">Трудозатраты (ФОТ)</p>
      {/* таблица специалистов */}
      <ActionFormCell title="Добавить специалиста" ... />
    </div>

    {/* Группа 2: Прочие затраты */}
    <div className={styles.blockContent}>
      <p className="ts-500-s">Прочие затраты</p>
      {/* таблица статей */}
      <ActionFormCell title="Добавить статью" ... />
    </div>

  </div>
</FormBlock>
```

**Новый CSS-класс:**
```css
.costGroupsContainer {
  display: flex;
  flex-direction: column;
  gap: var(--content-group-list-spacing);
}
```

Для блока «ТОВАРЫ» аналогичная структура: текущие поля товаров — первая группа в `blockContent`, новая таблица «Прочие затраты» — вторая группа.

---

## Часть 2: Расширение статей и удаление блока «По контракту»

### Новый список статей (9 штук)

| # | Название | Ключ в `ArticleKey` | Поле в `CalculatorState` |
|---|----------|--------------------|-|
| 1 | Материалы | `materials` | `serviceMaterials` |
| 2 | Аренда оборудования | `rent` | `serviceRent` |
| 3 | Лицензии на ПО | `licenses` | `serviceLicenses` |
| 4 | Доставка до заказчика | `delivery` | `contractDelivery` |
| 5 | Монтаж / Пусконаладка | `install` | `contractInstall` |
| 6 | Командировочные расходы | `travel` | `contractTravel` |
| 7 | Сертификация / Испытания | `cert` | `contractCert` |
| 8 | Страхование | `insurance` | `contractInsurance` |
| 9 | Оформление документации | `docs` | `contractDocs` |

### Поведение таблицы

- Каждую статью можно добавить только один раз.
- При добавлении строки: первая статья, которой ещё нет в активных, добавляется в конец.
- Dropdown показывает только статьи, которые не заняты другими строками (текущая + свободные).
- При удалении строки: статья возвращается в доступные.
- Лимит: `activeArticles.length < 9`.
- Сумма вводится в рублях с тем же форматированием, что и «Ставка ₽/час» (`formatRateDisplay` / `parseRateInput`).

### Изменения в CalculatorForm.tsx

1. `ArticleKey` расширяется: `'materials' | 'rent' | 'licenses' | 'delivery' | 'install' | 'travel' | 'cert' | 'insurance' | 'docs'`
2. `ARTICLE_CONFIG` — 9 записей, каждая со своим `stateKey`.
3. Инициализация `activeArticles`: проверять все 9 полей состояния (не только 3).
4. Инициализация `articleAmounts`: включить все 9 ключей.
5. Удалить блок `FormBlock("Прямые затраты по контракту")` со всеми его `<Input>`.
6. Добавить блок «Прочие затраты» в ветку `purchaseType === 'goods'`.

### Изменения в useCalculator.ts

**Тип CalculatorState** — поля остаются без изменений. Ключи в localStorage не меняются.

**Функция `calculate`:**

Для услуг:
```typescript
directCosts = fop * (1 + INSURANCE_RATE)
  + state.serviceMaterials + state.serviceRent + state.serviceLicenses
  + state.contractDelivery + state.contractInstall + state.contractTravel
  + state.contractCert + state.contractInsurance + state.contractDocs
```

Для товаров:
```typescript
directCosts = state.goodsQty * state.goodsPrice
  + state.goodsCustoms + state.goodsLogistics + state.goodsPack
  + state.serviceMaterials + state.serviceRent + state.serviceLicenses
  + state.contractDelivery + state.contractInstall + state.contractTravel
  + state.contractCert + state.contractInsurance + state.contractDocs
```

`contractCosts` убирается из формулы (становится 0 или удаляется из `CalculatorResults`).

Промежуточные расчёты (costBeforeDelay, overheadBase и т.д.) не меняются — они используют `directCosts`, который теперь включает все затраты.

### Изменения в ResultsSidebar.tsx

Строка «По контракту» (contractCosts) убирается из отображения. Если `contractCosts` остаётся в `CalculatorResults` как 0, просто удаляем строку из массива сегментов. Если убираем поле совсем — обновляем тип `CalculatorResults` и места использования.

---

## Что не меняется

- Все 9 полей в `CalculatorState` и ключи localStorage — без изменений.
- `ArticlePickerCell` — компонент не меняется (только расширяется тип `ArticleKey`).
- Логика форматирования сумм — без изменений.
- Блоки «Накладные расходы», «Специфические затраты», «Целевая прибыль», «Принятие решения» — без изменений.
