import { useState } from "react";
import CardView from "./components/CardView";
import CarritoView from "./components/CarritoView";


const initialItems = JSON.parse(sessionStorage.getItem('cart')) || []

const CardApp = () => {

    const [cartItems, setCartItems] = useState(initialItems);
    
    const handlerAddProduct = ( producto ) => {

        const hasItem = cartItems.find(( i ) => i.producto.id === producto.id);

        if (hasItem) {
            setCartItems([
                ...cartItems.filter(( i ) => i.producto.id !== producto.id ),
                {
                    producto,
                    cantidad: hasItem.cantidad + 1 
                }
            ])
        }
        else {
            setCartItems([...cartItems, {
                producto,
                cantidad: 1,
                total: producto.precio * 1 
            }]);

        }

    }

    const handleDeleteProductCard = ( id ) => {
        setCartItems([
            ...cartItems.filter( i => i.producto.id !== id )
        ]);
    }

    console.log( initialItems )

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

