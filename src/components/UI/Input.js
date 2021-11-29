import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <fieldset className={classes.input}>
            <label for={props.name.toLowerCase()}>{props.label}</label>
            <input
                type={props.type}
                name={props.name.toLowerCase()}
                min={props.min}
                value={props.value}
            />
        </fieldset>
    );
};

export default Input;
