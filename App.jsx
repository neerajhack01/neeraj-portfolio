import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <Navbar />
      <Hero />
      <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-20" />
      <About />
      <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-20" />
      <Skills />
      <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-20" />
      <Experience />
      <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-20" />
      <Projects />
      <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-20" />
      <Certifications />
      <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-20" />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
