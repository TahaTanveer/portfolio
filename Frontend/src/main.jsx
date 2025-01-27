import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import Portfolio from './Components/Portfolio.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
   
    
    

  </StrictMode>
  
  
)
