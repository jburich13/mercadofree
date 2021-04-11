import React from "react";
import {Button, Card, Row,} from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"



export function Items({items}){
  console.log(items.img.url)    
  return (
          <div>
            <div className="row justify-content-around">
            <Card style={{ width: "18rem", margin:"3rem"}}>
            <Card.Body>

            <Card.Img variant="top" src={items.img.url} className="Home__imgCard" />
              <Card.Title>{items.name}</Card.Title>
              <Card.Text>
                <Row className="m-3">
                  Precio: {items.price}
                </Row>
                <Row className="m-3">
                  Categoria: {items.category}
                </Row>
              </Card.Text>
              <ItemCount item={items.stock}>
              </ItemCount>
                <Row className="row justify-content-center">
                <Button className="m-2">Agregar al carrito</Button>
                <Button className="m-2"> <Link className="text-white" to={`/item/${items._id}`}>Detalles</Link></Button>
                </Row>  
            </Card.Body>
          </Card>

            </div>
         
        </div>
      )
}


