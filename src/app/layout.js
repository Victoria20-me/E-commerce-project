"use client";
import Navbar from "./components/navbar";
import { CartProvider } from "./context/CartContext";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Navbar />
          {children}
          <Toaster position="top-right" />
        </CartProvider>
      </body>
    </html>
  );
}
