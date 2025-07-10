import './Navbar.css'
import React from 'react'
import NavBlock from './NavBlock'

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className="navbar_left">

      </div>

      <div className="navbar_mid">

      <NavBlock block_name="Intro" targetId="intro" />
        <NavBlock block_name="Skills / Services" targetId="skills" />
        <NavBlock block_name="Projects" targetId="projects" />
        <NavBlock block_name="Testimonials" targetId="testimonials" />
        <NavBlock block_name="Contact Me" targetId="contact" />

      </div>
      
      <div className="navbar_right">

      </div>

      </div>
  )
}

export default Navbar