import HomePage from './Components/HomePage'
import AboutRender from './Components/About/AboutRender'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Navbar from './Components/Navbar'
import About from './Components/About/About'
import Education from './Components/About/Education'
import Experience from './Components/About/Experience'
import Certification from './Components/About/Certification'
import { Routes, Route, HashRouter } from 'react-router-dom' // Changed BrowserRouter to HashRouter

function App() {
  return (
    <div>
      <HashRouter> {/* Changed to HashRouter */}
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/about' element={<AboutRender></AboutRender>}>
            <Route path='' element={<About></About>}></Route>
            <Route path='education' element={<Education></Education>}></Route>
            <Route path='experience' element={<Experience></Experience>}></Route>
            <Route path='certifications' element={<Certification></Certification>}></Route>
          </Route>
          <Route path='/projects' element={<Projects></Projects>}></Route>
          <Route path='/skills' element={<Skills></Skills>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
      </HashRouter> {/* Changed to HashRouter */}
    </div>
  )
}

export default App

