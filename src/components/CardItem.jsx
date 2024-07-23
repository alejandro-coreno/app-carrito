
const CardItem = ({producto}) => {
    //Desestructuramos el objeto producto con cada una de sus propiedades 
    const { nombre, descripcion, precio } = producto;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ nombre }</h5>
                <p className="card-text">{ descripcion }</p>
                <p className="card-text">${ precio }</p>
                <button className="btn btn-primary">Agregar</button>
            </div>
        </div>  
    );
}

export default CardItem;