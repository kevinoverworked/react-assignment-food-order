import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const cartItemRemoverHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const orderHandler = () => {
        console.log("Ordering..");
        cartCtx.items.forEach((item) => { console.log(`${item.name} x${item.amount}`) });
        console.log("Total Amount: " + totalAmount);
    };

    return (
        <Modal onClose={props.showHideModal}>
            <ul className={classes["cart-items"]}>
                {cartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={parseFloat(item.price)}
                        amount={item.amount}
                        onAdd={cartItemAddHandler.bind(null, item)}
                        onRemove={cartItemRemoverHandler.bind(null, item.id)}
                    />
                ))}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <Button type="button" onClick={props.showHideModal} className={classes["button--alt"]} >Close</Button>
                {hasItems && <Button type="button" onClick={orderHandler} className={classes.button}>Order</Button> }
            </div>
        </Modal>
    );
};

export default Cart;
