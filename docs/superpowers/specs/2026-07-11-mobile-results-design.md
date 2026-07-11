# Адаптивный блок результатов

**Дата:** 2026-07-11
**Статус:** Approved

---

## Цель

На мобильных устройствах перенести полный блок результатов в конец формы и добавить компактный sticky-блок у нижней границы экрана. По нажатию sticky-блок скроллит к полному блоку. Когда полный блок виден — sticky-блок скрывается.

Десктоп (≥ 1024px): поведение не меняется, сайдбар справа.

---

## Брейкпоинт

`1023px` — единый порог для всех адаптивных изменений.

---

## 1. Раскладка

### Текущее поведение на мобильном (< 900px)
`.sidebarColumn { order: -1 }` — сайдбар показывается **над** формой.

### Новое поведение на мобильном (< 1024px)
Убрать `order: -1`. Сайдбар идёт **после** формы в естественном потоке grid.

Изменение в `CalculatorPage.module.css`:
```css
@media (max-width: 1023px) {
  .layout {
    grid-template-columns: 1fr;
  }
  .sidebarColumn {
    position: static;
    /* order: -1 удалён */
  }
}
```

Порядок страницы на мобильном:
1. Заголовок
2. Идентификация закупки
3. Прямые затраты
4. Накладные расходы
5. Специфические затраты и риски
6. Полный блок «Итого» + кнопка «Скачать PDF»

---

## 2. Sticky-блок (`StickyResultsBar`)

### Файлы
- `src/components/calculator/StickyResultsBar.tsx`
- `src/components/calculator/StickyResultsBar.module.css`

### Видимость
- На десктопе (≥ 1024px): `display: none` через CSS — компонент не рендерится визуально.
- На мобильном: виден, пока полный блок результатов не попал во viewport. Управляется `isVisible` state через `IntersectionObserver`.

### Props
```ts
interface Props {
  results: CalculatorResults
  resultsRef: RefObject<HTMLDivElement>
}
```

### IntersectionObserver
Подписывается на `resultsRef.current`. Пороговое значение `threshold: 0` — появление любой части блока скрывает sticky.

```ts
useEffect(() => {
  const el = resultsRef.current
  if (!el) return
  const observer = new IntersectionObserver(
    ([entry]) => setIsVisible(!entry.isIntersecting),
    { threshold: 0 }
  )
  observer.observe(el)
  return () => observer.disconnect()
}, [resultsRef])
```

### Поведение по нажатию
- `results.isReady === true` → `resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })`
- `results.isReady === false` → `window.scrollTo({ top: 0, behavior: 'smooth' })`

### Содержимое
| Зона | Содержимое |
|---|---|
| Левая | Статус («Участвовать» / «Осторожно» / «Отказаться» / «Недостаточно данных») |
| Средняя | Запас или убыток (`nmccDiff` в ₽) — только когда `isReady` |
| Правая | Шеврон → (иконка перехода) |

Статус и цвет фона берутся из той же таблицы, что и `ResultsSidebar`:
- `success` → `var(--bg-success-1)`, текст `var(--primitive-success)`
- `caution` → `var(--bg-warning-1)`, текст `var(--primitive-warning-2)`
- `danger` → `var(--bg-error-1)`, текст `var(--primitive-error)`
- `none` → `var(--bg-neutral-2)`, текст `var(--primitive-primary)`

### CSS-позиционирование
```css
.bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  /* высота: компактная, ~56px */
}

@media (min-width: 1024px) {
  .bar { display: none; }
}
```

---

## 3. Связывание через ref

В `CalculatorPage` создаётся `resultsRef`:

```tsx
const resultsRef = useRef<HTMLDivElement>(null)
```

Передаётся:
- в `ResultsSidebar` как forwarded `ref` — прикрепляется к корневому `.panel` div
- в `StickyResultsBar` как обычный prop `resultsRef`

`StickyResultsBar` рендерится вне `<aside>` — в корне `CalculatorPage`, чтобы не зависеть от CSS сайдбара:

```tsx
<aside className={styles.sidebarColumn}>
  <ResultsSidebar ref={resultsRef} state={state} results={results} />
</aside>

<StickyResultsBar results={results} resultsRef={resultsRef} />
```

`ResultsSidebar` оборачивается в `forwardRef`:

```tsx
const ResultsSidebar = forwardRef<HTMLDivElement, Props>(({ state, results }, ref) => (
  <div ref={ref} className={styles.panel}>
    ...
  </div>
))
```

---

## 4. Изменяемые файлы

| Файл | Изменение |
|---|---|
| `src/pages/CalculatorPage.module.css` | Брейкпоинт 900 → 1023, убрать `order: -1` |
| `src/pages/CalculatorPage.tsx` | Добавить `resultsRef`, передать в оба компонента |
| `src/components/calculator/ResultsSidebar.tsx` | Обернуть в `forwardRef`, прокинуть ref на `.panel` |
| `src/components/calculator/StickyResultsBar.tsx` | Новый файл |
| `src/components/calculator/StickyResultsBar.module.css` | Новый файл |

---

## 5. Проверки

- [ ] Десктоп (≥ 1024px): блок результатов справа, sticky-блок не виден
- [ ] Мобильный (< 1024px): полный блок в конце страницы, sticky-блок внизу
- [ ] Плавный скролл к блоку по нажатию (когда `isReady`)
- [ ] Плавный скролл к верху по нажатию (когда `!isReady`)
- [ ] Sticky скрывается при появлении полного блока во viewport
- [ ] Оба блока показывают одинаковый статус и данные после изменения
- [ ] Состояние «Недостаточно данных» отображается корректно
