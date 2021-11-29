import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const formSubmitHandler = () => {
        console.log("submit");
    };

    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <Input type="number" label="Amount" name={props.name} min="1" value="1" />
            <Button type="submit">+ Add</Button>
        </form>
    );
};

export default MealItemForm;