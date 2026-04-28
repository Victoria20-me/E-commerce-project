"use client";
import { useState } from "react";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";
export default function Footer() {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };
  return (
    <footer className="relative mt-20 bg-linear-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black text-gray-700 dark:text-gray-300">
      {/* TOP SECTION */}
      <div className="h-px bg-linear-to-r from-transparent via-green-500 to-transparent">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
              MyStore
            </h2>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              We provide high-quality products at unbeatable prices. Built for
              speed, designed for simplicity, and focused on your experience.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold mb-4 text-black dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#products" className="hover:text-green-600 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition">
                  Deals
                </a>
              </li>
            </ul>
          </div>

          {/* ABOUT / CONTACT */}
          <div id="about">
            <h3 className="font-semibold mb-4 text-black dark:text-white">
              About Us
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              MyStore is your go-to ecommerce platform for quality and
              affordability. We focus on delivering a smooth and enjoyable
              shopping experience.
            </p>

            {/* Optional future upgrade */}
            <div className="flex gap-4 mt-4 text-xl">
              <FaInstagramSquare className="text-pink-600 hover:text-green-600 cursor-pointer" />
              <FaFacebookSquare className="text-blue-600  hover:text-green-600 cursor-pointer" />
              <FaTwitterSquare className="text-blue-400  hover:text-green-600 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 dark:border-gray-700" />

        {/* BOTTOM */}
        <div className="text-center py-5 text-sm text-gray-500 dark:text-gray-400">
          © 2026 MyStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
