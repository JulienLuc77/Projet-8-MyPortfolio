import React from 'react'
import "./Contact.scss"

const Contact = () => {
  return (
<div name='contact' className='container-contact'>
  <form method='POST' action="https://getform.io/f/fdd1d8a0-cc91-43d4-b63e-fbe654082128" className='container-form'>
    <div className='p-container'>
      <p className='p1'>Contact</p>
      <p className='p2'>Vous pouvez soumettre le formulaire ou me contacter directement par mail en cliquant sur l'enveloppe à gauche de l'écran</p>
    </div>
    <input className='custom-box-style' type="text" placeholder='Name' name='name'/>
    <input className='box-style' type="email" placeholder='Email' name='email'/>
    <textarea className='textarea' name="message" placeholder='Message' rows="10"></textarea>
    <button className='custom-button'>Travaillons ensemble !</button>
  </form>
</div>
  )
}

export default Contact