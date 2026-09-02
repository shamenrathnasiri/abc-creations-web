export default function Services() {
	return (
		<section id="services" className="scroll-mt-28 border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-5xl">
				<p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f7d15a]">Services</p>
				<h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">Design that moves your business forward.</h2>
				<div className="mt-10 grid gap-4 sm:grid-cols-3">
					{['Brand identity', 'Graphic design', 'Digital experiences'].map((service) => (
						<article key={service} className="border border-white/10 bg-white/[0.03] p-6">
							<h3 className="text-xl font-bold text-[#ffe894]">{service}</h3>
							<p className="mt-3 leading-7 text-[#c8c4b8]">Thoughtful creative work shaped around your goals and audience.</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
