import '../UI/CartModal.css'
import { useOutsideClick } from '../Hooks/onCloseModalCart';
import CartContext from '../Context/CartContext';
import { useContext, useEffect } from 'react';
import CartItem from './CartItem';



function CartModal({ selectedProducts, setIsCartVisible }) {

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const closeCartHandler = () => {
        setIsCartVisible(false)
    }
    const myCloseRefModal = useOutsideClick(closeCartHandler)

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)

    }

    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    }






    const cartItems = <ul className='div-ul-products'>{cartCtx.items.map(item => <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} image={item.image} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />)}</ul>



    return (

        <>
            <div className="backdrop">
                <div className="cart-modal" ref={myCloseRefModal}>
                    <h2 className=''>Cart Items</h2>
                    {/* {cartItems} */}
                    {!hasItems ? <h3>No products selected, start shopping</h3> : cartItems}
                    <div className='total'>
                        <span >Total Amount</span>
                        <span >{totalAmount}</span>

                    </div>
                    <div className='div-button'>
                        <button className='button' onClick={closeCartHandler}>Close</button>
                        {hasItems && <button className='button'>Order</button>}
                    </div>

                </div>

            </div>
        </>
    )
}

export default CartModal