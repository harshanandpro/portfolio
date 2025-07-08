
import './App.css'
import Body from './Bodycontent'
import Navbar from './Navbar'
import Services from './Services.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'

function App() {

  return (
    <div className='app_body'>
     <Navbar/>
     <Body/>
     <Skills/>
     <Services/>
     <Projects/>
    </div>
  )
}

export default App
