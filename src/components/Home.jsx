import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import "./Home.scss"
import { Link } from 'react-scroll'
import photoProfil from "../assets/canvas-min.png"

export const Home = () => {
  return (
    <div name='home' className='home-container'>
      <div className='home'>
        <p className='hello'>Bonjour, moi c'est</p>
        <h1 className='h1'>Julien,</h1>
        <h2 className='h2' >Développeur Front-end</h2>
        <p className='home-2'>Je suis un développeur web récemment diplomé. J'ai obtenu une certification « Développeur intégrateur web » enregistrée au Répertoire National des Certifications Professionnelles, de niveau 5 (bac +2) en HTML, CSS, JavaScript (React) avec également quelques notions en back-end, et je suis capable de créer des sites web dynamiques, interactifs, et optimisés pour les moteurs de recherche.</p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='button group'>
              Voir mes projets 
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
          <img className='photo' src={photoProfil} alt="Cliché de Julien" />
        </div>
      </div>
    </div>
  )
}
export default Home