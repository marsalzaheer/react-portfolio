import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import '../style.css'; // Assuming style.css contains necessary styling

const ReadMoreAbout = () => {
  useEffect(() => {
    ScrollReveal().reveal('.read-more-about .back-button', { origin: 'top', distance: '20px', duration: 1000 });
    ScrollReveal().reveal('.read-more-about .profile-pic', { origin: 'top', duration: 1000 });
    ScrollReveal().reveal('.read-more-about h1', { origin: 'bottom', duration: 1000, delay: 200 });
    ScrollReveal().reveal('.read-more-about p', { origin: 'bottom', interval: 200, duration: 1000, delay: 100 });
  }, []);

  return (
<section className="read-more-about">
  <Link to="/#about" className="back-button">← Back</Link>
  <div className="about-content">
    <img src="/images/about.png" alt="Arsal" className="profile-pic" />
    <h1>Arsal</h1>
    <p>
      Hello! I'm Muhammad Arsal Zaheer, a Software Engineering student at the
      National University of Sciences and Technology (NUST), where I am
      currently pursuing my Bachelor's degree with a strong academic record.
      My interest in technology began early, and over the years I have built
      a solid foundation in programming, web development, and problem-solving.
    </p>
    <p>
      Alongside my studies, I have gained practical experience through both
      freelancing and professional opportunities. As a WordPress Developer,
      I have designed and managed websites, customized themes and templates,
      and ensured responsive layouts with SEO best practices. More recently,
      during my internship at NUTECH Innovation Center, I worked as a Full
      Stack Developer Intern where I contributed to building scalable web
      applications using Django, Python, MySQL, and frontend technologies.
    </p>
    <p>
      I enjoy combining creativity with technology. Beyond coding, I have
      developed skills in digital content creation, design, and teaching. I
      have completed several certifications in Python, Databases, Django,
      and Web Development through Coursera, which helped me deepen both my
      technical and design knowledge. These experiences have not only improved
      my technical skills but also strengthened my teamwork, communication,
      and adaptability.
    </p>
    <p>
      I see myself as a learner who thrives in collaborative and challenging
      environments. Whether it is developing a responsive application,
      designing content, or mentoring others, I always focus on adding value
      and growing alongside the people I work with. I am eager to explore new
      opportunities in software and web development, where I can apply my
      skills, creativity, and passion for technology to create meaningful
      digital solutions.
    </p>
  </div>
</section>

  );
};

export default ReadMoreAbout;
