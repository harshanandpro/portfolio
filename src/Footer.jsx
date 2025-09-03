import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_socials">
          <a href="https://github.com/harshanandpro" target="_blank" rel="noo pener no referrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/harsh-anand-19b59a380/" title="LinkedIn profile" target="_blank" style={{ cursor: 'default' }}>
            LinkedIn
          </a>
        </div>
        <div className="footer_contact">
          <p>Email: harshanandpro22@gmail.com</p>
          <p>Phone: 7428608016</p>
        </div>
        <p className="footer_copy">© {new Date().getFullYear()} Harsh Anand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;