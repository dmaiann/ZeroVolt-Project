import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Apple,
  Play,
  Heart,
  Eye,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

/* ================= DATA ================= */

const CATEGORIES = ["All", "Smartphone", "Laptop", "Watch", "Audio"];

const PRODUCTS = [
  {
    name: "Samsung S24 Ultra",
    price: "$999",
    category: "Smartphone",
    tag: "NEW",
    image: "/images/products/samsang.jpeg",
  },
  {
    name: "Asus ZenBook Pro",
    price: "$1,499",
    category: "Laptop",
    tag: "SALE",
    image: "/images/products/laptop.jpeg",
  },
  {
    name: "Iphone 17 Pro Max",
    price: "$299",
    category: "Audio",
    image: "/images/products/iphone.jpeg",
  },
  {
    name: "Apple Watch Series 9",
    price: "$399",
    category: "Watch",
    image: "/images/products/smart.jpeg",
  },
  {
    name: "EarPods Pro",
    price: "$199",
    category: "Audio",
    image: "/images/products/earphone.jpeg",
  },
  {
    name: "Legion Y540 Gaming Laptop",
    price: "$2,099",
    category: "Laptop",
    image: "/images/products/gaming.jpeg",
  },
];

const PROMOS = [
  {
    title: "Spring Sale",
    subtitle: "Save up to 30%",
    image: "/images/promos/download (1).jpg",
  },
  {
    title: "New Arrivals",
    subtitle: "Latest generation devices",
    image: "/images/promos/download.jpg",
  },
  {
    title: "Exclusive Deals",
    subtitle: "Members only offers",
    image: "/images/promos/promosi.jpg",
  },
];

const TRENDING = [
  {
    name: "ZeroVolt Gaming Laptop",
    price: "$2,099",
    image: "/images/products/gaming.jpeg",
  },
  {
    name: "ZeroVolt Earbuds",
    price: "$199",
    image: "/images/products/earphone.jpeg",
  },
  {
    name: "ZeroVolt Smart Watch",
    price: "$399",
    image: "/images/products/smart.jpeg",
  },
];

const REVIEWS = [
  { name: "Alice W.", text: "Design feels premium like Apple." },
  { name: "John D.", text: "Performance & build quality are insane." },
  { name: "Sophia L.", text: "Fast delivery and great support." },
];

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold">ZeroVolt</h2>
          <p className="text-black/70">
            Premium electronics for modern digital lifestyle.
          </p>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="rounded-xl gap-2">
              <Apple size={18} /> App Store
            </Button>
            <Button variant="outline" className="rounded-xl gap-2">
              <Play size={18} /> Google Play
            </Button>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-black/70">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-3 text-black/70">
            <li>Help Center</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <div className="flex gap-2">
            <Input className="rounded-xl" placeholder="Your email" />
            <Button className="bg-black text-white rounded-xl">Join</Button>
          </div>
        </div>
      </div>

      <div className="border-t py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm text-black/60">
          <p>© {new Date().getFullYear()} ZeroVolt</p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <Icon key={i} size={18} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= PAGE ================= */

export default function HomePage() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("All");
  const [promo, setPromo] = useState(0);
  const [review, setReview] = useState(0);
  const [products, setProducts] = useState(PRODUCTS);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then((data) => Array.isArray(data) && data.length && setProducts(data))
      .catch(() => console.log("API belum aktif, pakai data lokal"));
  }, []);

  useEffect(() => {
    const p = setInterval(() => setPromo((i) => (i + 1) % PROMOS.length), 4000);
    const r = setInterval(
      () => setReview((i) => (i + 1) % REVIEWS.length),
      5000,
    );
    return () => {
      clearInterval(p);
      clearInterval(r);
    };
  }, []);

  const filtered =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  const goCheckout = (product) => {
    navigate("/checkout", { state: product });
  };

  return (
    <div className="bg-white min-h-screen pt-24 space-y-32">
      {/* HERO */}
      <section className="text-center max-w-5xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Hi Amanda Stefaniya 👋
        </motion.h1>
        <p className="text-black/70 text-lg mb-8">
          Experience premium electronics designed for performance & elegance.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-black text-white rounded-full px-8">
            Explore Now <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button variant="outline" className="rounded-full px-8">
            View Catalog
          </Button>
        </div>
      </section>

      {/* PROMO */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={promo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative overflow-hidden rounded-3xl cursor-pointer min-h-[400px] md:min-h-[500px] flex items-center justify-center group"
            onClick={() => setPromo((promo + 1) % PROMOS.length)}
          >
            {/* BACKGROUND IMAGE */}
            <img
              src={PROMOS[promo].image}
              alt={PROMOS[promo].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* GRADIENT OVERLAY LEBIH RINGAN */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent rounded-3xl" />

            {/* CONTENT */}
            <div className="relative z-10 text-center space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg"
              >
                {PROMOS[promo].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white/90 text-lg md:text-xl drop-shadow-md"
              >
                {PROMOS[promo].subtitle}
              </motion.p>
              <Button className="mt-4 bg-white text-black rounded-full px-8 py-3 font-semibold hover:scale-105 transition-transform shadow-lg">
                Explore
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* CATALOG */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Catalog</h2>

        <div className="flex gap-4 mb-8 overflow-x-auto">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-6 py-2 rounded-full border ${
                category === c ? "bg-black text-white" : "border-black/20"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-neutral-100 rounded-3xl p-6 relative group"
            >
              {p.tag && (
                <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                  {p.tag}
                </span>
              )}

              <div className="h-44 rounded-2xl mb-4 overflow-hidden bg-white">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-black/70 mb-4">{p.price}</p>

              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                <Button size="icon" variant="outline">
                  <Heart size={16} />
                </Button>
                <Button size="icon" variant="outline">
                  <Eye size={16} />
                </Button>
                <Button
                  className="bg-black text-white flex-1"
                  onClick={() => goCheckout(p)}
                >
                  Add
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRENDING */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Trending</h2>
        <div className="flex gap-6 overflow-x-auto pb-6">
          {TRENDING.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-[260px] bg-neutral-100 rounded-2xl p-4"
            >
              <div className="h-36 rounded-xl mb-3 overflow-hidden bg-white">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-black/70">{t.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={review}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-neutral-100 p-10 rounded-3xl"
          >
            <p className="text-black/70 mb-4">“{REVIEWS[review].text}”</p>
            <p className="font-semibold">{REVIEWS[review].name}</p>
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </div>
  );
}
