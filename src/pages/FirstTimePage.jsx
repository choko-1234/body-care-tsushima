import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'
import {useState} from 'react'

const achivements = [
  {
    id: 1,
    symptom: '脳梗塞(脳出血)後遺症',
    number: '43'
  },
  {
    id: 2,
    symptom: 'パーキンソン病',
    number: '15'
  },
  {
    id: 3,
    symptom: 'パーキンソン症候群',
    number: '3'
  },
  {
    id: 4,
    symptom: '脊髄（頚椎）損傷･四肢麻痺',
    number: '3'
  },
  {
    id: 5,
    symptom: '関節拘縮',
    number: '6'
  },
  {
    id: 6,
    symptom: 'リンパ浮腫',
    number: '13'
  },
  {
    id: 7,
    symptom: '腰部脊柱管狭窄症',
    number: '5'
  },
  {
    id: 8,
    symptom: '大腿骨頚部（転子部）骨折',
    number: '4'
  },
  {
    id: 9,
    symptom: '変形性膝関節症',
    number: '2'
  },
  {
    id: 10,
    symptom: '運動器不安定症',
    number: '1'
  },
  {
    id: 11,
    symptom: '重症筋無力症',
    number: '2'
  },
  {
    id: 12,
    symptom: '腓骨神経麻痺',
    number: '1'
  },
  {
    id: 13,
    symptom: '坐骨神経痛',
    number: '3'
  },
  {
    id: 14,
    symptom: '慢性呼吸不全',
    number: '1'
  },
  {
    id: 15,
    symptom: '変形性股関節症',
    number: '1'
  },
  {
    id: 16,
    symptom: '脊髄小脳変性症',
    number: '2'
  },
  {
    id: 17,
    symptom: '進行性核上性麻痺',
    number: '1'
  },
  {
    id: 18,
    symptom: 'ギランバレー症候群',
    number: '1'
  },
  {
    id: 19,
    symptom: '廃用症候群',
    number: '12'
  },
  {
    id: 20,
    symptom: 'スモン病',
    number: '1'
  },
  {
    id: 21,
    symptom: '多系統委縮症',
    number: '2'
  },
  {
    id: 22,
    symptom: '両慢性硬膜下血腫',
    number: '1'
  },
]


