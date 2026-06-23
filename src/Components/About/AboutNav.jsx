import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/AboutNav.css';

function AboutNav() {
  return (
    <nav className="about-top-nav">
      <NavLink to="/about" end className={({isActive}) => isActive ? "about-nav-link active" : "about-nav-link"}>Overview</NavLink>
      <NavLink to="education" className={({isActive}) => isActive ? "about-nav-link active" : "about-nav-link"}>Education</NavLink>
      <NavLink to="experience" className={({isActive}) => isActive ? "about-nav-link active" : "about-nav-link"}>Experience</NavLink>
      <NavLink to="certifications" className={({isActive}) => isActive ? "about-nav-link active" : "about-nav-link"}>Certifications</NavLink>
    </nav>
  );
}

export default AboutNav;
