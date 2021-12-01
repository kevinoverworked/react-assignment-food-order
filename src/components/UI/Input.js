import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <span className={classes.input}>
            <label htmlFor={props.name.toLowerCase()}>{props.label}</label>
            <input
                type={props.type}
                name={props.name.toLowerCase()}
                min={props.min}
                value={props.value}
                onChange={props.onChange}
            />
        </span>
    );
};

export default Input;
