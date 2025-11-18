import React, { useState } from 'react';
import { LockIcon } from './icons/Icons';

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
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-grey-950/50 p-8 md:p-12 rounded-2xl shadow-2xl text-center">
          <LockIcon />
          <h2 className="text-2xl font-bold text-white mt-4">Investor Relations</h2>
          <p className="mt-2 text-grey-400">This area is password protected. Please enter the password to proceed.</p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="bg-grey-800 border border-grey-700 text-white rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-center"
              autoFocus
            />
            <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full transition-colors">
              Access
            </button>
          </form>
          {error && <p className="text-red-400 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default PasswordProtect;