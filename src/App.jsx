import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import About from './components/About'
import Hymns from './components/Hymns'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeView, setActiveView] = useState('home') // 'home', 'simbolos', 'contacto'

  const handleNavigation = (id) => {
    if (id === 'inicio' || id === 'nosotros') {
      if (activeView !== 'home') {
        setActiveView('home')
        // Dar tiempo al re-render antes de scrollear
        setTimeout(() => {
          const targetId = id === 'inicio' ? 'inicio-view' : 'nosotros-section'
          const elem = document.getElementById(targetId)
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' })
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
        }, 150)
      } else {
        const targetId = id === 'inicio' ? 'inicio-view' : 'nosotros-section'
        const elem = document.getElementById(targetId)
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    } else if (id === 'simbolos') {
      setActiveView('simbolos')
      window.scrollTo(0, 0)
    } else if (id === 'contacto') {
      setActiveView('contacto')
      window.scrollTo(0, 0)
    }
  }

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return (
          <>
            <div id="inicio-view">
              <Hero onNavigate={handleNavigation} />
            </div>
            <div id="nosotros-section">
              <Mission />
              <About />
            </div>
          </>
        )
      case 'simbolos':
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
            <Mission />
            <About />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-secondary antialiased flex flex-col font-inter">
      <Navbar activeView={activeView} onNavigate={handleNavigation} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigation} />
    </div>
  )
}

export default App
