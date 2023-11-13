import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Sass from '../assets/sass.png'
import JavaScript from '../assets/javascript.png'
import Reactimg from '../assets/react.png'
import Node from '../assets/node.png'
import Github from '../assets/github.png'
import Mongo from '../assets/mongo.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300 '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-teal-600'>Expérience</p>
          <p className='py-4'>Voici les technologies avec lesquelles j'ai travaillé pour réaliser mes projets personnels et ceux de ma formation :</p>
        </div>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="Logo HTML" />
            <p className='my-2'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="Logo CSS" />
            <p className='my-2'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Sass} alt="Logo Sass" />
            <p className='my-2'>SASS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="Logo JavaScript" />
            <p className='my-2'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Reactimg} alt="Logo Reactimg" />
            <p className='my-2'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="Logo Node" />
            <p className='my-2'>NODE</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt="Logo Github" />
            <p className='my-2'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt="Logo Mongo" />
            <p className='my-2'>MONGO</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills