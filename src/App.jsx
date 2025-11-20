import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white">
      {/* Background pattern and pink grid accent */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_30%_10%,rgba(236,72,153,0.15),transparent),radial-gradient(600px_300px_at_70%_80%,rgba(236,72,153,0.12),transparent)]" />
      </div>

      <Nav />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
