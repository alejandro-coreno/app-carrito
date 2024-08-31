import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";
import { CardRoutes } from "./routes/CardRoutes";



const CardApp = () => {
    // hook personalizado
    const { cartItems, handlerAddProduct, handleDeleteProductCard} = useItemsCart();

    return (
        <>
            <div className="container my-4">
                <Navbar />

                <CardRoutes 
                    cartItems={cartItems}
                    handlerAddProduct={handlerAddProduct}
                    handleDeleteProductCard={handleDeleteProductCard}
                /> 
            </div>
        </>
    );
}


export default CardApp;

