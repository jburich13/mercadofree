import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {ItemDetail} from "../components/ItemDetail"
import {getFirestore} from "../firebase/client"





function ItemDetailContainer() {
  const [items2, setItems2] = useState(null)
  const {itemid} = useParams();
 
  useEffect(()=> {
    const db = getFirestore()
    const itemsCollection = db.collection("items")
    const item = itemsCollection.doc(itemid);

    item.get().then((res) =>{
      if(res.exists){
        setItems2(res.data())
      }
    })
  },[itemid])
  
    return <ItemDetail itemsDetail={items2}></ItemDetail>
  }

export default ItemDetailContainer

