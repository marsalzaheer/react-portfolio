import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import projects from '../projectsData';
import { Link } from 'react-router-dom';
import '../style.css';

const Projects = () => {
  useEffect(() => {
    ScrollReveal().reveal('.projects-heading', { origin: 'bottom' });
    ScrollReveal().reveal('.portfolio-box', { origin: 'bottom' });
    ScrollReveal().reveal('.portfolio .btn', { origin: 'bottom' });
  }, []);

  return (
    <section className="portfolio" id="projects-all">
      <Link to="/#portfolio" className="btn">← Back to Portfolio</Link>
      <h2 className="heading projects-heading scroll-reveal">
        All <span>Projects</span>
      </h2>

      <div className="portfolio-container">
        {projects.map(project => (
          <div className="portfolio-box scroll-reveal" key={project.id}>
            {project.video && (
              <video src={project.video} autoPlay loop muted playsInline />
            )}
            <div className="portfolio-layer">
              <h4>{project.title}</h4>
              <p>{project.shortDescription}</p>
              <div className="portfolio-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Link"
                >
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
    </section>
  );
};

export default Projects;
