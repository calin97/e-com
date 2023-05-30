
import { NavLink } from 'react-router-dom'
import '../UI/ProductDisplay.css'
import CartContext from '../Context/CartContext';
import { useContext, useEffect } from 'react';

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
    }


    // const addToCartHandler = () => {


    //     // // verifici (dupa id) daca produsul asta e deja in selectedProducts
    //     // var indexOfProduct = selectedProducts.findIndex(product => {
    //     //     console.log(product.productId);
    //     //     console.log(selectedProducts);
    //     //     return product.productId == productId

    //     // })


    //     // if (indexOfProduct !== -1) {
    //     //     // daca e, maresti cantitatea - in selectedProducts
    //     //     selectedProducts[indexOfProduct].quantity++
    //     // } else {
    //     //     // daca nu e, il adaugi
    //     //     let product = { productId: productId, title: title, price: price, imageUrl: imageUrl, quantity: 1 }
    //     //     selectedProducts.push(product)

    //     // }


    //     // console.log(selectedProducts);
    // }


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

                    <NavLink to='/single-product'>{title}</NavLink>
                    {/* <p className='text-description'>Description: {description}</p> */}
                    <p className='text-price'>Price: ${price}</p>
                    <button className='cart-button' onClick={addToCartHandler}>add  cart</button>
                </div>
            </div>
        </>
    )

}

export default Product