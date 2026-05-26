import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'
import BasicPriceTable from '../components/sections/BasicPriceTable'
import PriceSimulator from '../components/sections/PriceSimulator'
import InsuranceCategoryInfo from '../components/sections/InsuranceCategoryInfo'
import { Helmet } from 'react-helmet-async'


export default function PricePage() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>料金案内｜ボディケアつしま</title>
        <meta name="description" content="岡山市の訪問マッサージ、ボディケアつしまの料金案内です。医療保険適用で1割負担の方は1回数百円から。実費の場合の料金もご確認いただけます。お気軽にご相談ください。" />
      </Helmet>
      <Header />
      <main>
        <div className="bg-primary-800 text-white py-12 sm:py-16">
          <div className="section-container">
            <p className="text-sm text-primary-200 font-bold mb-3 tracking-wider">PRICE</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold">料金について</h1>
            <p className="text-base text-primary-100 mt-3 leading-relaxed">
              施術費用と、おおよその自己負担額をご確認いただけます。
            </p>
          </div>
        </div>
        <BasicPriceTable />
        <PriceSimulator />
        <InsuranceCategoryInfo />
        
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
