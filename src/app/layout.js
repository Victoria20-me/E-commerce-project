"use client";
import Navbar from "./components/navbar";
import { CartProvider } from "./context/CartContext";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import {useState, useEffect} from "react"

export default function RootLayout({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if(dark) {
document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },[dark]);
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
       
        <CartProvider>
             <button onClick={() => setDark(!dark)}>
          {dark ? "☀" : "🌙"}
        </button>
          <Navbar />
        
          {children}
          <Toaster position="top-right" />
          
        </CartProvider>
      </body>
    </html>
  );
}
