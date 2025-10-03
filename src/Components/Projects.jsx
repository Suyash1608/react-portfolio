import React from 'react';
import '../styles/Projects.css';
import { realProjects, miniProjects } from '../assets/projects';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <section>
        <h2 className="projects-subtitle">ML - Projects</h2>
        <div className="project-grid">
          {realProjects.map((project) => (
            <div className="project-card">
              <h3>{project.title}</h3>
              <p className="tech-stack"><strong>Tech Stack:</strong> {project.techStack}</p>
              <p>{project.description}</p>
              <ul>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="projects-subtitle">Java Projects</h2>
        <div className="project-grid">
          {miniProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p className="tech-stack"><strong>Tech Stack:</strong> {project.techStack}</p>
              <p>{project.description}</p>
              <ul>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
