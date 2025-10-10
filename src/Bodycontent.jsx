import React, { useEffect, useState } from 'react'
import './Body.css'
import stars from './stars.gif'
import bg from './bg.png'

const Body = ({id}) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id={id} className="body">
      <div className='body_graphics'>
        <div className="body_content">
          <div className="body_maincontent">
            <span className="text-line">Hi, I am</span>
            <span className="text-line main-name"> Harsh Anand</span>
          </div>
          
          <div className="body_2nd">
            <span className="text-segment">I turn ideas into</span>
            <span className="text-segment highlight"> responsive React apps</span>
            <span className="text-segment"> and</span>
            <span className="text-segment highlight"> cool Python scripts</span>
          </div>

          <div className="body_3rd"> 
            <span>Let's build something</span>
            <span className="awesome-text"> awesome</span>
            <span> together!</span>
          </div>

          {/* Scroll indicator for mobile */}
          {windowDimensions.width <= 768 && (
            <div className="scroll-indicator">
              <div className="scroll-arrow">↓</div>
              <span className="scroll-text">Scroll to explore</span>
            </div>
          )}
        </div>
        
        <div className="body_shield"></div>
        <img className='body_gif' src={stars} alt="Animated stars background" />
        <img src={bg} alt="Space background" className='body_img'/>
        <div className="separator"></div>
      </div>
    </div>
  )
}

export default Body
