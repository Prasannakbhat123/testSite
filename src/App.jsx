import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Footer from './components/footer'

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
