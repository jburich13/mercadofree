import React from "react" 
import {Items} from "./Items"


export function ItemList({items=[]}){
    return(items.map(item => <div><Items items={item}></Items></div> ))
}