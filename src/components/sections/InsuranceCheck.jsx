import { useState } from 'react'

const questions = [
  {
    text: '外出は難しい状態ですか？（自力歩行が困難・寝たきりに近いなど）',
    options: ['はい', 'いいえ'],
  },
  {
    text: '次のいずれかに当てはまりますか？',
    options: [
      '脳卒中（脳梗塞・脳出血）の後遺症',
      '脳神経疾患による筋萎縮・固縮',
      '関節拘縮',
      '骨折・手術後のリハビリ',
      '上記には当てはまらない',
    ],
  },
  {
    text: 'かかりつけの医師（主治医）はいらっしゃいますか？',
    options: ['はい', 'いいえ・わからない'],
  },
]

function getResult(answers) {
  if (answers[0] === 0 && answers[1] !== 4) {
    return {
      title: '医療保険が適用できる可能性が高いです',
      body: '外出が難しく、対象となる疾患をお持ちの場合は、医療保険での訪問マッサージが受けられる可能性が高いです。無料体験で実際の状態を確認させてください。',
      tone: 'ok',
    }
  }
  if (answers[0] === 1) {
    return {
      title: 'まずはご相談ください',
      body: '外出ができる場合でも、症状によっては別のかたちでお役に立てる可能性があります。整形外科疾患のみの場合は実費でご対応します。',
      tone: 'consult',
    }
  }
  return {
    title: 'お気軽にご相談ください',
    body: '状況によって、適用できる保険や対応方法が異なります。お電話または無料体験で詳しくご案内します。',
    tone: 'consult',
  }
}

export default function InsuranceCheck() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)

  const handle = (i) => {
    const next = { ...answers, [step]: i }
    setAnswers(next)
    if (step < questions.length - 1) setStep(step + 1)
    else setDone(true)
  }

  const reset = () => {
    setStep(0)
    setAnswers({})
    setDone(false)
  }

  const result = done ? getResult(answers) : null

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-lead">SELF CHECK</p>
          <h2 className="section-title">保険適用セルフチェック</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            いくつかの質問にお答えいただくと、医療保険が使える可能性が分かります。<br className="hidden sm:block" />
            ご家族のことをお考えの方も、当てはめてみてください。
          </p>
        </div>

        <div className="bg-cream-50 border border-cream-200 rounded-md p-6 sm:p-10">
          {!done ? (
            <>
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>質問 {step + 1} / {questions.length}</span>
                <span>{Math.round(((step) / questions.length) * 100)}%</span>
              </div>
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden mb-8">
                <div
                  className="h-full bg-primary-600"
                  style={{ width: `${((step) / questions.length) * 100}%` }}
                />
              </div>

              <p className="text-lg sm:text-xl font-bold text-gray-800 mb-6 leading-relaxed">
                {questions[step].text}
              </p>

              <div className="space-y-3">
                {questions[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handle(i)}
                    className="w-full text-left bg-white border border-gray-300 hover:border-primary-500 hover:bg-primary-50 rounded px-5 py-4 text-base text-gray-800 transition-colors"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div>
              <p className="text-sm text-primary-700 font-bold mb-2 tracking-wider">診断結果</p>
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">{result.title}</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-7 bg-white border border-gray-200 rounded p-5">
                {result.body}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#trial-form" className="btn-primary flex-1 py-4 text-base">
                  無料体験に申し込む
                </a>
                <a href="tel:086-238-1733" className="btn-tel flex-1 py-4 text-base">
                  電話で相談する
                </a>
              </div>
              <button onClick={reset} className="mt-5 text-sm text-gray-500 hover:text-gray-700 underline">
                もう一度チェックする
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
