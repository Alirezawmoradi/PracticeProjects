import Header from "./components/header/header.jsx";
import CategoryList from "./components/category-list/category-list.jsx";

const FastFood = () => {
    return (
        <div className='wrapper bg-faded-dark'>
            <Header/>
            <CategoryList/>
        </div>
    )
}
export default FastFood;