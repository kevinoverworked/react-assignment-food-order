import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
    const cartCtx = useContext(CartContext);
    const [count, setCount] = useState(0);
    const [bumpStatus, setBumpStatus] = useState("");

    useEffect(() => {
        clearTimeout();
        setCount(cartCtx.cartTotal);

        const bumptimer = setTimeout(() => {
            setBumpStatus("");
        }, 500);
        
        return () => {
            clearTimeout(bumptimer);
            setBumpStatus("bump");
        };
    }, [cartCtx]);

    return (
        <div className={`${classes.button} ${
            bumpStatus === "bump" ? classes.bump : ""
            }`}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{count}</span>
        </div>
    );
};

export default HeaderCartButton;