"use client";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/app/lib/product";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="block"
          >
            <div className="border rounded-lg p-4 cursor-pointer hover:shadow-xl transition duration-300 bg-white">
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
        ))}
      </div>
    </main>
  );
}
