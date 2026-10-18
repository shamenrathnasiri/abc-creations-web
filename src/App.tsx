import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import LoadingScreen from './components/Loading'
import Footer from './components/Footer/Footer'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Services from './pages/service'
import WebSolution from './pages/websolution'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <BrowserRouter>
      {/* Loading overlay — unmounts after exit animation */}
      {!loaded && <LoadingScreen minDelay={2400} onDone={() => setLoaded(true)} />}

      <div className="min-h-screen bg-[#000000] text-white">
        <Navbar />

        <main>
          <Home />
          <About />
          <Services />
          <WebSolution />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
