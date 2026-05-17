import { Link } from 'react-router-dom'

const testimonial = {
  id: 1,
  image: '/voices/letter-1.jpg',
  title: '感謝の毎日を過ごしております',
  text: '訪問して下さる方は、実直で熱心なお人柄ですので、御親切にご指導していただいております。感謝の毎日を過ごしております。一人暮らしの老人で、分からない事がありましたらすぐに対処して下さるし、私のつまらない愚痴や悩みも話しますので、心が癒えて大変助かっております。良いお方にお世話になり、喜んでおります。よろしくお願い申し上げます。',
  author: '70代女性',
  relation: 'ご本人より',
  area: '岡山市北区',
}

export default function MenuPriceSection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">ABOUT US</p>
          <h2 className="section-title">岡山市の訪問医療マッサージについて</h2>
        </div>

        {/* SEO本文 */}
        <div className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700 leading-loose space-y-10">

          {/* ブロック1: 実績 */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800">
              岡山市での訪問マッサージ実績
            </h3>
            <p>
              ボディケア つしまでは、上記のような不安やお悩みを解決するためのお手伝いとして、医療保険を適用した「訪問マッサージ」を行っております。今までに、在宅及び介護施設内入居者の方を対象に、現在も施術継続中の方、実費施術の方を含めて、トータル<strong className="text-primary-700">約109名の方のサポート（のべ施術時間8000時間超）</strong>をさせていただいてまいりました。その経験を生かして、あなたの体のケアに全力で取り組んでまいります。
            </p>
          </div>

          {/* ブロック2: 無料体験 */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800">
              まずは無料お試し体験から
            </h3>
            <p>
              「この訪問マッサージが本当に自分に合うだろうか。」と不安に思われるかもしれません。ですので、当院では、最初にお試し無料体験を受けていただき、その後で、実際に継続されるかどうかの判断をしていただいております。
            </p>
            <p className="text-center text-lg sm:text-xl font-bold text-primary-700 py-2">
              まずは無料お試しで、訪問マッサージを体験してみて下さい。
            </p>
          </div>

          {/* ブロック3: 対象となる方 */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800">
              医療保険適用の訪問マッサージ｜対象となる方
            </h3>
            <p>
              私は岡山市で訪問マッサージを行うようになってから<strong>20年目</strong>になりますが、開始当初と現在では、訪問マッサージの適用条件がかなりシビアになってきています。
            </p>
            <p>
              基本的にこのサービスは、<strong>脳卒中後遺症による筋肉の麻痺</strong>、その他主に<strong>脳神経疾患が引き起こす筋肉の萎縮や固縮</strong>などの症状がある方、あるいは<strong>関節拘縮（関節が固くなって動かしにくい状態）</strong>がある方で、同時に歩行困難な方が対象となります。
            </p>

            <div className="space-y-3">
              <h4 className="text-lg font-bold text-gray-800">歩行困難の具体的な基準</h4>
              <div className="bg-cream-50 border-l-4 border-primary-300 px-6 py-5">
                <p className="mb-3">この歩行困難というのは、具体的には、</p>
                <ol className="space-y-3 ml-1">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary-700 shrink-0">①</span>
                    <span>付き添い等なく、一人で公共交通機関を使っての外出が困難な方。</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary-700 shrink-0">②</span>
                    <span>認知症や視覚、内部、精神症状などにより、単独での外出が困難な方。</span>
                  </li>
                </ol>
                <p className="mt-3">といった理由に該当するかどうかで判断されます。</p>
              </div>
            </div>
          </div>

          {/* ブロック4: 整形外科疾患について */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800">
              腰痛・肩こり・膝痛など整形外科疾患をお持ちの方へ
            </h3>
            <p>
              ここ最近は、「整形外科的な疾患により痛みや痺れが辛いので、訪問マッサージをお願いします。」といったお問い合わせが多いのですが、こちらにつきましては、過去には認められたケースもありますが、<strong>基本的に現在は、医療保険の対象にはなりません。</strong>（岡山県後期高齢者医療広域連合からも指示が有り。特に、2019年位から厳しくなっていますので、ご希望の方には実費にて対応しています。）
            </p>
            <p>
              全国的にも、年々医療財政は厳しくなっています。
            </p>
            <p className="font-bold text-gray-800">
              これからも、不正行為や不正請求をする事なく、この地元岡山で訪問マッサージ業務を継続していく所存です。
            </p>
          </div>

        </div>

        <img src="/syoseki.jpg" alt="写真掲載" className="w-full h-auto object-contain border border-primary-200 mt-16 max-w-3xl mx-auto" />

        {/* ご利用者様の声（1件） */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <p className="section-lead">VOICE</p>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800">
              ご利用者様の声
            </h3>
          </div>

          <article className="bg-white border border-cream-200 rounded-md overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* 手紙の写真 */}
              <div className="lg:col-span-5 bg-cream-100 flex items-center justify-center p-6 sm:p-8">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-2 -left-2 w-full h-full bg-primary-100 rounded-sm rotate-[-2deg]" />
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.author}様からのお手紙`}
                    className="relative w-full h-auto rounded-sm border border-cream-200 shadow-md"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden relative w-full aspect-[3/4] bg-cream-50 border-2 border-dashed border-cream-200 rounded-sm items-center justify-center">
                    <p className="text-sm text-gray-400">手紙の写真</p>
                  </div>
                </div>
              </div>

              {/* テキスト */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-primary-700 tracking-wider">
                    VOICE 01
                  </span>
                  <span className="h-px flex-1 bg-cream-200" />
                </div>

                <h4 className="text-xl sm:text-2xl font-serif font-bold text-gray-800 mb-5 leading-snug">
                  「{testimonial.title}」
                </h4>

                <div className="border-l-4 border-primary-300 pl-5 mb-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-loose">
                    {testimonial.text}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600 pt-4 border-t border-cream-200">
                  <span className="font-bold text-gray-800">{testimonial.author}</span>
                  <span className="text-gray-400">／</span>
                  <span>{testimonial.relation}</span>
                  <span className="text-gray-400">／</span>
                  <span>{testimonial.area}</span>
                </div>
              </div>
            </div>
          </article>

          <div className="mt-8 text-center">
            <Link
              to="/voice"
              
              className="inline-flex items-center gap-2 text-base text-primary-700 hover:text-primary-800 font-bold underline underline-offset-4"
            >
              他のご利用者様の声を見る
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
