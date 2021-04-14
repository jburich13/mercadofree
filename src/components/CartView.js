import React from "react"
import CartItems from "./CartItems"
import { useContext } from 'react';
import {CartContext} from "./context/CartContext"

export function CartView(){
    const {cart} = useContext(CartContext)
    return(
        cart.map(item => <div className="m-5 p-5 Cart__ContainerItems rounded-pill"><CartItems items={item}></CartItems></div> )
        )
}

export default CartView