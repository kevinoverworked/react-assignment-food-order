import React from "react";
import Header from "./components/Header/Header";
import MealSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";

import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header />
            <MealSummary />
            <AvailableMeals />
        </div>
    );
};

export default App;
