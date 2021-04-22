import React,{useState} from "react";


const CartContext = React.createContext([]);

function CartProvider({defaultValue = [], children}){

    const [cart, setCart] = useState(defaultValue);
    function cartLength(){
        return cart.reduce((acumulador,valorCarrito) => {return acumulador + valorCarrito.cant},0) 
    }

    const cartPrice = () => {
        return cart.reduce((acumulador,valorCarrito) => {
            return acumulador + valorCarrito.cant*valorCarrito.prod.item.price},0)
    }


    const addToCart = (nuevoProducto, cantidad) =>{
        let id_producto = cart.findIndex(x => x.prod.item.id === nuevoProducto.item.id)
        if(id_producto===-1){
                setCart(cart => [...cart, {prod: nuevoProducto, cant: cantidad}])
        } else {
            let carritoModificado = [...cart];
            carritoModificado[id_producto].cant+=cantidad;
            setCart(carritoModificado)
        }


    }

    const removeFromCart = (producto, cantidad)=>{
        let productoAEliminar = cart.find(x => x.prod.item.id === producto.item.id)
        let carritoModificado = [...cart]
        if(cantidad === productoAEliminar.cant){
            carritoModificado.splice(cart.indexOf(productoAEliminar),1) 
            setCart(carritoModificado)
        } else if(cantidad > productoAEliminar.cant){
                console.log("ERROR, NO SE PUEDE SACAR MAS DE LA CANTIDAD QUE TENES")
        } else {
            carritoModificado[cart.indexOf(productoAEliminar)].cant-=cantidad;
            setCart(carritoModificado)
        }
    
    }

    const incrementQuantity = (nuevoProducto, cantidad) =>{
        let id_producto = cart.findIndex(x => x.prod.item.id === nuevoProducto.prod.item.id)
        let carritoModificado = [...cart];
        carritoModificado[id_producto].cant+=cantidad;
        setCart(carritoModificado)
    }

    const decrementQuantity = (producto,cantidad) =>{
        let productoAEliminar = cart.find(x => x.prod.item.id === producto.prod.item.id)
        let carritoModificado = [...cart]
        if(cantidad > productoAEliminar.cant){
            console.log("ERROR, NO SE PUEDE SACAR MAS DE LA CANTIDAD QUE TENES")
        } else{ 
            carritoModificado[cart.indexOf(productoAEliminar)].cant-=cantidad;
            setCart(carritoModificado)}   
       
    }

    const deleteFromProductFromCart = (producto)=>{
        console.log(producto)
        let productoAEliminar = cart.find(x => x.prod.item.id === producto.prod.item.id)
        let carritoModificado = [...cart]
        carritoModificado.splice(cart.indexOf(productoAEliminar),1) 
        setCart(carritoModificado)
    }



    return <CartContext.Provider value={{cart, setCart, addToCart, cartLength, removeFromCart, incrementQuantity, decrementQuantity, cartPrice,deleteFromProductFromCart}}>
        {children}
        </CartContext.Provider>
}

export {CartProvider,CartContext}

