import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/harshanandpro",
      icon: "🐙",
      color: "#6f42c1",
      description: "View my projects & code"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/harsh-anand-19b59a380/",
      icon: "💼",
      color: "#0077B5",
      description: "Professional network"
    },
    {
      name: "Email",
      url: "mailto:harshanandpro22@gmail.com",
      icon: "📧",
      color: "#ea4335",
      description: "Get in touch directly"
    },
    {
      name: "Phone",
      url: "tel:7428608016",
      icon: "📱",
      color: "#25D366",
      description: "Call me anytime"
    }
  ];

  const quickLinks = [
    // { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const repositories = [
    { name: "Portfolio", description: "Personal portfolio website", stars: "⭐" },
    { name: "Metflix", description: "Netflix clone with React", stars: "⭐" },
    { name: "Weather App", description: "Real-time weather data", stars: "⭐" },
    { name: "GGSIPU Frontend", description: "College website redesign", stars: "⭐" }
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

    const footerElement = document.querySelector('.footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      {/* Background Effects */}
      <div className="footer-background">
        <div className="background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="grid-pattern"></div>
        <div className="gradient-overlay"></div>
      </div>

      {/* Back to Top Button */}
      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
        <div className="arrow-up">↑</div>
      </button>

      <div className="footer_content">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-container">
              <h3 className="brand-name">Harsh Anand</h3>
              <p className="brand-tagline">
                Full-Stack Developer & Problem Solver
              </p>
              <p className="brand-description">
                Transforming ideas into responsive web applications and elegant Python solutions. 
                Let's build something amazing together.
              </p>
            </div>

            {/* Featured Repositories */}
            <div className="featured-repos">
              <h4 className="repos-title">Featured Projects</h4>
              <div className="repos-grid">
                {repositories.map((repo, index) => (
                  <div
                    key={index}
                    className="repo-card"
                    style={{ '--animation-delay': `${index * 0.1}s` }}
                  >
                    <div className="repo-header">
                      <span className="repo-name">{repo.name}</span>
                      <span className="repo-stars">{repo.stars}</span>
                    </div>
                    <p className="repo-description">{repo.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="section-title">Quick Links</h4>
            <nav className="links-nav">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="nav-link"
                  style={{ '--animation-delay': `${index * 0.05}s` }}
                >
                  <span className="link-text">{link.name}</span>
                  <div className="link-indicator"></div>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="footer-contact">
            <h4 className="section-title">Connect</h4>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <a href="mailto:harshanandpro22@gmail.com" className="contact-value">
                    harshanandpro22@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <span className="contact-label">Phone</span>
                  <a href="tel:7428608016" className="contact-value">
                    +91 74286 08016
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h5 className="social-title">Follow Me</h5>
              <div className="footer_socials">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      '--social-color': social.color,
                      '--animation-delay': `${index * 0.1}s`
                    }}
                    title={social.description}
                  >
                    <div className="social-icon">
                      <span className="icon-emoji">{social.icon}</span>
                    </div>
                    <div className="social-info">
                      <span className="social-name">{social.name}</span>
                      <span className="social-desc">{social.description}</span>
                    </div>
                    <div className="social-arrow">→</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          
          <div className="bottom-content">
            <div className="copyright">
              <p className="footer_copy">
                © {currentYear} <span className="highlight">Harsh Anand</span>. All rights reserved.
              </p>
              <p className="made-with">
                Made with <span className="heart">❤️</span> using React & passion for code
              </p>
            </div>

            <div className="footer-meta">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span className="status-text">Available for new opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="footer-particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}>
            <div className="particle-inner"></div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
