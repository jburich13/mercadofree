import React from "react"

export function ItemDetail({itemsDetail}){
    return <>
        <h2>Nombre: {itemsDetail?.name}</h2>
        <h2>Marca: {itemsDetail?.brand}</h2>
        <h3>Stock: {itemsDetail?.stock}</h3>
        <h3>Precio: {itemsDetail?.price}</h3>

    </>
}