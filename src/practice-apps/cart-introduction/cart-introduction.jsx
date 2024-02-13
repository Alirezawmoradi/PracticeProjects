import useFoodData from "./hooks/useFoodData.jsx";
import {Navbar} from "./components/navbar/navbar.jsx";
import fastfoodItems from "../fastfood-app/components/fastfood-item/fastfood-items.jsx";
import {SideBar} from "./components/sidebar/sidebar.jsx";
import {CartItems} from "./components/cart-item/cart-items.jsx";
import {useCartContext} from "./context/context.jsx";
import {RiShoppingCartLine} from "react-icons/ri";


const CartIntroduction = () => {
    const [foodItems, loading,] = useFoodData({
        url: '/FastFood/list',
    });
    return (
        <>
            <Navbar/>
            <div className='page-title-overlap bg-dark pt-1'>
                <div className='container d-lg-flex justify-content-between py-4'>
                    <div className='order-lg-1 pe-lg-4 text-center text-lg-start'>
                        <h1 className='h3 mt-3 mb-0 text-light'>سبد خرید</h1>
                    </div>
                </div>
            </div>
            <div className='container pt-4 pb-3 py-sm-4 bg-light rounded shadow-sm'>
                <div className='rounded-3 mt-4 mb-5'>
                    <div className='px-3 px-sm-4 px-xl-5 pt-1 pb-4 pb-sm-5'>
                        <div className='row'>
                            {
                                fastfoodItems.length > 0 ?
                                    <>
                                        <div className='col-lg-8 col-md-7 pt-sm-5'>
                                            {
                                                foodItems.map((items) => {
                                                    return <CartItems key={items.id} {...items}/>
                                                })
                                            }
                                        </div>
                                        <SideBar/>
                                    </>
                                    :
                                    <>
                                        <RiShoppingCartLine style={{fontSize: '8rem'}}/>
                                        <h5 className='text-center'>هیچ آیتمی در سبد خرید وجود ندارد</h5>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartIntroduction;