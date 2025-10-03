import certificationData from '../../assets/certificationData';
import './Styles/Certification.css';

const Certification = () => {
  return (
    <div className="training-cert-container">
      <h2 className="section-title">Training & Certifications</h2>

      <div className="training-section">
        <h3 className="training-section-title">Full Stack Java Developer Course</h3>
        <p><strong>Institute:</strong> JSpiders, Bangalore</p>
        <p><strong>Duration:</strong> June 2025 – Present</p>
        <p><strong>Skills Covered:</strong> Core Java, SQL, HTML, CSS, JavaScript</p>
        <p><strong>Currently Learning:</strong> React, J2EE</p>
      </div>

      {certificationData.map((item, index) => (
        <div className="certification-section" key={index}>
          <h3 className="certification-section-title">{item.title}</h3>
          <p><strong>Institute:</strong> {item.institute}</p>
          <p>
            <strong>Certificate:</strong>{' '}
            <a
              href={item.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-link"
            >
              View Certificate →
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Certification;
