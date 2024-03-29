const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {...state, loading: action.payload}
        case 'SET_FOOD_ITEMS':
            const foodItemsWithQuantity = action.payload.map(item => ({...item, quantity: 0}));
            return {...state, foodItems: foodItemsWithQuantity};
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
                    return {...item, quantity: action.payload.quantity}
                }
                return item
            })
            return {...state, foodItems: tempCart}
        case 'GET_TOTALS': {
            let {total, quantity} = state.foodItems.reduce((foodItemsTotal, foodItems) => {
                const {price, quantity} = foodItems;
                const itemTotal = price * quantity;
                foodItemsTotal.total += itemTotal;
                foodItemsTotal.quantity += quantity;
                return foodItemsTotal;
            }, {
                total: 0,
                quantity: 0
            });
            return {...state, total, quantity}
        }
    }
}
export default reducer;