
import '../UI/ProductDisplay.css'

function Product({ title, price, imageUrl, description }) {
    return (
        <>
            <div className='product-container'>
                <div className="img-container">
                    <div className='img-wrapper'>
                        {/* img */}
                        <img className='product-img' src={imageUrl} alt={title} />
                    </div>
                </div>

                <div className='text'>
                    <h3>{title}</h3>
                    {/* <p className='text-description'>Description: {description}</p> */}
                    <p className='text-price'>Price: ${price}</p>
                    <button className='cart-button'>add to cart</button>
                </div>
            </div>
        </>
    )

}

export default Product