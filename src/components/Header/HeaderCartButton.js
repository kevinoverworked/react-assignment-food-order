import React, { Fragment, useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
    const cartCtx = useContext(CartContext);
    const [count, setCount] = useState(0);
    const [bumpStatus, setBumpStatus] = useState("");
    const [showModal, setShowModal] = useState(false);

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

    const buttonClickHandler = (event) => {
        event.preventDefault();
        setShowModal(true);
        console.log("clicked");
    };

    const clearFormHandler = () => {
        setShowModal(false);
    };

    return (
        <Fragment>
            <Button
                type="button"
                onClick={buttonClickHandler}
                className={`${classes.button} ${
                    bumpStatus === "bump" ? classes.bump : ""
                }`}
            >
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{count}</span>
            </Button>
            {showModal && <Modal onClearForm={clearFormHandler} />}
        </Fragment>
    );
};

export default HeaderCartButton;
