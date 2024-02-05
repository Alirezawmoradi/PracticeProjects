import Header from "./components/header/header.jsx";
import CategoryList from "./components/category-list/category-list.jsx";
import {useEffect, useState} from "react";
import axios from "../../core/axios.js";
import Loading from "./components/loading/loading.jsx";
import FastFoodItems from "./components/fastfood-list/fastfood-list.jsx";
import FastFoodList from "./components/fastfood-list/fastfood-list.jsx";

const FastFood = () => {
    const [loading, setLoading] = useState(false);
    const [fastFoodItems, setFastFoodItems] = useState([]);

    const fetchData = async (categoryId = null) => {
        setLoading(true);
        const response = await axios.get(`/FastFood/list/${categoryId ? '?categoryId' + categoryId : ''}`);
        setLoading(false);
        setFastFoodItems(response.data)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='wrapper bg-faded-dark'>
            <Header/>
            <CategoryList/>
            <div className='container mt-4'>
                {
                    loading ? <Loading theme='dark'/>
                        :
                        <FastFoodList fastFoodItems={fastFoodItems}/>
                }
            </div>
        </div>
    )
}
export default FastFood;