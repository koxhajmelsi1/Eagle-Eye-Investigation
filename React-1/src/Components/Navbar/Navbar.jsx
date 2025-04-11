import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { Link } from "react-scroll";


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
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li> <Link to='investigations' smooth={true} offset={-380} duration={500}>Investigations</Link></li>
        <li><Link to='about' smooth={true} offset={-130} duration={500}>About us</Link></li>
        <li><Link to='testimonilas' smooth={true} offset={-260} duration={500}>Product</Link></li>
        <li><Link to='academy' smooth={true} offset={-350} duration={500}>Gallery</Link></li>
        <li ><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
