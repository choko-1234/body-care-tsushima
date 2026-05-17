import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'
import Hero from '../components/sections/Hero'
import RepeatRateBanner from '../components/sections/RepeatRateBanner'
import WorriesSection from '../components/sections/WorriesSection'
import ServiceDefinitionSection from '../components/sections/ServiceDefinitionSection'
import AboutUsSection from '../components/sections/AboutUsSection'
import TrialForm from '../components/sections/TrialForm'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 0. リピート率バナー */}
        <RepeatRateBanner />
        {/* 1. キャッチコピー */}
        <Hero />
        {/* 2. お悩みチェックリスト */}
        <WorriesSection />
        {/* 3. サービスの定義 */}
        <ServiceDefinitionSection />
        {/* 4. サービス紹介 + ご利用者様の声（SEO用） */}
        <AboutUsSection />
        {/* 無料体験フォーム */}
        {/*<TrialForm /> */}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
