import React, { createContext, useContext, useEffect, useState } from 'react';
import { soundEngine } from './soundEngine';

export type ThemeType =
  | 'dark'
  | 'light'
  | 'midnight'
  | 'graphite'
  | 'aurora'
  | 'ocean'
  | 'ubuntu-dark'
  | 'high-contrast';

export type EffectsModeType = 'minimal' | 'balanced' | 'enhanced' | 'immersive';
export type ShellModeType = 'hybrid' | 'windows' | 'macos' | 'developer';

export interface ThemeContextValue {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  effectsMode: EffectsModeType;
  setEffectsMode: (mode: EffectsModeType) => void;
  shellMode: ShellModeType;
  setShellMode: (mode: ShellModeType) => void;
  accentColor: string;
  setAccentColor: (color: string) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  soundVolume: number;
  setSoundVolume: (volume: number) => void;
  reducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    return (localStorage.getItem('adw_theme') as ThemeType) || 'dark';
  });

  const [effectsMode, setEffectsModeState] = useState<EffectsModeType>(() => {
    return (localStorage.getItem('adw_effects') as EffectsModeType) || 'balanced';
  });

  const [shellMode, setShellModeState] = useState<ShellModeType>(() => {
    return (localStorage.getItem('adw_shell_mode') as ShellModeType) || 'hybrid';
  });

  const [accentColor, setAccentColorState] = useState<string>(() => {
    return localStorage.getItem('adw_accent_color') || '#0078d4';
  });

  const [soundEnabled, setSoundEnabledState] = useState<boolean>(() => {
    const saved = localStorage.getItem('adw_sound_enabled');
    return saved !== null ? saved === 'true' : true;
  });

  const [soundVolume, setSoundVolumeState] = useState<number>(() => {
    const saved = localStorage.getItem('adw_sound_volume');
    return saved !== null ? parseFloat(saved) : 0.6;
  });

  const [reducedMotion, setReducedMotionState] = useState<boolean>(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  // Apply theme attributes to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('adw_theme', theme);
  }, [theme]);

  // Apply effects mode
  useEffect(() => {
    document.documentElement.setAttribute('data-effects', effectsMode);
    localStorage.setItem('adw_effects', effectsMode);
  }, [effectsMode]);

  // Apply accent color override if customized
  useEffect(() => {
    if (accentColor) {
      document.documentElement.style.setProperty('--accent-primary', accentColor);
      document.documentElement.style.setProperty(
        '--accent-glow',
        `${accentColor}55`
      );
      localStorage.setItem('adw_accent_color', accentColor);
    }
  }, [accentColor]);

  // Sound sync
  useEffect(() => {
    soundEngine.setMuted(!soundEnabled);
    localStorage.setItem('adw_sound_enabled', String(soundEnabled));
  }, [soundEnabled]);

  useEffect(() => {
    soundEngine.setMasterVolume(soundVolume);
    localStorage.setItem('adw_sound_volume', String(soundVolume));
  }, [soundVolume]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    soundEngine.play('click');
  };

  const setEffectsMode = (mode: EffectsModeType) => {
    setEffectsModeState(mode);
    soundEngine.play('click');
  };

  const setShellMode = (mode: ShellModeType) => {
    setShellModeState(mode);
    localStorage.setItem('adw_shell_mode', mode);
    soundEngine.play('click');
  };

  const setAccentColor = (color: string) => {
    setAccentColorState(color);
  };

  const setSoundEnabled = (enabled: boolean) => {
    setSoundEnabledState(enabled);
  };

  const setSoundVolume = (volume: number) => {
    setSoundVolumeState(volume);
  };

  const setReducedMotion = (reduced: boolean) => {
    setReducedMotionState(reduced);
  };

  return (
    <ThemeContext.Provider
      value={{
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
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
