"use client";
import { useEffect, useState } from "react";
import {
  getAllProducts,
  getCategories,
  getProductsByCategory,
} from "@/app/lib/product";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const loadCategories = async () => {
      const data = await getCategories();
      console.log(data);
      setCategories(data);
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      if (category === "all") {
        const data = await getAllProducts();
        setProducts(data);
      } else {
        const data = await getProductsByCategory(category);
        console.log(data);

        setProducts(data);
      }
    };
    loadProducts();
  }, [category]);
  console.log(products);
  return (
    <main className="p-4">
      <div>
        <input
          type="text"
          placeholder="search products....."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 w-full mb-4 rounded"
        />
        <select
          value={category}
          onChange={(e) => {
            console.log("category sent to api:", e.target.value);

            setCategory(e.target.value);
          }}
        >
          <option value="all">CATEGORIES</option>
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        {filteredProducts.map((product) => {
          console.log("filtered length:", filteredProducts);
          <ProductCard key={product.id} product={product} />;
        })}
      </div>
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
