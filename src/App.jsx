import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import NavbarUser from "./components/NavbarUser";
import MainLayout from "./components/MainLayout";
import AboutPage from "./components/About";
import Footer from "./components/Footer";
import HomePage from "./components/BerandaUser";

// PAGES
import CheckoutPage from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSucces";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      {user ? (
        <NavbarUser user={user} setUser={setUser} />
      ) : (
        <Navbar setUser={setUser} />
      )}

      {/* ================= ROUTES ================= */}
      <Routes>
        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={
            user ? (
              <HomePage />
            ) : (
              <MainLayout>
                <Footer />
              </MainLayout>
            )
          }
        />

        {/* ================= PRODUCTS ================= */}
        <Route
          path="/products"
          element={
            user ? (
              <HomePage />
            ) : (
              <MainLayout>
                <Footer />
              </MainLayout>
            )
          }
        />

        {/* ================= ABOUT ================= */}
        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          }
        />

        {/* ================= CHECKOUT (PROTECTED) ================= */}
        <Route
          path="/checkout"
          element={user ? <CheckoutPage /> : <Navigate to="/" replace />}
        />

        {/* ================= ORDER SUCCESS (PROTECTED) ================= */}
        <Route
          path="/order-success"
          element={user ? <OrderSuccess /> : <Navigate to="/" replace />}
        />

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
