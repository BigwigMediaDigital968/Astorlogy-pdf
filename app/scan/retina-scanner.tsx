"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ShieldAlert,
  Scan,
  Sparkles,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface RetinaScannerProps {
  onComplete: () => void;
}

export default function RetinaScanner({ onComplete }: RetinaScannerProps) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [verified, setVerified] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  const messages = [
    "Aligning with Ocular Nebula...",
    "Reading Celestial Frequency...",
    "Matching Astrological Blueprints...",
    "Analyzing Cosmic Aura Integrity...",
    "Generating Ocular Destiny Report...",
  ];

  const currentMessage =
    messages[Math.min(Math.floor(progress / 20), messages.length - 1)];

  // Scanning simulation triggers when user closes modal and starts
  useEffect(() => {
    if (!hasStarted) return;

    const duration = Math.floor(Math.random() * 5000) + 5000; // 5 to 10 sec
    const intervalTime = duration / 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setVerified(true);

          // Perform actual redirection after 3 seconds of showing success message
          setTimeout(() => {
            setRedirecting(true);
            router.push("/payment");
          }, 3000);

          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [hasStarted]);

  const handleStartScan = () => {
    setShowModal(false);
    setHasStarted(true);
  };

  const handleReset = () => {
    setProgress(0);
    setVerified(false);
    setRedirecting(false);
    setShowModal(true);
    setHasStarted(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 2000);

          return 100;
        }

        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#05030a] text-white font-sans overflow-hidden px-4 selection:bg-violet-500/35">
      {/* Dynamic Cosmic Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Foreground Stars / Ambient Dust */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIvPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjYwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiLz48Y2lyY2xlIGN4PSI4MCIgY3k9IjEyMCIgcj0iMS51IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiLz48L3N2Zz4=')] opacity-70 pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full max-w-lg z-10 flex flex-col items-center justify-center">
        {/* TOP STATUS BAR */}
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-500/10 border border-violet-500/20 text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
            Celestial ID Verification
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-cyan-200">
            Aura Alignments
          </h1>
        </div>

        {/* EYE/RETINA SCANNING BOX */}
        <div className="relative flex items-center justify-center w-[340px] h-[340px] rounded-3xl border border-white/[0.04] bg-white/[0.02] backdrop-blur-md p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
          {/* Futuristic Corner HUD Tech Brackets */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-500/40 rounded-tl-sm" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-500/40 rounded-tr-sm" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-500/40 rounded-bl-sm" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-500/40 rounded-br-sm" />

          {/* Concentric Cosmic Orbiting Circles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-violet-500/20"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute w-[240px] h-[240px] rounded-full border border-violet-500/30 shadow-[0_0_20px_rgba(139,92,246,0.05)]"
          />

          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[200px] h-[200px] rounded-full bg-indigo-500/[0.02] border border-cyan-500/30 shadow-inner flex items-center justify-center"
          />

          {/* Retinal Frame Window */}
          <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-violet-500/40 bg-black/80 flex items-center justify-center shadow-[0_0_35px_rgba(139,92,246,0.1)]">
            {/* Holographic Eye Drawing SVG */}
            <motion.div
              animate={
                hasStarted && !verified ? { scale: [1, 1.05, 1, 0.95, 1] } : {}
              }
              transition={{ duration: 3, repeat: Infinity }}
              className="text-violet-400 opacity-80"
            >
              <svg
                className="w-24 h-24"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Eyelash / Outline */}
                <path
                  d="M10 50C10 50 30 20 50 20C70 20 90 50 90 50C90 50 70 80 50 80C30 80 10 50 10 50Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Iris ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  stroke="url(#irisGrad)"
                  strokeWidth="3"
                />
                {/* Pupil */}
                <circle
                  cx="50"
                  cy="50"
                  r="10"
                  fill="currentColor"
                  className="text-cyan-400"
                />
                {/* Celestial Radiating Rays */}
                <line
                  x1="50"
                  y1="15"
                  x2="50"
                  y2="25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="50"
                  y1="75"
                  x2="50"
                  y2="85"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="15"
                  y1="50"
                  x2="25"
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="75"
                  y1="50"
                  x2="85"
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                {/* Gradients */}
                <defs>
                  <linearGradient id="irisGrad" x1="10" y1="10" x2="90" y2="90">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Glowing Scan Sweep Line */}
            {hasStarted && !verified && (
              <motion.div
                animate={{ y: [-100, 100, -100] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee,0_0_25px_#22d3ee] z-10"
              />
            )}

            {/* Verification Glare overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* METRICS & CALIBRATION RESULTS SECTION */}
        <div className="mt-8 w-full max-w-sm text-center">
          <AnimatePresence mode="wait">
            {!hasStarted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-slate-400 text-sm"
              >
                Waiting to begin optical cosmic reading...
              </motion.div>
            ) : !verified ? (
              <motion.div
                key="scanning-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs tracking-wider uppercase font-semibold text-cyan-400 animate-pulse flex items-center gap-1.5">
                    <Scan className="w-3.5 h-3.5" />
                    Scanning signature...
                  </span>
                  <span className="text-lg font-bold font-mono text-cyan-300">
                    {progress}%
                  </span>
                </div>

                {/* Main Progress Bar Container */}
                <div className="h-2.5 w-full bg-slate-900/60 rounded-full overflow-hidden p-[2px] border border-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                  />
                </div>

                <p className="text-sm font-medium text-violet-300 tracking-wide min-h-[20px]">
                  {currentMessage}
                </p>
              </motion.div>
            ) : !redirecting ? (
              <motion.div
                key="success-state"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)] flex flex-col items-center"
              >
                <div className="p-2.5 rounded-full bg-emerald-500/20 text-emerald-400 mb-3 animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-emerald-400">
                  Verification Successful!
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Celestial coordinates parsed. Transferring to Cosmic Destiny
                  Report...
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-violet-300 bg-violet-950/40 px-3 py-1 rounded-full border border-violet-500/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Secure
                  Gateway Connected
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="redirect-state"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-center flex flex-col items-center"
              >
                <span className="text-xs font-semibold text-indigo-400 animate-pulse tracking-wide uppercase mb-1">
                  Connecting Payment Gateway
                </span>
                <p className="text-sm text-slate-300 mb-4">
                  Redirecting securely to `/payment`...
                </p>
                <button
                  onClick={handleReset}
                  className="px-4 py-1.5 text-xs bg-white/10 hover:bg-white/15 rounded-lg border border-white/5 transition"
                >
                  Restart Simulation
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* POPUP INITIATE DIALOG MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 15, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0c0914] p-8 shadow-[0_0_50px_rgba(139,92,246,0.15)]"
            >
              {/* Decorative design nodes inside modal */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-[40px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px]" />

              {/* Warning/Biometric Scan Icon */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/30 text-violet-400 mb-6 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                <Scan className="w-7 h-7 animate-pulse" />
              </div>

              <h2 className="text-2xl font-bold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-200">
                Ocular Nebula Scan
              </h2>

              <p className="mt-3 text-sm text-slate-400 text-center leading-relaxed">
                To extract your planetary charts and destiny alignments, we must
                capture your unique iris frequency.
              </p>

              {/* Instruction points */}
              <div className="mt-5 space-y-3 bg-white/[0.02] p-4 rounded-2xl border border-white/[0.04]">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-xs font-bold text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded-md border border-cyan-500/20">
                    01
                  </div>
                  <p className="text-xs text-slate-300">
                    Align your eyes within the dynamic target scanning center.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-xs font-bold text-violet-400 bg-violet-950/50 px-2 py-0.5 rounded-md border border-violet-500/20">
                    02
                  </div>
                  <p className="text-xs text-slate-300">
                    Hold steady during calibration to ensure reliable frequency
                    readings.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-[11px] text-amber-300/80 justify-center">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>
                  Your physical biodata is never stored, only cosmic vibrations.
                </span>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => router.push("/")}
                  className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 transition duration-200 active:scale-95 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleStartScan}
                  className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.5)] transition duration-200 active:scale-95 cursor-pointer"
                >
                  Initiate Calibration
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
