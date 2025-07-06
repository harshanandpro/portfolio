import React from 'react'
import './SkillsCard.css'
const SkillsCard = ({iconx , name , shortline}) => {
  return (
    <div className='shine-border'>

    
    <div className='skillscard'>
        <img src={iconx} alt={name} width={"100px"} height={"100px"} />
        <span className='skillscard_text'>{name}</span>
    </div>
    </div>
  )
}

export default SkillsCard