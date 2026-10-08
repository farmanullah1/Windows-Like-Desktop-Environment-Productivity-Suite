import React from 'react';
import {
  Wifi,
  Bluetooth,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Zap,
  Battery,
  Settings as SettingsIcon,
  Check,
} from 'lucide-react';
import { useDesktop } from '../core/desktopStore';
import { useTheme } from '../../src/design-system/ThemeProvider';
import { soundEngine } from '../design-system/soundEngine';

export const QuickSettings: React.FC = () => {
  const { isQuickSettingsOpen, setQuickSettingsOpen, openApp, metrics } = useDesktop();
  const {
    theme,
    setTheme,
    effectsMode,
    setEffectsMode,
    soundEnabled,
    setSoundEnabled,
    soundVolume,
    setSoundVolume,
  } = useTheme();

  if (!isQuickSettingsOpen) return null;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute bottom-16 right-4 w-80 p-4 rounded-2xl bg-[var(--surface-menu)] border border-[var(--border-strong)] shadow-2xl backdrop-blur-3xl z-[var(--z-quick-settings)] flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-150 select-none"
    >
      {/* 2x3 Toggles Grid */}
      <div className="grid grid-cols-2 gap-2">
        {/* Wi-Fi Toggle */}
        <button
          onClick={() => soundEngine.play('click')}
          className="flex items-center gap-3 p-3 rounded-xl border border-[var(--accent-primary)] bg-[var(--accent-subtle)] text-[var(--accent-primary)] font-semibold text-xs transition-all"
        >
          <Wifi className="w-4 h-4" />
          <div className="text-left">
            <span className="block leading-tight">Wi-Fi</span>
            <span className="text-[10px] text-[var(--text-muted)] font-normal">Connected</span>
          </div>
        </button>

        {/* Bluetooth Toggle */}
        <button
          onClick={() => soundEngine.play('click')}
          className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] hover:border-[var(--border-medium)] text-xs font-semibold transition-all"
        >
          <Bluetooth className="w-4 h-4 text-blue-400" />
          <div className="text-left">
            <span className="block leading-tight">Bluetooth</span>
            <span className="text-[10px] text-[var(--text-muted)] font-normal">Ready</span>
          </div>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] hover:border-[var(--border-medium)] text-xs font-semibold transition-all"
        >
          {theme === 'dark' ? <Moon className="w-4 h-4 text-purple-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
          <div className="text-left">
            <span className="block leading-tight">Theme</span>
            <span className="text-[10px] text-[var(--text-muted)] font-normal capitalize">{theme}</span>
          </div>
        </button>

        {/* Audio Mute Toggle */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-semibold transition-all ${
            soundEnabled
              ? 'border-[var(--accent-primary)] bg-[var(--accent-subtle)] text-[var(--accent-primary)]'
              : 'border-[var(--border-subtle)] bg-[var(--surface-card)] text-[var(--text-muted)]'
          }`}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-red-400" />}
          <div className="text-left">
            <span className="block leading-tight">Sound Cues</span>
            <span className="text-[10px] font-normal">{soundEnabled ? 'Enabled' : 'Muted'}</span>
          </div>
        </button>
      </div>

      {/* Sliders Area */}
      <div className="space-y-3 p-3 rounded-xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
        {/* Volume Slider */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 font-medium">
              <Volume2 className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <span>Volume</span>
            </span>
            <span className="text-[11px] font-mono text-[var(--text-muted)]">{Math.round(soundVolume * 100)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={soundVolume}
            onChange={(e) => setSoundVolume(parseFloat(e.target.value))}
            className="w-full accent-[var(--accent-primary)] cursor-pointer"
          />
        </div>
      </div>

      {/* Footer System Telemetry */}
      <div className="flex items-center justify-between pt-1 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
        <div className="flex items-center gap-2">
          <Battery className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold text-[var(--text-primary)]">{metrics.batteryLevel}%</span>
          <span>{metrics.isCharging ? 'Charging' : 'Remaining'}</span>
        </div>

        <button
          onClick={() => {
            soundEngine.play('click');
            setQuickSettingsOpen(false);
            openApp('settings', 'Settings', 'Settings');
          }}
          className="p-1.5 rounded-lg hover:bg-[var(--surface-card)] text-[var(--text-secondary)] hover:text-white transition-colors"
          title="Open All Settings"
        >
          <SettingsIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
