import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick} />
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
           <div className={classes.content} onClick={props.onClick}>{props.children}</div>
        </div>     
    );
};

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClearModal}/>, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay onClick={props.onClearModal}>{props.children}</ModalOverlay>, document.getElementById("modal-root"))}
        </Fragment>
    );
};

export default Modal;