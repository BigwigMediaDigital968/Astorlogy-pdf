// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import {
//   ShieldAlert,
//   Scan,
//   Sparkles,
//   CheckCircle,
//   ShieldCheck,
// } from "lucide-react";
// import { useRouter } from "next/navigation";

// interface RetinaScannerProps {
//   onComplete: () => void;
// }

// export default function RetinaScanner({ onComplete }: RetinaScannerProps) {
//   const router = useRouter();
//   const [showModal, setShowModal] = useState(true);
//   const [hasStarted, setHasStarted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [verified, setVerified] = useState(false);
//   const [redirecting, setRedirecting] = useState(false);

//   const messages = [
//     "Aligning with Ocular Nebula...",
//     "Reading Celestial Frequency...",
//     "Matching Astrological Blueprints...",
//     "Analyzing Cosmic Aura Integrity...",
//     "Generating Ocular Destiny Report...",
//   ];

//   const currentMessage =
//     messages[Math.min(Math.floor(progress / 20), messages.length - 1)];

//   // Scanning simulation triggers when user closes modal and starts
//   useEffect(() => {
//     if (!hasStarted) return;

//     const duration = Math.floor(Math.random() * 5000) + 5000; // 5 to 10 sec
//     const intervalTime = duration / 100;

//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setVerified(true);

//           // Perform actual redirection after 3 seconds of showing success message
//           setTimeout(() => {
//             setRedirecting(true);
//             router.push("/payment");
//           }, 3000);

//           return 100;
//         }
//         return prev + 1;
//       });
//     }, intervalTime);

//     return () => clearInterval(interval);
//   }, [hasStarted]);

//   const handleStartScan = () => {
//     setShowModal(false);
//     setHasStarted(true);
//   };

//   const handleReset = () => {
//     setProgress(0);
//     setVerified(false);
//     setRedirecting(false);
//     setShowModal(true);
//     setHasStarted(false);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         const next = prev + 1;

//         if (next >= 100) {
//           clearInterval(interval);

//           setTimeout(() => {
//             onComplete();
//           }, 2000);

//           return 100;
//         }

