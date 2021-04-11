import React from "react";
import {useState} from "react"
import {Container,Row, Button, Card} from "react-bootstrap";


export function ItemCount(item){

    let [count, setCount] = useState(0);

    const onAdd=()=>{
      setCount(count=count+1);
    }
    
    const onRemove=()=>{
      setCount(count=count-1);
    }
    return  <Container>
    <Row className="justify-content-around">
      <Button onClick={onAdd} disabled={count >=item.item}>+</Button>
      <Card.Text>
        {count}
      </Card.Text>
      <Button onClick={onRemove}  disabled={count <= 0}>-</Button>
    </Row>
  </Container>
}

export default ItemCount