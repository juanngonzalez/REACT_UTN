import React from 'react'
import FooterBrand from './FooterBrand'
import './Footer.css'

function Footer() {
  return (
    <div className='footerContainer'>
      <FooterBrand/>
      <div className='dataContainer'>
      <p>Levoine Skateboarding inc. &copy; </p>
      <p>Av. Santa fe 1234, CABA</p>
      <p>levoineskateboarding@gmail.com / 4566-3456</p>
      </div>
    </div>
  )
}

export default Footer