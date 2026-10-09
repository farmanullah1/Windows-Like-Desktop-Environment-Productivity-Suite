import React, { useEffect } from 'react';

interface StageHandoffProps {
  onComplete: () => void;
  reducedMotion?: boolean;
}

export const StageHandoff: React.FC<StageHandoffProps> = ({ onComplete, reducedMotion = false }) => {
  useEffect(() => {
    const duration = reducedMotion ? 180 : 380;
    const timer = setTimeout(onComplete, duration);
    return () => clearTimeout(timer);
  }, [onComplete, reducedMotion]);

  return (
    <div
      role="presentation"
      className={`fixed inset-0 z-[100000] bg-black flex items-center justify-center transition-opacity ${
        reducedMotion ? 'opacity-0 duration-200' : 'opacity-0 duration-400 ease-out'
      }`}
    >
      <div className="w-16 h-16 opacity-0 transform scale-105 transition-all duration-400">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <polygon
            points="50,10 88,32 88,76 50,98 12,76 12,32"
            stroke="#6366f1"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
};
