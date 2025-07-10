
import './App.css'
import Body from './Bodycontent'
import Navbar from './Navbar'
import Services from './Services.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './ContactUs.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    <div className='app_body'>
     <Navbar/>
     <Body id="intro"/>
     <Skills id='skills'/>
     <Services id='services'/>
     <Projects id='projects'/>
     <div id='testimonials' className="testimonials">
     <p className="testimonials_header">Testimonials</p>
     <p className="testimonials_sub">
        Be my first testimonial! Let's work together. Contact me and let's make something awesome.
     </p>
     </div>
    <Contact id='contact'/>
    <Footer/>
    </div>
  )
}

export default App
