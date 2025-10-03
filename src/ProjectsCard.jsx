import React, { useState } from 'react';
import './Projects.css';

const ProjectsCard = ({ name, photo, desc, link, color, moreImages = [], setPreviewImages, isActive }) => {
  const handleImageClick = () => {
    setPreviewImages(moreImages);
  };

  return (
    <div className={`projects_projects ${isActive ? 'active' : ''}`}>
      <div className="projects_image_wrapper">
        <div className="projects_image" onClick={handleImageClick}>
          <img
            className="projects_projectimg"
            src={photo}
            alt={name}
          />
          <div className="image_overlay">
            <div className="overlay_content">
              <div className="gallery_icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                  <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="gallery_text">View Gallery</span>
              <div className="image_count">{moreImages.length} images</div>
            </div>
          </div>
          <div 
            className="image_border_glow" 
            style={{ '--accent-color': color }}
          ></div>
        </div>
      </div>

      <div className="projects_texts">
        <div className="projects_title_wrapper">
          <h3 className="projects_title">{name}</h3>
          <div 
            className="title_accent" 
            style={{ backgroundColor: color }}
          ></div>
        </div>
        
        <p className="projects_desc">{desc}</p>
        
        {link && (
          <a 
            className="projects_link" 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ '--link-color': color }}
          >
            <span>Visit Project</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
