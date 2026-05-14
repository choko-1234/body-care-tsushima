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
    <section className="py-14 sm:py-20 bg-white">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">CHECK LIST</p>
          <h2 className="section-title">こんなお悩みはありませんか？</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            ご本人やご家族から、当院によく寄せられるご相談です。<br className="hidden sm:block" />
            ひとつでも当てはまれば、訪問マッサージがお役に立てるかもしれません。
          </p>
        </div>

        <ul className="bg-cream-50 border border-cream-200 rounded-md divide-y divide-cream-200">
          {worries.map((w, i) => (
            <li key={i} className="flex items-start gap-4 px-5 py-5 sm:px-7 sm:py-6">
              <span className="shrink-0 w-7 h-7 rounded-sm bg-primary-700 text-white flex items-center justify-center text-base font-bold mt-0.5">
                ✓
              </span>
              <p className="text-lg text-gray-800 leading-snug flex-1">{w}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <p className="text-lg sm:text-xl text-gray-700 mb-1">
            そのお悩み、
          </p>
          <p className="text-2xl sm:text-3xl font-serif font-bold text-primary-700">
            訪問マッサージで解決できるかもしれません
          </p>
        </div>
      </div>
    </section>
  )
}
