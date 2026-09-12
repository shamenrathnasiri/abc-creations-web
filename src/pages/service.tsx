export default function Services() {
	const services = [
		{
			title: 'Brand Identity',
			desc: 'Thoughtful creative work shaped around your goals and audience.',
			icon: (
				<svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
				</svg>
			),
		},
		{
			title: 'Graphic Design',
			desc: 'Premium visuals that communicate with clarity, beauty, and purpose.',
			icon: (
				<svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
			),
		},
		{
			title: 'Digital Experiences',
			desc: 'UI/UX design and web builds that feel sharp and inspire action.',
			icon: (
				<svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
				</svg>
			),
		},
	]

	return (
		<section
			id="services"
			className="logo-grad-band relative scroll-mt-28 overflow-hidden border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8"
		>
			{/* ── Background decorative ── */}
			<div className="pointer-events-none absolute inset-0" aria-hidden="true">
				{/* Top-right diagonal glow */}
				<div
					className="logo-grad-orb absolute -right-32 -top-32 h-[480px] w-[480px] blur-3xl opacity-30"
					style={{ animationDelay: '1s' }}
				/>
				{/* Bottom-left accent */}
				<div
					className="logo-grad-orb absolute -bottom-20 -left-20 h-72 w-72 blur-2xl opacity-20"
					style={{ animationDelay: '3s' }}
				/>
				{/* Horizontal divider at top */}
				<div className="logo-grad-line absolute top-0 left-0 right-0 h-[2px] opacity-40" />
			</div>

			<div className="relative z-10 mx-auto max-w-5xl">
				{/* Section header */}
				<div className="mb-14">
					<p className="logo-tag mb-4 inline-block px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.35em]">
						Services
					</p>
					<h2 className="logo-grad-shimmer logo-grad-text max-w-2xl text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
						Design that moves your business forward.
					</h2>
					{/* Animated accent line */}
					<div
						className="logo-grad-line mt-5 h-[3px] w-16 rounded-full"
						style={{ animation: 'logoGradIn 0.8s ease-out 0.3s both' }}
					/>
				</div>

				{/* Cards */}
				<div className="grid gap-6 sm:grid-cols-3">
					{services.map((svc, i) => (
						<article
							key={svc.title}
							className="logo-grad-border group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[rgba(20,20,20,0.85)] to-[rgba(8,8,8,0.95)] p-7 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_8px_40px_rgba(247,147,26,0.12)]"
							style={{ transitionDelay: `${i * 80}ms` }}
						>
							{/* Inner top corner accent — logo gradient */}
							<div className="absolute left-0 top-0 h-20 w-[2px] logo-grad-bg rounded-full opacity-70" />
							<div className="absolute left-0 top-0 h-[2px] w-20 logo-grad-bg rounded-full opacity-70" />

							{/* Hover glow blob */}
							<div className="logo-grad-orb pointer-events-none absolute -right-12 -top-12 h-40 w-40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60" />

							{/* Icon */}
							<div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl border border-[rgba(255,215,0,0.15)] bg-[rgba(247,147,26,0.06)] text-[#ffd700] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]">
								{svc.icon}
							</div>

							<h3 className="logo-grad-text mb-3 text-xl font-bold">{svc.title}</h3>
							<p className="text-sm leading-7 text-[#c8c4b8]">{svc.desc}</p>

							{/* Bottom shimmer accent line */}
							<div className="logo-grad-line mt-6 h-px w-0 rounded-full transition-all duration-500 group-hover:w-full" />
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
