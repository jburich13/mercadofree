import React from "react";
import {Container} from "react-bootstrap"




export function CartOrder({ordenes=[]}){
    console.log("ordenes",ordenes)
    return(
        <div>
            {ordenes != null ? ordenes.map((orden)=>
            <Container> 
                <h1 className="text-white">Orden N°: {orden.id}</h1>
                <h2 className="text-white">Productos:{orden.items.title}</h2>
            </Container>
            ) : <h1>No hay ordenes</h1>}
        </div>

    )
}