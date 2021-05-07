import React, { useContext, useState } from "react"
import { Container, Row, Button } from "react-bootstrap"
import { CartContext } from "./context/CartContext"
import {getFirestore} from "../firebase/client"
import firebase from  "firebase/app"
import "firebase/firestore"
import { CartOrder } from "./CartOrder"


export function TotalPrice(){
    const [orders, setOrders] = useState([])
    const {cart, cartPrice} = useContext(CartContext); 
    const generarOrden = ()=>{
        const db = getFirestore()
        const ordersCol = db.collection("orders")
        let orden = {}

    
        
        orden.buyer = {name:"Juan", phone:"3624568434", email:"jburich198@gmail.com"}
        orden.price = cartPrice()
        orden.items = cart.map(cartItem =>{
            const id = cartItem.prod.item.id
            const title = cartItem.prod.item.name
            const price = cartItem.prod.item.price * cartItem.quantity
            const date = firebase.firestore.Timestamp.fromDate(new Date())
            return {id,title, price, date}
        })

       
       ordersCol.add(orden).then((idDocumento)=>{
            orden.id=idDocumento.id
            setOrders([orden, ...orders])
       }).catch(err =>{
           console.log(err)
       })
    }
    return(cart.length <=0 ? "" :  
    <Container>
            <Row className="justify-content-between">
                <h3 className="Cart__priceItem mt-4">
                    Total a pagar: {cartPrice()}
                </h3>
                <Button onClick={generarOrden} className="Cart__btn">Finalizar compra</Button>
            </Row>

            <CartOrder ordenes={orders}></CartOrder>
    </Container>)
}