import React from 'react';
import './Styles/Experience.css';
import experienceData from '../../assets/experienceData';
import { FaBuilding, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa';
const Experience = () => {
  return (
    <div className="experience-container page-transition">
      <h2 className="section-subtitle">Professional Experience</h2>
      <div className="timeline-container">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content experience-card glass-card">
              <div className="card-header">
                <h3 className="role"><FaBriefcase className="icon" /> {exp.role}</h3>
                <span className="date-badge"><FaCalendarAlt className="icon-small" /> {exp.dates}</span>
              </div>
              <h4 className="company"><FaBuilding className="icon-small" /> {exp.company}</h4>
              <div className="experience-meta">
                <span className="location"><FaMapMarkerAlt className="icon-small" /> {exp.location}</span>
              </div>
              <div className="responsibilities-container">
                <ul className="responsibilities">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              {exp.certificate && (
                <div className="completion-link">
                  <a href={exp.certificate} target="_blank" rel="noopener noreferrer" className="btn-link">
                    <FaFileAlt className="icon-small" /> View Completion Letter
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
