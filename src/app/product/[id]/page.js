"use client";
import { useCart } from "@/app/context/CartContext";
import { useState, useEffect } from "react";
import { getSingleProduct } from "@/app/lib/product";
import { useParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductPage() {
  const [product, setProduct] = useState("");
  const params = useParams();
  const id = params["id"];
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getSingleProduct(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading product...</p>;
  }
  return (
    <div className="p-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-black dark:text-white">
      <img 
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-80 object-contain"
      />
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-green-600 mb-4">
          ${product.price}
        </p>
        <button
          onClick={() => {
            addToCart(product);
            toast.success(`${product.title} added to cart🛒`);
          }}
          className="bg-black text-white  dark:bg-white dark:text-black px-6 py-3 rounded w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
