// componente Navbar

import { NavLink } from "react-router-dom"

export const Navbar =  () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark white">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/catalog">Catalogo</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">Carrito</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}