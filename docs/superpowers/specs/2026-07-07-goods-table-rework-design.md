# Дизайн: таблица товаров в блоке «Прямые затраты: ТОВАРЫ»

**Дата:** 2026-07-07  
**Файлы:** `src/hooks/useCalculator.ts`, `src/components/calculator/CalculatorForm.tsx`

---

## Цель

Привести UX блока товаров к тому же паттерну, что уже используется для трудозатрат: динамический список строк с добавлением/удалением вместо набора отдельных полей.

---

## Состояние

### Новый тип `GoodsItem`

```typescript
export interface GoodsItem {
  id: string
  name: string
  qty: number
  price: number
  customs: number
  logistics: number
  pack: number
}
```

### Изменения в `CalculatorState`

- Добавить: `goods: GoodsItem[]`
- Удалить: `goodsQty`, `goodsPrice`, `goodsCustoms`, `goodsLogistics`, `goodsPack`

### Дефолтное значение

```typescript
goods: [{ id: '1', name: '', qty: 1, price: 0, customs: 0, logistics: 0, pack: 0 }]
```

### localStorage

Старые ключи (`goodsQty` и др.) игнорируются при загрузке — без миграции.

---

## Действия в хуке (`useCalculator.ts`)

По аналогии со специалистами:

- `addGoodsItem()` — добавляет пустую строку `{ id: Date.now(), name: '', qty: 1, price: 0, customs: 0, logistics: 0, pack: 0 }`
- `removeGoodsItem(id: string)` — удаляет строку без ограничений (можно удалить все)
- `updateGoodsItem(id: string, partial: Partial<Omit<GoodsItem, 'id'>>)` — обновляет поля строки

---

## Расчёт (`calculate`)

```typescript
// Было:
directCosts = goodsQty * goodsPrice + goodsCustoms + goodsLogistics + goodsPack + extraCosts

// Станет:
const goodsTotal = state.goods.reduce(
  (sum, item) => sum + item.qty * item.price + item.customs + item.logistics + item.pack,
  0
)
directCosts = goodsTotal + extraCosts
```

`payrollBase` для товаров = `directCosts` (без изменений по логике).

---

## Форма (`CalculatorForm.tsx`)

### Props

Добавить в `Props`:
```typescript
addGoodsItem: () => void
removeGoodsItem: (id: string) => void
updateGoodsItem: (id: string, partial: Partial<Omit<GoodsItem, 'id'>>) => void
```

### Структура блока ТОВАРЫ

```
<p className="ts-500-s">Товары</p>
{state.goods.length > 0 && <Table>…</Table>}
<ActionFormCell title="Добавить товар" left={<Plus />} onClick={addGoodsItem} />
```

Таблица скрывается при 0 строках — как у специалистов. Кнопка остаётся всегда.

### Колонки таблицы

`gridTemplateColumns="2fr 80px 140px 120px 120px 120px 48px"`

| Заголовок              | Ширина | Тип поля             |
|------------------------|--------|----------------------|
| Название               | `2fr`  | текст, `onTitleChange` → `updateGoodsItem(id, { name })` |
| Кол-во                 | `80px` | число, placeholder `"1"`, `onTitleChange` → `updateGoodsItem(id, { qty: s2n(v) })` |
| Закупочная цена (б/НДС)| `140px`| деньги, placeholder `"0"`, с ₽-суффиксом |
| Таможня и сборы        | `120px`| деньги, placeholder `"0"`, с ₽-суффиксом |
| Транспортировка        | `120px`| деньги, placeholder `"0"`, с ₽-суффиксом |
| Упаковка и маркировка  | `120px`| деньги, placeholder `"0"`, с ₽-суффиксом |
| (Удалить)              | `48px` | иконка `<Trash />`, `onClick → removeGoodsItem(id)` |

### Форматирование денежных полей

Отображение: `goodsDisplay: Record<string, string>` — ключ `"${id}_price"`, `"${id}_customs"`, `"${id}_logistics"`, `"${id}_pack"`.

Инициализация: из текущего `state.goods`, через `formatRateDisplay`.

Обновление при вводе: `onTitleChange` → `setGoodsDisplay(prev => ({ ...prev, [key]: v }))`.

Коммит в state: контейнер `div` с `onBlur`. Обработчик:
- `querySelectorAll('input[placeholder="0"]')` — находит все денежные поля
- `idx = indexOf(target)` → `rowIdx = Math.floor(idx / 4)`, `fieldIdx = idx % 4`
- `fields = ['price', 'customs', 'logistics', 'pack']`
- `updateGoodsItem(id, { [fields[fieldIdx]]: parseRateInput(target.value) })`
- `setGoodsDisplay(prev => ({ ...prev, [key]: formatRateDisplay(num) }))`

Синхронизация `goodsDisplay` при изменении `state.goods` (добавление/удаление строк): `useEffect` по аналогии с `rateDisplay`.

### Автофокус при добавлении строки

`useRef` на контейнер таблицы + `useRef` для `prevGoodsCountRef`. При увеличении `state.goods.length`:
```typescript
const inputs = tableRef.current.querySelectorAll<HTMLInputElement>('input')
const idx = (state.goods.length - 1) * 6  // 6 полей на строку: name, qty, price, customs, logistics, pack
inputs[idx]?.focus()
```

### Удаление блока ТОВАРЫ (старая реализация)

Удалить из JSX:
```tsx
<div className={styles.blockContent}>
  <FormRow>
    <Input label="Количество единиц" ... />
    <Input label="Закупочная цена (без НДС)" ... />
    <Input label="Таможня и сборы" ... />
  </FormRow>
  <FormRow>
    <Input label="Транспорт до склада" ... />
    <Input label="Упаковка и маркировка" ... />
    <div />
  </FormRow>
</div>
```

Вместо этого — таблица + кнопка в той же `costGroupsContainer`.

---

## Что не меняется

- Блок «Прочие затраты» в режиме товаров — без изменений
- Структура с `costGroupsContainer` — без изменений (первая группа теперь «Товары» вместо карточек)
- Все остальные блоки (накладные, специфические и т.д.) — без изменений
