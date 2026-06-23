import React from 'react';
import '../Styles/Skills.css';
import { skillsData, softSkills } from '../assets/skillsData';

const Skills = () => {
  return (
    <div className="skills-container page-transition">
      <div className="header-glow"></div>
      <h1 className="skills-title">My <span className="highlight">Skills</span></h1>
      
      <section className="skills-section">
        <h2 className="skills-subtitle">Technical Proficiency</h2>
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-category-group">
            <h3 className="skills-category">{category}</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <div className="skill-icon-bg">
                    <img src={skill.src} alt={skill.name} />
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      
      <section className="skills-section soft-skills-section">
        <h2 className="skills-subtitle">Soft Skills</h2>
        <div className="soft-skills-grid">
          {softSkills.map((skill, index) => (
            <div className="soft-skill-card" key={index}>
              <span className="bullet"></span>
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Skills;
