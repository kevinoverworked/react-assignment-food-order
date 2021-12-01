import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Cart from "../Cart/Cart";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick} />
};

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
           <Cart onClick={props.onClick} />
        </Card>     
    );
};

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClearModal}/>, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay onClick={props.onClearModal} />, document.getElementById("modal-root"))}
        </Fragment>
    );
};

export default Modal;