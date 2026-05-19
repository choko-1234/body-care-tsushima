import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'
import FadeIn from '../components/layout/FadeIn'
import Hero from '../components/sections/Hero'
import RepeatRateBanner from '../components/sections/RepeatRateBanner'
import WorriesSection from '../components/sections/WorriesSection'
import ServiceDefinitionSection from '../components/sections/ServiceDefinitionSection'
import AboutUsSection from '../components/sections/AboutUsSection'
import TrialForm from './TrialForm'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 0. リピート率バナー */}
        <FadeIn>
          <RepeatRateBanner />
        </FadeIn>
        {/* 1. キャッチコピー */}
        <FadeIn delay={150}>
          <Hero />
        </FadeIn>
        {/* 2. お悩みチェックリスト */}
        <FadeIn>
          <WorriesSection />
        </FadeIn>
        {/* 3. サービスの定義 */}
        <FadeIn>
          <ServiceDefinitionSection />
        </FadeIn>
        {/* 4. サービス紹介 + ご利用者様の声（SEO用） */}
        <FadeIn>
          <AboutUsSection />
        </FadeIn>
        {/* 無料体験フォーム */}
        {/*<TrialForm /> */}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