//         return next;
//       });
//     }, 80);

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   return (
//     <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#05030a] text-white font-sans overflow-hidden px-4 selection:bg-violet-500/35">
//       {/* Dynamic Cosmic Background Gradients */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

//       {/* Foreground Stars / Ambient Dust */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIvPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjYwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiLz48Y2lyY2xlIGN4PSI4MCIgY3k9IjEyMCIgcj0iMS51IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiLz48L3N2Zz4=')] opacity-70 pointer-events-none" />

//       {/* Main Container */}
//       <div className="relative w-full max-w-lg z-10 flex flex-col items-center justify-center">
//         {/* TOP STATUS BAR */}
//         <div className="mb-8 text-center">
//           <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-500/10 border border-violet-500/20 text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
//             <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
//             Celestial ID Verification
//           </span>
//           <h1 className="mt-4 text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-cyan-200">
//             Aura Alignments
//           </h1>
//         </div>

//         {/* EYE/RETINA SCANNING BOX */}
//         <div className="relative flex items-center justify-center w-[340px] h-[340px] rounded-3xl border border-white/[0.04] bg-white/[0.02] backdrop-blur-md p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
//           {/* Futuristic Corner HUD Tech Brackets */}
//           <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-500/40 rounded-tl-sm" />
//           <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-500/40 rounded-tr-sm" />
//           <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-500/40 rounded-bl-sm" />
//           <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-500/40 rounded-br-sm" />

//           {/* Concentric Cosmic Orbiting Circles */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//             className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-violet-500/20"
//           />

//           <motion.div
//             animate={{ rotate: -360 }}
//             transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//             className="absolute w-[240px] h-[240px] rounded-full border border-violet-500/30 shadow-[0_0_20px_rgba(139,92,246,0.05)]"
//           />

//           <motion.div
//             animate={{ scale: [1, 1.04, 1] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute w-[200px] h-[200px] rounded-full bg-indigo-500/[0.02] border border-cyan-500/30 shadow-inner flex items-center justify-center"
//           />

//           {/* Retinal Frame Window */}
//           <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-violet-500/40 bg-black/80 flex items-center justify-center shadow-[0_0_35px_rgba(139,92,246,0.1)]">
//             {/* Holographic Eye Drawing SVG */}
//             <motion.div
//               animate={
//                 hasStarted && !verified ? { scale: [1, 1.05, 1, 0.95, 1] } : {}
//               }
//               transition={{ duration: 3, repeat: Infinity }}
//               className="text-violet-400 opacity-80"
//             >
//               <svg
//                 className="w-24 h-24"
//                 viewBox="0 0 100 100"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {/* Eyelash / Outline */}
//                 <path
//                   d="M10 50C10 50 30 20 50 20C70 20 90 50 90 50C90 50 70 80 50 80C30 80 10 50 10 50Z"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 {/* Iris ring */}
//                 <circle
//                   cx="50"
//                   cy="50"
//                   r="20"
//                   stroke="url(#irisGrad)"
//                   strokeWidth="3"
//                 />
//                 {/* Pupil */}
//                 <circle
//                   cx="50"
//                   cy="50"
//                   r="10"
//                   fill="currentColor"
//                   className="text-cyan-400"
//                 />
//                 {/* Celestial Radiating Rays */}
//                 <line
//                   x1="50"
//                   y1="15"
//                   x2="50"
//                   y2="25"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 />
//                 <line
//                   x1="50"
//                   y1="75"
//                   x2="50"
//                   y2="85"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 />
//                 <line
//                   x1="15"
//                   y1="50"
//                   x2="25"
//                   y2="50"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 />
//                 <line
//                   x1="75"
//                   y1="50"
//                   x2="85"
//                   y2="50"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 />
//                 {/* Gradients */}
//                 <defs>
//                   <linearGradient id="irisGrad" x1="10" y1="10" x2="90" y2="90">
//                     <stop offset="0%" stopColor="#8b5cf6" />
//                     <stop offset="100%" stopColor="#22d3ee" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </motion.div>

//             {/* Glowing Scan Sweep Line */}
//             {hasStarted && !verified && (
//               <motion.div
//                 animate={{ y: [-100, 100, -100] }}
//                 transition={{
//                   duration: 2.2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee,0_0_25px_#22d3ee] z-10"
//               />
//             )}

//             {/* Verification Glare overlay */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
//           </div>
//         </div>

//         {/* METRICS & CALIBRATION RESULTS SECTION */}
//         <div className="mt-8 w-full max-w-sm text-center">
//           <AnimatePresence mode="wait">
//             {!hasStarted ? (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="text-slate-400 text-sm"
//               >
//                 Waiting to begin optical cosmic reading...
//               </motion.div>
//             ) : !verified ? (
//               <motion.div
//                 key="scanning-state"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 className="space-y-4"
//               >
//                 <div className="flex justify-between items-center px-1">
//                   <span className="text-xs tracking-wider uppercase font-semibold text-cyan-400 animate-pulse flex items-center gap-1.5">
//                     <Scan className="w-3.5 h-3.5" />
//                     Scanning signature...
//                   </span>
//                   <span className="text-lg font-bold font-mono text-cyan-300">
//                     {progress}%
//                   </span>
//                 </div>

//                 {/* Main Progress Bar Container */}
//                 <div className="h-2.5 w-full bg-slate-900/60 rounded-full overflow-hidden p-[2px] border border-white/5">
//                   <motion.div
//                     className="h-full rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
//                     style={{ width: `${progress}%` }}
//                     transition={{ ease: "linear" }}
//                   />
//                 </div>

//                 <p className="text-sm font-medium text-violet-300 tracking-wide min-h-[20px]">
//                   {currentMessage}
//                 </p>
//               </motion.div>
//             ) : !redirecting ? (
//               <motion.div
//                 key="success-state"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)] flex flex-col items-center"
//               >
//                 <div className="p-2.5 rounded-full bg-emerald-500/20 text-emerald-400 mb-3 animate-bounce">
//                   <CheckCircle className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-lg font-bold text-emerald-400">
//                   Verification Successful!
//                 </h3>
//                 <p className="mt-1 text-xs text-slate-400">
//                   Celestial coordinates parsed. Transferring to Cosmic Destiny
//                   Report...
//                 </p>
//                 <div className="mt-4 flex items-center gap-1.5 text-xs text-violet-300 bg-violet-950/40 px-3 py-1 rounded-full border border-violet-500/10">
//                   <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Secure
//                   Gateway Connected
//                 </div>
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="redirect-state"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-center flex flex-col items-center"
//               >
//                 <span className="text-xs font-semibold text-indigo-400 animate-pulse tracking-wide uppercase mb-1">
//                   Connecting Payment Gateway
//                 </span>
//                 <p className="text-sm text-slate-300 mb-4">
//                   Redirecting securely to `/payment`...
//                 </p>
//                 <button
//                   onClick={handleReset}
//                   className="px-4 py-1.5 text-xs bg-white/10 hover:bg-white/15 rounded-lg border border-white/5 transition"
//                 >
//                   Restart Simulation
//                 </button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* POPUP INITIATE DIALOG MODAL */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20, opacity: 0 }}
//               animate={{ scale: 1, y: 0, opacity: 1 }}
//               exit={{ scale: 0.92, y: 15, opacity: 0 }}
//               transition={{ type: "spring", damping: 25, stiffness: 180 }}
//               className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0c0914] p-8 shadow-[0_0_50px_rgba(139,92,246,0.15)]"
//             >
//               {/* Decorative design nodes inside modal */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-[40px]" />
//               <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px]" />

//               {/* Warning/Biometric Scan Icon */}
//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/30 text-violet-400 mb-6 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
//                 <Scan className="w-7 h-7 animate-pulse" />
//               </div>

//               <h2 className="text-2xl font-bold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-200">
//                 Ocular Nebula Scan
//               </h2>

//               <p className="mt-3 text-sm text-slate-400 text-center leading-relaxed">
//                 To extract your planetary charts and destiny alignments, we must
//                 capture your unique iris frequency.
//               </p>

//               {/* Instruction points */}
//               <div className="mt-5 space-y-3 bg-white/[0.02] p-4 rounded-2xl border border-white/[0.04]">
//                 <div className="flex items-start gap-3">
//                   <div className="mt-0.5 text-xs font-bold text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded-md border border-cyan-500/20">
//                     01
//                   </div>
//                   <p className="text-xs text-slate-300">
//                     Align your eyes within the dynamic target scanning center.
//                   </p>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <div className="mt-0.5 text-xs font-bold text-violet-400 bg-violet-950/50 px-2 py-0.5 rounded-md border border-violet-500/20">
//                     02
//                   </div>
//                   <p className="text-xs text-slate-300">
//                     Hold steady during calibration to ensure reliable frequency
//                     readings.
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-5 flex items-center gap-2 text-[11px] text-amber-300/80 justify-center">
//                 <ShieldAlert className="w-3.5 h-3.5" />
//                 <span>
//                   Your physical biodata is never stored, only cosmic vibrations.
//                 </span>
//               </div>

//               <div className="mt-8 flex gap-3">
//                 <button
//                   onClick={() => router.push("/")}
//                   className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 transition duration-200 active:scale-95 cursor-pointer"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleStartScan}
//                   className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.5)] transition duration-200 active:scale-95 cursor-pointer"
//                 >
//                   Initiate Calibration
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ShieldAlert,
  Scan,
  Sparkles,
  CheckCircle,
  ShieldCheck,
  Camera,
  Activity,
  Cpu,
  RefreshCw,
  X,
} from "lucide-react";

