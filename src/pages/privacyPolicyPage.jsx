import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'

const sections = [
  {
    id: 'definition',
    label: 'DEFINITION',
    title: '個人情報とは',
    content: 'このプライバシーポリシーにおいて、「個人情報」とは、個人に関する情報であり、その情報に含まれる氏名、生年月日、Eメールアドレスその他の記述、画像若しくは音声又は個人別に付与された番号、記号その他の符号によりその個人を識別できるものをいいます。',
  },
  {
    id: 'collection',
    label: 'COLLECTION',
    title: '個人情報の収集方法',
    content: '当院では、いくつかのサービスをご利用いただく際に、氏名、生年月日、Eメールアドレス等の個人情報を収集させていただく場合があります。これらの情報は、すべて下記の収集目的に従って、適法かつ公正な手段により収集されます。人種、民族、家系、家柄、本籍地、宗教、政治的見解及び労働組合への加盟に関わる個人情報については、これを収集・利用いたしません。',
  },
  {
    id: 'purpose',
    label: 'PURPOSE',
    title: '個人情報を収集・利用する目的',
    content: '当院が個人情報を収集または利用する目的は以下のとおりです。',
    items: [
      '当院、または当院と商品もしくはサービスを共同で販売する第三者または当院と共同でプレゼント・キャンペーンを行う第三者その他のビジネス・パートナーの商品の発送に関する情報、商品・サービスに関する情報またはプレゼント・キャンペーン情報を提供するため',
      '当院および当院のビジネス・パートナーのサービスもしくは商品の開発・改善を目的とした調査・検討を行うため',
      '当院および当院のビジネス・パートナーのサービスもしくは商品に関する統計的資料を作成するため',
      '当院および当院のビジネス・パートナーの求人情報を提供するため',
      'その他当院の経営方針もしくは営業戦略の策定・改善を目的とした調査・検討を行うため',
    ],
  },
  {
    id: 'disclosure',
    label: 'DISCLOSURE',
    title: '情報の第三者への開示について',
    paragraphs: [
      '当院は、下記に該当する場合を除き、お客様の同意なく個人情報を第三者に開示することはありません。',
      '当院は、当院と商品もしくはサービスを共同で販売する第三者または当院と共同でプレゼント・キャンペーンを行う第三者その他のビジネス・パートナーと、個人情報を共同利用することがあります。共同利用する個人情報の管理責任者はボディケア つしまです。',
      '以下の場合には個人情報を第三者に開示することがあります。',
    ],
    items: [
      '法令により情報の開示が求められる場合',
      '人の生命、身体または財産の保護のために必要があると当院が判断した場合',
      '国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力することその他公共の利益のために特に必要があると当院が判断した場合',
      'お客様または当院の権利の確保のために必要であると当院が判断した場合',
      '業務遂行に必要な限度で個人情報の取扱いを委託する場合',
    ],
  },
  {
    id: 'correction',
    label: 'CORRECTION',
    title: '個人情報の訂正および削除',
    paragraphs: [
      'お客様は、当院所定の手続により、当院の保有する自己の個人情報が誤った情報でないことを確認すること、および誤った情報である場合に訂正または削除を請求することができます。',
      '当院は、個人情報の訂正または削除の可否を決定した場合には、遅滞なく当該お客様に通知します。',
    ],
    contact: {
      name: 'ボディケア つしま',
      email: 'bc.tsushima@gmail.com',
      tel: '086-238-1733',
      hours: '月〜金：9時〜18時（土・日・祝祭日および当院指定日を除く）',
    },
  },
  {
    id: 'security',
    label: 'SECURITY',
    title: '個人情報の安全性・セキュリティ',
    paragraphs: [
      '当院では、個人情報の不当なアクセスによる紛失、破壊、改ざん、漏洩などのリスクに対して、合理的かつ厳正な安全対策を講じております。',
      '個人情報の登録が発生するWebページでは、データ送信の際に業界標準のSSL（Secure Socket Layer）暗号化技術を使用しております。',
      'ただし、誰でもアクセスできる形態でインターネット上に個人情報を開示した場合、当院以外のウェブサイトにおいて個人情報を開示した場合、お客様の端末やパスワードの管理に起因して情報が漏れた場合など、当院の責に帰すべからざる事由による漏洩については責任を負いかねますのでご注意ください。',
    ],
  },
  {
    id: 'change',
    label: 'CHANGE',
    title: 'プライバシーポリシーの変更',
    paragraphs: [
      '本プライバシーポリシーの内容はお客様に通知をすることなく変更されることがあります。変更後のプライバシーポリシーは、当院が別途定める場合を除いて、当院のウェブサイトに掲載した時から効力を生じるものとします。',
    ],
  },
  {
    id: 'copyright',
    label: 'COPYRIGHT',
    title: '著作権ポリシー・リンクについて',
    paragraphs: [
      'このサイトにある全てのコンテンツおよび著作物は、ご自身が個人的に利用する目的で提供されています。著作権者の許諾なしに複製・改変・公衆送信することは法律により固く禁止されています。',
      'コンテンツの再配信をご希望の場合や、当院サイトへリンクされる場合は、bc.tsushima@gmail.com までメールにてご連絡ください。なお、お電話でのお問合せはご遠慮ください。',
      '当院を雑誌・メールマガジンその他の媒体でご紹介いただく際は、当院の経営趣旨と異なるご紹介のされ方を避けていただきますよう、事前にご一報くださいますようお願いいたします。',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-primary-800 text-white py-12 sm:py-16">
          <div className="section-container">
            <p className="text-sm text-primary-200 font-bold mb-3 tracking-wider">PRIVACY POLICY</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-4">プライバシーポリシー</h1>
            <p className="text-base text-primary-100 leading-relaxed max-w-2xl">
              当院では以下のプライバシーポリシーを掲げ、お客様の個人情報を保護するために細心の注意を払っています。
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-cream-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">

            <div className="bg-white border border-cream-200 rounded-md p-6 text-sm text-gray-700 leading-relaxed">
              当院のサービスもしくは商品を購入した場合または当院のプレゼント・キャンペーン等に応募した場合には、プライバシーポリシーに同意したものとみなされますので、本プライバシーポリシーの内容を熟読してご理解ください。
            </div>

            {sections.map((section) => (
              <div key={section.id}>
                <div className="mb-5">
                  <p className="text-xs text-primary-600 font-bold mb-1 tracking-wider">{section.label}</p>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-800 border-b border-cream-200 pb-3">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4 text-base text-gray-700 leading-loose">
                  {section.content && <p>{section.content}</p>}

                  {section.paragraphs && section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}

                  {section.items && (
                    <ol className="space-y-3 ml-1">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="font-bold text-primary-700 shrink-0">（{i + 1}）</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  )}

                  {section.contact && (
                    <div className="border-l-4 border-primary-300 bg-cream-50 px-5 py-4 mt-4 space-y-1 text-sm">
                      <p className="font-bold text-gray-800">連絡先：{section.contact.name}</p>
                      <p>E-mail：<a href={`mailto:${section.contact.email}`} className="text-primary-700 hover:underline">{section.contact.email}</a></p>
                      <p>電話：{section.contact.tel}</p>
                      <p>{section.contact.hours}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-amber-50 border border-amber-200 rounded-md p-6 space-y-4">
              <h3 className="font-bold text-gray-800 text-base">【お客様へのご協力とお願い】</h3>
              <p className="text-sm text-gray-700 leading-loose">
                当院サイトにおいて個人情報を含むメールが配信される場合、申込時に入力されたメールアドレスに登録内容が自動配信されます。メールアドレスの入力を間違えられた場合でも、そのアドレスに個人情報が送信される可能性がありますので、入力の際には十分ご注意ください。
              </p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>メールマガジン購読時に登録内容を確認するために自動配信されるメール</li>
                <li>プレゼント・キャンペーン応募時に登録内容を確認するために自動配信されるメール</li>
                <li>申込フォームからの申込み時に内容を確認するために自動配信されるメール</li>
                <li>教材が配送される場合に配信される配送お知らせメール</li>
              </ul>
            </div>

            <div className="text-right text-sm text-gray-600 pt-4 border-t border-cream-200">
              <p>ボディケア つしま</p>
              <p className="font-bold text-gray-800">院長　高森直樹</p>
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
