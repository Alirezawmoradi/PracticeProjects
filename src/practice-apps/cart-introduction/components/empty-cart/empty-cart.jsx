import {RiShoppingCartLine} from "react-icons/ri";

export const EmptyCart = () => {
    return (
        <>
            <RiShoppingCartLine style={{fontSize: '8rem'}}/>
            <h5 className='text-center'>هیچ آیتمی در سبد خرید وجود ندارد</h5>
        </>
    )
}