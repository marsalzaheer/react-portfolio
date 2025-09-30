import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { useParams, Link } from 'react-router-dom';
import projects from '../projectsData';
import '../style.css'; 

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div style={{ textAlign: 'center', fontSize: '3rem', color: 'red', marginTop: '10rem' }}>Project not found! Please check the URL.</div>;
  }


  useEffect(() => {
  ScrollReveal().reveal('.project-detail-heading', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });
  ScrollReveal().reveal('.portfolio-info', { origin: 'right', distance: '50px', duration: 1000, delay: 400 });
  ScrollReveal().reveal('.portfolio-description', { origin: 'left', distance: '50px', duration: 1000, delay: 600 });
}, []);

  return (
    <section id="project-details" className="portfolio-details">
      <div className="container">
        <Link to="/projects" className="btn">← Back to Projects</Link>
        <h2 className="heading project-detail-heading">Project : <span>{project.title}</span></h2> {/* Re-added project-detail-heading class */}
        <div className="row gy-4">
          <div className="col-lg-8">
            <div className="portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <video src={project.completeVideo} controls autoPlay loop muted playsInline className="img-fluid" style={{ width: '100%', height: 'auto' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: {project.category}</li>
                <li><strong>Project date</strong>: {project.date}</li>
                <li><strong>Project Code</strong>: <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Link</a></li>
              </ul>
            </div>
            <div className="portfolio-description">
              <h2>{project.title}</h2>
              <p className="short-description">{project.shortDescription}</p>
              <p >{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
