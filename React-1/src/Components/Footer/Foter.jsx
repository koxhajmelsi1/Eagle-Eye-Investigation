import React from 'react'
import './Foter.css'
import logo from '../../assets/logo.jpg'


function Foter() {
  return (
    <div className='footer'>
      <p>&copy; 2024 Eagle Eye Investigation. All rights reserved. </p>
      <img src={logo} alt="" className='fot' />
      <ul>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Foter
