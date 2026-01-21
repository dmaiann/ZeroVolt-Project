import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ShoppingBag,
  LogIn,
  ArrowRight,
  Mail,
  Lock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

const MENU = {
  Store: {
    desc: "Discover the full ZeroVolt experience.",
    primary: ["Shop All Products"],
    secondary: ["New Arrivals", "Best Sellers", "Limited Edition"],
  },
  Smartphone: {
    desc: "Powerful devices for modern life.",
    primary: ["Explore Smartphones"],
    secondary: ["Flagship", "Mid-range", "Compare"],
  },
  Laptop: {
    desc: "Performance without compromise.",
    primary: ["Explore Laptops"],
    secondary: ["Ultrabook", "Creator", "Gaming"],
  },
  Watch: {
    desc: "Health, time, and style.",
    primary: ["Explore Watch"],
    secondary: ["Smart Watch", "Fitness", "Luxury"],
  },
  Audio: {
    desc: "Pure sound experience.",
    primary: ["Explore Audio"],
    secondary: ["Headphones", "Earbuds", "Speakers"],
  },
};

export default function Navbar({ setUser }) {
  const [active, setActive] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const timer = useRef(null);
  const navigate = useNavigate();

  const openMenu = (menu) => {
    clearTimeout(timer.current);
    setActive(menu);
  };
  const closeMenu = () => {
    timer.current = setTimeout(() => setActive(null), 350);
  };

  // Fungsi login via modal
  const handleLogin = () => {
    if (email) {
      setUser({ name: email.split("@")[0], email }); // update state di App.jsx
      setEmail("");
      setPassword("");
      navigate("/"); // redirect ke homepage khusus user
    } else {
      alert("Please enter your email");
    }
  };

  return (
    <>
      {/* BACKDROP */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
        <div
          className="max-w-6xl mx-auto h-14 px-6 flex items-center justify-between"
          onMouseLeave={closeMenu}
        >
          {/* LEFT MENU */}
          <div className="flex items-center gap-8 text-sm font-medium">
            <span className="text-lg font-semibold text-black">ZeroVolt</span>
            {Object.keys(MENU).map((menu) => (
              <button
                key={menu}
                onMouseEnter={() => openMenu(menu)}
                className="hover:text-black transition"
              >
                {menu}
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* SEARCH */}
            <div className="relative group">
              <div className="flex items-center gap-3 h-9 w-56 px-4 rounded-full bg-white border border-neutral-200 shadow-sm transition-all duration-300 group-hover:shadow-md focus-within:w-64 focus-within:border-black focus-within:shadow-lg">
                <Search
                  size={14}
                  className="text-neutral-500 transition group-focus-within:text-black"
                />
                <input
                  type="text"
                  placeholder="Search products, brands…"
                  className="w-full bg-transparent text-sm text-black placeholder:text-neutral-400 outline-none"
                />
              </div>
            </div>

            {/* CART */}
            <Button variant="ghost" size="icon">
              <ShoppingBag />
            </Button>

            {/* LOGIN MODAL */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="font-medium flex items-center gap-1"
                >
                  <LogIn size={16} /> Login
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md rounded-2xl bg-white text-black">
                <h3 className="text-xl font-semibold text-center">
                  Sign in to ZeroVolt
                </h3>

                <div className="mt-6 relative">
                  <Mail
                    size={16}
                    className="absolute left-3 top-3 text-black/50"
                  />
                  <input
                    className="w-full h-10 pl-9 rounded-md border border-black/20 outline-none focus:border-black"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mt-3 relative">
                  <Lock
                    size={16}
                    className="absolute left-3 top-3 text-black/50"
                  />
                  <input
                    type="password"
                    className="w-full h-10 pl-9 rounded-md border border-black/20 outline-none focus:border-black"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Checkbox />{" "}
                    <span className="text-black/80">Remember me</span>
                  </div>
                  <button className="hover:underline">Forgot password?</button>
                </div>

                <Button
                  className="mt-5 w-full bg-black text-white hover:bg-neutral-800"
                  onClick={handleLogin}
                >
                  Sign In
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* DROPDOWN MENU */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => openMenu(active)}
            onMouseLeave={closeMenu}
            className="fixed top-14 w-full z-40 bg-white border-b border-neutral-200"
          >
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-3 gap-10">
              <div>
                <p className="text-sm text-neutral-500 mb-4">
                  {MENU[active].desc}
                </p>
                {MENU[active].primary.map((item) => (
                  <div
                    key={item}
                    className="text-xl font-semibold flex items-center gap-2 cursor-pointer hover:underline"
                  >
                    {item} <ArrowRight size={16} />
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {MENU[active].secondary.map((item) => (
                  <p key={item} className="hover:text-black cursor-pointer">
                    {item}
                  </p>
                ))}
              </div>
              <div className="rounded-3xl bg-neutral-100 p-8">
                <p className="text-sm font-medium">Featured</p>
                <p className="text-xl font-semibold mt-2">
                  Designed for those who expect more.
                </p>
                <Button className="mt-6 bg-black text-white hover:bg-neutral-800">
                  Learn more
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SPACER */}
      <div className="h-14" />
    </>
  );
}
