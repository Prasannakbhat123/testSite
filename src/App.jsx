import React from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='px-8 py-8'>
        <HeroSection />
        <About />
        <Footer />
      </div>
      
    </div>
  )
}

export default App
