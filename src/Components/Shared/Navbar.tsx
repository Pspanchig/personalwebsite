// import React, { useState } from 'react'
import './css/Navbar.css'
import spanish from './imgs/spanish-flag.svg'
import english from './imgs/uk-flag.svg'

const Navbar: React.FC = () => {

  // const [bool, setBool] = useState(false);
  // // const language: string | null = localStorage.setItem('language');
  // function changeLenguage(): void{
  // }

  return (
    <nav className='Navbar'>
        <ul className='NavbarContainer'>
            <li className='NavbarItem'>Home</li>
            <li className='NavbarItem'>Biography</li>
            <li className='NavbarItem'>Projects</li>
            <li className='NavbarItem'>Contact</li>
            <li className="NavbarItem" id="LengId">lenguage
              <span className="NavbarDropdown">
                <div className="lenguage">
                  <p>spanish</p>
                  <img src={spanish} alt="Spanish flag" />
                </div>
                <div className="lenguage">
                  <p>english</p>
                  <img src={english} alt="English flag" />
                </div>
              </span>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar