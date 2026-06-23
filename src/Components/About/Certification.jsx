import certificationData from '../../assets/certificationData';
import trainingData from '../../assets/trainingData';
import './Styles/Certification.css';

const Certification = () => {
  return (
    <div className="training-cert-container page-transition">
      <h2 className="section-subtitle">Trainings</h2>
      <div className="cert-grid" style={{ marginBottom: '40px' }}>
        {trainingData.map((item, index) => (
          <div className="training-section glass-card" key={`training-${index}`}>
            <div className="cert-header">
              <h3 className="cert-title">{item.title}</h3>
              <span className="cert-badge">{item.status}</span>
            </div>
            <div className="cert-details">
              <p className="cert-meta"><span>Institute:</span> {item.institute}</p>
              {item.duration && (
                <p className="cert-meta"><span>Duration:</span> {item.duration}</p>
              )}
            </div>
            {(item.skills || item.highlightSkills) && (
              <div className="skills-tags">
                {item.skills && item.skills.map((skill, i) => (
                  <span key={`skill-${i}`} className="skill-tag">{skill}</span>
                ))}
                {item.highlightSkills && item.highlightSkills.map((skill, i) => (
                  <span key={`highlight-${i}`} className="skill-tag highlight-tag">{skill}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <h2 className="section-subtitle">Certifications</h2>
      <div className="cert-grid">
        {certificationData.map((item, index) => (
          <div className="certification-section glass-card" key={`cert-${index}`}>
            <div className="cert-header">
              <h3 className="cert-title">{item.title}</h3>
              <span className="cert-badge">{item.status}</span>
            </div>
            <div className="cert-details">
              <p className="cert-meta"><span>Institute:</span> {item.institute}</p>
            </div>
            {item.certificateUrl && (
              <div className="cert-action">
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  View Certificate <span className="arrow">↗</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
