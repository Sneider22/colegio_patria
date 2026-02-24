import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import About from './components/About'
import Hymns from './components/Hymns'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-secondary antialiased">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <About />
        <Hymns />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
