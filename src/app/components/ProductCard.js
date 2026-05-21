"use client";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <Link key={product.id} href={`/product/${product.id}`} className="block h-full">
      <div className="relative flex flex-col h-fullborder border-gray-200 dark:border-gray-700 shadow-sm rounded-xl sm:p-4 cursor-pointer hover:shadow-xl group-hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-gray-800 mb-6 overflow-hidden">
        <div className="absolute top-4 right-4">
          <FaHeart
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
            className={` text-lg transition duration-300 ${
              liked ? "text-red-500" : "text-gray-400 hover:text-red-400"
            }`}
          />
        </div>
        <div className="flex justify-center items-center mb-6 mt-2">
          <img
            src={product.thumbnail}
            loading="lazy"
            alt={product.title}
            className="h-32 sm:h-40 object-contain transition duration-300 hover:scale-105"
          />
        </div>

        <h2 className="text-sm font-semibold sm:text-base mt-3 text-gray-800 dark:text-gray-200 mb-3 line-clamp-2 min-h-12">
          {product.title}
        </h2>
        <p className="text-2xl font-bold mb-3 text-green-600">
          ${product.price.toFixed(2)}
        </p>

        <div className="flex items-center gap-1 mb-5 text-yellow-400 text-sm">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(product.rating || 4)
                  ? "opacity-100"
                  : "opacity-30"
              }
            />
          ))}

          <span className="text-gray-500 text-xs ml-1">
            ({product.rating || 120})
          </span>
        </div>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition duration-300 hover:scale-[1.02]">
          View Product
        </button>
      </div>
    </Link>
  );
}
