import React, { useEffect } from 'react';
import { soundEngine } from '../../design-system/soundEngine';

interface StageLogoProps {
  onComplete: () => void;
  reducedMotion?: boolean;
}

export const StageLogo: React.FC<StageLogoProps> = ({ onComplete, reducedMotion = false }) => {
  useEffect(() => {
    soundEngine.play('boot_chime');
    const duration = reducedMotion ? 350 : 850;
    const timer = setTimeout(onComplete, duration);
    return () => clearTimeout(timer);
  }, [onComplete, reducedMotion]);

  return (
    <div
      role="status"
      aria-label="Starting Antigravity Desktop Workspace"
      className="fixed inset-0 z-[100000] bg-black flex flex-col items-center justify-center select-none text-white overflow-hidden"
    >
      <div className="sr-only" aria-live="polite">
        Starting Antigravity Desktop OS Workspace.
      </div>

      <div className="relative flex flex-col items-center">
        {/* Layer 3: Radial Accent Ambient Glow */}
        {!reducedMotion && (
          <div className="absolute -inset-16 rounded-full bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-cyan-500/10 blur-3xl pointer-events-none animate-pulse" />
        )}

        {/* Layer 4: Expanding Ring */}
        {!reducedMotion && (
          <div className="absolute w-28 h-28 rounded-full border border-blue-400/30 animate-ping opacity-20 pointer-events-none" />
        )}

        {/* Layer 1 & 2: Original Antigravity Vector SVG Symbol */}
        <div className={`relative z-10 w-24 h-24 mb-6 flex items-center justify-center transition-all ${
          reducedMotion ? 'opacity-100' : 'animate-fadeIn scale-100 duration-700'
        }`}>
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="bootGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <linearGradient id="bootGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>

            {/* Antigravity Hexagonal Gyro Prism */}
            <polygon
              points="50,10 88,32 88,76 50,98 12,76 12,32"
              stroke="url(#bootGrad1)"
              strokeWidth="4"
              strokeLinejoin="round"
              fill="rgba(15, 23, 42, 0.6)"
            />
            {/* Inner Floating Quantum Core */}
            <polygon
              points="50,26 74,40 74,68 50,82 26,68 26,40"
              fill="url(#bootGrad2)"
              opacity="0.85"
            />
            {/* Center Focal Orb */}
            <circle cx="50" cy="54" r="7" fill="#ffffff" className="drop-shadow-[0_0_8px_#ffffff]" />
          </svg>
        </div>

        {/* Layer 5: Wordmark */}
        <h1 className="relative z-10 text-xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 uppercase">
          Antigravity OS
        </h1>

        {/* Layer 6: Tagline */}
        <p className="relative z-10 text-xs tracking-[0.15em] text-zinc-400 mt-2 font-mono">
          Enterprise Desktop Workspace
        </p>
      </div>
    </div>
  );
};
