import { useEffect, useRef, useState, useCallback } from 'react'

/* COUNT-UP */
function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
	const [count, setCount] = useState(0)
	const ref = useRef<HTMLSpanElement>(null)
	const started = useRef(false)
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !started.current) {
					started.current = true
					const steps = 60
					const increment = target / steps
					let current = 0
					const timer = setInterval(() => {
						current += increment
						if (current >= target) { setCount(target); clearInterval(timer) }
						else setCount(Math.floor(current))
					}, 1600 / steps)
				}
			},
			{ threshold: 0.4 }
		)
		if (ref.current) observer.observe(ref.current)
		return () => observer.disconnect()
	}, [target])
	return <span ref={ref}>{count}{suffix}</span>
}

/* CIRCULAR SKILL GAUGE */
function CircularGauge({
	label, percent, delay = 0, category
}: { label: string; percent: number; delay?: number; category: 'design' | 'tech' }) {
	const [progress, setProgress] = useState(0)
	const wrapRef = useRef<HTMLDivElement>(null)
	const started = useRef(false)

	const r = 36
	const circ = 2 * Math.PI * r

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !started.current) {
					started.current = true
					setTimeout(() => {
						const steps = 60
						const duration = 1400
						const increment = percent / steps
						let current = 0
						const timer = setInterval(() => {
							current += increment
							if (current >= percent) {
								setProgress(percent)
								clearInterval(timer)
							} else {
								setProgress(Math.floor(current))
							}
						}, duration / steps)
					}, delay)
				}
			},
			{ threshold: 0.3 }
		)
		if (wrapRef.current) observer.observe(wrapRef.current)
		return () => observer.disconnect()
	}, [percent, delay])

	const strokeDash = (progress / 100) * circ
	const gradId = `gauge-grad-${label.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}`

	const designGrad = { start: '#f7931a', end: '#ffd700', shadow: 'rgba(247,147,26,0.6)' }
	const techGrad = { start: '#f7d15a', end: '#f7931a', shadow: 'rgba(247,209,90,0.55)' }
	const grad = category === 'design' ? designGrad : techGrad

	return (
		<div ref={wrapRef} className="flex flex-col items-center gap-3 group">
			<div className="relative">
				<svg width={96} height={96} viewBox="0 0 96 96" style={{ transform: 'rotate(-90deg)' }}>
					<defs>
						<linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor={grad.start} />
							<stop offset="100%" stopColor={grad.end} />
						</linearGradient>
					</defs>
					<circle cx={48} cy={48} r={r} fill="none" stroke="rgba(247,209,90,0.06)" strokeWidth={7} />
					<circle
						cx={48} cy={48} r={r} fill="none"
						stroke={`url(#${gradId})`}
						strokeWidth={7}
						strokeLinecap="round"
						strokeDasharray={`${strokeDash} ${circ}`}
						style={{ transition: 'stroke-dasharray 0.05s linear', filter: `drop-shadow(0 0 6px ${grad.shadow})` }}
					/>
				</svg>
				<div className="absolute inset-0 flex items-center justify-center">
					<span className="logo-grad-text font-black tabular-nums" style={{ fontSize: '1rem' }}>
						{progress}%
					</span>
				</div>
			</div>
			<span className="text-center text-[0.7rem] font-semibold leading-snug text-white/50 tracking-wide group-hover:text-white/80 transition-colors duration-300 px-1">
				{label}
			</span>
		</div>
	)
}

