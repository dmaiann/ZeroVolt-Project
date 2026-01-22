import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Lock, CreditCard } from "lucide-react";

// ================= STATUS STEPS =================
const STATUS = [
  "Connecting to payment gateway…",
  "Encrypting transaction data…",
  "Verifying payment details…",
  "Finalizing transaction…",
  "Almost done…",
];

export default function PaymentLoading() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          navigate("/order-success", { replace: true });
          return 100;
        }
        return p + 1.5; // Bisa diubah lebih cepat/lambat
      });
    }, 60);

    const statusTimer = setInterval(() => {
      setStep((s) => (s + 1) % STATUS.length);
    }, 1800);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-md"
      >
        {/* GLOW BACKGROUND */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-gradient-to-r from-black/10 via-black/5 to-transparent rounded-3xl" />

        {/* CARD */}
        <div className="backdrop-blur-xl bg-white/80 border border-black/10 rounded-3xl p-10 shadow-2xl space-y-8">
          {/* ICON ANIMATED */}
          <div className="flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="w-24 h-24 rounded-full bg-black/90 flex items-center justify-center shadow-lg"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-inner"
              >
                <CreditCard className="w-7 h-7 text-black" />
              </motion.div>
            </motion.div>
          </div>

          {/* TITLE */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Processing Payment
            </h1>
            <p className="text-black/60 text-sm">
              Please wait while we securely complete your transaction
            </p>
          </div>

          {/* STATUS STEP */}
          <AnimatePresence mode="wait">
            <motion.p
              key={step}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="text-sm text-center text-black/70"
            >
              {STATUS[step]}
            </motion.p>
          </AnimatePresence>

          {/* PROGRESS BAR */}
          <div className="space-y-2">
            <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
                className="h-full bg-black rounded-full"
              />
            </div>
            <div className="flex justify-between text-xs text-black/50">
              <span>Secured</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>

          {/* SECURITY INFO */}
          <div className="flex justify-center items-center gap-2 text-xs text-black/50 pt-2">
            <Lock size={14} />
            <span>ZeroVolt Secure Payment</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
