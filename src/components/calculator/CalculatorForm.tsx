import { Fragment, useRef, useEffect, useCallback, useState } from 'react'
import { Widget, Input, Dropdown, Cell, CellRightAccessory, Table, TableCell, ActionFormCell } from '@pluginwoman/t-ds'
import { Plus, Trash } from '@pluginwoman/t-ds/icons'
import type { CalculatorState, CalculatorResults, Specialist } from '../../hooks/useCalculator'
import { fmtMoney, fmtPercent } from '../../utils/format'
import styles from './CalculatorForm.module.css'

interface Props {
  state: CalculatorState
  results: CalculatorResults
  update: (partial: Partial<CalculatorState>) => void
  addSpecialist: () => void
  removeSpecialist: (id: string) => void
  updateSpecialist: (id: string, partial: Partial<Omit<Specialist, 'id'>>) => void
}

const n2s = (n: number) => (n === 0 ? '' : String(n))
const s2n = (s: string) => parseFloat(s) || 0

function formatRateDisplay(n: number): string {
  if (n === 0) return ''
  const hasKopecks = Math.round((n % 1) * 100) !== 0
  return n.toLocaleString('ru-RU', {
    minimumFractionDigits: hasKopecks ? 2 : 0,
    maximumFractionDigits: hasKopecks ? 2 : 0,
  })
}

function parseRateInput(s: string): number {
  const cleaned = s.replace(/[\s  ₽]/g, '').replace(',', '.')
  return parseFloat(cleaned) || 0
}

const RUB = <span className="ts-400-s" style={{ color: 'var(--primitive-secondary)' }}>₽</span>
const PCT = <span className="ts-400-s" style={{ color: 'var(--primitive-secondary)' }}>%</span>

// --- Dropdown option sets ---
const PURCHASE_TYPE_OPTIONS = [
  { value: 'goods', label: 'Товар (Поставка)' },
  { value: 'service', label: 'Работа / Услуга' },
]

const TAX_OPTIONS = [
  { value: 'osno', label: 'ОСНО (НДС 20%)' },
  { value: 'usn_income', label: 'УСН «Доходы» (6%)' },
  { value: 'usn_expense', label: 'УСН «Доходы-Расходы» (15%)' },
]

const CATEGORY_OPTIONS = [
  { value: 'it', label: 'IT-услуги' },
  { value: 'construction', label: 'Строительство / Ремонт' },
  { value: 'medical', label: 'Медицина / Оборудование' },
  { value: 'other', label: 'Прочие услуги' },
  { value: 'goods', label: 'Товары' },
]

const OVERHEAD_NORMS: Record<string, { min: number; max: number; base: string }> = {
  goods: { min: 10, max: 15, base: 'Прямые затраты' },
  construction: { min: 15, max: 25, base: 'Прямые затраты' },
  it: { min: 70, max: 100, base: 'ФОТ (Трудозатраты)' },
  medical: { min: 20, max: 30, base: 'Прямые затраты' },
  other: { min: 15, max: 25, base: 'ФОТ (Трудозатраты)' },
}

function SelectDropdown<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: { value: T; label: string }[]
  onChange: (v: T) => void
}) {
  const currentLabel = options.find((o) => o.value === value)?.label ?? ''
  return (
    <Dropdown label={label} value={currentLabel} hasHelpIcon={false}>
      {options.map((opt) => (
        <Cell
          key={opt.value}
          title={opt.label}
          hasLeftAccessory={false}
          hasRightAccessory={opt.value === value}
          rightAccessory={
            opt.value === value ? (
              <CellRightAccessory variant="disclosure" />
            ) : undefined
          }
          onClick={() => onChange(opt.value)}
        />
      ))}
    </Dropdown>
  )
}

function FormBlock({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Widget title={title} hasChevron={false} hasRightAccessory={false} minContentHeight={0}>
      <div className={styles.blockContent}>{children}</div>
    </Widget>
  )
}

