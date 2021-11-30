import React, { useState, useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    const [inputField, setInputField] = useState("1")
    const inputRef = useRef();

    const inputChangeHandler = (event) => {
        setInputField(inputRef.current.value);
    };

    useImperativeHandle(ref, () => {
        return {
            value: inputRef.current.value
        }
    });
    
    return (
        <fieldset className={classes.input}>
            <label htmlFor={props.name.toLowerCase()}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                name={props.name.toLowerCase()}
                min={props.min}
                value={inputField}
                onChange={inputChangeHandler}
            />
        </fieldset>
    );
});

export default Input;
