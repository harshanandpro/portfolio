import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // Sample testimonial data - you can replace with real testimonials later
  const testimonials = [
    // {
    //   id: 1,
    //   name: "No Testimonials Yet",
    //   role: "Product Manager",
    //   company: "TechCorp",
    //   image: "👩‍💼",
    //   content: "Harsh delivered an exceptional React application that exceeded our expectations. His attention to detail and problem-solving skills are outstanding.",
    //   rating: 5,
    //   project: "Could be your Project"
    // },
  ];

  const placeholderTestimonial = {
    id: 0,
    name: "Your Name Here",
    role: "Your Role",
    company: "Your Company",
    image: "✨",
    content: "Be my first testimonial! Let's work together and create something amazing. I'm excited to help bring your ideas to life.",
    rating: 5,
    project: "Future Project",
    isPlaceholder: true
  };

  const allTestimonials = [placeholderTestimonial, ...testimonials];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      intervalRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % allTestimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, allTestimonials.length]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % allTestimonials.length);
      }, 5000);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <div
      id={id}
      className={`testimonials ${isVisible ? 'visible' : ''}`}
      ref={containerRef}
    >
      {/* Background Effects */}
      <div className="testimonials-background">
        <div className="floating-quotes">
          <div className="quote-mark quote-1">"</div>
          <div className="quote-mark quote-2">"</div>
          <div className="quote-mark quote-3">"</div>
          <div className="quote-mark quote-4">"</div>
        </div>
        <div className="testimonials-grid-pattern"></div>
        <div className="testimonials-gradient-overlay"></div>
      </div>

      <div className="testimonials-content">
        {/* Header Section */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">Client Testimonials</h2>
          <p className="testimonials-subtitle">
            What people say about working with me
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="testimonials-showcase">
          <div className="testimonial-card-container">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${
                  index === activeSlide ? 'active' : ''
                } ${testimonial.isPlaceholder ? 'placeholder' : ''}`}
                style={{ '--animation-delay': `${index * 0.1}s` }}
              >
                <div className="card-inner">
                  <div className="testimonial-header">
                    <div className="client-avatar">
                      <span className="avatar-emoji">{testimonial.image}</span>
                      <div className="avatar-ring"></div>
                    </div>
                    <div className="client-info">
                      <h3 className="client-name">{testimonial.name}</h3>
                      <p className="client-role">{testimonial.role}</p>
                      <p className="client-company">{testimonial.company}</p>
                    </div>
                    <div className="rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  <div className="testimonial-content">
                    <div className="quote-icon">❝</div>
                    <p className="testimonial-text">{testimonial.content}</p>
                    <div className="project-tag">
                      <span className="tag-label">Project:</span>
                      <span className="tag-value">{testimonial.project}</span>
                    </div>
                  </div>

                  {testimonial.isPlaceholder && (
                    <div className="placeholder-cta">
                      <button className="cta-button">
                        <span className="button-text">Work With Me</span>
                        <span className="button-arrow">→</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="card-glow"></div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="testimonials-navigation">
            {allTestimonials.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => handleSlideChange(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <div className="dot-inner"></div>
                <div className="dot-ripple"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">4</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction Promised</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="testimonials-particles">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}>
            <div className="particle-core"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
