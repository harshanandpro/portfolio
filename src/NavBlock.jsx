import './NavBlock.css'
import React from 'react'

const NavBlock = ({ block_name, targetId }) => {
  const handleClick = () => {
  const el = document.getElementById(targetId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
};

  return (
    <div className='navblock' onClick={handleClick}>
      {block_name}
    </div>
  )
}

export default NavBlock
