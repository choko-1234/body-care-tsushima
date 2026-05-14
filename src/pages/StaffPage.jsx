import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'
import StaffGallery from '../components/sections/StaffGallery'
import PhotoGallery from '../components/sections/PhotoGallery'

export default function StaffPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="bg-primary-800 text-white py-12 sm:py-16">
          <div className="section-container">
            <p className="text-sm text-primary-200 font-bold mb-3 tracking-wider">ABOUT US</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold">当院について</h1>
            <p className="text-base text-primary-100 mt-3 leading-relaxed">
              訪問マッサージ歴20年。地域の在宅医療を、ご家庭と一緒に支えてきました。
            </p>
          </div>
        </div>
        <StaffGallery />
        <PhotoGallery />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
