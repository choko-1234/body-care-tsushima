import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'

export default function FirstTimePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-primary-800 text-white py-12 sm:py-16">
          <div className="section-container">
            <p className="text-sm text-primary-200 font-bold mb-3 tracking-wider">FOR FIRST-TIME VISITORS</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              初めての方へ
            </h1>
            <p className="text-base sm:text-lg text-primary-100 leading-relaxed max-w-2xl">
              訪問マッサージをご検討中の方に向けて、サービス内容・対象の方・ご利用までのご案内をまとめます。
            </p>
          </div>
        </section>

        <section className="py-20 bg-cream-50">
          <div className="section-container text-center">
            <p className="text-lg text-gray-600">このページは現在準備中です。</p>
            <p className="text-sm text-gray-500 mt-2">お問い合わせは下記よりお気軽にどうぞ。</p>
          </div>
        </section>
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
