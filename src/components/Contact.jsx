import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Contact = () => {
  useEffect(() => {
    ScrollReveal().reveal('.contact-links', { origin: 'bottom' });
    ScrollReveal().reveal('.contact-section-header', { origin: 'top' });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <p className="contact-section-header-title">Let's work together...</p>
        <p className="contact-section-header-subtitle">I’m just a message away.</p>
      </div>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/marsalzaheer/"
          target="_blank"
          className="btn-contact contact-details"
          ><i className="fa-brands fa-linkedin"></i> Linkedin</a
        >
        <a
          id="profile-link"
          href="https://github.com/marsalzaheer"
          target="_blank"
          className="btn-contact contact-details"
          ><i className="fa-brands fa-github"></i> GitHub</a
        >
        <a href="https://www.instagram.com/marsalzaheer/" target="_blank" className="btn-contact contact-details"
          ><i className="fa-brands fa-instagram"></i> Instagram</a
        >
        <a href="mailto:marsalzaheerr@gmail.com" className="btn-contact contact-details"
          ><i className="fas fa-at"></i> Send a mail</a>
        <a 
          href="https://wa.me/923325469954" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-contact contact-details"
          ><i className="fab fa-whatsapp"></i> WhatsApp Me</a>

      </div>
    </section>
  );
};

export default Contact;
