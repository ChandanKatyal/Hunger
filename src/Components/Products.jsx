import React from 'react'
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage3 from '../images/s3.png';
import pimage4 from '../images/s4.png';
import {useNavigate} from 'react-router-dom';


function Products() {
  let navigate = useNavigate();
  return (
    <div id='products'>
   <h1>WE ARE HERE TO SERVE YOU</h1>
   <div className='a-container'>
      <Productbox  image={pimage1} title="Italian-Pizza"/>
      <Productbox  image={pimage4} title="Sandwich"/>
      <Productbox  image={pimage3} title="Fries"/>
      




   </div>
   <h1>And Many More...</h1>
   <br></br>
   <br></br>
   <button className='read-more' onClick={()=>{navigate("/Menupage")}}>Go to Menu</button>
   </div>
  )
}

export default Products