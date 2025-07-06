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
            <SkillsCard iconx={ReactIcon} name="React"/>
            <SkillsCard iconx={PythonIcon} name="React"/>
            <SkillsCard iconx={NodeIcon} name="React"/>
            <SkillsCard iconx={JSIcon} name="React"/>
            <SkillsCard iconx={HtmlIcon} name="React"/>
            <SkillsCard iconx={CssIcon} name="React"/>
            <SkillsCard iconx={BTIcon} name="React"/>
            
        </div>
    </div>
  )
}

export default Skills