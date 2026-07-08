import { Document, Page, View, Text, Image, Svg, Circle, StyleSheet, Font } from '@react-pdf/renderer'
import type { CalculatorState, CalculatorResults } from '../../hooks/useCalculator'
import { ARTICLE_CONFIG, CATEGORY_OPTIONS, OVERHEAD_NORMS, PURCHASE_TYPE_OPTIONS, TAX_OPTIONS } from '../../constants/calculator'
import { fmtMoney } from '../../utils/format'
import qrPng from '../../assets/qr-zakupki.png'
import PTSansRegular from '../../assets/fonts/PTSans-Regular.ttf'
import PTSansBold from '../../assets/fonts/PTSans-Bold.ttf'

Font.register({
  family: 'PT Sans',
  fonts: [
    { src: PTSansRegular, fontWeight: 400 },
    { src: PTSansBold,    fontWeight: 700 },
  ],
})

const FONT = 'PT Sans'

const C = {
  primary:   '#111111',
  secondary: '#888888',
  border:    '#e8e8e8',
  rowAlt:    '#f8f7ff',
  brand:     '#7c3aed',
  success:   { bg: '#d1fae5', text: '#059669', tag: '#a7f3d0' },
  caution:   { bg: '#fef3c7', text: '#d97706', tag: '#fde68a' },
  danger:    { bg: '#fee2e2', text: '#dc2626', tag: '#fecaca' },
  seg: ['#7c3aed', '#a78bfa', '#c4b5fd', '#10b981', '#6ee7b7'],
}

