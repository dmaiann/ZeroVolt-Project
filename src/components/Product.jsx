import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Info, ChevronLeft, ChevronRight } from "lucide-react";

/* ================= DATA ================= */
const PRODUCTS = [
  {
    name: "Samsung S24 Ultra",
    price: "$999",
    badge: "New",
    image: "/images/products/samsang.jpeg",
  },
  {
    name: "Asus ZenBook Pro",
    price: "$1,499",
    badge: "Best Seller",
    image: "/images/products/laptop.jpeg",
  },
  {
    name: "Apple Watch Series 9",
    price: "$399",
    badge: "New",
    image: "/images/products/smart.jpeg",
  },
  {
    name: "EarPods Pro",
    price: "$199",
    image: "/images/products/earphone.jpeg",
  },
  {
    name: "Legion Y540 Gaming Laptop",
    price: "$2,099",
    image: "/images/products/gaming.jpeg",
  },
];

/* ================= ANIMATION VARIANTS ================= */
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, type: "spring", stiffness: 100 },
  }),
};

/* ================= PAGE ================= */
export default function ProductPage() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 1.5;
      scrollRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight text-gray-900">
          Produk Unggulan ZeroVolt
        </h2>

        {/* Scrollable Row */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab px-4 py-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PRODUCTS.map((product, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{ scale: 1.07 }}
                className="relative min-w-[240px] md:min-w-[260px] flex-shrink-0 snap-center rounded-3xl bg-white/90 backdrop-blur-md shadow-xl cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-20">
                    {product.badge}
                  </div>
                )}

                {/* Floating Product Image */}
                <motion.div
                  className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 md:w-44 md:h-44 rounded-2xl flex items-center justify-center shadow-lg z-10 bg-white"
                  whileHover={{ y: -10, scale: 1.06 }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </motion.div>

                {/* Product Info */}
                <div className="pt-40 md:pt-48 px-5 pb-9 text-center relative z-10">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 font-medium mb-4">
                    {product.price}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3 justify-center mt-3">
                    <button className="flex-none bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition flex items-center justify-center gap-2 text-sm md:text-base">
                      <ShoppingCart size={18} /> Beli Sekarang
                    </button>
                    <button className="flex-none border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition flex items-center justify-center gap-2 text-sm md:text-base">
                      <Info size={18} /> Lihat Detail
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("prev")}
            className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition flex items-center justify-center z-20"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => scroll("next")}
            className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition flex items-center justify-center z-20"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-28 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-black text-white px-14 py-4 rounded-full font-extrabold hover:bg-gray-900 transition text-lg md:text-xl shadow-lg hover:shadow-xl"
          >
            Explore All Products
          </motion.button>
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