/* DATA */
const allServices = [
	{
		id: 'logo',
		category: 'Creative Design',
		title: 'Logo Design',
		desc: 'Distinctive, memorable logos that tell your brand story at a glance — crafted with precision and purpose.',
		tags: ['Brand Identity', 'Vector Art', 'Concepts'],
		icon: (
			<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={32} height={32}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
			</svg>
		),
	},
	{
		id: 'social',
		category: 'Creative Design',
		title: 'Social Media Design',
		desc: 'Scroll-stopping graphics, posts, and templates built for maximum engagement across every platform.',
		tags: ['Posts & Stories', 'Templates', 'Reels Covers'],
		icon: (
			<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={32} height={32}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
			</svg>
		),
	},
	{
		id: 'book',
		category: 'Creative Design',
		title: 'Book & Tute Cover Design',
		desc: 'Professional covers for textbooks, tutorials, and publications that command attention on any shelf.',
		tags: ['Textbooks', 'eBooks', 'Publications'],
		icon: (
			<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={32} height={32}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
			</svg>
		),
	},
	{
		id: 'print',
		category: 'Creative Design',
		title: 'Print Design',
		desc: 'Brochures, flyers, banners, and print-ready materials crafted with precision for real-world impact.',
		tags: ['Brochures', 'Banners', 'Flyers'],
		icon: (
			<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={32} height={32}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
			</svg>
		),
	},
	{
		id: 'uiux',
		category: 'Creative Design',
		title: 'UI / UX Design',
		desc: 'Intuitive interfaces and elegant user flows that delight your visitors and drive measurable results.',
		tags: ['Wireframes', 'Prototypes', 'Design Systems'],
		icon: (
			<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={32} height={32}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
			</svg>
		),
	},
	{
		id: 'web',
		category: 'Technology',
		title: 'Web Development',
		desc: 'Custom-built, lightning-fast websites designed to convert visitors into clients — from landing pages to full-scale platforms.',
		tags: ['Responsive Design', 'SEO Optimized', 'Performance First'],
		icon: (
			<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={32} height={32}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
			</svg>
		),
	},
	{
		id: 'software',
		category: 'Technology',
		title: 'Software Solutions',
		desc: 'Tailored software applications built to streamline your business, automate workflows, and scale with your growth.',
		tags: ['Custom Apps', 'API Integration', 'Cloud Solutions'],
		icon: (
			<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={32} height={32}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
			</svg>
		),
	},
]

const stats = [
	{ value: 4, suffix: '+', label: 'Years Experience' },
	{ value: 300, suffix: '+', label: 'Happy Clients' },
	{ value: 400, suffix: '+', label: 'Projects Completed' },
]

const designSkills = [
	{ label: 'Graphic Design', percent: 95 },
	{ label: 'Logo & Brand Identity', percent: 92 },
	{ label: 'Social Media Design', percent: 90 },
	{ label: 'Print Design', percent: 88 },
	{ label: 'Book & Cover Design', percent: 87 },
]

const techSkills = [
	{ label: 'UI / UX Design', percent: 85 },
	{ label: 'Web Development', percent: 95 },
	{ label: 'Software Solutions', percent: 80 },
]

