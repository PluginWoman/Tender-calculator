import { useNavigate } from 'react-router-dom'
import { Button } from '@pluginwoman/t-ds'
import { Checkmark } from '@pluginwoman/t-ds/icons'
import { EXTERNAL_LINKS } from '../../constants/promo'
import styles from './AudienceCards.module.css'

interface CardAction {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'transparent' | 'white'
}

interface CardConfig {
  title: string
  description: string
  benefits: string[]
  actions: CardAction[]
}

export default function AudienceCards() {
  const navigate = useNavigate()

  const cards: CardConfig[] = [
    {
      title: 'Ещё не нашли тендер?',
      description: 'Подберите подходящие закупки и начните работу с тендерами вместе с Точка Закупки',
      benefits: [
        'Бесплатный поиск тендеров',
        'Бесплатный курс по работе с тендерами',
        'Сохраните шаблон расходов и вернитесь к расчёту после выбора тендера',
      ],
      actions: [
        { label: 'Найти тендер', onClick: () => window.open(EXTERNAL_LINKS.zakupki, '_blank') },
        { label: 'Получить курс', onClick: () => window.open(EXTERNAL_LINKS.course, '_blank'), variant: 'white' },
      ],
    },
    {
      title: 'Уже нашли тендер?',
      description: 'Оцените рентабельность закупки до подачи заявки.',
      benefits: [
        'Рассчитаем себестоимость и итоговую цену',
        'Учтём налоги, накладные и финансовую нагрузку',
        'Покажем прибыль и дадим рекомендацию по участию',
      ],
      actions: [
        { label: 'Перейти к расчёту', onClick: () => navigate('/calculator') },
      ],
    },
  ]

  return (
    <section className={styles.section}>
      <h2 className="ts-600-3xl">Выберите, с чего начать</h2>
      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.title} className={styles.card}>
            <div className={styles.text}>
              <h3 className="ts-600-2xl" style={{ color: 'var(--primitive-primary)', margin: 0 }}>{card.title}</h3>
              <p className="ts-500-m" style={{ color: 'var(--primitive-secondary)', margin: 0 }}>{card.description}</p>
            </div>
            <ul className={styles.benefits}>
              {card.benefits.map((benefit) => (
                <li key={benefit} className={styles.benefit}>
                  <Checkmark style={{ color: 'var(--primitive-brand)', width: 24, height: 24, flexShrink: 0 }} />
                  <span className="ts-400-m">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className={styles.buttons}>
              {card.actions.map((action) => (
                <Button key={action.label} variant={action.variant ?? 'primary'} size="m" onClick={action.onClick}>
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
