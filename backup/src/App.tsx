import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import ATMShowcase from './components/ATMShowcase'
import Cryptocurrencies from './components/Cryptocurrencies'
import CTA from './components/CTA'
import Stats from './components/Stats'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        {/* Warm moving background wrapper with seamless edges */}
        <div className="relative" style={{background: 'linear-gradient(to bottom, white 0%, #fdfcfb 15%, #f9f4ee 50%, #fdfcfb 85%, white 100%)'}}>
          {/* Animated warm background layers - contained within bounds */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-8 opacity-90">
              <div className="absolute inset-0 animate-float-slow" style={{background: 'radial-gradient(ellipse 600px 400px at 70% 30%, rgba(255, 150, 100, 0.6) 0%, rgba(255, 170, 120, 0.3) 40%, transparent 70%)'}}></div>
              <div className="absolute inset-0 animate-float-slower" style={{background: 'radial-gradient(ellipse 500px 350px at 30% 70%, rgba(255, 180, 120, 0.55) 0%, rgba(255, 200, 140, 0.25) 35%, transparent 65%)', animationDelay: '3s'}}></div>
              <div className="absolute inset-0 animate-float-slowest" style={{background: 'radial-gradient(ellipse 700px 300px at 60% 60%, rgba(255, 200, 150, 0.5) 0%, rgba(255, 220, 180, 0.2) 50%, transparent 80%)', animationDelay: '6s'}}></div>
            </div>
          </div>
          <div className="relative z-10">
            <Features />
            <ATMShowcase />
          </div>
        </div>
        {/* Cool moving background wrapper for lower sections */}
        <div className="relative" style={{background: 'linear-gradient(to bottom, white 0%, #f8fbff 15%, #f0f7ff 50%, #f8fbff 85%, white 100%)'}}>
          {/* Animated cool background layers - contained within bounds */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-8 opacity-85">
              <div className="absolute inset-0 animate-float-cool-slow" style={{background: 'radial-gradient(ellipse 700px 450px at 30% 30%, rgba(100, 150, 255, 0.5) 0%, rgba(120, 170, 255, 0.25) 40%, transparent 70%)'}}></div>
              <div className="absolute inset-0 animate-float-cool-slower" style={{background: 'radial-gradient(ellipse 600px 400px at 70% 70%, rgba(120, 200, 180, 0.45) 0%, rgba(140, 220, 200, 0.2) 35%, transparent 65%)', animationDelay: '4s'}}></div>
              <div className="absolute inset-0 animate-float-cool-slowest" style={{background: 'radial-gradient(ellipse 800px 350px at 50% 60%, rgba(150, 220, 255, 0.4) 0%, rgba(170, 235, 255, 0.18) 50%, transparent 80%)', animationDelay: '7s'}}></div>
            </div>
          </div>
          <div className="relative z-10">
            <Cryptocurrencies />
            <CTA />
            <Stats />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
