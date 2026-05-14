import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'
import Hero from '../components/sections/Hero'
import WorriesSection from '../components/sections/WorriesSection'
import ServiceDefinitionSection from '../components/sections/ServiceDefinitionSection'
import MenuPriceSection from '../components/sections/MenuPriceSection'
import TrialForm from '../components/sections/TrialForm'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 1. キャッチコピー */}
        <Hero />
        {/* 2. お悩みチェックリスト */}
        <WorriesSection />
        {/* 3. サービスの定義 */}
        <ServiceDefinitionSection />
        {/* 4. メニューと料金表 */}
        <MenuPriceSection />
        {/* 無料体験フォーム */}
        <TrialForm />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
