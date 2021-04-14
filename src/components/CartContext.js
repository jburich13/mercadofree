import React,{useState,useEffect} from "react";


const CartContext = React.createContext([]);

function CartProvider({defaultValue = [], children}){

    const [cart, setCart] = useState(defaultValue);
    setCart();

    const cartLength = () => {
        return cart.reduce((acumulador,valorCarrito) => {return acumulador + valorCarrito.stock},0)
    }

    const cartPrice = () => {
        return cart.reduce((acumulador,valorCarrito) => {return acumulador + valorCarrito.stock*valorCarrito.price},0)
    }


    const addToCart = (nuevoProducto, cantidad) =>{

        let id_producto = cart.findIndex(item => item.prod.id === nuevoProducto.id)
        if(id_producto===-1){

        }


    }

    return <CartContext.Provider value={{cart,setCart}}>

            
        </CartContext.Provider>
}

export {CartProvider,CartContext}

