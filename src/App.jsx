import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import NavbarUser from "./components/NavbarUser";
import MainLayout from "./components/MainLayout";

// Pages
import HomePage from "./components/BerandaUser";
import AboutPage from "./components/About";
import ProductsPage from "./components/Product";
import CheckoutPage from "./pages/Checkout";
import PaymentLoading from "./pages/PaymentLoading";
import OrderSuccess from "./pages/OrderSucces";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      {/* NAVBAR */}
      {user ? (
        <NavbarUser user={user} setUser={setUser} />
      ) : (
        <Navbar setUser={setUser} />
      )}

      <Routes>
        {/* ================= GUEST ROUTES ================= */}
        {!user && (
          <>
            <Route
              path="/"
              element={
                <MainLayout>
                  {/* Landing page kosong atau custom hero bisa ditambahkan */}
                </MainLayout>
              }
            />
            <Route
              path="/products"
              element={
                <MainLayout>
                  {/* Bisa tambahkan versi produk guest */}
                </MainLayout>
              }
            />
            <Route
              path="/about"
              element={
                <MainLayout>
                  <AboutPage />
                </MainLayout>
              }
            />
          </>
        )}

        {/* ================= USER ROUTES ================= */}
        {user && (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/payment" element={<PaymentLoading />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </>
        )}

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
