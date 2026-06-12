"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    const reportToken = localStorage.getItem("reportToken");

    const paymentCompleted = localStorage.getItem("paymentCompleted");

    if (!reportToken || !paymentCompleted) {
      router.replace("/");
      return;
    }

    setToken(reportToken);
  }, [router]);

  const goToDownload = () => {
    router.push("/download");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-4">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,.25),transparent_60%)]" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[url('/stars.png')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="rounded-3xl border border-violet-500/20 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-10">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="flex h-24 w-24 animate-pulse items-center justify-center rounded-full border border-green-400/30 bg-green-500/10">
              <span className="text-5xl">✅</span>
            </div>
          </div>

          {/* Heading */}
          <div className="mt-6 text-center">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Payment Successful
            </h1>

            <p className="mt-4 text-lg text-slate-300">
              Your cosmic profile has been unlocked successfully.
            </p>
          </div>

          {/* Status Card */}
          <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/10 p-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔮</span>

              <div>
                <h3 className="font-semibold text-white">
                  Astrology Report Ready
                </h3>

                <p className="text-sm text-slate-300">
                  Your personalized report has been generated and is now
                  available for download.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white/5 p-4 text-center">
              <div className="text-3xl">✨</div>
              <h4 className="mt-2 font-medium text-white">Personalized</h4>
              <p className="mt-1 text-xs text-slate-400">
                Tailored insights based on your journey.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4 text-center">
              <div className="text-3xl">📄</div>
              <h4 className="mt-2 font-medium text-white">PDF Access</h4>
              <p className="mt-1 text-xs text-slate-400">
                Instant downloadable report.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4 text-center">
              <div className="text-3xl">♾️</div>
              <h4 className="mt-2 font-medium text-white">Unlimited Access</h4>
              <p className="mt-1 text-xs text-slate-400">
                Download anytime using your secure token.
              </p>
            </div>
          </div>

          {/* Token */}
          {token && (
            <div className="mt-8 rounded-xl border border-violet-500/20 bg-violet-500/10 p-4">
              <p className="text-xs uppercase tracking-wider text-violet-300">
                Access Token
              </p>

              <p className="mt-2 break-all text-sm text-slate-300">{token}</p>
            </div>
          )}

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={goToDownload}
              className="flex-1 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 px-6 py-4 font-semibold text-white transition hover:scale-[1.02]"
            >
              Download Report
            </button>

            <button
              onClick={() => router.push("/")}
              className="rounded-2xl border border-white/10 px-6 py-4 text-white transition hover:bg-white/5"
            >
              Back Home
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            Secured Payment Verified • Powered by Razorpay
          </p>
        </div>
      </div>
    </main>
  );
}
