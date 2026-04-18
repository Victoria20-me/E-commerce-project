"use client";
import Navbar from "./components/navbar";
import { CartProvider } from "./context/CartContext";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import DarkModeToggle from "./components/toggle";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen w-full bg-white dark:bg-gray-900  text-black dark:text-white">
        <CartProvider>
          <Navbar />

          {children}
          <Toaster position="top-right" />
        </CartProvider>
      </body>
    </html>
  );
}
