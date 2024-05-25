import React from 'react'
import aboutimage from '../images/about.png';
import {useNavigate} from 'react-router-dom';
function About() {
  let navigate = useNavigate();
  return (

        <div id='about'>

           
           
     <div className='about-image'>
       <img src={aboutimage} alt=''/>
     </div>
     <div className='about-para'>
       <br></br>
       <br></br>
       <br></br>
     <p>
     For us, it's not just about bringing you good food from your favourite restaurants. It's about making a connection, which is why we sit down with the chefs, dreaming up menus that will arrive fresh and full of flavour. Try us!                </p>
    <br></br>
    <br></br>
    <button className='read-more' onClick={()=>{navigate("/Aboutuspage")}}>Read More</button>
    </div>
    
            
        </div>

  )
}

export default About