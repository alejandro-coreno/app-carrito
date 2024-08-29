
// ocupamos el reducer para manejar mas acciones de nuestro estado del carrito


//recibe dos argumentos el estado y la accion 
export const itemsReducer = (state = [], action) => {
    // accion que evalua nuestro switch
    switch(action.type) {
        case 'AddProductCard':
            return [...state, {
                producto : action.payload,
                cantidad: 1,
            }];
        case 'UpdateQuantityProductCart':
            
            return state.map((i) => {
                if (i.producto.id === action.payload.id) {
                    i.cantidad = i.cantidad + 1;
                }
                return i;
            });
        case 'DeleteProductCart': 
            return [
                ...state.filter( i => i.producto.id !== action.payload)
            ];

        default:
            return state;
    }
}