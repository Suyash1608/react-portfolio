import React from 'react';
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h1>Suyash Gupta</h1>
      </div>
      <div className='links'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
