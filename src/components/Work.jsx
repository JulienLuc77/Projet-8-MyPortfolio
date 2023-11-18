import React from 'react'
import Streamimg from '../assets/streamberry.webp'
import Jenaimg from '../assets/pâtisserie.webp'
import Kasaimg from '../assets/kasa.png'
import Bookimg from '../assets/booki.png'
import Ninaimg from '../assets/nina-carducci.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-400 bg-[#101728]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-400 border-teal-400'>Projets</p>
          <p className='py-6'>Ici, vous pouvez découvrir quelques uns de mes projets personnels et quelques projets effectués dans le cadre de ma formation.</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div style={{backgroundImage: `url(${Streamimg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center content-div'>
              <span className='text-1xl text-gray-50 tracking-wider'>
                Copie de la plateforme vu dans la série Black Mirror
              </span>
              <div className='pt-8 text-center'>
                <a href="https://julienluc77.github.io/Streamberry/" target='_blank' rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Streamberry</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Jenaimg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center content-div'>
              <span className='text-1xl text-gray-50 tracking-wider'>
                Création d'un portfolio fictif de Jena pâtissière expérimentée avec Locomotiv JS
              </span>
              <div className='pt-9 text-center'>
                <a href="https://julienluc77.github.io/Jena-Pastry/" target='_blank' rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Jena Pastry</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Kasaimg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center content-div'>
              <span className='text-1xl text-gray-50 tracking-wider'>
                Création d'un site de location immobilière avec REACT
              </span>
              <div className='pt-9 text-center'>
                <a href="https://julienluc77.github.io/Projet-2-Booki/" target='_blank' rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Kasa</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Bookimg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center content-div'>
              <span className='text-1xl text-gray-50 tracking-wider'>
                Création d'un site d'hébergements et d'activités en HTML/CSS
              </span>
              <div className='pt-9 text-center'>
                <a href="https://julienluc77.github.io/Projet-2-Booki/" target='_blank' rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Booki</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Ninaimg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center content-div'>
              <span className='text-1xl text-gray-50 tracking-wider'>
                Optimisation d'un site d'une photographe professionnelle
              </span>
              <div className='pt-9 text-center'>
                <a href="https://julienluc77.github.io/Projet-5-Nina-Photographe/" target='_blank' rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Nina Carducci</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work