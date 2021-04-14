import React, { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import { CartContext } from "./context/CartContext"

export function TotalPrice(){
    const {cart, cartPrice} = useContext(CartContext); 
    console.log(cartPrice())
    return(cart.length <=0 ? "" :  
    <Container>
            <Row>
                <h3 className="Cart__priceItem">
                    Total a pagar: {cartPrice()}
                </h3>
            </Row>
    </Container>)
}