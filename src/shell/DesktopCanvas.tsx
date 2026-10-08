import React, { useState } from 'react';
import {
  Folder,
  Settings,
  FileText,
  Terminal,
  Monitor,
  Plus,
  RefreshCw,
  Palette,
} from 'lucide-react';
import { useDesktop } from '../core/desktopStore';
import { soundEngine } from '../design-system/soundEngine';

interface ContextMenuPos {
  x: number;
  y: number;
}

export const DesktopCanvas: React.FC = () => {
  const {
    openApp,
    closeAllOverlays,
    workspaces,
    activeWorkspaceId,
    addNotification,
  } = useDesktop();

  const [contextMenu, setContextMenu] = useState<ContextMenuPos | null>(null);
  const activeWorkspace = workspaces.find((w) => w.id === activeWorkspaceId);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    soundEngine.play('click');
    closeAllOverlays();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const handleCanvasClick = () => {
    closeAllOverlays();
    if (contextMenu) setContextMenu(null);
  };

  const desktopIcons = [
    { id: 'dt-pc', title: 'This PC', icon: Monitor, appId: 'system-info', titleDisplay: 'System Information' },
    { id: 'dt-files', title: 'File Explorer', icon: Folder, appId: 'file-explorer', titleDisplay: 'File Explorer' },
    { id: 'dt-notes', title: 'Notes', icon: FileText, appId: 'notes', titleDisplay: 'Notes' },
    { id: 'dt-term', title: 'Terminal', icon: Terminal, appId: 'terminal', titleDisplay: 'Terminal Center' },
    { id: 'dt-settings', title: 'Settings', icon: Settings, appId: 'settings', titleDisplay: 'Settings' },
  ];

  return (
    <div
      onClick={handleCanvasClick}
      onContextMenu={handleContextMenu}
      className="absolute inset-0 z-[var(--z-desktop)] select-none overflow-hidden bg-gradient-to-br from-[#0a0e17] via-[#0d1424] to-[#121024]"
    >
      {/* Ambient desktop lighting glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />

      {/* Top Bar / Workspace Badge */}
      <div className="absolute top-3 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-translucent)] border border-[var(--border-subtle)] backdrop-blur-xl shadow-sm text-xs font-medium text-[var(--text-secondary)]">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
        <span>Workspace:</span>
        <strong className="text-[var(--text-primary)] font-semibold">{activeWorkspace?.name || 'Main'}</strong>
      </div>

      {/* Desktop Icons Column */}
      <div className="p-4 pt-14 flex flex-col gap-2 w-28">
        {desktopIcons.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onDoubleClick={(e) => {
                e.stopPropagation();
                soundEngine.play('click');
                openApp(item.appId, item.titleDisplay, item.appId);
              }}
              className="flex flex-col items-center p-2 rounded-xl hover:bg-[var(--surface-translucent)] hover:backdrop-blur-md cursor-pointer group transition-all text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)] group-hover:scale-105 group-hover:border-[var(--accent-primary)] group-hover:shadow-lg transition-all mb-1">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] line-clamp-2">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Right Click Desktop Context Menu */}
      {contextMenu && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ top: contextMenu.y, left: contextMenu.x }}
          className="fixed w-52 p-1.5 rounded-xl bg-[var(--surface-menu)] border border-[var(--border-strong)] shadow-2xl backdrop-blur-2xl z-[var(--z-context-menu)] text-xs divide-y divide-[var(--border-subtle)] animate-in fade-in zoom-in-95 duration-100"
        >
          <div className="py-1">
            <button
              onClick={() => {
                soundEngine.play('click');
                setContextMenu(null);
                openApp('terminal', 'Terminal Center', 'Terminal');
              }}
              className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-[var(--surface-elevated)] transition-colors text-left"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Open in Terminal</span>
            </button>
            <button
              onClick={() => {
                soundEngine.play('click');
                setContextMenu(null);
                openApp('file-explorer', 'File Explorer', 'Folder');
              }}
              className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-[var(--surface-elevated)] transition-colors text-left"
            >
              <Folder className="w-3.5 h-3.5 text-amber-400" />
              <span>Open File Explorer</span>
            </button>
          </div>

          <div className="py-1">
            <button
              onClick={() => {
                soundEngine.play('click');
                setContextMenu(null);
                openApp('notes', 'Notes', 'FileText');
              }}
              className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-[var(--surface-elevated)] transition-colors text-left"
            >
              <Plus className="w-3.5 h-3.5 text-emerald-400" />
              <span>New Note Document</span>
            </button>
            <button
              onClick={() => {
                soundEngine.play('click');
                setContextMenu(null);
                addNotification('Desktop Refreshed', 'Refreshed window matrix and workspace canvas.', 'info', 'Shell');
              }}
              className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-[var(--surface-elevated)] transition-colors text-left"
            >
              <RefreshCw className="w-3.5 h-3.5 text-blue-400" />
              <span>Refresh Desktop</span>
            </button>
          </div>

          <div className="py-1">
            <button
              onClick={() => {
                soundEngine.play('click');
                setContextMenu(null);
                openApp('settings', 'Settings', 'Settings');
              }}
              className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-[var(--surface-elevated)] transition-colors text-left"
            >
              <Palette className="w-3.5 h-3.5 text-purple-400" />
              <span>Personalize...</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
