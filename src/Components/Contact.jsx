import React from 'react';
import '../Styles/Contact.css';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalData } from '../assets/personalData';

function Contact(){
  return (
    <div className="contact-container page-transition">
      <div className="header-glow"></div>
      <h1 className="contact-title">Get in <span className="highlight">Touch</span></h1>
      <p className="contact-intro">
        Ready to start your next project with me? Let's build something amazing together!
      </p>
      
      <div className="contact-content-wrapper">
        <div className="contact-info-card">
          <h2 className="card-heading">Contact Information</h2>
          <p className="card-subheading">Feel free to reach out directly through any of these platforms.</p>
          
          <div className="contact-links">
            <a href={`mailto:${personalData.contact.email}`} target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div className="icon-wrapper">
                <FaEnvelope className="contact-icon" />
              </div>
              <div className="link-details">
                <span className="link-label">Email</span>
                <span className="link-value">{personalData.contact.email}</span>
              </div>
            </a>
            
            <a href={`tel:${personalData.contact.phone.replace(/[^+0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div className="icon-wrapper">
                <FaPhoneAlt className="contact-icon" />
              </div>
              <div className="link-details">
                <span className="link-label">Phone</span>
                <span className="link-value">{personalData.contact.phone}</span>
              </div>
            </a>
            
            <a href={personalData.contact.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div className="icon-wrapper">
                <FaGithub className="contact-icon" />
              </div>
              <div className="link-details">
                <span className="link-label">GitHub</span>
                <span className="link-value">{personalData.contact.github}</span>
              </div>
            </a>
            
            <a href={personalData.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div className="icon-wrapper">
                <FaLinkedin className="contact-icon" />
              </div>
              <div className="link-details">
                <span className="link-label">LinkedIn</span>
                <span className="link-value">{personalData.contact.linkedin}</span>
              </div>
            </a>
          </div>
        </div>
        
        <div className="contact-form-card">
          <h2 className="card-heading">Send a Message</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" required aria-label="Your Name" />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="john@example.com" required aria-label="Your Email" />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea rows="5" placeholder="How can I help you?" required aria-label="Your Message" />
            </div>
            <button type="submit" className="submit-btn">
              Send Message <span className="btn-icon">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
