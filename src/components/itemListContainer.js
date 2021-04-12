import React, { useState, useEffect } from "react";
import {Container,Row} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import FadeLoader from "react-spinners/FadeLoader";
import fadeIn from "react-animations"



function ItemListContainer() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true);
  const {categoryid} = useParams();

  useEffect(()=> {
    setLoading(true)
    if(categoryid){
      fetch("https://custom-build-jburich13.vercel.app/api/index/categoria/"+categoryid).then(res=>res.json())
      .then(data =>{
            setItems(data)
            setLoading(false)
              });

    } else{
      fetch("https://custom-build-jburich13.vercel.app/api/index").then(res=>res.json())
      .then(data =>{
            setItems(data)
            setLoading(false)
              });
      
    }
   
  },[categoryid])
  
    return <div>
        <Container>
          <Row className="justify-content-center">
              <FadeLoader loading={loading} color="#ffffff" className="loader"></FadeLoader>
          </Row>
          <Row className="justify-content-between">
            <ItemList items={items}></ItemList>
          </Row>
      </Container>
     
     
    </div> 
  }

export default ItemListContainer

