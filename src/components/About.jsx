import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#101728] text-gray-400'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-teal-400'>À propos</p>
        </div>
        <div></div>
      </div>
      <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
        <div className='sm:text-right text-4xl font-bold'>
          <p>Bonjour. Moi c'est Julien, merci pour votre temps.</p>
        </div>
        <div>
          <p>J'ai parcouru un chemin professionnel me menant à l'acquisition et au développement d'importantes compétences comme, une pleine implication, un apprentissage autodidacte, la curiosité, le travail en équipe et l'investissement professionnel nécessaire pour accomplir parfaitement les missions qui me sont confiées.</p>
          <p>L'apprentissage du développement web a été pour moi au-delà de découvrir un métier passionnant, une source ouvrant une infinité de possibilités d'imaginer, d'inventer, de rêver tout en offrant les outils pour concevoir, créer cet ensemble dans des projets concrets.</p>
          <p> Je suis aujourd'hui sur une voie professionnelle qui m'anime, me passionne et dans laquelle je m'épanouis au quotidien.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About