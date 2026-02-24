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

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return (
          <>
            <Hero onNavigate={() => {
              // Smooth scroll within Home
              const mission = document.getElementById('mision-vision');
              if (mission) mission.scrollIntoView({ behavior: 'smooth' });
            }} />
            <div id="mision-vision">
              <Mission />
            </div>
            <About />
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
            <Hero />
            <Mission />
            <About />
          </>
        )
    }
  }

  // Secciones que pertenecen a la vista 'home'
  const homeSections = ['inicio', 'nosotros']

  const handleNavigation = (id) => {
    if (id === 'inicio' || id === 'nosotros') {
      if (activeView !== 'home') {
        setActiveView('home')
        // Wait for render, then scroll
        setTimeout(() => {
          const target = id === 'inicio' ? 'inicio-view' : 'mision-vision'
          const elem = document.getElementById(target)
          if (elem) elem.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const target = id === 'inicio' ? 'inicio-view' : 'mision-vision'
        const elem = document.getElementById(target)
        if (elem) elem.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (id === 'simbolos') {
      setActiveView('simbolos')
      window.scrollTo(0, 0)
    } else if (id === 'contacto') {
      setActiveView('contacto')
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="min-h-screen bg-secondary antialiased flex flex-col font-inter">
      <Navbar activeView={activeView} onNavigate={handleNavigation} />
      <main className="flex-grow">
        <div id="inicio-view"></div>
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigation} />
    </div>
  )
}

export default App
