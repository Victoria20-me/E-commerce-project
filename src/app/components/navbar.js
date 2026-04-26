"use client";
import Link from "next/link";
import {
  FaShoppingCart,
  FaShoppingBag,
  FaHome,
  FaSearch,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import DarkModeToggle from "./toggle";

export default function Navbar() {
  const { cart } = useCart();

  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // });

  // const[srolled, setScrolled] = useState(false);

  // useEffect (() => {
  //   const handleScroll = () => {
  //     setScrolled(window.removeEventListener("sroll", handleScroll))
  //   }
  //   window.addEventListener("sroll", handleScroll);
  //   return() => window.removeEventListener("scroll", handleScroll);
  // },[])

  return (
    <nav className="absolute top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/10 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl md:text-2xl font-bold"
        >
          <FaShoppingBag className="text-green-600 text-xl" />
          <span>MyStore</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-green-600 transition"
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link href="">
          Products
          </Link>
          <Link
            href="/cart"
            className=" relative flex items-center gap-1 hover:text-green-600 transition"
          >
            <FaShoppingCart />
            <span className="ml-1">Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
          <button className="text-black dark:text-white hover:text-green-400">
            <FaSearch />
          </button>
          <Link href="#about" className="hover:text-green-400">
            About
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