const s = StyleSheet.create({
  page: { fontFamily: FONT, fontSize: 9, color: C.primary, paddingTop: 36, paddingBottom: 40, paddingHorizontal: 40 },
  // header
  pageHeader:    { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 },
  pageTitle:     { fontSize: 18, fontWeight: 700, color: C.brand },
  dateText:      { fontSize: 9, color: C.secondary, marginTop: 6 },
  // identity
  identityRow:   { flexDirection: 'row', marginBottom: 4 },
  identityLabel: { width: 120, color: C.secondary },
  identityValue: { flex: 1, fontWeight: 700 },
  // separator
  sep:           { height: 1, backgroundColor: C.border, marginVertical: 14 },
  // section title
  sectionTitle:  { fontSize: 11, fontWeight: 700, marginBottom: 10 },
  // table
  tableRow:      { flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 8, borderBottomWidth: 1, borderBottomColor: C.border },
  tableRowAlt:   { backgroundColor: C.rowAlt },
  tableRowLast:  { borderBottomWidth: 0, fontWeight: 700 },
  tableLabel:    { flex: 1, color: C.primary },
  tableValue:    { textAlign: 'right', minWidth: 90 },
  // verdict block
  verdictBlock:  { borderRadius: 8, padding: 14, marginBottom: 4 },
  verdictHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  verdictTitle:  { fontSize: 14, fontWeight: 700, marginRight: 10 },
  verdictTag:    { borderRadius: 4, paddingVertical: 2, paddingHorizontal: 6, fontSize: 9, fontWeight: 700 },
  verdictSub:    { fontSize: 9, color: C.primary, marginTop: 2 },
  verdictMetric: { fontSize: 9, color: C.secondary, marginBottom: 2 },
  // chart
  chartWrap:     { flexDirection: 'row', alignItems: 'center', gap: 20 },
  donutWrap:     { position: 'relative', width: 130, height: 130 },
  donutCenter:   { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' },
  legendWrap:    { flex: 1 },
  legendRow:     { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  legendDot:     { width: 8, height: 8, borderRadius: 4, marginRight: 8, flexShrink: 0 },
  legendName:    { flex: 1, fontSize: 9 },
  legendMoney:   { fontWeight: 700, fontSize: 9, textAlign: 'right' },
  legendPct:     { fontSize: 8, color: C.secondary, textAlign: 'right' },
  // page 2
  p2header:      { fontSize: 14, fontWeight: 700, marginBottom: 16 },
  subTitle:      { fontSize: 10, fontWeight: 700, marginBottom: 8, marginTop: 12 },
  // spec rows
  specRow:       { flexDirection: 'row', paddingVertical: 4, paddingHorizontal: 6, borderBottomWidth: 1, borderBottomColor: C.border },
  specLabel:     { width: 160, color: C.secondary },
  specValue:     { flex: 1 },
  // specialists table
  specHeader:    { flexDirection: 'row', paddingVertical: 4, paddingHorizontal: 6, backgroundColor: C.rowAlt },
  specHeaderCell:{ fontWeight: 700, fontSize: 8, color: C.secondary },
  specDataRow:   { flexDirection: 'row', paddingVertical: 4, paddingHorizontal: 6, borderBottomWidth: 1, borderBottomColor: C.border },
  // page 3
  p3wrap:        { flex: 1, alignItems: 'center', justifyContent: 'center' },
  p3title:       { fontSize: 20, fontWeight: 700, textAlign: 'center', marginBottom: 8, color: C.brand },
  p3sub:         { fontSize: 11, textAlign: 'center', color: C.secondary, marginBottom: 24 },
  p3item:        { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  p3bullet:      { width: 6, height: 6, borderRadius: 3, backgroundColor: C.brand, marginRight: 10, marginTop: 1, flexShrink: 0 },
  p3itemText:    { fontSize: 11 },
  p3url:         { fontSize: 10, color: C.secondary, marginTop: 10, textAlign: 'center' },
})

// ---------- helpers ----------

const fmt = (v: number) => fmtMoney.format(v)
const fmtPct = (v: number) => `${v.toFixed(1).replace('.', ',')}%`

function Sep() { return <View style={s.sep} /> }

function SectionTitle({ children }: { children: string }) {
  return <Text style={s.sectionTitle}>{children}</Text>
}

function TableRow({ label, value, alt, bold }: { label: string; value: string; alt?: boolean; bold?: boolean }) {
  return (
    <View style={[s.tableRow, alt ? s.tableRowAlt : {}, bold ? s.tableRowLast : {}]}>
      <Text style={[s.tableLabel, bold ? { fontWeight: 700 } : {}]}>{label}</Text>
      <Text style={[s.tableValue, bold ? { fontWeight: 700 } : {}]}>{value}</Text>
    </View>
  )
}

// ---------- Donut ----------

function DonutChart({ results }: { results: CalculatorResults }) {
  const { finalPrice, directCosts, overheadTotal, specificCosts, profitAmount, taxAmount } = results
  const total = finalPrice || 1
  const R = 44
  const CX = 65
  const CY = 65
  const circ = 2 * Math.PI * R

  const segments = [
    { label: 'Прямые затраты', value: directCosts,   color: C.seg[0] },
    { label: 'Накладные',      value: overheadTotal, color: C.seg[1] },
    { label: 'Специфические',  value: specificCosts, color: C.seg[2] },
    { label: 'Прибыль',        value: profitAmount,  color: C.seg[3] },
    { label: 'Налоги',         value: taxAmount,     color: C.seg[4] },
  ]

  // integer percentages with largest-remainder correction
  const rawPcts = segments.map(s => (s.value / total) * 100)
  const floors = rawPcts.map(Math.floor)
  const remainder = 100 - floors.reduce((a, b) => a + b, 0)
  const sorted = rawPcts.map((r, i) => ({ i, frac: r - floors[i] })).sort((a, b) => b.frac - a.frac)
  sorted.slice(0, remainder).forEach(({ i }) => floors[i]++)
  const pcts = floors

  let cumPct = 0
  const circles = segments.map((seg, i) => {
    const pctDecimal = seg.value / total
    const dashLen = circ * pctDecimal
    const offset = -cumPct * circ
    cumPct += pctDecimal
    return { ...seg, pct: pcts[i], dashLen, offset }
  })

  return (
    <View style={s.chartWrap}>
      <View style={s.donutWrap}>
        <Svg viewBox="0 0 130 130" width={130} height={130}>
          <Circle cx={CX} cy={CY} r={R} strokeWidth={20} stroke={C.border} fill="none" />
          {circles.map((c, i) => (
            <Circle
              key={i}
              cx={CX} cy={CY} r={R}
              strokeWidth={20}
              stroke={c.color}
              fill="none"
              strokeDasharray={`${c.dashLen} ${circ}`}
              strokeDashoffset={`${c.offset}`}
              transform={`rotate(-90, ${CX}, ${CY})`}
            />
          ))}
        </Svg>
        <View style={s.donutCenter}>
          <Text style={{ fontSize: 8, fontWeight: 700 }}>{fmt(finalPrice)}</Text>
          <Text style={{ fontSize: 7, color: C.secondary }}>итого</Text>
        </View>
      </View>
      <View style={s.legendWrap}>
        {circles.map((c) => (
          <View key={c.label} style={s.legendRow}>
            <View style={[s.legendDot, { backgroundColor: c.color }]} />
            <Text style={s.legendName}>{c.label}</Text>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={s.legendMoney}>{fmt(c.value)}</Text>
              <Text style={s.legendPct}>{c.pct}%</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

// ---------- Verdict ----------

function VerdictBlock({ results }: { results: CalculatorResults }) {
  const { verdict, nmccDiff, nmccDiffPercent } = results
  if (!verdict) return null

  const cfgs = {
    success: { ...C.success, title: 'Участвовать',  metricLabel: 'Запас',  sub: 'Себестоимость ниже НМЦК, участие ожидаемо рентабельно.' },
    caution: { ...C.caution, title: 'Осторожно',   metricLabel: 'Запас',  sub: 'Есть риск низкой прибыли — запас менее 5% от НМЦК.' },
    danger:  { ...C.danger,  title: 'Отказаться',  metricLabel: 'Убыток', sub: 'Себестоимость выше НМЦК, участие нерентабельно.' },
  }
  const cfg = cfgs[verdict]
  const absAmt = Math.abs(nmccDiff)
  const sign = verdict === 'danger' ? '−' : '+'
  const tagText = `${sign}${fmtPct(Math.abs(nmccDiffPercent))}`

  return (
    <View style={[s.verdictBlock, { backgroundColor: cfg.bg }]}>
      <View style={s.verdictHeader}>
        <Text style={[s.verdictTitle, { color: cfg.text }]}>{cfg.title}</Text>
        <View style={[s.verdictTag, { backgroundColor: cfg.tag }]}>
          <Text style={{ color: cfg.text, fontWeight: 700 }}>{tagText}</Text>
        </View>
      </View>
      <Text style={s.verdictMetric}>{cfg.metricLabel}</Text>
      <Text style={[s.verdictTitle, { fontSize: 16, color: cfg.text, marginBottom: 6 }]}>
        {verdict === 'danger' ? '−' : ''}{fmt(absAmt)}
      </Text>
      <Text style={[s.verdictSub, { color: cfg.text }]}>{cfg.sub}</Text>
    </View>
  )
}

// ---------- Page 1 ----------

function Page1({ state, results }: Props) {
  return (
    <Page size="A4" style={s.page}>
      <View style={s.pageHeader}>
        <View>
          <Text style={s.pageTitle}>Расчёт рентабельности тендера</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={s.dateText}>Дата расчёта</Text>
          <Text style={{ fontWeight: 700 }}>{state.calcDate}</Text>
        </View>
      </View>

      <View style={{ marginBottom: 4 }}>
        <View style={s.identityRow}>
          <Text style={s.identityLabel}>Название закупки</Text>
          <Text style={s.identityValue}>{state.purchaseName || '—'}</Text>
        </View>
        <View style={s.identityRow}>
          <Text style={s.identityLabel}>Номер в ЕИС</Text>
          <Text style={s.identityValue}>{state.purchaseNumber || '—'}</Text>
        </View>
      </View>

      <Sep />
      <SectionTitle>Итоги расчёта</SectionTitle>
      <TableRow label="НМЦК заказчика"  value={fmt(state.nmcc)}          alt />
      <TableRow label="Итоговая цена"   value={fmt(results.finalPrice)}          />
      <TableRow label="Себестоимость"   value={fmt(results.fullCost)}     alt />
      <TableRow label="Прибыль"         value={fmt(results.profitAmount)}        />
      <TableRow label="Налоги"          value={fmt(results.taxAmount)}    alt  />

      <Sep />
      <VerdictBlock results={results} />
      <Sep />

      <SectionTitle>Структура цены</SectionTitle>
      <DonutChart results={results} />
    </Page>
  )
}

// ---------- Page 2 ----------

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={s.specRow}>
      <Text style={s.specLabel}>{label}</Text>
      <Text style={s.specValue}>{value}</Text>
    </View>
  )
}

function Page2({ state, results }: Props) {
  const categoryLabel = CATEGORY_OPTIONS.find(o => o.value === state.category)?.label ?? state.category
  const purchaseTypeLabel = PURCHASE_TYPE_OPTIONS.find(o => o.value === state.purchaseType)?.label ?? state.purchaseType
  const taxLabel = TAX_OPTIONS.find(o => o.value === state.taxSystem)?.label ?? state.taxSystem
  const overheadBaseLabel = OVERHEAD_NORMS[state.category]?.base ?? '—'

  const fop = state.specialists.reduce((sum, sp) => sum + sp.qty * sp.hours * sp.rate, 0)
  const insurance = fop * 0.30
  const activeArticles = ARTICLE_CONFIG.filter(a => (state[a.stateKey] as number) > 0)

  const specItems: { label: string; value: string }[] = []
  if (state.bidSecurityAmount > 0)  specItems.push({ label: 'Обеспечение заявки',            value: fmt(state.bidSecurityAmount) })
  if (state.bidSecurityDays > 0)    specItems.push({ label: 'Срок заморозки',                 value: `${state.bidSecurityDays} дней` })
  if (results.bidSecCost > 0)       specItems.push({ label: 'Стоимость заморозки заявки',     value: fmt(results.bidSecCost) })
  if (state.contractSecurityAmount > 0) specItems.push({ label: 'Обеспечение контракта',      value: fmt(state.contractSecurityAmount) })
  if (state.contractDurationDays > 0)   specItems.push({ label: 'Срок контракта',             value: `${state.contractDurationDays} дней` })
  if (results.contSecCost > 0)          specItems.push({ label: 'Банковская гарантия',        value: fmt(results.contSecCost) })
  if (state.paymentDelayDays > 0)   specItems.push({ label: 'Отсрочка платежа',               value: `${state.paymentDelayDays} дней` })
  if (results.delayCost > 0)        specItems.push({ label: 'Стоимость отсрочки',             value: fmt(results.delayCost) })
  if (state.riskReservePercent > 0) specItems.push({ label: 'Резерв рисков',                  value: `${state.riskReservePercent}%` })
  if (results.riskAmount > 0)       specItems.push({ label: 'Сумма резерва рисков',           value: fmt(results.riskAmount) })
  if (state.tenderMgmt > 0)         specItems.push({ label: 'Тендерный менеджмент',           value: fmt(state.tenderMgmt) })
  if (state.warrantyReserve > 0)    specItems.push({ label: 'Гарантийный резерв',             value: fmt(state.warrantyReserve) })

  return (
    <Page size="A4" style={s.page}>
      <Text style={s.p2header}>Детализация затрат</Text>

      <Text style={s.subTitle}>Исходные параметры</Text>
      <SpecRow label="Тип предмета"           value={purchaseTypeLabel} />
      <SpecRow label="Категория"              value={categoryLabel} />
      <SpecRow label="Налогообложение"        value={taxLabel} />
      <SpecRow label="Целевая рентабельность" value={`${state.profitPercent}%`} />
      <SpecRow label="Коэффициент накладных"  value={`${state.overheadPercent}%`} />

      <Sep />

      {state.purchaseType === 'service' ? (
        <>
          <Text style={s.subTitle}>Прямые затраты — ФОТ</Text>
          <View style={s.specHeader}>
            <Text style={[s.specHeaderCell, { flex: 2 }]}>Специалист</Text>
            <Text style={[s.specHeaderCell, { width: 40, textAlign: 'right' }]}>Кол-во</Text>
            <Text style={[s.specHeaderCell, { width: 40, textAlign: 'right' }]}>Часы</Text>
            <Text style={[s.specHeaderCell, { width: 70, textAlign: 'right' }]}>Ставка</Text>
            <Text style={[s.specHeaderCell, { width: 80, textAlign: 'right' }]}>Стоимость</Text>
          </View>
          {state.specialists.map((sp) => (
            <View key={sp.id} style={s.specDataRow}>
              <Text style={{ flex: 2, fontSize: 9 }}>{sp.role || '—'}</Text>
              <Text style={{ width: 40, textAlign: 'right', fontSize: 9 }}>{sp.qty}</Text>
              <Text style={{ width: 40, textAlign: 'right', fontSize: 9 }}>{sp.hours}</Text>
              <Text style={{ width: 70, textAlign: 'right', fontSize: 9 }}>{fmt(sp.rate)}/ч</Text>
              <Text style={{ width: 80, textAlign: 'right', fontSize: 9 }}>{fmt(sp.qty * sp.hours * sp.rate)}</Text>
            </View>
          ))}
          <View style={[s.specDataRow, { borderBottomWidth: 0 }]}>
            <Text style={{ flex: 1, fontWeight: 700, fontSize: 9 }}>Итого ФОТ</Text>
            <Text style={{ width: 80, textAlign: 'right', fontWeight: 700, fontSize: 9 }}>{fmt(fop)}</Text>
          </View>
          <View style={s.specRow}>
            <Text style={s.specLabel}>Страховые взносы (30%)</Text>
            <Text style={s.specValue}>{fmt(insurance)}</Text>
          </View>
        </>
      ) : (
        <>
          <Text style={s.subTitle}>Прямые затраты — Товары</Text>
          <View style={s.specHeader}>
            <Text style={[s.specHeaderCell, { flex: 2 }]}>Наименование</Text>
            <Text style={[s.specHeaderCell, { width: 36, textAlign: 'right' }]}>Кол-во</Text>
            <Text style={[s.specHeaderCell, { width: 70, textAlign: 'right' }]}>Цена</Text>
            <Text style={[s.specHeaderCell, { width: 60, textAlign: 'right' }]}>Таможня</Text>
            <Text style={[s.specHeaderCell, { width: 60, textAlign: 'right' }]}>Логистика</Text>
            <Text style={[s.specHeaderCell, { width: 60, textAlign: 'right' }]}>Итого</Text>
          </View>
          {state.goods.map((g) => {
            const rowTotal = g.qty * g.price + g.customs + g.logistics + g.pack
            return (
              <View key={g.id} style={s.specDataRow}>
                <Text style={{ flex: 2, fontSize: 9 }}>{g.name || '—'}</Text>
                <Text style={{ width: 36, textAlign: 'right', fontSize: 9 }}>{g.qty}</Text>
                <Text style={{ width: 70, textAlign: 'right', fontSize: 9 }}>{fmt(g.price)}</Text>
                <Text style={{ width: 60, textAlign: 'right', fontSize: 9 }}>{fmt(g.customs)}</Text>
                <Text style={{ width: 60, textAlign: 'right', fontSize: 9 }}>{fmt(g.logistics)}</Text>
                <Text style={{ width: 60, textAlign: 'right', fontSize: 9 }}>{fmt(rowTotal)}</Text>
              </View>
            )
          })}
        </>
      )}

      {activeArticles.length > 0 && (
        <>
          <Sep />
          <Text style={s.subTitle}>Прочие затраты</Text>
          {activeArticles.map(a => (
            <SpecRow key={a.key} label={a.label} value={fmt(state[a.stateKey] as number)} />
          ))}
        </>
      )}

      <Sep />
      <Text style={s.subTitle}>Накладные расходы</Text>
      <SpecRow label="База расчёта"  value={overheadBaseLabel} />
      <SpecRow label="Коэффициент"   value={`${state.overheadPercent}%`} />
      <SpecRow label="Итого"         value={fmt(results.overheadTotal)} />

      {specItems.length > 0 && (
        <>
          <Sep />
          <Text style={s.subTitle}>Специфические затраты</Text>
          {specItems.map(item => (
            <SpecRow key={item.label} label={item.label} value={item.value} />
          ))}
        </>
      )}
    </Page>
  )
}

// ---------- Page 3 ----------

function Page3() {
  const features = [
    'Поиск по всем закупкам',
    'Аналитика конкурентов',
    'Подбор подходящих тендеров',
    'Бесплатный расчёт рентабельности',
  ]
  return (
    <Page size="A4" style={s.page}>
      <View style={s.p3wrap}>
        <Text style={s.p3title}>Хотите найти похожие закупки?</Text>
        <Text style={s.p3sub}>Выполните поиск в Точка Закупки.</Text>
        {features.map(f => (
          <View key={f} style={s.p3item}>
            <View style={s.p3bullet} />
            <Text style={s.p3itemText}>{f}</Text>
          </View>
        ))}
        <Image src={qrPng} style={{ width: 120, height: 120, marginTop: 24 }} />
        <Text style={s.p3url}>zakupki.tochka.com</Text>
      </View>
    </Page>
  )
}

// ---------- Root ----------

interface Props { state: CalculatorState; results: CalculatorResults }

export default function TenderReport({ state, results }: Props) {
  return (
    <Document title="Расчёт рентабельности тендера">
      <Page1 state={state} results={results} />
      <Page2 state={state} results={results} />
      <Page3 />
    </Document>
  )
}
