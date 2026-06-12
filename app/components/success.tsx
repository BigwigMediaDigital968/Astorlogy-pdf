"use client";

import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-green-500">Payment Successful</h1>

      <button
        onClick={() => router.push("/download")}
        className="mt-6 rounded-lg bg-violet-600 px-6 py-3 text-white"
      >
        Download Report
      </button>
    </div>
  );
}
