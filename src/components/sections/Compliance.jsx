const items = [
  {
    title: '個人情報の保護',
    body: '個人情報保護法を遵守し、施術・ご連絡以外の目的では使用しません。第三者への無断提供は行いません。',
  },
  {
    title: '不正請求は行いません',
    body: '実施した施術のみを正確に保険請求します。施術記録は適切に管理し、保険者からの照会には誠実に対応します。',
  },
  {
    title: '安全と衛生',
    body: '施術前の手指消毒・器具の洗浄を徹底し、必要な備品は使い捨てで使用しています。',
  },
  {
    title: '資格と届出',
    body: '全施術者はあん摩マッサージ指圧師・はり師・きゅう師の国家資格を保有しています。施術所の届出も適正に行っています。',
  },
]

export default function Compliance() {
  return (
    <section className="py-14 sm:py-20 bg-cream-50 border-y border-cream-200">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">COMPLIANCE</p>
          <h2 className="section-title">法令遵守と当院の方針</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            訪問マッサージを安心してご利用いただけるよう、以下を遵守しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((it) => (
            <div key={it.title} className="bg-white border border-gray-200 rounded-md p-6">
              <h3 className="text-lg font-serif font-bold text-primary-800 mb-3 pb-2 border-b border-gray-200">
                {it.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
