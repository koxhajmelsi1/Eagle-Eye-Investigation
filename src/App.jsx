import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Investigation from './Components/Investigation/Investigation'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Academy from './Components/Academy/Academy'
import Product from './Components/Product/Product'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Foter'
const App = () =>{
  return(
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle='Main SERVICES' title="What We Offer" />
          <Investigation/>
        
          <About/>
          <Title subTitle='Gallery' title="Academy Photos" />
          <Academy/>
          <Title subTitle='Product' title="Our Products" />
          <Product/>
          <Title subTitle='Contact Us' title="Get in Touch" />
          <Contact />
          <Footer />
         </div>

        
    </div>
  )
}

export default App