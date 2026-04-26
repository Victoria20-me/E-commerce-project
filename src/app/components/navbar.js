"use client";
import Link from "next/link";
import { FaShoppingCart, FaShoppingBag, FaSearch } from "react-icons/fa";

import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import DarkModeToggle from "./toggle";

export default function Navbar() {
  const { cart } = useCart();

  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // });

  // const[scrolled, setScrolled] = useState(false);

  // useEffect (() => {
  //   const handleScroll = () => {
  //     setScrolled(window.removeEventListener("sroll", handleScroll))
  //   }
  //   window.addEventListener("sroll", handleScroll);
  //   return() => window.removeEventListener("scroll", handleScroll);
  // },[])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/30 dark:bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl md:text-2xl font-bold"
        >
          <FaShoppingBag className="text-green-600" />
          <span>MyStore</span>
        </Link>
        <div className="hidden md:flex justify-center gap-8 font-medium">
          <Link href="/" className=" hover:text-green-600 transition">
            <span>Home</span>
          </Link>
          <Link href="#products" className=" hover:text-green-600">
            Products
          </Link>
          <Link href="#" className=" hover:text-green-600">
            Deals
          </Link>
          <Link href="#about" className="hover:text-green-600">
            About
          </Link>
        </div>
        <div className="flex items-center justify-end gap-5">
          <Link
            href="/cart"
            className=" relative hover:text-green-600 transition"
          >
            <FaShoppingCart />
            <span className="ml-1">Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
          <button className="text-black dark:text-white hover:text-green-400">
            <FaSearch className="cursor-pointer" />
          </button>

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
