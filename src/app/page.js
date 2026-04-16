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
    <main className="p-4">
      {loading && <p className="text-red-500 mt-4">Loading products....</p>}
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
          className="border p-2 rounded"
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredProducts.map((product) => (
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
