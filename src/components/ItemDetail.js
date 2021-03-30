import React from "react"

export function ItemDetail({itemsDetail}){
    return <>
        <h2>{itemsDetail?.nombre}</h2>
        <h3>Stock: {itemsDetail?.stock}</h3>
        <h3>Precio: {itemsDetail?.precio}</h3>

    </>
}