import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaMailBulk, FaMailchimp, FaVoicemail} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import "./Navbar.scss"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='content px-4'>
      <div>
        <img className='logo' src={Logo} alt="Image du logo" />
      </div>

      {/*Menu*/}
      <div className='hidden md:flex'>
          <ul className='menu'>
            <li>Accueil</li>
            <li>À propos</li>
            <li>Skills</li>
            <li>Projets</li>
            <li>Contact</li>
          </ul>
      </div>

      {/*Menu*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Menu Mobile*/}
        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Accueil</li>
          <li className='py-6 text-4xl'>À propos</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Projet</li>
          <li className='py-6 text-4xl'>Contact</li>
        </ul>

      {/*Réseau Social*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='social ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='content-social' href="https://www.linkedin.com/in/julien-luc-33915a156/" target='blank'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='social ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='content-social' href="https://github.com/JulienLuc77?tab=repositories" target='blank'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='social ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='content-social' href="mailto: julien.luc77@gmail.com">
              Mail to <FaMailBulk size={30} />
            </a>
          </li>
          <li className='social ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='content-social' href="mailto: julien.luc77@gmail.com">
              Mon CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar