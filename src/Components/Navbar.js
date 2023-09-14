import React from 'react';
import "./Navbar.scss"
import logo from "../Assets/logo1.jpg"


const Navbar = () => {
  return (
    <div className='navbar-default'>
      <div className='logo'>
        <img src={logo} className='logoimage'/>
      </div>
      
    </div>
  )
}

export default Navbar