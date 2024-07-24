import { useState } from "react";
import CardView from "./components/CardView";
import CarritoView from "./components/CarritoView";



const CardApp = () => {

    const [cartItems, setCartItems] = useState([]);
    
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

    return (
        <>
            <div className="container">

                <h3>Cart App</h3>
                
                {/* Componente CardView*/}
                <CardView handlerAddProduct={ handlerAddProduct } />

                {/* Componente Carrito*/}
                
                <CarritoView items={cartItems} />

            </div>
        </>
    );
}


export default CardApp;

