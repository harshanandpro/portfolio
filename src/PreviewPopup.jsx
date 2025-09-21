import React from 'react';
import './PreviewPopup.css';

export default function PreviewPopup({ images }) {
  if (!images) return null; // show only when hovering image

  return (
    <div className="preview-overlay">
      <div className="preview-content">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`preview-${i}`} />
        ))}
      </div>
    </div>
  );
}
