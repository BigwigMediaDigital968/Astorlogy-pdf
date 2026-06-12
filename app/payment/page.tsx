"use client";

import { useEffect, useState } from "react";
import { loadRazorpay } from "@/app/lib/loadRazorpay";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState<number | null>(null);
  const [orderData, setOrderData] = useState<any>(null);

  useEffect(() => {
    createOrder();
  }, []);

  const createOrder = async () => {
    try {
      const zodiac = localStorage.getItem("selectedRashi");

      const res = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          zodiac,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert("Unable to generate report.");
        return;
      }

      setAmount(data.amount);
      setOrderData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const verifyPayment = async (paymentResponse: any) => {
    const res = await fetch("/api/payment/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentResponse),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("paymentCompleted", "true");

      localStorage.setItem("reportToken", data.token);

      router.push("/success");
    }
  };

  const handlePayment = async () => {
    if (!orderData) return;

    setLoading(true);

    const loaded = await loadRazorpay();

    if (!loaded) {
      alert("Failed to load Razorpay");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

      amount: orderData.order.amount,

      currency: "INR",

      name: "Astrology Insights",

      description: "Personalized Astrology Report",

      order_id: orderData.order.id,

      handler: verifyPayment,

      prefill: {
        name: "Guest User",
      },

      theme: {
        color: "#7C3AED",
      },
    };

    const razorpay = new (window as any).Razorpay(options);

    razorpay.open();

    razorpay.on("payment.failed", function () {
      alert("Payment failed. Please try again.");
    });

    setLoading(false);
  };

  useEffect(() => {
    const zodiac = localStorage.getItem("zodiacSelected");

    const scan = localStorage.getItem("scanCompleted");

    if (!zodiac || !scan) {
      router.replace("/");
    }
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#060816] px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,.2),transparent_60%)]" />

      <div className="relative w-full max-w-xl rounded-3xl border border-violet-500/20 bg-white/5 p-8 backdrop-blur-xl">
        <div className="text-center">
          <div className="mb-5 text-6xl">✨</div>

          <h1 className="text-3xl font-bold text-white">
            Verification Successful
          </h1>

          <p className="mt-4 text-slate-300">
            Your zodiac profile has been analyzed successfully.
          </p>

          <p className="mt-2 text-slate-400">
            A personalized cosmic report is ready for download.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider text-violet-300">
              Report Access Fee
            </p>

            <h2 className="mt-3 text-6xl font-bold text-white">
              ₹{amount ?? "..."}
            </h2>

            <p className="mt-3 text-sm text-slate-400">
              One-time payment for instant report access and unlimited
              downloads.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4">
            <span>🔮</span>
            <span className="text-slate-300">
              Personalized Astrology Analysis
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4">
            <span>📄</span>
            <span className="text-slate-300">Detailed PDF Report</span>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4">
            <span>♾️</span>
            <span className="text-slate-300">Unlimited Future Downloads</span>
          </div>
        </div>

        <button
          onClick={handlePayment}
          disabled={loading || !amount}
          className="mt-8 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 py-4 text-lg font-semibold text-white transition hover:scale-[1.02] cursor-pointer"
        >
          {loading
            ? "Opening Payment..."
            : `Unlock Report for ₹${amount ?? ""}`}
        </button>

        <p className="mt-4 text-center text-xs text-slate-500">
          Secured by Razorpay • Instant Access
        </p>
      </div>
    </main>
  );
}
