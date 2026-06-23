import AboutNav from './AboutNav';
import {Outlet} from 'react-router-dom';
import './Styles/About.css';

function AboutRender() {
  return (
    <div className="about-container page-transition">
        <div className="header-glow"></div>
        <h1 className="page-title">About <span className="highlight">Me</span></h1>
        <AboutNav></AboutNav>
        <div className="about-content-area">
          <Outlet></Outlet>
        </div>
    </div>
  )
}

export default AboutRender;