import React, { createContext, ReactNode, useEffect, useState } from "react";
import { food_list } from "../assets";


// Define the type for the context value
interface CartItems {
  [key: string]: number; // Represents itemId as key and quantity as value
}

interface StoreContextType {
  food_list: typeof food_list;
  cartItems: CartItems;
  setCartItems: React.Dispatch<React.SetStateAction<CartItems>>;
  addToCart: (itemId: string | number) => void;
  removeFromCart: (itemId: string | number) => void;
}

// Initialize the StoreContext with a more specific type
export const StoreContext = createContext<StoreContextType | null>(null);

interface StoreContextProviderProps {
  children: ReactNode;
}

const StoreContextProvider: React.FC<StoreContextProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItems>({});

  const addToCart = (itemId: string | number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Increment or initialize to 1
    }));
  };

  const removeFromCart = (itemId: string | number) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId]) {
        updatedCart[itemId] -= 1; // Decrease the quantity
        if (updatedCart[itemId] === 0) delete updatedCart[itemId]; // Remove if quantity is 0
      }
      return updatedCart;
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue: StoreContextType = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
