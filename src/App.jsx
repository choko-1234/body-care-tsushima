import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StaffPage from './pages/StaffPage'
import PricePage from './pages/PricePage'
import FlowPage from './pages/FlowPage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'
import CareMgrPage from './pages/CareMgrPage'
import VoicePage from './pages/VoicePage'
import FirstTimePage from './pages/FirstTimePage'
import ServicePage from './pages/ServicePage'
import InsuranceStandardsPage from './pages/InsuranceStandardsPage'
import { useEffect } from 'react'


function ScrollTop() {
    const location = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [location])

    return null
}
export default function App() {
  // ページ遷移時にトップにスクロールするコンポーネント
  

  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/flow" element={<FlowPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/care-manager" element={<CareMgrPage />} />
        <Route path="/voice" element={<VoicePage />} />
        <Route path="/first-time" element={<FirstTimePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/insurance-standards" element={<InsuranceStandardsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
