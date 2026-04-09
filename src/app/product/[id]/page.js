"use client";

import { useState, useEffect } from "react";
import { getSingleProduct } from "@/app/lib/product";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const [product, setProduct] = useState("");
  const params = useParams();
  const id = params["id"];

  console.log(id);

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
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}
