import React, { useState, useEffect } from "react";
import {Container,Row} from "react-bootstrap";
import { useParams } from "react-router-dom";
import products from "../products"
import { ItemList } from "./ItemList";


function ItemListContainer() {
  const [items, setItems] = useState([])
  const {categoryid} = useParams();
  useEffect(()=> {
    if(categoryid){
      fetch("https://custom-build-jburich13.vercel.app/api/index/categoria/"+categoryid).then(res=>res.json())
      .then(data =>{
            setItems(data)
            console.log(data)
              });

    } else{
      fetch("https://custom-build-jburich13.vercel.app/api/index").then(res=>res.json())
      .then(data =>{
            setItems(data)
            console.log(data)
              });
      
    }
   
  },[categoryid])
  
    return <div>
      <Container className="justify-content-center">
        <Row>
        <ItemList items={items}></ItemList>
        </Row>
      </Container>
     
    </div> 
  }

export default ItemListContainer

