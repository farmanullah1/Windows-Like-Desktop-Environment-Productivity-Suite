import React, { useState } from 'react';
import {
  Search,
  Power,
  Lock,
  RotateCcw,
  Folder,
  Settings,
  FileText,
  Terminal,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useDesktop } from '../core/desktopStore';
import { getAllApps } from '../apps/registry';
import { soundEngine } from '../design-system/soundEngine';
import { AppIconBadge } from '../design-system/AppIconBadge';

export const StartMenu: React.FC = () => {
  const { isStartMenuOpen, setStartMenuOpen, openApp, addNotification, setLocked } = useDesktop();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showPowerMenu, setShowPowerMenu] = useState(false);
  const apps = getAllApps();

  if (!isStartMenuOpen) return null;

  const CATEGORIES = ['All', 'Core', 'Productivity', 'Developer', 'Utilities', 'System', 'Media'];

  const filteredApps = apps.filter((a) => {
    const matchesSearch =
      a.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || a.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

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
      setLocked(true);
    } else if (action === 'restart') {
      if (confirm('Restart desktop workspace session?')) {
        window.location.reload();
      }
    } else if (action === 'shutdown') {
      addNotification('Power Options', 'Desktop application platform session suspended.', 'warning', 'Power');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.96 }}
      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      onClick={(e) => e.stopPropagation()}
      className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[560px] max-h-[640px] rounded-3xl bg-[var(--surface-menu)] border border-[var(--border-strong)] shadow-[0_25px_60px_rgba(0,0,0,0.5)] backdrop-blur-3xl z-[var(--z-flyout-menu)] flex flex-col overflow-hidden select-none"
    >
      {/* Top Search Input & Keyboard Hints */}
      <div className="p-4 border-b border-[var(--border-subtle)] space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Type to search apps, files, settings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            className="w-full pl-10 pr-20 py-2.5 bg-[var(--surface-input)] border border-[var(--border-subtle)] rounded-xl text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--border-focus)] focus:ring-1 focus:ring-[var(--border-focus)] shadow-inner transition-all"
          />
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-[var(--text-muted)]">
              Esc
            </kbd>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar text-[11px]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                  : 'bg-[var(--surface-card)] text-[var(--text-muted)] hover:text-white hover:bg-[var(--surface-input)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Apps View */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Pinned Applications Header */}
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-[var(--text-primary)]">
            {selectedCategory === 'All' ? 'All Applications' : `${selectedCategory} Applications`}
          </span>
          <span className="text-[11px] text-[var(--text-muted)] font-medium">
            {filteredApps.length} of {apps.length} apps
          </span>
        </div>

        {/* Pinned Apps Grid */}
        <div className="grid grid-cols-4 gap-2">
          {filteredApps.map((app) => {
            return (
              <motion.button
                key={app.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLaunch(app.id, app.displayName, app.icon)}
                className="flex flex-col items-center p-3 rounded-2xl hover:bg-[var(--surface-card)] transition-colors text-center group cursor-pointer"
              >
                <AppIconBadge appId={app.id} size="md" className="mb-2" />
                <span className="text-xs font-medium text-[var(--text-primary)] truncate w-full">
                  {app.displayName}
                </span>
                <span className="text-[10px] text-[var(--text-muted)] truncate w-full">
                  {app.category}
                </span>
              </motion.button>
            );
          })}
        </div>
                <span className="text-[10px] text-[var(--text-muted)] truncate w-full">
                  {app.category}
                </span>
              </motion.button>
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
                <motion.div
                  key={rec.title}
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
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
                </motion.div>
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
            <span className="text-xs font-semibold block leading-tight">MyOS Administrator</span>
            <span className="text-[10px] text-[var(--text-muted)]">Verified Workstation Profile</span>
          </div>
        </div>

        {/* Power Menu Trigger */}
        <div className="relative">
          <button
            onClick={() => setShowPowerMenu(!showPowerMenu)}
            className="p-2 rounded-xl hover:bg-[var(--surface-card)] text-[var(--text-secondary)] hover:text-red-400 transition-colors cursor-pointer"
            title="Power Options"
          >
            <Power className="w-4 h-4" />
          </button>

          {/* Power flyout */}
          <AnimatePresence>
            {showPowerMenu && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 bottom-10 w-44 p-1.5 rounded-xl bg-[var(--surface-card)] border border-[var(--border-strong)] shadow-2xl backdrop-blur-2xl z-50 text-xs"
              >
                <button
                  onClick={() => handlePowerAction('lock')}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[var(--surface-elevated)] transition-colors text-left cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Lock Workspace</span>
                </button>
                <button
                  onClick={() => handlePowerAction('restart')}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[var(--surface-elevated)] transition-colors text-left cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                  <span>Restart Session</span>
                </button>
                <button
                  onClick={() => handlePowerAction('shutdown')}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-500/20 text-red-400 transition-colors text-left cursor-pointer"
                >
                  <Power className="w-3.5 h-3.5" />
                  <span>Suspend Desktop</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
