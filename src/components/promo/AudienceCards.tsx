import { useNavigate } from 'react-router-dom'
import { Button } from '@pluginwoman/t-ds'
import { EXTERNAL_LINKS } from '../../constants/promo'
import styles from './AudienceCards.module.css'

interface CardAction {
  label: string
  onClick: () => void
}

interface CardConfig {
  title: string
  description: string
  actions: CardAction[]
}

export default function AudienceCards() {
  const navigate = useNavigate()

  const cards: CardConfig[] = [
    {
      title: 'Только начинаете',
      description: 'Найдите первую закупку бесплатно и получите курс по работе с тендерами.',
      actions: [
        { label: 'Найти тендер', onClick: () => window.open(EXTERNAL_LINKS.zakupki, '_blank') },
        { label: 'Получить курс', onClick: () => window.open(EXTERNAL_LINKS.course, '_blank') },
      ],
    },
    {
      title: 'Уже знаете что ищете',
      description: 'Сохраните шаблон расходов и продолжите расчёт после выбора тендера.',
      actions: [
        { label: 'Создать шаблон', onClick: () => navigate('/calculator') },
      ],
    },
    {
      title: 'Уже нашли тендер',
      description: 'Введите параметры закупки и получите расчёт за несколько минут.',
      actions: [
        { label: 'Открыть калькулятор', onClick: () => navigate('/calculator') },
      ],
    },
  ]

  return (
    <section className={styles.section}>
      <h2 className="ts-600-5xl">Для всех и каждого</h2>
      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.title} className={styles.card}>
            <div className={styles.text}>
              <h3 className="ts-600-2xl" style={{ color: 'var(--primitive-primary)', margin: 0 }}>{card.title}</h3>
              <p className="ts-500-m" style={{ color: 'var(--primitive-secondary)', margin: 0 }}>{card.description}</p>
            </div>
            <div className={styles.buttons}>
              {card.actions.map((action) => (
                <Button key={action.label} variant="secondary" size="m" onClick={action.onClick}>
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
