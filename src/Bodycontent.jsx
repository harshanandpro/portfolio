import React from 'react'
import './Body.css'
import stars from './stars.gif'
import bg from './bg.png'
const Body = ({id}) => {
  return (
    <div id={id} className="body">
    <div className='body_graphics'>
      <p className="body_content">
        <snap className="body_maincontent">
           Hi, I am Harsh Anand 
        </snap>
        
        <snap className="body_2nd">
          I turn ideas into responsive  
          <span> </span>
          <span className="break1"> <br/> </span>
          React apps and cool Python scripts.
         </snap>

        <snap className="body_3rd"> 
        Let's build something awesome together!
        </snap>
      </p>
      <div className="body_shield"></div>
      <img className='body_gif' src={stars} alt="" />
      <img src={bg} alt="" className='body_img'/>
      <div className="seprator"></div>
    </div>
    </div>
  )
}

export default Body