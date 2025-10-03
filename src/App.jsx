import './App.css'
import React, { useState, useEffect } from 'react';
import Body from './Bodycontent'
import Navbar from './Navbar'
import Services from './Services.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './ContactUs.jsx'
import Footer from './Footer.jsx'
import NavbarContainer from './NavbarContainer.jsx'
import Testimonials from './Testimonials.jsx';

function App() {
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating nav when scrolled past the navbar (80px for desktop)
      if (window.scrollY > 80) {
        setShowFloatingNav(true);
      } else {
        setShowFloatingNav(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check at mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app_body'>
      <Navbar hide={showFloatingNav} />
      <NavbarContainer visible={showFloatingNav} />
      <Body id="intro"/>
      <Skills id='skills'/>
      <Services id='services'/>
      <div className="app_projecttest">
        <Projects id='projects'/>
        <Testimonials id="testimonials"/>
      </div>
      <Contact id='contact'/>
      <Footer/>
    </div>
  )
}

export default App
