export default function Hero() {
  return (
    <section className="bg-cream-50 border-b border-cream-200">
      <div className="section-container py-12 sm:py-20">
        <div className="flex flex-col gap-10">
          {/* Image - 一番上 */}
          <div className="w-full max-w-4xl mx-auto">
            <img
              src="/menu.jpg"
              alt="施術風景"
              className="w-full h-auto object-contain border border-primary-200 rounded-lg shadow-sm" 
            />
          </div>

          {/* Text - その下 */}
          <div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-800 leading-[1.4] mb-6">
              ご自宅で受けられる、<br />
              <span className="text-primary-700">医療保険を適用した</span><br />
              訪問マッサージ
            </h1>

            <div className="bg-white border-l-4 border-primary-600 px-5 py-4 mb-7">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                外出が難しい方のもとへ、国家資格を持つ施術者がお伺いします。<br />
                医師の同意があれば、<strong className="text-primary-700">医療保険でのご利用</strong>が可能です。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href="#trial-form" className="btn-primary text-lg py-4 px-8">
                無料体験のお申し込み
              </a>
              <a href="tel:086-238-1733" className="btn-tel text-lg py-4 px-8">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                086-238-1733
              </a>
            </div>

            <p className="text-lg text-gray-500">
              受付時間　月〜金　9:00〜18:00（土・日定休日　祝日は基本的に通常営業）
            </p>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-12 border-t border-cream-200 pt-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-serif font-bold text-primary-700 mb-1">20<span className="text-base font-normal text-gray-600 ml-1">年</span></p>
              <p className="text-xs text-gray-600">訪問マッサージの経験</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-primary-700 mb-1">109<span className="text-base font-normal text-gray-600 ml-1">名</span></p>
              <p className="text-xs text-gray-600">累計のご利用者数</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-primary-700 mb-1">8,000<span className="text-base font-normal text-gray-600 ml-1">時間</span></p>
              <p className="text-xs text-gray-600">のべ施術時間</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-primary-700 mb-1">医療保険<span className="text-base font-normal text-gray-600 ml-1">適用</span></p>
              <p className="text-xs text-gray-600">医師の同意で可能</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
