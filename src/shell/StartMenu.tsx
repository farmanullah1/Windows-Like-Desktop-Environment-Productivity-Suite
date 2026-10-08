import React, { useState } from 'react';
import {
  Search,
  Power,
  Lock,
  RotateCcw,
  User,
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
  ChevronRight,
} from 'lucide-react';
import { useDesktop } from '../core/desktopStore';
import { getAllApps } from '../apps/registry';
import { soundEngine } from '../design-system/soundEngine';

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

export const StartMenu: React.FC = () => {
  const { isStartMenuOpen, setStartMenuOpen, openApp, addNotification } = useDesktop();
  const [searchQuery, setSearchQuery] = useState('');
  const [showPowerMenu, setShowPowerMenu] = useState(false);
  const apps = getAllApps();

  if (!isStartMenuOpen) return null;

  const filteredApps = apps.filter(
    (a) =>
      a.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLaunch = (appId: string, displayName: string, icon: string) => {
    soundEngine.play('click');
    openApp(appId, displayName, icon);
    setStartMenuOpen(false);
  };

  const handlePowerAction = (action: string) => {
    soundEngine.play('click');
    setShowPowerMenu(false);
    setStartMenuOpen(false);
    if (action === 'lock') {
      addNotification('Session Locked', 'Desktop workspace session has been secured.', 'info', 'System');
    } else if (action === 'restart') {
      if (confirm('Restart desktop workspace session?')) {
        window.location.reload();
      }
    } else if (action === 'shutdown') {
      addNotification('Power Options', 'Desktop application platform session suspended.', 'warning', 'Power');
    }
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[540px] max-h-[620px] rounded-2xl bg-[var(--surface-menu)] border border-[var(--border-strong)] shadow-2xl backdrop-blur-3xl z-[var(--z-flyout-menu)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 select-none"
    >
      {/* Top Search Input */}
      <div className="p-4 border-b border-[var(--border-subtle)]">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Type to search apps, settings, and files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            className="w-full pl-9 pr-4 py-2 bg-[var(--surface-input)] border border-[var(--border-subtle)] rounded-xl text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--border-focus)] shadow-inner"
          />
        </div>
      </div>

      {/* Main Apps View */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Pinned Applications Header */}
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-[var(--text-primary)]">Pinned Applications</span>
          <span className="text-[11px] text-[var(--text-muted)] font-medium">All apps ({apps.length})</span>
        </div>

        {/* Pinned Apps Grid */}
        <div className="grid grid-cols-4 gap-2">
          {filteredApps.map((app) => {
            const Icon = ICON_MAP[app.icon] || AppWindow;
            return (
              <button
                key={app.id}
                onClick={() => handleLaunch(app.id, app.displayName, app.icon)}
                className="flex flex-col items-center p-3 rounded-xl hover:bg-[var(--surface-card)] hover:scale-105 active:scale-95 transition-all text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)] group-hover:border-[var(--accent-primary)] group-hover:shadow-md transition-all mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-[var(--text-primary)] truncate w-full">
                  {app.displayName}
                </span>
                <span className="text-[10px] text-[var(--text-muted)] truncate w-full">
                  {app.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Recommended / Recent Items */}
        <div className="pt-2 border-t border-[var(--border-subtle)]">
          <span className="text-xs font-bold text-[var(--text-primary)] px-1 block mb-2">
            Recommended
          </span>
          <div className="grid grid-cols-2 gap-2">
            {[
              { title: 'System Specification.md', time: '10m ago', icon: FileText, appId: 'notes' },
              { title: 'File Explorer Storage', time: '2h ago', icon: Folder, appId: 'file-explorer' },
              { title: 'Terminal Diagnostics', time: 'Yesterday', icon: Terminal, appId: 'terminal' },
              { title: 'Appearance Settings', time: 'Yesterday', icon: Settings, appId: 'settings' },
            ].map((rec) => {
              const RecIcon = rec.icon;
              return (
                <div
                  key={rec.title}
                  onClick={() => handleLaunch(rec.appId, rec.title, rec.appId)}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-[var(--surface-card)] cursor-pointer transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--surface-input)] flex items-center justify-center text-[var(--accent-primary)] flex-shrink-0">
                    <RecIcon className="w-4 h-4" />
                  </div>
                  <div className="truncate flex-1">
                    <p className="text-xs font-medium truncate">{rec.title}</p>
                    <span className="text-[10px] text-[var(--text-muted)]">{rec.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* User Footer & Power Bar */}
      <div className="p-3 border-t border-[var(--border-subtle)] bg-[var(--surface-acrylic)] flex items-center justify-between relative">
        <div className="flex items-center gap-2.5 px-2 py-1 rounded-xl hover:bg-[var(--surface-card)] cursor-pointer transition-colors">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
            U
          </div>
          <div className="text-left">
            <span className="text-xs font-semibold block leading-tight">Desktop Administrator</span>
            <span className="text-[10px] text-[var(--text-muted)]">Local Account</span>
          </div>
        </div>

        {/* Power Menu Trigger */}
        <div className="relative">
          <button
            onClick={() => setShowPowerMenu(!showPowerMenu)}
            className="p-2 rounded-xl hover:bg-[var(--surface-card)] text-[var(--text-secondary)] hover:text-red-400 transition-colors"
            title="Power Options"
          >
            <Power className="w-4 h-4" />
          </button>

          {/* Power flyout */}
          {showPowerMenu && (
            <div className="absolute right-0 bottom-10 w-44 p-1.5 rounded-xl bg-[var(--surface-card)] border border-[var(--border-strong)] shadow-2xl backdrop-blur-2xl z-50 text-xs">
              <button
                onClick={() => handlePowerAction('lock')}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[var(--surface-elevated)] transition-colors text-left"
              >
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <span>Lock Workspace</span>
              </button>
              <button
                onClick={() => handlePowerAction('restart')}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[var(--surface-elevated)] transition-colors text-left"
              >
                <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                <span>Restart Session</span>
              </button>
              <button
                onClick={() => handlePowerAction('shutdown')}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-500/20 text-red-400 transition-colors text-left"
              >
                <Power className="w-3.5 h-3.5" />
                <span>Suspend Desktop</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
