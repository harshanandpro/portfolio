import React, { useState, useEffect } from 'react';
import NavBlock from './NavBlock';
import './NavbarContainer.css';

const NavbarContainer = ({ visible }) => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);

  const navItems = [
    { name: 'Intro', targetId: 'intro' },
    { name: 'Skills', targetId: 'skills' },
    { name: 'Services', targetId: 'services' },
    { name: 'Projects', targetId: 'projects' },
    { name: 'Testimonials', targetId: 'testimonials' },
    { name: 'Contact', targetId: 'contact' }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? (currentScrollY / documentHeight) * 100 : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  if (isMobile) {
    return null;
  }

  return (
    <nav className={`navbar-container ${visible ? 'scrolled' : ''} ${scrollDirection}`}>
      <div className={`navbar-floating ${isNavOpen ? 'open' : 'closed'}`}>
        <div className="floating-nav-background">
          <div className="floating-bg-gradient"></div>
          <div className="floating-bg-blur"></div>
        </div>
        
        <div className="floating-nav-items">
          {navItems.map((item, index) => (
            <div 
              key={index}
              className="floating-nav-item"
              style={{ 
                '--animation-delay': `${index * 0.05}s`,
                '--item-index': index
              }}
            >
              <NavBlock 
                block_name={item.name} 
                targetId={item.targetId} 
              />
              <div className="item-tooltip">
                <span className="tooltip-text">{item.name}</span>
                <div className="tooltip-arrow"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-progress-indicator">
          <div className="progress-circle">
            <svg className="progress-ring" width="40" height="40">
              <circle
                className="progress-ring-circle"
                cx="20"
                cy="20"
                r="16"
                fill="transparent"
                stroke="rgba(78, 205, 196, 0.3)"
                strokeWidth="2"
              />
              <circle
                className="progress-ring-progress"
                cx="20"
                cy="20"
                r="16"
                fill="transparent"
                stroke="#4ECDC4"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  strokeDasharray: `${2 * Math.PI * 16}`,
                  strokeDashoffset: `${2 * Math.PI * 16 * (1 - (scrollProgress / 100))}`
                }}
              />
            </svg>
            <div className="progress-percentage">
              {Math.round(scrollProgress)}%
            </div>
          </div>
        </div>

        {/* Button container for back-to-top and close */}
        <div className="nav-bottom-buttons">
          <button 
            className="back-to-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="btn-icon">↑</div>
          </button>

          <button 
            className="nav-toggle-btn close-btn"
            onClick={toggleNavbar}
            title="Hide navigation"
          >
            <div className="btn-icon">›</div>
          </button>
        </div>
      </div>

      {/* Open button (shows when navbar is closed) */}
      {!isNavOpen && visible && (
        <button 
          className="nav-toggle-btn open-btn"
          onClick={toggleNavbar}
          title="Show navigation"
        >
          <div className="btn-icon">‹</div>
        </button>
      )}
    </nav>
  );
};

export default NavbarContainer;
