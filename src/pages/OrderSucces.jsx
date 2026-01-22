import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, ShoppingBag, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

/* ================= PAGE ================= */

export default function OrderSuccess() {
  const orderId = "ZV-2026-000123"; // nanti bisa dari backend / params

  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl w-full bg-neutral-100 rounded-3xl p-12 text-center shadow-xl"
      >
        {/* ICON */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="flex justify-center mb-6"
        >
          <CheckCircle size={72} className="text-green-500" />
        </motion.div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-3">Order Successful 🎉</h1>

        <p className="text-black/70 mb-6">
          Thank you for shopping with <b>ZeroVolt</b>. Your order has been
          placed successfully.
        </p>

        {/* ORDER ID */}
        <div className="bg-white rounded-2xl py-4 px-6 mb-8">
          <p className="text-sm text-black/50">Order ID</p>
          <p className="font-semibold text-lg tracking-wide">{orderId}</p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            className="flex-1 bg-black text-white rounded-full h-12 hover:bg-black/90"
            asChild
          >
            <a href="/products">
              Continue Shopping <ArrowRight className="ml-2" size={18} />
            </a>
          </Button>

          <Button
            variant="outline"
            className="flex-1 rounded-full h-12"
            asChild
          >
            <a href="/">
              <Home size={18} className="mr-2" /> Back to Home
            </a>
          </Button>
        </div>

        {/* INFO */}
        <div className="flex items-center justify-center gap-2 mt-8 text-sm text-black/60">
          <ShoppingBag size={16} />
          <span>You’ll receive an email confirmation shortly.</span>
        </div>
      </motion.div>
    </div>
  );
}
