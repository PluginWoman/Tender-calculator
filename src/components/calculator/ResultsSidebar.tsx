import type { FC, CSSProperties } from 'react'
import { Tooltip } from '@pluginwoman/t-ds'
import { QuestionCircle } from '@pluginwoman/t-ds/icons'

const IconCheckmarkCircle: FC<{ style?: CSSProperties }> = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM16.707 8.29297C16.3165 7.90244 15.8905 7.90244 15.5 8.29297L10 13.5859L8.70703 12.293C8.31651 11.9024 7.68349 11.9024 7.29297 12.293C6.90244 12.6835 6.90244 13.3165 7.29297 13.707L9.29297 15.707C9.68349 16.0976 10.3165 16.0976 10.707 15.707L16.707 9.70703C17.0976 9.31651 17.0976 8.68349 16.707 8.29297Z" fill="currentColor"/>
  </svg>
)

const IconWarningTriangle: FC<{ style?: CSSProperties }> = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M8.42304 5.15529C9.89723 2.20739 14.1042 2.20731 15.5783 5.15529L21.8293 17.6582C22.8265 19.6528 21.3767 21.9999 19.1467 22H4.85469C2.62458 22 1.17384 19.6529 2.17109 17.6582L8.42304 5.15529ZM12.0002 17C11.4481 17.0002 11.0002 17.4478 11.0002 18C11.0003 18.5522 11.4481 18.9999 12.0002 19C12.5524 19 13.0001 18.5522 13.0002 18C13.0002 17.4478 12.5525 17 12.0002 17ZM12.0002 8.00001C11.4481 8.00016 11.0002 8.44785 11.0002 9.00001V14C11.0003 14.5522 11.4481 14.9999 12.0002 15C12.5524 15 13.0001 14.5522 13.0002 14V9.00001C13.0002 8.44776 12.5525 8.00001 12.0002 8.00001Z" fill="currentColor"/>
  </svg>
)

const IconCrossCircle: FC<{ style?: CSSProperties }> = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM15.5352 8.46484C15.1446 8.07438 14.5116 8.07434 14.1211 8.46484L12 10.5859L9.87891 8.46484C9.48838 8.07432 8.85537 8.07432 8.46484 8.46484C8.07432 8.85537 8.07432 9.48838 8.46484 9.87891L10.5859 12L8.46484 14.1211C8.07434 14.5116 8.07438 15.1446 8.46484 15.5352C8.85537 15.9257 9.48838 15.9257 9.87891 15.5352L12 13.4141L14.1211 15.5352C14.5116 15.9257 15.1446 15.9257 15.5352 15.5352C15.9257 15.1446 15.9257 14.5116 15.5352 14.1211L13.4141 12L15.5352 9.87891C15.9257 9.48838 15.9257 8.85537 15.5352 8.46484Z" fill="currentColor"/>
  </svg>
)
import { PageAction } from '@pluginwoman/t-ds'
import { ArrowDownIncomingCircle } from '@pluginwoman/t-ds/icons'
import type { CalculatorState, CalculatorResults } from '../../hooks/useCalculator'
import { fmtMoney, fmtPercent } from '../../utils/format'
import { generatePdf } from '../pdf/generatePdf'
import styles from './ResultsSidebar.module.css'

interface Props {
  state: CalculatorState
  results: CalculatorResults
}

const SEGMENT_COLORS = [
  'var(--category-coral)',
  'var(--category-indigo)',
  'var(--category-emerald)',
  'var(--category-amethyst)',
  'var(--category-mint)',
  'var(--category-flamingo)',
]

type VerdictKey = 'none' | 'success' | 'caution' | 'danger'

const HEADER_CONFIG: Record<VerdictKey, {
  bg: string
  titleColor: string
  title: string
  subtitle: string | null
  metricLabel: string | null
  tagBg: string | null
  tagTextColor: string | null
  icon: FC<{ className?: string; style?: CSSProperties }> | null
}> = {
  none: {
    bg: 'var(--bg-neutral-2)',
    titleColor: 'var(--primitive-primary)',
    title: 'Ожидаем данные',
    subtitle: 'Заполните НМЦК, целевую рентабельность и прямые затраты, чтобы получить рекомендацию по участию в тендере',
    metricLabel: null,
    tagBg: null,
    tagTextColor: null,
    icon: null,
  },
  success: {
    bg: 'var(--bg-success-1)',
    titleColor: 'var(--primitive-success)',
    title: 'Участвовать',
    subtitle: null,
    metricLabel: 'Запас',
    tagBg: 'var(--bg-success-3)',
    tagTextColor: 'var(--primitive-success)',
    icon: IconCheckmarkCircle,
  },
  caution: {
    bg: 'var(--bg-warning-1)',
    titleColor: 'var(--primitive-warning-2)',
    title: 'Осторожно',
    subtitle: 'Есть риск низкой прибыли',
    metricLabel: 'Запас',
    tagBg: 'var(--bg-warning-3)',
    tagTextColor: 'var(--primitive-warning-2)',
    icon: IconWarningTriangle,
  },
  danger: {
    bg: 'var(--bg-error-1)',
    titleColor: 'var(--primitive-error)',
    title: 'Отказаться',
    subtitle: null,
    metricLabel: 'Убыток',
    tagBg: 'var(--bg-error-3)',
    tagTextColor: 'var(--primitive-error)',
    icon: IconCrossCircle,
  },
}

