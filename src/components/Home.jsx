import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

const Home = () => {
  useEffect(() => {
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .btn', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1', { origin: 'left' });
    ScrollReveal().reveal('.home-content p', { origin: 'right' });
    ScrollReveal().reveal('.social-media a', { origin: 'bottom', interval: 100 }); // Animation for social media icons

    const typed = new Typed('.multiple-text', {
      strings: ['Software Engineer','Frontend Developer','Backend Developer', 'Creative Technologist', 'Wordpress Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1 style={{ color: "var(--main-color)" }}>Muhammad Arsal Zaheer</h1>
        <h3>And I'm a <span className="multiple-text"></span></h3>
        <p>Software engineer and tutor with expertise in web development, problem-solving, and creating impactful digital solutions.</p>
        
        <div className="social-media">
          <a href="https://www.instagram.com/marsalzaheer/" target="_blank"><i className="bx bxl-instagram"></i></a>
          <a href="mailto:marsalzaheerr@gmail.com" target="_blank" ><i className="bx bxl-gmail"></i></a>
          <a href="https://www.linkedin.com/in/marsalzaheer/" target="_blank"><i className="bx bxl-linkedin"></i></a>
          <a href="https://github.com/marsalzaheer" target="_blank"><i className="bx bxl-github"></i></a>
        </div>

        <a href="/CV/Muhammad Arsal Zaheer  - Software Engineer - Resume.pdf" target="_blank"  className="btn">Download CV</a>
      </div>

      <div className="home-img">
        <img src="/images/home.png" alt=""/>
      </div>
    </section>
  );
};

export default Home;
