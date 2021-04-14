import React, { useContext } from "react";
import {useState} from "react"
import {Container,Row, Button, Card} from "react-bootstrap";
import {CartContext} from "./context/CartContext"


export function ItemCount(item, stock){

    let [count, setCount] = useState(0);
    const {cart, addToCart, removeFromCart} = useContext(CartContext)
    const agregarCarrito = ()=>{
      addToCart(item, count);
    }
    const eliminarDelCarrito = ()=>{
      removeFromCart(item, count);
    }
    const onAdd=()=>{
      setCount(count=count+1);
    }
    
    const onRemove=()=>{
      setCount(count=count-1);
    }
    return  <Container>
    <Row className="justify-content-around">
      <Button onClick={onAdd} disabled={count >=stock}>+</Button>
      <Card.Text>
        {count}
      </Card.Text>
      <Button onClick={onRemove}  disabled={count <= 0}>-</Button>
    </Row>
    <Row className="justify-content-center">
      <Button className="m-2" onClick={agregarCarrito} >Agregar al carrito</Button>
      <Button className="m-2" onClick={eliminarDelCarrito} >Eliminar del carrito</Button>
    </Row>
    
  </Container>
}

export default ItemCount