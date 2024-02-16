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
    }
}
export default reducer;