export default function Portfolio() {
	const projects = [
		{ title: 'Brand Systems', tag: 'Identity', desc: 'Visual language built to scale.' },
		{ title: 'Campaign Visuals', tag: 'Marketing', desc: 'Designs that stop the scroll.' },
		{ title: 'Digital Design', tag: 'UI/UX', desc: 'Interfaces crafted for humans.' },
		{ title: 'Content Direction', tag: 'Strategy', desc: 'Cohesive stories across every channel.' },
	]

	return (
		<section
			id="portfolio"
			className="logo-grad-band relative scroll-mt-28 overflow-hidden border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8"
		>
			{/* ── Background decorative ── */}
			<div className="pointer-events-none absolute inset-0" aria-hidden="true">
				{/* Bottom-centre glow */}
				<div
					className="logo-grad-orb absolute bottom-0 left-1/2 h-96 w-[700px] -translate-x-1/2 blur-3xl opacity-20"
					style={{ animationDelay: '2s' }}
				/>
				{/* Top-left accent */}
				<div
					className="logo-grad-orb absolute -left-24 top-24 h-72 w-72 blur-2xl opacity-15"
					style={{ animationDelay: '4s' }}
				/>
				{/* Gradient top edge */}
				<div className="logo-grad-line absolute top-0 left-0 right-0 h-[2px] opacity-30" />
			</div>

			<div className="relative z-10 mx-auto max-w-5xl">
				{/* Section header */}
				<div className="mb-12">
					<p className="logo-tag mb-4 inline-block px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.35em]">
						Portfolio
					</p>
					<h2 className="logo-grad-shimmer logo-grad-text text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
						Selected creative work.
					</h2>
					<div
						className="logo-grad-line mt-5 h-[3px] w-16 rounded-full"
						style={{ animation: 'logoGradIn 0.8s ease-out 0.3s both' }}
					/>
				</div>

				{/* Project grid */}
				<div className="grid gap-5 sm:grid-cols-2">
					{projects.map((project, i) => (
						<article
							key={project.title}
							className="logo-grad-border group relative flex min-h-48 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#161616] to-[#080808] p-7 transition-all duration-500 hover:border-[rgba(255,215,0,0.2)] hover:shadow-[0_10px_50px_rgba(247,147,26,0.1)]"
							style={{ transitionDelay: `${i * 70}ms` }}
						>
							{/* Gradient corner fill on hover */}
							<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								style={{ background: 'linear-gradient(135deg, rgba(247,147,26,0.06) 0%, transparent 60%)' }}
							/>

							{/* Tag */}
							<span className="logo-tag self-start px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
								{project.tag}
							</span>

							<div>
								<h3 className="logo-grad-text text-2xl font-bold">{project.title}</h3>
								<p className="mt-2 text-sm text-[#a09c92] transition-colors duration-300 group-hover:text-[#c8c4b8]">
									{project.desc}
								</p>
								{/* Animated bottom accent */}
								<div className="logo-grad-line mt-5 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full" />
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
