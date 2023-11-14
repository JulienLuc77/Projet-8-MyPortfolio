import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/fdd1d8a0-cc91-43d4-b63e-fbe654082128" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-teal-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Vous pouvez soumettre le formulaire ou me contacter directement par mail en cliquant sur l'enveloppe à gauche de l'écran</p>
        </div>
        <input className='bg-[#ccd6f6] p-2 border-2 hover:border-teal-600 rounded-xl' type="text" placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd6f6] border-2 hover:border-teal-600 rounded-xl ' type="email" placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2 border-2 hover:border-teal-600 rounded-xl' name="message" placeholder='Message' rows="10"></textarea>
        <button className='text-gray-50 border-2 hover:bg-teal-600 hover:border-teal-600 px-4 py-3 my-8 mx-auto flex items-center rounded-xl'>Travaillons ensemble !</button>
      </form>
    </div>
  )
}

export default Contact