/* CAROUSEL CARD */
function ServiceCard({ svc, isActive, position }: {
	svc: typeof allServices[0]
	isActive: boolean
	position: number
}) {
	const abs = Math.abs(position)
	const visible = abs <= 2
	const scale = isActive ? 1 : abs === 1 ? 0.83 : 0.7
	const opacity = isActive ? 1 : abs === 1 ? 0.55 : 0.25
	const zIndex = isActive ? 10 : abs === 1 ? 5 : 2
	const translateX = position * 100
	const blur = abs === 2 ? 3 : 0

	return (
		<div
			aria-hidden={!isActive}
			style={{
				position: 'absolute',
				left: '50%',
				top: 0,
				width: '100%',
				maxWidth: 440,
				transform: `translateX(calc(-50% + ${translateX}%)) scale(${scale})`,
				opacity: visible ? opacity : 0,
				zIndex,
				transition: 'all 0.6s cubic-bezier(0.34, 1.4, 0.64, 1)',
				filter: blur > 0 ? `blur(${blur}px)` : 'none',
				pointerEvents: isActive ? 'auto' : 'none',
			}}
		>
			<div
				className="relative overflow-hidden rounded-3xl p-8"
				style={{
					background: isActive
						? 'linear-gradient(145deg, rgba(20,16,10,0.98) 0%, rgba(10,8,4,0.99) 100%)'
						: 'linear-gradient(145deg, rgba(14,14,14,0.9) 0%, rgba(8,8,8,0.95) 100%)',
					border: isActive
						? '1px solid rgba(247,209,90,0.15)'
						: '1px solid rgba(255,255,255,0.04)',
					boxShadow: isActive
						? '0 0 80px rgba(247,147,26,0.08), 0 32px 64px rgba(0,0,0,0.7)'
						: '0 8px 24px rgba(0,0,0,0.4)',
				}}
			>
				{/* Top glow */}
				{isActive && (
					<div
						className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-20"
						style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(247,147,26,0.6), transparent 70%)' }}
					/>
				)}

				{/* Corner accents — brand gold */}
				<div className="absolute left-0 top-0 h-16 w-[2px] rounded-full" style={{ background: 'linear-gradient(180deg,#f7931a,transparent)' }} />
				<div className="absolute left-0 top-0 h-[2px] w-16 rounded-full" style={{ background: 'linear-gradient(90deg,#f7931a,transparent)' }} />
				<div className="absolute right-0 bottom-0 h-16 w-[2px] rounded-full" style={{ background: 'linear-gradient(0deg,#ffd700,transparent)' }} />
				<div className="absolute right-0 bottom-0 h-[2px] w-16 rounded-full" style={{ background: 'linear-gradient(270deg,#ffd700,transparent)' }} />

				{/* Card number */}
				<span
					className="pointer-events-none absolute right-6 top-4 select-none font-black tabular-nums"
					style={{ fontSize: '4.5rem', lineHeight: 1, color: 'rgba(247,209,90,0.04)' }}
				>
					{String(allServices.findIndex(s => s.id === svc.id) + 1).padStart(2, '0')}
				</span>

				{/* Category badge + icon row */}
				<div className="relative z-10 mb-6 flex items-center justify-between">
					<span
						className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.35em]"
						style={{
							background: 'rgba(247,147,26,0.1)',
							border: '1px solid rgba(247,147,26,0.2)',
							color: '#f7931a',
						}}
					>
						{svc.category}
					</span>
					<div
						className="flex items-center justify-center rounded-xl transition-transform duration-300"
						style={{
							width: 52, height: 52,
							background: 'rgba(247,209,90,0.07)',
							border: '1px solid rgba(247,209,90,0.14)',
							color: '#f7d15a',
						}}
					>
						{svc.icon}
					</div>
				</div>

				{/* Text */}
				<div className="relative z-10">
					<h3 className="mb-3 text-[1.45rem] font-black tracking-tight text-white leading-tight">
						{svc.title}
					</h3>
					<p className="mb-8 text-sm leading-[1.9] text-[#5a5650]">
						{svc.desc}
					</p>

					<div className="flex flex-wrap gap-2">
						{svc.tags.map((tag) => (
							<span
								key={tag}
								className="rounded-full px-3 py-1 text-[0.63rem] font-semibold uppercase tracking-wider"
								style={{
									background: 'rgba(247,209,90,0.04)',
									border: '1px solid rgba(247,209,90,0.09)',
									color: 'rgba(247,209,90,0.45)',
								}}
							>
								{tag}
							</span>
						))}
					</div>
				</div>

				{/* Bottom gradient line */}
				<div
					className="absolute bottom-0 left-0 right-0 h-[2px]"
					style={{
						background: isActive
							? 'linear-gradient(90deg, transparent 0%, #f7931a 30%, #ffd700 70%, transparent 100%)'
							: 'transparent',
						transition: 'background 0.5s ease',
					}}
				/>
			</div>
		</div>
	)
}

/* CAROUSEL */
const INTERVAL = 3500

