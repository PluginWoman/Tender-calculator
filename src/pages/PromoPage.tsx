import { useNavigate } from 'react-router-dom'
import { PromoPageBanner } from '@pluginwoman/t-ds'

export default function PromoPage() {
  const navigate = useNavigate()

  return (
    <PromoPageBanner
      title="Калькулятор цены поставщика"
      adaptiveTitle="Калькулятор цены поставщика"
      description="Инструмент для расчёта НМЦК и анализа рентабельности участия в госзакупках"
      adaptiveDescription="Расчёт НМЦК и анализ рентабельности госзакупок"
      buttonLabel="Открыть калькулятор"
      hasImage={false}
      onButtonClick={() => navigate('/calculator')}
    />
  )
}
