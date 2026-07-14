# Промо-страница калькулятора рентабельности — дизайн

**Дата:** 2026-07-14
**Working dir:** `/Users/nikitina_e/Documents/Prototype/Tender-calculator`

---

## 1. Цель

Заменить текущий минимальный `PromoPage` (голый `PromoPageBanner` без картинки) на полноценную промо-страницу из 4 смысловых блоков, которая:
- объясняет ценность калькулятора рентабельности до перехода к расчёту;
- направляет пользователя в нужный сценарий в зависимости от того, на каком этапе работы с тендером он находится;
- ведёт все переходы «найти тендер» во внешний сервис Точка Закупки;
- собирается из компонентов дизайн-системы `@pluginwoman/t-ds` там, где это возможно, и из легковесных кастомных компонентов там, где DS не покрывает требование (кнопки в карточках).

Маршрут `/` продолжает рендерить `PromoPage`, маршрут `/calculator` не меняется.

---

## 2. Структура файлов

```
src/pages/PromoPage.tsx                 — собирает 4 секции по порядку
src/components/promo/
  HeroSection.tsx                       — обёртка над PromoPageBanner (DS)
  AudienceCards.tsx + .module.css       — блок «Для кого», кастомные карточки с кнопками
  HowItWorks.tsx + .module.css          — блок «Как это работает», шаги + мини-мокапы
  FinalCta.tsx                          — обёртка над PromoPageHorizontalCard (DS, variant="accent")
src/constants/promo.ts                  — EXTERNAL_LINKS (внешние URL)
```

`PromoPage.tsx`:
```tsx
export default function PromoPage() {
  return (
    <>
      <HeroSection />
      <AudienceCards />
      <HowItWorks />
      <FinalCta />
    </>
  )
}
```

Навигация внутри сервиса (`/calculator`) — через `useNavigate()` из `react-router-dom`. Внешние переходы — через `window.open(url, '_blank')`.

---

## 3. Константы

`src/constants/promo.ts`:
```ts
export const EXTERNAL_LINKS = {
  zakupki: 'https://zakupki.tochka.com/search/',
  course: 'https://network.tochka.com/course/tendery-kak-uchastvovat-i-vyigryvat/',
}
```

`zakupki` переиспользуется во всех местах, где сейчас и в новом коде нужен переход «найти тендер» (уже используется в `CalculatorForm.tsx:269`, в новой промо-странице — в карточке 1 и в финальном CTA).

---

## 4. Блок 1 — Hero

`HeroSection.tsx`, тонкая обёртка над DS `PromoPageBanner`:

```tsx
import { useNavigate } from 'react-router-dom'
import { PromoPageBanner } from '@pluginwoman/t-ds'
import heroIllustration from '../../assets/hero-illustration.svg'

export default function HeroSection() {
  const navigate = useNavigate()
  return (
    <PromoPageBanner
      title="Ищите выгоду, а не просто контракт"
      adaptiveTitle="Ищите выгоду, а не просто контракт"
      description="Рассчитайте прибыль и финансовую нагрузку до подачи заявки."
      adaptiveDescription="Рассчитайте прибыль и финансовую нагрузку до подачи заявки."
      buttonLabel="Рассчитать тендер"
      imageSrc={heroIllustration}
      onButtonClick={() => navigate('/calculator')}
    />
  )
}
```

Картинка — предоставленная пользователем SVG-иллюстрация, сохранена в `src/assets/hero-illustration.svg`. `hasImage` по умолчанию `true`, отдельно указывать не нужно. Собственных стилей не требуется, всё покрыто DS.

---

## 5. Блок 2 — Для кого

`AudienceCards.tsx` + `AudienceCards.module.css`.

### Почему не DS `PromoPageCard`

`PromoPageCard` (см. `vendor/@pluginwoman/t-ds/dist/components/PromoPageCard/PromoPageCard.d.ts`) не имеет пропсов `buttonLabel`/`onClick` — только `title`, `description`, `avatar`, `image`/`imageSrc`, `isHorizontal`. Карточка 1 требует двух кнопок, карточки 2 и 3 — по одной. Решение пользователя: сделать карточку кастомной, но визуально согласованной с DS (те же токены отступов/скругления/фона, что и у `PromoPageCard`), и добавить DS `Button` внутрь.

### Разметка блока

```tsx
<section>
  <h2 className="ts-600-2xl">Подойдёт для любого этапа работы с тендерами</h2>
  <div className={styles.grid}>
    {/* 3 карточки */}
  </div>
</section>
```

`.grid` — `display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-6x)`, на `max-width: 1023px` — `grid-template-columns: 1fr` (тот же брейкпоинт, что в `CalculatorPage.module.css`).

Карточка — `div` с паддингом/фоном/скруглением DS-токенов, внутри: `title` (`ts-600-xl`), `description` (`ts-400-m`, `var(--primitive-secondary)`), затем один или два `Button` (`variant="secondary" size="m"`).

### Контент карточек

