export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold mb-3">MyStore</h2>
          <p className="text-sm">
            We provide the best products at unbeatable prices.
            Built for speed and simplicity.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div id="about">
          <h3 className="font-semibold mb-3">About Us</h3>
          <p className="text-sm">
            MyStore is your go-to ecommerce platform for quality and affordability.
          </p>
        </div>

      </div>

      <div className="text-center py-4 border-t border-gray-300 dark:border-gray-700 text-sm">
        © 2026 MyStore. All rights reserved.
      </div>
    </footer>
  );
}