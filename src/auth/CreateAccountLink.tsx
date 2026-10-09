import React from 'react';
import { UserPlus, ArrowLeft } from 'lucide-react';
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
    <div className="absolute top-6 right-8 z-50">
      <button
        onClick={() => {
          soundEngine.play('click');
          onToggle();
        }}
        aria-label={isSignupMode ? 'Back to sign in' : 'Create a new account'}
        className="group min-h-[44px] min-w-[44px] px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 hover:border-white/20 backdrop-blur-md text-xs font-medium text-white/90 hover:text-white flex items-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50 shadow-lg"
      >
        {isSignupMode ? (
          <>
            <ArrowLeft className="w-3.5 h-3.5 text-blue-400 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to sign in</span>
          </>
        ) : (
          <>
            <span className="text-white/60">New here?</span>
            <span className="text-blue-400 font-semibold group-hover:underline">Create account</span>
            <UserPlus className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
          </>
        )}
      </button>
    </div>
  );
};
