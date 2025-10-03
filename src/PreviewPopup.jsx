import React, { useState, useEffect } from 'react';
import './PreviewPopup.css';

export default function PreviewPopup({ images, setPreviewImages }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePositions, setImagePositions] = useState([]);

  useEffect(() => {
    if (images && images.length > 0) {
      // Generate random positions for floating effect
      const positions = images.map(() => ({
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10,
        rotation: Math.random() * 10 - 5,
        scale: 0.95 + Math.random() * 0.1,
      }));
      setImagePositions(positions);
    }
  }, [images]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!images) return;

    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (selectedImage && e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (selectedImage && e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, images]);

  if (!images) return null;

  const handleClose = () => {
    setSelectedImage(null);
    setPreviewImages(null);
  };

  const handleImageClick = (img, index) => {
    setSelectedImage({ src: img, index });
  };

  const closeSelectedImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = selectedImage.index;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage({ src: images[newIndex], index: newIndex });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      if (selectedImage) {
        closeSelectedImage();
      } else {
        handleClose();
      }
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="preview-overlay" onClick={handleOverlayClick}>
        {/* Background Effects */}
        <div className="background-effects">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
        </div>

        <div className="preview-content">
          {/* Close button for the gallery */}
          <button className="gallery-close-button" onClick={handleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2"/>
              <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>

          <div className="gallery-header">
            <h3 className="gallery-title">Project Gallery</h3>
            <div className="gallery-counter">
              <span>{images.length} Images</span>
            </div>
          </div>

          <div className="images-grid">
            {images.map((img, i) => (
              <div 
                key={i} 
                className="image-card"
                style={{
                  '--float-x': `${imagePositions[i]?.x || 0}px`,
                  '--float-y': `${imagePositions[i]?.y || 0}px`,
                  '--rotation': `${imagePositions[i]?.rotation || 0}deg`,
                  '--scale': imagePositions[i]?.scale || 1,
                  animationDelay: `${i * 0.1}s`
                }}
                onClick={() => handleImageClick(img, i)}
              >
                <div className="image-wrapper">
                  <img src={img} alt={`preview-${i}`} />
                  <div className="image-overlay-hover">
                    <div className="zoom-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                        <path d="21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
                        <line x1="11" y1="8" x2="11" y2="14" stroke="currentColor" strokeWidth="2"/>
                        <line x1="8" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="image-number">{String(i + 1).padStart(2, '0')}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          {images.length > 6 && (
            <div className="scroll-indicators">
              <div className="scroll-hint">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Scroll to see more</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Full Size Image Modal */}
      {selectedImage && (
        <div className="fullsize-modal" onClick={handleOverlayClick}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeSelectedImage}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2"/>
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>

            {images.length > 1 && (
              <>
                <button className="nav-button prev" onClick={() => navigateImage('prev')}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <polyline points="15,18 9,12 15,6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>

                <button className="nav-button next" onClick={() => navigateImage('next')}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <polyline points="9,18 15,12 9,6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
              </>
            )}

            <div className="modal-image-container">
              <img 
                src={selectedImage.src} 
                alt={`Full size ${selectedImage.index + 1}`}
                className="modal-image"
              />
            </div>

            <div className="modal-footer">
              <span className="image-counter">
                {selectedImage.index + 1} / {images.length}
              </span>
              <div className="keyboard-hint">
                Press <kbd>←</kbd> <kbd>→</kbd> to navigate, <kbd>Esc</kbd> to close
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
