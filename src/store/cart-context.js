import React, { useState } from "react";

const CartContext = React.createContext({
    cartTotal: 0,
    cartItems: [],
    onUpdateCart: () => {}
});

export const CartContextProvider = (props) => {
    const [cartTotal, setCartTotal] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const updateCartTotal = (amount) => {
        const newTotal = parseInt(cartTotal, 10) + parseInt(amount, 10);
        setCartTotal(newTotal);
    };

    const updateCartArray = (data, amount, cartIndex) => {
        let newArray = [...cartItems];
        const newTotal = parseInt(newArray[cartIndex].total, 10) + parseInt(amount, 10);

        if (newTotal > 0) {
            newArray[cartIndex] = {
                ...newArray[cartIndex],
                total: newTotal
            };
        } else {
            newArray = newArray.filter((item) => item.id !== data.id);
        }
        return newArray;
    };

    const updateCartHandler = (data, amount) => {
        const cartIndex = cartItems.findIndex(item => item.id === data.id);
        
        if (cartIndex < 0) {
            data["total"] = parseInt(amount, 10);
            setCartItems([...cartItems, data]);
        } else {
            let newArray = updateCartArray(data, amount, cartIndex);
            setCartItems(newArray);
        }
        
        updateCartTotal(amount);
    };

    return (
        <CartContext.Provider
            value={{
                cartTotal: cartTotal,
                cartItems: cartItems,
                onUpdateCart: updateCartHandler,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;