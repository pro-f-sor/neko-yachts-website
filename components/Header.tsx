
import React, { useState } from 'react';
import { Page, NavLink } from '../types';
import { MenuIcon, CloseIcon } from './icons/Icons';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  navLinks: NavLink[];
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, navLinks, isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    if (page !== 'Home') {
      window.scrollTo(0, 0);
    }
  };
  
  const isTransparent = !isScrolled && !isMenuOpen && currentPage === 'Home';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent' : 'bg-grey-900/95 backdrop-blur-sm shadow-lg'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="text-2xl font-bold tracking-wider cursor-pointer transition-colors hover:text-[#D5C4A1]"
            onClick={() => handleNavClick('Home')}
          >
            NEKO
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.name);
                }}
                className={`text-sm font-medium uppercase tracking-widest transition-colors duration-300 hover:text-white ${
                  currentPage === link.name
                    ? 'text-[#D5C4A1]'
                    : 'text-[#D8D8D8]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-grey-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-grey-900">
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.name);
                }}
                className={`text-lg font-medium uppercase tracking-widest transition-colors duration-300 hover:text-white ${
                  currentPage === link.name ? 'text-[#D5C4A1]' : 'text-[#D8D8D8]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;