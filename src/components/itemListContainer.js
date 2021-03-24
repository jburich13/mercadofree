import React, { useState } from "react";
import {Container,Row} from "react-bootstrap";

import { ItemList } from "./ItemList";


function ItemListContainer() {
  const [items, setItems] = useState([])
  const item = new Promise((res,rej) =>{
    setTimeout(()=>{
        res([{id:0,nombre:"Producto2",descripcion:"Esta es una descripcion",precio:"2000",stock:20},{id:1,nombre:"Producto1",descripcion:"Esta es otra descripcion",precio:"400",stock:30}])
    },2000)
  })

  item.then((resultado)=>{
    setItems(resultado)
  })
    return <div>
      <Container className="justify-content-center">
        <Row>
        <ItemList items={items}></ItemList>
        </Row>
      </Container>
     
    </div> 
  }

export default ItemListContainer

