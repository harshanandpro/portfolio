import './NavBlock.css'
import React from 'react'

const NavBlock = ({block_name}) => {
  return (
    <div className='navblock'>{block_name}</div>
  )
}

export default NavBlock