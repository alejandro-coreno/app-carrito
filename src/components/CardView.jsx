import { useState, useEffect } from "react";
import { getProductos } from "../services/productsService";
import CardItem from "./CardItem";

const CardView = ({handlerAddProduct}) => {
    
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        setProductos(getProductos());
    }, [])

    return (
        <div className="row">
            {
                productos.map( producto =>
                    <div className="col-4 my-2" key={producto.id}>
                        <CardItem producto={producto} handlerAddProduct={ handlerAddProduct }/>
                    </div>
                )
            }
        </div>
    );
}

export default CardView;