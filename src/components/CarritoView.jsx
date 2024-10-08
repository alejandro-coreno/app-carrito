import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productsService";
import { useNavigate } from "react-router-dom";

const CarritoView = ({ items, handlerDelete }) => {

    //useState para total del carrito
    const [total, setTotal] = useState(0);

    const navigate = useNavigate();

    //cada que cambian los items se realiza se actuliza el total

    useEffect(() => {
        setTotal( calculateTotal(items) );
    }, [ items ]);
    
    const onDeleteProducto =  (id) => {
        handlerDelete(id)
    }

    // funcion que nos redirrecciona al catalog
    const onCatalog = () => {
        navigate('/catalog')
    }



    return (
        <div className="my-4 w-50">
            <h3>Carro de Compras</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.map( item  => 
                        
                            <tr key={item.producto.id}>
                                <td>{item.producto.nombre}</td>
                                <td>{item.producto.precio}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.producto.precio * item.cantidad}</td>
                                <td><button className="btn btn-danger" type="button" onClick={() => onDeleteProducto(item.producto.id)}>Eliminar</button></td>
                            </tr>
                        )

                    }

                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2"  className="text-start fw-bold">{ total }</td>
                    </tr>
                </tfoot>
            </table>

            <button 
                type="button"
                className="btn btn-success"
                onClick={onCatalog}
            >
                Seguir Comprando
            </button>
        </div>
    );
}

export default CarritoView;