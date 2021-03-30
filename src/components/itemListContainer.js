import React, { useState } from "react";
import {Container,Row} from "react-bootstrap";
import { useParams } from "react-router";
import products from "../products"
import { ItemList } from "./ItemList";


function ItemListContainer() {
  const [items, setItems] = useState([])
  const {categoryid} = useParams();
  const item = new Promise((res,rej) =>{
    setTimeout(()=>{
        if(categoryid){
          const productosFiltered = products.filter((product)=>{
            return product.categoria.toString() === categoryid
          })
          res(productosFiltered);
        } else res(products)
        
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

