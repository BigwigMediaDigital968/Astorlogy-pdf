"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import GalaxyBackground from "../components/galaxy-background";
import RetinaScanner from "./retina-scanner";

export default function ScanPage() {
  const router = useRouter();

  useEffect(() => {
    const zodiac = localStorage.getItem("zodiacSelected");

    if (!zodiac) {
      router.replace("/");
    }
  }, [router]);

  // This should only trigger when the scanner actually finishes its 100% calibration
  const handleScanComplete = () => {
    localStorage.setItem("scanCompleted", "true");
    router.push("/payment");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <GalaxyBackground />

      <div className="relative z-20">
        {/* Pass the complete handler to the component so it redirects only when finished */}
        <RetinaScanner onComplete={handleScanComplete} />
      </div>
    </main>
  );
}
