import React,{useContext} from "react";
import carrito from "../shopping-cart.png"
import {CartContext} from "./CartContext"



function CartWidget(){

    const {cart, setCart} = useContext(CartContext);
    console.log(cart);

    return(<div>
        <img className="carrito" src={carrito} alt="carrito"></img>
    </div>)

}

export default CartWidget;