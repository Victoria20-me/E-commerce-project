import Link from "next/link";
import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";

export default function Heropage() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] mb-16 ">
      <Image
        src="/hero.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70">
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left md:px-20 text-white px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Shop Smarter,
            <br /> Faster <AiFillThunderbolt className="text-amber-400" />
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 dark:text-gray-300 max-w-xl mb-6 drop-shadow-md">
            Discover amazing products at unbeatable prices. Built for speed,
            designed for simplicity.
          </p>
          <div className="flex gap-4">
            <Link href="#products">
              <button className="bg-green-600 text-white dark:bg-white dark:text-black px-6 py-2 rounded-md font-semibold hover:bg-green-900 dark:hover-bg-gray-700 transition shadow-lg">
                Shop now →
              </button>
            </Link>
            <button
              onClick={() => {
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border font-semibold border-white dark:border-gray-700 px-7 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-800 transition"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
