import { useState, useEffect, useCallback, useRef } from 'react'
import logoSrc from '../../assets/logo/logo.png'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our web solutions', href: '#web-solutions' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')
  const [scrollProgress, setScrollProgress] = useState(0)
  const navRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    const y = window.scrollY
    setScrolled(y > 32)
    // Smooth 0-1 progress over first 300px of scroll
    setScrollProgress(Math.min(y / 300, 1))
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

  // Dynamic inline styles driven by scroll progress
  const frameInlineStyle = scrolled
    ? {
        '--scroll-progress': scrollProgress,
        '--glow-opacity': Math.min(scrollProgress * 1.2, 0.7),
        '--border-glow': `rgba(247, 209, 90, ${0.08 + scrollProgress * 0.22})`,
        '--bg-opacity': 0.55 + scrollProgress * 0.35,
        height: `${80 - scrollProgress * 12}px`,
        backdropFilter: `blur(${20 + scrollProgress * 16}px) saturate(${1.3 + scrollProgress * 0.5})`,
      } as React.CSSProperties
    : {}

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-[1000] px-6 transition-all duration-[400ms] ease-smooth ${
          scrolled ? 'pt-2' : 'pt-4'
        }`}
      >
        <div
          ref={navRef}
          style={frameInlineStyle}
          className={`navbar-frame mx-auto flex max-w-[1280px] items-center justify-between gap-4 rounded-full px-7 border backdrop-blur-[20px] backdrop-saturate-[1.3] transition-all duration-[400ms] ease-smooth ${
            scrolled
              ? 'navbar-frame-scrolled navbar-scrolled-glow h-[68px] bg-[rgba(8,8,8,0.92)] border-[rgba(247,209,90,0.25)] shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_60px_rgba(247,209,90,0.08),inset_0_1px_0_rgba(255,255,255,0.08)]'
              : 'h-20 bg-[rgba(8,8,8,0.55)] border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]'
          }`}
        >
          {/* ── Logo ── */}
          <a
            href="#"
            className="flex shrink-0 items-center gap-3 no-underline transition-transform duration-300 ease-in-out hover:scale-[1.04]"
            id="navbar-logo"
            aria-label="ABC Creations Home"
          >
            <img
              src={logoSrc}
              alt="ABC Creations logo"
              className={`h-20 w-20 object-contain drop-shadow-[0_0_12px_rgba(247,209,90,0.3)] hover:drop-shadow-[0_0_18px_rgba(247,209,90,0.55)] transition-[filter] duration-300 ${scrolled ? 'navbar-logo-scrolled' : ''}`}
              width={80}
              height={80}
            />
            <span className="flex flex-col leading-tight">
              <span className="text-xl font-black tracking-[0.08em] bg-gradient-to-br from-orange-500 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                ABC CREATIONS
              </span>
              <span className="text-[0.6rem] font-semibold tracking-[0.32em] uppercase text-[rgba(244,241,232,0.55)]">
                Creative Solutions
              </span>
            </span>
          </a>

          {/* ── Desktop nav links ── */}
          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0" role="menubar">
            {navItems.map((item) => (
              <li key={item.label} role="none">
                <a
                  href={item.href}
                  role="menuitem"
                  id={`nav-${item.label.toLowerCase()}`}
                  className={`navbar-link-underline relative inline-flex items-center whitespace-nowrap px-[18px] py-2 text-[0.8rem] font-semibold tracking-[0.14em] uppercase no-underline rounded-full overflow-hidden transition-colors duration-300 ${
                    activeItem === item.label
                      ? 'text-gold navbar-link-underline--active'
                      : 'text-[rgba(244,241,232,0.7)] hover:text-gold hover:bg-[rgba(247,209,90,0.06)]'
                  }`}
                  onClick={() => setActiveItem(item.label)}
                >
                  {item.label}
                  <span className="navbar-link-glow" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          {/* ── CTA button ── */}
          <a
            href="#contact"
            className="hidden lg:inline-flex relative items-center shrink-0 px-6 py-2.5 text-[0.78rem] font-bold tracking-[0.12em] uppercase text-brand-surface no-underline rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark bg-[length:200%_200%] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(247,209,90,0.35),0_0_60px_rgba(247,209,90,0.12)] animate-cta-shimmer"
            id="navbar-cta"
          >
            <span className="navbar-cta-shine" aria-hidden="true" />
            Book a Call
          </a>

          {/* ── Mobile hamburger ── */}
          <button
            className={`burger-line-parent flex lg:hidden flex-col justify-center items-center gap-[5px] w-11 h-11 p-0 border border-white/10 rounded-xl bg-white/[0.04] cursor-pointer shrink-0 transition-colors duration-300 hover:bg-[rgba(247,209,90,0.08)] hover:border-[rgba(247,209,90,0.2)] ${
              mobileOpen ? 'burger-open' : ''
            }`}
            id="navbar-burger"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="burger-line bg-gold" />
            <span className="burger-line bg-gold" />
            <span className="burger-line bg-gold" />
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 z-[999] ${
          mobileOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
        }`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-[6px] mobile-backdrop ${
            mobileOpen ? 'mobile-backdrop-open' : ''
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`mobile-panel absolute top-0 right-0 w-[min(380px,85vw)] h-full flex flex-col p-8 px-7 bg-gradient-to-b from-[rgba(12,12,12,0.97)] to-[rgba(8,8,8,0.99)] border-l border-[rgba(247,209,90,0.1)] shadow-[-10px_0_60px_rgba(0,0,0,0.5)] ${
            mobileOpen ? 'mobile-panel-open' : ''
          }`}
        >
          {/* Mobile logo */}
          <div className="flex items-center gap-3.5 mb-12 pb-7 border-b border-white/[0.06]">
            <img
              src={logoSrc}
              alt="ABC Creations"
              className="w-32 h-32 object-contain drop-shadow-[0_0_12px_rgba(247,209,90,0.3)]"
              width={128}
              height={128}
            />
            <span className="flex flex-col leading-tight">
              <span className="text-xl font-black tracking-[0.08em] bg-gradient-to-br from-orange-500 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                ABC CREATIONS
         </span>
              <span className="text-[0.6rem] font-semibold tracking-[0.32em] uppercase text-[rgba(244,241,232,0.55)]">
                Creative Solutions
              </span>
            </span>
          </div>

          {/* Mobile links */}
          <ul className={`list-none m-0 p-0 flex flex-col gap-1.5 flex-1 ${mobileOpen ? 'mobile-links-open' : ''}`}>
            {navItems.map((item, i) => (
              <li
                key={item.label}
                className="mobile-link-item"
                style={{ transitionDelay: `${80 + i * 50}ms` }}
              >
                <a
                  href={item.href}
                  id={`mobile-nav-${item.label.toLowerCase()}`}
                  className={`flex items-center gap-4 whitespace-nowrap px-[18px] py-3.5 text-base font-semibold tracking-[0.1em] uppercase no-underline rounded-2xl transition-colors duration-300 ${
                    activeItem === item.label
                      ? 'text-gold bg-[rgba(247,209,90,0.06)]'
                      : 'text-[rgba(244,241,232,0.65)] hover:text-gold hover:bg-[rgba(247,209,90,0.06)]'
                  }`}
                  onClick={() => {
                    setActiveItem(item.label)
                    setMobileOpen(false)
                  }}
                >
                  <span className="text-[0.7rem] font-normal tracking-normal text-[rgba(247,209,90,0.35)] tabular-nums">
                    0{i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <a
            href="#contact"
            className="flex items-center justify-center p-4 mt-auto text-[0.85rem] font-bold tracking-[0.14em] uppercase text-brand-surface no-underline rounded-[18px] bg-gradient-to-br from-gold-light via-gold to-gold-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(247,209,90,0.3)]"
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
