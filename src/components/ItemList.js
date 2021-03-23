import React from "react" 
import {Items} from "../components/Items"

export function ItemList({items=[]}){
    return(items.map(item => <Items items={item}></Items> ))
}