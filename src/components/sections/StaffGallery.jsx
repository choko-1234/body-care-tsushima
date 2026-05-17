import { Link } from 'react-router-dom'
const staff = [
  {
    id: 1,
    name: '高森直樹',
    role: '施術担当',
    licenses: ['あん摩マッサージ指圧師', 'はり師', 'きゅう師'],
    experience: '訪問マッサージ歴 20年',
    message: '訪問マッサージを始めて20年目になります。脳卒中後遺症やご病気で寝たきりに近い方を、これまで100名以上ご担当してきました。ご本人やご家族の「日常」を支える仕事だと考え、毎日の訪問を大切にしています。',
  },
]

const voices = [
  {
    text: '訪問して下さる方は、実直で熱心なお人柄です。御親切にご指導していただいております。感謝の毎日を過ごしております。',
    author: '70代女性 ご本人より',
  },
  {
    text: '常に顔の表情の変化に細かく気を配りながら施術して下さり、安心してお任せできます。',
    author: '80代女性 ご家族より',
  },
  {
    text: '硬くなった筋緊張が和らぎ、痛みが楽になり、何とも‘至福の時間’。あっという間に過ぎてしまいます。',
    author: '60代女性 ご家族より',
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
          <div className="lg:col-span-4 max-w-xs lg:max-w-none mx-auto lg:mx-0 w-full">
            <div className="bg-cream-50  flex items-center justify-center p-6">
              <img src="/naoki4.jpg" alt="院長の写真" className="w-full h-auto rounded-md" />
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
            <div className="md:col-span-3 text-center">
              <Link to="/voice" className="inline-block bg-primary-700 text-white px-6 py-3 rounded-md hover:bg-primary-800 transition-colors">
                すべての声を見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
