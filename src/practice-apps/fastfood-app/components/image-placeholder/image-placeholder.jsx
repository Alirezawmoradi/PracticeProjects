import './image-placeholder.css'
const ImagePlaceholder = ({imageUrl}) => {
    return (
        <div className='card__placeholder'>
            <img className='card-img-top' src={imageUrl} alt='فست فودها'/>
        </div>)
}
export default ImagePlaceholder;