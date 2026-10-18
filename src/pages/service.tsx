import { useEffect, useRef, useState } from 'react'

/* ── DATA ── */
const services = [
  {
    id: 'logo',
    category: 'Design',
    number: '01',
    title: 'Logo Design',
    desc: 'Distinctive, memorable logos that communicate your brand\'s essence at a glance — crafted with precision, purpose, and lasting impact.',
    tags: ['Brand Identity', 'Vector Art', 'Multiple Concepts'],
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} width={24} height={24}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 'social',
    category: 'Design',
    number: '02',
    title: 'Social Media Design',
    desc: 'Scroll-stopping visuals built for every platform — posts, stories, reels covers, and templates that keep your audience engaged.',
    tags: ['Posts & Stories', 'Reels Covers', 'Ad Creatives'],
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} width={24} height={24}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
  {
    id: 'book',
    category: 'Design',
    number: '03',
    title: 'Book & Tute Cover',
    desc: 'Professional, polished covers for textbooks, tutorials, and publications that command attention on shelves and screens alike.',
    tags: ['Textbooks', 'eBooks', 'Academic Publications'],
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} width={24} height={24}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 'print',
    category: 'Design',
    number: '04',
    title: 'Print Design',
    desc: 'Brochures, flyers, banners, and print-ready materials crafted to make a bold impression in the physical world.',
    tags: ['Brochures', 'Banners', 'Flyers & Posters'],
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} width={24} height={24}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
  },
  {
    id: 'uiux',
    category: 'Tech',
    number: '05',
    title: 'UI / UX Design',
    desc: 'Intuitive interfaces and elegant user flows that delight visitors, reduce friction, and drive measurable results for your product.',
    tags: ['Wireframes', 'Prototypes', 'Design Systems'],
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} width={24} height={24}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'web',
    category: 'Tech',
    number: '06',
    title: 'Web Development',
    desc: 'Custom-built, lightning-fast websites optimised to convert visitors into loyal clients — from landing pages to full-scale platforms.',
    tags: ['Responsive Design', 'SEO Optimised', 'Performance First'],
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} width={24} height={24}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 'software',
    category: 'Tech',
    number: '07',
    title: 'Software Solutions',
    desc: 'Tailored applications that streamline your operations, automate workflows, and scale effortlessly with your growing business.',
    tags: ['Custom Apps', 'API Integration', 'Cloud-Ready'],
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} width={24} height={24}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
]

/* ── ANIMATED BAR ── */
function Bar({ percent, delay = 0 }: { percent: number; delay?: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          setTimeout(() => setWidth(percent), delay)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [percent, delay])
  return (
    <div ref={ref} className="h-[3px] w-full rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
      <div
        className="h-full rounded-full"
        style={{
          width: `${width}%`,
          background: 'linear-gradient(90deg, hsl(28 84% 49%), hsl(38 100% 59%))',
          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 0 8px hsl(28 84% 49% / 0.5)',
        }}
      />
    </div>
  )
}

