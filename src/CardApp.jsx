

const CardApp = () => {
  return (
    <>
        <div className="container">

            <h3>Cart App</h3>
            
            <div className="row">
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico</h5>
                            <p className="Card-text">Teclado mecanico con luces y switches de colores</p>
                            <p className="card-text">$1000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>

                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Samsung TV 55</h5>
                            <p className="Card-text">Teclado mecanico con luces y switches de colores</p>
                            <p className="card-text">$8000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>

                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Audifonos Bluetooh</h5>
                            <p className="Card-text">Teclado mecanico con luces y switches de colores</p>
                            <p className="card-text">$2000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>

                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Memoria Ram 16</h5>
                            <p className="Card-text">Teclado mecanico con luces y switches de colores</p>
                            <p className="card-text">$700</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>

                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Monitor</h5>
                            <p className="Card-text">Teclado mecanico con luces y switches de colores</p>
                            <p className="card-text">$6000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>

                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">CPU Inteligente</h5>
                            <p className="Card-text">Teclado mecanico con luces y switches de colores</p>
                            <p className="card-text">$4000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Maquetado de carrito*/}
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
                        <tr>
                            <td>nombre</td>
                            <td>precio</td>
                            <td>cantidad</td>
                            <td>total</td>
                            <td>eliminar</td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <td colSpan="3" className="text-end fw-bold">Total</td>
                            <td colSpan="2"  className="text-start fw-bold">12334</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    </>
  );
}


export default CardApp;

