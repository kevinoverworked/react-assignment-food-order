import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";

import classes from "./AvailableMeals.module.css";
import DUMMY_MEALS from "../../data/dumy-meals";

const data = DUMMY_MEALS();

const AvailableMeals = () => {
    return (
        <Card className={classes.meals}>
            <ul>
                {data.map((item) => {
                    return <MealItem
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />;
                })}
            </ul>
        </Card>
    );
};

export default AvailableMeals;
