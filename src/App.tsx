import React from 'react';
import { ThemeProvider } from './design-system/ThemeProvider';
import { DesktopProvider } from './core/desktopStore';
import { DesktopCanvas } from './shell/DesktopCanvas';
import { WindowManager } from './window-manager/WindowManager';
import { Taskbar } from './shell/Taskbar';
import { StartMenu } from './shell/StartMenu';
import { QuickSettings } from './shell/QuickSettings';
import { NotificationCenter } from './shell/NotificationCenter';
import { CommandPalette } from './shell/CommandPalette';
import { LockScreen } from './shell/LockScreen';
import './design-system/tokens.css';
import './design-system/themes.css';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <DesktopProvider>
        <div className="relative w-screen h-screen overflow-hidden select-none bg-[var(--bg-desktop)] text-[var(--text-primary)] font-sans">
          {/* Layer 1: Desktop Canvas with Wallpapers & Icons */}
          <DesktopCanvas />

          {/* Layer 2: Window Manager Engine (Active Workspace Windows) */}
          <WindowManager />

          {/* Layer 3: Desktop Shell Overlays */}
          <StartMenu />
          <QuickSettings />
          <NotificationCenter />
          <CommandPalette />

          {/* Layer 4: Hybrid Taskbar / Dock */}
          <Taskbar />

          {/* Layer 5: Session Lock Screen */}
          <LockScreen />
        </div>
      </DesktopProvider>
    </ThemeProvider>
  );
};

export default App;
