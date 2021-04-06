import React,{useState} from "react";
import {Button, Card, Container, Row,} from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"



export function Items({items}){
      console.log(typeof items.stock)
      return (
          <div>
          <Card style={{ width: "18rem", margin:"3rem"}}>
            <Card.Body>
              <Card.Title>{items.nombre}</Card.Title>
              <ItemCount stock ={items.stock}>
              </ItemCount>
                <Row className="row justify-content-center">
                <Button className="m-2">Agregar al carrito</Button>
                <Button className="m-2"> <Link className="text-white" to={`/item/${items.id}`}>Detalle</Link></Button>
                </Row>  
            </Card.Body>
          </Card>
        </div>
      )
}


