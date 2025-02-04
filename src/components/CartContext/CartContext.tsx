"use client"
import React, { ReactNode, useState,  createContext, useContext } from "react";



//  CartItem Interface
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

//  CartContext Interface
interface CartContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

//  Create Context
export const CartContextValue = createContext<CartContextType | undefined>(undefined);

//  Provider Component
const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <CartContextValue.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContextValue.Provider>
  );
};

export default CartContextProvider;

//  Custom Hook for Simplicity
export const useCart = () => {
  const context = useContext(CartContextValue);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
