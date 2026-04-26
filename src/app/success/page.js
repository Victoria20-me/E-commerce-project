"use client";
import Link from "next/link";
export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6 text-black dark:text-white">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Order Succesful
      </h1>
      <p className="text-gray-600 mb-6  dark:text-white">
        Thank you for your Purchase. Your order is being processed.🛒
      </p>
      <Link href="/">
        <button className="bg-green-600 text-white px-6 py-2 rounded-md transition duration-200 hover:scale-105 active:scale-95">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
