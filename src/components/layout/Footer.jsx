import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-primary-100 mt-16">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-serif">BC</span>
              </div>
              <div>
                <p className="text-xs text-primary-300 leading-none mb-1.5">訪問マッサージ治療院</p>
                <p className="text-lg font-bold text-white leading-none font-serif">ボディケアつしま</p>
              </div>
            </div>
            <p className="text-sm text-primary-200 leading-relaxed">
              岡山市北区を中心に、医療保険適用の訪問マッサージ・機能訓練をご提供しています。
              訪問マッサージ20年の経験で、ご自宅での生活を支えます。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm border-b border-primary-700 pb-2">サイトメニュー</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: '当院について', to: '/staff' },
                { label: '料金・保険について', to: '/price' },
                { label: 'ご利用の流れ', to: '/flow' },
                { label: 'よくあるご質問', to: '/faq' },
                { label: 'お問い合わせ', to: '/contact' },
                { label: 'ケアマネジャー様へ', to: '/care-manager' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary-200 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm border-b border-primary-700 pb-2">事業所情報</h3>
            <div className="text-sm text-primary-200 space-y-3 leading-relaxed">
              <p>
                〒700-0083<br />
                岡山市北区津島新野1丁目3-16-1
              </p>
              <p>
                TEL：086-238-1733<br />
                FAX：086-238-1755
              </p>
              <p>
                受付　月〜金 9:00〜18:00<br />
                定休　日曜・祝日<br />
                <span className="text-xs">（土曜は事前予約のみ）</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-primary-300">
          <p>© ボディケアつしま All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/contact" className="hover:text-white">プライバシーポリシー</Link>
            <Link to="/contact" className="hover:text-white">法令遵守方針</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
