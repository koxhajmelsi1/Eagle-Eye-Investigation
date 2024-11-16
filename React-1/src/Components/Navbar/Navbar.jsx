import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 80 ? setSticky(true) : setSticky(false);
    })
  }, []);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt=""  className='logo'/>
      <ul>
        <li>Home</li>
        <li>Investigations</li>
        <li>About us</li>
        <li>Service</li>
        <li>Gallery</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
