import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: '初めての方へ', to: '/first-time' },
  { label: '料金', to: '/price' },
  { label: '保険', to: '/insurance-standards' },
  { label: 'お客様の声', to: '/voice' },
  { label: 'よくあるご質問', to: '/faq' },
  { label: 'お問い合わせ', to: '/contact' },
  { label: 'お試し無料体験', to: '/trial' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top info bar */}
      <div className="hidden lg:block bg-primary-700 text-primary-50 text-lg">
        <div className="section-container">
          <div className="flex items-center justify-between h-8">
            <p>岡山市の訪問マッサージ治療院（医療保険適用）</p>
            <p>受付：月〜金 9:00〜18:00 ／ TEL 086-238-1733</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-xl font-serif tracking-tighter">BC</span>
            </div>
            <div>
              
              <p className="text-base [17px] font-bold text-gray-800 leading-none font-serif">
                ボディケア<br />つしま
              </p>
             
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-m px-2 py-2 font-medium transition-colors whitespace-nowrap ${
                  pathname === link.to
                    ? 'text-primary-700 border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-primary-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:086-238-1733" className="hidden xl:flex items-center gap-2 px-4 py-2 text-primary-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>
                <span className="block text-[10px] leading-none text-gray-500 mb-0.5">お電話でのご相談</span>
                <span className="block font-bold leading-none">086-238-1733</span>
              </span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded text-gray-600 hover:bg-gray-100"
              aria-label="メニュー"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`text-base py-3 px-3 border-b border-gray-100 font-medium ${
                  pathname === link.to ? 'text-primary-700' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4">
              <a href="tel:086-238-1733" className="btn-tel flex-1 py-3 text-base">
                電話する
              </a>
              <a href="https://lin.ee/XXXXXXX" className="btn-line flex-1 py-3 text-base">
                LINE相談
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
