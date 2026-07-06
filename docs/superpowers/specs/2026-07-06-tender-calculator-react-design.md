# Tender Calculator — React Migration Design

**Date:** 2026-07-06  
**Source:** `/Users/nikitina_e/Desktop/Кальк Рентабельности.html`  
**Working dir:** `/Users/nikitina_e/Documents/Prototype/Tender-calculator`

---

## 1. Goal

Migrate the single-file HTML profitability calculator for government procurement into a React + Vite project with:
- React Router navigation
- T Design System (`@pluginwoman/t-ds`) components
- localStorage auto-save

---

## 2. Routes

| Path | Component | Description |
|---|---|---|
| `/` | `PromoPage` | Placeholder landing with product name, short description, and CTA button → `/calculator` |
| `/calculator` | `CalculatorPage` | Full calculator — two-column grid (form left, sticky results right) |

---

## 3. Project Structure

```
src/
├── pages/
│   ├── PromoPage.tsx
│   └── CalculatorPage.tsx
├── components/
│   ├── layout/
│   │   └── AppLayout.tsx        # Shared wrapper with header + <Outlet />
│   └── calculator/
│       ├── CalculatorForm.tsx   # All blocks 0–8 in one component
│       └── ResultsSidebar.tsx   # Sticky summary panel
├── hooks/
│   └── useCalculator.ts         # All state + derived results + localStorage
├── styles/
│   └── global.css               # CSS reset + font-smoothing
├── App.tsx                      # Router config
└── main.tsx                     # Entry point + DS style import
```

---

## 4. State — `useCalculator`

### Input state shape (`CalculatorState`)

```ts
interface CalculatorState {
  // Block 0 — Identification
  purchaseName: string;
  purchaseNumber: string;
  calcDate: string;
  purchaseType: 'goods' | 'service';
  taxSystem: 'osno' | 'usn_income' | 'usn_expense';
  category: 'it' | 'construction' | 'medical' | 'other' | 'goods';

  // Block 1 — Goods
  goodsQty: number;
  goodsPrice: number;
  goodsCustoms: number;
  goodsLogistics: number;
  goodsPack: number;

  // Block 1 — Services
  specialists: { role: string; qty: number; hours: number; rate: number }[];
  serviceMaterials: number;
  serviceRent: number;
  serviceLicenses: number;

  // Block 2 — Contract costs
  contractDelivery: number;
  contractInstall: number;
  contractTravel: number;
  contractCert: number;
  contractInsurance: number;
  contractDocs: number;

  // Block 3 — Overhead
  overheadPercent: number;

  // Block 4 — Specifics & risks
  bidSecurityAmount: number;
  bidSecurityDays: number;
  contractSecurityAmount: number;
  contractDurationDays: number;
  paymentDelayDays: number;
  riskReservePercent: number;
  tenderMgmt: number;
  warrantyReserve: number;

  // Block 5 — Profit
  profitPercent: number;

  // Block 7 — Decision
  nmcc: number;
}
```

### Derived results (`CalculatorResults`)

```ts
interface CalculatorResults {
  directCosts: number;
  contractCosts: number;
  overheadTotal: number;
  specificCosts: number;
  fullCost: number;
  profitAmount: number;
  taxAmount: number;
  finalPrice: number;
  nmccDiff: number;
  nmccDiffPercent: number;
  verdict: 'success' | 'caution' | 'danger' | null;
}
```

### Hook API

```ts
const { state, results, update, updateSpecialist, addSpecialist, removeSpecialist } = useCalculator();
```

- `update(partial)` — merges partial state, triggers recalculation and localStorage write
- localStorage key: `tender-calculator-state`
- On mount: reads from localStorage; falls back to default state with today's date and two initial specialists

---

## 5. T Design System Integration

### Setup

1. `.npmrc` (project root):
   ```
   @pluginwoman:registry=https://npm.pkg.github.com
   ```
2. Install: `npm install @pluginwoman/t-ds`
3. `main.tsx`: `import '@pluginwoman/t-ds/style'`
4. `styles/global.css`:
   ```css
   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
   html { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
   ```

### Component mapping

| HTML element | DS component (after reading AGENTS.md) |
|---|---|
| `input[type="text/number"]` | `Input` |
| `select` | `Select` |
| `input[type="date"]` | `DatePicker` or `Input` |
| `button` | `Button` |
| `.card` section wrappers | `Card` |
| Verdict box | `Alert` or `Tag` |
| Specialists table rows | native `<tr>` or DS `Table` |

**Rule:** If a DS component does not exist for a given element, use native HTML with DS CSS tokens (CSS custom properties). Do not import custom color/spacing variables — use what the DS exposes.

**AGENTS.md:** Must be read from the installed package before component implementation begins. It specifies exact import paths, prop APIs, and usage rules.

---

## 6. Calculation Logic

All formulas are preserved exactly from the original HTML JS. Constants:
- `INSURANCE_RATE = 0.30`
- `BANK_GUARANTEE_RATE = 0.03`
- `ALT_YIELD_RATE = 0.15`
- `DAYS_IN_YEAR = 365`

Tax logic per system:
- **ОСНО:** `tax = priceBeforeTax * 0.20`, `finalPrice = priceBeforeTax + tax`
- **УСН Доходы:** `finalPrice = priceBeforeTax / 0.94`, `tax = finalPrice - priceBeforeTax`
- **УСН Д-Р:** `tax = profitAmount * 0.15`, `finalPrice = priceBeforeTax + tax`

Overhead base: if `OVERHEAD_NORMS[category].base === 'payroll'` → use `payrollBase`, else `directCosts`.

---

## 7. Tooling

| Tool | Version |
|---|---|
| Vite | latest |
| React | 18+ |
| React Router | v6+ |
| TypeScript | yes |
| @pluginwoman/t-ds | latest |
