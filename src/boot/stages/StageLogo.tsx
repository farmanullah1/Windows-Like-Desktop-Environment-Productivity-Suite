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
      aria-label="Starting MyOS"
      className="fixed inset-0 z-[100000] bg-black flex flex-col items-center justify-center select-none text-white overflow-hidden"
    >
      <div className="sr-only" aria-live="polite">
        Starting MyOS Desktop Environment.
      </div>

      <div className="relative flex flex-col items-center">
        {/* Layer 3: Radial Accent Ambient Glow */}
        {!reducedMotion && (
          <div className="absolute -inset-16 rounded-full bg-gradient-to-tr from-blue-600/25 via-indigo-600/25 to-purple-500/20 blur-3xl pointer-events-none animate-pulse" />
        )}

        {/* Layer 4: Expanding Ring */}
        {!reducedMotion && (
          <div className="absolute w-32 h-32 rounded-full border border-sky-400/30 animate-ping opacity-25 pointer-events-none" />
        )}

        {/* Layer 1 & 2: Original MyOS Vector SVG Symbol */}
        <div className={`relative z-10 w-28 h-28 mb-5 flex items-center justify-center transition-all ${
          reducedMotion ? 'opacity-100' : 'animate-fadeIn scale-100 duration-700'
        }`}>
          <img
            src="/assets/branding/logo.svg"
            alt="MyOS Logo"
            className="w-full h-full object-contain drop-shadow-[0_0_35px_rgba(66,103,213,0.65)]"
          />
        </div>

        {/* Layer 5: Wordmark */}
        <h1 className="relative z-10 text-3xl font-extrabold tracking-tight text-white flex items-center gap-1">
          <span>My</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]">
            OS
          </span>
        </h1>

        {/* Layer 6: Tagline */}
        <p className="relative z-10 text-xs tracking-wider text-zinc-400 mt-2 font-medium">
          Hybrid Desktop Environment &amp; Productivity Suite
        </p>
      </div>
    </div>
  );
};
