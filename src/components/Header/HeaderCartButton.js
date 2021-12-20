import React, { Fragment, useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [bumpStatus, setBumpStatus] = useState(false);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);


    const btnClasses = `${classes.button} ${bumpStatus ? classes.bump : ""}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBumpStatus(true);

        const bumptimer = setTimeout(() => {
            setBumpStatus(false);
        }, 300);

        return () => {
            clearTimeout(bumptimer);
        };
    }, [items]);

    return (
        <Fragment>
            <Button
                type="button"
                onClick={props.onClick}
                className={btnClasses}
            >
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </Button>
            
        </Fragment>
    );
};

export default HeaderCartButton;
