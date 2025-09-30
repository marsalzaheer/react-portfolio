import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import projects from '../projectsData';
import { Link } from "react-router-dom";


const Portfolio = () => {
  useEffect(() => {
    ScrollReveal().reveal('.portfolio-box', { origin: 'bottom' });
    ScrollReveal().reveal('.portfolio .btn', { origin: 'bottom' });
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>

      <div className="portfolio-container">
        {projects.slice(0, 3).map(project => ( // Limit to 6 projects for main page
          <div className="portfolio-box" key={project.id}>
            <video src={project.video} autoPlay loop muted playsInline />
            <div className="portfolio-layer">
              <h4>{project.title}</h4>
              <p>{project.shortDescription}</p>
              <div className="portfolio-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub Link">
                  <i className="bx bxl-github"></i>
                </a>
                <Link to={`/projects/${project.id}`} title="More Details">
                  <i className="bx bx-link"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/projects" className="btn">View All Projects</Link>
    </section>
  );
};

export default Portfolio;
