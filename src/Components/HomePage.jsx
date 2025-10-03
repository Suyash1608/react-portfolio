import techStack from "../assets/tech";
import '../Styles/HomePage.css'
import profileImage from '../assets/IMG_20250824_060141.jpg'
function HomePage() {
  return (
    <div className='homepage'>
      <div className='homepage-content'>
        <div className='profile-image'>
          <img src={profileImage} alt="Suyash Gupta" />
        </div>
        <div className='details'>
          <h1>Hi, I'm Suyash Gupta</h1>
          <h2>Java Full Stack Developer</h2>
          <div className="tech-stack">
            {techStack.map((tech) => (
              <div className="tech" key={tech.name}>
                <img src={tech.src} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
