"use client";
import { useEffect, useState } from "react";
import {
  getAllProducts,
  getCategories,
  getProductsByCategory,
} from "@/app/lib/product";

import ProductCard from "./components/ProductCard";
import SkeletonCard from "./components/skeleton";
import Heropage from "./components/hero";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

      setCategories(data);
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        let data;
        if (!category || category === "all") {
          data = await getAllProducts();
        } else {
          data = await getProductsByCategory(category);
        }
        setProducts(data);
      } catch (err) {
        setError("something went wrong");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [category]);

  return (
    <main className="mb-10 py-16 bg-linear-to-b from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent rounded-xl animate-fadeIn">
      <Heropage />
      {loading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {[...Array(8)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      <div className="mt-10 mb-12 px-4">
        <div className=" max-w-4xl flex flex-col md:flex-row gap-4 mt-6 mb-10 mx-auto">
          <input
            type="text"
            placeholder="search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" flex-1 border p-3 rounded-md mb-4 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            value={category}
            onChange={(e) => {
              console.log("category sent to api:", e.target.value);

              setCategory(e.target.value);
            }}
            className="border p-3 rounded-md w-full md:w-56 bg-white dark:bg-gray-800 focus:outline-none"
          >
            <option value="all" className="font-bold">
              All Categories
            </option>
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.slug} className="text-black">
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <h1 id="products" className="text-2xl font-bold  text-center mb-6">
        Products
      </h1>
      {filteredProducts.length === 0 && !loading && (
        <p className="text-center mt-6 text-gray-500 dark:text-gray-400">
          No products found 😒
          <br/>
          Try a different search or category.
        </p>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {!loading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 px-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
