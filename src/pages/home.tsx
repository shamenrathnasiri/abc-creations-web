import heroBg from '../assets/home/hero-bg.png'

export default function Home() {
	return (
		<section
			id="home"
			className="relative flex min-h-[calc(100vh-72px)] scroll mt-20 flex-col overflow-hidden"
		>
			{/* ── Full-bleed background image ── */}
			<div className="absolute inset-0">
				<img
					src={heroBg}
					alt=""
					className="h-full w-full object-cover object-center"
					aria-hidden="true"
				/>
				{/* Dark overlay — stronger on left for text legibility */}
				<div className="absolute inset-0 bg-gradient-to-r from-[rgba(3,7,18,0.92)] via-[rgba(3,7,18,0.65)] to-[rgba(3,7,18,0.15)]" />
				{/* Bottom dark fade so stats bar sits cleanly */}
				<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[rgba(3,7,18,0.85)] to-transparent" />
			</div>

			{/* ── Main content — fills viewport, pushes stats to bottom ── */}
			<div className="relative z-10 flex flex-1 flex-col justify-between">

				{/* ─── Hero text + service pills ─── */}
				<div className="flex flex-1 items-center px-6 py-10 sm:px-10 lg:px-16">
					<div className="w-full">
						<div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-6">

							{/* LEFT: headline + CTAs */}
							<div className="max-w-2xl">

								{/* Eyebrow */}
								<p className="mb-6 flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.38em] text-white/70">
									<span>Creative</span>
									<span className="text-[#f7931a]">✕</span>
									<span>Technology</span>
									<span className="text-[#f7931a]">✕</span>
									<span>Your Success</span>
								</p>

								{/* Headline — large, clear, with shadow for readability */}
								<h1
											className="text-[clamp(2.6rem,5vw,4.8rem)] font-black uppercase leading-[0.92] tracking-[-0.02em] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.7)] drop-shadow-[0_4px_36px_rgba(0,0,0,0.5)]"
										>
											Bold Ideas,{' '}
											<span className="block bg-gradient-to-r from-[#f7931a] via-[#ffd700] to-[#ffe87a] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(247,147,26,0.5)]">
												Beautifully
											</span>
											Made.
										</h1>

										<p className="mt-4 text-[0.8rem] font-bold uppercase tracking-[0.28em] text-[#f5d98a] md:text-[0.9rem]">
											IDEAS TO MEET TECHNOLOGY.
										</p>
								{/* Sub-text */}
								<p
									className="mt-7 max-w-lg text-[1rem] leading-[1.8] text-white/80"
									style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
								>
									We craft striking brand identities, premium visuals, and memorable creative experiences that give your business the attention it deserves.
								</p>

								{/* CTAs */}
								<div className="mt-8 flex flex-wrap items-center gap-4">
									<a
										href="#contact"
										id="hero-cta-book"
										className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#111] shadow-lg transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
										style={{ background: 'linear-gradient(90deg,#f7931a,#ffd700)' }}
									>
										<svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
											<path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
										</svg>
										Book a Call →
									</a>
									<a
										href="#portfolio"
										id="hero-cta-work"
										className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-300 hover:border-[rgba(255,215,0,0.5)] hover:text-[#ffd700]"
									>
										<span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/40">
											<svg className="h-2.5 w-2.5 translate-x-[1px]" viewBox="0 0 8 10" fill="currentColor">
												<path d="M0 0l8 5-8 5z" />
											</svg>
										</span>
										View Work
									</a>
								</div>
							</div>

							
							</div>
						</div>
					</div>
				</div>

				{/* ─── Bottom stats strip — sits OVER the image at the bottom ─── */}
				<div
					className="relative z-10 flex items-center justify-between gap-6 border-t px-6 py-4 sm:px-10 lg:px-16"
					style={{
						borderColor: 'rgba(255,255,255,0.08)',
						background: 'rgba(3,7,18,0.60)',
						backdropFilter: 'blur(16px)',
					}}
				>
					{/* Stats */}
					<div className="flex flex-wrap items-center gap-6 sm:gap-10">
						{[
							{
								icon: (
									<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
									</svg>
								),
								title: 'Creative',
								sub: 'Design Solutions',
							},
							{
								icon: (
									<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
									</svg>
								),
								title: 'Modern',
								sub: 'Technology',
							},
							{
								icon: (
									<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
								),
								title: 'Reliable',
								sub: '& On Time',
							},
							{
								icon: (
									<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								),
								title: 'Client Focused',
								sub: 'Approach',
							},
						].map((s) => (
							<div key={s.title} className="flex items-center gap-2.5">
								<span
									className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
									style={{ background: 'rgba(247,147,26,0.15)', color: '#f7931a' }}
								>
									{s.icon}
								</span>
								<div>
									<p className="text-[0.78rem] font-bold text-white">{s.title}</p>
									<p className="text-[0.65rem] text-white/50">{s.sub}</p>
								</div>
							</div>
						))}
					</div>

					{/* "Let's Build Something Great Together" */}
					<div className="hidden items-center gap-3 lg:flex">
						<p
							className="text-right text-[0.85rem] leading-[1.3] text-white/65"
							style={{ fontStyle: 'italic', fontFamily: "'Georgia', serif" }}
						>
							Let&apos;s Build Something<br />
							<span className="font-semibold text-white/90">Great Together</span>
						</p>
						<div
							className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full"
							style={{ background: 'linear-gradient(135deg,#f7931a,#ffd700)', color: '#111' }}
						>
							<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</div>
					</div>
				</div>
		
			{/* ── CSS ── */}
			<style>{`
				.hero-service-pill:hover {
					background: rgba(247,147,26,0.14) !important;
					border-color: rgba(247,209,90,0.35) !important;
				}
			`}</style>
		</section>
	)
}