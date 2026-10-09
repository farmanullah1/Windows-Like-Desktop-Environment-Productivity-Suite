import React from 'react';
import { UserPlus, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { soundEngine } from '../design-system/soundEngine';

interface CreateAccountLinkProps {
  isSignupMode: boolean;
  onToggle: () => void;
}

export const CreateAccountLink: React.FC<CreateAccountLinkProps> = ({
  isSignupMode,
  onToggle,
}) => {
  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-8 z-50">
      <motion.button
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        onClick={() => {
          soundEngine.play('click');
          onToggle();
        }}
        aria-label={isSignupMode ? 'Back to sign in' : 'Create a new workstation account'}
        className="group relative min-h-[44px] px-4.5 py-2.5 rounded-2xl bg-zinc-950/70 hover:bg-zinc-900/90 active:bg-zinc-900 border border-white/15 hover:border-blue-400/50 backdrop-blur-3xl text-xs font-medium text-white/90 hover:text-white flex items-center gap-2.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/60 shadow-[0_12px_32px_rgba(0,0,0,0.5)] cursor-pointer overflow-hidden"
      >
        {/* Subtle hover specular sheen */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

        {isSignupMode ? (
          <>
            <motion.div
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft className="w-3.5 h-3.5 text-blue-400 group-hover:-translate-x-1 transition-transform" />
            </motion.div>
            <span className="font-semibold text-zinc-200">Back to sign in</span>
          </>
        ) : (
          <>
            <span className="text-white/60">New to MyOS?</span>
            <span className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">Create Account</span>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/40 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
            >
              <UserPlus className="w-3 h-3 text-blue-400 group-hover:scale-110 transition-transform" />
            </motion.div>
          </>
        )}
      </motion.button>
    </div>
  );
};
