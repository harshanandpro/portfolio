import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_socials">
          <a href="https://github.com/harshanandpro" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="#" title="LinkedIn profile coming soon" style={{ cursor: 'default' }}>
            LinkedIn
          </a>
        </div>
        <div className="footer_contact">
          <p>Email: harshanandpro07@gmail.com</p>
          <p>Phone: 9810808017</p>
        </div>
        <p className="footer_copy">© {new Date().getFullYear()} Harsh Anand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;