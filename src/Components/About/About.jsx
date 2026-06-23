import React from 'react';
import './Styles/About.css';
import { Link } from 'react-router-dom';
import { personalData } from '../../assets/personalData';

function About() {
  return (
    <div className="about-page">
      <div className="about-card glass-card">
        <h2 className="card-heading">Who I Am</h2>
        <div className="about-text">
          {personalData.aboutMe.map((paragraph, index) => {
            if (paragraph.includes(personalData.name)) {
              const parts = paragraph.split(personalData.name);
              return (
                <p key={index}>
                  {parts[0]}<strong className="highlight-text">{personalData.name}</strong>{parts[1]}
                </p>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>

        <div className="about-cta-container">
          <Link to="/projects" className="btn btn-primary">Check out my projects</Link>
          <Link to="/contact" className="btn btn-secondary">Get in touch</Link>
        </div>
      </div>
    </div>
  );
}

export default About;
