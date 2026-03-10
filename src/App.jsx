import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Hymns from './components/Hymns'
import Contact from './components/Contact'
import Payments from './components/Payments'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import AcademicLevelDetail from './components/AcademicLevelDetail'

function App() {
  const [activeView, setActiveView] = useState('inicio') // 'inicio', 'nosotros', 'identidad', 'contacto', 'academic-*'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const academicData = {
    'preescolar': {
      title: 'Preescolar',
      description: 'La etapa preescolar, destinada a niños de 3 a 6 años, es el cimiento de todo su camino académico. Aquí, el aprendizaje se vive a través del juego didáctico, enfocándonos en el desarrollo de sus habilidades motrices, la iniciación a la lectoescritura y la consolidación de modales y valores fundamentales. Además, fomentamos su curiosidad natural mediante una introducción básica y dinámica a los idiomas inglés e italiano, garantizando un ambiente donde aprenden mientras se divierten y desarrollan su autonomía.',
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
      description: 'En el nivel de primaria, que abarca de los 6 a los 12 años, los estudiantes transitan hacia una formación más estructurada y profunda. A lo largo de estos grados, fortalecen su dominio académico, perfeccionando la escritura mediante dictados y el uso de letra cursiva, mientras avanzan en el estudio de los idiomas inglés e italiano y el desarrollo físico a través de deportes. Un pilar fundamental de nuestra metodología es la conexión con nuestras raíces, por lo que incentivamos constantemente la realización de exposiciones sobre historia, cultura general y el patrimonio de nuestra Venezuela, formando ciudadanos con conciencia crítica y conocimiento.',
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
        { name: 'Inglés', icon: '🇺🇸', color: '#F0F9FF' },
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
      description: 'Finalmente, el bachillerato representa la consolidación académica para jóvenes de 12 a 17 años. En esta etapa, el rigor intelectual aumenta con la inclusión de materias como física y química, preparando a los alumnos para la excelencia académica. Nuestros estudiantes se gradúan como Bachilleres en Ciencias, habiendo cultivado competencias esenciales como el trabajo colaborativo, la capacidad de autogestión y el liderazgo. Este aprendizaje trasciende el aula gracias a una vibrante vida escolar, donde los eventos deportivos y las actividades socioculturales juegan un rol clave en su formación integral y sentido de pertenencia.',
      requirements: [
        { title: 'Requisitos y lista de útiles para 1er año', content: '• Certificado de 6to grado\n• Notas certificadas\n• Solvencia administrativa\n• Lista de útiles para 1er año' },
        { title: 'Requisitos y lista de útiles para 2do año', content: '• Boleta de promoción de 1er año\n• Carta de conducta\n• Lista de útiles para 2do año' },
        { title: 'Requisitos y lista de útiles para 3er año', content: '• Expediente de 1er y 2do año\n• Solvencia administrativa\n• Lista de útiles para 3er año' },
        { title: 'Requisitos y lista de útiles para 4to año', content: '• Boleta de 3er año aprobada\n• Registro de inscripción militar (si aplica)\n• Lista de útiles para 4to año' },
        { title: 'Requisitos y lista de útiles para 5to año', content: '• Documentación para título de bachiller\n• Fotos para el título\n• Lista de útiles para 5to año' }
      ],
      subjects: [
        { name: 'Matemática', icon: '📐', color: '#FDF2F8' },
        { name: 'Castellano', icon: '📚', color: '#F0FDF4' },
        { name: 'Inglés', icon: '🇺🇸', color: '#F0F9FF' },
        { name: 'Física', icon: '⚡', color: '#F5F3FF' },
        { name: 'Química', icon: '🧪', color: '#ECFDF5' },
        { name: 'Biología', icon: '🧬', color: '#FFFBEB' },
        { name: 'Historia', icon: '⏳', color: '#FEF3C7' },
        { name: 'Geografía', icon: '🗺️', color: '#F0FDFA' },
        { name: 'Dibujo Técnico', icon: '📏', color: '#F8FAFC' },
        { name: 'Artes Plásticas', icon: '🎨', color: '#FFF1F2' },
        { name: 'Informática', icon: '💻', color: '#EEF2FF' },
        { name: 'FPS', icon: '🤝', color: '#F0F7FF' },
        { name: 'Educación Física', icon: '🏃', color: '#F9FAFB' }
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

  useEffect(() => {
    // Inicializar el historial si es la primera vez
    if (!window.history.state) {
      window.history.replaceState({ view: 'inicio' }, '')
    }

    const handlePopState = (event) => {
      if (event.state && event.state.view) {
        // Al navegar hacia atrás, actualizamos la vista sin hacer pushState de nuevo
        setActiveView(event.state.view)
        if (event.state.view === 'inicio') {
          setTimeout(() => {
            const elem = document.getElementById('inicio-view')
            if (elem) elem.scrollIntoView({ behavior: 'smooth' })
          }, 150)
        } else {
          window.scrollTo(0, 0)
        }
      } else {
        // Por si acaso no hay estado, volvemos a inicio
        setActiveView('inicio')
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleNavigation = (id, skipHistory = false) => {
    if (id === 'inicio') {
      if (activeView !== 'inicio') {
        setActiveView('inicio')
        if (!skipHistory) {
          window.history.pushState({ view: 'inicio' }, '')
        }
        setTimeout(() => {
          const elem = document.getElementById('inicio-view')
          if (elem) elem.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else if (id === 'nosotros') {
      setActiveView('nosotros')
      if (!skipHistory) window.history.pushState({ view: 'nosotros' }, '')
      window.scrollTo(0, 0)
    } else if (id === 'identidad') {
      setActiveView('identidad')
      if (!skipHistory) window.history.pushState({ view: 'identidad' }, '')
      window.scrollTo(0, 0)
    } else if (id === 'contacto') {
      setActiveView('contacto')
      if (!skipHistory) window.history.pushState({ view: 'contacto' }, '')
      window.scrollTo(0, 0)
    } else if (id === 'pagos') {
      setActiveView('pagos')
      if (!skipHistory) window.history.pushState({ view: 'pagos' }, '')
      window.scrollTo(0, 0)
    } else if (id.startsWith('academic-')) {
      setActiveView(id)
      if (!skipHistory) window.history.pushState({ view: id }, '')
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
      case 'pagos':
        return (
          <div className="pt-20">
            <Payments />
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
