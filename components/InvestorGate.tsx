
import React, { useState } from 'react';
import { LockIcon, ArrowRightIcon } from './icons/Icons';

interface InvestorGateProps {
  onUnlock: (version: 'GLOBAL' | 'GCC' | 'SINGAPORE') => void;
}

const InvestorGate: React.FC<InvestorGateProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isShake, setIsShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = password.trim().toUpperCase();

    if (input === 'NEKO-GLOBAL') {
      onUnlock('GLOBAL');
    } else if (input === 'NEKO-VISION') {
      onUnlock('GCC');
    } else if (input === 'NEKO-ASIA') {
      onUnlock('SINGAPORE');
    } else {
      setError('Invalid Access Key');
      setIsShake(true);
      setTimeout(() => setIsShake(false), 500);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-grey-900 px-4 font-sans selection:bg-[#D5C4A1] selection:text-grey-900">
      <div className={`max-w-lg w-full transition-transform duration-100 ${isShake ? 'translate-x-[-10px]' : ''} ${isShake ? 'translate-x-[10px]' : ''}`}>
        
        {/* The Velvet Rope Card */}
        <div className="bg-grey-950 border border-[#D5C4A1] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden rounded-none">
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D5C4A1]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D5C4A1]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D5C4A1]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D5C4A1]"></div>

          <div className="mb-8 text-[#D5C4A1]">
            <LockIcon />
          </div>

          <h2 className="text-sm font-bold tracking-[0.2em] text-[#D5C4A1] uppercase mb-6 font-serif">
            Authorised Access Only
          </h2>
          
          <p className="text-grey-400 font-light text-sm leading-relaxed mb-10">
            This portal contains proprietary data regarding the NEKO Yachts strategic roadmap. Access is restricted to qualified partners.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
                <input
                type="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError('');
                }}
                placeholder="Enter Access Key"
                className="w-full bg-grey-900 border-b border-grey-700 text-white text-center py-4 focus:outline-none focus:border-[#D5C4A1] transition-colors font-mono tracking-[0.2em] placeholder-grey-700 text-lg rounded-none"
                autoFocus
                />
            </div>
            
            <button 
                type="submit" 
                className="w-full bg-[#D5C4A1] hover:bg-white text-grey-900 font-bold tracking-widest uppercase py-4 transition-colors duration-300 flex items-center justify-center gap-3 mt-8 shadow-lg rounded-none"
            >
              Enter Secure Room
              <ArrowRightIcon />
            </button>
          </form>

          {error && (
            <div className="mt-8 animate-fade-in-up">
                <p className="text-red-400 text-xs font-bold uppercase tracking-widest bg-red-900/10 py-2 border border-red-900/30">{error}</p>
            </div>
          )}
          
          <div className="mt-12 pt-8 border-t border-white/5">
             <p className="text-xs text-grey-500 font-light leading-relaxed">
                To request credentials, please contact the Office of the Founders at <a href="mailto:partners@nekoyachts.com" className="text-grey-400 hover:text-[#D5C4A1] transition-colors">partners@nekoyachts.com</a>.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorGate;
