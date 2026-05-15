import { useState } from 'react'

export default function ContactForm() {

 const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    message: '',
 })

 const handleSubmit = async (e) => {
  e.preventDefault()
  if (!formData.name || !formData.email || !formData.message) {
    alert('お名前・メールアドレス・お問い合わせ内容は必須です。')
    return
  }
  const res = await fetch('https://formspree.io/f/xykoabol',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(formData),
  })
  if (res.ok) {
    alert('送信しました。')
  } else{
    alert('送信に失敗しました。時間をおいて再度お試しください。')
  }
}

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">CONTACT</p>
          <h2 className="section-title">お問い合わせ</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            お電話・LINE・メールフォームでお問い合わせいただけます。<br className="hidden sm:block" />
            お電話が一番早くつながります。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-cream-50 border border-cream-200 rounded-md p-6">
            <p className="text-sm font-bold text-gray-500 mb-2 tracking-wider">電話</p>
            <p className="text-2xl font-serif font-bold text-primary-800 mb-1">086-238-1733</p>
            <p className="text-sm text-gray-600 mb-4">月〜金 9:00〜18:00</p>
            <a href="tel:086-238-1733" className="btn-tel w-full py-3 text-base">かける</a>
          </div>
          <div className="bg-cream-50 border border-cream-200 rounded-md p-6">
            <p className="text-sm font-bold text-gray-500 mb-2 tracking-wider">LINE</p>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              ご家族の方も気軽にご相談いただけます。お写真やお話の続きも送れます。
            </p>
            <a href="https://lin.ee/XXXXXXX" className="btn-line w-full py-3 text-base">LINEを開く</a>
          </div>
          <div className="bg-cream-50 border border-cream-200 rounded-md p-6">
            <p className="text-sm font-bold text-gray-500 mb-2 tracking-wider">FAX</p>
            <p className="text-2xl font-serif font-bold text-gray-800 mb-1">086-238-1755</p>
            <p className="text-sm text-gray-600">
              書類のやり取りなどに。ケアマネジャー様もこちらをご利用ください。
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-cream-50 border border-cream-200 rounded-md p-6 sm:p-10 space-y-5">
          <h3 className="text-lg font-serif font-bold text-gray-800 mb-2 pb-3 border-b border-cream-200">
            メールフォームでのお問い合わせ
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">
                お名前　<span className="text-red-600 text-xs">必須</span>
              </label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded px-4 py-3 text-base bg-white focus:outline-none focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">電話番号</label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full border border-gray-300 rounded px-4 py-3 text-base bg-white focus:outline-none focus:border-primary-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">
              メールアドレス　<span className="text-red-600 text-xs">必須</span>
            </label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full border border-gray-300 rounded px-4 py-3 text-base bg-white focus:outline-none focus:border-primary-500" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">お問い合わせ種別</label>
            <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full border border-gray-300 rounded px-4 py-3 text-base bg-white focus:outline-none focus:border-primary-500">
              <option value="">選択してください</option>
              <option>無料体験のお申し込み</option>
              <option>保険適用について</option>
              <option>料金について</option>
              <option>訪問エリアについて</option>
              <option>ケアマネジャー様からのお問い合わせ</option>
              <option>その他</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">
              お問い合わせ内容　<span className="text-red-600 text-xs">必須</span>
            </label>
            <textarea
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full border border-gray-300 rounded px-4 py-3 text-base bg-white focus:outline-none focus:border-primary-500 resize-none"
            />
          </div>

          <label className="flex items-start gap-2 pt-1 cursor-pointer">
            <input type="checkbox" className="mt-1 shrink-0" />
            <span className="text-sm text-gray-600">
              個人情報の取り扱いについて同意します
            </span>
          </label>

          <button type="submit" className="btn-primary py-4 px-10 text-base">
            送信する
          </button>
        </form>
      </div>
    </section>
  )
}
