import Header from "./components/header/header.jsx";
import CategoryList from "./components/category-list/category-list.jsx";
import {useEffect, useState} from "react";
import axios from "../../core/axios.js";
import Loading from "./components/loading/loading.jsx";
import FastFoodList from "./components/fastfood-list/fastfood-list.jsx";
import Searchbar from "./components/searchbar/searchbar.jsx";
import notFound from '../../assets/images/404.png'

const FastFood = () => {
    const [loading, setLoading] = useState(false);
    const [fastFoodItems, setFastFoodItems] = useState([]);

    const fetchData = async (categoryId = null) => {
        setLoading(true);
        const response = await axios.get(`/FastFood/list/${categoryId ? '?categoryId=' + categoryId : ''}`);
        setLoading(false);
        setFastFoodItems(response.data)
    }

    const searchItems = async (term) => {
        setLoading(true);
        const response = await axios.get(`/FastFood/search/${term ? '?term=' + term : ''}`)
        setLoading(false);
        setFastFoodItems(response.data)
    }

    useEffect(() => {
        fetchData();
    }, []);

    const filterItems = (categoryId) => {
        fetchData(categoryId);
    }

    return (
        <div className='wrapper bg-faded-dark'>
            <Header/>
            <CategoryList filterItems={filterItems}>
                <Searchbar searchItems={searchItems}/>
            </CategoryList>
            <div className='container mt-4'>
                {
                    loading ? <Loading theme='dark'/>
                        :
                        <FastFoodList fastFoodItems={fastFoodItems}/>
                }
                {
                    fastFoodItems.length === 0 ?
                        <>
                            <div className='alert alert-warning text-center'>
                                برای کلیدواژه فوق هیچ آیتمی یافت نشد
                            </div>
                            <img className='mx-auto mt-5 d-block' src={notFound}/>
                        </>
                        :
                        undefined

                }
            </div>
        </div>
    )
}
export default FastFood;