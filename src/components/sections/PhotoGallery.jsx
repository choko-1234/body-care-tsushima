const photos = [
  { label: '施術風景（マッサージ）' },
  { label: '機能訓練の様子' },
  { label: '訪問時のご挨拶' },
  { label: '使用する器具' },
  { label: 'ご自宅での施術' },
  { label: 'ご家族への説明' },
]

export default function PhotoGallery() {
  return (
    <section className="py-14 sm:py-20 bg-cream-50 border-y border-cream-200">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">PHOTOS</p>
          <h2 className="section-title">施術風景</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            実際の訪問時の様子です。清潔な服装と器具で伺います。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((p, i) => (
            <div key={i} className="aspect-[4/3] bg-white border border-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-sm">写真</p>
                <p className="text-xs mt-1">{p.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
