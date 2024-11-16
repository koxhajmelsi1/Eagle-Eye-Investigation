import React from 'react'
import './Academy.css'
import gal1 from '../../assets/gal1.jpg'
import gal2 from '../../assets/gal2.jpg'
import gal5 from '../../assets/gal5.jpg'
import gal6 from '../../assets/gal6.jpg'
import arrows from '../../assets/arrows.png'

const Academy = () => {
  return (
    <div className='academy'>
        <div className="gallery">
            <img src={gal1} alt="" />
            <img src={gal2} alt="" />
            <img src={gal5} alt="" />
            <img src={gal6} alt="" />
        </div>
        <button className='btn dark-btn '>See more here <img src={arrows} alt="" className='arrows' /></button>
    </div>
  )
}

export default Academy
