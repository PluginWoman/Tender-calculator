import { useState } from 'react'
import { useCalculator } from '../hooks/useCalculator'
import CalculatorForm from '../components/calculator/CalculatorForm'
import ResultsSidebar from '../components/calculator/ResultsSidebar'
import DebugPanel from '../components/debug/DebugPanel'
import styles from './CalculatorPage.module.css'

export default function CalculatorPage() {
  const { state, results, update, addSpecialist, removeSpecialist, updateSpecialist,
    addGoodsItem, removeGoodsItem, updateGoodsItem, reset } =
    useCalculator()

  const [formKey, setFormKey] = useState(0)

  const handleReset = () => {
    if (!window.confirm('Сбросить форму до стартового состояния? Все введённые данные будут удалены.')) return
    reset()
    setFormKey(k => k + 1)
  }

  return (
    <>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className="ts-600-4xl">Калькулятор цены поставщика</h1>
          <p className="ts-400-m" style={{ color: 'var(--primitive-secondary)', marginTop: 'var(--content-element-list-spacing)' }}>
            Расчёт НМЦК и анализ рентабельности участия в госзакупках
          </p>
        </header>

        <div className={styles.layout}>
          <div className={styles.formColumn}>
            <CalculatorForm
              key={formKey}
              state={state}
              update={update}
              addSpecialist={addSpecialist}
              removeSpecialist={removeSpecialist}
              updateSpecialist={updateSpecialist}
              addGoodsItem={addGoodsItem}
              removeGoodsItem={removeGoodsItem}
              updateGoodsItem={updateGoodsItem}
            />
          </div>
          <aside className={styles.sidebarColumn}>
            <ResultsSidebar results={results} />
          </aside>
        </div>
      </div>
      <DebugPanel results={results} update={update} onReset={handleReset} />
    </>
  )
}
