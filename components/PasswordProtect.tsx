
import React, { useState } from 'react';
import { LockIcon, ArrowRightIcon } from './icons/Icons';

// In a real-world application, this would be stored securely in an environment variable.
const CORRECT_PASSWORD = 'NEKOFuture2025';

interface PasswordProtectProps {
  children: React.ReactNode;
}

const PasswordProtect: React.FC<PasswordProtectProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Access Denied. Invalid Credentials.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-grey-900 px-4">
      <div className="max-w-lg w-full">
        {/* The Velvet Rope Card */}
        <div className="bg-grey-950 border border-[#D5C4A1] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D5C4A1]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D5C4A1]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D5C4A1]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D5C4A1]"></div>

          <div className="mb-8 text-[#D5C4A1]">
            <LockIcon />
          </div>

          <h2 className="text-sm font-bold tracking-[0.2em] text-[#D5C4A1] uppercase mb-4">
            Authorized Access Only
          </h2>
          
          <p className="text-grey-400 font-light text-sm leading-relaxed mb-10">
            This portal contains proprietary data regarding the NEKO Yachts strategic roadmap. Access is restricted to qualified partners.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Access Key"
                className="w-full bg-grey-900 border-b border-grey-700 text-white text-center py-3 focus:outline-none focus:border-[#D5C4A1] transition-colors font-mono tracking-widest placeholder-grey-600"
                autoFocus
                />
            </div>
            
            <button 
                type="submit" 
                className="w-full bg-[#D5C4A1] hover:bg-white text-grey-900 font-bold tracking-widest uppercase py-4 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Enter Portal
              <ArrowRightIcon />
            </button>
          </form>

          {error && (
            <div className="mt-6 p-3 bg-red-900/20 border border-red-900/50">
                <p className="text-red-400 text-xs font-mono uppercase tracking-wide">{error}</p>
            </div>
          )}
          
          <div className="mt-8 pt-6 border-t border-white/5">
             <p className="text-xs text-grey-600 font-mono">SECURE CONNECTION | 256-BIT ENCRYPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtect;
