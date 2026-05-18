import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'

export default function ServicePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-primary-800 text-white py-12 sm:py-16">
          <div className="section-container">
            <p className="text-sm text-primary-200 font-bold mb-3 tracking-wider">SERVICE</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              当院の施術 <span className="font-bold text-amber-700">３つ</span>のポイント
            </h1>
            <p className="text-base sm:text-lg text-primary-100 leading-relaxed max-w-2xl">
              当院でご提供している施術内容についてご案内します。
            </p>
          </div>
        </section>

        <section className="py-20 bg-cream-50">
          <div className="max-w-3xl mx-auto px-4 text-base sm:text-lg text-gray-700 leading-loose">
            <div className="space-y-6">

              <div className="bg-white border border-cream-200 rounded-md p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-700 text-white font-bold shrink-0">1</span>
                  <h4 className="font-bold text-primary-700 text-xl">解剖学的正位を目標とした施術</h4>
                </div>
                <div className="space-y-4 text-base leading-relaxed">
                  <p>筋肉の麻痺、あるいは長期寝たきりなどが原因で、関節が固まってしまっている場合は、この本来のストレスフリーの状態からは外れた形になっているケースが多く見られます。</p>
                  <p>施術の際には、この姿勢を維持出来るようにする事を目標として、筋肉の緊張を緩める為の施術を行います。</p>
                </div>
              </div>

              <div className="bg-white border border-cream-200 rounded-md p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-700 text-white font-bold shrink-0">2</span>
                  <h4 className="font-bold text-primary-700 text-xl">関節リラクゼーションとの併用</h4>
                </div>
                <div className="space-y-4 text-base leading-relaxed">
                  <p>筋肉が固まってしまって関節も固まっている場合、ただ単にその周囲の筋肉をほぐすだけでは思うように動かないケースが多々あります。</p>
                  <p>当院では、単にマッサージ（揉みほぐし）だけでなく、関節を動かす筋肉や腱へのピンポイント刺激、ならびに運動法を併用する事で、施術効果のアップを狙います。</p>
                </div>
              </div>

              <div className="bg-white border border-cream-200 rounded-md p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-700 text-white font-bold shrink-0">3</span>
                  <h4 className="font-bold text-primary-700 text-xl">経穴（ツボ）を意識した施術</h4>
                </div>
                <p className="text-base leading-relaxed">一般的な「揉みほぐし」を中心とした施術だけでなく、東洋医学的な立場から見て、より効果アップの期待が見込める経穴（ツボ）への刺激を意識して施術いたします。</p>
              </div>

            </div>
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
