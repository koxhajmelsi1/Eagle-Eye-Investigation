import React from 'react'
import './About.css'
import logo from '../../assets/logo.jpg'
import play2 from '../../assets/play2.png'


const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={logo} alt="" className='logo1' />
            <img src={play2} alt="" className='play-inc' />
        </div>
        <div className="about-right">
            <h3>ABOUT EAGLE EYE INVESTIGATION</h3>
            <h2>EAGLE EYE INVESTIGATION – Vigilance in every detail, safety in every step.</h2>
            <p>"EAGLE EYE INVESTIGATION" is a company specialized in providing security consulting services, private investigations and forensic analysis. Founded with the goal of providing protection and solutions for individuals, businesses and organizations, we are committed to providing the highest quality services to ensure the security and integrity of our clients' assets.</p>
            <p>"EAGLE EYE INVESTIGATION" is a company dedicated to providing security consulting services, private investigations and forensic analysis. Founded in 2024, our company aims to protect the interests of our clients by providing them with advanced and customized solutions to security challenges.</p>
            <p>With EAGLE EYE INVESTIGATION, you get more than just services; you get a reliable partner in your life and business insurance. We are here to support you and help you achieve a high level of security.</p>
        </div>
    </div>
  )
}

export default About
