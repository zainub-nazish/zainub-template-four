import React from "react";
import { useCart } from "./CartContext/CartContext";

interface Product {
  id: string;
  name: string;
  price: number;
}

const AddToCartButton = ({ product }: { product: Product }) => {
  const { cartItems, setCartItems } = useCart();

  const addToCart = () => {
    const existingItem = cartItems.find((item: Product & { quantity: number }) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item: Product & { quantity: number }) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <button
      onClick={addToCart}
      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;


