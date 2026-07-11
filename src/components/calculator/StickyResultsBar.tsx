import { useEffect, useState } from 'react'
import type { RefObject } from 'react'
import type { CalculatorResults } from '../../hooks/useCalculator'
import { fmtMoney } from '../../utils/format'
import styles from './StickyResultsBar.module.css'

type VerdictKey = 'none' | 'success' | 'caution' | 'danger'

const BAR_CONFIG: Record<VerdictKey, { bg: string; titleColor: string; title: string }> = {
  none:    { bg: 'var(--bg-neutral-2)',  titleColor: 'var(--primitive-primary)',   title: 'Недостаточно данных' },
  success: { bg: 'var(--bg-success-1)', titleColor: 'var(--primitive-success)',    title: 'Участвовать' },
  caution: { bg: 'var(--bg-warning-1)', titleColor: 'var(--primitive-warning-2)', title: 'Осторожно' },
  danger:  { bg: 'var(--bg-error-1)',   titleColor: 'var(--primitive-error)',      title: 'Отказаться' },
}

interface Props {
  results: CalculatorResults
  resultsRef: RefObject<HTMLDivElement | null>
}

export default function StickyResultsBar({ results, resultsRef }: Props) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const el = resultsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [resultsRef])

  const key: VerdictKey = (results.isReady && results.verdict) ? results.verdict : 'none'
  const cfg = BAR_CONFIG[key]

  const amount = results.isReady && results.verdict
    ? results.verdict === 'danger'
      ? `−${fmtMoney.format(Math.abs(results.nmccDiff))}`
      : `+${fmtMoney.format(results.nmccDiff)}`
    : null

  const handleClick = () => {
    if (results.isReady && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div
      role="button"
      className={styles.bar}
      style={{ background: cfg.bg }}
      data-hidden={hidden}
      onClick={handleClick}
    >
      <div className={styles.left}>
        <span className={`ts-600-m ${styles.status}`} style={{ color: cfg.titleColor }}>
          {cfg.title}
        </span>
        {amount && (
          <span className={`ts-400-s ${styles.amount}`} style={{ color: 'var(--primitive-primary)' }}>
            {amount}
          </span>
        )}
      </div>

      <svg
        className={styles.chevron}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        style={{ color: cfg.titleColor }}
      >
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
