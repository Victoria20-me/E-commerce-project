"use client";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function checkOutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [processing, setProcessing] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  //  calculate total
  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  // handle order
  const handleOrder = () => {
    setProcessing(true);
    toast.success("Order placed successful 🎉  ");
    clearCart(); //clears state and local storage
    setTimeout(() => {
      router.push("/success");
    }, 1500);
  };
  //empty cart check
  if (cart.length === 0) {
    return <p className="p-6">Your cart is empty</p>;
  }

  return (
    <div className="flex flex-col sm:flex-row sm:item-center sm:justify-between gap-4 border p-4 rounded  bg-transparent dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      {cart?.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border p-4 mb-4 rounded"
        >
          <div className="flex items-center gap-4">
            <img src={item.thumbnail} className="h-16" />
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p className="font-bold">
                ${item.price} x {item.quantity}
              </p>
            </div>
          </div>
          <p className="text-lg font-bold">${item.price * item.quantity}</p>
        </div>
      ))}
      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">Total: ${total}</h2>
      </div>
      <button
        onClick={handleOrder}
        disabled={processing}
        className=" bg-green-600 text-white py-2 px-6 rounded-md font-bold transition duration-200 hover:scale-105 active:scale-95"
      >
        {processing ? "Processing...." : "Place Order"}
      </button>
    </div>
  );
}
