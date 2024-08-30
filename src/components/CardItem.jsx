import { useNavigate } from "react-router-dom";

const CardItem = ({producto, handlerAddProduct}) => {
    //Desestructuramos el objeto producto con cada una de sus propiedades 
    const { id, nombre, descripcion, precio } = producto;

    // ocupamos el useNavigate para redirigir al usuario cada que agrega al carrito
    const navigate = useNavigate();

    const addProduct = (product) => {
        handlerAddProduct(product);
        navigate('/cart');
    }

    return (
        <div className="card" style={{ width: '21rem', height: '14rem' }}>
            <div className="card-body">
                <h5 className="card-title">{ nombre }</h5>
                <p className="card-text">{ descripcion }</p>
                <p className="card-text">${ precio }</p>
                <button className="btn btn-primary" onClick={() => addProduct({id, nombre, descripcion, precio})}>Agregar</button>
            </div>
        </div>  
    );
}

export default CardItem;