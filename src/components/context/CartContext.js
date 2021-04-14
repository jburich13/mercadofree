import React,{useState} from "react";


const CartContext = React.createContext([]);

function CartProvider({defaultValue = [], children}){

    const [cart, setCart] = useState(defaultValue);
    const cartLength = () => {
        return cart.reduce((acumulador,valorCarrito) => {return acumulador + valorCarrito.stock},0)
    }

    const cartPrice = () => {
        return cart.reduce((acumulador,valorCarrito) => {return acumulador + valorCarrito.stock*valorCarrito.price},0)
    }


    const addToCart = (nuevoProducto, cantidad) =>{

        let id_producto = cart.findIndex(item => item.prod.id === nuevoProducto.id)
        if(id_producto===-1){
                setCart(cart => [...cart, {prod: nuevoProducto, cant: cantidad}])
        } else {
            let carritoModificado = [...cart];
            carritoModificado[id_producto].cant+=cantidad;
            setCart(carritoModificado)
        }


    }

    const dropCart = ()=>{
        setCart([]);
    }


    return <CartContext.Provider value={{cart, setCart, addToCart, cartLength}}>
        {children}
        </CartContext.Provider>
}

export {CartProvider,CartContext}

