import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
    const cartCtx = useContext(CartContext);

    return (
        <div className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartCtx.cartTotal}</span>
        </div>
    );
};

export default HeaderCartButton;