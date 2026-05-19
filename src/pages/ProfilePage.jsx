import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'

const licenses = [
  { name: 'あん摩マッサージ指圧師', number: '第125275号', image: '/anma.jpg' },
  { name: 'はり師', number: '第132598号', image: '/hari.jpg' },
  { name: 'きゅう師', number: '第132425号', image: '/kyuu.jpg' },
]

const career = [
  '岡山県立岡山一宮高等学校　卒業',
  '同志社大学経済学部　卒業（在学中、オーストラリアに1年留学）',
  '四国医療専門学校鍼灸マッサージ科　卒業',
]

const hobbies = [
  { title: 'パソコン', desc: '主にネットサーフィンと金融投資です。' },
  { title: '家の掃除', desc: '別に潔癖症ではありませんが、毎週末２〜３時間は平気で掃除をしています。' },
  { title: '家電量販店内散策', desc: 'いろんな家電製品を見るのが好きです。' },
  { title: 'マジック（手品）鑑賞', desc: '見るのも好きですが、少し演じることもできます。' },
  { title: ' ビール飲み', desc: '1日350mlの缶ビールを4~6本必ず飲みます。'},
  { title: '息子が優秀すぎて困ってます', desc: '自分よりも素直で真面目な紳二が生まれてきてくれて、毎日感謝しています。' },
]


const story = [
  'その日は、なぜか晩御飯までまだ時間があるというのに、私はものすごくお腹がすいており、おそらく空腹時の胃酸過多が原因の胃痛で苦しんでいました。',
  'その時、たまたま家に遊びに来ていた鍼灸マッサージ師の伯父が、その様子を見て私の母親に一言。',
  '伯父は私に「お腹を出して、仰向けに寝てみて。」と言い、裁縫針をライターの火であぶって、それを鍼の代わりにして、私のお腹のある部分に数ヶ所刺しました。（もちろん針先で刺激した程度で、突き刺した訳ではありません。）',
  'そのまま約１分間程針先でチクチクと刺激した後、「もういいよ。10分位したら、多分腹痛はおさまっていると思うよ。」そう言って、伯父は帰っていきました。',
  '伯父を見送りながら、「鍼灸の鍼ではなく、裁縫針で一体何をしたのだろうか？本当にこんな事で腹痛が治るんだろうか？」と私は半信半疑でいました。',
  'ところが、５分位すると、先程の胃痛はすっかり消えているのに気付きました。その時に思ったのは、ただ、「何だ、コレは？」でした。',
  '鍼灸マッサージ師となった今では、その時に伯父が刺激したであろうツボ（経穴）は想像がつきますが、当時の私には何と不思議な事があるものだと感心すると同時に驚き、そして東洋医学というものに非常に興味を持ったのを、今でもはっきりと覚えております。',
  '大学卒業後の会社員生活を経て、今度は自分が鍼灸マッサージ師となって、病気が原因で歩行困難な方の所にお伺いして、日常生活動作の手助けをさせていただいております。苦しんでいる方、少しでも楽になりたいと思っている方のお役に立てればという思いで、今後も施術してまいります。',
]

export default function ProfilePage() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* ページヘッダー */}
        <section className="bg-primary-800 text-white py-12 sm:py-16">
          <div className="section-container">
            <p className="text-sm text-primary-200 font-bold mb-3 tracking-wider">PROFILE</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-4">院長プロフィール</h1>
          </div>
        </section>

        {/* プロフィールカード */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* 写真 */}
              <div className="lg:col-span-4 max-w-xs lg:max-w-none mx-auto lg:mx-0 w-full">
                <img src="/naoki4.jpg" alt="院長 高森直樹" className="w-full h-auto rounded-md" />
              </div>

              {/* 基本情報 */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <p className="text-sm text-primary-700 font-bold tracking-wider mb-1">院長</p>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800">高森 直樹</h2>
                </div>

                <table className="w-full text-base text-gray-700 border-collapse">
                  <tbody>
                    <tr className="border-t border-cream-200">
                      <td className="py-3 pr-6 text-sm font-bold text-gray-500 w-24 shrink-0">生年月日</td>
                      <td className="py-3">1969年1月28日　岡山県生まれ</td>
                    </tr>
                    <tr className="border-t border-cream-200">
                      <td className="py-3 pr-6 text-sm font-bold text-gray-500">血液型</td>
                      <td className="py-3">A型</td>
                    </tr>
                    <tr className="border-t border-cream-200">
                      <td className="py-3 pr-6 text-sm font-bold text-gray-500 align-top pt-4">資格</td>
                      <td className="py-3">
                        <ul className="space-y-2">
                          {licenses.map((l) => (
                            <li key={l.name} className="flex items-center gap-3">
                              <button
                                onClick={() => setSelectedImage(l.image)}
                                className="text-primary-700 hover:underline font-medium text-left"
                              >
                                {l.name}
                              </button>
                              <span className="text-sm text-gray-500">{l.number}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-gray-400 mt-2">※ 資格名をクリックすると免許証を確認できます</p>
                      </td>
                    </tr>
                    <tr className="border-t border-cream-200">
                      <td className="py-3 pr-6 text-sm font-bold text-gray-500">モットー</td>
                      <td className="py-3">何事も、時間に正確でありたいと思っています。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 略歴 */}
        <section className="py-14 sm:py-16 bg-cream-50">
          <div className="section-container">
            <div className="mb-8">
              <p className="section-lead">CAREER</p>
              <h2 className="section-title">略歴</h2>
            </div>
            <div className="max-w-2xl space-y-0">
              {career.map((item, i) => (
                <div key={i} className="flex gap-5 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary-600 mt-1.5 shrink-0" />
                    {i < career.length - 1 && <div className="w-0.5 bg-primary-200 flex-1 my-1" />}
                  </div>
                  <p className="text-base text-gray-700 pb-6 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 趣味 */}
        <section className="py-14 sm:py-16 bg-white">
          <div className="section-container">
            <div className="mb-8">
              <p className="section-lead">HOBBIES</p>
              <h2 className="section-title">趣味</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
              {hobbies.map((h) => (
                <div key={h.title} className="bg-cream-50 border border-cream-200 rounded-md p-5">
                  <p className="font-bold text-primary-700 mb-1">{h.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* きっかけ */}
        <section className="py-14 sm:py-20 bg-cream-50">
          <div className="section-container">
            <div className="mb-10">
              <p className="section-lead">STORY</p>
              <h2 className="section-title">鍼灸マッサージに興味を持ったきっかけ</h2>
              <p className="text-base text-gray-500 mt-2">〜 全ては高校生の時の体験から 〜</p>
            </div>
            <div className="max-w-2xl space-y-5">
              {story.map((paragraph, i) => (
                <p key={i} className="text-base text-gray-700 leading-loose">{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 免許証モーダル */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="免許証"
            className="max-w-[90vw] max-h-[90vh] rounded-md shadow-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

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
