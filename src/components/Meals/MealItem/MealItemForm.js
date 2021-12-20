import React, { useState } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [amount, setAmount] = useState("1");

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddToCart(parseInt(amount));
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <Input label="Amount" input={{
                type: "number",
                id: props.name.toLowerCase(),
                min: "1",
                step: "1",
                value: amount,
                onChange: amountChangeHandler
            }}/>
            <Button type="submit">+ Add</Button>
        </form>
    );
};

export default MealItemForm;
