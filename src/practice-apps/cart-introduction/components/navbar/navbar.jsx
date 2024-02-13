import {RiShoppingCartLine} from "react-icons/ri";

export const Navbar = () => {
    return (
        <div className='navbar navbar-dark bg-dark shadow-sm'>
            <div className='container'>
                <a className='navbar-tool ms-3'>
                    <div className='navbar-tool-icon-box bg-secondary'>
                        <span className='navbar-tool-label d-flex justify-content-center'>4</span>
                        <RiShoppingCartLine className='navbar-tool-icon'/>
                    </div>
                </a>
                <p className='h3 mb-3 text-light'>useContext and useReducer</p>
            </div>
        </div>
    )
}