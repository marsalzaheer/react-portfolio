import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    ScrollReveal().reveal('.services-container', { origin: 'bottom' });
  }, []);

  return (
<section className="services" id="services">
  <h2 className="heading">My <span>Services</span></h2>

  <div className="services-container">

    <div className="services-box left">
      <i className="bx bx-code-alt"></i>
      <h3>Web Development</h3>
      <p>I build modern, responsive, and user friendly websites and web apps. From design to deployment, I focus on clean code and smooth functionality.</p>
      <Link to="/readmore-services" className="btn">Read More</Link>
    </div>

    <div className="services-box down">
      <i className="bx bx-paint"></i>
      <h3>Digital Design</h3>
      <p>I create engaging digital content, graphics, and layouts using tools like Canva and Adobe Suite to support branding, marketing, and a strong online presence.</p>
      <Link to="/readmore-services" className="btn">Read More</Link>
    </div>

    <div className="services-box right">
      <i className="bx bx-video-recording"></i>
      <h3>Studio Setup</h3>
      <p>I help set up studios for content creation, including equipment, lighting, and workflow guidance, making production smooth and professional.</p>
      <Link to="/readmore-services" className="btn">Read More</Link>
    </div>

  </div>
</section>

  );
};

export default Services;