/* ── MAIN EXPORT ── */
export default function Services() {
  const [active, setActive] = useState(0)
  const svc = services[active]

  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #080808 0%, #050505 100%)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* ── Background decorations ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(38 100% 59% / 0.06) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(28 84% 49% / 0.05) 0%, transparent 60%)' }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(38 100% 59% / 0.25), transparent)' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 lg:px-8">

        {/* ── Section Header ── */}
        <div className="mb-16 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span
              className="mb-4 inline-flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.35em]"
              style={{ color: 'hsl(28 84% 49%)' }}
            >
              <span
                className="inline-block h-[2px] w-6 rounded-full"
                style={{ background: 'linear-gradient(90deg, hsl(28 84% 49%), hsl(38 100% 59%))' }}
              />
              What We Do
            </span>
            <h2
              className="font-black text-white leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
            >
              Every service you need,{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, hsl(28 84% 49%), hsl(38 100% 59%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                under one roof.
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-[1.9] lg:text-right" style={{ color: '#5a5855' }}>
            From pixel-perfect visuals to powerful digital platforms — we cover every side of your brand.
          </p>
        </div>

        {/* ── Main Interactive Panel ── */}
        <div
          className="overflow-hidden rounded-3xl"
          style={{ border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">

            {/* LEFT: Service list */}
            <div
              className="flex flex-col"
              style={{ borderRight: '1px solid rgba(255,255,255,0.04)', background: '#060606' }}
            >
              {/* Header */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.35em]" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  Services
                </span>
                <span className="text-[0.65rem] font-bold tabular-nums" style={{ color: 'rgba(255,255,255,0.15)' }}>
                  {String(active + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                </span>
              </div>

              {/* Service rows */}
              <div className="flex flex-col overflow-y-auto">
                {services.map((s, i) => {
                  const isActive = i === active
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActive(i)}
                      className="group relative flex items-center gap-4 px-6 py-5 text-left transition-all duration-300"
                      style={{
                        background: isActive
                          ? 'linear-gradient(90deg, hsl(28 84% 49% / 0.08), transparent)'
                          : 'transparent',
                        borderBottom: '1px solid rgba(255,255,255,0.03)',
                      }}
                    >
                      {/* Active indicator */}
                      <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-r-full transition-all duration-300"
                        style={{
                          width: 3,
                          height: isActive ? '60%' : 0,
                          background: 'linear-gradient(180deg, hsl(28 84% 49%), hsl(38 100% 59%))',
                          boxShadow: isActive ? '0 0 8px hsl(28 84% 49% / 0.6)' : 'none',
                        }}
                      />

                      {/* Icon box */}
                      <div
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300"
                        style={{
                          background: isActive
                            ? 'linear-gradient(135deg, hsl(28 84% 49% / 0.2), hsl(38 100% 59% / 0.1))'
                            : 'rgba(255,255,255,0.03)',
                          border: isActive
                            ? '1px solid hsl(28 84% 49% / 0.3)'
                            : '1px solid rgba(255,255,255,0.06)',
                          color: isActive ? 'hsl(38 100% 59%)' : 'rgba(255,255,255,0.3)',
                        }}
                      >
                        {s.icon}
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span
                            className="text-sm font-semibold leading-tight transition-colors duration-300"
                            style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.45)' }}
                          >
                            {s.title}
                          </span>
                          <span
                            className="text-[0.6rem] font-bold px-2 py-0.5 rounded-full ml-2 flex-shrink-0 transition-all duration-300"
                            style={{
                              background: s.category === 'Design'
                                ? 'hsl(28 84% 49% / 0.1)'
                                : 'hsl(210 80% 55% / 0.1)',
                              color: s.category === 'Design'
                                ? 'hsl(28 84% 49%)'
                                : 'hsl(210 80% 65%)',
                              border: `1px solid ${s.category === 'Design' ? 'hsl(28 84% 49% / 0.2)' : 'hsl(210 80% 55% / 0.2)'}`,
                            }}
                          >
                            {s.category}
                          </span>
                        </div>
                        {/* Mini progress bar */}
                        <div className="mt-2">
                          <Bar percent={isActive ? 100 : 0} delay={0} />
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* RIGHT: Detail panel */}
            <div
              key={svc.id}
              className="relative overflow-hidden flex flex-col"
              style={{ background: 'linear-gradient(135deg, #000000 0%, #000000 100%)', minHeight: 480 }}
            >
              {/* Background glow for active card */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at 80% 20%, hsl(28 84% 49% / 0.06) 0%, transparent 60%)',
                }}
              />

              {/* Top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, hsl(28 84% 49% / 0.4), transparent)' }}
              />

              <div className="relative z-10 flex flex-1 flex-col justify-between p-8 md:p-12">
                {/* Top content */}
                <div>
                  {/* Number + category */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="text-[0.65rem] font-bold uppercase tracking-[0.4em]"
                      style={{ color: 'hsl(28 84% 49%)' }}
                    >
                      {svc.category === 'Design' ? 'Creative Design' : 'Technology'}
                    </span>
                    <span
                      className="font-black tabular-nums"
                      style={{
                        fontSize: '5rem',
                        lineHeight: 1,
                        color: 'rgba(255,255,255,0.03)',
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {svc.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, hsl(28 84% 49% / 0.15), hsl(38 100% 59% / 0.08))',
                      border: '1px solid hsl(28 84% 49% / 0.25)',
                      color: 'hsl(38 100% 59%)',
                    }}
                  >
                    <div style={{ transform: 'scale(1.5)' }}>{svc.icon}</div>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-black text-white leading-tight tracking-tight mb-4"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
                  >
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-[1.85] mb-8 max-w-lg" style={{ color: '#5a5855' }}>
                    {svc.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.5)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom: navigation + CTA */}
                <div className="flex items-center justify-between pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {/* Prev / Next */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setActive((active - 1 + services.length) % services.length)}
                      className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.4)',
                      }}
                      aria-label="Previous service"
                    >
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setActive((active + 1) % services.length)}
                      className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.4)',
                      }}
                      aria-label="Next service"
                    >
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, hsl(28 84% 49%), hsl(38 100% 59%))',
                      boxShadow: '0 4px 20px hsl(28 84% 49% / 0.3)',
                    }}
                  >
                    Get a Quote
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} width={13} height={13}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom strip: key capabilities ── */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Graphic Design', pct: 95 },
            { label: 'Web Development', pct: 90 },
            { label: 'UI / UX Design', pct: 85 },
            { label: 'Software Solutions', pct: 80 },
          ].map((item, i) => (
            <div
              key={item.label}
              className="rounded-2xl px-5 py-4"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div className="flex items-end justify-between mb-3">
                <span className="text-xs font-semibold text-white/50">{item.label}</span>
                <span
                  className="text-xs font-black tabular-nums"
                  style={{
                    background: 'linear-gradient(135deg, hsl(28 84% 49%), hsl(38 100% 59%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {item.pct}%
                </span>
              </div>
              <Bar percent={item.pct} delay={i * 120} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
