import { productos } from "../data/productos"

export const getProductos = () => {
    return productos
}

export const calculateTotal = ( items ) => {
    return items.reduce(
        ( acumulador, item ) => acumulador + item.producto.precio * item.cantidad, 0)
}