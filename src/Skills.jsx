import React from 'react'
import './Skills.css'
import SkillsCard from './SkillsCard.jsx'
import ReactIcon from './react.svg'
import PythonIcon from './python.svg'
import NodeIcon from './node.svg'
import JSIcon from './javascript.svg'
import HtmlIcon from './html.svg'
import CssIcon from './css.svg'
import BTIcon from './bootstrap.svg'
import Light from './light.svg'
import Git from './git.svg'
const Skills = ({id}) => {
  return (
    
    <div id={id} className='skills'>
        <span className="skills_header">Here’s my current tech stack <span className="replacable">  and what I’m confident using.</span></span>
        <div className="skills_domain">      
    {/* <button className='skills_left' onClick={() => scrollLeft()}>⬅️</button> */}

        <div className="skills_skills">
            <SkillsCard className="skills_skillscard" iconx={ReactIcon} name="React" shortline="Build dynamic, responsive UIs with React’s component-based magic"/>
            <SkillsCard className="skills_skillscard" iconx={PythonIcon} name="Python" shortline={"Scripts, automation, and data tasks with clean Python code"}/>
            <SkillsCard className="skills_skillscard" iconx={NodeIcon} name="Node Js" shortline="Server-side scripting for scalable web apps and APIs"/>
            <SkillsCard className="skills_skillscard" iconx={JSIcon} name="JS" shortline={"Power interactivity and logic with clean, efficient code"}/>
            <SkillsCard className="skills_skillscard" iconx={HtmlIcon} name="HTML" shortline="Craft clean, semantic markup for solid web foundations"/>
            <SkillsCard className="skills_skillscard" iconx={CssIcon} name="CSS" shortline={"Style it up with modern, responsive, sleek designs"}/>
            <SkillsCard className="skills_skillscard" iconx={BTIcon} name="BootStrap" shortline={"Rapidly design responsive layouts with Bootstrap’s grid"}/>
            <SkillsCard className="skills_skillscard" iconx={Git} name="Github" shortline={"Can work on Github with a team or solo. I know all the basics"}/>
            <SkillsCard className="skills_skillscard" iconx={Light} name="Learning" shortline={"Quickly picking up new tools, frameworks, and concepts as needed."}/>
        </div>

{/* <button className='skills_right' onClick={() => scrollRight()}>➡️</button> */}

     </div>
    </div>
  )
}

export default Skills