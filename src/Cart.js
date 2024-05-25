import { useEffect,useState } from "react";
import { CartState } from "./Context/Context";
import {Navigate, useNavigate} from 'react-router-dom'; 
import './Cart.css';
const Cart = () => {
  const {
    state: {cart},
    dispatch,
  }=CartState();

  const [total,setTotal]=useState();

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0));
  },[cart]);
  let navigate = useNavigate();
  return (
    <div className='cart'>
      <h1>Cart</h1>
      <div className='productContainer'>
        {cart.map((prod) => (<table>
        <tr>
          <td><span className="item"><img src={prod.img} alt={prod.name}/></span> </td>
          <td><span className="item">{prod.name}</span></td>
          <td><span className="item">Rs {prod.price}</span></td>
          <td><span className="item"><select style={{backgroundColor:"grey",color:"white"}}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select></span></td>
          
          </tr>
          </table>
        ))}
      </div>
      <div className="myForm">
      <form onSubmit={()=>{alert('Your Order is placed! Thank You!!');navigate("/");}}>
      <h1>Your Details!!!</h1>
            <input type='text' placeholder='Full Name' className="input" required/><br></br>
            <textarea placeholder='Address where you want your order to be delivered...' className="input" required></textarea><br></br>
            <input type="tel" placeholder='Contact No...' pattern="[1-9]{1}[0-9]{9}" className="input" required/><br></br>
            <input type='submit' value='SUBMIT' style={{backgroundColor:"lightgray", color:"black", width:"200px", height:"30px", fontSize:"20px",marginBottom:"20px",marginTop:"10px"}} disabled={cart.length===0}/>
        </form>
        </div>
        <div style={{textAlign:"center",paddingTop:"20px"}}>
        <span style={{fontWeight:700,fontSize:25}}>Total: Rs {total}</span>
        </div>
        <div className ="buttons">
        <button type="submit" onClick={()=>{navigate("/Menupage")}} style={{backgroundColor: "grey", color:"black", width:"fit-content", height:"50px", fontSize:"30px"}}>Go back to menu</button>
        <button type="submit" onClick={()=>{navigate("/")}} style={{backgroundColor: "grey", color:"black", width:"fit-content", height:"50px", fontSize:"30px"}}>Go to home</button>
      </div>
    </div>
  )
}

export default Cart;