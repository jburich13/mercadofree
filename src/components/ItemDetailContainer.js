import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {ItemDetail} from "../components/ItemDetail"





function ItemDetailContainer() {
  const [items2, setItems2] = useState(null)
  const {itemid} = useParams();
  useEffect(()=> {
    if(itemid){
      fetch("https://custom-build-jburich13.vercel.app/api/index/"+itemid).then(res=>res.json())
      .then(data =>{
            setItems2(data)
            console.log("Hola2")
              });

    } else{
      fetch("https://custom-build-jburich13.vercel.app/api/index").then(res=>res.json())
      .then(data =>{
            setItems2(data)
            console.log("Hola")
              });
      
    }
   
  },[itemid])
  
    return <ItemDetail itemsDetail={items2}></ItemDetail>
  }

export default ItemDetailContainer

