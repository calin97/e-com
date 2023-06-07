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
        <div className={classes.cartWrapper}>

            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span className={classes.badge}>
                <span className={classes.cartItemsNum}>{numbOfCartItems}</span>
            </span>
        </div>
    </button>
}

export default HeaderCartButton;