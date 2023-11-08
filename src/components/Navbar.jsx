import React from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='content px-4'>
      <div>
        <img className='logo' src={Logo} alt="Image du logo" />
      </div>

      {/*Menu*/}
      <div>
          <ul className='menu'>
            <li>Accueil</li>
            <li>À propos</li>
            <li>Skills</li>
            <li>Projets</li>
            <li>Contact</li>
          </ul>
      </div>

      {/*Menu*/}
      <div className='hidden'>
        <FaBars />
      </div>

      {/*Menu Mobile*/}
        <ul className='hidden'>
          <li>Accueil</li>
          <li>À propos</li>
          <li>Skills</li>
          <li>Projet</li>
          <li>Contact</li>
        </ul>

      {/*Réseau Social*/}
      <div className='hidden'></div>
    </div>
  )
}

export default Navbar