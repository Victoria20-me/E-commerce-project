"use client";
import Link from "next/link";
export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6 text-black dark:text-white">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Order Succesful
      </h1>
      <p className="text-gray-600 mb-6">
        Thank you for your Purchase. Your order is being processed.🛒
      </p>
      <Link href="/">
        <button className="bg-black text-white px-6 py-3 rounded">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
