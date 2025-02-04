import React from "react";
import { useCart } from "@/components/CartContext/CartContext";

const CartButton = () => {
  const { cartItems } = useCart();

  return (
    <button className="relative p-2 bg-blue-600 text-white rounded">
      Cart ({cartItems.length})
    </button>
  );
};

export default CartButton;
