import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Hymns from './components/Hymns'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import AcademicLevelDetail from './components/AcademicLevelDetail'

function App() {
  const [activeView, setActiveView] = useState('inicio') // 'inicio', 'nosotros', 'identidad', 'contacto', 'academic-*'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const academicData = {
    'preescolar': {
      title: 'Preescolar',
      requirements: [
        { title: 'Requisitos y lista de útiles para 1er nivel', content: '• Partida de Nacimiento (Original y Copia)\n• 4 Fotos tipo carnet del alumno\n• Fotocopia de la Cédula de Identidad de los representantes\n• Certificado de Salud y Vacunas\n• Lista de útiles institucional (Consultar en administración)' },
        { title: 'Requisitos y lista de útiles para 2do nivel', content: '• Boleta de promoción del nivel anterior\n• Solventar compromisos administrativos previos\n• Actualización de ficha acumulativa\n• Lista de útiles institucional para 2do nivel' },
        { title: 'Requisitos y lista de útiles para 3er nivel', content: '• Preparación para la transición a primaria\n• Evaluación diagnóstica de madurez\n• Lista de útiles completa para pre-escolar avanzado' }
      ],
      subjects: [
        { name: 'Dibujo', icon: '🎨', color: '#FFF0F0' },
        { name: 'Escritura', icon: '✍️', color: '#F0F7FF' },
        { name: 'Lectura', icon: '📚', color: '#F0FFF4' }
      ],
      uniform: [
        'Chemise roja institucional con insignia',
        'Pantalón de vestir negro',
        'Zapatos blancos o negros',
        'Uniforme de Educación Física institucional'
      ]
    },
    'primaria': {
      title: 'Primaria',
      requirements: [
        { title: 'Requisitos y lista de útiles para 1er grado', content: '• Certificado de promoción de preescolar\n• Boleta de evaluación final\n• Solventar compromisos administrativos\n• Lista de útiles institucional para 1er grado' },
        { title: 'Requisitos y lista de útiles para 2do grado', content: '• Boleta de promoción firmada y sellada\n• Carta de buena conducta\n• Lista de útiles institucional para 2do grado' },
        { title: 'Requisitos y lista de útiles para 3er grado', content: '• Expediente académico completo\n• Fotos actualizadas carnet\n• Lista de útiles institucional para 3er grado' },
        { title: 'Requisitos y lista de útiles para 4to grado', content: '• Certificado de notas parciales si aplica\n• Solvencia administrativa\n• Lista de útiles institucional para 4to grado' },
        { title: 'Requisitos y lista de útiles para 5to grado', content: '• Actualización de datos representantes\n• Boleta de promoción\n• Lista de útiles institucional para 5to grado' },
        { title: 'Requisitos y lista de útiles para 6to grado', content: '• Preparación para ingreso a media general\n• Documentación completa para certificación\n• Lista de útiles institucional para 6to grado' }
      ],
      subjects: [
        { name: 'Kaikuse', icon: '🥋', color: '#FFF1F2' },
        { name: 'Matemáticas', icon: '🔢', color: '#FDF2F8' },
        { name: 'Dictado', icon: '📝', color: '#EEF2FF' },
        { name: 'Inglés', icon: '🇬🇧', color: '#F0F9FF' },
        { name: 'Lenguaje', icon: '🗣️', color: '#F0FDFA' },
        { name: 'Comprensión Lectora', icon: '📖', color: '#F8FAFC' },
        { name: 'Italiano', icon: '🇮🇹', color: '#ECFDF5' },
        { name: 'Computación', icon: '💻', color: '#F5F3FF' },
        { name: 'Arte', icon: '🎭', color: '#FFFBEB' },
        { name: 'Ciencias Naturales', icon: '🌿', color: '#F0FFF4' },
        { name: 'Ciencias Sociales', icon: '🌎', color: '#FEF3C7' }
      ],
      uniform: [
        'Chemise blanca institucional con insignia',
        'Pantalón de vestir negro',
        'Zapatos blancos o negros',
        'Uniforme de Educación Física institucional'
      ]
    },
    'bachillerato': {
      title: 'Bachillerato',
      requirements: [
        { title: 'Requisitos y lista de útiles para 1er año', content: '• Certificado de 6to grado\n• Notas certificadas\n• Solvencia administrativa\n• Lista de útiles para 1er año' },
        { title: 'Requisitos y lista de útiles para 2do año', content: '• Boleta de promoción de 1er año\n• Carta de conducta\n• Lista de útiles para 2do año' },
        { title: 'Requisitos y lista de útiles para 3er año', content: '• Expediente de 1er y 2do año\n• Solvencia administrativa\n• Lista de útiles para 3er año' },
        { title: 'Requisitos y lista de útiles para 4to año', content: '• Boleta de 3er año aprobada\n• Registro de inscripción militar (si aplica)\n• Lista de útiles para 4to año' },
        { title: 'Requisitos y lista de útiles para 5to año', content: '• Documentación para título de bachiller\n• Fotos para el título\n• Lista de útiles para 5to año' }
      ],
      subjects: [
        { name: 'Matemática', icon: '📐', color: '#FDF2F8' },
        { name: 'Física', icon: '⚡', color: '#F0F9FF' },
        { name: 'Química', icon: '🧪', color: '#ECFDF5' },
        { name: 'Biología', icon: '🧬', color: '#FFFBEB' },
        { name: 'FPS', icon: '🤝', color: '#EEF2FF' },
        { name: 'Educación Física', icon: '🏃', color: '#F5F3FF' }
      ],
      uniform: [
        '1ero, 2do y 3er año: Chemise azul con insignia',
        '4to y 5to año: Chemise beige con insignia',
        'Pantalón de vestir negro',
        'Zapatos blancos o negros',
        'Uniforme de Educación Física institucional'
      ]
    }
  }

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
    } else if (id.startsWith('academic-')) {
      setActiveView(id)
      window.scrollTo(0, 0)
    }
  }

  const renderContent = () => {
    if (activeView.startsWith('academic-')) {
      const level = activeView.split('-')[1]
      return (
        <div className="pt-20">
          <AcademicLevelDetail
            levelData={academicData[level]}
            onBack={() => handleNavigation('nosotros')}
          />
        </div>
      )
    }

    switch (activeView) {
      case 'inicio':
        return (
          <>
            <div id="inicio-view">
              <Hero onNavigate={handleNavigation} />
            </div>
            <About isFullView={false} onNavigate={handleNavigation} />
          </>
        )
      case 'nosotros':
        return (
          <div className="pt-20">
            <About isFullView={true} onNavigate={handleNavigation} />
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
            <About onNavigate={handleNavigation} />
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
