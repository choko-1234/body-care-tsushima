const worries = [
  '足腰が弱くなって、リハビリに通うのが難しくなってきた',
  '介護保険の枠がいっぱいで、これ以上マッサージやリハビリを増やせない',
  '退院したばかりで、自宅でのケアをどうすればいいか不安',
  '家族として、少しでも本人の痛みやしびれを和らげてあげたい',
  '実費の治療は値段が高くて、続けるのが難しい',
  '筋肉がだんだん固くなってきている気がする',
]

export default function WorriesSection() {
  return (
    <section>
      {/* 悩みパート：暗い背景で不安・悩みのイメージ */}
      <div className="py-14 sm:py-20 bg-green-900">
        <div className="section-container">
          <div className="mb-10">
            <p className="section-lead text-slate-300">CHECK LIST</p>
            <h2 className="section-title text-white">こんなお悩みはありませんか？</h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              ご本人やご家族から、当院によく寄せられるご相談です。<br className="hidden sm:block" />
              ひとつでも当てはまれば、訪問マッサージがお役に立てるかもしれません。
            </p>
          </div>

          <ul className="bg-green-900 border border-green-900 rounded-md divide-y divide-green-900">
            {worries.map((w, i) => (
              <li key={i} className="flex items-start gap-4 px-5 py-5 sm:px-7 sm:py-6">
                <span className="shrink-0 w-7 h-7 rounded-sm bg-primary-500 text-white flex items-center justify-center text-base font-bold mt-0.5">
                  ✓
                </span>
                <p className="text-lg sm:text-xl text-white leading-snug flex-1">{w}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 希望パート：明るい背景で安心感 */}
      <div className="py-14 sm:py-20 bg-cream-50">
        <div className="section-container text-center">
          <div className="inline-block text-left">
            <p className="text-lg sm:text-xl text-gray-700 mb-2">
              そのお悩み、
            </p>
            <p className="text-2xl sm:text-3xl font-serif font-bold text-primary-700 leading-relaxed">
              訪問マッサージで解決できるかもしれません
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
