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
      
        <Col>
        <h1 className="Cart__titleItem text-center">{items.prod.item.name}</h1>
        <Row className="justify-content-center">
            <Image src={items.prod.item.img.url} roundedCircle  className="Cart__Img text-center"></Image>
        </Row>
      
       <Row className="justify-content-between">
       <Button className="mt-5 Cart__btn" onClick={onRemove}>
                -
            </Button>
            <h3 className="Cart__priceItem mt-5">{items.cant}</h3>
            <Button className="mt-5 Cart__btn" onClick={onAdd} disabled={isFull()}>
                +
            </Button>
           
       </Row>

       <Row className="justify-content-center">
       <Button className="mt-5 Cart__btn" onClick={deleteFromCart}>
                X
            </Button>
       </Row>
       
            <h3 className="Cart__totalPriceItem mt-5 text-center">Precio por unidad: ${items.prod.item.price}</h3>
    </Col>
    )
}

export default CartItems;