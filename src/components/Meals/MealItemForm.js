import React, { useContext, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext);
    const [amount, setAmount] = useState("1");

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const data = props.data;
        cartCtx.onAddToCart(data, amount);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <Input
                type="number"
                label="Amount"
                name={props.name}
                min="1"
                value={amount}
                onChange={amountChangeHandler}
            />
            <Button type="submit">+ Add</Button>
        </form>
    );
};

export default MealItemForm;
