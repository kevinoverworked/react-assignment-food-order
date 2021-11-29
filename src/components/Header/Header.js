import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import mainImage from "./Assets/meals.jpg";

const Header = () => {
    return (
        <Fragment>
            <div className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </div>
            <div className={classes["main-image"]}>
                <img src={mainImage} alt="Assortment of food on a table"  />
            </div>
        </Fragment>
    );
};

export default Header;
