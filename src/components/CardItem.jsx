
const CardItem = ({producto, handlerAddProduct}) => {
    //Desestructuramos el objeto producto con cada una de sus propiedades 
    const { id, nombre, descripcion, precio } = producto;

    const addProduct = (product) => {
        handlerAddProduct(product);
    }

    return (
        <div className="card">
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