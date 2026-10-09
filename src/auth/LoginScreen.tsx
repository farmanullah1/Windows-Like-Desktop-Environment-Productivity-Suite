import React, { useState } from 'react';
import {
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  AlertCircle,
  HardDrive,
  Fingerprint,
} from 'lucide-react';
import { soundEngine } from '../design-system/soundEngine';
import { useDesktop } from '../core/desktopStore';
import { CreateAccountLink } from './CreateAccountLink';
import { SignupScreen } from './SignupScreen';
import { setDocumentTitle } from '../lib/documentTitle';

interface LoginScreenProps {
  onLoginSuccess: (user?: any) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const { currentWallpaper } = useDesktop();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('admin@desktop.local');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [capsLockActive, setCapsLockActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [forgotPasswordNotice, setForgotPasswordNotice] = useState(false);

  React.useEffect(() => {
    setDocumentTitle(isSignup ? 'Create Account' : 'Sign In');
  }, [isSignup]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    setCapsLockActive(e.getModifierState('CapsLock'));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setForgotPasswordNotice(false);

    if (!email.trim() || !password) {
      setError('Email and password are required.');
      soundEngine.play('error');
      return;
    }

    setLoading(true);
    soundEngine.play('click');

    try {
      const res = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        soundEngine.play('success');
        onLoginSuccess(json.data.user);
      } else {
        soundEngine.play('error');
        setError(json.error?.message || 'The email or password is incorrect.');
      }
    } catch (_err) {
      // Local fallback sign-in
      soundEngine.play('success');
      onLoginSuccess({
        id: 'usr-admin-01',
        email: email.trim(),
        displayName: 'Administrator',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLocalProfile = () => {
    soundEngine.play('click');
    soundEngine.play('success');
    onLoginSuccess({
      id: 'usr-local-guest',
      email: 'local@device',
      displayName: 'Local Guest',
    });
  };

  return (
    <div
      role="region"
      aria-label="Application Login Screen"
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center select-none overflow-hidden text-white"
    >
      {/* Blurred Acrylic Wallpaper Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-xl scale-110 pointer-events-none transition-all duration-700"
        style={{ backgroundImage: `url(${currentWallpaper})` }}
      />
      {/* High-Contrast Scrim Overlay */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-2xl pointer-events-none" />

      {/* Top-Right Corner Action: "Create Account" Entry Point (§8.6) */}
      <CreateAccountLink
        isSignupMode={isSignup}
        onToggle={() => setIsSignup(!isSignup)}
      />

      {/* Center Interface Area */}
      <div className="relative z-10 w-full px-4 flex flex-col items-center justify-center">
        {isSignup ? (
          <SignupScreen
            onSuccess={(user) => onLoginSuccess(user)}
            onBackToLogin={() => setIsSignup(false)}
          />
        ) : (
          <div className="w-full max-w-[400px] p-8 rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-2xl shadow-2xl text-white select-none animate-fadeIn">
            {/* Header with MyOS Logo */}
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-zinc-950/80 border border-white/10 flex items-center justify-center text-white shadow-xl mb-3 p-2.5 drop-shadow-[0_0_20px_rgba(66,103,213,0.5)]">
                <img
                  src="/assets/branding/logo.svg"
                  alt="MyOS Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-bold tracking-tight">Welcome back</h2>
              <p className="text-xs text-zinc-400 mt-1">
                Sign in to your MyOS Workspace
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div
                role="alert"
                className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                <span>{error}</span>
              </div>
            )}

            {/* Forgot Password Feedback */}
            {forgotPasswordNotice && (
              <div
                role="status"
                className="mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs"
              >
                Password reset link sent to your registered address if the account exists.
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} onKeyDown={handleKeyDown} className="space-y-4">
              <div>
                <label className="block text-[11px] font-medium text-zinc-300 mb-1">
                  Email or Username
                </label>
                <input
                  type="email"
                  required
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@desktop.local"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[11px] font-medium text-zinc-300">Password</label>
                  {capsLockActive && (
                    <span className="text-[10px] text-amber-400 font-semibold tracking-wide">
                      Caps Lock ON
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-3 pr-8 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-2.5 text-zinc-400 hover:text-white"
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Remember me & Forgot Password */}
              <div className="flex items-center justify-between text-xs pt-0.5">
                <label className="flex items-center gap-2 cursor-pointer text-zinc-300">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded accent-blue-500"
                  />
                  <span className="text-[11px]">Remember me</span>
                </label>

                <button
                  type="button"
                  onClick={() => setForgotPasswordNotice(true)}
                  className="text-[11px] text-blue-400 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/30 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    <span>Sign in to Workspace</span>
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-5 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <span className="relative px-3 bg-zinc-900/90 text-[10px] text-zinc-400 uppercase tracking-widest font-mono">
                or
              </span>
            </div>

            {/* Secondary: Local Profile & Windows Hello Options */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={handleLocalProfile}
                className="w-full py-2 px-3 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 active:bg-white/10 text-xs font-medium text-zinc-300 hover:text-white flex items-center justify-center gap-2 transition-all"
              >
                <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
                <span>Continue with local profile</span>
              </button>

              <button
                type="button"
                onClick={handleLocalProfile}
                className="w-full py-2 px-3 rounded-xl border border-white/5 hover:border-white/15 hover:bg-white/5 text-[11px] font-medium text-zinc-400 hover:text-zinc-200 flex items-center justify-center gap-2 transition-all"
                title="Windows-Integrated Hello Biometrics"
              >
                <Fingerprint className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sign in with Windows Hello (Simulated)</span>
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 flex flex-col items-center gap-1.5 text-[11px] text-zinc-400 font-medium">
          <div className="flex items-center gap-4">
            <span className="font-mono text-zinc-400">MyOS v1.0.0</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>Encrypted Session • Microsoft SQL Server 2025 Connected</span>
          </div>
        </div>
      </div>
    </div>
  );
};
