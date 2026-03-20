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
        'Los requisitos deben ser entregados en un sobre manila tamaño OFICIO',
        '1 foto del alumno, tipo carnet',
        'Fotocopia de la partida de nacimiento',
        'Copia del último recibo de pago de la institución donde cursa.',
        'Constancia de niño sano (maternal y preescolar)',
        'Certificación de ingresos o carta de trabajo, que indique sueldo y antigüedad (ambos representantes).',
        'Copia cédula de identidad de ambos representantes.',
        'Certificado de educación preescolar (para el momento en que realice la inscripción).',
      
      ],
      supplies: [
        { label: 'Lista de útiles para 1er nivel', link: '/pdf/utiles-preescolar-1er-nivel.pdf' },
        { label: 'Lista de útiles para 2do nivel', link: '/pdf/utiles-preescolar-2do-nivel.pdf' },
        { label: 'Lista de útiles para 3er nivel', link: '/pdf/utiles-preescolar-3er-nivel.pdf' }
      ],
      subjects: [
        { name: 'Dibujo', icon: '🎨', color: '#FFF0F0' },
        { name: 'Escritura', icon: '✍️', color: '#F0F7FF' },
        { name: 'Lectura', icon: '📚', color: '#F0FFF4' }
      ],
      uniform: [
        'Chemise roja institucional con insignia',
        'Pantalón azul oscuro',
        'Zapatos blancos o negros',
        'Uniforme de Educación Física institucional'
      ]
    },
    'primaria': {
      title: 'Primaria',
      description: 'En el nivel de primaria, que abarca de los 6 a los 12 años, los estudiantes transitan hacia una formación más estructurada y profunda. A lo largo de estos grados, fortalecen su dominio académico, perfeccionando la escritura mediante dictados y el uso de letra cursiva, mientras avanzan en el estudio de los idiomas inglés e italiano y el desarrollo físico a través de deportes. Un pilar fundamental de nuestra metodología es la conexión con nuestras raíces, por lo que incentivamos constantemente la realización de exposiciones sobre historia, cultura general y el patrimonio de nuestra Venezuela, formando ciudadanos con conciencia crítica y conocimiento.',
      requirements: [
        'Los requisitos deben ser entregados en un sobre manila tamaño OFICIO',
        'Copia boletas de primero y segundo lapso.',
        'Copia del último recibo de pago de la institución donde cursa.',
        'Copia partida de nacimiento.',
        'Certificación de ingresos o carta de trabajo, que indique sueldo y antigüedad (ambos representantes).',
        'Copia cédula de identidad de ambos representantes y del alumno en caso de poseerla.',
        'Constancia de prosecución',

      ],
      supplies: [
        { label: 'Lista de útiles para 1er grado', link: '/pdf/utiles-primaria-1er-grado.pdf' },
        { label: 'Lista de útiles para 2do grado', link: '/pdf/utiles-primaria-2do-grado.pdf' },
        { label: 'Lista de útiles para 3er grado', link: '/pdf/utiles-primaria-3er-grado.pdf' },
        { label: 'Lista de útiles para 4to grado', link: '/pdf/utiles-primaria-4to-grado.pdf' },
        { label: 'Lista de útiles para 5to grado', link: '/pdf/utiles-primaria-5to-grado.pdf' },
        { label: 'Lista de útiles para 6to grado', link: '/pdf/utiles-primaria-6to-grado.pdf' }
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
        'Pantalón azul oscuro',
        'Zapatos blancos o negros',
        'Uniforme de Educación Física institucional'
      ]
    },
    'bachillerato': {
      title: 'Bachillerato (1ro - 3ro)',
      description: 'En esta etapa de Media General, los estudiantes profundizan en diversas áreas del saber, desarrollando capacidades analíticas y críticas. El currículo está diseñado para fortalecer las bases científicas y humanísticas, preparando a los jóvenes para los retos del ciclo diversificado y fomentando valores de responsabilidad y autonomía.',
      requirements: [
        'Los requisitos deben ser entregados en un sobre manila tamaño OFICIO',
        'Copia boletas de primero y segundo lapso.',
        'Copia partida de nacimiento.',
        'Copia de cédula de identidad del alumno.',
        'Certificación de ingresos o carta de trabajo, que indique sueldo y antigüedad (ambos representantes).',
        'Copia cédula de identidad de ambos representantes.',
        'Copia del último recibo de pago de la institución donde cursa.',
        'Notas certificadas (para el mes en que realice la inscripción).'
      ],
      supplies: [
        { label: 'Lista de útiles para 1er año', link: '/pdf/utiles-bachillerato-1er-año.pdf' },
        { label: 'Lista de útiles para 2do año', link: '/pdf/utiles-bachillerato-2do-año.pdf' },
        { label: 'Lista de útiles para 3er año', link: '/pdf/utiles-bachillerato-3er-año.pdf' }
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
        { name: 'Informática', icon: '💻', color: '#EEF2FF' },
        { name: 'Educación Física', icon: '🏃', color: '#F9FAFB' }
      ],
      uniform: [
        'Chemise azul institucional con insignia',
        'Pantalón azul oscuro',
        'Zapatos negros',
        'Uniforme de Educación Física institucional'
      ]
    },
    'diversificado': {
      title: 'Bachillerato (4to - 5to)',
      description: 'El ciclo diversificado representa la culminación académica para jóvenes de 15 a 17 años. Nuestros estudiantes se gradúan como Bachilleres en Ciencias, habiendo cultivado competencias esenciales como el trabajo colaborativo, la capacidad de autogestión y el liderazgo. Este periodo se enfoca en la preparación pre-universitaria y la excelencia científica.',
      requirements: [
        'Los requisitos deben ser entregados en un sobre manila tamaño OFICIO',
        'Copia boletas de primero y segundo lapso.',
        'Copia partida de nacimiento.',
        'Copia de cédula de identidad del alumno.',
        'Certificación de ingresos o carta de trabajo, que indique sueldo y antigüedad (ambos representantes).',
        'Copia cédula de identidad de ambos representantes.',
        'Copia del último recibo de pago de la institución donde cursa.',
        'Notas certificadas (para el mes en que realice la inscripción).'
      ],
      supplies: [
        { label: 'Lista de útiles para 4to año', link: '/pdf/utiles-bachillerato-4to-año.pdf' },
        { label: 'Lista de útiles para 5to año', link: '/pdf/utiles-bachillerato-5to-año.pdf' }
      ],
      subjects: [
        { name: 'Matemática', icon: '📐', color: '#FDF2F8' },
        { name: 'Castellano', icon: '📚', color: '#F0FDF4' },
        { name: 'Inglés', icon: '🇺🇸', color: '#F0F9FF' },
        { name: 'Física', icon: '⚡', color: '#F5F3FF' },
        { name: 'Química', icon: '🧪', color: '#ECFDF5' },
        { name: 'Biología', icon: '🧬', color: '#FFFBEB' },
        { name: 'Historia', icon: '⏳', color: '#FEF3C7' },
        { name: 'Ciencias de la Tierra', icon: '🌍', color: '#F0FDFA' },
        { name: 'Dibujo Técnico', icon: '📏', color: '#F8FAFC' },
        { name: 'Educación Física', icon: '🏃', color: '#F9FAFB' }
      ],
      uniform: [
        'Chemise beige institucional con insignia',
        'Pantalón azul oscuro',
        'Zapatos negros',
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
