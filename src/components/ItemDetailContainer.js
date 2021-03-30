import React, { useState, useEffect } from "react";
import {Container,Row} from "react-bootstrap";
import { useParams } from "react-router";
import {ItemDetail} from "../components/ItemDetail"
import products from "../products"




function ItemDetailContainer() {
  const [items2, setItems2] = useState(null)
  const {itemid} = useParams();
  const item  = ()=>{
    return new Promise((res,rej) =>{
        setTimeout(()=>{
            if(itemid){
              const itemFiltered = products.find((item)=>{
                return item.id.toString() === itemid;
              })
              res(itemFiltered)
            } else res(products)
           
        },2000)
  })
}
  
  useEffect(() => {
    item().then((res)=> setItems2(res))
    return;
}, [itemid])
    return <ItemDetail itemsDetail={items2}></ItemDetail>
  }

export default ItemDetailContainer

