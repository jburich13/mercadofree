
import React, { useContext } from "react"
import { Container, Row, Button } from "react-bootstrap"
import { CartContext } from "./context/CartContext"

export function TotalPrice(){
    const {cart, cartPrice} = useContext(CartContext); 
    console.log(cartPrice())
    return(cart.length <=0 ? "" :  
    <Container>
            <Row className="justify-content-between">
                <h3 className="Cart__priceItem mt-4">
                    Total a pagar: ${cartPrice()}
                </h3>
                <Button className="Cart__btn">
                    Finalizar compra
                </Button>
            </Row>
    </Container>)
}