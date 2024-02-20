import pizza from "../../../assets/pizza.jpg";

export const HeroSection = () => {
    return (
        <div className='row border-bottom'>
            <div className='col-md-6'>
                <img src={pizza}/>
            </div>
            <div className='col-md-6 pt-4'>
                <div className='product-details pb-3'>
                    <div className='mb-3'>
                            <span className='h3 fw-normal text-accent'>
                                قیمت: 158,000
                            </span>
                    </div>
                    <form className='mb-grid-gutter'>
                        <div className='row mx-n2'>
                            <div className='col-6 px2'>
                                <div className='mb-3'>
                                    <label className='form-label'>اندازه :</label>
                                    <select className='form-select'>
                                        <option value='small'>کوچک</option>
                                        <option value='medium'>متوسط</option>
                                        <option value='large'>بزرگ</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='mb-3'>
                                    <label className='form-label'>تعداد :</label>
                                    <select className='form-select'>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button className='btn btn-info btn-shadow d-block w-100'>افزودن به سبد خرید</button>
                    </form>
                    <h5 className='h6 mb-3 pb-3 border-bottom'>پیتزا استیک (یک نفره)</h5>
                    <h6 className='fs-sm mb-2'>ترکیبات :</h6>
                    <p className="fs-sm">خمیر پیتزا کلاسیک ۲۶ سانتی متری، استیک فیله گوشت، پنیر، قارچ، فلفل دلمه ای،
                        سس کچاپ مخصوص</p>
                </div>
            </div>
        </div>
    )
}