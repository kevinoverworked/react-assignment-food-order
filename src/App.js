import React, { useState } from "react";
import Header from "./components/Header/Header";
import MealSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import "./App.css";

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const modalHandler = (val) => {
        setShowModal(val);
    };

    return (
        <CartProvider>
            {showModal && <Cart showHideModal={() => modalHandler(false)} />}
            <Header showHideModal={() => modalHandler(true)} />
            <MealSummary />
            <AvailableMeals />
        </CartProvider>
    );
};

export default App;
