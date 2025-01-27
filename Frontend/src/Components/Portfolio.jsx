import React from 'react'
import './Portfolio.css'
import uni from "../assets/uni.jpg"
import java from "../assets/java.jpg"
import { NavLink } from 'react-router-dom'
const Portfolio = () => {
  return (
    <div>
       <h3 className='heading'>My Portfolio</h3>
       <div className='work-container'>
        <h1 className='project-heading'>
          Projects

        </h1>
       </div>
       <div className="project-container">
        <div className="project-card">
         <img src={uni}className='uni'alt='uni'/>
         <h2 className="pro-title">
          University Website
         </h2>
<div className="pro-details">

<div className="pro-btns">

  <NavLink to="https://github.com/TahaTanveer/University-Website" className="button">Source</NavLink>
<div>

</div>

</div>
</div>


        </div>
        
       </div>
       <div className="project-container">
        <div className="project-card">
         <img src={java}className='java'alt='uni'/>
         <h2 className="pro-title">
         Quiz Game
         </h2>
<div className="pro-details">

<div className="pro-btns">

  <NavLink to="https://github.com/TahaTanveer/Quiz-Game" className="button">Source</NavLink>
<div>

</div>

</div>
</div>


        </div>
        
       </div>
    </div>
    
  )
}

export default Portfolio
