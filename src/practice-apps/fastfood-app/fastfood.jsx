import Header from "./components/header/header.jsx";
import CategoryList from "./components/category-list/category-list.jsx";
import {useState} from "react";
import Loading from "./components/loading/loading.jsx";
import FastFoodList from "./components/fastfood-list/fastfood-list.jsx";
import Searchbar from "./components/searchbar/searchbar.jsx";
import notFound from '../../assets/images/404.png'
import useAxios from "./hooks/useAxios.js";

const FastFood = () => {
    const [url, setUrl] = useState('/FastFood/list');
    const [fastFoodItems, , loading] = useAxios({
        url
    })


    const searchItems = async (term) => {
        setUrl(`/FastFood/search/${term ? '?term=' + term : ''}`)
    }

    const filterItems = (categoryId) => {
        setUrl(`/FastFood/list/${categoryId ? '?categoryId=' + categoryId : ''}`)
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
                            <img className='mx-auto mt-5 d-block fade-in-horiz' src={notFound}/>
                        </>
                        :
                        undefined

                }
            </div>
        </div>
    )
}
export default FastFood;