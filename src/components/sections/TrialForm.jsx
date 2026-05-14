export default function TrialForm() {
  return (
    <section id="trial-form" className="py-14 sm:py-20 bg-cream-100 border-t border-cream-200">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left description */}
          <div className="lg:col-span-5">
            <p className="section-lead">FREE TRIAL</p>
            <h2 className="section-title mb-5">無料体験のお申し込み</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              訪問マッサージを「合うかどうか試してから決めたい」という方のために、
              無料の体験施術を行っています。<br />
              ご本人が動かれなくても、ご家族からのお申込みで結構です。
            </p>
            <dl className="space-y-3 text-sm text-gray-700 border-l-2 border-primary-300 pl-4">
              <div>
                <dt className="font-bold text-gray-800">対応エリア</dt>
                <dd>岡山市内（北区・中区を中心に、エリアによっては応相談）</dd>
              </div>
              <div>
                <dt className="font-bold text-gray-800">受付時間</dt>
                <dd>月〜金　9:00〜18:00（日祝定休／土曜は予約のみ）</dd>
              </div>
              <div>
                <dt className="font-bold text-gray-800">お返事まで</dt>
                <dd>受付後、原則1営業日以内に担当者よりお電話いたします</dd>
              </div>
            </dl>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={(e) => e.preventDefault()} className="bg-white border border-gray-200 rounded-md p-6 sm:p-8 space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  お名前　<span className="text-red-600 text-xs">必須</span>
                </label>
                <input
                  type="text"
                  placeholder="例：山田 花子"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  ご本人との関係
                </label>
                <select className="w-full border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-primary-500 bg-white">
                  <option value="">選択してください</option>
                  <option>本人</option>
                  <option>家族（子）</option>
                  <option>家族（配偶者）</option>
                  <option>家族（その他）</option>
                  <option>ケアマネジャー</option>
                  <option>その他</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  電話番号　<span className="text-red-600 text-xs">必須</span>
                </label>
                <input
                  type="tel"
                  placeholder="例：086-238-1733"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  ご住所（訪問先）　<span className="text-red-600 text-xs">必須</span>
                </label>
                <input
                  type="text"
                  placeholder="例：岡山市北区津島新野1-3-16-1"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  ご希望日・時間帯
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="date"
                    className="border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-primary-500"
                  />
                  <select className="border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-primary-500 bg-white">
                    <option value="">時間帯を選択</option>
                    <option>午前（9:00〜12:00）</option>
                    <option>午後（13:00〜17:00）</option>
                    <option>どちらでも可</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  ご相談内容・症状
                </label>
                <textarea
                  rows={4}
                  placeholder="例：父が脳梗塞後で左半身に麻痺があります。退院後、自宅でできるリハビリを探しています。"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-primary-500 resize-none"
                />
              </div>

              <label className="flex items-start gap-2 cursor-pointer pt-2">
                <input type="checkbox" className="mt-1 shrink-0" />
                <span className="text-sm text-gray-600">
                  個人情報の取り扱いについて同意します（収集した個人情報は、ご相談・施術以外の目的では使用しません）
                </span>
              </label>

              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg"
              >
                この内容で送信する
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
