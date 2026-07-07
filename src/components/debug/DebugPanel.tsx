import type { CalculatorResults, CalculatorState } from '../../hooks/useCalculator'
import styles from './DebugPanel.module.css'

interface Props {
  results: CalculatorResults
  update: (partial: Partial<CalculatorState>) => void
}

const PRESETS = [
  { label: 'Без алерта',   apply: (_p: number) => ({ nmcc: 0 }) },
  { label: 'Участвовать', apply: (p: number) => ({ nmcc: Math.round(p * 1.1) }) },
  { label: 'Осторожно',   apply: (p: number) => ({ nmcc: Math.round(p * 1.03) }) },
  { label: 'Отказаться',  apply: (p: number) => ({ nmcc: Math.round(p * 0.9) }) },
] as const

export default function DebugPanel({ results, update }: Props) {
  const current = results.verdict ?? 'none'

  return (
    <div className={styles.root}>
      <span className={styles.label}>DEBUG</span>
      {PRESETS.map((preset) => {
        const key = preset.label === 'Без алерта' ? 'none' : preset.label === 'Участвовать' ? 'success' : preset.label === 'Осторожно' ? 'caution' : 'danger'
        const active = current === key
        return (
          <button
            key={preset.label}
            className={`${styles.item} ${active ? styles.active : ''}`}
            onClick={() => update(preset.apply(results.finalPrice))}
          >
            <span className={styles.check}>{active ? '✓' : ''}</span>
            {preset.label}
          </button>
        )
      })}
    </div>
  )
}
