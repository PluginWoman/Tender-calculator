import { useCalculator } from '../hooks/useCalculator'
import CalculatorForm from '../components/calculator/CalculatorForm'
import ResultsSidebar from '../components/calculator/ResultsSidebar'
import styles from './CalculatorPage.module.css'

export default function CalculatorPage() {
  const { state, results, update, addSpecialist, removeSpecialist, updateSpecialist } =
    useCalculator()

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className="ts-600-2xl">Калькулятор цены поставщика</h1>
        <p className="ts-400-m" style={{ color: 'var(--primitive-secondary)', marginTop: 'var(--spacing-1x)' }}>
          Расчёт НМЦК и анализ рентабельности участия в госзакупках
        </p>
      </header>

      <div className={styles.layout}>
        <div className={styles.formColumn}>
          <CalculatorForm
            state={state}
            results={results}
            update={update}
            addSpecialist={addSpecialist}
            removeSpecialist={removeSpecialist}
            updateSpecialist={updateSpecialist}
          />
        </div>
        <aside className={styles.sidebarColumn}>
          <ResultsSidebar results={results} />
        </aside>
      </div>
    </div>
  )
}
