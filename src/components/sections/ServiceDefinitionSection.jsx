const targets = [
  '脳卒中（脳梗塞・脳出血）の後遺症で麻痺がある方',
  '脳神経疾患により、筋肉の萎縮や固縮がある方',
  '関節拘縮で、関節が動かしにくくなっている方',
  'ケガや病気で歩行が困難な方、寝たきりに近い方',
]

export default function ServiceDefinitionSection() {
  return (
    <section className="py-14 sm:py-20 bg-cream-50 border-y border-cream-200">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">ABOUT OUR SERVICE</p>
          <h2 className="section-title">ボディケアつしまの訪問マッサージとは</h2>
        </div>

        {/* Main statement */}
        <div className="bg-white border border-gray-200 rounded-md p-7 sm:p-10 mb-10">
          <p className="text-lg sm:text-xl text-gray-800 leading-[1.9] font-serif">
            「ボディケアつしま」の訪問マッサージは、<br className="hidden sm:block" />
            <span className="text-primary-700 font-bold">国家資格を持つ施術者</span>がご自宅や施設へお伺いして、<br className="hidden sm:block" />
            要介護者の方を対象に、
            <span className="text-primary-700 font-bold">医療保険を適用</span>して、<br className="hidden sm:block" />
            マッサージや簡単な機能訓練（リハビリ）を行うサービスです。
          </p>
        </div>

        {/* Target */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-md p-6 sm:p-8">
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-4 pb-3 border-b border-gray-200">
              主な対象となる方
            </h3>
            <ul className="space-y-3">
              {targets.map((t) => (
                <li key={t} className="flex items-start gap-3 text-base text-gray-700 leading-relaxed">
                  <span className="text-primary-600 shrink-0 mt-1.5">●</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-gray-500 leading-relaxed">
              ※ 整形外科疾患（腰痛・肩こりのみ等）は実費でのご対応となります。
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-md p-6 sm:p-8">
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-4 pb-3 border-b border-gray-200">
              当院が大切にしていること
            </h3>
            <dl className="space-y-4 text-base text-gray-700 leading-relaxed">
              <div>
                <dt className="font-bold text-primary-700 mb-1">不正な保険請求は行いません</dt>
                <dd className="text-sm">実施した施術のみを正しく請求します。記録も適切に管理しています。</dd>
              </div>
              <div>
                <dt className="font-bold text-primary-700 mb-1">経済的な負担を抑えます</dt>
                <dd className="text-sm">医療保険適用で、1回あたりのご負担は1割負担で数百円から。長く続けやすい料金です。</dd>
              </div>
              <div>
                <dt className="font-bold text-primary-700 mb-1">無料の体験施術ができます</dt>
                <dd className="text-sm">「合うかどうか試してから決めたい」というお声に、無料体験でお応えしています。</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
