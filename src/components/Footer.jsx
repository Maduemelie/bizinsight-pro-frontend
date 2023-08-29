import React from 'react';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h4>Contact Us</h4>
        <p>Email: info@bizinsightpro.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        <div className="social-media">
          <a href="https://facebook.com/bizinsightpro" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/bizinsightpro" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com/company/bizinsightpro" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
