import React, { useContext, useRef } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext);

    const amountInputRef = useRef();

    

    const formSubmitHandler = (event) => {
        event.preventDefault();
        //console.log(amountInputRef.current.value);
        const data = props.data;
        cartCtx.onAddToCart(data, amountInputRef.current.value);
        //cartCtx.onCartBumpHandler
    };



    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <Input
                type="number"
                label="Amount"
                name={props.name}
                min="1"
                value="1"
                ref={amountInputRef}
            />
            <Button type="submit">+ Add</Button>
        </form>
    );
};

export default MealItemForm;
