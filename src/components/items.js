import React,{ useEffect, useState} from "react";
import {Button, Card, Container, Row,} from "react-bootstrap";


export function Items(props){
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
              <Card.Title>{props.nombre}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Container>
                <Row className="justify-content-around">
                  <Button onClick={onAdd} disabled={count >= props.stock}>+</Button>
                  <Card.Text>
                    {count}
                  </Card.Text>
                  <Button onClick={onRemove}  disabled={count <= 0}>-</Button>
                </Row>
              </Container>
              <Container>
                <Row className="justify-content-center mt-3">
                <Button >Agregar al carrito</Button>
                </Row>
              </Container>
              
            </Card.Body>
          </Card>
        </div>
      )
}


