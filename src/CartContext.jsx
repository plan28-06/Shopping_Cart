import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

import React from "react";

const CartProvider = ({ children }) => {
    const [selected, setselected] = useState({});
    const removeFromCart = (id) => {
        const newCart = { ...selected };
        delete newCart[id];
        return newCart;
    };

    return (
        <CartContext.Provider value={{ selected, setselected, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
