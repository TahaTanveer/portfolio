import React from 'react'
import './Home.css';
import intro from "../assets/pexels.jpg"
import uni from "../assets/uni.jpg"
import { NavLink } from 'react-router-dom'
import java from "../assets/java.jpg"


const Home = () => {
  const cards =[
    {
      p: "Web Design",
      d: "Stand out online with custom website design tailored to your unique needs! I create visually stunning, user-friendly websites that reflect your brand's identity and engage your audience",
    },
    {
      p: "SEO Marketing",
      d: "Boost your website’s visibility with expert SEO marketing! I specialize in optimizing your site to rank higher on search engines, attract targeted traffic, and drive measurable results",
    },
    {
      p: "Web Development",
      d: "Bring your vision to life with expert web development! I create responsive, high-performing websites tailored to your needs, ensuring seamless functionality and an exceptional user experience.",
    },
    {
      p: "E-commerce Store",
      d: "Launch a successful online store with expert e-commerce solutions! I design and develop user-friendly, visually appealing platforms tailored to your business needs. From secure payment gateways to seamless product management,",
    },
    {
      p: "Full-stack development",
      d: "Transform your ideas into reality with expert full-stack development services! As an independent full-stack developer, I specialize in building dynamic, scalable, and user-friendly applications from front-end design to back-end functionality",
    },
    {
      p: "Wordpress Website",
      d: "Create a stunning and functional website with expert WordPress services! I specialize in designing and customizing WordPress sites tailored to your brand and goals. Whether you need a blog, portfolio, or e-commerce store, I ensure a user-friendly",
    },
  ]
  
  return (
    <div className='hero'>
     <div className='mask'>
      < img className="into-img"img src={intro} alt="intro" />
     </div>
    <div className='content'>
      <p>
        HI, I'm 
        a Freelance
        
      </p>
      <h1>
        Web Developer
      </h1>
      <div className='btn'>
        
      <NavLink to="http://localhost:5173/contact" className="button-contact">Contact</NavLink>
      <NavLink to="https://github.com/TahaTanveer/" className="button-contact">Projects</NavLink>
      </div>
      
      
    
    </div>
    
    <div>
    
      <h3 className='headingtwo-HOME'>My Services</h3>
      <div className="container">
        {cards.map((card, index) => (
          <div key={index} className="box">
            <h3 className="cardheading">{card.p}</h3>
            <p className="cardparagraph">{card.d}</p>
          </div>
          
        ))}
      </div>
      <div>
    
       <div className='work-container'>
        <h1 className='project-heading'>
          My latest work

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
    </div>
 
    </div>
    
    
  )
  
}


export default Home
