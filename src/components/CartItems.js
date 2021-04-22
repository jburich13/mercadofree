import React, { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import {useContext} from "react"
import {CartContext} from "./context/CartContext"



function CartItems({items}){
    const {incrementQuantity, decrementQuantity,deleteFromProductFromCart} = useContext(CartContext)
    useEffect(()=>{
        isFull()
    })

    
    const onAdd=()=>{
        incrementQuantity(items, 1)
    }
      
    const onRemove=()=>{
       decrementQuantity(items,1)
    }

    const deleteFromCart=()=>{
        deleteFromProductFromCart(items)
    }

    const isFull = ()=>{

        console.log("stock",items.prod.item.stock)
        if(items.cant>=items.prod.item.stock){
            return true
        } else return false
    }

   

    
    return (
        <Container className>
            <Row>
                <Col>
                    <h1 className="Cart__titleItem">{items.prod.item.name}</h1>
                   <Image src={items.prod.item.img_url} roundedCircle  className="Home__imgCard"></Image>
                </Col>
                <Col>
                    <Row className="justify-content-around">
                        <Button className="mt-5" onClick={onAdd} disabled={isFull()}>
                            +
                        </Button>
                        <h3 className="Cart__priceItem mt-5">Cantidad: {items.cant}</h3>
                        <Button className="mt-5" onClick={onRemove}>
                            -
                        </Button>
                        <Button className="mt-5" onClick={deleteFromCart}>
                            X
                        </Button>
                       
                    </Row>
                    <Col>
                    <Row className="justify-content-center">
                        <h3 className="Cart__priceItem mt-5">Precio por unidad: ${items.prod.item.price}</h3>
                    </Row>
                   
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default CartItems;