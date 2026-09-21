import { useEffect, useRef, useState } from 'react'

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

const techServices = [
	{
		tag: '01',
		title: 'Web Development',
		desc: 'Custom-built, fast, and responsive websites designed to convert visitors into clients. From landing pages to full-scale platforms.',
		features: ['React / Next.js', 'Responsive Design', 'SEO Optimized', 'Performance First'],
		icon: (
			<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={28} height={28}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
			</svg>
		),
	},
	{
		tag: '02',
		title: 'Software Solutions',
		desc: 'Tailored software applications built to streamline your business operations, automate workflows, and scale with your growth.',
		features: ['Custom Applications', 'API Integration', 'Cloud Solutions', 'Ongoing Support'],
		icon: (
			<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={28} height={28}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
			</svg>
		),
	},
]

const designServices = [
	{
		tag: '03',
		title: 'Logo Design',
		desc: 'Distinctive, memorable logos that tell your brand story at a glance.',
		icon: (
			<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
			</svg>
		),
	},
	{
		tag: '04',
		title: 'Social Media Design',
		desc: 'Scroll-stopping graphics, posts, and templates built for engagement.',
		icon: (
			<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
			</svg>
		),
	},
	{
		tag: '05',
		title: 'Book & Tute Cover Design',
		desc: 'Professional covers for textbooks, tutorials, and publications that stand out.',
		icon: (
			<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
			</svg>
		),
	},
	{
		tag: '06',
		title: 'Print Design',
		desc: 'Brochures, flyers, banners, and print-ready materials with precision craft.',
		icon: (
			<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
			</svg>
		),
	},
	{
		tag: '07',
		title: 'UI/UX Design',
		desc: 'Intuitive interfaces and user flows that delight users and drive results.',
		icon: (
			<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
			</svg>
		),
	},
]

const stats = [
	{ value: 4, suffix: '+', label: 'Years Experience' },
	{ value: 300, suffix: '+', label: 'Happy Clients' },
	{ value: 400, suffix: '+', label: 'Projects Completed' },
]

