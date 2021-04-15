import React, { useContext, useEffect } from "react";
import {useState} from "react"
import {Container,Row, Button, Card} from "react-bootstrap";
import {CartContext} from "./context/CartContext"


export function ItemCount(item, stock){

    let [count, setCount] = useState(0);
    const {addToCart} = useContext(CartContext)


  
    const agregarCarrito = ()=>{
      console.log("hola desde count", item)
      addToCart(item, count);
    }
  
    const onAdd=()=>{
      setCount(count=count+1);
    }
    const onRemove=()=>{
      setCount(count=count-1);
    }
    return  <Container>
    <Row className="justify-content-around">
      <Button onClick={onAdd} disabled={count >=item.stock} className="rounded-pill" >+</Button>
      <Card.Text>
        {count}
      </Card.Text>
      <Button onClick={onRemove}  disabled={count <= 0} className="rounded-pill">-</Button>
    </Row>
    <Row className="justify-content-center">
      <Button className="m-2 rounded-pill" onClick={agregarCarrito} >Agregar al carrito</Button>
    </Row>
    
  </Container>
}

export default ItemCount