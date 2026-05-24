const areas = [
  '岡山市北区（津島・伊島・問屋町ほか）',
  '岡山市中区',
  '岡山市東区（一部）',
  '岡山市南区（一部）',
  '近隣市町村（応相談）',
]

export default function MapSection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">ACCESS & AREA</p>
          <h2 className="section-title">所在地と訪問可能エリア</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div>
            <div className="aspect-[4/3] bg-gray-100 border border-gray-200 overflow-hidden rounded-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5000.0720568353!2d132.69836425781244!3d34.68291096793206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355406684efc9c1f%3A0x97a0ba345aeb0a71!2z6Kiq5ZWP44Oe44OD44K144O844K4IOODnOODh-OCo-OCseOCouOBpOOBl-OBvg!5e1!3m2!1sja!2sjp!4v1779610581234!5m2!1sja!2sjp"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ボディケア津島 所在地"
              ></iframe>
            </div>
          </div>

          {/* Info */}
          <div>
            <table className="w-full text-base border border-gray-200">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="bg-cream-50 text-left text-sm font-bold text-gray-700 px-4 py-3 w-28 align-top">所在地</th>
                  <td className="px-4 py-3 text-gray-700">
                    〒700-0083<br />
                    岡山県岡山市北区津島新野1丁目3-16-1
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="bg-cream-50 text-left text-sm font-bold text-gray-700 px-4 py-3 align-top">電話</th>
                  <td className="px-4 py-3 text-gray-700">086-238-1733</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="bg-cream-50 text-left text-sm font-bold text-gray-700 px-4 py-3 align-top">FAX</th>
                  <td className="px-4 py-3 text-gray-700">086-238-1755</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="bg-cream-50 text-left text-sm font-bold text-gray-700 px-4 py-3 align-top">受付時間</th>
                  <td className="px-4 py-3 text-gray-700">月〜金　9:00〜18:00</td>
                </tr>
                <tr>
                  <th className="bg-cream-50 text-left text-sm font-bold text-gray-700 px-4 py-3 align-top">定休日</th>
                  <td className="px-4 py-3 text-gray-700">土曜・日曜（祝日は基本通常営業）</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-8">
              <h3 className="text-lg font-serif font-bold text-gray-800 mb-3">訪問可能エリア</h3>
              <ul className="bg-cream-50 border border-cream-200 rounded-md divide-y divide-cream-200">
                {areas.map((a) => (
                  <li key={a} className="px-4 py-3 text-base text-gray-700">{a}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                上記以外の地域もご相談ください。<br />
                距離によっては交通費を別途いただく場合があります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
