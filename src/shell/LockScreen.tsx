import React, { useState, useEffect } from 'react';
import { Unlock, ArrowRight, ShieldCheck, User } from 'lucide-react';
import { useDesktop } from '../core/desktopStore';
import { soundEngine } from '../design-system/soundEngine';

export const LockScreen: React.FC = () => {
  const { isLocked, setLocked, currentWallpaper } = useDesktop();
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isLocked) return null;

  const handleUnlock = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // Default PIN: 1234 or any entered PIN
    if (pin === '1234' || pin.length > 0) {
      soundEngine.play('success');
      setError(false);
      setPin('');
      setLocked(false);
    } else {
      soundEngine.play('error');
      setError(true);
      setTimeout(() => setError(false), 1200);
    }
  };

  const handleKeypadPress = (digit: string) => {
    soundEngine.play('click');
    if (pin.length < 6) {
      setPin((prev) => prev + digit);
    }
  };

  return (
    <div
      style={{ zIndex: 9999 }}
      className="fixed inset-0 z-[var(--z-lockscreen)] select-none overflow-hidden flex flex-col items-center justify-between p-8 text-white animate-fadeIn"
    >
      {/* Blurred Wallpaper Background with Dark Tint */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-xl scale-110 pointer-events-none transition-all duration-700"
        style={{ backgroundImage: `url(${currentWallpaper})` }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl pointer-events-none" />

      {/* Top Header: Clock & Date */}
      <div className="relative z-10 flex flex-col items-center text-center mt-10">
        <h1 className="text-7xl font-extralight tracking-tight font-sans drop-shadow-md">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </h1>
        <p className="text-lg font-medium text-white/80 mt-2 drop-shadow-sm">
          {time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Center: User Profile & PIN Unlock */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-xs">
        {/* User Avatar */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-1 shadow-2xl mb-3 flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
            <User className="w-10 h-10 text-white/90" />
          </div>
        </div>

        <h2 className="text-base font-semibold mb-1">Administrator</h2>
        <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Session Locked (Safe Mode)</span>
        </div>

        {/* PIN Input Form */}
        <form onSubmit={handleUnlock} className="w-full flex items-center gap-2 mb-4">
          <div className="relative flex-1">
            <input
              type="password"
              placeholder="Enter PIN (1234)..."
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              autoFocus
              className={`w-full px-4 py-2.5 rounded-xl bg-white/10 border text-center font-mono tracking-widest text-sm backdrop-blur-md focus:outline-none transition-all ${
                error
                  ? 'border-rose-500 bg-rose-500/20 text-rose-200 animate-shake'
                  : 'border-white/20 focus:border-blue-400 text-white'
              }`}
            />
          </div>
          <button
            type="submit"
            className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg active:scale-95 transition-all"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        {/* Quick Keypad */}
        <div className="grid grid-cols-3 gap-2 w-full max-w-[220px]">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => handleKeypadPress(num)}
              className="py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 font-mono text-sm font-semibold active:scale-95 transition-all"
            >
              {num}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              soundEngine.play('click');
              setPin('');
            }}
            className="py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 font-mono text-xs text-white/60 active:scale-95 transition-all"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={() => handleKeypadPress('0')}
            className="py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 font-mono text-sm font-semibold active:scale-95 transition-all"
          >
            0
          </button>
          <button
            type="button"
            onClick={() => handleUnlock()}
            className="py-2.5 rounded-xl bg-emerald-600/60 hover:bg-emerald-600 border border-emerald-500/40 text-emerald-200 text-xs font-semibold flex items-center justify-center active:scale-95 transition-all"
          >
            <Unlock className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer hint */}
      <div className="relative z-10 text-center text-xs text-white/50 mb-2">
        <p>Press Enter or use PIN <span className="font-mono text-white/80">1234</span> to unlock</p>
      </div>
    </div>
  );
};
