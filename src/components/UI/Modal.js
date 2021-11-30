import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick} />
};

const ModalOverlay = (props) => {
    const cartCtx = useContext(CartContext);
    return (
        <Card className={classes.modal}>
           <Cart />
        </Card>     
    );
};

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClearForm}/>, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay />, document.getElementById("modal-root"))}
        </Fragment>
    );
};

export default Modal;