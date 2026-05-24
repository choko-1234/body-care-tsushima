const steps = [
  {
    no: '01',
    title: 'お問い合わせ',
    detail: 'お電話・お問い合わせフォームからご連絡ください。ご家族・ケアマネ様からのお申込み・ご相談もお受けしています。',
  },
  {
    no: '02',
    title: 'ご訪問・無料体験',
    detail: '日程を調整したうえで、担当者がご自宅へ伺います。お話を伺いながら、無料で体験施術を受けていただけます。',
  },
  {
    no: '03',
    title: 'マッサージ同意書をご準備',
    detail: '訪問マッサージを医療保険で受けるには、医師の同意書が必要です。かかりつけ医にご記入していただく同意書に関する書類一式は、当院でご用意いたします。また必要に応じて、委任状をいただいた上で、当院が必要書類を病院に持参いたします。',
  },
  {
    no: '04',
    title: '保険手続き・契約',
    detail: '保険証の確認をさせていただき、料金や訪問日時、その他のご注意事項について書面でご説明いたします。',
  },
  {
    no: '05',
    title: '訪問施術を開始',
    detail: 'ご希望の曜日・時間に定期訪問いたします。また体調の変化に合わせ、施術内容もその都度調整いたします。',
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


        
      </div>
    </section>
  )
}
