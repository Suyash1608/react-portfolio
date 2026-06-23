import React from 'react';
import '../Styles/Projects.css';
import { projectsData, academicProjects } from '../assets/projects';

const ProjectCard = ({ project, keyPrefix, index }) => (
  <div className="project-card" key={`${keyPrefix}-${index}`}>
    <div className="card-content">
      <h3>{project.title}</h3>
      <div className="tech-pills">
        {project.technologies.map((tech, i) => (
          <span key={i} className="tech-pill">{tech}</span>
        ))}
      </div>
      <p className="project-desc">{project.description}</p>
      <ul className="feature-list">
        {project.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
    <div className="project-links">
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn github-btn">
          GitHub <span className="arrow">↗</span>
        </a>
      )}
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-btn demo-btn">
          Live Demo <span className="arrow">↗</span>
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="projects-container page-transition">
      <div className="header-glow"></div>
      <h1 className="projects-title">My <span className="highlight">Projects</span></h1>

      <section className="project-section">
        <h2 className="projects-subtitle">Java & Backend Development</h2>
        <div className="project-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={`java-${index}`} project={project} keyPrefix="java" index={index} />
          ))}
        </div>
      </section>

      <section className="project-section">
        <h2 className="projects-subtitle">Academic Project</h2>
        <p className="section-desc">Machine learning and AI projects built during my academic journey.</p>
        <div className="project-grid">
          {academicProjects.map((project, index) => (
            <ProjectCard key={`academic-${index}`} project={project} keyPrefix="academic" index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
