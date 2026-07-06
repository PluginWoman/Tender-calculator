# Tender Calculator — Implementation Plan

**Spec:** `2026-07-06-tender-calculator-react-design.md`  
**Date:** 2026-07-06

---

## Phase 1 — Scaffold & Tooling

**Step 1.1** — Create Vite + React + TypeScript project in working directory
```bash
npm create vite@latest . -- --template react-ts
```

**Step 1.2** — Install dependencies
```bash
npm install react-router-dom
```

**Step 1.3** — Configure `.npmrc` for private DS registry
```
@pluginwoman:registry=https://npm.pkg.github.com
```

**Step 1.4** — Install T Design System
```bash
npm install @pluginwoman/t-ds
```

**Step 1.5** — Create folder structure
```
src/pages/  src/components/layout/  src/components/calculator/
src/hooks/  src/styles/
```

---

## Phase 2 — Read DS Instructions

**Step 2.1** — Read `AGENTS.md` from installed package:
```
node_modules/@pluginwoman/t-ds/AGENTS.md
```
Record which components are available and their import paths.

**Step 2.2** — Update component mapping table in this plan based on AGENTS.md findings.

---

## Phase 3 — Base Setup

**Step 3.1** — `main.tsx`
- Import `'@pluginwoman/t-ds/style'`
- Mount `<App />`

**Step 3.2** — `styles/global.css`
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
```
Import in `main.tsx`.

**Step 3.3** — `App.tsx` — Router config
```tsx
<BrowserRouter>
  <Routes>
    <Route element={<AppLayout />}>
      <Route path="/" element={<PromoPage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
    </Route>
  </Routes>
</BrowserRouter>
```

**Step 3.4** — `components/layout/AppLayout.tsx`
- Minimal wrapper: header with product name + `<Outlet />`

---

## Phase 4 — State Hook

**Step 4.1** — `hooks/useCalculator.ts`
- Define `CalculatorState` interface (all fields from spec section 4)
- Define `CalculatorResults` interface
- Define `DEFAULT_STATE` with today's date + two initial specialists
- Implement `useState` initialized from `localStorage` or `DEFAULT_STATE`
- Implement `useEffect` to write to `localStorage` on every state change (key: `tender-calculator-state`)
- Implement `calculate(state): CalculatorResults` — pure function, exact formulas from HTML JS:
  - Constants: `INSURANCE_RATE=0.30`, `BANK_GUARANTEE_RATE=0.03`, `ALT_YIELD_RATE=0.15`, `DAYS_IN_YEAR=365`
  - Direct costs (goods or services path)
  - Contract costs sum
  - Overhead (payroll or cost base depending on category)
  - Specific costs (bid security, contract security, payment delay, risk reserve, mgmt, warranty)
  - Full cost = direct + contract + overhead + specific
  - Profit = fullCost × profitPercent
  - Tax per system (ОСНО / УСН Доходы / УСН Д-Р)
  - Final price
  - NMCC diff and verdict
- Return `{ state, results, update, addSpecialist, removeSpecialist }`

---

## Phase 5 — Pages

**Step 5.1** — `pages/PromoPage.tsx`
- Product title: "Калькулятор цены поставщика"
- Short description
- CTA button using DS `Button` → `navigate('/calculator')`

**Step 5.2** — `pages/CalculatorPage.tsx`
- Call `useCalculator()`
- Two-column grid layout: `CalculatorForm` left, `ResultsSidebar` right (sticky)
- Pass `state`, `results`, `update` as props to both components

---

## Phase 6 — Calculator Components

**Step 6.1** — `components/calculator/ResultsSidebar.tsx`
- Receives `results: CalculatorResults`
- Shows: Прямые затраты / По контракту / Накладные / Специфические / Себестоимость / Прибыль / Налоги / ИТОГО
- Large `finalPrice` display at top
- Verdict box (if `results.verdict !== null`)
- Use DS `Card` or equivalent

**Step 6.2** — `components/calculator/CalculatorForm.tsx`
- Receives `state: CalculatorState`, `update`, `addSpecialist`, `removeSpecialist`
- Renders all blocks 0–8 sequentially using DS components:
  - Block 0: Identification (DS Input × 2, DS Select × 3, DatePicker/Input for date)
  - Block 1A (goods): Qty, price, customs, logistics, pack — hidden when `purchaseType === 'service'`
  - Block 1B (services): Specialists table (role/qty/hours/rate rows) + add/remove buttons + materials/rent/licenses — hidden when `purchaseType === 'goods'`
  - Block 2: Contract costs (6 DS Input fields)
  - Block 3: Overhead percent input + computed total (disabled)
  - Block 4: Bid security, contract security, payment delay, risk reserve, mgmt, warranty
  - Block 5: Profit percent + computed amount (disabled)
  - Block 6: Tax amount (disabled, auto-computed)
  - Block 7: NMCC input + diff outputs + verdict box
  - Block 8: Bar chart (CSS bars, percentage of final price per cost category)
- All DS Input fields use `type="number"` where needed; currency suffix via DS prop or CSS
- `onChange` calls `update({ fieldName: value })`

---

## Phase 7 — Verify

**Step 7.1** — Run dev server: `npm run dev`

**Step 7.2** — Manual test checklist:
- [ ] Promo page loads at `/`, CTA navigates to `/calculator`
- [ ] Calculator loads with two specialists pre-filled
- [ ] Switching purchaseType shows/hides correct block 1
- [ ] Changing any input recalculates results in sidebar immediately
- [ ] Overhead base changes with category (IT→payroll, goods→cost)
- [ ] Tax system switching produces correct final price
- [ ] NMCC field shows verdict (green/yellow/red)
- [ ] Refresh page → all values restored from localStorage
- [ ] Bar chart updates proportionally

---

## Completion Criteria

- App runs without TypeScript errors
- All calculation results match the original HTML for identical inputs
- localStorage round-trip works (fill → refresh → same values)
- All DS components used where available per AGENTS.md
