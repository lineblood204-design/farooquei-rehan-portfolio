import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import CursorFollow from './components/CursorFollow'
import ClickRipple from './components/ClickRipple'
import FloatingOrbs from './components/FloatingOrbs'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import OpenSource from './components/OpenSource'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={isDark ? 'bg-dark text-white' : 'bg-white text-dark'}>
      <CursorFollow />
      <ClickRipple />
      <FloatingOrbs />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <OpenSource />
      <Contact />
      <Footer />
    </div>
  )
}

export default App