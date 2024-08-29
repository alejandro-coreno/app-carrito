import { useState, useReducer } from "react";
import { itemsReducer } from "./reducer/itemsReducer";
import CardView from "./components/CardView";
import CarritoView from "./components/CarritoView";


const initialItems = JSON.parse(sessionStorage.getItem('cart')) || []

const CardApp = () => {

    // const [cartItems, setCartItems] = useState(initialItems);

    // ocupamos el useReducer para manejar el estado del carrito
    // 1.- estado , la funcion despachadora , la funcion reductora y nuestro datos iniciales
    const [cartItems, dispatch] = useReducer(itemsReducer, initialItems)
    
    const handlerAddProduct = ( producto ) => {

        const hasItem = cartItems.find(( i ) => i.producto.id === producto.id);

        if (hasItem) {
           dispatch({
                type: 'UpdateQuantityProductCart',
                payload: producto
            });
        }
        else {
            dispatch({
                type:'AddProductCard',
                payload: producto
            });
        }

    }

    const handleDeleteProductCard = ( id ) => {
        dispatch({
            type: 'DeleteProductCart',
            payload: id 
        });
    }

    console.log( initialItems )
    console.log( cartItems);

    return (
        <>
            <div className="container my-4">

                <h3>Cart App</h3>
                
                {/* Componente CardView*/}
                <CardView handlerAddProduct={ handlerAddProduct } />

                {/* Componente Carrito*/}

                {/* Validamos que el carrito tenga datos para mostrarlo */}
                
                {
                    cartItems.length > 0 && <CarritoView items={cartItems}  handlerDelete={ handleDeleteProductCard }/>
                }
                
            </div>
        </>
    );
}


export default CardApp;

