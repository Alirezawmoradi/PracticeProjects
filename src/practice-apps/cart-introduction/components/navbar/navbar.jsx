import {RiShoppingCartLine} from "react-icons/ri";
import {useCartContext} from "../../context/context.jsx";

export const Navbar = () => {
    const {foodItems} = useCartContext();
    return (
        <div className='navbar navbar-dark bg-dark shadow-sm'>
            <div className='container'>
                <a className='navbar-tool ms-3'>
                    <div className='navbar-tool-icon-box bg-secondary'>
                        <span className='navbar-tool-label d-flex justify-content-center'>{foodItems.length}</span>
                        <RiShoppingCartLine className='navbar-tool-icon'/>
                    </div>
                </a>
                <p className='h3 mb-3 text-light mt-3'>useContext and useReducer</p>
            </div>
        </div>
    )
}