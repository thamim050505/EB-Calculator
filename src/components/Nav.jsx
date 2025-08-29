import React from 'react'
import logo from '../assets/logo.jpg.png'
import { NavLink } from 'react-router-dom'

const Nav = () =>{
   return(
    <div className='nav'>
      <img src={logo}/>
      <div className='navlink'>
     <NavLink className='navlink' to='/'><b>Home</b></NavLink>
      <NavLink className='navlink' to='/Calculator'><b>Calculator</b></NavLink>
      <NavLink className='navlink'to='/Table' ><b>Table</b></NavLink>
      </div>
    </div>
   )
}
export default Nav