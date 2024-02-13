import useFoodData from "./hooks/useFoodData.jsx";


const CartIntroduction = () => {
    const [foodItems, loading,] = useFoodData({
        url: '/FastFood/list',
    })

    return (
        <ul>
            {
                foodItems.map((foods) => {
                    return (
                        <></>
                    )
                })
            }
        </ul>
    )
}

export default CartIntroduction;