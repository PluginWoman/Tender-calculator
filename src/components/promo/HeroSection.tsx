import { useNavigate } from 'react-router-dom'
import { PromoPageBanner } from '@pluginwoman/t-ds'
import heroIllustration from '../../assets/hero-illustration.svg'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <PromoPageBanner
      title={<>Ищите выгоду,<br />а не просто контракт</>}
      adaptiveTitle={<>Ищите выгоду,<br />а не просто контракт</>}
      description="Рассчитайте прибыль и финансовую нагрузку до подачи заявки"
      adaptiveDescription="Рассчитайте прибыль и финансовую нагрузку до подачи заявки"
      buttonLabel="Рассчитать тендер"
      imageSrc={heroIllustration}
      onButtonClick={() => navigate('/calculator')}
      className={styles.banner}
    />
  )
}
