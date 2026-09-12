export default function WebSolution() {
	const features = [
		{ label: 'Landing Pages', icon: '⚡' },
		{ label: 'Business Websites', icon: '🏢' },
		{ label: 'E-Commerce', icon: '🛒' },
		{ label: 'Custom Builds', icon: '⚙️' },
	]

	return (
		<section
			id="web-solutions"
			className="logo-grad-band relative scroll-mt-28 overflow-hidden border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8"
		>
			{/* ── Background decorative ── */}
			<div className="pointer-events-none absolute inset-0" aria-hidden="true">
				{/* Centre radial glow */}
				<div className="logo-grad-orb absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-25" />
				{/* Gradient top border */}
				<div className="logo-grad-line absolute top-0 left-0 right-0 h-[2px] opacity-30" />
				{/* Subtle dot grid */}
				<div className="absolute inset-0 bg-[radial-gradient(rgba(255,215,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
			</div>

			<div className="relative z-10 mx-auto max-w-5xl">
				{/* Section label */}
				<p className="logo-tag mb-5 inline-block px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.35em]">
					Our web solutions
				</p>

				{/* Headline */}
				<h2 className="logo-grad-shimmer logo-grad-text max-w-3xl text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
					Websites that make your next step obvious.
				</h2>

				{/* Animated accent line */}
				<div
					className="logo-grad-line mt-5 h-[3px] w-16 rounded-full"
					style={{ animation: 'logoGradIn 0.8s ease-out 0.3s both' }}
				/>

				<p className="mt-8 max-w-2xl text-lg leading-8 text-[#c8c4b8]">
					From clear landing pages to polished business websites, we build digital
					experiences that look sharp and help visitors take action.
				</p>

				{/* Feature pills */}
				<div className="mt-10 flex flex-wrap gap-3">
					{features.map((f) => (
						<div
							key={f.label}
							className="logo-grad-border group flex items-center gap-2 rounded-full border border-[rgba(255,215,0,0.15)] bg-[rgba(255,215,0,0.04)] px-5 py-2.5 text-sm font-medium text-[#ffe87a] transition-all duration-300 hover:bg-[rgba(255,215,0,0.08)] hover:shadow-[0_0_20px_rgba(255,215,0,0.12)]"
						>
							<span>{f.icon}</span>
							{f.label}
						</div>
					))}
				</div>

				{/* Decorative gradient card strip */}
				<div className="mt-14 relative overflow-hidden rounded-2xl border border-[rgba(255,215,0,0.08)] bg-[rgba(10,10,10,0.7)] p-8 backdrop-blur-sm">
					{/* Top shimmer line */}
					<div className="logo-grad-shimmer absolute left-0 top-0 right-0 h-[2px] logo-grad-line" />
					<div className="grid gap-6 sm:grid-cols-3 text-center">
						{[
							{ stat: '100%', desc: 'Responsive across all devices' },
							{ stat: 'Fast', desc: 'Optimised performance & load times' },
							{ stat: 'SEO', desc: 'Built with search in mind from day one' },
						].map((item) => (
							<div key={item.stat} className="group">
								<p className="logo-grad-text text-3xl font-black tracking-tight">{item.stat}</p>
								<p className="mt-2 text-sm text-[#a09c92] group-hover:text-[#ffe87a] transition-colors duration-300">{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