| # | Заголовок | Описание | Кнопки | Действие |
|---|---|---|---|---|
| 1 | Только начинаете | Найдите первую закупку бесплатно и получите курс по работе с тендерами. | «Найти тендер», «Получить курс» | `window.open(EXTERNAL_LINKS.zakupki)`, `window.open(EXTERNAL_LINKS.course)` |
| 2 | Уже знаете что ищете | Сохраните шаблон расходов и продолжите расчёт после выбора тендера. | «Создать шаблон» | `navigate('/calculator')` |
| 3 | Уже нашли тендер | Введите параметры закупки и получите расчёт за несколько минут. | «Открыть калькулятор» | `navigate('/calculator')` |

**Важно:** функции шаблонов расходов в проекте нет (есть только автосохранение одного состояния в `localStorage`, см. `useCalculator.ts`). Кнопка «Создать шаблон» в этой итерации — просто переход в `/calculator`, где автосохранение уже покрывает сценарий «продолжить расчёт после выбора тендера». Полноценная функция сохранения нескольких шаблонов — отдельная задача вне текущего скоупа.

---

## 6. Блок 3 — Как это работает

`HowItWorks.tsx` + `HowItWorks.module.css`.

Layout по паттерну «слева текст шагов, справа визуальное превью» (аналог `tochka.com/rko/fund/`): CSS grid `grid-template-columns: 1fr 1fr` на десктопе, одна колонка на мобиле (текст сверху, превью под каждым шагом). Без scroll-sync/sticky-подсветки активного шага — статичный список из 3 пар (текст + мокап), чтобы не усложнять первую итерацию.

### Шаги

| Шаг | Заголовок | Описание | Превью |
|---|---|---|---|
| 1 | Найдите тендер | Если ещё не выбрали закупку, воспользуйтесь сервисом Точка Закупки. Здесь можно бесплатно найти подходящие тендеры и подобрать закупки под ваш бизнес. | Мини-мокап поиска: задизейбленное поле поиска + 2 карточки-заглушки тендеров |
| 2 | Введите расходы | Заполните расходы вашей компании. Калькулятор автоматически учтёт прямые, накладные и специфические расходы, налоги и финансовую нагрузку. | Мини-мокап формы: 3-4 подписанных поля с лейблами из `ARTICLE_CONFIG` (`src/constants/calculator.ts`) |
| 3 | Получите рекомендацию | Сервис рассчитает итоговую цену, покажет прибыль и подскажет, стоит ли участвовать в закупке. | Статичный блок вердикта «Участвовать» на реальных цветовых токенах (`--bg-success-1`, `--primitive-success`), по образцу `ResultsSidebar.tsx` |

### Мокапы

Собираются в коде на DS-токенах, без внешних скриншотов/картинок (решение пользователя):
- Мокап шага 1 — упрощённая карточка-контейнер с полем поиска (визуально похожим на `Search` DS) и 2 плейсхолдер-строками тендеров;
- Мокап шага 2 — упрощённая копия части формы (не полноценные интерактивные `FormCell`, а статичные лейбл+значение пары, чтобы не тянуть состояние);
- Мокап шага 3 — переиспользует цветовую конфигурацию `success/caution/danger` из `ResultsSidebar.tsx` (те же CSS-переменные), зафиксирован в состоянии `success` с примерными цифрами.

Все три мокапа не интерактивны и не связаны с реальным состоянием калькулятора — чисто иллюстративные блоки.

---

## 7. Блок 4 — Финальный CTA

`FinalCta.tsx`, обёртка над DS `PromoPageHorizontalCard`:

```tsx
import { PromoPageHorizontalCard } from '@pluginwoman/t-ds'
import { EXTERNAL_LINKS } from '../../constants/promo'

export default function FinalCta() {
  return (
    <PromoPageHorizontalCard
      variant="accent"
      title="Нашли выгодный тендер?"
      description="Продолжайте работу в Точка Закупки: ищите новые закупки, сохраняйте интересные тендеры и возвращайтесь в калькулятор для оценки их рентабельности."
      buttonLabel="Перейти в Точка Закупки"
      onButtonClick={() => window.open(EXTERNAL_LINKS.zakupki, '_blank')}
    />
  )
}
```

---

## 8. Вне скоупа

- Функция сохранения/выбора нескольких шаблонов расходов (карточка 2 блока 2 сейчас лишь ссылается на существующее автосохранение).
- Scroll-sync/sticky-подсветка активного шага в блоке «Как это работает» (взята упрощённая статичная раскладка).
- Замена мини-мокапов на реальные скриншоты/иллюстрации.

---

## 9. Проверка

Ручная проверка в браузере (dev-сервер):
- `/` рендерит все 4 блока без ошибок в консоли;
- кнопки блока 2 и финальный CTA открывают правильные внешние URL в новой вкладке;
- кнопки «Создать шаблон» / «Открыть калькулятор» / hero-кнопка ведут на `/calculator`;
- адаптивность: карточки блока 2 в один столбец, блок 3 — текст над превью на ширине ≤1023px (тот же брейкпоинт, что в `CalculatorPage.module.css`).
