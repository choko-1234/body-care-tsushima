import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StaffPage from './pages/StaffPage'
import PricePage from './pages/PricePage'
import FlowPage from './pages/FlowPage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'
import CareMgrPage from './pages/CareMgrPage'
import VoicePage from './pages/VoicePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/flow" element={<FlowPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/care-manager" element={<CareMgrPage />} />
        <Route path="/voice" element={<VoicePage />} />
      </Routes>
    </BrowserRouter>
  )
}
