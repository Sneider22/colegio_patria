import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Hymns from './components/Hymns'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

function App() {
  const [activeView, setActiveView] = useState('inicio') // 'inicio', 'nosotros', 'identidad', 'contacto'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (id) => {
    if (id === 'inicio') {
      if (activeView !== 'inicio') {
        setActiveView('inicio')
        setTimeout(() => {
          const elem = document.getElementById('inicio-view')
          if (elem) elem.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else if (id === 'nosotros') {
      setActiveView('nosotros')
      window.scrollTo(0, 0)
    } else if (id === 'identidad') {
      setActiveView('identidad')
      window.scrollTo(0, 0)
    } else if (id === 'contacto') {
      setActiveView('contacto')
      window.scrollTo(0, 0)
    }
  }

  const renderContent = () => {
    switch (activeView) {
      case 'inicio':
        return (
          <>
            <div id="inicio-view">
              <Hero onNavigate={handleNavigation} />
            </div>
            <About isFullView={false} />
          </>
        )
      case 'nosotros':
        return (
          <div className="pt-20">
            <About isFullView={true} />
          </div>
        )
      case 'identidad':
        return (
          <div className="pt-20">
            <Hymns />
          </div>
        )
      case 'contacto':
        return (
          <div className="pt-20">
            <Contact />
          </div>
        )
      default:
        return (
          <>
            <Hero onNavigate={handleNavigation} />
            <About />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-secondary antialiased flex flex-col font-inter transition-all duration-700">
      <Navbar activeView={activeView} onNavigate={handleNavigation} isOpen={isMenuOpen} onToggle={setIsMenuOpen} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigation} />
      <WhatsAppFAB isMenuOpen={isMenuOpen} />
    </div>
  )
}

export default App
