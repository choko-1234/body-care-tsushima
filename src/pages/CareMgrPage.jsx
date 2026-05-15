import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'

const items = [
  {
    worry: '「マッサージを受けたい」という相談を受けても、介護保険の枠が気になる',
    title: '介護保険の枠を圧迫しません',
    body: '訪問マッサージは医療保険の枠組みです。ケアプランの限度額を消費しないため、デイサービスや訪問介護を並行利用中の方にも安心してご提案いただけます。',
  },
  {
    worry: '施術後の利用者の状態変化が把握できない',
    title: '施術経過報告書を定期提供',
    body: '担当者様あての施術記録・状態変化のレポートを6ヶ月ごとに作成します。ケアプラン見直しや多職種間の情報共有にお役立てください。',
  },
  {
    worry: '同意書の手続きが煩雑になりそうで提案しにくい',
    title: '同意書の取得は当院がサポート',
    body: '主治医に提出する同意書の書式・記入ポイントは当院がご案内します。必要に応じて先生への直接説明も対応しています。',
  },
  {
    worry: '多職種連携がうまくいくか不安',
    title: 'サービス担当者会議に出席します',
    body: 'ご要望があればサービス担当者会議にも参加します。施術状況や身体機能の変化をその場でお伝えし、チームケアの一員として連携します。',
  },
  {
    worry: '訪問中に何かあったとき、すぐに連絡してもらえるか不安',
    title: '体調急変時はすぐにご連絡',
    body: '訪問中に体調変化や気になる点があれば、ご家族・ケアマネ様・主治医へ速やかにご連絡します。何かあれば一報できる体制を整えています。',
  },
]

const documents = [
  { title: 'マッサージ用 同意書（雛形）', file: 'agreement-massage.pdf' },
  { title: 'はり・きゅう用 同意書（雛形）', file: 'agreement-acupuncture.pdf' },
  { title: 'ケアマネ様向け サービス案内', file: 'service-overview.pdf' },
  { title: '訪問可能エリア一覧', file: 'service-area.pdf' },
]

export default function CareMgrPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page hero */}
        <section className="bg-primary-800 text-white py-12 sm:py-16">
          <div className="section-container">
            <p className="text-sm text-primary-200 font-bold mb-3 tracking-wider">FOR CARE MANAGER</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              ケアマネジャー様へ
            </h1>
            <p className="text-base sm:text-lg text-primary-100 leading-relaxed max-w-2xl">
              ご担当のご利用者へ「訪問マッサージ」をご検討いただくケアマネジャー様に向けたページです。
              介護保険の枠を消費せず、ご本人のADL維持・QOL向上にお役立ていただけます。
            </p>
          </div>
        </section>

        {/* Worry × Solution pairs */}
        <section className="py-14 sm:py-20 bg-cream-50">
          <div className="section-container">
            <div className="mb-10">
              <p className="section-lead">SUPPORT</p>
              <h2 className="section-title">ケアマネジャー様のお悩みに、こうお応えします</h2>
              <p className="text-base text-gray-600 leading-relaxed">
                よくいただくお悩みと、それに対する当院の取り組みをまとめました。
              </p>
            </div>

            <div className="space-y-5">
              {items.map((item, i) => (
                <div key={i} className="bg-white border border-cream-200 rounded-md overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    {/* お悩み */}
                    <div className="md:col-span-5 bg-slate-50 p-6 md:p-7 border-b md:border-b-0 md:border-r border-cream-200">
                      <p className="text-xs font-bold text-slate-500 tracking-wider mb-2">お悩み</p>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{item.worry}</p>
                    </div>
                    {/* 当院の対応 */}
                    <div className="md:col-span-7 p-6 md:p-7">
                      <p className="text-xs font-bold text-primary-700 tracking-wider mb-2">当院の対応</p>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-primary-800 mb-2">{item.title}</h3>
                      <p className="text-base text-gray-700 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-14 sm:py-20 bg-cream-50 border-y border-cream-200">
          <div className="section-container">
            <div className="mb-10">
              <p className="section-lead">DOWNLOADS</p>
              <h2 className="section-title">書類ダウンロード</h2>
              <p className="text-base text-gray-600 leading-relaxed">
                同意書の雛形やサービス案内をPDFでダウンロードいただけます。
              </p>
            </div>

            <ul className="bg-white border border-gray-200 rounded-md divide-y divide-gray-200">
              {documents.map((d) => (
                <li key={d.file} className="flex items-center justify-between px-5 py-4 sm:px-7 sm:py-5">
                  <div>
                    <p className="text-base sm:text-lg font-bold text-gray-800">{d.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">PDF / {d.file}</p>
                  </div>
                  <button
                    onClick={() => alert('PDFのURL（Supabase Storage等）に差し替えます')}
                    className="btn-outline py-2.5 px-5 text-sm"
                  >
                    ダウンロード
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="section-container">
            <div className="bg-primary-700 text-white rounded-md p-8 sm:p-10 text-center">
              <p className="text-xl sm:text-2xl font-serif font-bold mb-3">
                ご担当のご利用者についてご相談ください
              </p>
              <p className="text-sm sm:text-base text-primary-100 mb-6 leading-relaxed">
                ご相談ベースのお問い合わせも歓迎します。お電話・FAXでお気軽にどうぞ。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:086-238-1733" className="btn-tel py-4 px-8 text-base">
                  086-238-1733（電話）
                </a>
                <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50 py-4 px-8 text-base">
                  メールフォームへ
                </Link>
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
