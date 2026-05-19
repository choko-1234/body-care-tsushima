import {useState} from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom'
export default function TrialForm() {

  const [trialData, setTrialData] = useState({
      name: '',
      relation: '',
      phone: '',
      email: '',
      address: '',
      date: '',
      time: '',
      category: '無料体験',
      message: '',
   })

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!trialData.name || !trialData.phone || !trialData.email || !trialData.address) {
        alert('必須項目を入力してください');
        return;
      }
      const res = await fetch('https://formspree.io/f/xykoabol',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(trialData),
      })
      if (res.ok) {
        alert('送信しました。')
      } else{
        alert('送信に失敗しました。時間をおいて再度お試しください。')
      }

  };

  return (
    <div>
      <Header />
      <div className="bg-primary-800 text-white py-12 sm:py-16">
          <div className="section-container">
            <p className="text-sm text-primary-200 font-bold mb-3 tracking-wider">FREE TRIAL</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold">無料体験のお申し込み</h1>
            <p className="text-base text-primary-100 mt-3 leading-relaxed">
              訪問マッサージを「合うかどうか試してから決めたい」という方のために。
            </p>
          </div>
        </div>
      <section id="trial-form" className="py-14 sm:py-20 bg-cream-100 border-t border-cream-200">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left description */}
            <div className="lg:col-span-5">
            <p className="section-lead">FREE TRIAL</p>
            <h2 className="section-title mb-5">無料体験のお申し込み</h2>
            <h2 className="section-subtitle mb-5 text-red-500 text-lg">毎月2名様限定</h2>
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
                <dd>月〜金　9:00〜18:00（土日定休／祝日は基本通常営業）</dd>
              </div>
              <div>
                <dt className="font-bold text-gray-800">お返事まで</dt>
                <dd>受付後、原則1営業日以内に担当者よりお電話いたします</dd>
              </div>
            </dl>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-md p-6 sm:p-8 space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  お名前　<span className="text-red-600 text-xs">必須</span>
                </label>
                <input
                  type="text"
                  value={trialData.name}
                  onChange={(e) => setTrialData({...trialData, name: e.target.value})}
                  placeholder="例：山田 花子"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  ご本人との関係
                </label>
                <select
                  value={trialData.relation}
                  onChange={(e) => setTrialData({...trialData, relation: e.target.value})}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-primary-500 bg-white"
                >
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
                  value={trialData.phone}
                  onChange={(e) => setTrialData({...trialData, phone: e.target.value})}
                  placeholder="例：086-238-1733"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  メールアドレス　<span className="text-red-600 text-xs">必須</span>
                </label>
                <input
                  type="email"
                  value={trialData.email}
                  onChange={(e) => setTrialData({...trialData, email: e.target.value})}

                  placeholder="例：example@example.com"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  ご住所（訪問先）　<span className="text-red-600 text-xs">必須</span>
                </label>
                <input
                  type="text"
                  value={trialData.address}
                  onChange={(e) => setTrialData({...trialData, address: e.target.value})}
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
                    value={trialData.date}
                    onChange={(e) => setTrialData({...trialData, date: e.target.value})}
                    className="border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-primary-500"
                  />
                  <select
                    value={trialData.time}
                    onChange={(e) => setTrialData({...trialData, time: e.target.value})}
                    className="border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-primary-500 bg-white"
                  >
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
                  value={trialData.message}
                  onChange={(e) => setTrialData({...trialData, message: e.target.value})}
                  placeholder="例：父が脳梗塞後で左半身に麻痺があります。退院後、自宅でできるリハビリを探しています。"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-primary-500 resize-none"
                />
              </div>

              <label className="flex items-start gap-2 cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={trialData.agreedToPrivacyPolicy}
                  onChange={(e) => setTrialData({...trialData, agreedToPrivacyPolicy: e.target.checked})}
                  className="mt-1 shrink-0"
                />
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
    <div className="bg-cream-100 py-5 text-center border-t border-cream-200">
        <Link to="/" className="text-sm text-primary-700 hover:underline font-medium">
          ← トップページへ戻る
        </Link>
    </div>
    <Footer />
    </div>
  )
}
