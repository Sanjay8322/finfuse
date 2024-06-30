import React from 'react'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Testimonials from './Components/Testimonials'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
     <Navbar/> 
      <Hero />
      <Features />
      <About />
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App