import './Navbar.css'
import React from 'react'
import NavBlock from './NavBlock'

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className="navbar_left">

      </div>

      <div className="navbar_mid">

      <NavBlock block_name="Intro"/>
      <NavBlock block_name="About Me"/>
      <NavBlock block_name="Skills / Services"/>
      <NavBlock block_name="Projects"/>
      <NavBlock block_name="Testimonials"/>
      <NavBlock block_name="Contact Me"/>

      </div>
      
      <div className="navbar_right">

      </div>

      </div>
  )
}

export default Navbar