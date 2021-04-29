import React from "react"

export function ItemDetail({itemsDetail}){
    console.log(itemsDetail)
    return <>

        <h2 className="text-white">Nombre: {itemsDetail?.name}</h2>
        <h2 className="text-white">Marca: {itemsDetail?.brand}</h2>
        <h3 className="text-white">Stock: {itemsDetail?.stock}</h3>
        <h3 className="text-white">Precio: {itemsDetail?.price}</h3>

    </>
}