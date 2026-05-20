"use client";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart 
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);
  console.log(useCart());
  if (cart.length === 0) {
    return (
      <p className="p-6 bg-transparent dark:bg-gray-900 text-black dark:text-white ">
        Your cart is empty
      </p>
    );
  }
  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cart.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between border p-4 mb-4 rounded-2xl"
        >
          <div className="flex items-center gap-4">
            <img src={item.thumbnail} className="h-16" />
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-green-600 font-bold">${item.price}</p>
              {/* quantity controls */}
              <div className="flex items-center gap-2 mt-2">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(index)}
            className="bg-green-600 text-white px-6 py-2 rounded transition duration-200 hover:scale-105 active:scale-95"
          >
            Remove
          </button>
        </div>
      ))}
      {/* total */}
      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">Total: ${total}</h2>
      </div>
      <Link href="/checkout">
        <button className="mt-4 bg-green-600 text-white px-6 py-2 transition duration-200 hover:scale-105 active:scale-95">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}
