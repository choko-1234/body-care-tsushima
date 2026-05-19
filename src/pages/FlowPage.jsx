import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'
import HowToUse from '../components/sections/HowToUse'
import MapSection from '../components/sections/MapSection'

export default function FlowPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="bg-primary-800 text-white py-12 sm:py-16">
          <div className="section-container">
            <p className="text-sm text-primary-200 font-bold mb-3 tracking-wider">FLOW & ACCESS</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold">ご利用の流れ・アクセス</h1>
            <p className="text-base text-primary-100 mt-3 leading-relaxed">
              お問い合わせから施術開始までの流れと、当院の所在地・対応エリアです。
            </p>
          </div>
        </div>
        <HowToUse />
        <MapSection />
      </main>
      <div className="bg-cream-100 py-5 text-center border-t border-cream-200">
        <Link to="/" className="text-sm text-primary-700 hover:underline font-medium">
          ← トップページへ戻る
        </Link>
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
