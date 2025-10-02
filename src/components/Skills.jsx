import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Skills = () => {
  useEffect(() => {
    ScrollReveal().reveal('.skills-column.left', { origin: 'left' });
    ScrollReveal().reveal('.skills-column.right', { origin: 'right' });
    ScrollReveal().reveal('.slider', { origin: 'bottom' });
  }, []);

  return (
    <section className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span></h2>

      <div className="skills-row">
        <div className="skills-column left">
          <h3 className="title">Coding Skills<span></span></h3>

          <div className="skills-box">
            <div className="skills-content">

              <div className="progress">
                <h3>HTML - CSS - JavaScript<span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>React - Bootstrap - Tailwind <span>75%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Python - Django<span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>MySQL - Git/Github <span>95%</span></h3>
                <div className="bar"><span></span></div>
              </div>

            </div>
          </div>
        </div>

        <div className="skills-column right">
          <h3 className="title">Professional Skills</h3>

          <div className="skills-box">
            <div className="skills-content">

              <div className="progress">
                <h3>Communication & Collaboration <span>85%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Problem-Solving & Adaptability <span>75%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Teamwork & Leadership <span>80%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Digital Content Creation <span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="slider" reverse="true" style={{
          '--width': '100px',
          '--height': '100px',
          '--quantity': 9,
          }}>
        <div className="list">
          <div className="item" style={{ '--position': 1 }}><img src="https://res.cloudinary.com/dtjv7o2mo/image/upload/v1759427382/1_aulgot.png" alt=""/></div>
          <div className="item" style={{ '--position': 2 }}><img src="https://res.cloudinary.com/dtjv7o2mo/image/upload/v1759427396/2_mzs18r.png" alt=""/></div>
          <div className="item" style={{ '--position': 3 }}><img src="https://res.cloudinary.com/dtjv7o2mo/image/upload/v1759427394/3_bmdoqh.png" alt=""/></div>
          <div className="item" style={{ '--position': 4 }}><img src="https://res.cloudinary.com/dtjv7o2mo/image/upload/v1759427382/4_xhbaov.png" alt=""/></div>
          <div className="item" style={{ '--position': 5 }}><img src="https://res.cloudinary.com/dtjv7o2mo/image/upload/v1759427381/5_tiboxr.png" alt=""/></div>
          <div className="item" style={{ '--position': 6 }}><img src="https://res.cloudinary.com/dtjv7o2mo/image/upload/v1759427382/6_pns2it.png" alt=""/></div>
          <div className="item" style={{ '--position': 7 }}><img src="https://res.cloudinary.com/dtjv7o2mo/image/upload/v1759427382/7_ye9hpk.png" alt=""/></div>
          <div className="item" style={{ '--position': 8 }}><img src="https://res.cloudinary.com/dtjv7o2mo/image/upload/v1759427382/8_yxqwhy.png" alt=""/></div>
          <div className="item" style={{ '--position': 9 }}><img src="https://res.cloudinary.com/dtjv7o2mo/image/upload/v1759427381/9_eofyo1.png" alt=""/></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
