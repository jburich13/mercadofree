import React, { useContext } from "react"
import { Container, Row, Button } from "react-bootstrap"
import { CartContext } from "./context/CartContext"
import {getFirestore} from "../firebase/client"
import firebase from  "firebase/app"
import "firebase/firestore"


export function TotalPrice(){
    const {cart, cartPrice} = useContext(CartContext); 
    const generarOrden = ()=>{
        const db = getFirestore()
        const ordersCol = db.collection("orders")
        let orden = {}
        
        orden.buyer = {name:"Juan", phone:"3624568434", email:"jburich198@gmail.com"}
        orden.price = cartPrice()
        console.log("cart",cart)
        orden.items = cart.map(cartItem =>{
            console.log(cartItem)
            const id = cartItem.prod.item.id
            const title = cartItem.prod.item.name
            const price = cartItem.prod.item.price * cartItem.quantity
            const date = firebase.firestore.Timestamp.fromDate(new Date())
            return {id,title, price, date}
        })

       ordersCol.add(orden).then((idDocumento)=>{
           console.log("id documento", idDocumento.id)
       }).catch(err =>{
           console.log(err)
       })
    }
    console.log(cartPrice())
    return(cart.length <=0 ? "" :  
    <Container>
            <Row>
                <h3 className="Cart__priceItem">
                    Total a pagar: {cartPrice()}
                </h3>
                <Button onClick={generarOrden}>Finalizar compra</Button>
            </Row>
    </Container>)
}