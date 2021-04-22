import React, { useState, useEffect,useContext } from "react";
import {Container,Row} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import FadeLoader from "react-spinners/FadeLoader";
import {FormContext} from "../components/context/FormContext"
import {getFirestore} from "../firebase/client"



function ItemListContainer() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true);
  const {categoryid} = useParams();
  const {formValue} = useContext(FormContext);
  const db = getFirestore();
  const itemsCollection = db.collection("items");

  

  useEffect(()=> {
    setLoading(true)
    if(categoryid){
      const categorias = itemsCollection.where("category","==",categoryid)
      const items = categorias.get();
      items.then((snapshot)=>{
        if(snapshot.size >0){
          setItems(snapshot.docs.map(doc =>{
            return {id:doc.id, ...doc.data()}
          } 
          ))
              setLoading(false)
        }
      })  
    } else{
      const items = itemsCollection.get();
      items.then((snapshot)=>{
        if(snapshot.size >0){
          setItems(snapshot.docs.map(doc =>{
            return {id:doc.id, ...doc.data()}
          } 
          ))
              setLoading(false)
        }
      })
      
    }
    
   
  },[categoryid,formValue])
  
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

