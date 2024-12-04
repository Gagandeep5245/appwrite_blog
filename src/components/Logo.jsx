import React from 'react'
import logo from '../assets/Logo.png'

const Logo = ({width = '100px'}) => {
  return (
    <div>
      <img src={logo} alt="logo" style={{width}} className='rounded-full' />
    </div>
  )
}

export default Logo