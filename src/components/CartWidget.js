
import React,{useContext, useEffect, useState} from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import carrito from "../shopping-cart.png"
import {CartContext} from "./context/CartContext"



function CartWidget(){
    const {cart,cartLength,setCart,} = useContext(CartContext);
    const [cartQuantity, setCartQuantity] = useState(cartLength())

    useEffect(()=>{
        setCart(cart)
    })
    return(<div>
        <Row>
           <h5>{cartLength() <= 0 ? "" : cartLength()}</h5>
           <Link to={`/cart/`}><img className="carrito" src={carrito} alt="carrito"></img></Link>
        </Row>
       
    </div>)

}

export default CartWidget;