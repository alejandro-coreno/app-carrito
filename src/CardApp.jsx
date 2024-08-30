import { useItemsCart } from "./hooks/useItemsCart";
import CardView from "./components/CardView";
import CarritoView from "./components/CarritoView";




const CardApp = () => {
    // hook personalizado
    const { cartItems, handlerAddProduct, handleDeleteProductCard} = useItemsCart();

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

