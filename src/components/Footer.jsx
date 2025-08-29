import React from 'react'
import logo1 from '../assets/logo.jpg.png'


const Footer = () => {
     return(
      <div className='foot'>
      <div className='footer'>
        <img src={logo1} className='footimg'/>
        
          <div className='contact'>  
        <h2>Contact Us</h2>
        <p>kameelthamim6@gmail.com</p>
        </div>
        <p style={{fontSize:`23px`}}>If you'r facing any bug or issues while using this site feel free to contact </p>
        </div>
      <div className='footend'>
      <p style={{fontSize:`23px`}}>Copyright 2025.All rights reserved.</p>
      </div>
      </div>
     )
}

export default Footer