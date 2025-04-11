import React from 'react'
import './Investigation.css'
import trajnime from '../../assets/trajnime.jpg'
import hetim_privat from '../../assets/hetim_privat.jpg'
import analiz_kriminalistike from  '../../assets/analiz_kriminalistike.jpg'
import inc_trj from '../../assets/inc_trj.png'
import inc_det from '../../assets/inc_det.png'
import inc_fs from '../../assets/inc_fs.png'
const Investigation = () => {
  return (
    <div className="investigations">
      <div className="investigation">
        <img src={trajnime} alt="Training" />
        <div className="caption">
            <img src={inc_trj} alt="" />
            <p>Training</p>
        </div>
      </div>
      
      <div className="investigation">
        <img src={hetim_privat} alt="Private Investigation" />
        <div className="caption">
            <img src={inc_det} alt="" />
            <p>Private Investigation</p>
        </div>
      </div>
      
      <div className="investigation">
        <img src={analiz_kriminalistike} alt="Criminal Analysis" />
        <div className="caption">
            <img src={inc_fs} alt="" />
            <p>Criminal Analysis</p>
        </div>
      </div>
    </div>
  )
}

export default Investigation
