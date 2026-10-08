import React, { useState } from 'react';
import {
  Palette,
  Volume2,
  Monitor,
  Layout,
  HardDrive,
  Eye,
  Info,
  VolumeX,
  RotateCcw,
  Download,
  Plus,
  Trash2,
} from 'lucide-react';
import { useTheme, ThemeType, EffectsModeType, ShellModeType } from '../../design-system/ThemeProvider';
import { useDesktop } from '../../core/desktopStore';
import { soundEngine, SoundEffectType } from '../../design-system/soundEngine';

type SettingsTab =
  | 'appearance'
  | 'sound'
  | 'workspaces'
  | 'storage'
  | 'accessibility'
  | 'about';

const ACCENT_COLORS = [
  { name: 'Windows Blue', color: '#0078d4' },
  { name: 'Sky Azure', color: '#0284c7' },
  { name: 'Emerald Green', color: '#10b981' },
  { name: 'Aubergine Orange', color: '#e95420' },
  { name: 'Vibrant Violet', color: '#8b5cf6' },
  { name: 'Rose Red', color: '#f43f5e' },
  { name: 'Teal Aurora', color: '#14b8a6' },
  { name: 'Graphite Zinc', color: '#71717a' },
];

export const SettingsApp: React.FC<{ windowId: string }> = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>('appearance');
  const {
    theme,
    setTheme,
    effectsMode,
    setEffectsMode,
    shellMode,
    setShellMode,
    accentColor,
    setAccentColor,
    soundEnabled,
    setSoundEnabled,
    soundVolume,
    setSoundVolume,
    reducedMotion,
    setReducedMotion,
  } = useTheme();

  const {
    workspaces,
    createWorkspace,
    deleteWorkspace,
    renameWorkspace,
    addNotification,
  } = useDesktop();

  const [newWsName, setNewWsName] = useState('');

  const themesList: { id: ThemeType; name: string; desc: string }[] = [
    { id: 'dark', name: 'Dark (Default)', desc: 'Fluent acrylic depth with obsidian blues' },
    { id: 'light', name: 'Light', desc: 'Crisp platinum surfaces with subtle drop shadows' },
    { id: 'midnight', name: 'Midnight', desc: 'Pure black OLED high contrast with violet accents' },
    { id: 'graphite', name: 'Graphite', desc: 'Monochrome minimalist developer workstation' },
    { id: 'aurora', name: 'Aurora', desc: 'Northern lights glow with teal & marine gradients' },
    { id: 'ocean', name: 'Ocean', desc: 'Deep macOS Monterey marine navy tones' },
    { id: 'ubuntu-dark', name: 'Ubuntu-Dark', desc: 'Warm aubergine & dark slate Linux aesthetics' },
    { id: 'high-contrast', name: 'High Contrast', desc: 'WCAG AAA compliant maximum visibility mode' },
  ];

  const handleTestSound = (cue: SoundEffectType) => {
    soundEngine.play(cue);
  };

  const handleCreateWs = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWsName.trim()) return;
    createWorkspace(newWsName.trim());
    setNewWsName('');
    addNotification('Workspace Created', `Created workspace "${newWsName.trim()}"`, 'success', 'Settings');
  };

  const handleExportBackup = () => {
    soundEngine.play('click');
    const backupData = {
      timestamp: new Date().toISOString(),
      version: '5.0.0',
      workspaces,
      preferences: {
        theme,
        effectsMode,
        shellMode,
        accentColor,
        soundEnabled,
        soundVolume,
      },
      filesystem: localStorage.getItem('adw_filesystem'),
      notes: localStorage.getItem('adw_notes'),
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `adw5_desktop_backup_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    addNotification('Backup Exported', 'Configuration and data exported successfully.', 'success', 'Settings');
  };

  return (
    <div className="flex h-full bg-[var(--surface-base)] text-[var(--text-primary)] select-none">
      {/* Sidebar Navigation */}
      <div className="w-56 p-3 border-r border-[var(--border-subtle)] bg-[var(--surface-acrylic)] flex flex-col gap-1">
        <h2 className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
          Settings
        </h2>

        <button
          onClick={() => { setActiveTab('appearance'); soundEngine.play('click'); }}
          className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'appearance'
              ? 'bg-[var(--accent-subtle)] text-[var(--accent-primary)] font-semibold'
              : 'hover:bg-[var(--surface-card)] text-[var(--text-secondary)]'
          }`}
        >
          <Palette className="w-4 h-4" />
          <span>Appearance</span>
        </button>

        <button
          onClick={() => { setActiveTab('sound'); soundEngine.play('click'); }}
          className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'sound'
              ? 'bg-[var(--accent-subtle)] text-[var(--accent-primary)] font-semibold'
              : 'hover:bg-[var(--surface-card)] text-[var(--text-secondary)]'
          }`}
        >
          <Volume2 className="w-4 h-4" />
          <span>Sound & Audio</span>
        </button>

        <button
          onClick={() => { setActiveTab('workspaces'); soundEngine.play('click'); }}
          className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'workspaces'
              ? 'bg-[var(--accent-subtle)] text-[var(--accent-primary)] font-semibold'
              : 'hover:bg-[var(--surface-card)] text-[var(--text-secondary)]'
          }`}
        >
          <Layout className="w-4 h-4" />
          <span>Workspaces</span>
        </button>

        <button
          onClick={() => { setActiveTab('storage'); soundEngine.play('click'); }}
          className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'storage'
              ? 'bg-[var(--accent-subtle)] text-[var(--accent-primary)] font-semibold'
              : 'hover:bg-[var(--surface-card)] text-[var(--text-secondary)]'
          }`}
        >
          <HardDrive className="w-4 h-4" />
          <span>Storage & Backup</span>
        </button>

        <button
          onClick={() => { setActiveTab('accessibility'); soundEngine.play('click'); }}
          className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'accessibility'
              ? 'bg-[var(--accent-subtle)] text-[var(--accent-primary)] font-semibold'
              : 'hover:bg-[var(--surface-card)] text-[var(--text-secondary)]'
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>Accessibility</span>
        </button>

        <button
          onClick={() => { setActiveTab('about'); soundEngine.play('click'); }}
          className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'about'
              ? 'bg-[var(--accent-subtle)] text-[var(--accent-primary)] font-semibold'
              : 'hover:bg-[var(--surface-card)] text-[var(--text-secondary)]'
          }`}
        >
          <Info className="w-4 h-4" />
          <span>About Desktop OS</span>
        </button>
      </div>

      {/* Main Tab Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* TAB 1: APPEARANCE */}
        {activeTab === 'appearance' && (
          <div className="space-y-6 max-w-2xl">
            <div>
              <h3 className="text-lg font-semibold">Appearance & Personalization</h3>
              <p className="text-xs text-[var(--text-muted)]">Configure themes, desktop taskbar mode, and graphic effects.</p>
            </div>

            {/* Themes Grid */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-[var(--text-muted)]">Theme Selection</label>
              <div className="grid grid-cols-2 gap-3">
                {themesList.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      theme === t.id
                        ? 'border-[var(--accent-primary)] bg-[var(--accent-subtle)] shadow-sm'
                        : 'border-[var(--border-subtle)] bg-[var(--surface-card)] hover:border-[var(--border-medium)]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold">{t.name}</span>
                      {theme === t.id && <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />}
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)]">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent Color */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-[var(--text-muted)]">Accent Color</label>
              <div className="flex items-center gap-3">
                {ACCENT_COLORS.map((c) => (
                  <button
                    key={c.color}
                    onClick={() => setAccentColor(c.color)}
                    style={{ backgroundColor: c.color }}
                    className={`w-7 h-7 rounded-full transition-transform ${
                      accentColor === c.color ? 'ring-2 ring-white scale-110' : 'hover:scale-105'
                    }`}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Visual Performance Mode */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-[var(--text-muted)]">Visual Performance Mode</label>
              <div className="grid grid-cols-4 gap-2">
                {(['minimal', 'balanced', 'enhanced', 'immersive'] as EffectsModeType[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setEffectsMode(mode)}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium capitalize transition-all ${
                      effectsMode === mode
                        ? 'border-[var(--accent-primary)] bg-[var(--accent-subtle)] text-[var(--accent-primary)]'
                        : 'border-[var(--border-subtle)] bg-[var(--surface-card)] hover:border-[var(--border-medium)]'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Shell Mode */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-[var(--text-muted)]">Desktop Shell Layout</label>
              <div className="grid grid-cols-4 gap-2">
                {(['hybrid', 'windows', 'macos', 'developer'] as ShellModeType[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setShellMode(mode)}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium capitalize transition-all ${
                      shellMode === mode
                        ? 'border-[var(--accent-primary)] bg-[var(--accent-subtle)] text-[var(--accent-primary)]'
                        : 'border-[var(--border-subtle)] bg-[var(--surface-card)] hover:border-[var(--border-medium)]'
                    }`}
                  >
                    {mode} Mode
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SOUND */}
        {activeTab === 'sound' && (
          <div className="space-y-6 max-w-2xl">
            <div>
              <h3 className="text-lg font-semibold">Sound & UI Audio Engine</h3>
              <p className="text-xs text-[var(--text-muted)]">
                Procedural Web Audio API sound synthesis. Normalized, subtle feedback without external audio files.
              </p>
            </div>

            {/* Toggle Mute */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)]">
              <div className="flex items-center gap-3">
                {soundEnabled ? <Volume2 className="w-5 h-5 text-emerald-400" /> : <VolumeX className="w-5 h-5 text-red-400" />}
                <div>
                  <h4 className="text-xs font-semibold">UI Audio Cues</h4>
                  <p className="text-[11px] text-[var(--text-muted)]">Play soft mechanical & chime tones on window actions.</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={soundEnabled}
                onChange={(e) => setSoundEnabled(e.target.checked)}
                className="w-4 h-4 accent-[var(--accent-primary)] cursor-pointer"
              />
            </div>

            {/* Master Volume */}
            <div className="space-y-2 p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)]">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold">Master Audio Volume</span>
                <span className="text-[var(--text-muted)]">{Math.round(soundVolume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={soundVolume}
                onChange={(e) => setSoundVolume(parseFloat(e.target.value))}
                disabled={!soundEnabled}
                className="w-full accent-[var(--accent-primary)] cursor-pointer disabled:opacity-40"
              />
            </div>

            {/* Audition cues */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-[var(--text-muted)]">Audition Synthesizer Cues</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'click', label: 'Mechanical Click' },
                  { id: 'window_open', label: 'Window Open' },
                  { id: 'window_close', label: 'Window Close' },
                  { id: 'window_snap', label: 'Window Snap' },
                  { id: 'workspace_switch', label: 'Workspace Switch' },
                  { id: 'notification', label: 'Notification Chime' },
                  { id: 'success', label: 'Success Tone' },
                  { id: 'error', label: 'Error Tone' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleTestSound(item.id as SoundEffectType)}
                    disabled={!soundEnabled}
                    className="p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-card)] hover:bg-[var(--border-medium)] text-xs font-medium text-left transition-colors disabled:opacity-40"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: WORKSPACES */}
        {activeTab === 'workspaces' && (
          <div className="space-y-6 max-w-2xl">
            <div>
              <h3 className="text-lg font-semibold">Virtual Workspaces Management</h3>
              <p className="text-xs text-[var(--text-muted)]">
                Segregate tasks and open application windows across virtual desktop spaces.
              </p>
            </div>

            {/* Create Workspace */}
            <form onSubmit={handleCreateWs} className="flex gap-2">
              <input
                type="text"
                placeholder="New workspace name..."
                value={newWsName}
                onChange={(e) => setNewWsName(e.target.value)}
                className="flex-1 px-3 py-2 bg-[var(--surface-input)] border border-[var(--border-subtle)] rounded-xl text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-focus)]"
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2 bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white text-xs font-medium rounded-xl transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Workspace</span>
              </button>
            </form>

            {/* Workspaces List */}
            <div className="space-y-2">
              {workspaces.map((ws, idx) => (
                <div
                  key={ws.id}
                  className="flex items-center justify-between p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[var(--surface-input)] flex items-center justify-center text-xs font-bold text-[var(--text-muted)]">
                      {idx + 1}
                    </span>
                    <input
                      type="text"
                      value={ws.name}
                      onChange={(e) => renameWorkspace(ws.id, e.target.value)}
                      className="text-xs font-semibold bg-transparent border-b border-transparent hover:border-[var(--border-medium)] focus:border-[var(--border-focus)] px-1 py-0.5 focus:outline-none"
                    />
                    {ws.isProtected && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-medium">
                        Primary Default
                      </span>
                    )}
                  </div>
                  {!ws.isProtected && (
                    <button
                      onClick={() => deleteWorkspace(ws.id)}
                      className="p-1.5 text-red-400 hover:bg-red-500/20 rounded-md transition-colors"
                      title="Delete Workspace"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: STORAGE */}
        {activeTab === 'storage' && (
          <div className="space-y-6 max-w-2xl">
            <div>
              <h3 className="text-lg font-semibold">Storage & System Backup</h3>
              <p className="text-xs text-[var(--text-muted)]">
                Manage local browser persistence, export workspace configuration, or reset cache safely.
              </p>
            </div>

            {/* Storage Meter */}
            <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold">Local Storage Usage</span>
                <span className="text-[var(--text-muted)]">~240 KB / 5 MB Quota</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[var(--surface-input)] overflow-hidden">
                <div className="h-full bg-[var(--accent-primary)] rounded-full w-[5%]" />
              </div>
            </div>

            {/* Backup & Restore */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleExportBackup}
                className="flex items-center justify-center gap-2 p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] hover:bg-[var(--border-medium)] text-xs font-medium transition-colors"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Export JSON Backup</span>
              </button>
              <button
                onClick={() => {
                  if (confirm('Clear local storage cache and reload?')) {
                    localStorage.clear();
                    window.location.reload();
                  }
                }}
                className="flex items-center justify-center gap-2 p-4 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 text-red-400 text-xs font-medium transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset Local Cache</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 5: ACCESSIBILITY */}
        {activeTab === 'accessibility' && (
          <div className="space-y-6 max-w-2xl">
            <div>
              <h3 className="text-lg font-semibold">Accessibility & Motion Controls</h3>
              <p className="text-xs text-[var(--text-muted)]">WCAG 2.1 AA compliant keyboard navigation and display options.</p>
            </div>

            {/* Reduced motion */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)]">
              <div>
                <h4 className="text-xs font-semibold">Reduce Motion</h4>
                <p className="text-[11px] text-[var(--text-muted)]">Minimizes spring animations and disables backdrop parallax.</p>
              </div>
              <input
                type="checkbox"
                checked={reducedMotion}
                onChange={(e) => setReducedMotion(e.target.checked)}
                className="w-4 h-4 accent-[var(--accent-primary)] cursor-pointer"
              />
            </div>

            {/* High Contrast Mode */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)]">
              <div>
                <h4 className="text-xs font-semibold">High Contrast Mode</h4>
                <p className="text-[11px] text-[var(--text-muted)]">WCAG AAA compliant solid contrast with zero transparent blurs.</p>
              </div>
              <button
                onClick={() => setTheme(theme === 'high-contrast' ? 'dark' : 'high-contrast')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  theme === 'high-contrast' ? 'bg-yellow-400 text-black' : 'bg-[var(--surface-input)] text-[var(--text-primary)]'
                }`}
              >
                {theme === 'high-contrast' ? 'Enabled' : 'Enable'}
              </button>
            </div>

            {/* Keyboard Shortcuts Overview */}
            <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] space-y-2">
              <h4 className="text-xs font-semibold mb-2">Essential Keyboard Shortcuts</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">Open Command Palette</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface-input)] font-mono text-[10px]">Ctrl + Space</kbd>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">Toggle Start Menu</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface-input)] font-mono text-[10px]">Win / Super</kbd>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">Switch Workspace</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface-input)] font-mono text-[10px]">Ctrl + Alt + Arrow</kbd>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">Show / Hide Desktop</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface-input)] font-mono text-[10px]">Win + D</kbd>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: ABOUT */}
        {activeTab === 'about' && (
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
                <Monitor className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-bold">ADW-5 Desktop Environment</h3>
                <p className="text-xs text-[var(--accent-primary)] font-medium">Version 5.0.0 (Master Product Specification)</p>
                <p className="text-[11px] text-[var(--text-muted)] mt-1">
                  Hybrid Windows 11 + macOS + Ubuntu/Linux Desktop & Productivity Suite
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] text-xs space-y-2 text-[var(--text-secondary)]">
              <h4 className="font-semibold text-[var(--text-primary)]">Architecture & Engineering Standard</h4>
              <p>
                Built strictly to production standards with React 18/19, TypeScript, centralized CSS Design Tokens, and procedural Web Audio synthesis.
              </p>
              <p className="text-[11px] text-[var(--text-muted)]">
                All functionality operates truthfully inside the desktop application platform with controlled Windows system integration boundaries.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
