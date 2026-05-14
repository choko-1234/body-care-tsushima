import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'
import ContactForm from '../components/sections/ContactForm'
import Compliance from '../components/sections/Compliance'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="bg-primary-800 text-white py-12 sm:py-16">
          <div className="section-container">
            <p className="text-sm text-primary-200 font-bold mb-3 tracking-wider">CONTACT</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold">お問い合わせ</h1>
            <p className="text-base text-primary-100 mt-3 leading-relaxed">
              お電話・LINE・メールフォームでお気軽にご連絡ください。
            </p>
          </div>
        </div>
        <ContactForm />
        <Compliance />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
