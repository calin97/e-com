import CartIcon from "./CartIcon";
import classes from '../UI/HeaderCartButton.module.css'
import CartContext from "../Context/CartContext";
import { useContext } from "react";



function HeaderCartButton({ setIsCartVisible }) {

    const crtCtx = useContext(CartContext)

    const numbOfCartItems = crtCtx.items.reduce((curNumber, item) => {

        return curNumber + item.amount;
    }, 0)


    const openCartHandler = () => {
        setIsCartVisible(true)

    }

    return <button onClick={openCartHandler} className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numbOfCartItems}</span>
    </button>
}

export default HeaderCartButton;