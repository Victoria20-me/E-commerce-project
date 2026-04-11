"use client";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { cart } = useCart();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <Link href="/">
        <h1 className="text-xl font-bold text-blak cursor-pointer">
          <FaShoppingBag />
          MyStore
        </h1>
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-green-600">
          <FaHome />
          Home
        </Link>

        <Link href="/cart" className="relative">
          {/* {" "} */}
          <FaShoppingCart />
          <span className="ml-1">Cart</span>
          { mounted && cart.length > 0 && (
            <span className="absolute -top-2 -right-4 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