interface RetinaScannerProps {
  onComplete?: () => void;
}

export default function App({ onComplete }: RetinaScannerProps) {
  const [showModal, setShowModal] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [verified, setVerified] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [cameraGranted, setCameraGranted] = useState(false);
  const [cameraError, setCameraError] = useState("");

  const requestCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
        },
        audio: false,
      });

      streamRef.current = stream;

      // Force video source assignment
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        // Explicitly play to prevent frozen frames in certain environments
        videoRef.current
          .play()
          .catch((err) => console.log("Video play interrupted:", err));
      }

      setCameraGranted(true);
      setCameraError("");
    } catch (error) {
      console.error(error);
      setCameraError(
        "Camera access is required to perform retinal verification.",
      );
    }
  };

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
  };

  const messages = [
    "Aligning with Ocular Nebula...",
    "Reading Celestial Frequency...",
    "Matching Astrological Blueprints...",
    "Analyzing Cosmic Aura Integrity...",
    "Generating Ocular Destiny Report...",
  ];

  const currentMessage =
    messages[Math.min(Math.floor(progress / 20), messages.length - 1)];

  // Scanning simulation triggers ONLY when user starts the scan from the modal
  useEffect(() => {
    if (!hasStarted) return;

    const duration = Math.floor(Math.random() * 5000) + 5000; // 5 to 10 seconds scan duration
    const intervalTime = duration / 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          stopCamera();
          setVerified(true);

          // Delay to show the "Success" confirmation before invoking parent redirect handler
          setTimeout(() => {
            setRedirecting(true);
            if (onComplete) {
              onComplete();
            } else {
              window.location.href = "/payment";
            }
          }, 3000);

          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [hasStarted, onComplete]);

  const handleStartScan = async () => {
    await requestCameraAccess();
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

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#040208] text-white font-sans overflow-hidden px-4 py-8 selection:bg-violet-500/35">
      {/* Sci-Fi Grid Overlay background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,24,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(18,16,24,0.4)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

      {/* Dynamic Cosmic Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/[0.03] rounded-full blur-[130px] pointer-events-none animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-violet-600/[0.04] rounded-full blur-[110px] pointer-events-none animate-pulse"
        style={{ animationDuration: "6s" }}
      />

      {/* Foreground Stars / Ambient Dust */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIvPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjYwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiLz48Y2lyY2xlIGN4PSI4MCIgY3k9IjEyMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiLz4vP3N2Zz4=')] opacity-60 pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full max-w-5xl z-10 flex flex-col items-center">
        {/* TOP STATUS BAR */}
        <div className="mb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.1)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
            Biometric Destiny Interface
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-cyan-200"
          >
            Aura Retinal Alignment
          </motion.h1>
          <p className="text-xs text-slate-500 mt-2 font-mono uppercase tracking-[0.15em]">
            System status: Active & Shield-Secured
          </p>
        </div>

        {/* WORKSPACE GRID: Left Diagnostic Telemetry, Center Scanner, Right Diagnostic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center justify-center max-w-4xl px-2">
          {/* Left Panel: Holographic Parameters (Desktop only) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-4 text-left">
            <div className="p-4 rounded-2xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-cyan-400 tracking-wider mb-3">
                <Activity className="w-4 h-4" />
                <span>Diagnostics</span>
              </div>
              <div className="space-y-3 font-mono text-[11px] text-slate-400">
                <div className="flex justify-between border-b border-white/[0.04] pb-1.5">
                  <span>SPECTROGRAPH</span>
                  <span className="text-white">IR-ACTIVE</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.04] pb-1.5">
                  <span>IRIS DEPTH</span>
                  <span className="text-white">AUTO-FOCAL</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.04] pb-1.5">
                  <span>POLAR GRID</span>
                  <span className="text-white">COSMIC-8</span>
                </div>
                <div className="flex justify-between pb-0.5">
                  <span>SIGNAL STRENGTH</span>
                  <span className="text-emerald-400 animate-pulse">
                    EXCELLENT
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-violet-400 tracking-wider mb-2">
                <Cpu className="w-4 h-4" />
                <span>Frequency lock</span>
              </div>
              <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden p-[1px] border border-white/5">
                <div
                  className="h-full rounded-full bg-violet-500 animate-pulse"
                  style={{ width: "84%" }}
                />
              </div>
              <p className="text-[10px] text-slate-500 mt-2 font-mono">
                Syncing biological resonance variables with constellation nodes.
              </p>
            </div>
          </div>

          {/* Center: Retina Scanning Box */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center w-[320px] h-[320px] sm:w-[350px] sm:h-[350px] rounded-full border border-white/[0.03] bg-white/[0.02] backdrop-blur-xl p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]">
              {/* Dynamic Corner HUD Targets inside the circle layout */}
              <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-cyan-500/40" />
              <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-cyan-500/40" />
              <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-cyan-500/40" />
              <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-cyan-500/40" />

              {/* Concentric Cosmic Orbiting Circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[290px] h-[290px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-violet-500/10 pointer-events-none"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] rounded-full border border-violet-500/20 shadow-[0_0_20px_rgba(139,92,246,0.03)] pointer-events-none"
              />

              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[210px] h-[210px] sm:w-[230px] sm:h-[230px] rounded-full bg-indigo-500/[0.01] border border-cyan-500/20 flex items-center justify-center pointer-events-none"
              />

              {/* Retinal Camera Frame Window */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-violet-500/35 bg-black/90 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.15)] z-10">
                {/* Simulated Grid Targeting Reticle Overlay */}
                <div className="absolute inset-0 border border-white/[0.03] rounded-full pointer-events-none z-20" />
                <div className="absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-cyan-500/10 pointer-events-none z-20" />
                <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-cyan-500/10 pointer-events-none z-20" />

                {/* Camera / Eye Video Stream Layer - Always mounted to avoid ref re-binding race condition */}
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className={`absolute inset-0 h-full w-full object-cover scale-x-[-1] transition-opacity duration-500 ${
                    cameraGranted && !cameraError
                      ? "opacity-100 z-10"
                      : "opacity-0 pointer-events-none"
                  }`}
                />

                {/* Backup Icon Placeholder when Camera Signal isn't live */}
                {(!cameraGranted || cameraError) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-slate-500 z-10">
                    <Camera className="w-10 h-10 text-violet-500/40 mb-2 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">
                      Awaiting Signal
                    </span>
                  </div>
                )}

                {/* Futuristic Scanning Overlay Screen Tint */}
                <div className="absolute inset-0 bg-indigo-950/10 mix-blend-color-dodge pointer-events-none z-20" />

                {/* Glowing Scan Sweep Line */}
                {hasStarted && !verified && (
                  <motion.div
                    animate={{ y: [-110, 110, -110] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee,0_0_25px_#22d3ee] z-30 pointer-events-none"
                  />
                )}

                {/* Verification Glare overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />
              </div>
            </div>
          </div>

          {/* Right Panel: Holographic Guidelines (Desktop only) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-4 text-left">
            <div className="p-4 rounded-2xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#FCC151] tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Security Protocol</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-400 mb-2">
                Verification checks alignment against cosmic geometry patterns
                without storing physiological footprints.
              </p>
              <div className="px-2 py-1 rounded bg-white/5 inline-block text-[9px] font-mono text-cyan-300 border border-white/5">
                SHA-256 ENCRYPTED
              </div>
            </div>

            {hasStarted && !verified && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 rounded-2xl border border-cyan-500/10 bg-cyan-500/[0.01] animate-pulse"
              >
                <div className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest mb-1">
                  Target Lock Status:
                </div>
                <p className="text-xs text-slate-300">
                  Keep eye positioned inside the target guide.
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* METRICS & CALIBRATION RESULTS SECTION */}
        <div className="mt-8 w-full max-w-sm text-center px-4">
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
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
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
                  className="px-4 py-1.5 text-xs bg-white/10 hover:bg-white/15 rounded-lg border border-white/5 transition flex items-center gap-1.5 cursor-pointer hover:text-white"
                >
                  <RefreshCw className="w-3 h-3" />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 15, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0c0914] p-8 shadow-[0_0_50px_rgba(139,92,246,0.15)]"
            >
              {/* Close Button element to increase feel of control */}
              <button
                onClick={() => {
                  window.location.href = "/";
                }}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

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
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Allow temporary camera access and align your eye within the
                    dynamic circular window.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-xs font-bold text-violet-400 bg-violet-950/50 px-2 py-0.5 rounded-md border border-violet-500/20">
                    02
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Hold steady during calibration to ensure high-fidelity
                    frequency readings.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-[11px] text-amber-300/80 justify-center leading-relaxed text-center">
                <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0" />
                <span>
                  Your physical biodata is never stored, only cosmic vibrations.
                </span>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => {
                    window.location.href = "/";
                  }}
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
