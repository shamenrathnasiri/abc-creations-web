import { useState, useEffect, useCallback } from 'react'
import logoSrc from '../../assets/logo/logo.png'
import './Navbar.css'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 32)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        id="main-navbar"
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      >
        <div className="navbar__inner">
          {/* ── Logo ── */}
          <a href="#" className="navbar__logo" id="navbar-logo" aria-label="ABC Creations Home">
            <img
              src={logoSrc}
              alt="ABC Creations logo"
              className="navbar__logo-img"
              width={48}
              height={48}
            />
            <span className="navbar__logo-text">
              <span className="navbar__logo-name">ABC</span>
              <span className="navbar__logo-sub">Creations</span>
            </span>
          </a>

          {/* ── Desktop nav links ── */}
          <ul className="navbar__links" role="menubar">
            {navItems.map((item) => (
              <li key={item.label} role="none">
                <a
                  href={item.href}
                  role="menuitem"
                  id={`nav-${item.label.toLowerCase()}`}
                  className={`navbar__link ${activeItem === item.label ? 'navbar__link--active' : ''}`}
                  onClick={() => setActiveItem(item.label)}
                >
                  {item.label}
                  <span className="navbar__link-glow" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          {/* ── CTA button ── */}
          <a href="#contact" className="navbar__cta" id="navbar-cta">
            <span className="navbar__cta-shine" aria-hidden="true" />
            Book a Call
          </a>

          {/* ── Mobile hamburger ── */}
          <button
            className={`navbar__burger ${mobileOpen ? 'navbar__burger--open' : ''}`}
            id="navbar-burger"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="navbar__burger-line" />
            <span className="navbar__burger-line" />
            <span className="navbar__burger-line" />
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`navbar-mobile ${mobileOpen ? 'navbar-mobile--open' : ''}`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="navbar-mobile__backdrop" onClick={() => setMobileOpen(false)} />
        <div className="navbar-mobile__panel">
          <div className="navbar-mobile__logo">
            <img src={logoSrc} alt="ABC Creations" width={56} height={56} />
            <span className="navbar__logo-text">
              <span className="navbar__logo-name">ABC</span>
              <span className="navbar__logo-sub">Creations</span>
            </span>
          </div>

          <ul className="navbar-mobile__links">
            {navItems.map((item, i) => (
              <li key={item.label} style={{ transitionDelay: `${80 + i * 50}ms` }}>
                <a
                  href={item.href}
                  id={`mobile-nav-${item.label.toLowerCase()}`}
                  className={`navbar-mobile__link ${activeItem === item.label ? 'navbar-mobile__link--active' : ''}`}
                  onClick={() => {
                    setActiveItem(item.label)
                    setMobileOpen(false)
                  }}
                >
                  <span className="navbar-mobile__link-index">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="navbar-mobile__cta"
            id="mobile-navbar-cta"
            onClick={() => setMobileOpen(false)}
          >
            Book a Call
          </a>
        </div>
      </div>
    </>
  )
}
