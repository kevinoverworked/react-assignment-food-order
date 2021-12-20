import React, { useContext, useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);

    useEffect(() => {
        let cartTotal = 0;
        
        cartCtx.cartItems.forEach((item) => {
            const total = parseInt(item.total, 10);
            cartTotal += Number(total * item.price);
        });
        setCartTotalAmount(cartTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
    }, [cartCtx]);

    const addRemoveHandler = (data, amount) => {
        cartCtx.onAddToCart(data, amount);
    };

    const orderHandler = () => {
        console.log("Ordering..");
        cartCtx.cartItems.forEach((item) => { console.log(`${item.name} x${item.total}`) });
        console.log("Total Amount: " + cartTotalAmount);
    };

    return (
        <Modal onClose={props.showHideModal}>
            <ul className={classes["cart-items"]}>
                {cartCtx.cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={parseFloat(item.price)}
                        amount={item.total}
                        onRemove={() => addRemoveHandler(item, -1)}
                        onAdd={() => addRemoveHandler(item, 1)}
                    />
                ))}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${cartTotalAmount}</span>
            </div>
            <div className={classes.actions}>
                <Button type="button" onClick={props.showHideModal} className={classes["button--alt"]} >Close</Button>
                <Button type="button" onClick={orderHandler} className={classes.button}>Order</Button>
            </div>
        </Modal>
    );
};

export default Cart;
