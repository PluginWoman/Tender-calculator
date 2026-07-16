import { Tag, Button } from '@pluginwoman/t-ds'
import { EXTERNAL_LINKS } from '../../constants/promo'
import styles from './HowItWorks.module.css'

const STEPS = [
  {
    title: 'Ознакомьтесь с тендером',
    description: 'Если ещё не выбрали закупку, воспользуйтесь сервисом Точка Закупки',
  },
  {
    title: 'Введите расходы',
    description: 'Заполните расходы вашей компании. Калькулятор автоматически учтёт прямые, накладные и специфические расходы, налоги и финансовую нагрузку',
  },
  {
    title: 'Получите рекомендацию',
    description: 'Сервис рассчитает итоговую цену, покажет прибыль и подскажет, стоит ли участвовать в закупке',
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Как это работает</h2>
      <div className={styles.steps}>
        {STEPS.map((step, i) => (
          <div key={step.title} className={styles.step}>
            <div className={styles.stepText}>
              <Tag variant="filled" shape="square" size="l" className={styles.stepTag}>Шаг {i + 1}</Tag>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className="ts-400-l" style={{ margin: 0, color: 'var(--primitive-secondary)' }}>{step.description}</p>
              {i === 0 && (
                <Button variant="primary" size="s" onClick={() => window.open(EXTERNAL_LINKS.zakupki, '_blank')} isHugWidth>
                  Перейти в Точка Закупки
                </Button>
              )}
            </div>
            <div className={styles.imagePlaceholder} />
          </div>
        ))}
      </div>
    </section>
  )
}
