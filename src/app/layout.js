"use client";
import Navbar from "./components/navbar";
import { CartProvider } from "./context/CartContext";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";

// export const metadata = {
//   title: "MyStore",
//   description: "Shop the best products at great prices",
// }; 

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen w-full bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <CartProvider>
          <Navbar />

          {children}
          <Footer />
          <Toaster position="top-right " />
        </CartProvider>
      </body>
    </html>
  );
}
