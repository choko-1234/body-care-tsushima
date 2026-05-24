import { useState } from 'react'

const BASE_PRICE = 4550 // マッサージ 全5部位
const HOT_PACK_PRICE = 180
const LIMB_CORRECTION_PRICE = 470

const burdens = [
  { value: 1, label: '1割負担' },
  { value: 2, label: '2割負担' },
  { value: 3, label: '3割負担' },
  { value: 10, label: '10割（実費）' },
]

const limbOptions = [0, 1, 2, 3, 4]

export default function PriceSimulator() {
  const [hotPack, setHotPack] = useState(false)
  const [limbs, setLimbs] = useState(0)
  const [burden, setBurden] = useState(1)

  const subtotal =
    BASE_PRICE + (hotPack ? HOT_PACK_PRICE : 0) + limbs * LIMB_CORRECTION_PRICE
  const total = Math.round((subtotal * burden) / 10)

  return (
    <section className="py-14 sm:py-20 bg-cream-50 border-y border-cream-200">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">PRICE SIMULATOR</p>
          <h2 className="section-title">料金シミュレーター</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            <span className="font-bold text-primary-700">全ての部位に施術を行った場合</span>を前提に、追加施術と自己負担割合を選ぶと1回あたりの目安額が表示されます。
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-md p-6 sm:p-10">
          {/* 基本料金（固定） */}
          <div className="bg-cream-50 border border-cream-200 rounded-md p-4 sm:p-5 mb-8">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <p className="text-sm text-gray-500 font-bold mb-1">基本料金（前提）</p>
                <p className="text-base font-bold text-gray-800">
                  マッサージ：全5部位に施術
                </p>
              </div>
              <p className="text-xl font-serif font-bold text-gray-800">
                {BASE_PRICE.toLocaleString()}<span className="text-sm font-normal ml-0.5">円</span>
              </p>
            </div>
          </div>

          {/* ① 温罨法 */}
          <div className="mb-8">
            <p className="text-base font-bold text-gray-700 mb-3">
              ① 温罨法（ホットパック）を追加しますか？
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setHotPack(false)}
                className={`px-4 py-3 text-base border rounded transition-colors ${
                  !hotPack
                    ? 'border-primary-600 bg-primary-50 text-primary-800 font-bold'
                    : 'border-gray-300 hover:border-primary-400'
                }`}
              >
                追加しない
              </button>
              <button
                onClick={() => setHotPack(true)}
                className={`px-4 py-3 text-base border rounded transition-colors ${
                  hotPack
                    ? 'border-primary-600 bg-primary-50 text-primary-800 font-bold'
                    : 'border-gray-300 hover:border-primary-400'
                }`}
              >
                追加する（+180円）
              </button>
            </div>
          </div>

          {/* ② 変形徒手矯正術 */}
          <div className="mb-8">
            <p className="text-base font-bold text-gray-700 mb-3">
              ② 変形徒手矯正術を行う肢の数
            </p>
            <div className="grid grid-cols-5 gap-2">
              {limbOptions.map((n) => (
                <button
                  key={n}
                  onClick={() => setLimbs(n)}
                  className={`px-2 py-3 text-base border rounded transition-colors ${
                    limbs === n
                      ? 'border-primary-600 bg-primary-50 text-primary-800 font-bold'
                      : 'border-gray-300 hover:border-primary-400'
                  }`}
                >
                  {n} 肢
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">1肢ごとに +470円が加算されます</p>
          </div>

          {/* ③ 自己負担割合 */}
          <div className="mb-8">
            <p className="text-base font-bold text-gray-700 mb-3">③ 自己負担割合を選ぶ</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {burdens.map((x) => (
                <button
                  key={x.value}
                  onClick={() => setBurden(x.value)}
                  className={`px-2 py-3 text-base border rounded transition-colors ${
                    burden === x.value
                      ? 'border-primary-600 bg-primary-50 text-primary-800 font-bold'
                      : 'border-gray-300 hover:border-primary-400'
                  }`}
                >
                  {x.label}
                </button>
              ))}
            </div>
          </div>

          {/* 計算結果 */}
          <div className="bg-primary-700 text-white rounded-md p-6 sm:p-8">
            <div className="space-y-1 text-sm text-primary-200 mb-4 border-b border-primary-600 pb-4">
              <div className="flex justify-between">
                <span>マッサージ（全5部位）</span>
                <span>{BASE_PRICE.toLocaleString()} 円</span>
              </div>
              {hotPack && (
                <div className="flex justify-between">
                  <span>温罨法</span>
                  <span>+ {HOT_PACK_PRICE} 円</span>
                </div>
              )}
              {limbs > 0 && (
                <div className="flex justify-between">
                  <span>変形徒手矯正術（{limbs}肢）</span>
                  <span>+ {(limbs * LIMB_CORRECTION_PRICE).toLocaleString()} 円</span>
                </div>
              )}
              <div className="flex justify-between pt-2 text-white">
                <span>小計（保険適用前）</span>
                <span>{subtotal.toLocaleString()} 円</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-primary-200 mb-2">
                1回あたりの自己負担（{burden}割）
              </p>
              <p className="text-4xl sm:text-5xl font-serif font-bold">
                 {total.toLocaleString()}
                <span className="text-xl font-normal ml-1">円</span>
              </p>
              <p className="text-xs text-primary-200 mt-3 leading-relaxed">
                ※ あくまで目安です。施設内で複数人を施術する場合などは別料金となります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
