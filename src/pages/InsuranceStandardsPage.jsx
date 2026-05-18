import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'

const ACUPUNCTURE = [
  {id :1,
   acupunctureName: '神経痛'
  },
  {id :2,
    acupunctureName: 'リウマチ'
  },
  {id :3,
    acupunctureName: '頚腕症候群'
  },
  {id :4,
    acupunctureName: '五十肩'
  },
  {id :5,
    acupunctureName: '腰痛症'
  },
  {id :6,
    acupunctureName: '頚椎捻挫後遺症'
  }
]

export default function InsuranceStandardsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-primary-800 text-white py-12 sm:py-16">
          <div className="section-container">
            <p className="text-sm text-primary-200 font-bold mb-3 tracking-wider">INSURANCE</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              施術の保険取り扱い基準について
            </h1>
            <p className="text-base sm:text-lg text-primary-100 leading-relaxed max-w-2xl">
              マッサージ施術、鍼灸施術共に、医療保険するためには<span className="font-bold text-amber-700 ">医師の同意が絶対条件</span>になりますが、この共通の制約の他にそれぞれの保険適用における違いについて簡単にまとめております。
            </p>
          </div>
        </section>

        <section className="py-20 bg-cream-50">
          <div className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700 leading-loose space-y-10">

            {/* ブロック1: マッサージ施術について */}
            <div className="space-y-4">
              <div className="text-center mb-10">
                <p className="text-sm text-primary-600 font-bold mb-2 tracking-wider">MASSAGE</p>
                <h3 className="text-3xl font-serif font-bold text-gray-800">
                  1. マッサージ施術について
                </h3>
                <div className="w-12 h-0.5 bg-primary-300 mx-auto mt-4"></div>
              </div >
              <div className="space-y-4">
                <div className="bg-white border border-cream-200 rounded-md p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-1.5 h-7 bg-primary-700 rounded-full shrink-0"></span>
                    <h4 className="font-bold text-primary-700 text-xl">対象疾患</h4>
                  </div>
                  <p className="text-base leading-relaxed">
                    マッサージ治療は、一律に病名による事なく、関節拘縮、脳梗塞や脳出血の後遺症による筋肉の麻痺、パーキンソン病などが原因で筋肉の固縮などの症状がある方が主な対象となります。
                  </p>
                </div>

                <div className="bg-white border border-cream-200 rounded-md p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-1.5 h-7 bg-primary-700 rounded-full shrink-0"></span>
                    <h4 className="font-bold text-primary-700 text-xl">マッサージの制約</h4>
                  </div>
                  <p className="text-base leading-relaxed">
                    <span className="font-bold text-amber-700">マッサージは原則として病名治療ではなく、症状に対する治療</span>とみなされますので、鍼灸のような制限はありません。マッサージ治療を受けている期間でも、保険医療機関での診療等は可能です。
                  </p>
                </div>
              </div>
            </div>

            {/* ブロック2: 鍼灸施術について */}
            <div className="space-y-4">
              <div className="text-center mb-10">
                <p className="text-sm text-primary-600 font-bold mb-2 tracking-wider">ACUPUNCTURE</p>
                <h3 className="text-3xl font-serif font-bold text-gray-800">
                  2. 鍼灸施術について
                </h3>
                <div className="w-12 h-0.5 bg-primary-300 mx-auto mt-4"></div>
              </div >
              <div className="space-y-4">
                <div className="bg-white border border-cream-200 rounded-md p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-1.5 h-7 bg-primary-700 rounded-full shrink-0"></span>
                    <h4 className="font-bold text-primary-700 text-xl">対象疾患</h4>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {ACUPUNCTURE.map((item) => (
                      <div
                        key={item.id}
                        className="bg-primary-50 border border-primary-200 rounded-full px-4 py-2 text-center text-primary-700 font-medium text-sm"
                      >
                        {item.acupunctureName}
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm text-gray-500">
                    ※ これらの6疾患と決まっており、その枠で保険適用が可能となります。
                  </p>
                </div>

                <div className="bg-white border border-cream-200 rounded-md p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-1.5 h-7 bg-primary-700 rounded-full shrink-0"></span>
                    <h4 className="font-bold text-primary-700 text-xl">鍼灸の制約</h4>
                  </div>
                  <p className="text-base leading-relaxed">
                    保険医療機関との同一病名での平行治療は禁止。（鍼灸治療中に、同じ病名で保険医療機関にて治療を受けたならば、保険での療養費は支給されません）。
                  </p>
                  <div className="mt-4 bg-cream-50 border-l-4 border-cream-200 rounded-md px-4 py-3">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <span className="font-bold text-gray-700">例：</span>五十肩で鍼灸治療をしている患者さんが、整形外科に行って電気治療をしたり湿布をもらってきたりした場合は、その月の鍼灸の療養費は支払われません。（保険適用されずに実費負担となります。）
                    </p>
                  </div>
                </div>
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
