import React, { useState, useEffect } from 'react';
import './SkillsCard.css';

const SkillsCard = ({ iconx, name, shortline, color, level, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showLevel, setShowLevel] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowLevel(true);
      }, index * 200); // Staggered animation
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <div 
      className={`shine-border ${isVisible ? 'animate-in' : ''}`}
      style={{ 
        '--skill-color': color,
        animationDelay: `${index * 0.1}s`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='skillscard'>
        <div className='skillscard-inner'>
          <div className='skillscard-front'>
            <div className="icon-wrapper">
              <img src={iconx} alt={name} width="100px" height="100px" />
              <div className="icon-glow" style={{ backgroundColor: color }}></div>
            </div>
            <span className='skillscard_text'>{name}</span>
            
            {/* Proficiency Level Bar */}
            <div className="proficiency-container">
              <div className="proficiency-bar">
                <div 
                  className={`proficiency-fill ${showLevel ? 'animate' : ''}`}
                  style={{ 
                    '--fill-width': `${level}%`,
                    '--fill-color': color
                  }}
                ></div>
              </div>
              <span className="proficiency-text">{level}%</span>
            </div>

            {/* Floating Particles */}
            <div className="card-particles">
              {Array.from({ length: 3 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`card-particle particle-${i + 1}`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          <div className='skillscard-back'>
            <div className="back-content">
              <div className="skill-icon-small">
                <img src={iconx} alt={name} />
              </div>
              <h4 className="skill-title">{name}</h4>
              <p className='skillscard_desc'>{shortline}</p>
              
              {/* Advanced Level Display */}
              <div className="level-display">
                <div className="level-rings">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div 
                      key={i}
                      className={`level-ring ${i < Math.floor(level / 20) ? 'active' : ''}`}
                      style={{ '--ring-color': color }}
                    ></div>
                  ))}
                </div>
                <span className="level-text">
                  {level >= 90 ? 'Expert' : level >= 70 ? 'Advanced' : level >= 50 ? 'Intermediate' : 'Learning'}
                </span>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="back-pattern">
              <div className="pattern-grid">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="pattern-dot"
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      backgroundColor: `${color}20`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      {isHovered && (
        <div 
          className="hover-glow" 
          style={{ 
            boxShadow: `0 0 30px ${color}40, 0 0 60px ${color}20`
          }}
        ></div>
      )}
    </div>
  );
};

export default SkillsCard;
