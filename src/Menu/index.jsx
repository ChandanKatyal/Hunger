import React from 'react';
import { CartState } from '../Context/Context';
import './style.css';
import MenuItem from './MenuItem';

const Menu = () => {
  const {state:{products}} = CartState();
  return (
    <main style={{ backgroundImage: "url(/images/bgImage.jpg)"}}>
       {
         products.map((prod)=>{
          return <MenuItem prod={prod} key={prod.id}/>
         })
       }
    </main>
  )
}

export default Menu;