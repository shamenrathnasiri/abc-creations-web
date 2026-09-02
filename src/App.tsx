import Navbar from './components/Navbar/Navbar'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Services from './pages/service'
import WebSolution from './pages/websolution'

function App() {
  return (
    <div className="min-h-screen bg-[#020202] text-white">
      <Navbar />

      <main>
        <Home />
        <About />
        <Services />
        <WebSolution />
        <Portfolio />
        <Contact />
      </main>
    </div>
  )
}

export default App
