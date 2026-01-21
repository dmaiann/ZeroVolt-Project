import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import NavbarUser from "./components/NavbarUser";
import MainLayout from "./components/MainLayout";
import AboutPage from "./components/About";
import Footer from "./components/Footer";
import HomePage from "./components/BerandaUser"; // halaman beranda khusus user

function App() {
  const [user, setUser] = useState(null); // state login user

  return (
    <>
      {/* Navbar dinamis */}
      {user ? (
        <NavbarUser user={user} setUser={setUser} />
      ) : (
        <Navbar setUser={setUser} />
      )}

      <Routes>
        {/* Homepage */}
        <Route path="/" element={user ? <HomePage /> : <MainLayout />} />

        {/* Products page */}
        <Route
          path="/products"
          element={user ? <HomePage /> : <MainLayout />}
        />

        {/* AboutPage */}
        <Route
          path="/about"
          element={
            user ? (
              <MainLayout user={user}>
                <AboutPage />
              </MainLayout>
            ) : (
              <MainLayout>
                <AboutPage />
              </MainLayout>
            )
          }
        />

        {/* Catch-all untuk Footer */}
        <Route
          path="*"
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
      </Routes>
    </>
  );
}

export default App;
