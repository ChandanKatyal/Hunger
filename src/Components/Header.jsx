import React from 'react'
import { Link } from 'react-scroll';

function Header() {
  return (
    <div id='main'>
  <div className='header-heading'>
      <h3>It's Great Time For A Good Taste Of Food</h3>
      <h1><span>Delevering Deliciousness</span><br/></h1>
      <p className='details'> Ordering Food From Your Favourite Restraurants is just a Click Away</p>
      <div className='header-btns'>
          <a href="#" className='header-btn'>< Link to = "products"smooth = { true } duration = { 2000 } >Order Now</Link></a>
          
           
      </div>
      <br></br>
      <br></br>
      
      <Link to="contact" ><button className="read-more">Book a table</button></Link>

  </div>
    </div>
  )
}

export default Header