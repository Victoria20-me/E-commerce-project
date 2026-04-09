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
    <main>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="block"
          >
            <div>
              <img src={product.thumbnail} />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
