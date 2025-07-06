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

const Skills = () => {
  return (
    <div className='skills'>
        <span className="skills_header">Here’s my current tech stack and what I’m confident using.</span>
        <div className="skills_skills">
            <SkillsCard iconx={ReactIcon} name="React" shortline="Build dynamic, responsive UIs with React’s component-based magic"/>
            <SkillsCard iconx={PythonIcon} name="Python" shortline={"Scripts, automation, and data tasks with clean Python code"}/>
            <SkillsCard iconx={NodeIcon} name="Node Js" shortline="Server-side scripting for scalable web apps and APIs"/>
            <SkillsCard iconx={JSIcon} name="JS" shortline={"Power interactivity and logic with clean, efficient code"}/>
            <SkillsCard iconx={HtmlIcon} name="HTML" shortline="Craft clean, semantic markup for solid web foundations"/>
            <SkillsCard iconx={CssIcon} name="CSS" shortline={"Style it up with modern, responsive, sleek designs"}/>
            <SkillsCard iconx={BTIcon} name="BootStrap" shortline={"Rapidly design responsive layouts with Bootstrap’s grid"}/>
            
        </div>
    </div>
  )
}

export default Skills