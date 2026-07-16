import HeroSection from '../components/promo/HeroSection'
import AudienceCards from '../components/promo/AudienceCards'
import HowItWorks from '../components/promo/HowItWorks'
import styles from './PromoPage.module.css'

export default function PromoPage() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <AudienceCards />
      <HowItWorks />
    </div>
  )
}
