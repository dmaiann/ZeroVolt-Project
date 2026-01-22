import React, { useState } from "react";
import { motion } from "framer-motion";
import { Truck, CreditCard, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// ================= SINGLE ITEM =================
const ITEM = {
  id: 1,
  name: "Samsung S24 Ultra",
  price: 999,
  image: "/images/products/samsang.jpeg",
};

export default function CheckoutPage() {
  const [payment, setPayment] = useState("card");
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50 pt-24 pb-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        {/* LEFT: Form */}
        <div className="lg:col-span-2 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-2">Checkout</h1>
            <p className="text-black/60">Securely complete your purchase.</p>
          </motion.div>

          {/* Shipping Info */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Truck size={18} /> Shipping Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="First name"
                className="hover:ring-2 ring-blue-400 transition"
              />
              <Input
                placeholder="Last name"
                className="hover:ring-2 ring-blue-400 transition"
              />
              <Input
                placeholder="Email address"
                className="hover:ring-2 ring-blue-400 transition"
              />
              <Input
                placeholder="Phone number"
                className="hover:ring-2 ring-blue-400 transition"
              />
              <Input
                placeholder="Street address"
                className="md:col-span-2 hover:ring-2 ring-blue-400 transition"
              />
              <Input
                placeholder="City"
                className="hover:ring-2 ring-blue-400 transition"
              />
              <Input
                placeholder="Postal code"
                className="hover:ring-2 ring-blue-400 transition"
              />
            </div>
          </section>

          {/* Payment Method */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Payment Method</h2>
            <RadioGroup
              value={payment}
              onValueChange={setPayment}
              className="space-y-3"
            >
              {/* Card */}
              <label className="flex items-center justify-between border rounded-2xl p-4 cursor-pointer hover:shadow-lg transition">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="card" />
                  <span className="font-medium flex items-center gap-2">
                    <CreditCard size={18} /> Credit / Debit Card
                  </span>
                </div>
                <ShieldCheck size={18} className="text-black/60" />
              </label>

              {/* ShopeePay */}
              <label className="flex items-center justify-between border rounded-2xl p-4 cursor-pointer hover:shadow-lg transition">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="shopeepay" />
                  <span className="font-medium">ShopeePay</span>
                </div>
              </label>

              {/* GoPay */}
              <label className="flex items-center justify-between border rounded-2xl p-4 cursor-pointer hover:shadow-lg transition">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="gopay" />
                  <span className="font-medium">GoPay</span>
                </div>
              </label>

              {/* Dana */}
              <label className="flex items-center justify-between border rounded-2xl p-4 cursor-pointer hover:shadow-lg transition">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="dana" />
                  <span className="font-medium">Dana</span>
                </div>
              </label>

              {/* Virtual Account */}
              <label className="flex items-center justify-between border rounded-2xl p-4 cursor-pointer hover:shadow-lg transition">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="va" />
                  <span className="font-medium">Virtual Account</span>
                </div>
              </label>

              {/* QRIS */}
              <label className="flex items-center justify-between border rounded-2xl p-4 cursor-pointer hover:shadow-lg transition">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="qris" />
                  <span className="font-medium">QRIS</span>
                </div>
              </label>
            </RadioGroup>

            {payment === "card" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 gap-4 mt-2"
              >
                <Input
                  placeholder="Card number"
                  className="md:col-span-2 hover:ring-2 ring-blue-400 transition"
                />
                <Input
                  placeholder="MM / YY"
                  className="hover:ring-2 ring-blue-400 transition"
                />
                <Input
                  placeholder="CVC"
                  className="hover:ring-2 ring-blue-400 transition"
                />
              </motion.div>
            )}
          </section>
        </div>

        {/* RIGHT: Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 h-fit sticky top-28 shadow-lg hover:shadow-2xl transition"
        >
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex gap-4 mb-4">
            <img
              src={ITEM.image}
              alt={ITEM.name}
              className="w-28 h-28 rounded-xl object-cover shadow-md hover:scale-105 transition"
            />
            <div className="flex flex-col justify-center">
              <span className="font-medium text-lg">{ITEM.name}</span>
              <span className="text-black/60">${ITEM.price}</span>
            </div>
          </div>

          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total</span>
            <span>${ITEM.price}</span>
          </div>

          <Button
            onClick={handlePlaceOrder}
            className="w-full bg-black text-white hover:bg-black/90 rounded-full h-14 shadow-lg hover:shadow-2xl transition"
          >
            Place Order
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
