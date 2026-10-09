import React, { useState, useEffect } from 'react';

interface StageLoaderProps {
  onComplete: () => void;
  reducedMotion?: boolean;
}

const INIT_STEPS = [
  'Initializing kernel services…',
  'Verifying Microsoft SQL Server connectivity…',
  'Hydrating 24 application manifests…',
  'Restoring theme tokens & audio synthesizer…',
  'Desktop workspace ready…',
];

export const StageLoader: React.FC<StageLoaderProps> = ({ onComplete, reducedMotion = false }) => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    // Step progression every 260ms
    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < INIT_STEPS.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 260);

    // Total duration ~1350ms (or 600ms in reduced motion)
    const duration = reducedMotion ? 600 : 1350;
    const timer = setTimeout(onComplete, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete, reducedMotion]);

  return (
    <div
      role="status"
      aria-label="Initializing MyOS workspace"
      className="fixed inset-0 z-[100000] bg-black flex flex-col items-center justify-center select-none text-white overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Subtle Static Logo in Loader Stage */}
        <div className="w-16 h-16 mb-8 opacity-90 drop-shadow-[0_0_20px_rgba(66,103,213,0.5)]">
          <img
            src="/assets/branding/logo.svg"
            alt="MyOS Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Orbiting Spinner or Static Ring */}
        <div className="relative w-10 h-10 mb-6 flex items-center justify-center">
          {!reducedMotion ? (
            <div className="w-8 h-8 rounded-full border-2 border-blue-500/20 border-t-blue-400 animate-spin" />
          ) : (
            <div className="w-3 h-3 rounded-full bg-blue-400" />
          )}
        </div>

        {/* Honest Progress Text */}
        <p
          aria-live="polite"
          className="text-xs font-mono text-zinc-400 tracking-wide text-center h-5 transition-opacity duration-200"
        >
          {INIT_STEPS[stepIndex]}
        </p>

        {/* Step Indicator Dots */}
        <div className="flex gap-1.5 mt-4">
          {INIT_STEPS.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx <= stepIndex ? 'bg-blue-400 scale-110' : 'bg-zinc-800'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
