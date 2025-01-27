import React from 'react'
import './Footer.css'


import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
          <FaHome  className='icon'   size={20} style={{color:"#fff", marginRight:"2rem"}}/>
          <div>
            <p>
              123 housing society Pakistan 
            </p>
            
          </div>
         
          </div>
          <div className='phone'>
            <FaPhone className='icon'  size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            <h4>
            03280674235
            </h4>
          

          </div>
          <div className='email'>
            <FaMailBulk   className='icon'  size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            <h4>
            tahatanveer008@gmail.com
            </h4>
          

          </div>
        </div>
      
        <div className='right'>
          <h4>
            About Me
          </h4>
          <p>
          Im a professional freelance developer specializing in SEO, web development, WordPress customization, e-commerce store creation, and full-stack development
          </p>
          <div className="social">
          <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>
          <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
          <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer