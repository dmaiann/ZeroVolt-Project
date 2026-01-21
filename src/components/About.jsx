// AboutPageZeroVoltNextLevel.jsx
"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Core Values
const coreValues = [
  {
    title: "Innovation",
    desc: "We push the boundaries of electronics and design to create products that inspire.",
    icon: "💡",
  },
  {
    title: "Simplicity",
    desc: "Intuitive, minimal, and user-friendly products that just work.",
    icon: "🍃",
  },
  {
    title: "Integrity",
    desc: "Commitment to quality, trust, and transparency in everything we do.",
    icon: "🤝",
  },
];

// Floating shape component (interactive)
const FloatingShape = ({ style, className, xMotion, yMotion }) => (
  <motion.div
    className={`absolute rounded-full opacity-20 ${className}`}
    style={{ ...style, x: xMotion, y: yMotion }}
    transition={{ duration: 6, yoyo: Infinity, ease: "easeInOut" }}
  />
);

export default function AboutPageZeroVoltNextLevel() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set((e.clientX - innerWidth / 2) / 20);
    mouseY.set((e.clientY - innerHeight / 2) / 20);
  };

  return (
    <div
      className="bg-white text-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Floating interactive shapes */}
      <FloatingShape
        className="bg-black"
        style={{ width: 80, height: 80, top: "10%", left: "5%" }}
        xMotion={useTransform(mouseX, (v) => v / 2)}
        yMotion={useTransform(mouseY, (v) => v / 2)}
      />
      <FloatingShape
        className="bg-black"
        style={{ width: 50, height: 50, top: "30%", right: "10%" }}
        xMotion={useTransform(mouseX, (v) => -v / 2)}
        yMotion={useTransform(mouseY, (v) => -v / 2)}
      />
      <FloatingShape
        className="bg-black"
        style={{ width: 60, height: 60, bottom: "20%", left: "15%" }}
        xMotion={useTransform(mouseX, (v) => v / 3)}
        yMotion={useTransform(mouseY, (v) => v / 3)}
      />
      <FloatingShape
        className="bg-black"
        style={{ width: 30, height: 30, bottom: "10%", right: "20%" }}
        xMotion={useTransform(mouseX, (v) => -v / 3)}
        yMotion={useTransform(mouseY, (v) => -v / 3)}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-8xl lg:text-9xl font-thin tracking-wide leading-tight">
            About ZeroVolt
          </h1>
          <p className="mt-8 text-xl max-w-2xl mx-auto text-gray-700">
            Redefining electronics with elegance, simplicity, and futuristic
            design.
          </p>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {coreValues.map((value, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-black rounded-3xl shadow-lg p-12 text-center cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-transform relative"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 relative after:block after:h-1 after:w-0 after:bg-black after:rounded-full after:mx-auto after:mt-2 after:transition-all after:duration-500 hover:after:w-10">
                {value.title}
              </h3>
              <p className="text-gray-800">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ZeroVolt Pitch Section */}
      <section className="py-24 bg-gray-50 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center px-6 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-light">Why ZeroVolt?</h2>
          <p className="text-gray-700 text-lg">
            ZeroVolt is not just an electronics store — it’s a commitment to{" "}
            <span className="font-semibold">
              innovation, elegance, and simplicity
            </span>
            . Every product we offer is designed to enhance your lifestyle,
            combining cutting-edge technology with minimalistic design.
          </p>
          <p className="text-gray-700 text-lg">
            From high-performance gadgets to everyday electronics, we ensure{" "}
            <span className="font-semibold">
              quality, reliability, and style
            </span>{" "}
            in every item. Choose ZeroVolt and experience electronics the way
            they should be:{" "}
            <span className="font-semibold">
              effortless, premium, and futuristic
            </span>
            .
          </p>
          <motion.button
            className="bg-black text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-6"
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
