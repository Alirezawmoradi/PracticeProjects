import {createContext, useContext, useEffect, useReducer} from "react";
import reducer from "./reducer.js";
import useFoodData from "./../hooks/useFoodData.jsx";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [foodItems, loading, error] = useFoodData({url: '/FastFood/list'});

    const initialState = {
        loading: loading,
        total: 0,
        amount: 0,
        foodItems: foodItems
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type: 'SET_LOADING', payload: loading})
    }, [foodItems]);

    useEffect(() => {
        dispatch({type: 'SET_FOOD_ITEMS', payload: foodItems});
    }, [foodItems]);


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