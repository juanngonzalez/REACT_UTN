import React from 'react'
import NavBrand from '../NavBar/NavBrand'
import './NavBar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import showMenu from './NavBarScript'
import {Link} from 'react-router-dom'



function NavBar() {

  return (
    <nav className='contenedorNav'>
        <label className='logoNav'><NavBrand/></label>
        <div className='rutasNav'>
            <ul id='otroModo'>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/skate'>SKATES</Link></li>
                <li><Link to='/clothes'>CLOTHES</Link></li>
                <li><Link to='/us'>ABOUT US</Link></li>
                <li><Link to='/news'>NEWS</Link></li>
                <li><Link to='/contact'>CONTACT</Link></li>
            </ul>
        </div>
        <button className='ingresar'>INGRESAR</button>
        <div className='btnMenu'onClick={showMenu}>
            <GiHamburgerMenu/>
        </div>
    </nav>
  )
}

export default NavBar