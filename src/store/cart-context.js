import React, { useState } from "react";

const CartContext = React.createContext({
    cartTotal: 0,
    onAddToCart: () => {},
    cartItems: []
});

export const CartContextProvider = (props) => {
    const [cartTotal, setCartTotal] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const updateCart = (data, amount) => {
        const cartIndex = cartItems.findIndex(item => item.id === data.id);
        
        if (cartIndex < 0) {
            data["total"] = parseInt(amount, 10);
            return [...cartItems, data];

        } else {
            const newArray = [...cartItems];
            const newTotal = parseInt(newArray[cartIndex].total, 10) + parseInt(amount, 10);

            newArray[cartIndex] = {
                ...newArray[cartIndex],
                total: newTotal
            };
            
            return newArray;
        }
    };

    

    const addToCartHandler = (data, amount) => {
        const newTotal = parseInt(cartTotal, 10) + parseInt(amount, 10);
        setCartTotal(newTotal);
        setCartItems(updateCart(data, amount));
    }

    return (
        <CartContext.Provider
            value={{
                cartTotal: cartTotal,
                onAddToCart: addToCartHandler,
                cartItems: cartItems
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;