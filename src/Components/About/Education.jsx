import React from 'react';
import './Styles/Education.css';
import { FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaBook } from 'react-icons/fa';
import educationData from '../../assets/educationData';
const Education = () => {
  return (
    <div className="education-container">
      <h1 className="education-title">Education</h1>
      {educationData.map((edu, index) => (
        <div key={index} className="education-card">
          <h2 className="degree"><FaUniversity className="icon" /> {edu.degree}</h2>
          <h3 className="institute">{edu.institute}</h3>
          <div className="education-meta">
            <span><FaCalendarAlt className="icon" /> {edu.dates}</span>
            <span><FaMapMarkerAlt className="icon" /> {edu.location}</span>
            <span className="cgpa">CGPA: {edu.cgpa}</span>
          </div>
          <div className="coursework">
            <p><FaBook className="icon" /> <strong>Relevant Coursework:</strong></p>
            <ul>
              {edu.coursework.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
