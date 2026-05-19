const aims = [
  {
    id: 1,
    title: '目標の設定',
    body: '一旦マッサージを開始したら、定期訪問させていただく回数が増えるにしたがって、どうしてもマンネリ化してくる可能性が出てきて、本来の目的である「日常生活動作の改善」という目的が曖昧になってしまう恐れがあります。\n\n当院では、そういった「狎れ」を防ぐために、ケアプランがあればその内容を確認させていただき、極力、それに沿った形での施術上の目標を決めて施術する事を心がけております。',
    note: '例：麻痺による関節拘縮により90度で固まってしまった肘の関節を、まずは150度位まで伸ばす事が出来るようにする。等',
  },
  {
    id: 2,
    title: '医療・福祉関係者の方との連携',
    body: '訪問マッサージの対象者は、その殆どが介護が必要な方です。\n\nこのサービスは医療保険（健康保険）を適用するので、介護保険とは直接関係はありませんが、その方のケアに関わる一員として、ケアマネージャーの方に、こちらのしている事を、定期的にご報告させていただいております。\n\nまたそれは、当然の事ながら、マッサージの同意をいただいているドクターに対しても同様です。',
  },
  {
    id: 3,
    title: 'サービス担当者会議への出席',
    body: '介護保険での居宅介護支援では、チームで居宅介護サービス計画を作成していく事を原則としております。その中で、ケアマネージャーが主催者となって介護サービス関係者が集まり、居宅サービス計画を検討する場をサービス担当者会議といいます。\n\nこの「訪問医療マッサージ」は医療保険扱いですが、必要があれば時間を調整して、可能な限りサービス担当者会議にも出席させていただき、マッサージの経過や体の状態など、気付いた事をご報告させていただいております。',
  },
  {
    id: 4,
    title: 'ニュースレターの発行',
    body: '毎月1回、「治療院ニュースレター」を発行しております。\n\nちょっとした時事ネタや、医療・福祉ネタを含んだものですので、ご利用者の皆様、ならびに御家族の方にとって、何か役立つ情報があればご参考にしていただければと思います。',
  },
  {
    id: 5,
    title: 'ご家族（介護者）の方へのマッサージ',
    body: '介護が必要なご本人様も当然ですが、介護する側も時間的あるいは精神的・体力的に大変なご苦労があると思います。実際に、「ついでに私もマッサージして欲しい」といった要望も時々ございます。\n\n当院では、要介護者だけでなく、介護者の方の体のケアも大切な事だと考えておりますので、ご希望の方には、格安でリラクゼーション的なマッサージを受けていただく事が出来ます。',
  },
]

export default function Aim() {
  return (
    <section className="py-14 sm:py-20 bg-cream-50">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">OUR AIMS</p>
          <h2 className="section-title">当院の５つの目標</h2>
        </div>

        <div className="space-y-6">
          {aims.map((aim) => (
            <div key={aim.id} className="bg-white border border-cream-200 rounded-md shadow-sm p-6 sm:p-8">
              <div className="flex items-start gap-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-700 text-white font-bold text-lg shrink-0">
                  {aim.id}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-800 mb-4">
                    {aim.title}
                  </h3>
                  <div className="text-base text-gray-700 leading-loose space-y-3">
                    {aim.body.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  {aim.note && (
                    <div className="mt-4 border-l-4 border-primary-300 bg-cream-50 px-4 py-3">
                      <p className="text-sm text-gray-600">{aim.note}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
