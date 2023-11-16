import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaHome, FaBook, FaDiagnoses, FaProjectDiagram, FaFileContract } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import "./Navbar.scss"
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='content px-4'>
      <div>
        <img className='logo' src={Logo} alt="Image du logo" />
      </div>

      {/*Menu*/}
      
        <ul className='hidden md:flex'>
          <li>
            <Link to='home' smooth={true} duration={500}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500}>
              À propos
            </Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to='work' smooth={true} duration={500}>
              Projets
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
   

      {/*Menu*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Menu Mobile*/}
        <ul className={!nav ? 'hidden': 'social-2'}>
          <li className='mobile-list'>
            <FaHome className='mr-4' />
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
             Accueil
           </Link>
          </li>
          <li className='mobile-list'>
            <FaBook className='mr-4' />
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
              À propos
            </Link>
          </li>
          <li className='mobile-list'> 
            <FaDiagnoses className='mr-4' />
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='mobile-list'> 
            <FaProjectDiagram className='mr-4'/>
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>
              Projets
            </Link>
          </li>
          <li className='mobile-list'>
            <FaFileContract className='mr-4'/>
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

      {/*Réseau Social*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='social'>
            <a className='content-social' href="https://www.linkedin.com/in/julien-luc-33915a156/" target='blank'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='social'>
            <a className='content-social' href="https://github.com/JulienLuc77?tab=repositories" target='blank'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='social'>
            <a className='content-social' href="mailto: julien.luc77@gmail.com">
              Mon mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='social'>
            <a className='content-social' href="/assets/CV_JULIEN_LUC.pdf" download="CV_JULIEN_LUC.pdf">
              Mon CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar