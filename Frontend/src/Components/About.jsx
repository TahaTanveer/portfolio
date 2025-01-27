import React from 'react'
import './About.css';
import react1 from "../assets/react1.jpg"
import code1 from "../assets/code1.jpg"
import { NavLink } from 'react-router-dom'


const About = () => {
  return (
    <div>
    <h3 className='heading'>About Me</h3>
    <div className="About">


          <div className='left'>
            <h1 className='heading-about'>Who Am I ?</h1>
            <p>I specialize in offering a range of freelance services, including SEO, web design and development,or social media management.<br></br> With expertise in Full stack development, React, Express, Bootstrap, I bring a unique combination of creativity and technical proficiency.<br></br> Whether you need a sleek, responsive website, a standout brand identity.<br></br>
            <NavLink to="http://localhost:5173/contact" className="button-contact-main">Contact Me</NavLink>
            </p>
          </div>
          



          <div className='right'>
            <div className='img-container'>
              <div className='img-stacktop'>
                <img src={code1}className='img'alt='react'/>

              </div>
              
            </div>

          </div>
          </div>
          </div>
          
  )
}

export default About
