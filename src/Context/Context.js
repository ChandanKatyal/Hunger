import { createContext , useContext, useReducer } from "react";
import {menuItemsData} from '../Menu/data';
import {cartReducer} from './Reducers';

const Cart = createContext();

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer,{
        products: menuItemsData,
        cart:[]
    });
    return <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>;
}

export default Context;

export const CartState=()=>{
    return useContext(Cart);
}