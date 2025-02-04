"use client";
import React from "react";
import { useCart } from "@/components/CartContext/CartContext";

const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="border p-2 my-2">
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
