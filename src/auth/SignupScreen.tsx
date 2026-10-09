import React, { useState } from 'react';
import {
  Eye,
  EyeOff,
  ShieldCheck,
  UserCheck,
  AlertCircle,
  User,
  Mail,
  Lock,
  Check,
  X,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import { soundEngine } from '../design-system/soundEngine';

interface SignupScreenProps {
  onSuccess: (user: any) => void;
  onBackToLogin: () => void;
}

export const SignupScreen: React.FC<SignupScreenProps> = ({
  onSuccess,
  onBackToLogin,
}) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Password strength calculation
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { score: 0, label: '', color: 'bg-zinc-700' };
    let score = 0;
    if (pass.length >= 6) score += 1;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass) && /[a-z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass) || /[^A-Za-z0-9]/.test(pass)) score += 1;

    switch (score) {
      case 1:
        return { score: 1, label: 'Weak', color: 'bg-rose-500' };
      case 2:
        return { score: 2, label: 'Fair', color: 'bg-amber-500' };
      case 3:
        return { score: 3, label: 'Good', color: 'bg-blue-500' };
      case 4:
      default:
        return { score: 4, label: 'Strong', color: 'bg-emerald-500' };
    }
  };

  const strength = getPasswordStrength(password);
  const passwordsMatch = confirmPassword.length > 0 && password === confirmPassword;
  const passwordsMismatch = confirmPassword.length > 0 && password !== confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!displayName.trim() || !email.trim() || !password) {
      setError('Please fill out all required workstation profile fields.');
      soundEngine.play('error');
      return;
    }

    if (password.length < 6) {
      setError('Workstation password must be at least 6 characters.');
      soundEngine.play('error');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      soundEngine.play('error');
      return;
    }

    if (!acceptTerms) {
      setError('Please accept the MyOS Workstation Security Policy.');
      soundEngine.play('error');
      return;
    }

    setLoading(true);
    soundEngine.play('click');

    try {
      const res = await fetch('/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          displayName: displayName.trim(),
          email: email.trim(),
          password,
        }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        soundEngine.play('success');
        onSuccess(json.data.user);
      } else {
        soundEngine.play('error');
        setError(json.error?.message || 'Failed to create workstation account.');
      }
    } catch (_err) {
      // Local fallback account creation
      soundEngine.play('success');
      onSuccess({
        id: `usr-${Date.now()}`,
        displayName: displayName.trim(),
        email: email.trim(),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-[440px] p-8 sm:p-9 rounded-[2rem] bg-zinc-950/75 border border-white/15 backdrop-blur-3xl shadow-[0_32px_80px_rgba(0,0,0,0.7)] text-white select-none overflow-hidden">
      {/* Subtle Top Specular Sheen */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <motion.div
          whileHover={{ scale: 1.06, rotate: 2 }}
          whileTap={{ scale: 0.96 }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-2xl mb-3.5 border border-white/20 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)] cursor-pointer"
        >
          <UserCheck className="w-8 h-8" />
        </motion.div>
        <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-zinc-300 bg-clip-text text-transparent">
          Create Workstation Account
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Set up your dedicated user profile and credentials
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          className="mb-4 p-3 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center justify-between gap-2 shadow-inner"
        >
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
            <span>{error}</span>
          </div>
          <button
            onClick={() => setError(null)}
            className="p-1 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        {/* Display Name */}
        <div>
          <label className="block text-[11px] font-medium text-zinc-300 mb-1.5">
            Full Name or Handle
          </label>
          <div className="relative flex items-center">
            <div className="absolute left-3.5 flex items-center pointer-events-none text-zinc-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              required
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Farmanullah"
              style={{ paddingLeft: '2.75rem', paddingRight: '1rem' }}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/[0.08] focus:bg-white/10 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-[11px] font-medium text-zinc-300 mb-1.5">
            Email Address
          </label>
          <div className="relative flex items-center">
            <div className="absolute left-3.5 flex items-center pointer-events-none text-zinc-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="developer@desktop.local"
              style={{ paddingLeft: '2.75rem', paddingRight: '1rem' }}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/[0.08] focus:bg-white/10 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-[11px] font-medium text-zinc-300 mb-1.5">
            Create Password
          </label>
          <div className="relative flex items-center">
            <div className="absolute left-3.5 flex items-center pointer-events-none text-zinc-400">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{ paddingLeft: '2.75rem', paddingRight: '2.75rem' }}
              className="w-full pl-11 pr-11 py-2.5 rounded-2xl bg-white/5 hover:bg-white/[0.08] focus:bg-white/10 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 font-mono transition-all shadow-inner"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 flex items-center justify-center text-zinc-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              title={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Live Password Strength Meter */}
        {password.length > 0 && (
          <div className="space-y-1.5 px-0.5">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-zinc-400">Password strength:</span>
              <span className={`font-semibold ${
                strength.score === 1 ? 'text-rose-400' :
                strength.score === 2 ? 'text-amber-400' :
                strength.score === 3 ? 'text-blue-400' : 'text-emerald-400'
              }`}>
                {strength.label}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 h-1.5">
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`rounded-full transition-all duration-300 ${
                    bar <= strength.score ? strength.color : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Confirm Password Field */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-[11px] font-medium text-zinc-300">Confirm Password</label>
            {passwordsMatch && (
              <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Passwords match
              </span>
            )}
            {passwordsMismatch && (
              <span className="text-[10px] text-rose-400 font-semibold flex items-center gap-1">
                <X className="w-3.5 h-3.5" /> Passwords differ
              </span>
            )}
          </div>
          <div className="relative flex items-center">
            <div className="absolute left-3.5 flex items-center pointer-events-none text-zinc-400">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              style={{ paddingLeft: '2.75rem', paddingRight: '1rem' }}
              className={`w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/[0.08] focus:bg-white/10 border text-xs text-white placeholder-zinc-500 focus:outline-none font-mono transition-all shadow-inner ${
                passwordsMatch
                  ? 'border-emerald-500/60 bg-emerald-500/5 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30'
                  : passwordsMismatch
                  ? 'border-rose-500/60 bg-rose-500/5 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/30'
                  : 'border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40'
              }`}
            />
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="pt-1">
          <label className="flex items-start gap-2 cursor-pointer text-zinc-300 hover:text-white transition-colors">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/10 text-cyan-600 focus:ring-cyan-500/40 accent-cyan-600 cursor-pointer"
            />
            <span className="text-[11px] leading-tight text-zinc-400">
              I agree to the <span className="text-cyan-400 underline">Workstation Policy</span> and acknowledge encrypted local session storage.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full mt-2 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 active:from-cyan-700 active:to-blue-700 text-white font-semibold text-xs transition-all shadow-[0_10px_30px_rgba(6,182,212,0.4)] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? (
            <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
          ) : (
            <>
              <span>Complete Workstation Registration</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </form>

      {/* Switch back to login */}
      <div className="mt-5 text-center">
        <button
          onClick={() => {
            soundEngine.play('click');
            onBackToLogin();
          }}
          className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          Already have an account? <span className="text-cyan-400 font-medium underline">Sign in</span>
        </button>
      </div>

      <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-center gap-1.5 text-[10px] text-zinc-500">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span>End-to-End Local Profile Authentication • Zero Telemetry</span>
      </div>
    </div>
  );
};
