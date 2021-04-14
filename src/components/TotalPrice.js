import React, { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import { CartContext } from "./context/CartContext"

export function TotalPrice(){
    const {cartPrice} = useContext(CartContext); 
    console.log(cartPrice())
    return(<Container>
            <Row>
                <h3 className="Cart__priceItem">
                    Total a pagar: {cartPrice()}
                </h3>
            </Row>
    </Container>)
}