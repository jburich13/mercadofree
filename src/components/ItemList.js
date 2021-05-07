import React from "react" 
import {Items} from "./Items"


export function ItemList({items=[]}){
    
    return(items.map(item => {
        return(<div key={item.id}><Items items={item}  ></Items></div>)
     }))
}