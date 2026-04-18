"use client";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import DarkModeToggle from "./toggle";

export default function Navbar() {
  const { cart } = useCart();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <Link href="/" className="flex items-center gap-2 text-lg font-bold">
        <FaShoppingBag className="text-green-600" />
        <span>MyStore</span>
      </Link>
      <div className="flex items-center gap-6 text-sm font-medium">
        <Link href="/" className="flex items-center gap-1 hover:text-green-600 transition">
          <FaHome />
         <span>Home</span> 
        </Link>

        <Link href="/cart" className="relative">
          <FaShoppingCart />
          <span className="ml-1">Cart</span>
          {mounted && cart.length > 0 && (
            <span className="absolute -top-2 -right-4 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
