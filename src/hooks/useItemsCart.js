import { useReducer, useEffect } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { actions } from "../reducer/itemsActions";

// utilizamos un hook personalizado para reutilizar la logica
const initialItems = JSON.parse(sessionStorage.getItem('cart')) || [];

//importamos nuetras acciones aplicando el patron adaptador
const { AddProductCard, UpdateQuantityProductCart, DeleteProductCart} = actions


export const useItemsCart =  () => {

    // const [cartItems, setCartItems] = useState(initialItems);

    // ocupamos el useReducer para manejar el estado del carrito
    // 1.- estado , la funcion despachadora , la funcion reductora y nuestro datos iniciales
    const [cartItems, dispatch] = useReducer(itemsReducer, initialItems)
    
    const handlerAddProduct = ( producto ) => {

        const hasItem = cartItems.find(( i ) => i.producto.id === producto.id);

        if (hasItem) {
           dispatch({
                type: UpdateQuantityProductCart,
                payload: producto
            });
        }
        else {
            dispatch({
                type: AddProductCard,
                payload: producto
            });
        }

    }

    const handleDeleteProductCard = ( id ) => {
        dispatch({
            type: DeleteProductCart,
            payload: id 
        });
    }

   // cada que cambian los cart items actualiza el sessionStorage
   useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems))
   }, [cartItems]);
    
    // retornamos nuestro objeto con los metodos que utilizamos en nuestro componentes
    return {
        cartItems,
        handlerAddProduct,
        handleDeleteProductCard,
    }
}