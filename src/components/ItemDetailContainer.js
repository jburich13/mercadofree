import React, { useState, useEffect } from "react";
import {Container,Row} from "react-bootstrap";
import {ItemDetail} from "../components/ItemDetail"


const item  = ()=>{
    return new Promise((res,rej) =>{
        setTimeout(()=>{
            res({detail:"Detalles"})
        },2000)
  })
}

function ItemDetailContainer() {
  const [items2, setItems2] = useState(null)
  useEffect(() => {
    item().then((res)=> setItems2(res))
    return;
}, [])
    return <ItemDetail itemsDetail={items2}></ItemDetail>
  }

export default ItemDetailContainer

