import { useState } from "react";

const CarritoView = ({ items }) => {

    

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
                                <td>eliminar</td>
                            </tr>
                        )

                    }

                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2"  className="text-start fw-bold">12334</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default CarritoView;