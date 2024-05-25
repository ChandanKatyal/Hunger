import React from 'react';
import Menu from './Menu';
import { menuItemsData } from './Menu/data';
import {useNavigate} from 'react-router-dom';

function Menupage() {
  let navigate = useNavigate();
  return (
    <>
    <div  style={{textAlign: "Center"}}><h1 style={{backgroundColor: "grey", color:"black", fontSize:"40px", textAlign:"center"}}><b>Menu</b></h1></div>
    <Menu list ={menuItemsData}/>
    <div  style={{textAlign: "Center", backgroundColor: "#b4b4b4",padding:"10px"}}>
    <button type="submit" style={{backgroundColor: "grey", color:"black", width:"250px", height:"100px", fontSize:"30px",marginRight:"5px"}} onClick={()=>{navigate("/")}}><b>Go back to home</b></button>
    <button type="submit" style={{backgroundColor: "grey", color:"black", width:"250px", height:"100px", fontSize:"30px",marginLeft:"5px"}} onClick={()=>{navigate("/Cart")}} ><b>Checkout to cart</b></button>
    
    </div>
    </>
  )
}

export default Menupage;