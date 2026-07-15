import { PromoPageHorizontalCard } from '@pluginwoman/t-ds'
import { EXTERNAL_LINKS } from '../../constants/promo'

export default function FinalCta() {
  return (
    <PromoPageHorizontalCard
      variant="accent"
      title="Нашли выгодный тендер?"
      description="Продолжайте работу в Точка Закупки: ищите новые закупки, сохраняйте интересные тендеры и возвращайтесь в калькулятор для оценки их рентабельности."
      buttonLabel="Перейти в Точка Закупки"
      onButtonClick={() => window.open(EXTERNAL_LINKS.zakupki, '_blank')}
    />
  )
}