export default function Services() {
	return (
		<section
			id="services"
			className="relative scroll-mt-28 overflow-hidden bg-[#030303] px-4 py-20 sm:px-6 lg:px-8"
			style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
		>
			{/* ── Background ── */}
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

				{/* ── Section header ── */}
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
						From pixel-perfect designs to powerful digital solutions — we've got every side of your brand covered.
					</p>
				</div>

				{/* ── Stats bar ── */}
				<div
					className="mb-14 grid grid-cols-3 gap-px overflow-hidden rounded-2xl"
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

				{/* ══ TECH SERVICES — Large feature cards ══ */}
				<div className="mb-4">
					<div className="mb-4 flex items-center gap-3">
						<span className="text-[0.6rem] font-bold uppercase tracking-[0.45em] text-[#f7931a]">Technology</span>
						<div className="h-[1px] flex-1 opacity-10" style={{ background: '#f7d15a' }} />
					</div>

					<div className="grid gap-4 md:grid-cols-2">
						{techServices.map((svc, i) => (
							<div
								key={svc.tag}
								className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_0_50px_rgba(247,147,26,0.08)]"
								style={{
									background: 'linear-gradient(145deg, rgba(18,18,18,0.95) 0%, rgba(8,8,8,0.98) 100%)',
									border: '1px solid rgba(255,255,255,0.06)',
									transitionDelay: `${i * 60}ms`,
								}}
							>
								{/* Corner accents */}
								<div className="absolute left-0 top-0 h-16 w-[2px] rounded-full" style={{ background: 'linear-gradient(180deg,#f7931a,transparent)' }} />
								<div className="absolute left-0 top-0 h-[2px] w-16 rounded-full" style={{ background: 'linear-gradient(90deg,#f7931a,transparent)' }} />

								{/* Hover glow */}
								<div
									className="logo-grad-orb pointer-events-none absolute -right-16 -top-16 h-48 w-48 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
								/>

								{/* Tag + Icon row */}
								<div className="mb-6 flex items-start justify-between">
									<div
										className="inline-flex h-13 w-13 items-center justify-center rounded-xl text-[#f7d15a] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(247,209,90,0.2)]"
										style={{
											width: 52, height: 52,
											background: 'rgba(247,209,90,0.07)',
											border: '1px solid rgba(247,209,90,0.14)',
										}}
									>
										{svc.icon}
									</div>
									<span
										className="font-black tabular-nums"
										style={{ fontSize: '4rem', lineHeight: 1, color: 'rgba(247,209,90,0.05)' }}
									>
										{svc.tag}
									</span>
								</div>

								<h3 className="mb-3 text-[1.3rem] font-black tracking-tight text-white">{svc.title}</h3>
								<p className="mb-6 text-sm leading-[1.9] text-[#6a6660]">{svc.desc}</p>

								{/* Feature pills */}
								<div className="flex flex-wrap gap-2">
									{svc.features.map((f) => (
										<span
											key={f}
											className="rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-[#7a7670] transition-colors duration-300 group-hover:text-[#a09060]"
											style={{
												background: 'rgba(255,255,255,0.03)',
												border: '1px solid rgba(255,255,255,0.06)',
											}}
										>
											{f}
										</span>
									))}
								</div>

								{/* Bottom accent */}
								<div className="logo-grad-line absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full" />
							</div>
						))}
					</div>
				</div>

				{/* ══ DESIGN SERVICES — Compact grid ══ */}
				<div>
					<div className="mb-4 flex items-center gap-3">
						<span className="text-[0.6rem] font-bold uppercase tracking-[0.45em] text-[#f7931a]">Creative Design</span>
						<div className="h-[1px] flex-1 opacity-10" style={{ background: '#f7d15a' }} />
					</div>

					<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{designServices.map((svc, i) => (
							<div
								key={svc.tag}
								className="group relative overflow-hidden rounded-xl p-6 transition-all duration-400 hover:shadow-[0_0_30px_rgba(247,147,26,0.07)]"
								style={{
									background: 'rgba(10,10,10,0.8)',
									border: '1px solid rgba(255,255,255,0.05)',
									transitionDelay: `${i * 50}ms`,
								}}
							>
								{/* Hover fill */}
								<div
									className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-400 group-hover:opacity-100"
									style={{ background: 'radial-gradient(ellipse at 0% 0%, rgba(247,147,26,0.06), transparent 65%)' }}
								/>

								{/* Tag ghost */}
								<span
									className="pointer-events-none absolute right-4 top-3 select-none font-black"
									style={{ fontSize: '3.5rem', lineHeight: 1, color: 'rgba(247,209,90,0.04)' }}
								>
									{svc.tag}
								</span>

								<div className="relative z-10">
									{/* Icon */}
									<div
										className="mb-4 inline-flex items-center justify-center rounded-lg p-2.5 text-[#f7d15a] transition-transform duration-300 group-hover:scale-110"
										style={{
											background: 'rgba(247,209,90,0.07)',
											border: '1px solid rgba(247,209,90,0.12)',
										}}
									>
										{svc.icon}
									</div>

									<h3 className="mb-2 text-base font-black tracking-tight text-white">{svc.title}</h3>
									<p className="text-sm leading-[1.8] text-[#5a5650]">{svc.desc}</p>
								</div>

								{/* Bottom line */}
								<div className="logo-grad-line absolute bottom-0 left-0 h-[1.5px] w-0 transition-all duration-500 group-hover:w-full" />
							</div>
						))}

						{/* CTA tile — fills the 6th slot on lg */}
						<div
							className="group relative hidden overflow-hidden rounded-xl p-6 lg:flex lg:flex-col lg:items-start lg:justify-between"
							style={{
								background: 'linear-gradient(135deg, rgba(247,147,26,0.08) 0%, rgba(255,215,0,0.04) 60%, rgba(8,8,8,0.98) 100%)',
								border: '1px solid rgba(247,209,90,0.10)',
							}}
						>
							<div>
								<p className="mb-2 text-[0.6rem] font-bold uppercase tracking-[0.45em] text-[#f7d15a]">Have a project?</p>
								<p className="text-sm font-semibold leading-[1.7] text-white/70">
									Let's talk about what we can build together.
								</p>
							</div>
							<a
								href="#contact"
								className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#f7d15a] transition-all duration-300 hover:gap-3"
								style={{
									background: 'rgba(247,209,90,0.08)',
									border: '1px solid rgba(247,209,90,0.15)',
								}}
							>
								Get in Touch
								<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={13} height={13}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</a>
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}
