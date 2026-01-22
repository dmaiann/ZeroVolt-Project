import React, { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Truck, ShieldCheck, Apple, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

/* ================= MOCK DATA ================= */

const CART_ITEMS = [
  {
    id: 1,
    name: "ZeroVolt Pro Smartphone",
    price: 999,
    qty: 1,
  },
  {
    id: 2,
    name: "ZeroVolt Earbuds",
    price: 199,
    qty: 1,
  },
];

/* ================= PAGE ================= */

export default function CheckoutPage() {
  const [payment, setPayment] = useState("card");
  const navigate = useNavigate();

  const subtotal = CART_ITEMS.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = 25;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    // nanti bisa tambahkan API checkout di sini
    navigate("/order-success");
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
        {/* ================= LEFT ================= */}
        <div className="lg:col-span-2 space-y-16">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-2">Checkout</h1>
            <p className="text-black/60">Complete your purchase securely.</p>
          </motion.div>

          {/* SHIPPING INFO */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Truck size={18} /> Shipping Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="First name" />
              <Input placeholder="Last name" />
              <Input placeholder="Email address" />
              <Input placeholder="Phone number" />
              <Input placeholder="Street address" className="md:col-span-2" />
              <Input placeholder="City" />
              <Input placeholder="Postal code" />
            </div>
          </section>

          {/* PAYMENT */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <CreditCard size={18} /> Payment Method
            </h2>

            <RadioGroup
              value={payment}
              onValueChange={setPayment}
              className="space-y-4"
            >
              <label className="flex items-center justify-between border rounded-2xl p-4 cursor-pointer hover:border-black transition">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="card" />
                  <span className="font-medium">Credit / Debit Card</span>
                </div>
                <ShieldCheck size={18} className="text-black/60" />
              </label>

              <label className="flex items-center justify-between border rounded-2xl p-4 cursor-pointer hover:border-black transition">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="apple" />
                  <span className="font-medium flex items-center gap-2">
                    <Apple size={18} /> Apple Pay
                  </span>
                </div>
              </label>

              <label className="flex items-center justify-between border rounded-2xl p-4 cursor-pointer hover:border-black transition">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="google" />
                  <span className="font-medium flex items-center gap-2">
                    <Play size={18} /> Google Pay
                  </span>
                </div>
              </label>
            </RadioGroup>

            {payment === "card" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 gap-4"
              >
                <Input placeholder="Card number" className="md:col-span-2" />
                <Input placeholder="MM / YY" />
                <Input placeholder="CVC" />
              </motion.div>
            )}
          </section>
        </div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-neutral-100 rounded-3xl p-8 h-fit sticky top-28"
        >
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="space-y-4">
            {CART_ITEMS.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>${item.price * item.qty}</span>
              </div>
            ))}
          </div>

          <Separator className="my-6" />

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <Button
            onClick={handlePlaceOrder}
            className="w-full mt-8 bg-black text-white hover:bg-black/90 rounded-full h-12"
          >
            Place Order
          </Button>

          <p className="text-xs text-black/50 text-center mt-4">
            Your payment is secured and encrypted.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
