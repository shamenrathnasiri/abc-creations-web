import { useState } from 'react'
import {
  LayoutGrid,
  Tag,
  Printer,
  Palette,
  Layers,
  FileImage,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react'

import post01 from '../assets/postDesign/Akuru panthiyak.jpg'
import post02 from '../assets/postDesign/Aruna Agri new.jpg'
import post03 from '../assets/postDesign/Dinuka 2 .jpg'
import post04 from '../assets/postDesign/Lahiru Madusanka.jpg'
import post05 from '../assets/postDesign/Mathematics.jpg'
import post06 from '../assets/postDesign/Nekmal Post1 2026.jpg'
import post07 from '../assets/postDesign/Nuwan  speed revision.jpg'
import post08 from '../assets/postDesign/Nuwan C new 3.jpg'
import post09 from '../assets/postDesign/Nuwan C time table 8 onagama.jpg'
import post10 from '../assets/postDesign/Nuwan shishyathwa.jpg'
import post11 from '../assets/postDesign/Science Post.jpg'
import post12 from '../assets/postDesign/Sinhala class.jpg'
import post13 from '../assets/postDesign/Tamil Class Successeed.jpg'
import post14 from '../assets/postDesign/Yasitha 5 to 6.jpg'
import post15 from '../assets/postDesign/Yasitha OL result.jpg'
import post16 from '../assets/postDesign/pradeep english.jpg'
import post17 from '../assets/postDesign/sajjitha surya mangalya.jpg'

import logo01 from '../assets/logoDesign/crozy villa1.jpg'
import logo02 from '../assets/logoDesign/crozy villa2.jpg'

import hand01 from '../assets/handbillDesign/12.jpg'
import hand02 from '../assets/handbillDesign/14.jpg'
import hand03 from '../assets/handbillDesign/15.jpg'
import hand04 from '../assets/handbillDesign/Free_Flyer_Mockup_4.jpg'
import hand05 from '../assets/handbillDesign/Mockup 2.jpg'
import hand06 from '../assets/handbillDesign/Mockup Flyer (02).jpg'
import hand07 from '../assets/handbillDesign/Mockup Flyer (03).jpg'
import hand08 from '../assets/handbillDesign/Mockup Flyer (06).jpg'
import hand09 from '../assets/handbillDesign/Mockup Flyer 1 (02).jpg'
import hand10 from '../assets/handbillDesign/Sasantha mokup 1.jpg'
import hand11 from '../assets/handbillDesign/Sasantha mokup 3.jpg'
import hand12 from '../assets/handbillDesign/yasitha mokup 1.jpg'
import hand13 from '../assets/handbillDesign/yasitha mokup 2.jpg'
import hand14 from '../assets/handbillDesign/yasitha mokup 3.jpg'

type Category = 'posts' | 'logos' | 'handbills'

const THEME: Record<Category, { primary: string; glow: string; badge: string; bg: string; border: string }> = {
  posts: {
    primary: '#f57e22',
    glow:    'rgba(245,126,34,0.22)',
    badge:   'rgba(245,126,34,0.15)',
    bg:      'rgba(245,126,34,0.09)',
    border:  'rgba(245,126,34,0.45)',
  },
  logos: {
    primary: '#ffda00',
    glow:    'rgba(255,218,0,0.22)',
    badge:   'rgba(255,218,0,0.15)',
    bg:      'rgba(255,218,0,0.09)',
    border:  'rgba(255,218,0,0.50)',
  },
  handbills: {
    primary: '#a78bfa',
    glow:    'rgba(167,139,250,0.22)',
    badge:   'rgba(167,139,250,0.15)',
    bg:      'rgba(167,139,250,0.09)',
    border:  'rgba(167,139,250,0.45)',
  },
}

interface CategoryMeta {
  id: Category
  label: string
  tag: string
  count: number
  Icon: React.FC<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>
  PanelIcon: React.FC<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>
}

const CATEGORIES: CategoryMeta[] = [
  { id: 'posts',     label: 'Post Designs',     tag: 'Social Media',    count: 17, Icon: LayoutGrid, PanelIcon: Palette   },
  { id: 'logos',     label: 'Logo Designs',     tag: 'Branding',        count: 2,  Icon: Tag,        PanelIcon: Layers    },
  { id: 'handbills', label: 'Handbill Designs', tag: 'Print and Flyers', count: 14, Icon: Printer,    PanelIcon: FileImage },
]
const IMAGES: Record<Category, { src: string; alt: string }[]> = {
  posts: [
    { src: post01, alt: 'Akuru Panthiyak post design' },
    { src: post02, alt: 'Aruna Agri post design' },
    { src: post03, alt: 'Dinuka post design' },
    { src: post04, alt: 'Lahiru Madusanka post design' },
    { src: post05, alt: 'Mathematics class post design' },
    { src: post06, alt: 'Nekmal 2026 post design' },
    { src: post07, alt: 'Nuwan speed revision post design' },
    { src: post08, alt: 'Nuwan C new post design' },
    { src: post09, alt: 'Nuwan C time table post design' },
    { src: post10, alt: 'Nuwan shishyathwa post design' },
    { src: post11, alt: 'Science post design' },
    { src: post12, alt: 'Sinhala class post design' },
    { src: post13, alt: 'Tamil class succeeded post design' },
    { src: post14, alt: 'Yasitha 5 to 6 post design' },
    { src: post15, alt: 'Yasitha OL result post design' },
    { src: post16, alt: 'Pradeep English post design' },
    { src: post17, alt: 'Sajjitha Surya Mangalya post design' },
  ],
  logos: [
    { src: logo01, alt: 'Crozy Villa logo design 1' },
    { src: logo02, alt: 'Crozy Villa logo design 2' },
  ],
  handbills: [
    { src: hand01, alt: 'Handbill design 12' },
    { src: hand02, alt: 'Handbill design 14' },
    { src: hand03, alt: 'Handbill design 15' },
    { src: hand04, alt: 'Free flyer mockup' },
    { src: hand05, alt: 'Mockup 2' },
    { src: hand06, alt: 'Mockup flyer 02' },
    { src: hand07, alt: 'Mockup flyer 03' },
    { src: hand08, alt: 'Mockup flyer 06' },
    { src: hand09, alt: 'Mockup flyer 1 02' },
    { src: hand10, alt: 'Sasantha mockup 1' },
    { src: hand11, alt: 'Sasantha mockup 3' },
    { src: hand12, alt: 'Yasitha mockup 1' },
    { src: hand13, alt: 'Yasitha mockup 2' },
    { src: hand14, alt: 'Yasitha mockup 3' },
  ],
}

function Lightbox({
  src, alt, onClose, onPrev, onNext, theme,
}: {
  src: string; alt: string
  onClose: () => void; onPrev: () => void; onNext: () => void
  theme: typeof THEME[Category]
}) {
  const btnBase = 'flex items-center justify-center rounded-full border bg-black/70 text-white/80 transition-all duration-200'
  return (
    <div
      id="portfolio-lightbox"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.93)', backdropFilter: 'blur(16px)' }}
      onClick={onClose}
    >
      {/* Prev button — hidden on small screens, use swipe instead */}
      <button id="lightbox-prev-btn" onClick={e => { e.stopPropagation(); onPrev() }}
        className={'absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 ' + btnBase}
        style={{ borderColor: 'rgba(255,255,255,0.12)' }}
        onMouseEnter={e => { const b = e.currentTarget; b.style.borderColor = theme.border; b.style.color = theme.primary; b.style.boxShadow = '0 0 16px ' + theme.glow }}
        onMouseLeave={e => { const b = e.currentTarget; b.style.borderColor = 'rgba(255,255,255,0.12)'; b.style.color = 'rgba(255,255,255,0.8)'; b.style.boxShadow = 'none' }}
        aria-label="Previous image"><ChevronLeft size={20} /></button>

      <div className="relative max-h-[85vh] sm:max-h-[90vh] max-w-[92vw] sm:max-w-[90vw]" onClick={e => e.stopPropagation()}>
        <img src={src} alt={alt}
          className="max-h-[80vh] sm:max-h-[88vh] max-w-full rounded-xl sm:rounded-2xl object-contain"
          style={{ boxShadow: '0 0 80px ' + theme.glow + ', 0 30px 60px rgba(0,0,0,0.5)' }} />
        <p className="mt-2 sm:mt-3 text-center text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{alt}</p>
      </div>

      {/* Next button */}
      <button id="lightbox-next-btn" onClick={e => { e.stopPropagation(); onNext() }}
        className={'absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 ' + btnBase}
        style={{ borderColor: 'rgba(255,255,255,0.12)' }}
        onMouseEnter={e => { const b = e.currentTarget; b.style.borderColor = theme.border; b.style.color = theme.primary; b.style.boxShadow = '0 0 16px ' + theme.glow }}
        onMouseLeave={e => { const b = e.currentTarget; b.style.borderColor = 'rgba(255,255,255,0.12)'; b.style.color = 'rgba(255,255,255,0.8)'; b.style.boxShadow = 'none' }}
        aria-label="Next image"><ChevronRight size={20} /></button>

      {/* Close button */}
      <button id="lightbox-close-btn" onClick={onClose}
        className={'absolute right-3 sm:right-5 top-3 sm:top-5 h-9 w-9 sm:h-10 sm:w-10 ' + btnBase}
        style={{ borderColor: 'rgba(255,255,255,0.10)' }}
        onMouseEnter={e => { const b = e.currentTarget; b.style.borderColor = theme.border; b.style.color = theme.primary }}
        onMouseLeave={e => { const b = e.currentTarget; b.style.borderColor = 'rgba(255,255,255,0.10)'; b.style.color = 'rgba(255,255,255,0.6)' }}
        aria-label="Close lightbox"><X size={16} /></button>
    </div>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState<Category>('posts')
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const images     = IMAGES[active]
  const activeMeta = CATEGORIES.find(c => c.id === active)!
  const theme      = THEME[active]

  const openLightbox  = (idx: number) => setLightboxIdx(idx)
  const closeLightbox = () => setLightboxIdx(null)
  const prevImage = () => setLightboxIdx(p => p === null ? null : (p - 1 + images.length) % images.length)
  const nextImage = () => setLightboxIdx(p => p === null ? null : (p + 1) % images.length)

  return (
    <>
      <section
        id="portfolio"
        className="logo-grad-band relative scroll-mt-28 overflow-hidden border-t border-white/10 px-4 py-16 sm:py-24 sm:px-6 lg:px-8"
      >
        {/* Dynamic coloured glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute bottom-0 left-1/2 h-60 sm:h-96 w-[400px] sm:w-[700px] -translate-x-1/2 rounded-full blur-3xl opacity-30 transition-all duration-700"
            style={{ background: 'radial-gradient(ellipse at center,' + theme.glow + ' 0%,transparent 70%)' }} />
          <div className="absolute -left-12 sm:-left-24 top-24 h-48 w-48 sm:h-72 sm:w-72 rounded-full blur-2xl opacity-20 transition-all duration-700"
            style={{ background: 'radial-gradient(circle,' + theme.glow + ' 0%,transparent 70%)' }} />
          <div className="logo-grad-line absolute top-0 left-0 right-0 h-[2px] opacity-30" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px]">

          {/* Section header */}
          <div className="mb-8 sm:mb-12">
            <p className="logo-tag mb-3 sm:mb-4 inline-block px-4 sm:px-5 py-1 sm:py-1.5 text-[0.6rem] sm:text-xs font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em]">Portfolio</p>
            <h2 className="logo-grad-shimmer logo-grad-text text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.04em]">
              Selected Creative Work.
            </h2>
            <p className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.40)' }}>
              Browse through our work across social media post designs, brand identity, and print materials.
            </p>
            <div className="logo-grad-line mt-4 sm:mt-5 h-[3px] w-12 sm:w-16 rounded-full" style={{ animation: 'logoGradIn 0.8s ease-out 0.3s both' }} />
          </div>

          {/* Category tabs — scrollable on mobile */}
          <div id="portfolio-tabs" className="mb-6 sm:mb-10 flex overflow-x-auto scrollbar-hide gap-2 sm:gap-3 pb-1" role="tablist" aria-label="Portfolio categories">
            {CATEGORIES.map(cat => {
              const isActive = cat.id === active
              const t = THEME[cat.id]
              const CatIcon = cat.Icon
              return (
                <button
                  key={cat.id}
                  id={'tab-' + cat.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={'panel-' + cat.id}
                  onClick={() => { setActive(cat.id); setLightboxIdx(null) }}
                  className="group relative flex flex-shrink-0 items-center gap-2 sm:gap-2.5 rounded-lg sm:rounded-xl border px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300"
                  style={{
                    background:  isActive ? t.bg : 'rgba(255,255,255,0.03)',
                    borderColor: isActive ? t.border : 'rgba(255,255,255,0.08)',
                    color:       isActive ? t.primary : 'rgba(255,255,255,0.50)',
                    boxShadow:   isActive ? '0 0 24px ' + t.glow : 'none',
                  }}
                >
                  <CatIcon size={14} strokeWidth={2} style={{ color: isActive ? t.primary : 'rgba(255,255,255,0.38)', transition: 'color 0.3s' }} />
                  <span className="whitespace-nowrap">{cat.label}</span>
                  <span className="rounded-full px-1.5 sm:px-2 py-0.5 text-[0.5rem] sm:text-[0.6rem] font-bold uppercase tracking-wider"
                    style={{ background: isActive ? t.badge : 'rgba(255,255,255,0.06)', color: isActive ? t.primary : 'rgba(255,255,255,0.35)' }}>
                    {cat.count}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 sm:left-4 sm:right-4 h-[2px] rounded-full"
                      style={{ background: 'linear-gradient(90deg,' + t.primary + ',' + t.border + ')', animation: 'logoGradIn 0.4s ease-out both' }} />
                  )}
                </button>
              )
            })}
          </div>

          {/* Panel */}
          <div id={'panel-' + active} role="tabpanel" aria-labelledby={'tab-' + active}>

            {/* Panel header */}
            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-xl sm:rounded-2xl border px-4 sm:px-5 py-3 sm:py-4 transition-all duration-500"
              style={{ background: theme.bg, borderColor: theme.border, boxShadow: '0 4px 24px ' + theme.glow }}>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl transition-all duration-500"
                  style={{ background: theme.badge, border: '1.5px solid ' + theme.border }}>
                  <activeMeta.PanelIcon size={18} strokeWidth={1.8} style={{ color: theme.primary }} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold" style={{ color: theme.primary }}>{activeMeta.label}</h3>
                  <p className="text-[0.6rem] sm:text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.38)' }}>{activeMeta.tag}</p>
                </div>
              </div>
              <span className="rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[0.55rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.18em]"
                style={{ background: theme.badge, color: theme.primary, border: '1px solid ' + theme.border }}>
                {images.length} {images.length === 1 ? 'work' : 'works'}
              </span>
            </div>

            {/* Image grid — 2 cols on tiny mobile, scaling up */}
            <div className={'grid gap-2 sm:gap-4 ' + (active === 'logos' ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4')}>
              {images.map((img, idx) => (
                <button
                  key={idx}
                  id={'portfolio-img-' + active + '-' + idx}
                  onClick={() => openLightbox(idx)}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl border bg-[#0c0c0c] transition-all duration-500"
                  style={{ borderColor: 'rgba(255,255,255,0.07)', aspectRatio: active === 'logos' ? '4/3' : '1/1' }}
                  onMouseEnter={e => { const b = e.currentTarget; b.style.borderColor = theme.border; b.style.boxShadow = '0 8px 40px ' + theme.glow }}
                  onMouseLeave={e => { const b = e.currentTarget; b.style.borderColor = 'rgba(255,255,255,0.07)'; b.style.boxShadow = 'none' }}
                  aria-label={'View ' + img.alt}
                >
                  <img src={img.src} alt={img.alt} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 sm:gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: 'linear-gradient(135deg,' + theme.primary + 'bb 0%,rgba(0,0,0,0.82) 100%)' }}>
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-white/70 bg-black/30">
                      <ZoomIn size={18} className="text-white sm:[size:22px]" />
                    </div>
                    <span className="text-[0.55rem] sm:text-xs font-semibold uppercase tracking-widest text-white">View</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ boxShadow: 'inset 0 0 0 1.5px ' + theme.border }} />
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {lightboxIdx !== null && (
        <Lightbox
          src={images[lightboxIdx].src}
          alt={images[lightboxIdx].alt}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          theme={theme}
        />
      )}
    </>
  )
}
