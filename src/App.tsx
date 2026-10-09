import React, { useState } from 'react';
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
import { BootSequence } from './boot/BootSequence';
import { LoginScreen } from './auth/LoginScreen';
import { soundEngine } from './design-system/soundEngine';
import './design-system/tokens.css';
import './design-system/themes.css';

export const App: React.FC = () => {
  const [bootComplete, setBootComplete] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleBootComplete = () => {
    setBootComplete(true);
  };

  const handleLoginSuccess = () => {
    soundEngine.play('welcome_chime');
    setIsAuthenticated(true);
  };

  return (
    <ThemeProvider>
      <DesktopProvider>
        {/* Layer 0: Boot Sequence (Runs exclusively on cold start; instant on F5/HMR) */}
        {!bootComplete && (
          <BootSequence onComplete={handleBootComplete} />
        )}

        {/* Layer 1: Integrated Authentication Login Screen with Corner Account Creation */}
        {bootComplete && !isAuthenticated && (
          <LoginScreen onLoginSuccess={handleLoginSuccess} />
        )}

        {/* Layer 2: Main Desktop Environment Shell */}
        <div
          className={`relative w-screen h-screen overflow-hidden select-none bg-[var(--bg-desktop)] text-[var(--text-primary)] font-sans transition-opacity duration-500 ${
            bootComplete && isAuthenticated ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
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
