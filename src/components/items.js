import React,{ useEffect, useState} from "react";
import {Button, Card, Container, Row,} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";


export function Items({items}){
    let [count, setCount] = useState(0);

    const onAdd=()=>{
      setCount(count=count+1);
    }
    
    const onRemove=()=>{
      setCount(count=count-1);
    }
      return (
          <div>
          <Card style={{ width: "18rem", margin:"3rem"}}>
            <Card.Body>
              <Card.Title>{items.nombre}</Card.Title>
              <Container>
                <Row className="justify-content-around">
                  <Button onClick={onAdd} disabled={count >= items.stock}>+</Button>
                  <Card.Text>
                    {count}
                  </Card.Text>
                  <Button onClick={onRemove}  disabled={count <= 0}>-</Button>
                </Row>
              </Container>
              <Container>
                <Row className=" row justify-content-center">
                <Button className="m-2">Agregar al carrito</Button>
                <Button className="m-2"> <NavLink className="text-white" to={`item/${items.id}`}>Detalle</NavLink> </Button>
                </Row>
              </Container>
              
            </Card.Body>
          </Card>
        </div>
      )
}


