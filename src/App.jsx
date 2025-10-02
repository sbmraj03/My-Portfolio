import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import MobileMenu from './components/MobileMenu.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import PortfolioSection from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="bg-black text-white font-[Verdana, Geneva, Tahoma, sans-serif] min-h-screen overflow-x-hidden">
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <About />
      <Skills />
      <PortfolioSection />
      <Contact />
      <Footer />
    </div>
  )
}
