import React from 'react';
import './style.css';
import { CartState } from '../../Context/Context';

const MenuItem = ({prod}) => {

const {
    state: {cart},
    dispatch,
}=CartState()
  return (
    <div className="item">
          <img src={prod.img} alt={prod.name} />
          <div className="item-head_desc">
              <p className="head-desc-name"><b>{prod.name}</b></p>
          </div>
          <div className="item-foot_desc">
              <span className="foot_desc-price"><b>Rs.{prod.price}</b></span>
              {
                  cart.some(p=>p.id===prod.id)?(
                      <button className="REMOVE_FROM_CART" onClick={()=>{
                        dispatch({
                            type:'REMOVE_FROM_CART',
                            payload:prod,
                        })
                    }}>Remove from cart</button>
                  ):(
                    <button className="ADD_TO_CART" onClick={()=>{
                        dispatch({
                            type:'ADD_TO_CART',
                            payload:prod,
                        })
                    }}>Add to cart</button>
                  )
              }
              
          </div>
      </div>
  )
}



export default MenuItem;