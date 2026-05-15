import { Link } from 'react-router-dom'

const menus = [
  {
    name: 'マッサージ施術',
    catch: '麻痺・拘縮のある方に',
    description: '硬くなった筋肉をほぐし、血行を促します。脳卒中後遺症や関節拘縮の方に行う、もっとも基本的な施術です。',
    duration: '約20分〜',
    insurance: '医療保険適用',
    note: '医師の同意書が必要です',
  },
  {
    name: '変形徒手矯正術',
    catch: '関節の動きをよくする',
    description: '動きの悪くなった関節を、徒手で少しずつ動かして可動域を広げます。マッサージと併用して行います。',
    duration: '1関節 約5分〜',
    insurance: '医療保険適用',
    note: '医師の同意書が必要です',
  },
  {
    name: '機能訓練（リハビリ）',
    catch: 'ご自宅での生活を支える',
    description: '寝返り・起き上がり・立ち上がり・歩行など、生活に必要な動作の練習を行います。',
    duration: '約10分〜',
    insurance: 'マッサージと併用',
    note: '退院後の方にもおすすめ',
  },
  {
    name: '整形外科疾患（実費）',
    catch: '保険適用外の方向け',
    description: '腰痛・肩こり・膝痛など、保険適用外の症状に対応します。料金はお問い合わせください。',
    duration: '約30分〜',
    insurance: '実費（自費）',
    note: '料金は事前にご案内します',
  },
]

const priceTable = [
  { label: '1割負担の方', range: '約300〜500円' },
  { label: '2割負担の方', range: '約600〜1,000円' },
  { label: '3割負担の方', range: '約900〜1,500円' },
]

export default function MenuPriceSection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="section-container">
        <div className="mb-10">
          
          <p className="section-lead">SERVICE & PRICE</p>
          <h2 className="section-title">施術メニューと料金</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            医療保険適用の施術と、保険適用外（実費）の施術をご用意しています。<br className="hidden sm:block" />
            ご利用前に内容と料金を必ずご説明しますので、ご安心ください。
          </p>
        </div>

        {/* Menu list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {menus.map((m) => (
            <div key={m.name} className="bg-cream-50 border border-cream-200 rounded-md p-6 sm:p-7">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <p className="text-xs text-primary-700 font-bold tracking-widest mb-2">
                    {m.catch}
                  </p>
                  <h3 className="text-xl font-serif font-bold text-gray-800">{m.name}</h3>
                </div>
                <span className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded border ${
                  m.insurance === '実費（自費）'
                    ? 'bg-amber-50 text-amber-800 border-amber-300'
                    : 'bg-primary-50 text-primary-800 border-primary-300'
                }`}>
                  {m.insurance}
                </span>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mb-4">{m.description}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 pt-3 border-t border-cream-200">
                <span>所要時間：{m.duration}</span>
                <span className="text-gray-400">／</span>
                <span>{m.note}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Price table */}
        <div className="bg-cream-50 border border-cream-200 rounded-md overflow-hidden">
          <div className="px-6 py-5 bg-primary-700 text-white">
            <h3 className="text-lg font-serif font-bold">医療保険適用時の1回あたりの自己負担（目安）</h3>
            <p className="text-sm text-primary-100 mt-1">
              施術内容・距離・加算により金額は変動します。詳細はお問い合わせください。
            </p>
          </div>
          <table className="w-full text-base">
            <tbody>
              {priceTable.map((p, i) => (
                <tr key={p.label} className={i % 2 === 0 ? 'bg-white' : 'bg-cream-50'}>
                  <th className="text-left py-4 px-5 sm:px-7 font-bold text-gray-700 w-1/2 border-b border-cream-200">
                    {p.label}
                  </th>
                  <td className="py-4 px-5 sm:px-7 text-primary-700 font-bold border-b border-cream-200">
                    {p.range}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-4 bg-cream-100 text-sm text-gray-600 leading-relaxed">
            <p>※ 医師の同意書が必要です。同意書の取得は当院が手続きをサポートします。</p>
            <p>※ 距離加算（自宅までの移動）が含まれる場合があります。</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/price"
            className="inline-flex items-center gap-2 text-base text-primary-700 hover:text-primary-800 font-bold underline underline-offset-4"
          >
            料金・保険のしくみを詳しく見る
            <span>→</span>
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-primary-700 text-white rounded-md p-8 sm:p-10 text-center">
          <p className="text-xl sm:text-2xl font-serif font-bold mb-3">
            まずは無料体験で、お試しください
          </p>
          <p className="text-sm sm:text-base text-primary-100 mb-7 leading-relaxed">
            実際にスタッフが伺い、施術を体験していただけます。<br className="hidden sm:block" />
            体験のみでも結構です。ご家族からのお申込みもお気軽にどうぞ。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#trial-form" className="btn-primary bg-white text-primary-700 hover:bg-primary-50 text-lg py-4 px-8">
              無料体験を申し込む
            </a>
            <a href="tel:086-238-1733" className="btn-tel text-lg py-4 px-8">
              086-238-1733へ電話
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
