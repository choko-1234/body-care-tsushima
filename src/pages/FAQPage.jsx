import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'
import FAQ from '../components/sections/FAQ'
import { Link } from 'react-router-dom'

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="bg-primary-800 text-white py-12 sm:py-16">
          <div className="section-container">
            <p className="text-sm text-primary-200 font-bold mb-3 tracking-wider">FAQ</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold">よくあるご質問(まだ作成中)</h1>
            <p className="text-base text-primary-100 mt-3 leading-relaxed">
              保険・費用・施術内容について、よくいただくご質問をまとめました。
            </p>
          </div>
        </div>
        <FAQ />
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
