import './Navbar.css'
import React, { useState, useEffect } from 'react'
import NavBlock from './NavBlock'

const Navbar = ({ hide }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (mobileMenuOpen && !e.target.closest('.navbar-container') && !e.target.closest('.navbar_mid')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
      // ❌ REMOVED: document.body.classList.add('menu-open');
    } else {
      // ❌ REMOVED: document.body.classList.remove('menu-open');
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      // ❌ REMOVED: document.body.classList.remove('menu-open');
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Hide navbar when floating nav should be shown (only on desktop)
  if (hide && window.innerWidth > 768) {
    return null;
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar_left">
            <div className="logo-container">
              <div className="logo-gradient">
                <span className="logo-gradient-text">H</span>
              </div>
              <span className="logo-text">Portfolio</span>
            </div>
          </div>

          <div className={`navbar_mid ${mobileMenuOpen ? 'active' : ''}`}>
            <div className="nav-links-wrapper">
              <NavBlock block_name="Intro" targetId="intro" onClick={closeMobileMenu} />
              <NavBlock block_name="Skills" targetId="skills" onClick={closeMobileMenu} />
              <NavBlock block_name="Services" targetId="services" onClick={closeMobileMenu} />
              <NavBlock block_name="Projects" targetId="projects" onClick={closeMobileMenu} />
              <NavBlock block_name="Testimonials" targetId="testimonials" onClick={closeMobileMenu} />
              <NavBlock block_name="Contact Me" targetId="contact" onClick={closeMobileMenu} />
            </div>
            <div className="nav-indicator"></div>
          </div>
          
          <div className="navbar_right">
            <button 
              className={`nav-burger ${mobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        
        <div className="navbar-glow"></div>
      </nav>
      
      {/* Mobile menu overlay - moved outside navbar */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default Navbar
