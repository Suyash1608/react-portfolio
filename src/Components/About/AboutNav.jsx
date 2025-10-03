import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/AboutNav.css'; // Assuming CSS file

function AboutNav() {
  return (
    <div className="about-top-nav">
      <Link to="/about" className="about-nav-link">Overview</Link>
      <Link to="education" className="about-nav-link">Education</Link>
      <Link to="experience" className="about-nav-link">Experience</Link>
      <Link to="certifications" className="about-nav-link">Training & Certifications</Link>
    </div>
  );
}

export default AboutNav;
