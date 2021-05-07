import React from "react"
import CartItems from "./CartItems"
import { useContext } from 'react';
import {CartContext} from "./context/CartContext"
import { EmptyCart } from "./EmptyCart";
import {Container,Row } from "react-bootstrap"

export function CartView(){
    const {cart} = useContext(CartContext)
    return(
        <Container>
            <Row className="justify-content-between">
                {cart.length <=0 ? <EmptyCart></EmptyCart> : cart.map(item => {
                console.log(item)
                return <div key={item.prod.item.id} className="m-5 p-5 Cart__ContainerItems rounded-pill"><CartItems items={item}></CartItems></div>})}
            </Row>
        </Container>
        )

}

export default CartView