import { useEffect, useRef, useState } from 'react'

function CountUp({ target, suffix = '' }: { target: number | string; suffix?: string }) {
	const [count, setCount] = useState(0)
	const ref = useRef<HTMLSpanElement>(null)
	const started = useRef(false)

	useEffect(() => {
		if (typeof target !== 'number') return
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !started.current) {
					started.current = true
					const duration = 1800
					const steps = 60
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
			{ threshold: 0.3 }
		)
		if (ref.current) observer.observe(ref.current)
		return () => observer.disconnect()
	}, [target])

	if (typeof target !== 'number') {
		return <span ref={ref}>{target}</span>
	}
	return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
	return (
		<section
			id="about"
			className="relative scroll-mt-28 overflow-hidden bg-[#050505] px-4 py-24 sm:px-6 lg:px-8"
		>
			{/* Background */}
			<div className="pointer-events-none absolute inset-0" aria-hidden="true">
				<div
					className="absolute inset-0 opacity-[0.015]"
					style={{
						backgroundImage: 'radial-gradient(circle, rgba(247,209,90,1) 1px, transparent 1px)',
						backgroundSize: '32px 32px',
					}}
				/>
				<div
					className="absolute -right-60 -top-60 h-[600px] w-[600px] rounded-full opacity-[0.06]"
					style={{ background: 'radial-gradient(circle, #f7931a 0%, transparent 65%)' }}
				/>
				<div
					className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full opacity-[0.04]"
					style={{ background: 'radial-gradient(circle, #ffd700 0%, transparent 65%)' }}
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-5xl">

				{/* ── Section label ── */}
				<div className="mb-12 flex items-center gap-4">
					<div className="h-[1px] w-8" style={{ background: 'linear-gradient(90deg, #f7931a, #ffd700)' }} />
					<span className="text-lg font-bold uppercase tracking-[0.4em] text-[#f7d15a]">About Us</span>
					<div className="h-[1px] flex-1 opacity-10" style={{ background: '#f7d15a' }} />
				</div>

				{/* ── Heading ── */}
				<div className="mb-16">
					<h2
						className="font-black leading-[1.15] text-white"
						style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
					>
						We are{' '}
						<span className="logo-grad-text">ABC Creations</span>
					</h2>
					<p className="mt-4 max-w-2xl text-base leading-[1.85] text-[#7a7670]">
						We combine creativity, technology, and strategic thinking to deliver meaningful digital experiences and solutions that help businesses build stronger brands, connect with their audiences, and grow with confidence.
					</p>
				</div>

			
				{/* ── Mission & Vision ── */}
				<div className="flex flex-col gap-0 overflow-hidden rounded-2xl" style={{ border: '1px solid rgba(247,209,90,0.08)' }}>

					{/* Mission */}
					<div
						className="about-mv-row group relative flex flex-col gap-6 overflow-hidden px-8 py-10 transition-all duration-500 sm:flex-row sm:items-start sm:gap-10 sm:px-12"
						style={{ background: 'rgba(8,8,8,0.85)', borderBottom: '1px solid rgba(247,209,90,0.06)' }}
					>
						{/* Hover fill */}
						<div
							className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
							style={{ background: 'linear-gradient(105deg, rgba(247,147,26,0.05) 0%, transparent 55%)' }}
						/>

						{/* Left — label + icon */}
						<div className="relative z-10 flex flex-shrink-0 items-center gap-4 sm:flex-col sm:items-start sm:gap-3 sm:pt-1">
							<div
								className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-[#f7d15a] transition-transform duration-300 group-hover:scale-110"
								style={{ background: 'rgba(247,209,90,0.07)', border: '1px solid rgba(247,209,90,0.14)' }}
							>
								<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} width={22} height={22}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<p className="text-[0.62rem] font-bold uppercase tracking-[0.45em] text-[#f7931a] sm:mt-1">Mission</p>
						</div>

						{/* Right — content */}
						<div className="relative z-10 flex-1">
							{/* Accent bar */}
							<div
								className="mb-5 h-[2px] w-10 rounded-full transition-all duration-500 group-hover:w-16"
								style={{ background: 'linear-gradient(90deg, #f7931a, #ffd700)' }}
							/>
							<h3
								className="mb-3 font-bold leading-[1.25] text-white"
								style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
							>
								Transforming Ideas Into{' '}
								<span className="logo-grad-text">Powerful Experiences</span>
							</h3>
							<p className="text-sm leading-[1.9] text-[#7a7670]">
								We combine creativity, technology, and strategy to deliver exceptional UI/UX, web solutions, software, and graphic design that inspire and elevate brands.
							</p>
						</div>
					</div>

					{/* Vision */}
					<div
						className="about-mv-row group relative flex flex-col gap-6 overflow-hidden px-8 py-10 transition-all duration-500 sm:flex-row sm:items-start sm:gap-10 sm:px-12"
						style={{ background: 'rgba(10,10,10,0.75)' }}
					>
						{/* Hover fill */}
						<div
							className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
							style={{ background: 'linear-gradient(105deg, rgba(255,215,0,0.04) 0%, transparent 55%)' }}
						/>
					{/* Left — label + icon */}
						<div className="relative z-10 flex flex-shrink-0 items-center gap-4 sm:flex-col sm:items-start sm:gap-3 sm:pt-1">
							<div
								className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-[#f7d15a] transition-transform duration-300 group-hover:scale-110"
								style={{ background: 'rgba(247,209,90,0.07)', border: '1px solid rgba(247,209,90,0.14)' }}
							>
								<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} width={22} height={22}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
								</svg>
							</div>
							<p className="text-[0.62rem] font-bold uppercase tracking-[0.45em] text-[#f7931a] sm:mt-1">Vision</p>
						</div>

						{/* Right — content */}
						<div className="relative z-10 flex-1">
							{/* Accent bar */}
							<div
								className="mb-5 h-[2px] w-10 rounded-full transition-all duration-500 group-hover:w-16"
								style={{ background: 'linear-gradient(90deg, #ffd700, #ffe87a)' }}
							/>
							<h3
								className="mb-3 font-bold leading-[1.25] text-white"
								style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
							>
								Shaping the Future of{' '}
								<span className="logo-grad-text">Design & Development</span>
							</h3>
							<p className="text-sm leading-[1.9] text-[#7a7670]">
								To grow as a creative and reliable studio that builds lasting partnerships, empowers local businesses, and drives innovation with passion and purpose.
							</p>
						</div>
					</div>

				</div>

			</div>
		</section>
	)
}