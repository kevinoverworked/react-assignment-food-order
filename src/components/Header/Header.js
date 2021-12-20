import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import mainImage from "../../assets/meals.jpg";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.showHideModal} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mainImage} alt="Assortment of food on a table"  />
            </div>
        </Fragment>
    );
};

export default Header;
