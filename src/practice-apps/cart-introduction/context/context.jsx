import {createContext, useContext, useReducer} from "react";
import reducer from "./reducer.js";

const CartContext = createContext();

const initialState = {
    loading: false,
    total: 0,
    amount: 0,
}

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'});
    }

    const remove = id => {
        dispatch({type: 'REMOVE', payload: id})
    }

    return (
        <CartContext.Provider value={{...state, clearCart, remove}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export {CartProvider, useCartContext}