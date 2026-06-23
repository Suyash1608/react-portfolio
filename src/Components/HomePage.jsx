import techStack from "../assets/tech";
import '../Styles/HomePage.css';
import profileImage from '../assets/IMG_20250824_060141.jpg';
import { Link } from 'react-router-dom';
import { personalData } from '../assets/personalData';

function HomePage() {
  return (
    <div className='homepage'>
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <div className='homepage-content'>
        <div className='details'>
          <div className="badge">Currently at Test Yantra Software Solutions</div>
          <h1>
            Hi, I'm <span className="highlight">{personalData.name}</span>
          </h1>
          <h2>{personalData.role}</h2>
          <p className="bio">
            {personalData.bio}
          </p>

          <div className="actions">
            <Link to="/projects" className="btn btn-primary">View Work</Link>
            <Link to="/skills" className="btn btn-secondary">My Skills</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
            {personalData.resumeUrl ? (
              <a href={personalData.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-resume">
                ↓ Resume
              </a>
            ) : null}
          </div>

          <div className="tech-section">
            <p className="tech-title">Tech Stack</p>
            <div className="tech-stack">
              {techStack.map((tech) => (
                <div className="tech" key={tech.name}>
                  <div className="tech-icon-wrapper">
                    <img src={tech.src} alt={tech.name} />
                  </div>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='profile-image-container'>
          <div className="image-border">
            <img src={profileImage} alt={personalData.name} className="profile-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
