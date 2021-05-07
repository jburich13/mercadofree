import React from "react";
import {Container} from "react-bootstrap"




export function CartOrder({ordenes}){
    return(
        <div>
            {ordenes != null ? ordenes.map((orden)=>{
               
            return( <Container key={orden.id}> 
                <h1 className="text-white">Orden N°: {orden.id}</h1>
                <h2 className="text-white">Comprador: {orden.buyer.name}</h2>
            </Container>)
            }
            
            ) : <h1>No hay ordenes</h1>}
        </div>

    )
}