import React from "react";
import {Card, Row,} from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"



export function Items({items}){
  return (
          <div>
            <div className="row justify-content-around">
            <Card style={{ width: "18rem", margin:"3rem"}}>
            <Card.Body  className="Home_ElementCard shadow-lg">
              <Row className="justify-content-center">
                <Card.Img variant="top" src={items.img.url} className="Home__imgCard text-center" rounded/>
              </Row>
              <Card.Title className="m-3 Home__TitleCard">{items.name}</Card.Title>
              <Card.Text>
                <Row className="m-3">
                  Precio: {items.price}
                </Row>
                <Row className="m-3">
                  Categoria: {items.category}
                </Row>
              </Card.Text>
              <ItemCount  item={items} stock={items.stock}>
              </ItemCount>
                <Row className="justify-content-center">
                <Link className="btn rounded-pill Home__btn" to={`/item/${items._id}`}>Detalles</Link>
                </Row>  
            </Card.Body>
          </Card>

            </div>
         
        </div>
      )
}


