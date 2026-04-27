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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-10 text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* CART ITEMS */}
      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="w-full flex flex-col sm:flex-row sm:items-center gap-4 border p-4 rounded-lg overflow-hidden"
          >
            {/* LEFT SIDE */}
            <div className="flex items-center gap-3 w-full sm:w-auto min-w-0">
              <img
                src={item.thumbnail}
                className="h-14 w-14 object-contain shrink-0"
              />

              <div className="min-w-0">
                <h2 className="font-semibold text-sm sm:text-base truncate">
                  {item.title}
                </h2>

                <p className="text-gray-500 text-sm">
                  ${item.price} x {item.quantity}
                </p>
              </div>
            </div>

            {/* RIGHT SIDE (PRICE) */}
            <div className="w-full sm:w-auto sm:ml-auto text-left sm:text-right">
              <p className="text-lg font-bold text-green-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="mt-6 flex justify-between sm:justify-end">
        <h2 className="text-lg sm:text-xl font-bold">Total: ${total}</h2>
      </div>

      {/* BUTTON */}
      <div className="mt-4 w-full sm:flex sm:justify-end">
        <button
          onClick={handleOrder}
          disabled={processing}
          className="w-full sm:w-auto bg-green-600 text-white py-3 px-6 rounded-md font-bold transition hover:scale-105 active:scale-95"
        >
          {processing ? "Processing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
}