function ServicesCarousel() {
	const [active, setActive] = useState(0)
	const [tick, setTick] = useState(0)
	const total = allServices.length
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
	const tickRef = useRef<ReturnType<typeof setInterval> | null>(null)
	const paused = useRef(false)

	const goTo = useCallback((idx: number) => {
		setActive(((idx % total) + total) % total)
		setTick(0)
	}, [total])

	const next = useCallback(() => goTo(active + 1), [active, goTo])
	const prev = useCallback(() => goTo(active - 1), [active, goTo])

	// Tick for progress bar (100 steps per interval)
	const startTimers = useCallback(() => {
		if (intervalRef.current) clearInterval(intervalRef.current)
		if (tickRef.current) clearInterval(tickRef.current)
		setTick(0)
		intervalRef.current = setInterval(() => {
			if (!paused.current) {
				setActive(a => ((a + 1) % total))
				setTick(0)
			}
		}, INTERVAL)
		tickRef.current = setInterval(() => {
			if (!paused.current) setTick(t => Math.min(t + 1, 100))
		}, INTERVAL / 100)
	}, [total])

	useEffect(() => {
		startTimers()
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current)
			if (tickRef.current) clearInterval(tickRef.current)
		}
	}, [startTimers])

	const pause = () => { paused.current = true }
	const resume = () => { paused.current = false }

	const handleDotClick = (i: number) => {
		goTo(i)
		startTimers()
	}
	const handlePrev = () => { prev(); startTimers() }
	const handleNext = () => { next(); startTimers() }

	return (
		<div className="w-full select-none" onMouseEnter={pause} onMouseLeave={resume}>
			{/* Stage */}
			<div className="relative mx-auto w-full" style={{ height: 370, maxWidth: 900 }}>
				{allServices.map((svc, i) => {
					let pos = i - active
					if (pos > total / 2) pos -= total
					if (pos < -total / 2) pos += total
					return (
						<ServiceCard key={svc.id} svc={svc} isActive={i === active} position={pos} />
					)
				})}
			</div>

			{/* Progress bar */}
			<div className="mx-auto mt-8 max-w-[440px] h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(247,209,90,0.07)' }}>
				<div
					className="h-full rounded-full"
					style={{
						width: `${tick}%`,
						background: 'linear-gradient(90deg,#f7931a,#ffd700)',
						transition: 'width 0.12s linear',
						boxShadow: '0 0 8px rgba(247,147,26,0.5)',
					}}
				/>
			</div>

			{/* Controls row */}
			<div className="mt-5 flex items-center justify-center gap-5">
				{/* Prev */}
				<button
					onClick={handlePrev}
					aria-label="Previous service"
					className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
					style={{
						background: 'rgba(247,209,90,0.06)',
						border: '1px solid rgba(247,209,90,0.12)',
						color: '#f7d15a',
					}}
				>
					<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} width={14} height={14}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				{/* Dots */}
				<div className="flex items-center gap-[7px]">
					{allServices.map((svc, i) => (
						<button
							key={svc.id}
							onClick={() => handleDotClick(i)}
							aria-label={`Go to ${svc.title}`}
							style={{
								width: i === active ? 24 : 6,
								height: 6,
								borderRadius: 99,
								background: i === active
									? 'linear-gradient(90deg,#f7931a,#ffd700)'
									: 'rgba(247,209,90,0.15)',
								boxShadow: i === active ? '0 0 8px rgba(247,147,26,0.6)' : 'none',
								transition: 'all 0.35s cubic-bezier(0.34,1.4,0.64,1)',
								border: 'none',
								cursor: 'pointer',
								padding: 0,
							}}
						/>
					))}
				</div>

				{/* Next */}
				<button
					onClick={handleNext}
					aria-label="Next service"
					className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
					style={{
						background: 'rgba(247,209,90,0.06)',
						border: '1px solid rgba(247,209,90,0.12)',
						color: '#f7d15a',
					}}
				>
					<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} width={14} height={14}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>

			{/* Counter */}
			<p className="mt-3 text-center text-[0.65rem] font-bold tracking-[0.3em] text-[#3a3630]">
				{String(active + 1).padStart(2, '0')} &nbsp;/&nbsp; {String(total).padStart(2, '0')}
			</p>
		</div>
	)
}

