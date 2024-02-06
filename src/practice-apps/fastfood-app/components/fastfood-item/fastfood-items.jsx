import {HiShoppingCart} from 'react-icons/hi';
import {useEffect, useState} from "react";
import ImagePlaceholder from "../image-placeholder/image-placeholder.jsx";

const FastFoodItems = ({name, price, ingredients, imageUrl, delay}) => {
    const [imagePlaceholder, setImagePlaceholder] = useState(true);

    useEffect(() => {
        setImagePlaceholder(imageUrl)
    }, [imageUrl]);

    return (
        <div className='card product-card h-100 border-0 shadow-sm pb-1 fade-in-horiz'
             style={{animationDelay: `${delay}s`}}>
            <span className='badge badge-end badge-shadow bg-success fs-md fw-medium'>
                قیمت : {price.toLocaleString()} تومان
            </span>
            {
                imagePlaceholder ? <ImagePlaceholder imageUrl={imageUrl}/>
                    :
                    <img className='card-img-top' src={imageUrl} alt='فست فودها'/>
            }

            <div className='card-body text-center pt-3 pb-4 d-flex flex-column'>
                <h5 className='mb-2'>{name}</h5>
                <div className='fs-sm fw-bold text-muted mb-3'>{ingredients}</div>
                <button className='btn btn-outline-success btn-sm w-100 mt-auto fw-bold'>
                    <HiShoppingCart className='fs-5 ms-3'/>
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
    )
}
export default FastFoodItems;