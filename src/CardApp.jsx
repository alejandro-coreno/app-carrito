import CardView from "./components/CardView";
import CarritoView from "./components/CarritoView";

const CardApp = () => {

    

    return (
        <>
            <div className="container">

                <h3>Cart App</h3>
                
                {/* Componente CardView*/}
                <CardView />

                {/* Componente Carrito*/}
                
                <CarritoView />

            </div>
        </>
    );
}


export default CardApp;

