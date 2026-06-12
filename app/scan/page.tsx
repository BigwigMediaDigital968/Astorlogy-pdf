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

  const handleScanComplete = () => {
    localStorage.setItem("scanCompleted", "true");

    router.push("/payment");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <GalaxyBackground />

      <div className="relative z-20">
        <RetinaScanner />
      </div>
    </main>
  );
}
