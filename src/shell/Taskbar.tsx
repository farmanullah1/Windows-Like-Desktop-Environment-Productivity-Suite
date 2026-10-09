import React, { useState, useEffect } from 'react';
import {
  Folder,
  Settings,
  FileText,
  Terminal,
  Activity,
  Monitor,
  Calculator,
  Clock,
  Send,
  Code,
  AppWindow,
  Search,
  Wifi,
  Volume2,
  VolumeX,
  Battery,
  Bell,
  Grid,
} from 'lucide-react';
import { useDesktop } from '../core/desktopStore';
import { useTheme } from '../design-system/ThemeProvider';
import { getPinnedApps, getAllApps } from '../apps/registry';
import { soundEngine } from '../design-system/soundEngine';
import { AppIconBadge } from '../design-system/AppIconBadge';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Folder,
  Settings,
  FileText,
  Terminal,
  Activity,
  Monitor,
  Calculator,
  Clock,
  Send,
  Code,
  AppWindow,
};

export const Taskbar: React.FC = () => {
  const {
    windows,
    activeWindowId,
    openApp,
    focusWindow,
    minimizeWindow,
    restoreWindow,
    workspaces,
    activeWorkspaceId,
    switchWorkspace,
    toggleShowDesktop,
    isStartMenuOpen,
    setStartMenuOpen,
    isQuickSettingsOpen,
    setQuickSettingsOpen,
    isNotificationCenterOpen,
    setNotificationCenterOpen,
    setCommandPaletteOpen,
    notifications,
    metrics,
  } = useDesktop();

  const { shellMode, soundEnabled } = useTheme();
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');

  // Clock updates
  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setTimeStr(d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setDateStr(d.toLocaleDateString([], { month: 'short', day: 'numeric' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const pinnedApps = getPinnedApps();
  const runningAppIds = Array.from(new Set(windows.map((w) => w.appId)));

  // Combine pinned apps with any running unpinned apps
  const allDisplayApps = [
    ...pinnedApps,
    ...getAllApps().filter((a) => !a.isPinned && runningAppIds.includes(a.id)),
  ];

  const handleAppClick = (appId: string, displayName: string, icon: string) => {
    soundEngine.play('click');
    const existing = windows.find((w) => w.appId === appId && w.workspaceId === activeWorkspaceId);
    if (!existing) {
      openApp(appId, displayName, icon);
    } else if (existing.isMinimized) {
      restoreWindow(existing.id);
    } else if (existing.id === activeWindowId) {
      minimizeWindow(existing.id);
    } else {
      focusWindow(existing.id);
    }
  };

  const isHybrid = shellMode === 'hybrid';
  const isMac = shellMode === 'macos';
  const isDev = shellMode === 'developer';

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[var(--z-taskbar)] flex items-center justify-between select-none ${
        isHybrid
          ? 'pb-2 px-3'
          : isMac
          ? 'pb-3 px-4 justify-center'
          : isDev
          ? 'h-[40px] bg-[var(--surface-taskbar)] border-t border-[var(--border-subtle)] px-2 backdrop-blur-2xl'
          : 'h-[48px] bg-[var(--surface-taskbar)] border-t border-[var(--border-subtle)] px-3 backdrop-blur-2xl'
      }`}
    >
      {/* Floating Island Container (for Hybrid / Mac) */}
      <div
        className={`flex items-center justify-between w-full transition-all ${
          isHybrid
            ? 'h-[50px] px-3 rounded-2xl bg-[var(--surface-taskbar)] border border-[var(--border-medium)] shadow-2xl backdrop-blur-3xl'
            : isMac
            ? 'h-[56px] px-4 rounded-3xl bg-[var(--surface-dock)] border border-[var(--border-medium)] shadow-2xl backdrop-blur-3xl max-w-fit mx-auto'
            : 'h-full'
        }`}
      >
        {/* Left Section: Start & Search & Workspaces */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {/* Start Launcher Button (Hybrid / Windows / Linux) */}
          <button
            onClick={() => {
              soundEngine.play('click');
              setStartMenuOpen(!isStartMenuOpen);
            }}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
              isStartMenuOpen
                ? 'bg-[var(--accent-primary)] text-white shadow-md scale-95'
                : 'hover:bg-[var(--border-medium)] text-[var(--accent-primary)]'
            }`}
            title="Start Menu (Win)"
          >
            <Grid className="w-4 h-4" />
          </button>

          {/* Universal Search / Command Palette */}
          <button
            onClick={() => {
              soundEngine.play('click');
              setCommandPaletteOpen(true);
            }}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-[var(--border-medium)] text-[var(--text-secondary)] hover:text-white transition-all text-xs"
            title="Universal Search & Commands (Ctrl+Space)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px] text-[var(--text-muted)]">Search...</span>
          </button>

          {/* Virtual Workspaces Switcher Pills */}
          <div className="flex items-center gap-1 pl-2 border-l border-[var(--border-subtle)]">
            {workspaces.map((ws, idx) => (
              <button
                key={ws.id}
                onClick={() => switchWorkspace(ws.id)}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-bold font-mono transition-all ${
                  ws.id === activeWorkspaceId
                    ? 'bg-[var(--accent-primary)] text-white shadow-sm scale-105'
                    : 'text-[var(--text-muted)] hover:bg-[var(--border-medium)] hover:text-white'
                }`}
                title={`Workspace ${ws.name} (Ctrl+Alt+${idx + 1})`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Center Section: App Icons */}
        <div className="flex items-center gap-1.5 px-3">
          {allDisplayApps.map((app) => {
            const Icon = ICON_MAP[app.icon] || AppWindow;
            const isRunning = runningAppIds.includes(app.id);
            const activeWin = windows.find(
              (w) => w.appId === app.id && w.workspaceId === activeWorkspaceId
            );
            const isFocused = activeWin && activeWin.id === activeWindowId;

            return (
              <button
                key={app.id}
                onClick={() => handleAppClick(app.id, app.displayName, app.icon)}
                className={`group relative flex flex-col items-center justify-center w-10 h-10 rounded-xl transition-all ${
                  isFocused
                    ? 'bg-white/20 shadow-md ring-1 ring-white/30'
                    : 'hover:bg-white/10'
                }`}
                title={app.displayName}
              >
                <AppIconBadge appId={app.id} size="sm" showGlow={isFocused} />

                {/* Running indicator dot */}
                {isRunning && (
                  <span
                    className={`absolute bottom-0.5 rounded-full transition-all ${
                      isFocused ? 'w-2.5 h-1 bg-white shadow-sm' : 'w-1 h-1 bg-white/60'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Section: System Tray */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {/* Quick Settings trigger with Wi-Fi, Volume, Battery */}
          <button
            onClick={() => {
              soundEngine.play('click');
              setQuickSettingsOpen(!isQuickSettingsOpen);
            }}
            className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl transition-all ${
              isQuickSettingsOpen
                ? 'bg-[var(--surface-card)] ring-1 ring-[var(--accent-primary)]'
                : 'hover:bg-[var(--border-medium)] text-[var(--text-secondary)] hover:text-white'
            }`}
            title="Quick Settings"
          >
            <Wifi className="w-3.5 h-3.5 text-blue-400" />
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-slate-300" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-red-400" />
            )}
            <div className="flex items-center gap-1 text-[11px] font-medium">
              <Battery className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline">{metrics.batteryLevel}%</span>
            </div>
          </button>

          {/* Clock & Date */}
          <div className="text-right px-2 py-0.5 rounded-lg text-xs leading-tight font-medium hidden sm:block">
            <span className="block font-semibold">{timeStr}</span>
            <span className="text-[10px] text-[var(--text-muted)]">{dateStr}</span>
          </div>

          {/* Notification Center Trigger */}
          <button
            onClick={() => {
              soundEngine.play('click');
              setNotificationCenterOpen(!isNotificationCenterOpen);
            }}
            className={`relative p-2 rounded-xl transition-all ${
              isNotificationCenterOpen
                ? 'bg-[var(--accent-primary)] text-white'
                : 'hover:bg-[var(--border-medium)] text-[var(--text-secondary)] hover:text-white'
            }`}
            title="Notification Center"
          >
            <Bell className="w-3.5 h-3.5" />
            {notifications.length > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            )}
          </button>

          {/* Show Desktop Peek Slice */}
          <button
            onClick={toggleShowDesktop}
            className="w-1.5 h-8 rounded-full bg-[var(--border-subtle)] hover:bg-[var(--accent-primary)] transition-colors ml-1"
            title="Show Desktop (Win+D)"
          />
        </div>
      </div>
    </div>
  );
};
