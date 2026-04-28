"use client";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <Link key={product.id} href={`/product/${product.id}`} className="block">
      <div className=" relative border rounded-lg sm:p-4 cursor-pointer hover:shadow-2xl group-hover:scale-[1.02] hover:translate-y-1 transition duration-300 bg-white dark:bg-gray-800 mb-6">
        <img
          src={product.thumbnail}
          loading="lazy"
          alt={product.title}
          className="h-32 sm:h-40 mx-auto object-contain transition duration-300 group-hover:scale-105"
        />
        <h2 className="text-sm font-semibold sm:text-base mt-3 text-gray-800 dark:text-gray-200 line-clamp-1">
          {product.title}
        </h2>
        <p className="text-lg font-bold mt-2 text-green-600">
          ${product.price.toFixed(2)}
        </p>
        <div className="absolute top-3 right-3">
          <FaHeart
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
            className={`cursor-pointer transition ${
              liked ? "text-red-500" : "text-gray-400"
            }`}
          />
        </div>
        <div className="flex items-center gap-1 mt-1 text-yellow-400 text-sm">
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
          <span className="text-gray-500 text-sm ml-1">
            ({product.rating || 120})
          </span>
        </div>
        <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition hover:scale-[1.02]">
          View Product
        </button>
      </div>
    </Link>
  );
}
