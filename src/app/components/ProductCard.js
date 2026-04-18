"use client";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link key={product.id} href={`/product/${product.id}`} className="block">
      <div className="border rounded-lg p-4 cursor-pointer hover:shadow-2xl hover:scale-105 transition duration-300 bg-white dark:bg-gray-800">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-40 mx-auto object-contain"
        />
        <h2 className="text-sm font-semibold mt-2 text-green-600">
          {product.title}
        </h2>
        <p className="text-lg font-bold mt-2 text-green-600">
          ${product.price}
        </p>
        <button className="mt-3 w-full bg-black text-white py-2 rounded">
          View Product
        </button>
      </div>
    </Link>
  );
}
