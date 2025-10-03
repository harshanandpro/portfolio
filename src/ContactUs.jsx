import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

const Contact = ({ id }) => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const containerRef = useRef(null);

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "harshanandpro22@example.com",
      link: "mailto:harshanandpro22@example.com",
      color: "#FF6B6B"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      description: "Connect professionally",
      link: "#",
      color: "#4ECDC4"
    },
    {
      icon: "🐙",
      title: "GitHub",
      description: "View my projects",
      link: "#",
      color: "#45B7D1"
    },
    {
      icon: "📱",
      title: "Phone",
      description: "+91 7428608016",
      link: "tel:+917428608016",
      color: "#96CEB4"
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

  useEffect(() => {
    if (done) {
      const timer = setTimeout(() => setDone(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [done]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    emailjs.sendForm(
      'service_rutmvzd',
      'template_05a9plj',
      form.current,
      'JCag2yQ9WZBUe0PYc'
    )
    .then(() => {
      setDone(true);
      setLoading(false);
      form.current.reset();
      setFocusedField(null);
    })
    .catch((err) => {
      console.error('Email error:', err);
      setError('Failed to send. Try again!');
      setLoading(false);
    });
  };

  return (
    <div id={id} className={`contact ${isVisible ? 'visible' : ''}`} ref={containerRef}>
      {/* Background Effects */}
      <div className="contact-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="grid-overlay"></div>
      </div>

      {/* Header Section */}
      <div className="contact-header">
        <h2 className="contact_header">Let's Work Together</h2>
        <p className="contact_sub">
          Have a project in mind or want to collaborate? I'd love to hear from you. 
          Drop me a message and let's create something amazing together.
        </p>
      </div>

      <div className="contact-content">
        {/* Contact Methods */}
        <div className="contact-methods">
          <h3 className="methods-title">Get In Touch</h3>
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className={`contact-method ${isVisible ? 'animate-in' : ''}`}
                style={{
                  '--method-color': method.color,
                  '--animation-delay': `${index * 0.1}s`
                }}
              >
                <div className="method-icon">
                  <span>{method.icon}</span>
                </div>
                <div className="method-content">
                  <h4 className="method-title">{method.title}</h4>
                  <p className="method-description">{method.description}</p>
                </div>
                <div className="method-arrow">→</div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <h3 className="form-title">Send Message</h3>
          <form ref={form} className="contact_form" onSubmit={sendEmail}>
            <div className="form-group">
              <div className={`input-wrapper ${focusedField === 'name' ? 'focused' : ''}`}>
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  className="contact_input"
                  required
                  onFocus={() => setFocusedField('name')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                />
                <label className="input-label">Your Name</label>
                <div className="input-border"></div>
              </div>
            </div>

            <div className="form-group">
              <div className={`input-wrapper ${focusedField === 'email' ? 'focused' : ''}`}>
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  className="contact_input"
                  required
                  onFocus={() => setFocusedField('email')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                />
                <label className="input-label">Your Email</label>
                <div className="input-border"></div>
              </div>
            </div>

            <div className="form-group">
              <div className={`input-wrapper ${focusedField === 'subject' ? 'focused' : ''}`}>
                <input
                  type="text"
                  name="subject"
                  placeholder=" "
                  className="contact_input"
                  onFocus={() => setFocusedField('subject')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                />
                <label className="input-label">Subject (Optional)</label>
                <div className="input-border"></div>
              </div>
            </div>

            <div className="form-group">
              <div className={`input-wrapper textarea-wrapper ${focusedField === 'message' ? 'focused' : ''}`}>
                <textarea
                  name="message"
                  placeholder=" "
                  className="contact_textarea"
                  required
                  onFocus={() => setFocusedField('message')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                ></textarea>
                <label className="input-label">Your Message</label>
                <div className="input-border"></div>
              </div>
            </div>

            <button type="submit" className="contact_button" disabled={loading}>
              <span className="button-text">
                {loading ? 'Sending...' : 'Send Message'}
              </span>
              <div className="button-icon">
                {loading ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <span>✈️</span>
                )}
              </div>
            </button>
          </form>

          {/* Status Messages */}
          {done && (
            <div className="status-message success">
              <div className="status-icon">✅</div>
              <div className="status-content">
                <h4>Message Sent Successfully!</h4>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            </div>
          )}

          {error && (
            <div className="status-message error">
              <div className="status-icon">❌</div>
              <div className="status-content">
                <h4>Oops! Something went wrong</h4>
                <p>{error}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="contact-particles">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}>
            <div className="particle-inner"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
