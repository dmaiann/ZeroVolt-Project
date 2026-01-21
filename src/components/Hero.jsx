// HeroFloatingProductTransparent.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 pt-40 pb-28">
        {/* HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-sm font-medium text-neutral-500 mb-5">
            ZeroVolt Electronics
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black leading-tight">
            Technology <br />
            that feels <span className="italic">effortless</span>.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Premium smartphones, laptops, audio, and wearables — crafted for
            performance, elegance, and everyday life.
          </p>

          {/* CTA */}
          <div className="mt-12 flex justify-center gap-4">
            <Button className="h-11 px-7 bg-black text-white hover:bg-neutral-800">
              Shop now
              <ArrowRight size={18} className="ml-2" />
            </Button>

            <Button variant="outline" className="h-11 px-7">
              Explore products
            </Button>
          </div>
        </motion.div>

        {/* HERO PRODUCT IMAGE FLOATING TRANSPARENT */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-24 flex justify-center relative"
        >
          <motion.img
            src="/src/assets/google-pixel-7-pro-mockup.png" // ganti dengan PNG transparan
            alt="Hero Product"
            className="w-80 md:w-[28rem] object-contain"
            initial={{ y: -10, rotate: -2 }}
            animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            style={{
              boxShadow: "0 40px 80px rgba(0,0,0,0.25)", // shadow agar floating
              borderRadius: "2rem",
              background: "transparent",
            }}
          />

          {/* SOFT SHADOW BELOW IMAGE */}
          <div className="absolute bottom-0 w-72 md:w-96 h-12 bg-black/10 rounded-full blur-3xl z-[-1]" />
        </motion.div>

        {/* CATEGORY HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 flex flex-wrap justify-center gap-6"
        >
          <Category icon={<Smartphone />} label="Smartphone" />
          <Category icon={<Laptop />} label="Laptop" />
          <Category icon={<Headphones />} label="Audio" />
          <Category icon={<Watch />} label="Watch" />
        </motion.div>

        {/* TRUST */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 flex justify-center gap-12 text-sm text-neutral-500"
        >
          <TrustItem value="10K+" label="Customers" />
          <TrustItem value="100+" label="Products" />
          <TrustItem value="Fast" label="Shipping" />
        </motion.div>
      </div>
    </section>
  );
}

/* SMALL COMPONENTS */
function Category({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-neutral-100 border border-neutral-200 text-sm font-medium">
      {icon}
      {label}
    </div>
  );
}

function TrustItem({ value, label }) {
  return (
    <div className="text-center">
      <p className="font-semibold text-black">{value}</p>
      <p>{label}</p>
    </div>
  );
}
