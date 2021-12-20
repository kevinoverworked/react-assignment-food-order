import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <span className={classes.input}>
            <label htmlFor={props.input.id.toLowerCase()}>{props.label}</label>
            <input {...props.input} />
        </span>
    );
};

export default Input;
