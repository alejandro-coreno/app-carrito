import { useItemsCart } from "./hooks/useItemsCart";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import CardView from "./components/CardView";
import CarritoView from "./components/CarritoView";




const CardApp = () => {
    // hook personalizado
    const { cartItems, handlerAddProduct, handleDeleteProductCard} = useItemsCart();

    return (
        <>
            <div className="container my-4">

                <Navbar />


                <Routes>
                    {/* Ruta Principal */}
                    <Route path="/" element={ <Navigate to="/catalog" />}/>
                    {/* Componente CardView*/}
                    <Route 
                        path="catalog" 
                        element={ <CardView handlerAddProduct={ handlerAddProduct } />} 
                    />
                    {/* Componente Carrito*/}
                    {/* Validamos que el carrito tenga datos para mostrarlo */}
                    <Route 
                        path="cart" 
                        element={(
                        cartItems.length <= 0 
                        ?
                            <div className="alert alert-warning">¡No hay productos en el carro de compras!</div>
                        : 
                            <CarritoView items={cartItems}  handlerDelete={ handleDeleteProductCard }/>)} 
                    />
                </Routes>
                   
            </div>
        </>
    );
}


export default CardApp;

