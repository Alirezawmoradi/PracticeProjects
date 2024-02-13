import {RiCloseCircleLine} from "react-icons/ri";

export const CartItems = ({id, imageUrl, name, price}) => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div className='d-block d-sm-flex align-items-center text-center gap-5 mt-5'>
                <img src={imageUrl} width='120' className='ms-3 rounded' alt='foods'/>
                <div>
                    <h3 className='product-title fs-base mb-2'>
                        <p>{name}</p>
                    </h3>
                    <div className='fs-lg text-accent pt-2 d-flex justify-content-start'>{price} تومان</div>
                </div>
            </div>
            <div className='pt-2 pt-sm-0 ps-sm-0 mx-auto mx-sm-0 text-center text-sm-end'>
                <label className='form-label'>
                    تعداد
                </label>
                <input className='form-control' type='number' value={id} onChange={()=>{}}/>
                <button className='btn btn-link text-danger pe-0' type='button'>
                    <RiCloseCircleLine className='ms-1'/>
                    <span className='fs-sm'>حذف</span>
                </button>
            </div>
        </div>
    )
}