import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate, useParams, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Hymns from './components/Hymns'
import Contact from './components/Contact'
import Payments from './components/Payments'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import AcademicLevelDetail from './components/AcademicLevelDetail'

// Helper component for scrolling management on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Wrapper for Academic Detail routes to extract params
function AcademicDetailWrapper({ academicData, onNavigate }) {
  const { level } = useParams();
  const navigate = useNavigate();
  
  if (!academicData[level]) return <Navigate to="/" replace />;
  
  return (
    <div className="pt-20">
      <AcademicLevelDetail
        levelData={academicData[level]}
        onBack={() => onNavigate('/nosotros')}
      />
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Determinar activeView basado en la ruta actual para el Navbar
  const getActiveView = () => {
    const path = location.pathname;
    if (path === '/') return 'inicio';
    if (path === '/nosotros' || path.startsWith('/academia/')) return 'nosotros';
    if (path === '/identidad') return 'identidad';
    if (path === '/pagos') return 'pagos';
    if (path === '/contacto') return 'contacto';
    return 'inicio';
  }

  const activeView = getActiveView();

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

  const handleNavigation = (dest) => {
    // Si dest es un ID de vista antiguo, lo convertimos a ruta
    let path = dest;
    if (dest === 'inicio') path = '/';
    else if (dest === 'nosotros') path = '/nosotros';
    else if (dest === 'identidad') path = '/identidad';
    else if (dest === 'contacto') path = '/contacto';
    else if (dest === 'pagos') path = '/pagos';
    else if (dest.startsWith('academic-')) path = `/academia/${dest.split('-')[1]}`;

    // Navegar
    if (path === '/' && location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  }

  return (
    <div className="min-h-screen bg-secondary antialiased flex flex-col font-inter transition-all duration-700">
      <ScrollToTop />
      <Navbar 
        activeView={activeView} 
        onNavigate={handleNavigation} 
        isOpen={isMenuOpen} 
        onToggle={setIsMenuOpen} 
      />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <div id="inicio-view">
                <Hero onNavigate={handleNavigation} />
              </div>
              <About isFullView={false} onNavigate={handleNavigation} />
            </>
          } />
          
          <Route path="/nosotros" element={
            <div className="pt-20">
              <About isFullView={true} onNavigate={handleNavigation} />
            </div>
          } />
          
          <Route path="/identidad" element={
            <div className="pt-20">
              <Hymns />
            </div>
          } />
          
          <Route path="/pagos" element={
            <div className="pt-20">
              <Payments />
            </div>
          } />
          
          <Route path="/contacto" element={
            <div className="pt-20">
              <Contact />
            </div>
          } />
          
          <Route 
            path="/academia/:level" 
            element={<AcademicDetailWrapper academicData={academicData} onNavigate={handleNavigation} />} 
          />
          
          {/* Fallback for shared links or typos */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigation} />
      <WhatsAppFAB isMenuOpen={isMenuOpen} />
    </div>
  )
}

export default App
