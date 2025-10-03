import React from 'react';
import '../styles/Skills.css';
import { skillsData, softSkills } from '../assets/skillsData';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>
      <section>
        <h2 className="skills-subtitle">Technical Skills</h2>
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="skills-category">{category}</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <img src={skill.src} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section>
        <h2 className="skills-subtitle">Soft Skills</h2>
        <div className="skills-grid soft-skills-grid">
          {softSkills.map((skill, index) => (
            <div className="soft-skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Skills;
