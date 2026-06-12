"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DownloadPage() {
  const router = useRouter();

  const [token, setToken] = useState("");

  useEffect(() => {
    const reportToken = localStorage.getItem("reportToken");

    if (!reportToken) {
      router.replace("/");
      return;
    }

    setToken(reportToken);
  }, []);

  const handleDownload = () => {
    window.open(`/api/download?token=${token}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#050816] flex items-center justify-center px-4">
      <div className="max-w-xl w-full rounded-3xl border border-violet-500/20 bg-white/5 p-8 backdrop-blur-xl">
        <div className="text-center">
          <div className="text-6xl mb-5">📄</div>

          <h1 className="text-3xl font-bold text-white">
            Your Astrology Report
          </h1>

          <p className="mt-4 text-slate-300">
            Your personalized destiny report is now available.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-violet-500/10 p-5">
          <h3 className="text-violet-300 font-semibold">Included</h3>

          <ul className="mt-3 space-y-2 text-slate-300">
            <li>✨ Personality Analysis</li>
            <li>🔮 Future Insights</li>
            <li>💰 Wealth Forecast</li>
            <li>❤️ Relationship Reading</li>
            <li>🌙 Cosmic Guidance</li>
          </ul>
        </div>

        <button
          onClick={handleDownload}
          className="mt-8 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 py-4 text-white font-semibold"
        >
          Download PDF Report
        </button>
      </div>
    </main>
  );
}
