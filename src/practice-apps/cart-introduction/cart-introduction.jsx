import {Navbar} from "./components/navbar/navbar.jsx";
import {SideBar} from "./components/sidebar/sidebar.jsx";
import {CartItems} from "./components/cart-item/cart-items.jsx";
import Loading from "../fastfood-app/components/loading/loading.jsx";
import {useCartContext} from "./context/context.jsx";
import {EmptyCart} from "./components/empty-cart/empty-cart.jsx";


const CartIntroduction = () => {
    const {foodItems, loading} = useCartContext();

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
                            <div className='col-lg-8 col-md-7 pt-sm-5'>
                                {
                                    loading ?
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Loading theme='primary'/>
                                        </div>
                                        :
                                        foodItems.map((items) => {
                                            return <CartItems key={items.id} {...items}/>
                                        })
                                }
                            </div>
                            {
                                foodItems.length === 0 && !loading && <EmptyCart/>
                            }
                            {
                                foodItems.length > 0 && <SideBar/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartIntroduction;