import './NavBlock.css'
import React, { useState, useEffect } from 'react'

const NavBlock = ({ block_name, targetId, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    // Create ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      x,
      y,
      id: Date.now()
    };
    
    setRipples([...ripples, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    // 🔥 NEW: Call the onClick callback if provided (for closing mobile menu)
    if (onClick) {
      onClick();
    }

    // Scroll to target
    const el = document.getElementById(targetId);
    if (el) {
      setIsActive(true);
      el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      
      // Remove active state after scroll
      setTimeout(() => setIsActive(false), 1500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById(targetId);
      if (el) {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top <= 100 && rect.bottom >= 100;
        setIsActive(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetId]);

  return (
    <div 
      className={`navblock ${isActive ? 'active' : ''}`} 
      onClick={handleClick}
      data-text={block_name}
    >
      {/* Background Elements */}
      <div className="navblock-bg">
        <div className="bg-gradient"></div>
        <div className="bg-glass"></div>
      </div>

      {/* Content */}
      <div className="navblock-content">
        <span className="navblock-text">{block_name}</span>
        <div className="navblock-underline"></div>
      </div>

      {/* Interactive Elements */}
      <div className="navblock-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>

      {/* Ripple Effects */}
      <div className="ripple-container">
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ripple"
            style={{
              left: ripple.x,
              top: ripple.y
            }}
          />
        ))}
      </div>

      {/* Hover Glow Effect */}
      <div className="navblock-glow"></div>
    </div>
  )
}

export default NavBlock
