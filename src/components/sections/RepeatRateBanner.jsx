export default function RepeatRateBanner() {
  return (
    <section className="bg-cream-50 border-b ">
      <div className="section-container py-8 sm:py-10" style={{ backgroundColor: '#ddd6bf', borderRadius: '8px' }}>
        <div className="text-center max-w-3xl mx-auto" >
          <p className="text-sm sm:text-base text-gray-700 mb-3 tracking-wide">
            主に、脳梗塞（脳出血）後遺症やパーキンソン病の方を対象にした
          </p>

          <h2 className="font-serif font-bold leading-snug text-gray-800">
            <span className="block sm:inline text-3xl sm:text-4xl lg:text-5xl text-rose-600">
              リピート率92.3<span className="text-2xl sm:text-3xl lg:text-4xl">%</span>
            </span>
            <span className="hidden sm:inline mx-2 text-xl text-gray-500">の</span>
            <span className="block sm:inline text-2xl sm:text-3xl lg:text-4xl text-primary-700 mt-1 sm:mt-0">
              訪問医療マッサージ
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mt-3">
            をお試し下さい。
          </p>

          <p className="text-xs text-gray-500 mt-5">
            ※上記リピート率は、初回訪問から1年以上施術を継続されている方の割合です。
          </p>
        </div>
      </div>
    </section>
  )
}
