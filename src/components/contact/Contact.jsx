import React from 'react'
import './Contact.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";


const Contact = () => {
  return (
    <>
    <div className="contact container mt" id='contact'>
    <h1 className=' text-light'>Contact Me</h1>
    <div className="contact-icon">
      <a href='https://www.instagram.com/theanadi7/profilecard/?igsh=MTk1dTZjeXBjaTN3eQ==/' target='_blank' className="itemss">
        <FaInstagram  className='icons'/>
      </a>
      {/* <a href='' target='_blank' className="itemss">
        <FaFacebook className='icons'/>
      </a> */}
      <a href='https://linkedin.com/in/anadi-patra-67723629a' target='_blank' className="itemss">
        <FaLinkedin className='icons'/>
      </a>
      <a href='https://github.com/Anadi-2001/FOOD' target='_blank' className="itemss">
        <FaSquareGithub className='icons'/>
      </a>
      <a href="mailto:anadipatra44@gmail.com" class="itemss">
        <BiLogoGmail className='icons'/>
      </a>
    </div>
    </div>
    </>
  )
}

export default Contact