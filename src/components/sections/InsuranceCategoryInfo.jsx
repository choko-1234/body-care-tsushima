const specialCategories = [
  {
    no: '①',
    title: '原爆手帳をお持ちの方',
    burden: '自己負担ゼロ',
    burdenNote: '（全額公費負担）',
    body: '原爆手帳をお持ちの方は、自己負担なしでご利用いただけます。',
    tone: 'free',
  },
  {
    no: '②',
    title: '特定疾患（難病）認定の方',
    burden: '一般の方と同じ',
    burdenNote: '（1〜3割負担）',
    body: '都道府県から特定疾患医療受給者証の交付を受けている方は、一般の医療・薬剤等の負担については一部または全額公費負担がありますが、訪問医療マッサージに関しては、岡山県岡山市の場合、公費負担はありません。',
    tone: 'normal',
  },
  {
    no: '③',
    title: '心身障害者医療費受給資格証をお持ちの方',
    burden: '基本 1割負担',
    burdenNote: '（所得に応じて自己負担限度額あり）',
    body: '基本的に1割負担となりますが、所得に応じて、月ごとの自己負担限度額が設定されています。',
    tone: 'low',
  },
  {
    no: '④',
    title: '生活保護を受けている方',
    burden: '自己負担ゼロ',
    burdenNote: '（公費負担）',
    body: '福祉事務所で医療費の公費負担を認められている方は、自己負担ゼロでご利用いただけます。まずは担当の主治医にご相談いただき、ご同意が得られたらこちらにご連絡ください。当院からケースワーカーに連絡し、給付要否意見書の発行を依頼します。',
    note: '当院は、生活保護法の規定による指定施術者として、令和2年3月1日付けで岡山市の指定を正式に受けています。（指定番号 第42057号）',
    tone: 'free',
  },
]

const toneStyles = {
  free: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  low: 'bg-sky-50 text-sky-800 border-sky-200',
  normal: 'bg-gray-50 text-gray-700 border-gray-200',
}

export default function InsuranceCategoryInfo() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">YOUR PAYMENT</p>
          <h2 className="section-title">利用代金（自己負担分）について</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            お持ちの保険証や受給者証の種類によって、自己負担額が変わります。<br className="hidden sm:block" />
            ご自身がどの区分に当てはまるかをご確認ください。
          </p>
        </div>

        {/* 一般の方 */}
        <div className="bg-cream-50 border border-cream-200 rounded-md p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs bg-primary-700 text-white font-bold px-3 py-1 rounded-full">一般の方</span>
            <h3 className="text-xl font-bold text-gray-800">医療保険証をお持ちの方</h3>
          </div>
          <p className="text-base text-gray-700 leading-relaxed mb-5">
            医療保険証（健康保険証）に記載されている自己負担分（<span className="font-bold">1割・2割・3割</span>）のみ、お支払いいただきます。
          </p>

          <div className="bg-white border border-gray-200 rounded-md p-5 sm:p-6">
            <p className="text-sm text-primary-700 font-bold mb-3">具体例</p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
              脳梗塞後遺症による麻痺で歩行困難な方に、片道1.7kmのご自宅へ訪問マッサージを行った場合の1回あたりの利用代金（1割負担の場合）
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded">
                <span className="text-sm text-gray-600">訪問施術料（全5部位）</span>
                <span className="text-base font-serif font-bold text-gray-800">
                  4,550<span className="text-xs font-normal ml-0.5">円</span>
                </span>
              </div>
              <div className="text-center text-gray-400 text-xl">↓ 1割負担</div>
              <div className="flex items-center justify-between bg-primary-700 text-white px-4 py-4 rounded">
                <span className="text-sm font-bold">実際のお支払い</span>
                <span className="text-2xl font-serif font-bold">
                  455<span className="text-sm font-normal ml-0.5">円</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 特定の方 */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs bg-amber-700 text-white font-bold px-3 py-1 rounded-full">特定の方</span>
            <h3 className="text-xl font-bold text-gray-800">下記に該当する方</h3>
          </div>

          <div className="space-y-4">
            {specialCategories.map((c) => (
              <div key={c.no} className="bg-white border border-gray-200 rounded-md p-5 sm:p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-xl font-bold text-primary-700 shrink-0">{c.no}</span>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2">{c.title}</h4>
                    <span className={`inline-block text-sm font-bold px-3 py-1 rounded border ${toneStyles[c.tone]}`}>
                      {c.burden}<span className="text-xs font-normal ml-1">{c.burdenNote}</span>
                    </span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed pl-8">
                  {c.body}
                </p>
                {c.note && (
                  <p className="text-xs text-gray-600 leading-relaxed pl-8 mt-3 bg-cream-50 border-l-2 border-primary-300 px-3 py-2 rounded-r">
                    {c.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 保険適用外の方への注意 */}
        <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 px-5 py-4 rounded">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-bold text-amber-800">※ 保険適用ができない方へ</span><br />
            医師のご同意が得られない場合は、ご希望に応じて実費（10割）で対応させていただきます。ただし、訪問可能距離に限度がありますので、別途ご相談ください。
          </p>
        </div>
      </div>
    </section>
  )
}
