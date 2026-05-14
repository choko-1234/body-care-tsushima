const steps = [
  {
    no: '01',
    title: 'お問い合わせ',
    detail: 'お電話・LINE・お問い合わせフォームからご連絡ください。ご家族・ケアマネ様からのお申込みもお受けしています。',
  },
  {
    no: '02',
    title: 'ご訪問・無料体験',
    detail: '日程を調整したうえで、担当者がご自宅へ伺います。お話を伺いながら、無料で体験施術を受けていただけます。',
  },
  {
    no: '03',
    title: '医師の同意書をご準備',
    detail: 'かかりつけ医に「同意書」を書いていただきます。書類のご用意から先生へのご説明まで、当院がサポートします。',
  },
  {
    no: '04',
    title: '保険手続き・契約',
    detail: '保険証の確認と、保険組合への届出を行います。料金や訪問頻度について書面でご説明します。',
  },
  {
    no: '05',
    title: '訪問施術を開始',
    detail: 'ご希望の曜日・時間に定期的に訪問します。体調の変化に合わせ、施術内容も都度調整します。',
  },
]

export default function HowToUse() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">FLOW</p>
          <h2 className="section-title">ご利用までの流れ</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            お問い合わせから施術スタートまで、おおむね1〜2週間ほどです。
          </p>
        </div>

        <ol className="space-y-4">
          {steps.map((s) => (
            <li key={s.no} className="bg-cream-50 border border-cream-200 rounded-md p-5 sm:p-6 flex items-start gap-5">
              <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-primary-700 text-white flex items-center justify-center font-serif">
                <span className="text-2xl sm:text-3xl font-bold">{s.no}</span>
              </div>
              <div className="pt-1">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 bg-amber-50 border border-amber-300 rounded-md p-5 sm:p-6">
          <p className="text-base text-amber-900 leading-relaxed">
            <strong className="block mb-1">医師の同意書について</strong>
            訪問マッサージを医療保険で受けるには、医師の同意書が必要です。
            書類のご用意から、かかりつけ医への説明まで、当院がしっかりサポートしますので、ご安心ください。
          </p>
        </div>
      </div>
    </section>
  )
}
