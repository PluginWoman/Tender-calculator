import type { CalculatorResults, CalculatorState, Specialist } from '../../hooks/useCalculator'
import styles from './DebugPanel.module.css'

interface Props {
  results: CalculatorResults
  update: (partial: Partial<CalculatorState>) => void
  onReset: () => void
}

const FALLBACK_BASE = 100_000

const BASELINE_SPECIALISTS: Specialist[] = [
  { id: 'debug-1', role: 'Специалист', qty: 1, hours: 100, rate: 1000 },
]

const PRESETS = [
  {
    label: 'Пусто',
    apply: (_r: CalculatorResults) => ({ nmcc: 0, specialists: [] }),
  },
  {
    label: 'Перспективно',
    apply: (r: CalculatorResults) => ({
      nmcc: Math.round((r.finalPrice || FALLBACK_BASE) * 1.1),
      ...(r.directCosts > 0 ? {} : { specialists: BASELINE_SPECIALISTS }),
    }),
  },
  {
    label: 'Рисковано',
    apply: (r: CalculatorResults) => ({
      nmcc: Math.round((r.finalPrice || FALLBACK_BASE) * 1.03),
      ...(r.directCosts > 0 ? {} : { specialists: BASELINE_SPECIALISTS }),
    }),
  },
  {
    label: 'Убыточно',
    apply: (r: CalculatorResults) => ({
      nmcc: Math.round((r.finalPrice || FALLBACK_BASE) * 0.9),
      ...(r.directCosts > 0 ? {} : { specialists: BASELINE_SPECIALISTS }),
    }),
  },
] as const

export default function DebugPanel({ results, update, onReset }: Props) {
  const current = results.verdict ?? 'none'

  return (
    <div className={styles.root}>
      <span className={styles.label}>DEBUG</span>
      {PRESETS.map((preset) => {
        const key = preset.label === 'Пусто' ? 'none' : preset.label === 'Перспективно' ? 'success' : preset.label === 'Рисковано' ? 'caution' : 'danger'
        const active = current === key
        return (
          <button
            key={preset.label}
            className={`${styles.item} ${active ? styles.active : ''}`}
            onClick={() => update(preset.apply(results))}
          >
            <span className={styles.check}>{active ? '✓' : ''}</span>
            {preset.label}
          </button>
        )
      })}
      <div className={styles.divider} />
      <button className={styles.resetBtn} onClick={onReset}>
        ↺ Сбросить форму
      </button>
    </div>
  )
}
