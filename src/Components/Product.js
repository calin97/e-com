
import { NavLink } from 'react-router-dom'
import '../UI/ProductDisplay.css'
import CartContext from '../Context/CartContext';
import { useContext, useEffect } from 'react';
import { toast } from "react-hot-toast";


function Product({ productId, title, price, imageUrl, description, selectedProducts }) {


    const cartCtx = useContext(CartContext);

    const addToCartHandler = () => {
        cartCtx.addItem({
            id: productId,
            name: title,
            image: imageUrl,
            price: price,
            amount: 1

        })

        toast.success(`${title} Added to your cart`)
    }



    return (
        <>
            <div className='product-container'>
                <div className="img-container">
                    <div className='img-wrapper'>
                        <img className='product-img' src={imageUrl} alt={title} />
                    </div>
                </div>

                <div className='text-shop-wrapper'>

                    <h5 className='title-shop'>{title}</h5>
                    {/* <p className='text-description'>Description: {description}</p> */}
                    <p className='text-price'>Price: ${price}</p>
                </div>

                <div className='buttons-shop-container '>


                    <button className='add-to-cart-button' onClick={addToCartHandler}>

                        <span>
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="none" d="M9.727,7.292c0.078,0.078,0.186,0.125,0.304,0.125c0.119,0,0.227-0.048,0.304-0.125l1.722-1.722c0.078-0.078,0.126-0.186,0.126-0.305c0-0.237-0.192-0.43-0.431-0.43c-0.118,0-0.227,0.048-0.305,0.126l-0.986,0.987V1.822c0-0.237-0.193-0.43-0.431-0.43s-0.431,0.193-0.431,0.43v4.126L8.614,4.961C8.537,4.884,8.429,4.835,8.31,4.835c-0.238,0-0.43,0.193-0.43,0.43c0,0.119,0.048,0.227,0.126,0.305L9.727,7.292z M18.64,8.279H1.423c-0.475,0-0.861,0.385-0.861,0.86V10c0,0.476,0.386,0.861,0.861,0.861h0.172l1.562,7.421l0.008-0.002c0.047,0.187,0.208,0.328,0.41,0.328h12.912c0.201,0,0.362-0.142,0.409-0.328l0.009,0.002l1.562-7.421h0.173c0.475,0,0.86-0.386,0.86-0.861V9.139C19.5,8.664,19.114,8.279,18.64,8.279 M2.475,10.861h2.958l0.271,1.721H2.837L2.475,10.861z M3.018,13.443h2.823l0.271,1.722H3.38L3.018,13.443z M3.924,17.747l-0.362-1.722h2.687l0.271,1.722H3.924z M9.601,17.747H7.38l-0.271-1.722h2.491V17.747z M9.601,15.165H6.973l-0.271-1.722h2.899V15.165z M9.601,12.582H6.565l-0.271-1.721h3.307V12.582z M12.682,17.747h-2.22v-1.722h2.491L12.682,17.747z M13.09,15.165h-2.628v-1.722h2.899L13.09,15.165z M10.462,12.582v-1.721h3.307l-0.271,1.721H10.462z M16.139,17.747h-2.596l0.271-1.722H16.5L16.139,17.747z M16.683,15.165H13.95l0.271-1.722h2.823L16.683,15.165z M17.226,12.582h-2.867l0.271-1.721h2.958L17.226,12.582z M18.64,10H1.423V9.139H18.64V10z"></path>
                            </svg>
                        </span>
                    </button>

                </div>
            </div >
        </>
    )

}

export default Product