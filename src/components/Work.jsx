import React from 'react'
import Workimg from '../assets/streamberry.webp'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-200 border-teal-600'>Projets</p>
          <p className='py-6'>Ici, vous pouvez découvrir quelques uns de mes projets personnels et quelques projets effectués dans le cadre de ma formation.</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div style={{backgroundImage: `url(${Workimg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl text-gray-50 tracking-wider'>
                Reproduction de la plateforme vu dans la série Black Mirror
              </span>
              <div className='pt-18 text-center'>
                <a href="">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Streamberry</button>
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