"use client";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-2xl">
      <Link href={`/product./${product.id}`}>
        <img src={product.thumbnail} className="h-32 mx-auto " />
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </Link>
    </div>
  );
}
 