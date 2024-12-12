import React from 'react'
import './css/Navbar.css'

const Navbar: React.FC = () => {
  return (
    <nav className='Navbar'>
        <ul className='NavbarContainer'>
            <li className='NavbarItem'>Home</li>
            <li className='NavbarItem'>Biography</li>
            <li className='NavbarItem'>Projects</li>
            <li className='NavbarItem'>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar