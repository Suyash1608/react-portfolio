import React from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
function Contact(){
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-intro">
        Feel free to reach out for opportunities, collaborations, or just a friendly hello!
      </p>
      <div className="contact-details">
        <div className="contact-links">
          <a href="mailto:suyashgupta1608@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <FaEnvelope className="contact-icon" /> suyashgupta1608@gmail.com
          </a>
          <a href="tel:7389355297" target="_blank" rel="noopener noreferrer" aria-label="Phone">
            <FaPhoneAlt className="contact-icon" /> +91 73893 55297
          </a>
          <a href="https://github.com/Suyash1608" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="contact-icon" /> github.com/Suyash1608
          </a>
          <a href="https://www.linkedin.com/in/suyash-16d08m/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="contact-icon" /> linkedin.com/in/suyash-16d08m
          </a>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required aria-label="Your Name" />
          <input type="email" placeholder="Your Email" required aria-label="Your Email" />
          <textarea rows="5" placeholder="Your Message" required aria-label="Your Message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
