"use client";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const {cart} = useCart();

  return (
    <nav>
      <Link href="/"></Link>
      <Link href="/cart">
        {" "}
        <FaShoppingCart />
        Cart ({cart.length})
      </Link>
    </nav>
  );
}
