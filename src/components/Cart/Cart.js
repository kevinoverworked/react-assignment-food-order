import React, { Fragment, useContext, useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);

    useEffect(() => {
        let cartTotal = 0;
        
        cartCtx.cartItems.forEach((item) => {
            const total = parseInt(item.total, 10);
            const price = (total * item.price);
            cartTotal += Number(price);
        });
        setCartTotalAmount(cartTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
    }, [cartCtx]);

    const removeButtonHandler = (data) => {
        //cartCtx.onUpdateCart(data, -1);
        cartCtx.onAddToCart(data, -1);
    };

    const addButtonHandler = (data) => {
        //cartCtx.onUpdateCart(data, 1);
        cartCtx.onAddToCart(data, 1);
    };

    return (
        <Fragment>
            <ul className={classes["cart-items"]}>
                {cartCtx.cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={parseFloat(item.price)}
                        amount={item.total}
                        onRemove={() => removeButtonHandler(item)}
                        onAdd={() => addButtonHandler(item)}
                    />
                ))}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${cartTotalAmount}</span>
            </div>
            <div className={classes.actions}>
                <Button type="button" onClick={props.onClick} className={classes["button--alt"]} >Close</Button>
                <Button type="button" className={classes.button}>Order</Button>
            </div>
        </Fragment>
    );
};

export default Cart;
