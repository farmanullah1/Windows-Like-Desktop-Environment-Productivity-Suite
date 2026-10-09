import React, { useState } from 'react';
import {
  Folder,
  Terminal,
  Plus,
  RefreshCw,
  Palette,
  Image as ImageIcon,
  Music,
  LayoutGrid,
} from 'lucide-react';
import { useDesktop } from '../core/desktopStore';
import { useTheme } from '../design-system/ThemeProvider';
import { soundEngine } from '../design-system/soundEngine';
import { AppIconBadge } from '../design-system/AppIconBadge';
import { DesktopWidgets } from './DesktopWidgets';

interface ContextMenuPos {
  x: number;
  y: number;
}

const WALLPAPERS = [
  '/wallpapers/aurora.jpg',
  '/wallpapers/cyberpunk.jpg',
  '/wallpapers/fluent_silk.jpg',
  '/wallpapers/cosmic_nebula.jpg',
];

export const DesktopCanvas: React.FC = () => {
  const {
    openApp,
    closeAllOverlays,
    workspaces,
    activeWorkspaceId,
    addNotification,
    currentWallpaper,
    setWallpaper,
    widgetsVisible,
    toggleWidgets,
    addStickyNote,
  } = useDesktop();

  const { wallpaperDimming, ambientEffects } = useTheme();

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

  const handleCycleWallpaper = () => {
    const currentIndex = WALLPAPERS.indexOf(currentWallpaper);
    const nextIndex = (currentIndex + 1) % WALLPAPERS.length;
    const nextWp = WALLPAPERS[nextIndex];
    setWallpaper(nextWp);
    soundEngine.play('click');
    addNotification('Wallpaper Changed', 'Cycled to next high-resolution desktop theme.', 'success', 'Personalization');
  };

  const desktopIcons = [
    { id: 'dt-pc', title: 'This PC', appId: 'system-info', titleDisplay: 'System Information' },
    { id: 'dt-files', title: 'File Explorer', appId: 'file-explorer', titleDisplay: 'File Explorer' },
    { id: 'dt-media', title: 'Groove Music', appId: 'media-player', titleDisplay: 'Groove Media Player' },
    { id: 'dt-gallery', title: 'Photo Studio', appId: 'gallery', titleDisplay: 'Photo Studio' },
    { id: 'dt-notes', title: 'Notes', appId: 'notes', titleDisplay: 'Notes' },
    { id: 'dt-term', title: 'Terminal', appId: 'terminal', titleDisplay: 'Terminal Center' },
    { id: 'dt-settings', title: 'Settings', appId: 'settings', titleDisplay: 'Settings' },
  ];

  return (
    <div
      onClick={handleCanvasClick}
      onContextMenu={handleContextMenu}
      className="absolute inset-0 z-[var(--z-desktop)] select-none overflow-hidden bg-slate-950"
    >
      {/* Dynamic 4K Wallpaper Layer with Vignette */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
        style={{ backgroundImage: `url(${currentWallpaper})` }}
      />
      {/* Wallpaper Readability Dimming Scrim Layer (0% to 60%) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ backgroundColor: '#000000', opacity: wallpaperDimming }}
      />
      {/* Optional Ambient Aurora Drift */}
      {ambientEffects && (
        <div
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
      )}
      <div className="absolute inset-0 bg-black/20 backdrop-brightness-95 pointer-events-none" />

      {/* Top Bar / Workspace Badge & Widgets Toggle */}
      <div className="absolute top-3 left-4 flex items-center gap-2">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/15 backdrop-blur-xl shadow-lg text-xs font-medium text-white/90">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-white/60">Workspace:</span>
          <strong className="text-white font-semibold">{activeWorkspace?.name || 'Main'}</strong>
        </div>

        <button
          onClick={toggleWidgets}
          className={`px-3 py-1.5 rounded-full border text-xs font-medium flex items-center gap-1.5 backdrop-blur-xl shadow-lg transition-all ${
            widgetsVisible
              ? 'bg-blue-600/60 border-blue-400/50 text-white'
              : 'bg-black/40 border-white/15 text-white/70 hover:text-white'
          }`}
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>Widgets</span>
        </button>
      </div>

      {/* Desktop Icons Column with 3D Squircles */}
      <div className="p-4 pt-14 flex flex-col gap-3 w-28">
        {desktopIcons.map((item) => {
          return (
            <div
              key={item.id}
              onDoubleClick={(e) => {
                e.stopPropagation();
                soundEngine.play('click');
                openApp(item.appId, item.titleDisplay, item.appId);
              }}
              className="flex flex-col items-center p-2 rounded-2xl hover:bg-white/15 hover:backdrop-blur-md cursor-pointer group transition-all text-center"
            >
              <AppIconBadge appId={item.appId} size="lg" className="mb-1" />
              <span className="text-[11px] font-medium text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] line-clamp-2 px-1 rounded">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Desktop Widgets Layer */}
      <DesktopWidgets />

      {/* Right Click Desktop Context Menu */}
      {contextMenu && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ top: contextMenu.y, left: contextMenu.x }}
          className="fixed w-56 p-1.5 rounded-2xl bg-slate-900/90 border border-white/20 shadow-2xl backdrop-blur-2xl z-[var(--z-context-menu)] text-xs divide-y divide-white/10 text-white animate-in fade-in zoom-in-95 duration-100"
        >
          <div className="py-1">
            <button
              onClick={() => {
                setContextMenu(null);
                handleCycleWallpaper();
              }}
              className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-white/15 transition-colors text-left"
            >
              <ImageIcon className="w-4 h-4 text-rose-400" />
              <span>Next Wallpaper</span>
            </button>
            <button
              onClick={() => {
                setContextMenu(null);
                toggleWidgets();
                soundEngine.play('click');
              }}
              className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-white/15 transition-colors text-left"
            >
              <LayoutGrid className="w-4 h-4 text-blue-400" />
              <span>{widgetsVisible ? 'Hide Widgets' : 'Show Widgets'}</span>
            </button>
            <button
              onClick={() => {
                setContextMenu(null);
                addStickyNote({
                  text: 'New thought or note...',
                  color: 'yellow',
                  x: contextMenu.x,
                  y: contextMenu.y,
                });
              }}
              className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-white/15 transition-colors text-left"
            >
              <Plus className="w-4 h-4 text-amber-400" />
              <span>Add Sticky Note</span>
            </button>
          </div>

          <div className="py-1">
            <button
              onClick={() => {
                soundEngine.play('click');
                setContextMenu(null);
                openApp('terminal', 'Terminal Center', 'Terminal');
              }}
              className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-white/15 transition-colors text-left"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Open in Terminal</span>
            </button>
            <button
              onClick={() => {
                soundEngine.play('click');
                setContextMenu(null);
                openApp('file-explorer', 'File Explorer', 'Folder');
              }}
              className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-white/15 transition-colors text-left"
            >
              <Folder className="w-4 h-4 text-amber-400" />
              <span>Open File Explorer</span>
            </button>
            <button
              onClick={() => {
                soundEngine.play('click');
                setContextMenu(null);
                openApp('media-player', 'Groove Media Player', 'Music');
              }}
              className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-white/15 transition-colors text-left"
            >
              <Music className="w-4 h-4 text-cyan-400" />
              <span>Open Media Player</span>
            </button>
          </div>

          <div className="py-1">
            <button
              onClick={() => {
                soundEngine.play('click');
                setContextMenu(null);
                openApp('gallery', 'Photo Studio', 'Image');
              }}
              className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-white/15 transition-colors text-left"
            >
              <Palette className="w-4 h-4 text-fuchsia-400" />
              <span>Wallpaper & Photos...</span>
            </button>
            <button
              onClick={() => {
                soundEngine.play('click');
                setContextMenu(null);
                addNotification('Desktop Refreshed', 'Refreshed desktop canvas matrix.', 'info', 'Shell');
              }}
              className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-white/15 transition-colors text-left"
            >
              <RefreshCw className="w-4 h-4 text-sky-400" />
              <span>Refresh Desktop</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
