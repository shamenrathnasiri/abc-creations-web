import { useEffect, useRef, useState } from 'react'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 80
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  )
}

const pillars = [
  {
    number: '01',
    title: 'Creativity First',
    body: 'Every pixel is intentional. We craft designs that don\'t just look good — they tell your story and set you apart from the noise.',
    accent: 'hsl(28 84% 49%)',
  },
  {
    number: '02',
    title: 'Built to Last',
    body: 'From logos to full web systems, we build with quality and longevity in mind — solutions that grow with your business.',
    accent: 'hsl(38 100% 59%)',
  },
  {
    number: '03',
    title: 'Client Obsessed',
    body: 'You\'re not just a project. We invest in understanding your goals and stay with you until the result truly exceeds expectations.',
    accent: 'hsl(28 84% 49%)',
  },
]

const stats = [
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 3, suffix: '+', label: 'Years of Experience' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 40, suffix: '+', label: 'Happy Clients' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative scroll-mt-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050505 0%, #080808 100%)' }}
    >
      {/* ── Decorative background elements ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -right-16 sm:-right-32 top-0 h-[400px] w-[400px] sm:h-[700px] sm:w-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(28 84% 49% / 0.07) 0%, transparent 65%)' }}
        />
        <div
          className="absolute -bottom-12 sm:-bottom-24 -left-12 sm:-left-24 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(38 100% 59% / 0.05) 0%, transparent 60%)' }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(28 84% 49% / 0.3), transparent)' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:py-28 lg:px-8">

        {/* ── TOP: Label + Hero headline ── */}
        <div
          className="mb-12 sm:mb-20 grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20 lg:items-end"
        >
          {/* Left: headline */}
          <div
            className="transition-all duration-700"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(32px)' }}
          >
            <span
              className="mb-4 sm:mb-5 inline-flex items-center gap-2 sm:gap-3 text-[0.6rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em]"
              style={{ color: 'hsl(28 84% 49%)' }}
            >
              <span
                className="inline-block h-[2px] w-5 sm:w-6 rounded-full"
                style={{ background: 'linear-gradient(90deg, hsl(28 84% 49%), hsl(38 100% 59%))' }}
              />
              Who We Are
            </span>

            <h2
              className="font-black text-white leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3.6rem)' }}
            >
              We design{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, hsl(28 84% 49%), hsl(38 100% 59%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                brands
              </span>{' '}
              that{' '}
              <br className="hidden lg:block" />
              people{' '}
              <span className="italic font-extrabold text-white/30">remember.</span>
            </h2>
          </div>

          {/* Right: description + CTA */}
          <div
            className="transition-all duration-700 delay-150"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(32px)' }}
          >
            <p className="text-sm sm:text-base leading-[1.75] sm:leading-[1.9] mb-4 sm:mb-6" style={{ color: '#6b6864' }}>
              ABC Graphics is a creative studio based in Sri Lanka, specialising in graphic design,
              web development, and digital branding. We partner with businesses — from startups to
              established brands — to craft visual identities and digital experiences that truly stand out.
            </p>
            <p className="text-sm sm:text-base leading-[1.75] sm:leading-[1.9]" style={{ color: '#6b6864' }}>
              Every project we take on is treated with the same care and dedication, regardless of size.
              We believe great design isn't a luxury — it's what separates forgettable brands from
              unforgettable ones.
            </p>
          </div>
        </div>

        {/* ── STATS ROW ── */}
        <div
          className="mb-12 sm:mb-20 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-xl sm:rounded-2xl"
          style={{ border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.04)' }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-5 sm:py-8 group transition-all duration-500"
              style={{
                background: '#080808',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div
                className="text-3xl sm:text-4xl md:text-5xl font-black tabular-nums"
                style={{
                  background: 'linear-gradient(135deg, hsl(28 84% 49%), hsl(38 100% 59%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[0.6rem] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center" style={{ color: '#5a5855' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── PILLARS ── */}
        <div
          className="transition-all duration-700 delay-200 mb-2"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <p
            className="text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] mb-6 sm:mb-8"
            style={{ color: 'hsl(28 84% 49%)' }}
          >
            Our Principles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-6 sm:p-8 cursor-default transition-all duration-500 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                transitionDelay: `${i * 80}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`,
              }}
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 30% 40%, ${pillar.accent}14 0%, transparent 65%)` }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 sm:left-8 sm:right-8 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${pillar.accent}, transparent)` }}
              />

              {/* Number */}
              <span
                className="block text-4xl sm:text-5xl font-black mb-4 sm:mb-6 leading-none select-none"
                style={{
                  color: `${pillar.accent}18`,
                  fontVariantNumeric: 'tabular-nums',
                  letterSpacing: '-0.04em',
                }}
              >
                {pillar.number}
              </span>

              {/* Divider */}
              <div
                className="mb-4 sm:mb-5 h-[2px] w-7 sm:w-8 rounded-full transition-all duration-500 group-hover:w-12 sm:group-hover:w-14"
                style={{ background: `linear-gradient(90deg, ${pillar.accent}, hsl(38 100% 59%))` }}
              />

              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm leading-[1.75] sm:leading-[1.85]" style={{ color: '#65625f' }}>
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
