import React, { useState, useEffect } from 'react';
import {
  CloudSun,
  Sun,
  CloudRain,
  Wind,
  Droplets,
  Cpu,
  Activity,
  HardDrive,
  Calendar as CalendarIcon,
  Plus,
  Trash2,
  Clock,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { useDesktop } from '../core/desktopStore';
import { soundEngine } from '../design-system/soundEngine';

interface ForecastDay {
  day: string;
  icon: React.ComponentType<{ className?: string }>;
  temp: number;
}

const CITIES = [
  { name: 'San Francisco', temp: 68, condition: 'Partly Cloudy', humidity: 54, wind: 8 },
  { name: 'Tokyo', temp: 72, condition: 'Clear', humidity: 48, wind: 6 },
  { name: 'London', temp: 61, condition: 'Showers', humidity: 78, wind: 12 },
  { name: 'New York', temp: 65, condition: 'Sunny', humidity: 50, wind: 9 },
];

export const DesktopWidgets: React.FC = () => {
  const {
    metrics,
    widgetsVisible,
    stickyNotes,
    addStickyNote,
    updateStickyNote,
    deleteStickyNote,
  } = useDesktop();

  const [cityIndex, setCityIndex] = useState(0);
  const [isCelsius, setIsCelsius] = useState(false);
  const [time, setTime] = useState(new Date());
  const [cpuHistory, setCpuHistory] = useState<number[]>([12, 18, 15, 24, 20, 16, 28, 22, 19, 25]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setCpuHistory((prev) => {
        const nextVal = Math.min(95, Math.max(8, metrics.cpuUsage + Math.floor(Math.random() * 9 - 4)));
        return [...prev.slice(1), nextVal];
      });
    }, 2000);
    return () => clearInterval(timer);
  }, [metrics.cpuUsage]);

  if (!widgetsVisible) return null;

  const currentCity = CITIES[cityIndex];
  const displayTemp = isCelsius
    ? Math.round(((currentCity.temp - 32) * 5) / 9)
    : currentCity.temp;

  const forecast: ForecastDay[] = [
    { day: 'Wed', icon: CloudSun, temp: isCelsius ? 20 : 68 },
    { day: 'Thu', icon: Sun, temp: isCelsius ? 22 : 72 },
    { day: 'Fri', icon: CloudRain, temp: isCelsius ? 17 : 63 },
    { day: 'Sat', icon: Sun, temp: isCelsius ? 23 : 74 },
  ];

  const cycleCity = () => {
    soundEngine.play('click');
    setCityIndex((prev) => (prev + 1) % CITIES.length);
  };

  const STICKY_COLORS = {
    yellow: 'bg-amber-100 border-amber-300 text-amber-950',
    teal: 'bg-teal-100 border-teal-300 text-teal-950',
    coral: 'bg-rose-100 border-rose-300 text-rose-950',
    violet: 'bg-purple-100 border-purple-300 text-purple-950',
    sky: 'bg-sky-100 border-sky-300 text-sky-950',
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-[var(--z-desktop)] overflow-hidden">
      {/* Sticky Notes Canvas Layer */}
      {stickyNotes.map((note) => {
        const colorClass = STICKY_COLORS[note.color] || STICKY_COLORS.yellow;
        return (
          <div
            key={note.id}
            style={{ left: `${note.x}px`, top: `${note.y}px` }}
            className={`absolute w-52 pointer-events-auto p-3 rounded-xl border shadow-xl backdrop-blur-md transition-shadow hover:shadow-2xl flex flex-col group ${colorClass}`}
          >
            <div className="flex items-center justify-between pb-1.5 border-b border-black/10 mb-2">
              <div className="flex items-center gap-1">
                {(['yellow', 'teal', 'coral', 'violet'] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => updateStickyNote(note.id, note.text, c)}
                    className={`w-3 h-3 rounded-full border border-black/20 ${
                      c === 'yellow'
                        ? 'bg-amber-300'
                        : c === 'teal'
                        ? 'bg-teal-300'
                        : c === 'coral'
                        ? 'bg-rose-300'
                        : 'bg-purple-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => deleteStickyNote(note.id)}
                className="opacity-0 group-hover:opacity-100 p-0.5 hover:bg-black/10 rounded transition-opacity"
                title="Delete note"
              >
                <Trash2 className="w-3 h-3 opacity-70" />
              </button>
            </div>
            <textarea
              value={note.text}
              onChange={(e) => updateStickyNote(note.id, e.target.value)}
              className="w-full bg-transparent resize-none text-xs leading-relaxed focus:outline-none min-h-[80px]"
              placeholder="Write a sticky note..."
            />
          </div>
        );
      })}

      {/* Right-Hand Desktop Sidebar Widgets */}
      <div className="absolute right-5 top-14 w-72 flex flex-col gap-3 pointer-events-auto">
        {/* Weather Widget */}
        <div className="p-3.5 rounded-2xl bg-[var(--surface-translucent)] border border-[var(--border-subtle)] backdrop-blur-xl shadow-xl text-[var(--text-primary)] hover:border-[var(--accent-primary)]/40 transition-all">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={cycleCity}
              className="flex items-center gap-1 text-xs font-semibold hover:text-[var(--accent-primary)] transition-colors group"
            >
              <span>{currentCity.name}</span>
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => setIsCelsius(!isCelsius)}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--surface-card)] border border-[var(--border-subtle)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors"
            >
              °{isCelsius ? 'C' : 'F'}
            </button>
          </div>

          <div className="flex items-center justify-between my-2">
            <div>
              <div className="text-3xl font-light tracking-tight font-sans">
                {displayTemp}°
              </div>
              <div className="text-[11px] text-[var(--text-secondary)] font-medium">
                {currentCity.condition}
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <CloudSun className="w-7 h-7" />
            </div>
          </div>

          {/* Forecast row */}
          <div className="grid grid-cols-4 gap-1 pt-2 border-t border-[var(--border-subtle)] text-center">
            {forecast.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-[10px] text-[var(--text-secondary)]">{f.day}</span>
                  <Icon className="w-3.5 h-3.5 my-1 text-amber-400" />
                  <span className="text-[11px] font-semibold">{f.temp}°</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live System Performance Telemetry Widget */}
        <div className="p-3.5 rounded-2xl bg-[var(--surface-translucent)] border border-[var(--border-subtle)] backdrop-blur-xl shadow-xl text-[var(--text-primary)] hover:border-[var(--accent-primary)]/40 transition-all">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <Activity className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
              <span>System Heartbeat</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-medium">Normal</span>
          </div>

          {/* SVG Sparkline Pulse */}
          <div className="h-10 w-full mb-2.5">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 35" preserveAspectRatio="none">
              <defs>
                <linearGradient id="cpuGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Fill */}
              <polygon
                points={`0,35 ${cpuHistory.map((v, i) => `${i * 11},${35 - (v / 100) * 30}`).join(' ')} 100,35`}
                fill="url(#cpuGrad)"
              />
              {/* Line */}
              <polyline
                points={cpuHistory.map((v, i) => `${i * 11},${35 - (v / 100) * 30}`).join(' ')}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Gauges */}
          <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-[var(--border-subtle)]">
            <div className="p-1.5 rounded-lg bg-[var(--surface-card)]">
              <div className="text-[10px] text-[var(--text-secondary)]">CPU</div>
              <div className="text-xs font-bold text-blue-400 font-mono">{metrics.cpuUsage}%</div>
            </div>
            <div className="p-1.5 rounded-lg bg-[var(--surface-card)]">
              <div className="text-[10px] text-[var(--text-secondary)]">RAM</div>
              <div className="text-xs font-bold text-purple-400 font-mono">
                {Math.round((metrics.memoryUsedMb / metrics.memoryTotalMb) * 100)}%
              </div>
            </div>
            <div className="p-1.5 rounded-lg bg-[var(--surface-card)]">
              <div className="text-[10px] text-[var(--text-secondary)]">Disk</div>
              <div className="text-xs font-bold text-emerald-400 font-mono">36%</div>
            </div>
          </div>
        </div>

        {/* Quick Clock & New Sticky Note Action */}
        <div className="p-3 rounded-2xl bg-[var(--surface-translucent)] border border-[var(--border-subtle)] backdrop-blur-xl shadow-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[var(--accent-primary)]" />
            <div>
              <div className="text-xs font-bold font-mono">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </div>
              <div className="text-[10px] text-[var(--text-secondary)]">
                {time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
              </div>
            </div>
          </div>

          <button
            onClick={() =>
              addStickyNote({
                text: 'New task or thought...',
                color: (['yellow', 'teal', 'coral', 'violet'][Math.floor(Math.random() * 4)] as any),
              })
            }
            className="px-2.5 py-1 rounded-lg bg-[var(--accent-primary)] hover:opacity-90 text-white font-medium text-[11px] flex items-center gap-1 shadow-sm transition-all"
          >
            <Plus className="w-3.5 h-3.5" /> Note
          </button>
        </div>
      </div>
    </div>
  );
};
