import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    return <CartContext.Provider value={{ cartList, setCartList }}>
        { children }
    </CartContext.Provider>
}

// Hooks => functions that let you use state and other React features in functional components

export const useCart = () => {
    return useContext(CartContext)
}

