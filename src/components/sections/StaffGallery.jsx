const staff = [
  {
    id: 1,
    name: '院長',
    role: '施術担当',
    licenses: ['あん摩マッサージ指圧師', 'はり師', 'きゅう師'],
    experience: '訪問マッサージ歴 20年',
    message: '訪問マッサージを始めて20年目になります。脳卒中後遺症やご病気で寝たきりに近い方を、これまで100名以上ご担当してきました。ご本人やご家族の「日常」を支える仕事だと考え、毎日の訪問を大切にしています。',
  },
]

const voices = [
  {
    text: '訪問して下さる方は、実直で熱心なお人柄です。母も心を開き、施術の日を楽しみにしています。感謝の毎日を過ごしております。',
    author: '70代女性 ご家族より',
  },
  {
    text: 'デイサービスとあわせて利用しています。介護保険の枠を気にせず受けられるので、本人も家族も助かっています。',
    author: '80代男性 ご家族より',
  },
  {
    text: '退院後、何をしてよいかわからず不安でしたが、無料体験で話を聞いてもらえて安心しました。',
    author: '60代女性 ご本人より',
  },
]

export default function StaffGallery() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">OUR STAFF</p>
          <h2 className="section-title">院長のご紹介</h2>
        </div>

        {/* Staff card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Photo */}
          <div className="lg:col-span-4">
            <div className="bg-primary-100 aspect-[3/4] border border-primary-200 flex items-center justify-center">
              <div className="text-center text-primary-600">
                <p className="text-sm opacity-70">院長 顔写真</p>
                <p className="text-xs opacity-50 mt-1">差し替えてください</p>
              </div>
            </div>
          </div>
          {/* Info */}
          <div className="lg:col-span-8">
            {staff.map((s) => (
              <div key={s.id}>
                <p className="text-sm text-primary-700 font-bold mb-2 tracking-wider">{s.role}</p>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800 mb-1">{s.name}</h3>
                <p className="text-base text-gray-600 mb-5">{s.experience}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {s.licenses.map((l) => (
                    <span key={l} className="text-sm bg-primary-50 text-primary-800 border border-primary-200 px-3 py-1 rounded">
                      {l}
                    </span>
                  ))}
                </div>

                <div className="border-l-4 border-primary-600 bg-cream-50 px-5 py-5">
                  <p className="text-base text-gray-700 leading-loose">{s.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Voices */}
        <div>
          <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">ご利用者・ご家族の声</h3>
          <p className="text-sm text-gray-500 mb-6">いただいたアンケートより抜粋</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {voices.map((v, i) => (
              <div key={i} className="bg-cream-50 border border-cream-200 rounded-md p-5">
                <p className="text-base text-gray-700 leading-relaxed mb-4">「{v.text}」</p>
                <p className="text-sm text-gray-500 text-right">— {v.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
