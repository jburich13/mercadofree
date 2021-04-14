import React,{useContext} from "react";
import { Row } from "react-bootstrap";
import carrito from "../shopping-cart.png"
import {CartContext} from "./context/CartContext"



function CartWidget(){

    const {cart,cartLength} = useContext(CartContext);
    console.log(cart);
    return(<div>
        <Row>
            <h5>{cart[0]?.cant}</h5>
            <img className="carrito" src={carrito} alt="carrito"></img>
        </Row>
       
    </div>)

}

export default CartWidget;