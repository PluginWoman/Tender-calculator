import { Cell, CellRightAccessory, Alert } from '@pluginwoman/t-ds'
import type { CalculatorResults } from '../../hooks/useCalculator'
import { fmtMoney, fmtPercent } from '../../utils/format'
import styles from './ResultsSidebar.module.css'

interface Props {
  results: CalculatorResults
}

const SEGMENTS = [
  { color: 'var(--category-amethyst)' },
  { color: 'var(--category-sky)' },
  { color: 'var(--category-sand)' },
  { color: 'var(--category-coral)' },
  { color: 'var(--category-emerald)' },
  { color: 'var(--category-lavender)' },
]

function ResultRow({ label, value, bold, dotColor }: { label: string; value: number; bold?: boolean; dotColor?: string }) {
  return (
    <Cell
      title={label}
      hasLeftAccessory={!!dotColor}
      leftAccessory={dotColor ? <span className={styles.dot} style={{ background: dotColor }} /> : undefined}
      hasRightAccessory
      titleClassName={bold ? 'ts-600-m' : 'ts-400-m'}
      rightAccessory={
        <CellRightAccessory
          variant="text-m"
          text={fmtMoney.format(value)}
        />
      }
    />
  )
}

const VERDICT_LABELS: Record<string, string> = {
  success: 'УЧАСТВОВАТЬ',
  caution: 'ОСТОРОЖНО',
  danger: 'ОТКАЗАТЬСЯ',
}

const VERDICT_ALERT_TYPE: Record<string, 'success' | 'neutral' | 'error'> = {
  success: 'success',
  caution: 'neutral',
  danger: 'error',
}

export default function ResultsSidebar({ results }: Props) {
  const { finalPrice, directCosts, contractCosts, overheadTotal, specificCosts,
    fullCost, profitAmount, taxAmount, verdict, nmccDiff, nmccDiffPercent } = results

  const segmentValues = [directCosts, contractCosts, overheadTotal, specificCosts, profitAmount, taxAmount]

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <p className="ts-400-s" style={{ color: 'rgba(255,255,255,0.8)' }}>Итоговая цена</p>
        <p className={`ts-600-4xl ${styles.price}`}>{fmtMoney.format(finalPrice)}</p>
        <p className="ts-400-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>С учётом налогов и прибыли</p>
        <div className={styles.stackedBar}>
          {SEGMENTS.map((s, i) => segmentValues[i] > 0 && (
            <div
              key={i}
              className={styles.stackedSegment}
              style={{ flex: `0 0 ${finalPrice > 0 ? (segmentValues[i] / finalPrice) * 100 : 0}%`, background: s.color }}
            />
          ))}
        </div>
      </div>

      <div className={styles.body}>
        <ResultRow label="Прямые затраты" value={directCosts} dotColor={SEGMENTS[0].color} />
        <ResultRow label="По контракту" value={contractCosts} dotColor={SEGMENTS[1].color} />
        <ResultRow label="Накладные" value={overheadTotal} dotColor={SEGMENTS[2].color} />
        <ResultRow label="Специфические" value={specificCosts} dotColor={SEGMENTS[3].color} />
        <div className={styles.divider} />
        <ResultRow label="Себестоимость" value={fullCost} bold />
        <ResultRow label="Прибыль" value={profitAmount} dotColor={SEGMENTS[4].color} />
        <ResultRow label="Налоги" value={taxAmount} dotColor={SEGMENTS[5].color} />
        <div className={styles.divider} />
        <ResultRow label="ИТОГО ЦЕНА" value={finalPrice} bold />

        {verdict && (
          <div className={styles.verdict}>
            <Alert type={VERDICT_ALERT_TYPE[verdict]} textAlign="center">
              <span className="ts-600-m">{VERDICT_LABELS[verdict]}</span>
              {verdict !== 'danger' && (
                <span className="ts-400-s" style={{ display: 'block', marginTop: 'var(--spacing-0-5x)' }}>
                  Запас: {fmtMoney.format(nmccDiff)} ({fmtPercent(nmccDiffPercent)})
                </span>
              )}
              {verdict === 'danger' && (
                <span className="ts-400-s" style={{ display: 'block', marginTop: 'var(--spacing-0-5x)' }}>
                  Дефицит: {fmtMoney.format(Math.abs(nmccDiff))}
                </span>
              )}
            </Alert>
          </div>
        )}
      </div>
    </div>
  )
}
