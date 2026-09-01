import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-[#020202] text-white">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-[112px] sm:h-[96px]" />

      <main className="mx-auto flex max-w-7xl flex-col items-center px-4 pb-16 pt-10 text-center sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.55em] text-[#f7d15a]">
            Graphic Design Studio
          </p>
          <h1 className="text-5xl font-black uppercase tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Bold ideas, beautifully made.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#c8c4b8] sm:text-lg">
            We craft striking brand identities, premium visuals, and memorable creative
            experiences that give your business the attention it deserves.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            id="hero-cta-book"
            className="rounded-full bg-[#f7d15a] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#111111] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#ffd962]"
          >
            Book a call
          </a>
          <a
            href="#portfolio"
            id="hero-cta-work"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-[#f7d15a]/60 hover:text-[#f7d15a]"
          >
            View work
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
