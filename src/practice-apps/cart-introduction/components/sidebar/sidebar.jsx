import {useCartContext} from "../../context/context.jsx";

export const SideBar = () => {
    const {clearCart, total} = useCartContext();
    return (
        <div className='col-lg-4 col-md-5 pt-3 pt-sm-4 border-end'>
            <div className='text-center mb-4 pb-3 border-bottom'>
                <h3 className='h5 mb-3 pb-1'>جمع کل</h3>
                <h4 className='fw-normal'>{total.toLocaleString()} تومان</h4>
            </div>
            <button className='btn btn-primary btn-shadow d-block w-100 mt-4' onClick={clearCart}>حذف همه آیتم
                ها
            </button>
        </div>
    )
}