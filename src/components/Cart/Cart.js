import React, { Fragment, useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import classes from "./Cart.module.css";

const Cart = () => {
    const cartCtx = useContext(CartContext);
    return (
        <Fragment>
            <ul className={classes["cart-items"]}>
                {cartCtx.cartItems.map((item) => (
                    <CartItem
                        name={item.name}
                        price={item.price}
                        amount={item.total}
                    />
                ))}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span></span>
            </div>
            <div className={classes.actions}>
                <Button type="button" className={classes["button--alt"]} >Close</Button>
                <Button type="button" className={classes.button}>Order</Button>
            </div>
        </Fragment>
    );
};

export default Cart;
