import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import "./Home.scss"

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='hello'>Bonjour, moi c'est</p>
        <h1 className='text-4xl sm:text-5xl font-bold text-[#b6b6b6]'>Julien,</h1>
        <h2 className='text-[#6d6d6d] text-4xl sm:text-5xl font-bold' >Développeur Front-end</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Je suis un développeur web récemment diplomé. J'ai obtenu une certification en HTML, CSS, JavaScript (React) avec également quelques notions en back-end, et je suis capable de créer des sites web dynamiques, interactifs, et optimisés pour les moteurs de recherche.</p>
        <div>
           <button className='button group px-6 py-3 my-2 hover:bg-teal-700 hover:border-teal-700'>Voir mes projets 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
           </button>
        </div>
      </div>
    </div>
  )
}
export default Home