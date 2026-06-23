import React from 'react';
import './Styles/Education.css';
import { FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaBook } from 'react-icons/fa';
import educationData from '../../assets/educationData';
const Education = () => {
  return (
    <div className="education-container page-transition">
      <h2 className="section-subtitle">Academic Journey</h2>
      <div className="timeline-container">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content education-card glass-card">
              <div className="card-header">
                <h3 className="degree"><FaUniversity className="icon" /> {edu.degree}</h3>
                <span className="date-badge"><FaCalendarAlt className="icon-small" /> {edu.dates}</span>
              </div>
              <h4 className="institute">{edu.institute}</h4>
              <div className="education-meta">
                <span className="location"><FaMapMarkerAlt className="icon-small" /> {edu.location}</span>
                <span className="cgpa-badge">CGPA: {edu.cgpa}</span>
              </div>
              <div className="coursework">
                <p className="coursework-title"><FaBook className="icon-small" /> Relevant Coursework:</p>
                <div className="course-pills">
                  {edu.coursework.map((course, i) => (
                    <span className="course-pill" key={i}>{course}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
