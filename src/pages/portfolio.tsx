export default function Portfolio() {
	return (
		<section id="portfolio" className="scroll-mt-28 border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-5xl">
				<p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f7d15a]">Portfolio</p>
				<h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">Selected creative work.</h2>
				<div className="mt-10 grid gap-4 sm:grid-cols-2">
					{['Brand systems', 'Campaign visuals', 'Digital design', 'Content direction'].map((project) => (
						<article key={project} className="flex min-h-40 items-end border border-white/10 bg-gradient-to-br from-[#161616] to-[#080808] p-6">
							<h3 className="text-2xl font-bold text-white">{project}</h3>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
