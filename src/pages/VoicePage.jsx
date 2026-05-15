import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'

const letters = [
  {
    id: 1,
    image: '/voices/letter-1.jpg',
    title: '母が施術の日を楽しみにしています',
    text: '訪問して下さる方は、実直で熱心なお人柄です。母も心を開き、施術の日を楽しみにしています。脳梗塞の後遺症で外出が難しくなってからは、家の中で過ごす時間がほとんどでしたが、今では「次はいつ来てくれるの？」と心待ちにしています。感謝の毎日を過ごしております。',
    author: '70代女性',
    relation: 'ご家族（娘）より',
    area: '岡山市北区',
  },
  {
    id: 2,
    image: '/voices/letter-2.jpg',
    title: '介護保険の枠を気にせず受けられる',
    text: 'デイサービスとあわせて利用しています。介護保険の枠を気にせず受けられるので、本人も家族も助かっています。施術後は身体が軽くなったようで、夜もよく眠れるようになりました。ケアマネジャーさんからご紹介いただき、本当に良かったと思っています。',
    author: '80代男性',
    relation: 'ご家族（妻）より',
    area: '岡山市中区',
  },
  {
    id: 3,
    image: '/voices/letter-3.jpg',
    title: '退院後の不安を和らげてくれました',
    text: '退院後、何をしてよいかわからず不安でしたが、無料体験で話を聞いてもらえて安心しました。先生が一つひとつ丁寧に説明してくださり、自宅でできるリハビリも教えていただきました。少しずつですが、立ち上がりも楽になってきた気がします。',
    author: '60代女性',
    relation: 'ご本人より',
    area: '岡山市北区',
  },
  {
    id: 4,
    image: '/voices/letter-4.jpg',
    title: '父の表情が明るくなりました',
    text: 'パーキンソン病の父が、施術を受けるようになってから表情が明るくなりました。身体の硬さもほぐれ、家族との会話も増えたように感じます。何より「来週も来てくれるよ」と伝えると嬉しそうにする姿を見て、家族としても本当にありがたく思っています。',
    author: '70代男性',
    relation: 'ご家族（息子）より',
    area: '岡山市北区',
  },
]

export default function VoicePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page hero */}
        <section className="bg-primary-800 text-white py-12 sm:py-16">
          <div className="section-container">
            <p className="text-sm text-primary-200 font-bold mb-3 tracking-wider">VOICES</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              ご利用者・ご家族の声
            </h1>
            <p className="text-base sm:text-lg text-primary-100 leading-relaxed max-w-2xl">
              施術を受けてくださった方々から、たくさんのお手紙やメッセージをいただいています。
              いただいた声の一部を、ご本人・ご家族のご了承のもとご紹介します。
            </p>
          </div>
        </section>

        {/* Letters */}
        <section className="py-14 sm:py-20 bg-cream-50">
          <div className="section-container">
            <div className="space-y-12 sm:space-y-16">
              {letters.map((letter, i) => (
                <article
                  key={letter.id}
                  className="bg-white border border-cream-200 rounded-md overflow-hidden shadow-sm"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                      i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                    }`}
                  >
                    {/* Letter photo */}
                    <div className="lg:col-span-5 bg-cream-100 flex items-center justify-center p-6 sm:p-8">
                      <div className="relative w-full max-w-md">
                        <div className="absolute -top-2 -left-2 w-full h-full bg-primary-100 rounded-sm rotate-[-2deg]" />
                        <img
                          src={letter.image}
                          alt={`${letter.author}様からのお手紙`}
                          className="relative w-full h-auto rounded-sm border border-cream-300 shadow-md"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                            e.currentTarget.nextElementSibling.style.display = 'flex'
                          }}
                        />
                        <div
                          className="hidden relative w-full aspect-[3/4] bg-cream-50 border-2 border-dashed border-cream-300 rounded-sm items-center justify-center"
                        >
                          <p className="text-sm text-gray-400">手紙の写真</p>
                        </div>
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-primary-700 tracking-wider">
                          VOICE {String(letter.id).padStart(2, '0')}
                        </span>
                        <span className="h-px flex-1 bg-cream-200" />
                      </div>

                      <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-800 mb-5 leading-snug">
                        「{letter.title}」
                      </h2>

                      <div className="border-l-4 border-primary-300 pl-5 mb-6">
                        <p className="text-base sm:text-lg text-gray-700 leading-loose">
                          {letter.text}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600 pt-4 border-t border-cream-200">
                        <span className="font-bold text-gray-800">{letter.author}</span>
                        <span className="text-gray-400">／</span>
                        <span>{letter.relation}</span>
                        <span className="text-gray-400">／</span>
                        <span>{letter.area}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Note */}
            <div className="mt-12 bg-white border border-cream-200 rounded-md p-6 text-center">
              <p className="text-sm text-gray-600 leading-relaxed">
                ※ 掲載しているお手紙・お声は、すべてご本人およびご家族のご了承をいただいた上でご紹介しています。<br className="hidden sm:block" />
                個人を特定できる情報は伏せております。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="section-container">
            <div className="bg-primary-700 text-white rounded-md p-8 sm:p-10 text-center">
              <p className="text-xl sm:text-2xl font-serif font-bold mb-3">
                あなたのご家族にも、同じ笑顔を
              </p>
              <p className="text-sm sm:text-base text-primary-100 mb-7 leading-relaxed">
                まずは無料体験で、施術の雰囲気を感じてみてください。<br className="hidden sm:block" />
                ご本人が動かれなくても、ご家族からのお申込みで結構です。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50 text-lg py-4 px-8">
                  無料体験を申し込む
                </Link>
                <a href="tel:086-238-1733" className="btn-tel text-lg py-4 px-8">
                  086-238-1733へ電話
                </a>
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
