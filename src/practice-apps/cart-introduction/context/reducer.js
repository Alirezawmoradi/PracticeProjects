const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {...state, loading: action.payload}
        case 'SET_FOOD_ITEMS':
            return {...state, foodItems: action.payload};
        case 'CLEAR_CART':
            return {...state, foodItems: []}
        case 'REMOVE':
            return {
                ...state,
                foodItems: state.foodItems.filter((item) => item.id !== action.payload)
            };
        case 'CHANGE_QUANTITY':
            const tempCart = state.foodItems.map((item) => {
                if (item.id === action.payload.id && action.payload.quantity > 0) {
                    return {...item, quantity: action.payload.id}
                }
                return item
            })
            return {...state, foodItems: tempCart}
    }
}
export default reducer;