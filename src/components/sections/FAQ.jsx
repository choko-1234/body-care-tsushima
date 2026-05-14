import { useState } from 'react'

const faqs = [
  {
    category: '保険・費用について',
    items: [
      {
        q: '本当に医療保険が使えるのですか？',
        a: 'はい。医師の同意書があれば、訪問マッサージは医療保険でご利用いただけます。1割〜3割の自己負担となり、1回あたりおおむね数百円が目安です。',
      },
      {
        q: '介護保険との併用はできますか？',
        a: '可能です。訪問マッサージは「医療保険」の枠組みなので、介護保険の限度額には影響しません。デイサービス・訪問介護と並行してご利用いただけます。',
      },
      {
        q: '料金以外にお金はかかりますか？',
        a: '原則、保険適用分のご負担のみです。エリアによっては交通費を別途お願いする場合がございますが、事前にご説明します。',
      },
    ],
  },
  {
    category: 'ご利用の手続き',
    items: [
      {
        q: 'かかりつけ医に何を相談すればいいですか？',
        a: '「訪問マッサージを受けたい」とお伝えいただくだけで結構です。同意書の書式はこちらでお渡ししますので、先生にご記入いただきます。当院から先生へのご説明も可能です。',
      },
      {
        q: '家族が代わりに申し込むことはできますか？',
        a: 'もちろんです。ご本人が外出困難な場合、ご家族・ケアマネジャー様からのお申込みが大半です。ご本人不在でもお手続きを進められます。',
      },
      {
        q: 'すぐに来てもらえますか？',
        a: 'ご相談から無料体験まで、最短で数日です。保険手続きを含めた本格利用は、医師の同意書取得後、おおむね1〜2週間で開始できます。',
      },
    ],
  },
  {
    category: '施術内容',
    items: [
      {
        q: 'どんな症状の方が対象になりますか？',
        a: '脳卒中後遺症、脳神経疾患による筋萎縮・拘縮、関節拘縮、歩行困難な方が主な対象です。整形外科疾患のみの場合は実費対応となります。',
      },
      {
        q: '1回の施術はどのくらいの時間ですか？',
        a: 'マッサージは20分前後、機能訓練と合わせて30〜40分程度が目安です。ご体調に応じて調整します。',
      },
      {
        q: '寝たきりでも受けられますか？',
        a: 'ご対応可能です。むしろ寝たきりに近い方の筋肉のこわばりや関節拘縮を、和らげる目的で行うことが多くあります。',
      },
    ],
  },
]

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <div className="flex gap-4 items-start">
          <span className="text-primary-700 font-serif font-bold text-xl leading-none shrink-0 mt-0.5">Q.</span>
          <span className="text-base sm:text-lg font-medium text-gray-800 leading-snug">{item.q}</span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 mt-2 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 pl-9">
          <div className="bg-cream-50 border-l-2 border-primary-300 px-4 py-4">
            <p className="text-base text-gray-700 leading-relaxed">
              <span className="text-amber-700 font-bold mr-1">A.</span>
              {item.a}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [active, setActive] = useState('保険・費用について')
  const current = faqs.find((f) => f.category === active)

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">FAQ</p>
          <h2 className="section-title">よくあるご質問</h2>
        </div>

        <div className="flex gap-2 mb-8 border-b border-gray-200 overflow-x-auto">
          {faqs.map((f) => (
            <button
              key={f.category}
              onClick={() => setActive(f.category)}
              className={`flex-shrink-0 px-4 py-3 text-base font-medium border-b-2 transition-colors ${
                active === f.category
                  ? 'border-primary-600 text-primary-700'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              {f.category}
            </button>
          ))}
        </div>

        <div>
          {current?.items.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </div>

        <div className="mt-10 text-center border-t border-gray-200 pt-8">
          <p className="text-base text-gray-700 mb-4">
            ここに載っていないご質問は、お気軽にお電話ください
          </p>
          <a href="tel:086-238-1733" className="btn-tel text-lg py-4 px-8">
            086-238-1733
          </a>
        </div>
      </div>
    </section>
  )
}
