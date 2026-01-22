import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Confetti from "react-confetti";

const CART_ITEMS = [{ id: 1, name: "Samsung S24 Ultra", price: 999, qty: 1 }];

export default function OrderSuccess() {
  const navigate = useNavigate();
  const [confettiActive, setConfettiActive] = useState(true);

  const subtotal = CART_ITEMS.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = 25;
  const total = subtotal + shipping;

  useEffect(() => {
    const timer = setTimeout(() => setConfettiActive(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 relative">
      {confettiActive && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={250}
          gravity={0.3}
        />
      )}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-xl p-12 rounded-3xl shadow-2xl flex flex-col items-center space-y-6 relative w-full max-w-md"
      >
        <CheckCircle className="w-20 h-20 text-green-500 animate-bounce" />
        <h1 className="text-3xl font-bold text-center">Order Successful!</h1>
        <p className="text-black/70 text-center">
          Thank you for your purchase. Your order is confirmed.
        </p>

        <div className="w-full bg-neutral-100 rounded-xl p-4 space-y-2">
          {CART_ITEMS.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>
                {item.name} × {item.qty}
              </span>
              <span>${item.price * item.qty}</span>
            </div>
          ))}
          <div className="flex justify-between font-semibold border-t pt-2">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>

        <Button
          onClick={() => navigate("/")}
          className="w-full bg-black text-white hover:bg-black/90 rounded-full h-12 mt-4 shadow-lg hover:shadow-xl transition"
        >
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
}
