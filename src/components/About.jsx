import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal('.about-img', { origin: 'left' });
    ScrollReveal().reveal('.about-content', { origin: 'right' });
  }, []);

  return (
  <section className="about" id="about">
    <div className="about-img">
      <img src="/images/about.png" alt=""/>
    </div>

    <div className="about-content">
      <h2 className="heading">About <span>Me</span></h2>
      <h3>Software Engineer</h3>
      <p>
       I'm Muhammad Arsal Zaheer, a Software Engineering student at NUST with a passion for creating modern and user friendly web applications. I have hands on experience as a freelancer and intern, working with Django, Python, MySQL, and React. Beyond development, I enjoy design, content creation, and teaching, which makes me a versatile learner always ready for new challenges.
      </p>
      <Link to="/readmore-about" className="btn">Read More</Link>
    </div>
  </section>
  );
};

export default About;
