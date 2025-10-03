import AboutNav from './AboutNav';
import {Outlet} from 'react-router-dom'
function AboutRender() {
  return (
    <div>
        <AboutNav></AboutNav>
        <Outlet></Outlet>
    </div>
  )
}

export default AboutRender