function FormRow({ children }: { children: React.ReactNode }) {
  return <div className={styles.formRow}>{children}</div>
}


export default function CalculatorForm({
  state,
  results,
  update,
  addSpecialist,
  removeSpecialist,
  updateSpecialist,
}: Props) {
  const norm = OVERHEAD_NORMS[state.category]

  const tableRef = useRef<HTMLDivElement>(null)
  const prevSpecCountRef = useRef(state.specialists.length)

  useEffect(() => {
    if (state.specialists.length > prevSpecCountRef.current && tableRef.current) {
      const inputs = tableRef.current.querySelectorAll<HTMLInputElement>('input')
      // 4 isEdit inputs per row; first input of the new last row
      const idx = (state.specialists.length - 1) * 4
      inputs[idx]?.focus()
    }
    prevSpecCountRef.current = state.specialists.length
  }, [state.specialists.length])

  const handleAddSpecialist = useCallback(() => {
    addSpecialist()
  }, [addSpecialist])

  const [rateDisplay, setRateDisplay] = useState<Record<string, string>>(() =>
    Object.fromEntries(state.specialists.map((s) => [s.id, formatRateDisplay(s.rate)]))
  )

  useEffect(() => {
    setRateDisplay((prev) => {
      const next: Record<string, string> = {}
      for (const s of state.specialists) {
        next[s.id] = s.id in prev ? prev[s.id] : formatRateDisplay(s.rate)
      }
      return next
    })
  }, [state.specialists])

  const handleTableBlur = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      const target = e.target as HTMLInputElement
      if (target.tagName !== 'INPUT' || !tableRef.current) return
      const rateInputs = Array.from(
        tableRef.current.querySelectorAll<HTMLInputElement>('input[placeholder="0"]')
      )
      const idx = rateInputs.indexOf(target)
      if (idx < 0 || idx >= state.specialists.length) return
      const specialist = state.specialists[idx]
      const num = parseRateInput(target.value)
      updateSpecialist(specialist.id, { rate: num })
      setRateDisplay((prev) => ({ ...prev, [specialist.id]: formatRateDisplay(num) }))
    },
    [state.specialists, updateSpecialist]
  )

  return (
    <>
      {/* Block 0: Identification */}
      <FormBlock title="Идентификация закупки">
        <FormRow>
          <Input
            label="Название закупки"
            value={state.purchaseName}
            placeholder="Например: Поставка компьютерного оборудования"
            onChange={(v) => update({ purchaseName: v })}
          />
          <Input
            label="Номер в ЕИС"
            value={state.purchaseNumber}
            placeholder="03732000..."
            onChange={(v) => update({ purchaseNumber: v })}
          />
          <Input
            label="Дата расчёта"
            value={state.calcDate}
            onChange={(v) => update({ calcDate: v })}
          />
        </FormRow>
        <FormRow>
          <SelectDropdown
            label="Тип предмета закупки"
            value={state.purchaseType}
            options={PURCHASE_TYPE_OPTIONS}
            onChange={(v) => {
              update({
                purchaseType: v as 'goods' | 'service',
                category: v === 'goods' ? 'goods' : 'other',
                overheadPercent: v === 'goods' ? 12.5 : 20,
              })
            }}
          />
          <SelectDropdown
            label="Система налогообложения"
            value={state.taxSystem}
            options={TAX_OPTIONS}
            onChange={(v) => update({ taxSystem: v as 'osno' | 'usn_income' | 'usn_expense' })}
          />
          <SelectDropdown
            label="Категория (для нормативов)"
            value={state.category}
            options={CATEGORY_OPTIONS}
            onChange={(v) => {
              const n = OVERHEAD_NORMS[v]
              update({ category: v as 'goods' | 'it' | 'construction' | 'medical' | 'other', overheadPercent: (n.min + n.max) / 2 })
            }}
          />
        </FormRow>
      </FormBlock>

      {/* Block 1A: Goods */}
      {state.purchaseType === 'goods' && (
        <FormBlock title="Прямые затраты: ТОВАРЫ">
          <FormRow>
            <Input
              label="Количество единиц"
              value={n2s(state.goodsQty)}
              onChange={(v) => update({ goodsQty: s2n(v) })}
            />
            <Input
              label="Закупочная цена (без НДС)"
              value={n2s(state.goodsPrice)}
              right={RUB}
              onChange={(v) => update({ goodsPrice: s2n(v) })}
            />
            <Input
              label="Таможня и сборы"
              value={n2s(state.goodsCustoms)}
              right={RUB}
              onChange={(v) => update({ goodsCustoms: s2n(v) })}
            />
          </FormRow>
          <FormRow>
            <Input
              label="Транспорт до склада"
              value={n2s(state.goodsLogistics)}
              right={RUB}
              onChange={(v) => update({ goodsLogistics: s2n(v) })}
            />
            <Input
              label="Упаковка и маркировка"
              value={n2s(state.goodsPack)}
              right={RUB}
              onChange={(v) => update({ goodsPack: s2n(v) })}
            />
            <div />
          </FormRow>
        </FormBlock>
      )}

      {/* Block 1B: Services */}
      {state.purchaseType === 'service' && (
        <FormBlock title="Прямые затраты: РАБОТЫ / УСЛУГИ">
          <p className="ts-500-s" style={{ marginBottom: 'var(--spacing-2x)' }}>Трудозатраты (ФОТ)</p>

          <div ref={tableRef} onBlur={handleTableBlur}>
            <Table gridTemplateColumns="1fr 96px 96px 160px 64px">
              {/* Header */}
              <TableCell title="Профессия / Роль" titleStyle="600" backgroundColor="var(--bg-neutral-1)" />
              <TableCell title="Чел." titleStyle="600" backgroundColor="var(--bg-neutral-1)" className={styles.rateCell} />
              <TableCell title="Часов" titleStyle="600" backgroundColor="var(--bg-neutral-1)" className={styles.rateCell} />
              <TableCell title="Ставка ₽/час" titleStyle="600" backgroundColor="var(--bg-neutral-1)" className={styles.rateCell} />
              <TableCell title="" backgroundColor="var(--bg-neutral-1)" />

              {/* Rows */}
              {state.specialists.map((s) => (
                <Fragment key={s.id}>
                  <TableCell
                    isEdit
                    title={s.role}
                    placeholder="Должность"
                    onTitleChange={(v) => updateSpecialist(s.id, { role: v })}
                  />
                  <TableCell
                    isEdit
                    title={n2s(s.qty)}
                    className={styles.rateCell}
                    placeholder="1"
                    onTitleChange={(v) => updateSpecialist(s.id, { qty: s2n(v) })}
                  />
                  <TableCell
                    isEdit
                    title={n2s(s.hours)}
                    className={styles.rateCell}
                    placeholder="1"
                    onTitleChange={(v) => updateSpecialist(s.id, { hours: s2n(v) })}
                  />
                  <TableCell
                    isEdit
                    title={rateDisplay[s.id] ?? ''}
                    placeholder="0"
                    className={styles.rateCell}
                    hasRightAccessory
                    rightAccessory={
                      <span className="ts-400-m" style={{ color: rateDisplay[s.id] ? 'var(--primitive-secondary)' : 'var(--primitive-neutral-4)', userSelect: 'none', marginLeft: '4px' }}>₽</span>
                    }
                    onTitleChange={(v) => setRateDisplay((prev) => ({ ...prev, [s.id]: v }))}
                  />
                  <TableCell
                    hasTitle={false}
                    hasRightAccessory
                    rightAccessory={
                      <span
                        className="ds-icon ds-icon--m hoverOpacity"
                        style={{ color: 'var(--primitive-neutral-4)', cursor: 'pointer' }}
                        onClick={() => removeSpecialist(s.id)}
                      >
                        <Trash />
                      </span>
                    }
                    className={styles.deleteCell}
                  />
                </Fragment>
              ))}
            </Table>
          </div>

          <ActionFormCell
            title="Добавить специалиста"
            left={<span className="ds-icon ds-icon--m" style={{ color: 'var(--primitive-brand)' }}><Plus /></span>}
            onClick={handleAddSpecialist}
          />

          <FormRow>
            <Input
              label="Материалы"
              value={n2s(state.serviceMaterials)}
              right={RUB}
              onChange={(v) => update({ serviceMaterials: s2n(v) })}
            />
            <Input
              label="Аренда оборудования"
              value={n2s(state.serviceRent)}
              right={RUB}
              onChange={(v) => update({ serviceRent: s2n(v) })}
            />
            <Input
              label="Лицензии на ПО"
              value={n2s(state.serviceLicenses)}
              right={RUB}
              onChange={(v) => update({ serviceLicenses: s2n(v) })}
            />
          </FormRow>
        </FormBlock>
      )}

      {/* Block 2: Contract */}
      <FormBlock title="Прямые затраты по контракту">
        <FormRow>
          <Input
            label='Доставка до заказчика ("последняя миля")'
            value={n2s(state.contractDelivery)}
            right={RUB}
            onChange={(v) => update({ contractDelivery: s2n(v) })}
          />
          <Input
            label="Монтаж / Пусконаладка"
            value={n2s(state.contractInstall)}
            right={RUB}
            onChange={(v) => update({ contractInstall: s2n(v) })}
          />
          <Input
            label="Командировочные расходы"
            value={n2s(state.contractTravel)}
            right={RUB}
            onChange={(v) => update({ contractTravel: s2n(v) })}
          />
        </FormRow>
        <FormRow>
          <Input
            label="Сертификация / Испытания"
            value={n2s(state.contractCert)}
            right={RUB}
            onChange={(v) => update({ contractCert: s2n(v) })}
          />
          <Input
            label="Страхование"
            value={n2s(state.contractInsurance)}
            right={RUB}
            onChange={(v) => update({ contractInsurance: s2n(v) })}
          />
          <Input
            label="Оформление документации"
            value={n2s(state.contractDocs)}
            right={RUB}
            onChange={(v) => update({ contractDocs: s2n(v) })}
          />
        </FormRow>
      </FormBlock>

      {/* Block 3: Overhead */}
      <FormBlock title="Накладные расходы">
        <FormRow>
          <div>
            <Input
              label="Коэффициент накладных расходов"
              value={n2s(state.overheadPercent)}
              right={PCT}
              onChange={(v) => update({ overheadPercent: s2n(v) })}
            />
            <p className="ts-400-xs" style={{ color: 'var(--primitive-secondary)', marginTop: 'var(--spacing-1x)' }}>
              База: {norm?.base} · Норматив {norm?.min}–{norm?.max}%
            </p>
          </div>
          <Input
            label="Итого накладные"
            value={fmtMoney.format(results.overheadTotal)}
            isDisabled
          />
          <div />
        </FormRow>
      </FormBlock>

      {/* Block 4: Specifics */}
      <FormBlock title="Специфические затраты и риски">
        <FormRow>
          <Input
            label="Обеспечение заявки (сумма)"
            value={n2s(state.bidSecurityAmount)}
            right={RUB}
            onChange={(v) => update({ bidSecurityAmount: s2n(v) })}
          />
          <Input
            label="Срок заморозки (дней)"
            value={n2s(state.bidSecurityDays)}
            onChange={(v) => update({ bidSecurityDays: s2n(v) })}
          />
          <div>
            <Input
              label="Стоимость обеспечения"
              value={fmtMoney.format(results.bidSecCost)}
              isDisabled
            />
            <p className="ts-400-xs" style={{ color: 'var(--primitive-secondary)', marginTop: 'var(--spacing-1x)' }}>
              Альт. доходность 15%
            </p>
          </div>
        </FormRow>

        <div className={styles.separator} />

        <FormRow>
          <Input
            label="Обеспечение контракта (сумма)"
            value={n2s(state.contractSecurityAmount)}
            right={RUB}
            onChange={(v) => update({ contractSecurityAmount: s2n(v) })}
          />
          <Input
            label="Срок контракта (дней)"
            value={n2s(state.contractDurationDays)}
            onChange={(v) => update({ contractDurationDays: s2n(v) })}
          />
          <div>
            <Input
              label="Стоимость обеспечения"
              value={fmtMoney.format(results.contSecCost)}
              isDisabled
            />
            <p className="ts-400-xs" style={{ color: 'var(--primitive-secondary)', marginTop: 'var(--spacing-1x)' }}>
              Стоимость БГ 3% в год
            </p>
          </div>
        </FormRow>

        <FormRow>
          <Input
            label="Отсрочка платежа (дней)"
            value={n2s(state.paymentDelayDays)}
            onChange={(v) => update({ paymentDelayDays: s2n(v) })}
          />
          <Input
            label="Стоимость отсрочки"
            value={fmtMoney.format(results.delayCost)}
            isDisabled
          />
          <div />
        </FormRow>

        <FormRow>
          <Input
            label="Резерв на непредвиденное (%)"
            value={n2s(state.riskReservePercent)}
            right={PCT}
            onChange={(v) => update({ riskReservePercent: s2n(v) })}
          />
          <Input
            label="Сумма резерва"
            value={fmtMoney.format(results.riskAmount)}
            isDisabled
          />
          <div />
        </FormRow>

        <FormRow>
          <Input
            label="Тендерный менеджмент"
            value={n2s(state.tenderMgmt)}
            right={RUB}
            onChange={(v) => update({ tenderMgmt: s2n(v) })}
          />
          <Input
            label="Гарантийный резерв"
            value={n2s(state.warrantyReserve)}
            right={RUB}
            onChange={(v) => update({ warrantyReserve: s2n(v) })}
          />
          <div />
        </FormRow>
      </FormBlock>

      {/* Block 5: Profit */}
      <FormBlock title="Целевая прибыль">
        <FormRow>
          <div>
            <Input
              label="Рентабельность (%)"
              value={n2s(state.profitPercent)}
              right={PCT}
              onChange={(v) => update({ profitPercent: s2n(v) })}
            />
            <p className="ts-400-xs" style={{ color: 'var(--primitive-secondary)', marginTop: 'var(--spacing-1x)' }}>
              Рекомендуется 10–20%
            </p>
          </div>
          <Input
            label="Сумма прибыли"
            value={fmtMoney.format(results.profitAmount)}
            isDisabled
          />
          <div />
        </FormRow>
      </FormBlock>

      {/* Block 6: Taxes */}
      <FormBlock title="Налоги (авторасчёт)">
        <FormRow>
          <Input
            label="Сумма налога"
            value={fmtMoney.format(results.taxAmount)}
            isDisabled
          />
          <p className="ts-400-xs" style={{ color: 'var(--primitive-secondary)', alignSelf: 'center' }}>
            {state.taxSystem === 'osno' && 'НДС 20% на цену до налогов'}
            {state.taxSystem === 'usn_income' && 'УСН 6% от выручки'}
            {state.taxSystem === 'usn_expense' && 'УСН 15% от прибыли'}
          </p>
          <div />
        </FormRow>
      </FormBlock>

      {/* Block 7: Decision */}
      <FormBlock title="Принятие решения">
        <FormRow>
          <Input
            label="НМЦК заказчика"
            value={n2s(state.nmcc)}
            right={RUB}
            placeholder="Введите НМЦК из ЕИС"
            onChange={(v) => update({ nmcc: s2n(v) })}
          />
          <Input
            label="Запас / Дефицит"
            value={state.nmcc > 0 ? fmtMoney.format(results.nmccDiff) : '—'}
            isDisabled
          />
          <Input
            label="Запас в %"
            value={state.nmcc > 0 ? fmtPercent(results.nmccDiffPercent) : '—'}
            isDisabled
          />
        </FormRow>

      </FormBlock>

    </>
  )
}
