export default function Contact() {
	return (
		<section
			id="contact"
			className="logo-grad-band relative scroll-mt-28 overflow-hidden border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8"
		>
			{/* ── Background decorative ── */}
			<div className="pointer-events-none absolute inset-0" aria-hidden="true">
				{/* Large radial glow — bottom centre */}
				<div
					className="logo-grad-orb absolute -bottom-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 blur-3xl opacity-35"
					style={{ animationDelay: '1.5s' }}
				/>
				{/* Top right accent */}
				<div
					className="logo-grad-orb absolute -right-16 top-0 h-72 w-72 blur-2xl opacity-20"
					style={{ animationDelay: '4s' }}
				/>
				{/* Gradient top edge */}
				<div className="logo-grad-line absolute top-0 left-0 right-0 h-[2px] opacity-40" />
			</div>

			<div className="relative z-10 mx-auto max-w-5xl">
				{/* Section label */}
				<p className="logo-tag mb-5 inline-block px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.35em]">
					Contact
				</p>

				{/* Headline */}
				<h2 className="logo-grad-shimmer logo-grad-text mt-2 max-w-3xl text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
					Have a bold idea? Let's make it real.
				</h2>

				{/* Animated accent line */}
				<div
					className="logo-grad-line mt-5 h-[3px] w-16 rounded-full"
					style={{ animation: 'logoGradIn 0.8s ease-out 0.3s both' }}
				/>

				<p className="mt-8 max-w-xl text-lg leading-8 text-[#c8c4b8]">
					Tell us what you are building and we will help shape the right creative direction.
				</p>

				{/* CTA */}
				<a
					href="mailto:hello@abccreations.com"
					className="logo-cta-btn mt-10 inline-flex rounded-full px-8 py-4 text-sm uppercase tracking-[0.2em]"
				>
					Start a conversation
				</a>

				{/* Decorative contact strip */}
				<div className="mt-16 relative overflow-hidden rounded-2xl border border-[rgba(255,215,0,0.08)] bg-[rgba(10,10,10,0.6)] p-8 backdrop-blur-sm">
					{/* Top shimmer accent */}
					<div className="logo-grad-shimmer absolute left-0 top-0 right-0 h-[2px] logo-grad-line" />

					<div className="flex flex-wrap gap-10 text-center justify-center sm:justify-start">
						{[
							{ label: 'Email', value: 'hello@abccreations.com', href: 'mailto:hello@abccreations.com' },
							{ label: 'Based in', value: 'Sri Lanka 🇱🇰', href: undefined },
							{ label: 'Response time', value: 'Within 24 hours', href: undefined },
						].map((item) => (
							<div key={item.label} className="group">
								<p className="mb-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#a09c92]">
									{item.label}
								</p>
								{item.href ? (
									<a
										href={item.href}
										className="logo-grad-text text-base font-semibold transition-opacity duration-300 hover:opacity-80"
									>
										{item.value}
									</a>
								) : (
									<p className="logo-grad-text text-base font-semibold">{item.value}</p>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