function BodyRow({ color, label, value }: { color: string; label: string; value: number }) {
  return (
    <div className={styles.row}>
      <span className={styles.rowDot} style={{ background: color }} />
      <span className={`ts-400-m ${styles.rowLabel}`}>{label}</span>
      <span className="ts-500-m">{fmtMoney.format(value)}</span>
    </div>
  )
}

export default function ResultsSidebar({ state, results }: Props) {
  const { finalPrice, directCosts, overheadTotal, specificCosts,
    fullCost, profitAmount, taxAmount, verdict, nmccDiff, nmccDiffPercent } = results

  const key: VerdictKey = (results.isReady && verdict) ? verdict : 'none'
  const cfg = HEADER_CONFIG[key]
  const Icon = cfg.icon

  const metricAmount = verdict === 'danger'
    ? `−${fmtMoney.format(Math.abs(nmccDiff))}`
    : fmtMoney.format(nmccDiff)

  const tagText = verdict === 'danger'
    ? `− ${fmtPercent(Math.abs(nmccDiffPercent))}`
    : `+ ${fmtPercent(nmccDiffPercent)}`

  const rawItems = [
    { label: 'Прямые затраты', value: directCosts,   color: SEGMENT_COLORS[0] },
    { label: 'Накладные',      value: overheadTotal, color: SEGMENT_COLORS[2] },
    { label: 'Специфические',  value: specificCosts, color: SEGMENT_COLORS[3] },
    { label: 'Прибыль',        value: profitAmount,  color: SEGMENT_COLORS[4] },
    { label: 'Налоги',         value: taxAmount,     color: SEGMENT_COLORS[5] },
  ]
  const items = [...rawItems].sort((a, b) => b.value - a.value)

  return (
    <>
    <div className={styles.panel}>
      <div className={styles.header} style={{ background: cfg.bg, transition: 'background 0.4s ease' }}>
        <div className={styles.headerTitle}>
          {Icon && (
            <Icon style={{ color: cfg.titleColor, width: 24, height: 24, flexShrink: 0 }} />
          )}
          <span className="ts-600-xl" style={{ color: cfg.titleColor }}>{cfg.title}</span>
        </div>

        {cfg.metricLabel && verdict ? (
          <div className={styles.headerMetricBlock}>
            <span className="ts-500-s" style={{ color: 'var(--primitive-primary)' }}>{cfg.metricLabel}</span>
            <div className={styles.headerMetricRow}>
              <span className="ts-600-2xl" style={{ color: 'var(--primitive-primary)' }}>{metricAmount}</span>
              <span className={styles.tag} style={{ background: cfg.tagBg!, color: cfg.tagTextColor! }}>
                <span className="ts-500-xs">{tagText}</span>
              </span>
            </div>
            {cfg.subtitle && (
              <span className="ts-400-s" style={{ color: 'var(--primitive-primary)' }}>{cfg.subtitle}</span>
            )}
          </div>
        ) : cfg.subtitle ? (
          <span className="ts-400-s" style={{ color: 'var(--primitive-primary)', marginTop: 'calc(var(--spacing-2x) - var(--spacing-4x))' }}>{cfg.subtitle}</span>
        ) : null}
      </div>

      <div className={styles.body}>
        <div className={styles.stackedBar}>
          {items.map((item) => item.value > 0 && (
            <div
              key={item.label}
              className={styles.stackedSegment}
              style={{ flex: `0 0 ${finalPrice > 0 ? (item.value / finalPrice) * 100 : 0}%`, background: item.color }}
            />
          ))}
        </div>

        <div className={styles.list}>
          {items.map((item) => (
            <BodyRow key={item.label} color={item.color} label={item.label} value={item.value} />
          ))}
        </div>

        <div className={styles.divider} />

        <div className={styles.totalBlock}>
          <div className={styles.row}>
            <span className={`ts-600-xl ${styles.rowLabel}`}>Итого</span>
            <span className="ts-600-xl">{fmtMoney.format(finalPrice)}</span>
          </div>
          <div className={styles.row}>
            <div className={styles.rowLabelWithIcon}>
              <span className="ts-400-m">Себестоимость</span>
              <Tooltip
                placement="left"
                trigger={
                  <span className="hoverOpacity" style={{ display: 'flex', cursor: 'default' }}>
                    <QuestionCircle style={{ width: 20, height: 20, color: 'var(--primitive-secondary)' }} />
                  </span>
                }
              >
                <span className="ts-400-s">Стоимость без учёта налогов и прибыли</span>
              </Tooltip>
            </div>
            <span className="ts-500-m">{fmtMoney.format(fullCost)}</span>
          </div>
        </div>
      </div>

    </div>

    {results.isReady && (
      <PageAction
        title="Скачать отчёт PDF"
        leftAccessory={<ArrowDownIncomingCircle />}
        onClick={() => generatePdf(state, results)}
      />
    )}
    </>
  )
}
