import React from "react";
import carrito from "../shopping-cart.png"



class CartWidget extends React.Component {
render(){
    return(<div>
        <img className="carrito" src={carrito} alt="carrito"></img>
    </div>)

}

}

export default CartWidget;