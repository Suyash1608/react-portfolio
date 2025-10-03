import React from 'react';
import './Styles/About.css';
import { Link } from 'react-router-dom';
function About() {
  return (
    <div className="about-page">
      <div className="about-card">
        <h1>About Me</h1>
        <p>
          Hey there! I’m <strong>Suyash Gupta</strong> — a passionate Java Full Stack Developer who loves turning complex problems into smooth, efficient applications.
        </p>
        <p>
          With a degree in Computer Science and a focus on Data Science, I’ve combined my love for coding with real-world experience from my internship at <strong>Kohler India Pvt Ltd, Pune</strong>. There, I didn’t just write code—I streamlined backend processes and slashed manual work by 80%, making life easier for everyone involved.
        </p>
        <p>
          I’m currently sharpening my skills at <strong>JSpiders</strong>, diving deep into Java Full Stack Development along with React.
        </p>
        <p>
          I’m all about creating meaningful solutions that have an impact and learning something new every day. When I’m not coding, you’ll find me exploring tech trends or brainstorming my next project idea.
        </p>
        <p className="about-cta">
          Curious? <Link to="/projects">Check out my projects</Link> or <Link to="/contact">Get in touch</Link> — I’m always up for a great conversation!
        </p>
      </div>
    </div>
  );
}

export default About;
