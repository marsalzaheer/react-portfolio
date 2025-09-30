import React from 'react';

const Footer = () => {
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2025 by Arsal Zaheer | All rights Reserved</p>
      </div>
      <div className="footer-iconTop">
        <a href="#" onClick={scrollToTop}><i className="bi bi-arrow-up-short"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
