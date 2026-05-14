import { useState } from 'react'

const treatments = [
  { id: 'm', label: 'マッサージのみ', base: 350 },
  { id: 'mh', label: 'マッサージ＋変形徒手', base: 500 },
  { id: 'mf', label: 'マッサージ＋機能訓練', base: 600 },
]

const burdens = [
  { value: 1, label: '1割負担' },
  { value: 2, label: '2割負担' },
  { value: 3, label: '3割負担' },
]

export default function PriceSimulator() {
  const [t, setT] = useState('m')
  const [b, setB] = useState(1)
  const treatment = treatments.find((x) => x.id === t)
  const total = Math.ceil((treatment.base * b) / 10) * 10

  return (
    <section className="py-14 sm:py-20 bg-cream-50 border-y border-cream-200">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">PRICE SIMULATOR</p>
          <h2 className="section-title">料金シミュレーター</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            施術内容と自己負担割合を選ぶと、1回あたりの目安額が表示されます。
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-md p-6 sm:p-10">
          <div className="mb-8">
            <p className="text-base font-bold text-gray-700 mb-3">① 施術内容を選ぶ</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {treatments.map((x) => (
                <button
                  key={x.id}
                  onClick={() => setT(x.id)}
                  className={`px-4 py-3 text-base text-left border rounded transition-colors ${
                    t === x.id
                      ? 'border-primary-600 bg-primary-50 text-primary-800 font-bold'
                      : 'border-gray-300 hover:border-primary-400'
                  }`}
                >
                  {x.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-base font-bold text-gray-700 mb-3">② 自己負担割合を選ぶ</p>
            <div className="grid grid-cols-3 gap-2">
              {burdens.map((x) => (
                <button
                  key={x.value}
                  onClick={() => setB(x.value)}
                  className={`px-4 py-3 text-base border rounded transition-colors ${
                    b === x.value
                      ? 'border-primary-600 bg-primary-50 text-primary-800 font-bold'
                      : 'border-gray-300 hover:border-primary-400'
                  }`}
                >
                  {x.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-primary-700 text-white rounded-md p-6 sm:p-8 text-center">
            <p className="text-sm text-primary-200 mb-2">1回あたりの自己負担（目安）</p>
            <p className="text-4xl sm:text-5xl font-serif font-bold">
              約 {total.toLocaleString()}
              <span className="text-xl font-normal ml-1">円</span>
            </p>
            <p className="text-xs text-primary-200 mt-3 leading-relaxed">
              保険点数・加算・距離などにより、実際の金額は変動します。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
