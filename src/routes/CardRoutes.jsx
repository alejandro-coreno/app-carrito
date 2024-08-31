import { Routes, Route, Navigate } from "react-router-dom";
import CardView from "../components/CardView";
import CarritoView from "../components/CarritoView";
// componente que se encarga de retornar nuestras rutas
export const CardRoutes = ({ cartItems, handlerAddProduct, handleDeleteProductCard}) => {
    return (
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
    )
}