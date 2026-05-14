import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'
import PriceSimulator from '../components/sections/PriceSimulator'
import InsuranceCheck from '../components/sections/InsuranceCheck'

export default function PricePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="bg-primary-800 text-white py-12 sm:py-16">
          <div className="section-container">
            <p className="text-sm text-primary-200 font-bold mb-3 tracking-wider">PRICE & INSURANCE</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold">料金・保険について</h1>
            <p className="text-base text-primary-100 mt-3 leading-relaxed">
              医療保険が使えるかどうかと、おおよその自己負担額をご確認いただけます。
            </p>
          </div>
        </div>
        <InsuranceCheck />
        <PriceSimulator />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
