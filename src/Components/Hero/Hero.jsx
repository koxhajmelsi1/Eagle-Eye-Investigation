import React from 'react'
import './Hero.css'
import arrows from '../../assets/arrows.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">

            <h1>"With the sharp eye of an eagle,
                 we guarantee security, uncover the unknown, 
                 and analyze every detail that matters."
            </h1><br />

            <p>
            At EAGLE EYE INVESTIGATION, we aspire to be a trusted leader in security, 
            private investigations, and forensic analysis. 
            Our goal is to ensure that individuals and organizations feel safe and secure. 
            Through innovative and tailored solutions, we provide the support and peace of mind you need to protect what matters most.
            </p>

            <button className='btn'>Explore more <img src={arrows} alt="" className='arrows' /> </button>
            
        </div>
      
    </div>
  )
}

export default Hero
