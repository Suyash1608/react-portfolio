import React from 'react';
import './Styles/Experience.css';
import experienceData from '../../assets/experienceData';
import { FaBuilding, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa';
const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-list">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="experience-card">
            <div className="experience-header">
              <h2><FaBriefcase className="icon" /> {exp.role}</h2>
              <h3><FaBuilding className="icon" /> {exp.company}</h3>
              <div className="experience-meta">
                <span><FaCalendarAlt className="icon" /> {exp.dates}</span>
                <span><FaMapMarkerAlt className="icon" /> {exp.location}</span>
              </div>
            </div>
            <ul className="responsibilities">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {exp.certificate && (
              <div className="completion-link">
                <a href={exp.certificate} target="_blank" rel="noopener noreferrer">
                  <FaFileAlt className="icon" /> View Completion Letter
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