export default function FirstTimePage() {
  const [showAll, setShowAll] = useState(false)
  const displayedAchivements = showAll ? achivements : achivements.slice(0, 8)
  const [selectedImage, setSelectedImage] = useState(null)
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-primary-800 text-white py-12 sm:py-16">
          <div className="section-container">
            <p className="text-sm text-primary-200 font-bold mb-3 tracking-wider">FOR FIRST-TIME VISITORS</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              初めての方へ
            </h1>
            <p className="text-base sm:text-lg text-primary-100 leading-relaxed max-w-2xl">
              訪問マッサージをご検討中の方に向けて、サービス内容・対象の方・ご利用までのご案内をまとめます。
            </p>
          </div>
        </section>

        <section className="py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700 leading-loose space-y-10">

          {/* ブロック1: 訪問マッサージとは */}
          <div className="space-y-4">
            <div className="text-center mb-10">
              <p className="text-sm text-primary-600 font-bold mb-2 tracking-wider">ABOUT</p>
              <h3 className="text-3xl font-serif font-bold text-gray-800">
                訪問マッサージとは？(ここに画像入れたいと思うがどうだろう)
              </h3>
              <div className="w-12 h-0.5 bg-primary-300 mx-auto mt-4"></div>
            </div>
            <p>
              この訪問マッサージは、別名 「訪問医療マッサージ」というもので、介護保険ではなく、医療保険（健康保険）を適用して、ご自宅あるいは有料老人ホームなどの介護施設にお伺いして、ご提供させていただくサービスです。
              <br />
              <br />
              介護保険の利用限度枠を気にする事なくご利用いただく事が出来るサービスで、介護保険の「訪問リハビリ」との併用も可能です。
            </p>
          </div>

          {/* ブロック2: 対象者について */}
          <div className="space-y-4">
            <div className="text-center mb-10">
              <p className="text-sm text-primary-600 font-bold mb-2 tracking-wider">TARGET</p>
              <h3 className="text-3xl font-serif font-bold text-gray-800">
                対象者について(ここも画像入れる？)
              </h3>
              <div className="w-12 h-0.5 bg-primary-300 mx-auto mt-4"></div>
            </div>
            <p>
              病名（診断名）に関係なく、医師がマッサージの効果ありと認めた方が対象となりますが、具体的には、主に脳梗塞（脳出血）後遺症、あるいはパーキンソン病や脊髄損傷などが原因で筋肉に麻痺や萎縮（固縮）の症状がある、あるいは関節の拘縮（関節が固くなって動かしにく状態）がある方で、同時に歩行困難な方が対象です。
            </p>

            <div className="bg-white border-l-4 border-primary-300 rounded-md shadow-sm px-6 py-5 mt-6">
              <p className="mb-3">この歩行困難というのは、具体的には、</p>
              <ol className="space-y-3 ml-1">
                <li className="flex gap-3">
                  <span className="font-bold text-primary-700 shrink-0">①</span>
                  <span>付き添い等なく、一人で公共交通機関を使っての外出が困難な方。</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary-700 shrink-0">②</span>
                  <span>認知症や視覚、内部、精神症状などにより、単独での外出が困難な方。</span>
                </li>
              </ol>
              <p className="mt-3">といった理由に該当するかどうかで判断されます。</p>
            </div>
          </div>

          {/* ブロック3: 施術実績 */}
          <div className="space-y-4">
            <div className="text-center mb-10">
              <p className="text-sm text-primary-600 font-bold mb-2 tracking-wider">ACHIEVEMENTS</p>
              <h3 className="text-3xl font-serif font-bold text-gray-800">
                施術実績
              </h3>
              <div className="w-12 h-0.5 bg-primary-300 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {displayedAchivements.map((a, index) => (
                <div key={a.id} className={`bg-white border border-cream-200 rounded-md p-5 shadow-sm hover:shadow-md transition-shadow ${!showAll && (index === 6 || index === 7) ? 'opacity-30' : ''}`}>
                  <p className="text-base font-bold text-primary-700 mb-1">{a.symptom}</p>
                  <p className="text-sm text-gray-600">施術人数: <span className="font-semibold text-gray-800">{a.number}名</span></p>
                </div>
              ))}
            </div>
            <div className="text-center pt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="border border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white transition-colors font-medium py-2 px-8 rounded-md text-sm"
              >
                {showAll ? '表示を減らす' : 'すべて表示する'}
              </button>
            </div>
          </div>

          {/* ブロック4: 施術効果 */}
          <div className="space-y-4">
            <div className="text-center mb-10">
              <p className="text-sm text-primary-600 font-bold mb-2 tracking-wider">EFFECTS</p>
              <h3 className="text-3xl font-serif font-bold text-gray-800">
                施術効果について
              </h3>
              <div className="w-12 h-0.5 bg-primary-300 mx-auto mt-4"></div>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-cream-200 rounded-md p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-700 text-white font-bold shrink-0">1</span>
                  <h4 className="font-bold text-primary-700 text-lg">マッサージ効果</h4>
                </div>
                <p className="text-base">血液・リンパなどの循環がよくなる事で、「むくみ（浮腫）」や「床ずれ」の予防・改善につながります。また、固くなった筋肉をほぐしたり、麻痺などで動かしにくくなった筋肉に刺激を与える事で、筋肉の萎縮を予防します。</p>
              </div>
              <div className="bg-white border border-cream-200 rounded-md p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-700 text-white font-bold shrink-0">2</span>
                  <h4 className="font-bold text-primary-700 text-lg">関節拘縮の改善</h4>
                </div>
                <p className="text-base">脳梗塞（脳出血）後遺症による麻痺が原因で筋肉の萎縮が起こり、それによって固くなってしまった関節に対して「変形徒手矯正術」という関節の運動法を行う事で、関節の動く範囲の改善が期待出来ます。</p>
              </div>
              <div className="bg-white border border-cream-200 rounded-md p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-700 text-white font-bold shrink-0">3</span>
                  <h4 className="font-bold text-primary-700 text-lg">寝たきり状態の予防</h4>
                </div>
                <p className="text-base">上記１・２のように、血液・リンパ・筋肉・関節といった部分に刺激が加わる事で、重力に対する抵抗力が付き、最終的には「寝たきり状態」になるのを防ぐ事に繋がります。</p>
              </div>
            </div>
          </div>

          {/* ブロック5: 医師の同意について */}
          <div className="space-y-4">
            <div className="text-center mb-10">
              <p className="text-sm text-primary-600 font-bold mb-2 tracking-wider">CONSENT</p>
              <h3 className="text-3xl font-serif font-bold text-gray-800">
                医師の同意について
              </h3>
              <div className="w-12 h-0.5 bg-primary-300 mx-auto mt-4"></div>
            </div>
            <p>
              この「訪問マッサージ」は医療保険を適用する為、前項（対象者について）の所にもありますように、サービスをご利用していただくためには、必ずその方の主治医（ご近所のかかりつけ医師、又はその病気の経過を定期的に診てもらっている医師）のご同意すなわち、「マッサージをしてもらってもいいですよ。」という許可をいただく必要がございます。
              <br />
              <br />
              当院でマッサージ施術に関する同意書（フォーム）をご用意しておりますので、定期受診あるいは往診日に主治医の方にお渡しして、必要事項をご記入していただく事が必要となります。
              <br />
              <br />
              詳しくは、初回訪問時（お試しマッサージご利用日）にご説明させていただきます。
            </p>
          </div>

          {/* ブロック6: 施術者について */}
          <div className="space-y-4">
            <div className="text-center mb-10">
              <p className="text-sm text-primary-600 font-bold mb-2 tracking-wider">STAFF</p>
              <h3 className="text-3xl font-serif font-bold text-gray-800">
                施術者について
              </h3>
              <div className="w-12 h-0.5 bg-primary-300 mx-auto mt-4"></div>
            </div>
            <p>
              ご自宅にお伺いして実際に施術をさせていただくのは、「はり師」・「きゅう師」・「按摩マッサージ指圧師」（一般的に、この３つを総称して「鍼灸マッサージ師」といいます。）という国家資格を持った者が担当させていただきます。<br />
              <br />
              <Link to="/profile" className="text-primary-700 hover:underline">⚫️ 院長のプロフィールを見る</Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="space-y-2">
                <img src="/hari1.jpg" alt="はり師" className="rounded-md border border-cream-200 cursor-pointer w-full hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/hari.jpg')} />
                <p className="text-center text-sm text-gray-600 font-medium">はり師</p>
              </div>
              <div className="space-y-2">
                <img src="/kyuu1.jpg" alt="きゅう師" className="rounded-md border border-cream-200 cursor-pointer w-full hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/kyuu.jpg')} />
                <p className="text-center text-sm text-gray-600 font-medium">きゅう師</p>
              </div>
              <div className="space-y-2">
                <img src="/anma1.jpg" alt="按摩マッサージ指圧師" className="rounded-md border border-cream-200 cursor-pointer w-full hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/anma.jpg')} />
                <p className="text-center text-sm text-gray-600 font-medium">按摩マッサージ指圧師</p>
              </div>
            </div>

            <div className="bg-cream-100 border border-cream-200 rounded-md p-4 mt-6 text-sm text-gray-700">
              <p>
                <span className="font-bold text-gray-800">参考：</span>
                一般的によく耳にされる、「整体師」・「カイロプラクター」といった方々は民間資格者であり、公的医療保険の取り扱いは出来ません。
              </p>
            </div>
          </div>

        </div>
        </section>
      </main>

      <div className="bg-cream-100 py-5 text-center border-t border-cream-200">
        <Link to="/" className="text-sm text-primary-700 hover:underline font-medium">
          ← トップページへ戻る
        </Link>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="拡大画像"
            className="max-w-[90vw] max-h-[90vh] rounded-md shadow-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
      <FloatingButtons />
    </div>
  )
}
