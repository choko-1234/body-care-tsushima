const bodyParts = [
  { label: '体', sub: '頭・胴体' },
  { label: '右手', sub: '右上肢' },
  { label: '左手', sub: '左上肢' },
  { label: '右足', sub: '右下肢' },
  { label: '左足', sub: '左下肢' },
]

const massageFees = [
  { parts: 1, price: 2750 },
  { parts: 2, price: 3200 },
  { parts: 3, price: 3650 },
  { parts: 4, price: 4100 },
  { parts: 5, price: 4550, recommended: true },
]

export default function BasicPriceTable() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">BASIC PRICE</p>
          <h2 className="section-title">訪問施術料（基本料金）</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            マッサージ代金は厚生労働省の通達により全国一律で定められています。<br className="hidden sm:block" />
            以下は<span className="font-bold text-amber-700">保険適用前</span>の金額です。実際にお支払いいただく金額ではありません。
          </p>
        </div>

        {/* 5部位の図解 */}
        <div className="bg-cream-50 border border-cream-200 rounded-md p-6 sm:p-8 mb-8">
          <p className="text-base font-bold text-gray-700 mb-2">
            体は<span className="text-primary-700 text-xl mx-1">5つ</span>の部位に分かれます
          </p>
          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            通常は半身麻痺等の場合でも、全身のバランスを考えて<span className="font-bold">基本的に全部位を施術</span>いたします。
          </p>
          <div className="grid grid-cols-5 gap-2 sm:gap-3">
            {bodyParts.map((p) => (
              <div
                key={p.label}
                className="bg-white border border-primary-200 rounded-md p-3 sm:p-4 text-center"
              >
                <p className="text-base sm:text-lg font-bold text-primary-800">{p.label}</p>
                <p className="text-xs text-gray-500 mt-1">{p.sub}</p>
              </div>
            ))}
          </div>
          <img src="/human.jpeg" alt="人体の5部位" className="..." />
        </div>

        {/* マッサージ料金表 */}
        <div className="bg-white border border-gray-200 rounded-md overflow-hidden mb-6">
          <div className="bg-primary-700 text-white px-5 py-3">
            <p className="font-bold text-base">マッサージ施術料</p>
          </div>
          <div className="divide-y divide-gray-200">
            {massageFees.map((f) => (
              <div
                key={f.parts}
                className={`flex items-center justify-between px-5 py-4 ${
                  f.recommended ? 'bg-primary-50' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-base text-gray-700">
                    1回 <span className="font-bold text-lg text-primary-800">{f.parts}</span> 部位
                  </span>
                  {f.recommended && (
                    <span className="text-xs bg-primary-700 text-white px-2 py-0.5 rounded">
                      全部位
                    </span>
                  )}
                </div>
                <p className="text-xl font-serif font-bold text-gray-800">
                  {f.price.toLocaleString()}<span className="text-sm font-normal ml-0.5">円</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 追加施術 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-md p-5">
            <p className="text-sm text-gray-500 font-bold mb-1">追加施術 ①</p>
            <p className="text-base font-bold text-gray-800 mb-2">温罨法（ホットパック等）</p>
            <p className="text-xl font-serif font-bold text-gray-800">
              + 180<span className="text-sm font-normal ml-0.5">円 / 回</span>
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-md p-5">
            <p className="text-sm text-gray-500 font-bold mb-1">追加施術 ②</p>
            <p className="text-base font-bold text-gray-800 mb-2">変形徒手矯正術</p>
            <p className="text-xl font-serif font-bold text-gray-800">
              + 470<span className="text-sm font-normal ml-0.5">円 / 1肢につき</span>
            </p>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              関節拘縮等が激しい場合の関節可動域改善の手技（最大4肢）。ボキボキ鳴らす施術ではありません。
            </p>
          </div>
        </div>

        {/* 注意書き */}
        <div className="bg-amber-50 border-l-4 border-amber-500 px-5 py-4 rounded">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-bold text-amber-800">注：</span>
            上記訪問施術料は、1ヶ所訪問につきお一人を施術させていただいた場合の金額です。高齢者施設（老人ホーム等）内で複数人を施術させていただく場合は別料金となりますので、該当する方には別途詳しくご説明いたします。
          </p>
        </div>
      </div>
    </section>
  )
}
