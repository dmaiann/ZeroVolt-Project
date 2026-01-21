// MainLayout.jsx
import React from "react";
import Hero from "./Hero";
import ProductPage from "./Product";
import AboutPage from "./About";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      {/* Hero dan ProductPage selalu muncul */}
      <Hero />
      <ProductPage />
      {/* Konten tambahan, misal AboutPage */}
      <AboutPage />

      <Footer />

      {children}
    </div>
  );
}
