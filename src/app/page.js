"use client";
import { useEffect, useState } from "react";
import {
  getAllProducts,
  getCategories,
  getProductsByCategory,
} from "@/app/lib/product";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import SkeletonCard from "./components/skeleton";

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
      console.log(data);
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
  console.log(products);

  return (
    <main className="max-w-6xl mx-auto px-4">
      {loading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {[...Array(8)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}
      <div className="mb-6 p-6 rounded-lg bg-gray-100 dark:bg-gray-900 text-centre">
        <h1 className="text-3xl font-bold mb-2 text-black dark:text-white">
          Welcome to MyStore
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Find the best products at the best prices
        </p>
      </div>
      <div className="">
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
          className="border p-2 rounded bg-white dark:bg-gray-800"
        >
          <option value="all">All</option>
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <h1 className="text-xl font-bold mb-4">Products</h1>
      {filteredProducts.length === 0 && !loading && (
        <p className="text-center mt-6">No products found</p>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {!loading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
