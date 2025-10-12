import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Education = () => {
  useEffect(() => {
    ScrollReveal().reveal('.education-column.left', { origin: 'left' });
    ScrollReveal().reveal('.education-column.right', { origin: 'right' });
  }, []);

  return (
    <section className="education" id="education">
      <h2 className="heading">My <span>Journey</span></h2>

      <div className="education-row">

        <div className="education-column left">
          <h3 className="title">Experience</h3>

          <div className="education-box">

            <div className="education-content">
              <div className="content">
                <div className="year"><i className="bx bxs-calendar"></i> 07/2025 – 09/2025</div>
                <h3>Web Development Intern – NUTECH Innovation Center (NIC)</h3>
                <p>Developed full-stack web applications using Django, Python, MySQL, and frontend tools. Focused on creating scalable solutions with smooth functionality and gained hands-on experience in a professional development environment.</p>            
              </div>
            </div> 
            
            <div className="education-content">
              <div className="content">
                <div className="year"><i className="bx bxs-calendar"></i> 03/2024 – Present</div>
                <h3>WordPress Developer – Freelancing</h3>
                <p>Designed and managed WordPress websites, customized themes/templates with Elementor & Envato kits, applied SEO best practices, and built responsive layouts.</p>            
              </div>
            </div> 

            <div className="education-content">
              <div className="content">
                <div className="year"><i className="bx bxs-calendar"></i> 2024 – Present</div>
                <h3>Part-Time – Studio Setup & Content Creation</h3>
                <p>Assisted in setting up studio environments and creating engaging digital content, enhancing both technical and creative skills.</p>            
              </div>
            </div>

          </div>

        </div>

        <div className="education-column right">
          <h3 className="title">Education</h3>

          <div className="education-box">

            <div className="education-content">
              <div className="content">
                <div className="year"><i className="bx bxs-calendar"></i> 2024 – Present</div>
                <h3>Bachelor of Engineering in Software Engineering – NUST (MCS)</h3>
                <p>Currently pursuing a degree in software engineering, gaining strong foundations in technology and problem-solving.</p>            
              </div>
            </div> 
            
            <div className="education-content">
              <div className="content">
                <div className="year"><i className="bx bxs-calendar"></i> 2022 – 2024</div>
                <h3>Intermediate (Pre-Engineering) – APS EME Campus, Rawalpindi</h3>
                <p>Completed higher secondary education with a focus on building analytical and technical skills.</p>            
              </div>
            </div> 

            <div className="education-content">
              <div className="content">
                <div className="year"><i className="bx bxs-calendar"></i> 2020 – 2022</div>
                <h3>Matriculation (Computer Science) – APS Pasban Campus, Rawalpindi</h3>
                <p>Achieved secondary education with a strong interest in computing and logical reasoning.</p>            
              </div>
            </div> 
          </div>

        </div>

        

      </div>

    </section>
  );
};

export default Education;
