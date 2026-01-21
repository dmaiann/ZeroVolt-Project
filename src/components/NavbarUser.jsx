import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, User, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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

export default function NavbarUser({ user, setUser }) {
  const [active, setActive] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const timer = useRef(null);

  const openMenu = (menu) => {
    clearTimeout(timer.current);
    setActive(menu);
  };

  const closeMenu = () => {
    timer.current = setTimeout(() => setActive(null), 350);
  };

  const handleLogout = () => {
    setProfileOpen(false);
    setUser(null);
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

            {/* PROFILE */}
            <div className="relative">
              <Button
                variant="ghost"
                className="font-medium flex items-center gap-2"
                onClick={() => setProfileOpen((v) => !v)}
              >
                <User size={16} />
                {user?.name}
              </Button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-neutral-200 z-50"
                  >
                    <div className="flex flex-col py-2">
                      <Button
                        variant="ghost"
                        className="justify-start px-4 py-2 hover:bg-neutral-100"
                      >
                        View Profile
                      </Button>
                      <Button
                        variant="ghost"
                        className="justify-start px-4 py-2 hover:bg-neutral-100"
                      >
                        Orders
                      </Button>
                      <Separator className="my-1" />
                      <Button
                        variant="ghost"
                        className="justify-start px-4 py-2 text-red-500 hover:bg-red-50"
                        onClick={handleLogout}
                      >
                        Logout
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