/* PAGE */
export default function Services() {
	return (
		<section
			id="services"
			className="relative scroll-mt-28 overflow-hidden bg-[#030303] px-4 py-20 sm:px-6 lg:px-8"
			style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
		>
			{/* Background */}
			<div className="pointer-events-none absolute inset-0" aria-hidden="true">
				<div className="logo-grad-line absolute left-0 right-0 top-0 h-[2px] opacity-40" />
				<div className="logo-grad-orb absolute -right-40 -top-40 h-[500px] w-[500px] blur-3xl opacity-20" />
				<div className="logo-grad-orb absolute -bottom-32 -left-32 h-80 w-80 blur-3xl opacity-10" />
				<div
					className="absolute inset-0 opacity-[0.015]"
					style={{
						backgroundImage: 'radial-gradient(circle, rgba(247,209,90,1) 1px, transparent 1px)',
						backgroundSize: '36px 36px',
					}}
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-6xl">

				{/* Section header */}
				<div className="mb-16 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<div className="mb-4 flex items-center gap-3">
							<div className="h-[1px] w-6" style={{ background: 'linear-gradient(90deg,#f7931a,#ffd700)' }} />
							<span className="text-xs font-bold uppercase tracking-[0.45em] text-[#f7d15a]">What We Do</span>
						</div>
						<h2 className="max-w-lg text-[2.2rem] font-black leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.8rem]">
							Services Built to{' '}
							<span className="logo-grad-text">Move Brands</span>
							{' '}Forward
						</h2>
						<div className="logo-grad-line mt-5 h-[3px] w-14 rounded-full" />
					</div>
					<p className="hidden max-w-xs text-sm leading-[1.9] text-[#6a6660] lg:block">
						From pixel-perfect designs to powerful digital solutions — we have got every side of your brand covered.
					</p>
				</div>

				{/* Stats bar */}
				<div
					className="mb-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl"
					style={{ background: 'rgba(247,209,90,0.06)', border: '1px solid rgba(247,209,90,0.08)' }}
				>
					{stats.map((s) => (
						<div
							key={s.label}
							className="group flex flex-col items-center justify-center gap-1.5 bg-[#030303] px-6 py-8 text-center transition-colors duration-300 hover:bg-[rgba(247,147,26,0.04)]"
						>
							<span className="logo-grad-text font-black tabular-nums" style={{ fontSize: '2.4rem', lineHeight: 1 }}>
								<CountUp target={s.value} suffix={s.suffix} />
							</span>
							<span className="text-xs font-semibold uppercase tracking-widest text-[#5a5650]">{s.label}</span>
						</div>
					))}
				</div>

				{/* Carousel section label */}
				<div className="mb-6 flex items-center gap-3">
					<span className="text-[0.6rem] font-bold uppercase tracking-[0.45em] text-[#f7931a]">All Services</span>
					<div className="h-[1px] flex-1 opacity-10" style={{ background: '#f7d15a' }} />
					<span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#3a3630]">Auto-rotating</span>
				</div>

				{/* Carousel */}
				<div className="mb-20">
					<ServicesCarousel />
				</div>

				{/* Proficiency */}
				<div>
					<div className="mb-10 flex items-center gap-3">
						<span className="text-[0.6rem] font-bold uppercase tracking-[0.45em] text-[#f7931a]">Our Proficiency</span>
						<div className="h-[1px] flex-1 opacity-10" style={{ background: '#f7d15a' }} />
					</div>

					<div
						className="relative overflow-hidden rounded-3xl p-8 sm:p-12"
						style={{
							background: 'linear-gradient(145deg, rgba(14,14,14,0.97) 0%, rgba(8,8,8,0.99) 100%)',
							border: '1px solid rgba(247,209,90,0.07)',
						}}
					>
						{/* Corner accents */}
						<div className="pointer-events-none absolute left-0 top-0 h-20 w-[2px] rounded-full" style={{ background: 'linear-gradient(180deg,#f7931a,transparent)' }} />
						<div className="pointer-events-none absolute left-0 top-0 h-[2px] w-20 rounded-full" style={{ background: 'linear-gradient(90deg,#f7931a,transparent)' }} />

						{/* Glow */}
						<div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-[0.06] blur-3xl" style={{ background: '#f7931a' }} />
						<div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full opacity-[0.06] blur-3xl" style={{ background: '#ffd700' }} />

						<div className="relative z-10">
							{/* Header + legend */}
							<div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
								<div>
									<h3 className="text-[1.6rem] font-black tracking-tight text-white">
										Skill <span className="logo-grad-text">Proficiency</span>
									</h3>
									<p className="mt-2 text-sm leading-[1.8] text-[#4a4640] max-w-md">
										Our expertise spans creative design and digital technology — each skill honed through years of real-world projects.
									</p>
								</div>
								<div className="flex items-center gap-5 text-xs font-semibold">
									<div className="flex items-center gap-2">
										<div className="h-3 w-3 rounded-full" style={{ background: 'linear-gradient(135deg,#f7931a,#ffd700)' }} />
										<span className="text-[#5a5650] uppercase tracking-wider">Design</span>
									</div>
									<div className="flex items-center gap-2">
										<div className="h-3 w-3 rounded-full" style={{ background: 'linear-gradient(135deg,#f7d15a,#f7931a)' }} />
										<span className="text-[#5a5650] uppercase tracking-wider">Tech</span>
									</div>
								</div>
							</div>

							{/* Design Skills */}
							<div className="mb-12">
								<div className="mb-6 flex items-center gap-3">
									<div className="h-[1px] w-4 rounded-full" style={{ background: 'linear-gradient(90deg,#f7931a,#ffd700)' }} />
									<span className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-[#f7931a]">Creative Design</span>
								</div>
								<div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
									{designSkills.map((s, i) => (
										<CircularGauge key={s.label} label={s.label} percent={s.percent} delay={i * 100} category="design" />
									))}
								</div>
							</div>

							{/* Divider */}
							<div className="mb-12 h-[1px] w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(247,209,90,0.12), transparent)' }} />

							{/* Tech Skills */}
							<div>
								<div className="mb-6 flex items-center gap-3">
									<div className="h-[1px] w-4 rounded-full" style={{ background: 'linear-gradient(90deg,#ffd700,#f7931a)' }} />
									<span className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-[#ffd700]">Technology</span>
								</div>
								<div className="grid grid-cols-3 gap-6 sm:grid-cols-3">
									{techSkills.map((s, i) => (
										<CircularGauge key={s.label} label={s.label} percent={s.percent} delay={400 + i * 100} category="tech" />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}
