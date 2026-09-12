export default function About() {
	return (
		<section
			id="about"
			className="relative scroll-mt-28 overflow-hidden bg-[#020202] px-4 py-28 sm:px-6 lg:px-8"
		>
			{/* ── Ambient background ── */}
			<div className="pointer-events-none absolute inset-0" aria-hidden="true">
				<div className="absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_left,rgba(247,147,26,0.07),transparent_55%)]" />
				<div className="absolute bottom-0 right-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,215,0,0.06),transparent_55%)]" />
				{/* Fine diagonal grid */}
				<div
					className="absolute inset-0 opacity-[0.028]"
					style={{
						backgroundImage:
							'linear-gradient(rgba(247,209,90,1) 1px, transparent 1px), linear-gradient(90deg, rgba(247,209,90,1) 1px, transparent 1px)',
						backgroundSize: '60px 60px',
					}}
				/>
				{/* Diagonal accent stripes */}
				<div
					className="absolute -left-40 top-1/4 h-[1px] w-[200%] rotate-[-8deg] opacity-10"
					style={{ background: 'linear-gradient(90deg, transparent, #f7931a, #ffd700, #ffe87a, transparent)' }}
				/>
				<div
					className="absolute -left-40 top-1/3 h-[1px] w-[200%] rotate-[-8deg] opacity-[0.05]"
					style={{ background: 'linear-gradient(90deg, transparent, #f7931a, #ffd700, transparent)' }}
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-6xl">

				{/* ══════════════════════════════════════
				    BLOCK 1 — Cinematic stacked title
				══════════════════════════════════════ */}
				<div className="flex flex-col items-start gap-6">
					{/* Eyebrow pill */}
					<div className="flex items-center gap-3">
						<div className="h-[1px] w-8" style={{ background: 'linear-gradient(90deg, #f7931a, #ffd700)' }} />
						<span
							className="rounded-full border px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.45em] text-[#f7d15a]"
							style={{ borderColor: 'rgba(247,209,90,0.25)', background: 'rgba(247,209,90,0.06)' }}
						>
							Our Story
						</span>
					</div>

					{/* Title — stacked outline + filled contrast */}
					<h2 className="max-w-4xl text-left font-black leading-[0.92] tracking-[-0.05em]" style={{ fontSize: 'clamp(3rem,9vw,7rem)' }}>
						<span className="block text-white/10 select-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
							We Build
						</span>
						<span className="logo-grad-shimmer logo-grad-text block">
							Experiences.
						</span>
						<span className="block text-white">Not Just</span>
						<span className="block text-white/10 select-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
							Websites.
						</span>
					</h2>
				</div>

				{/* ══════════════════════════════════════
				    BLOCK 2 — Two-column split story
				══════════════════════════════════════ */}
				<div className="mt-20 grid gap-0 lg:grid-cols-[1fr_420px]">

					{/* Left — story text */}
					<div className="border-r border-white/[0.05] pr-0 lg:pr-16">
						<p className="text-2xl font-semibold leading-[1.6] tracking-tight text-white/90 sm:text-3xl">
							We are{' '}
							<span className="logo-grad-text font-black">ABC Creations</span>
							, a creative technology company turning bold ideas into meaningful digital realities.
						</p>

						<div className="mt-10 space-y-6 text-[1rem] leading-[1.9] text-[#9a968e]">
							<p>
								We are dedicated to helping businesses build a powerful digital presence — through web development, software solutions, graphic design, UI/UX design, branding, and digital creativity.
							</p>
							<p>
								We believe great digital solutions are more than beautiful designs or powerful technology. They should be{' '}
								<span className="font-semibold text-white/80">purposeful, user-friendly, reliable,</span>
								{' '}and built to create real value.
							</p>
						</div>

						{/* Pill tags */}
						<div className="mt-10 flex flex-wrap gap-2">
							{[
								'Web Development',
								'UI/UX Design',
								'Branding',
								'Graphic Design',
								'Software Solutions',
								'Digital Creativity',
							].map((tag) => (
								<span
									key={tag}
									className="about-tag inline-flex cursor-default items-center gap-1.5 rounded-full px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-wider transition-all duration-300"
									style={{
										border: '1px solid rgba(247,209,90,0.12)',
										background: 'rgba(247,209,90,0.04)',
										color: '#9a968e',
									}}
								>
									<span className="block h-1 w-1 rounded-full" style={{ background: '#f7931a' }} />
									{tag}
								</span>
							))}
						</div>
					</div>

					{/* Right — orbit orb */}
					<div className="mt-14 flex items-center justify-center lg:mt-0 lg:pl-10">
						<div className="about-orb-wrapper relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">

							{/* Orbit ring 1 */}
							<div
								className="about-orbit-1 absolute inset-0 rounded-full"
								style={{ border: '1px solid rgba(247,147,26,0.18)' }}
							/>
							{/* Orbit ring 2 */}
							<div
								className="about-orbit-2 absolute rounded-full"
								style={{ inset: '18px', border: '1px dashed rgba(255,215,0,0.12)' }}
							/>
							{/* Rotating dot */}
							<div className="about-orbit-dot absolute inset-0">
								<div
									className="absolute -top-1.5 left-1/2 -ml-1.5 h-3 w-3 rounded-full"
									style={{
										background: 'linear-gradient(135deg,#f7931a,#ffd700)',
										boxShadow: '0 0 12px 4px rgba(247,147,26,0.5)',
									}}
								/>
							</div>
							{/* Counter-rotating dot */}
							<div className="about-orbit-dot-rev absolute" style={{ inset: '18px' }}>
								<div
									className="absolute bottom-0 left-1/2 -ml-1 h-2 w-2 rounded-full opacity-60"
									style={{ background: '#ffe87a', boxShadow: '0 0 8px 2px rgba(255,232,122,0.5)' }}
								/>
							</div>

							{/* Core glowing disk */}
							<div
								className="relative flex h-36 w-36 items-center justify-center rounded-full sm:h-40 sm:w-40"
								style={{
									background: 'radial-gradient(circle at 40% 35%, rgba(247,147,26,0.25), rgba(255,215,0,0.12) 50%, rgba(10,10,10,0.9))',
									border: '1px solid rgba(247,209,90,0.2)',
									boxShadow: '0 0 60px rgba(247,147,26,0.14), inset 0 0 40px rgba(247,209,90,0.07)',
								}}
							>
								<div className="absolute left-3 top-3 h-6 w-[2px] rounded-full" style={{ background: 'linear-gradient(180deg,#f7931a,transparent)' }} />
								<div className="absolute left-3 top-3 h-[2px] w-6 rounded-full" style={{ background: 'linear-gradient(90deg,#f7931a,transparent)' }} />
								<div className="absolute bottom-3 right-3 h-6 w-[2px] rounded-full" style={{ background: 'linear-gradient(0deg,#ffe87a,transparent)' }} />
								<div className="absolute bottom-3 right-3 h-[2px] w-6 rounded-full" style={{ background: 'linear-gradient(270deg,#ffe87a,transparent)' }} />
								<span className="logo-grad-text select-none font-black" style={{ fontSize: '4.5rem', lineHeight: 1 }}>A</span>
							</div>

							{/* Floating stat badges */}
							<div
								className="about-badge-float absolute -right-4 top-10 rounded-xl px-3 py-2 text-center sm:-right-8"
								style={{
									background: 'rgba(14,14,14,0.9)',
									border: '1px solid rgba(247,209,90,0.15)',
									backdropFilter: 'blur(12px)',
								}}
							>
								<p className="text-[1.1rem] font-black text-white">6+</p>
								<p className="text-[0.58rem] font-bold uppercase tracking-wider text-[#f7d15a]">Services</p>
							</div>
							<div
								className="about-badge-float-2 absolute -left-4 bottom-10 rounded-xl px-3 py-2 text-center sm:-left-8"
								style={{
									background: 'rgba(14,14,14,0.9)',
									border: '1px solid rgba(247,209,90,0.15)',
									backdropFilter: 'blur(12px)',
								}}
							>
								<p className="logo-grad-text text-[1.1rem] font-black">∞</p>
								<p className="text-[0.58rem] font-bold uppercase tracking-wider text-[#f7d15a]">Ideas</p>
							</div>
						</div>
					</div>
				</div>

				{/* ══════════════════════════════════════
				    BLOCK 3 — Manifesto strip
				══════════════════════════════════════ */}
				<div className="relative mt-20 overflow-hidden rounded-2xl">
					<div
						className="absolute inset-0 rounded-2xl"
						style={{
							background: 'linear-gradient(105deg, rgba(247,147,26,0.10) 0%, rgba(255,215,0,0.06) 40%, rgba(10,10,10,0.95) 100%)',
							border: '1px solid rgba(247,209,90,0.10)',
						}}
					/>
					<span
						className="pointer-events-none absolute -right-4 -top-6 select-none font-black leading-none"
						aria-hidden="true"
						style={{ color: 'rgba(247,209,90,0.04)', fontSize: '10rem', lineHeight: 1 }}
					>
						ABC
					</span>
					<div className="relative z-10 px-8 py-10 sm:px-14 sm:py-12">
						<div className="flex items-start gap-6">
							<div
								className="mt-1 hidden h-12 w-[3px] flex-shrink-0 rounded-full sm:block"
								style={{ background: 'linear-gradient(180deg, #f7931a, #ffd700, transparent)' }}
							/>
							<p className="text-xl font-semibold leading-[1.7] text-white/90 sm:text-2xl lg:text-[1.7rem] lg:leading-[1.6]">
								We don&rsquo;t just create digital solutions —{' '}
								<span className="logo-grad-text font-black">we create experiences,</span>
								{' '}build brands, and turn{' '}
								<span className="logo-grad-text font-black">possibilities into reality.</span>
							</p>
						</div>
					</div>
				</div>

				{/* ══════════════════════════════════════
				    BLOCK 4 — Mission & Vision side by side
				══════════════════════════════════════ */}
				<div className="mt-8 grid gap-px overflow-hidden rounded-2xl md:grid-cols-2" style={{ border: '1px solid rgba(247,209,90,0.08)' }}>
					{/* Mission */}
					<div className="group relative overflow-hidden bg-[rgba(10,10,10,0.6)] p-8 transition-all duration-500 hover:bg-[rgba(247,147,26,0.04)] sm:p-10">
						<div
							className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100"
							style={{ background: 'radial-gradient(circle, rgba(247,147,26,0.12), transparent 70%)' }}
						/>
						<span className="logo-grad-text absolute right-8 top-5 select-none font-black opacity-[0.08]" style={{ fontSize: '7rem', lineHeight: 1 }}>01</span>
						<div className="relative z-10">
							<div
								className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
								style={{ background: 'rgba(247,209,90,0.07)', border: '1px solid rgba(247,209,90,0.15)' }}
							>
								<svg className="h-5 w-5 text-[#f7d15a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.4em] text-[#f7d15a]">Our Mission</p>
							<h3 className="mb-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
								Transforming Ideas Into{' '}
								<span className="logo-grad-text">Powerful Experiences</span>
							</h3>
							<p className="text-sm leading-[1.85] text-[#9a968e]">
								We combine creativity, technology, and strategy to deliver exceptional UI/UX designs, web solutions, software applications, and graphic designs that inspire, engage, and elevate brands.
							</p>
						</div>
					</div>

					{/* Vision */}
					<div className="group relative overflow-hidden bg-[rgba(10,10,10,0.6)] p-8 transition-all duration-500 hover:bg-[rgba(255,215,0,0.03)] sm:p-10">
						<div
							className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100"
							style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.10), transparent 70%)' }}
						/>
						<span className="logo-grad-text absolute right-8 top-5 select-none font-black opacity-[0.08]" style={{ fontSize: '7rem', lineHeight: 1 }}>02</span>
						<div className="relative z-10">
							<div
								className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
								style={{ background: 'rgba(247,209,90,0.07)', border: '1px solid rgba(247,209,90,0.15)' }}
							>
								<svg className="h-5 w-5 text-[#f7d15a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
								</svg>
							</div>
							<p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.4em] text-[#f7d15a]">Our Vision</p>
							<h3 className="mb-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
								Shaping the Future of{' '}
								<span className="logo-grad-text">Design & Development</span>
							</h3>
							<p className="text-sm leading-[1.85] text-[#9a968e]">
								To grow as a creative and reliable company that shapes the future of design and development in Sri Lanka — building lasting partnerships, empowering local businesses, driven by passion, innovation, and purpose.
							</p>
						</div>
					</div>
				</div>

				{/* ══════════════════════════════════════
				    BLOCK 5 — Core values cards
				══════════════════════════════════════ */}
				<div className="mt-8">
					<div className="mb-6 flex items-center gap-4">
						<span className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-[#f7d15a]">Core Values</span>
						<div className="h-[1px] flex-1" style={{ background: 'linear-gradient(90deg, rgba(247,209,90,0.2), transparent)' }} />
					</div>

					<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
						{[
							{
								num: '01',
								label: 'Creativity',
								desc: 'Bold ideas, original designs',
								icon: (
									<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
									</svg>
								),
							},
							{
								num: '02',
								label: 'Reliability',
								desc: 'Trusted by every client',
								icon: (
									<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
								),
							},
							{
								num: '03',
								label: 'Growth',
								desc: 'Evolving with purpose',
								icon: (
									<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
									</svg>
								),
							},
							{
								num: '04',
								label: 'Partnership',
								desc: 'Building together',
								icon: (
									<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								),
							},
						].map((item) => (
							<div
								key={item.label}
								className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300"
								style={{
									background: 'rgba(10,10,10,0.5)',
									border: '1px solid rgba(255,255,255,0.05)',
								}}
							>
								<div
									className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
									style={{ background: 'radial-gradient(circle at 50% 0%, rgba(247,209,90,0.08), transparent 70%)' }}
								/>
								<span
									className="absolute right-3 top-3 select-none font-black leading-none opacity-[0.06]"
									style={{ color: '#f7d15a', fontSize: '2.5rem' }}
								>
									{item.num}
								</span>
								<div className="relative z-10">
									<div
										className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-[#f7d15a] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(247,209,90,0.2)]"
										style={{
											background: 'rgba(247,209,90,0.06)',
											border: '1px solid rgba(247,209,90,0.12)',
										}}
									>
										{item.icon}
									</div>
									<p className="text-sm font-bold tracking-wide text-white/90">{item.label}</p>
									<p className="mt-1 text-[0.7rem] text-[#7a7670]">{item.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>

			</div>

			{/* ── CSS animations ── */}
			<style>{`
				.about-orbit-1 {
					animation: orbit-spin 12s linear infinite;
				}
				.about-orbit-2 {
					animation: orbit-spin-rev 18s linear infinite;
				}
				.about-orbit-dot {
					animation: orbit-spin 12s linear infinite;
				}
				.about-orbit-dot-rev {
					animation: orbit-spin-rev 18s linear infinite;
				}
				@keyframes orbit-spin {
					from { transform: rotate(0deg); }
					to   { transform: rotate(360deg); }
				}
				@keyframes orbit-spin-rev {
					from { transform: rotate(0deg); }
					to   { transform: rotate(-360deg); }
				}
				.about-badge-float {
					animation: badge-float 4s ease-in-out infinite;
				}
				.about-badge-float-2 {
					animation: badge-float 4s ease-in-out infinite 1.5s;
				}
				@keyframes badge-float {
					0%, 100% { transform: translateY(0px); }
					50%       { transform: translateY(-8px); }
				}
				.about-tag:hover {
					border-color: rgba(247,209,90,0.3) !important;
					color: #f7d15a !important;
					background: rgba(247,209,90,0.08) !important;
				}
			`}</style>
		</section>
	)
}