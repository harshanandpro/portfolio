import React, { useState, useEffect, useRef } from 'react';
import './Services.css';

const Services = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  
  const containerRef = useRef(null);
  const popupRef = useRef(null);

  const servicesData = [
    {
      id: 1,
      icon: "🖌️",
      title: "Front-End Web Development",
      description: "Build responsive, interactive React apps tailored to your needs.",
      color: "#FF6B6B",
      features: ["React & JavaScript", "Responsive Design", "Modern UI/UX"]
    },
    {
      id: 2,
      icon: "📱",
      title: "Responsive Website Design",
      description: "Make sure your site looks great on any device with modern CSS and Bootstrap.",
      color: "#4ECDC4",
      features: ["Mobile-First", "Cross-Browser", "Performance Optimized"]
    },
    {
      id: 3,
      icon: "🏠",
      title: "Landing Page Creation",
      description: "Design and build high-converting, beautiful landing pages.",
      color: "#45B7D1",
      features: ["High Conversion", "A/B Testing", "SEO Optimized"]
    },
    {
      id: 4,
      icon: "🛠️",
      title: "Website UI Updates & Fixes",
      description: "Improve, update, or repair your website for a polished, modern look.",
      color: "#96CEB4",
      features: ["Bug Fixes", "UI Improvements", "Code Optimization"]
    }
  ];

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

  // Handle popup outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        closePopup();
      }
    };

    if (showPopup) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  // Handle Escape key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    };

    if (showPopup) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [showPopup]);

  const openServicePopup = (service) => {
    setSelectedService(service);
    setFormData({
      name: '',
      email: '',
      service: service.title,
      description: ''
    });
    setShowPopup(true);
    setSubmitStatus('');
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedService(null);
    setSubmitStatus('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content
    const emailContent = `
Service Inquiry - ${formData.service}

From: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}

Description:
${formData.description}

---
This email was sent from your portfolio website service inquiry form.
    `;

    try {
      // Create a mailto link that will open the user's email client
      const mailtoLink = `mailto:harshanandpro22@gmail.com?subject=Service Inquiry - ${encodeURIComponent(formData.service)}&body=${encodeURIComponent(emailContent)}`;
      
      // Open the email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      
      // Close popup after a delay
      setTimeout(() => {
        closePopup();
      }, 2000);
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <>
      <div id={id} className={`services ${isVisible ? 'visible' : ''}`} ref={containerRef}>
        {/* Background Effects */}
        <div className="services-background">
          <div className="floating-elements">
            <div className="float-element element-1"></div>
            <div className="float-element element-2"></div>
            <div className="float-element element-3"></div>
            <div className="float-element element-4"></div>
          </div>
        </div>

        {/* Header Section */}
        <div className="services-header">
          <h2 className="services_title">Services</h2>
          <p className="services-subtitle">
            Transform your ideas into digital reality with cutting-edge solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${isVisible ? 'animate-in' : ''}`}
              style={{
                '--service-color': service.color,
                '--animation-delay': `${index * 0.1}s`
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-inner">
                <div className="card-glow" style={{ backgroundColor: service.color }}></div>
                
                <div className="service-icon">
                  <span className="icon-emoji">{service.icon}</span>
                  <div className="icon-bg" style={{ backgroundColor: `${service.color}20` }}></div>
                </div>

                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>

                  <div className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex} 
                        className="feature-tag"
                        style={{ 
                          borderColor: service.color,
                          animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s`
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-particles">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`particle particle-${i + 1}`}
                      style={{ backgroundColor: service.color }}
                    ></div>
                  ))}
                </div>

                {hoveredCard === service.id && (
                  <div 
                    className="hover-overlay"
                    onClick={() => openServicePopup(service)}
                  >
                    <div className="hover-content">
                      <span className="hover-text">Explore Service</span>
                      <div className="hover-arrow">→</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="services-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-description">Let's discuss how I can help bring your vision to life</p>
            <div className="cta-buttons">
              <button className="cta-primary" onClick={scrollToContact}>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Inquiry Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content" ref={popupRef}>
            <div className="popup-header">
              <div className="popup-service-info">
                <div className="popup-service-icon" style={{ color: selectedService?.color }}>
                  {selectedService?.icon}
                </div>
                <div>
                  <h3 className="popup-service-title">{selectedService?.title}</h3>
                  <p className="popup-service-desc">Service Inquiry</p>
                </div>
              </div>
              <button className="popup-close" onClick={closePopup}>×</button>
            </div>

            <form className="popup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service</label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  value={formData.service}
                  readOnly
                  className="readonly-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Project Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project requirements, timeline, and any specific features you need..."
                  rows="4"
                  required
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="submit-status success">
                  ✓ Opening your email client to send the inquiry!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="submit-status error">
                  ⚠ Something went wrong. Please try again or contact me directly.
                </div>
              )}

              <div className="popup-actions">
                <button 
                  type="button" 
                  className="btn-secondary" 
                  onClick={closePopup}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-primary"
                  disabled={isSubmitting}
                  style={{ backgroundColor: selectedService?.color }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
