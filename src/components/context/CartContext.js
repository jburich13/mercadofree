import React,{useState} from "react";


const CartContext = React.createContext([]);

function CartProvider({defaultValue = [], children}){

    const [cart, setCart] = useState(defaultValue);
    function cartLength(){
        return cart.reduce((acumulador,valorCarrito) => {return acumulador + valorCarrito.cant},0) 
    }

    const cartPrice = () => {
        return cart.reduce((acumulador,valorCarrito) => {return acumulador + valorCarrito.stock*valorCarrito.price},0)
    }


    const addToCart = (nuevoProducto, cantidad) =>{
        let id_producto = cart.findIndex(item => item.prod.item._id === nuevoProducto.item._id)
        if(id_producto===-1){
                setCart(cart => [...cart, {prod: nuevoProducto, cant: cantidad}])
        } else {
            let carritoModificado = [...cart];
            carritoModificado[id_producto].cant+=cantidad;
            setCart(carritoModificado)
        }


    }

    const removeFromCart = (producto, cantidad)=>{
        let productoAEliminar = cart.find(x => x.prod.item._id === producto.item._id)
        let carritoModificado = [...cart]
        if(cantidad === productoAEliminar.cant){
            carritoModificado.splice(cart.indexOf(productoAEliminar),1) 
            console.log("carrito mod",carritoModificado)
            setCart(carritoModificado)
        } else {
            carritoModificado[cart.indexOf(productoAEliminar)].cant-=cantidad;
            setCart(carritoModificado)
        }
    
    }

    const dropCart = ()=>{
        setCart([]);
    }


    return <CartContext.Provider value={{cart, setCart, addToCart, cartLength, removeFromCart}}>
        {children}
        </CartContext.Provider>
}

export {CartProvider,CartContext}

