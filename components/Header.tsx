
import React, { useState, useEffect, useRef } from 'react';
import { Page, NavLink, Language } from '../types';
import { MenuIcon, CloseIcon, GlobeIcon, ChevronDownIcon } from './icons/Icons';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  navLinks: NavLink[];
  isScrolled: boolean;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const NAV_LABELS: Record<Language, Record<string, string>> = {
  en: {
    'Home': 'Home',
    'The Why': 'The Why',
    'The DNA': 'The DNA',
    'NEKO 19': 'NEKO 19',
    'Contact': 'Contact'
  },
  fr: {
    'Home': 'Accueil',
    'The Why': 'Philosophie',
    'The DNA': 'L\'ADN',
    'NEKO 19': 'NEKO 19',
    'Contact': 'Contact'
  }
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, navLinks, isScrolled, language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    if (page !== 'Home') {
      window.scrollTo(0, 0);
    }
  };

  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
    setIsMenuOpen(false); // Close mobile menu if open
  };
  
  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
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
          
          {/* Desktop Navigation & Language */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
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
                  {NAV_LABELS[language][link.name] || link.name}
                </a>
              ))}
            </nav>

            {/* Language Selector (Desktop) */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={toggleLangMenu}
                className="flex items-center space-x-1 text-[#D8D8D8] hover:text-[#D5C4A1] transition-colors focus:outline-none"
              >
                <GlobeIcon />
                <span className="uppercase text-sm font-medium">{language}</span>
                <ChevronDownIcon />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-grey-900 border border-grey-800 rounded-lg shadow-xl overflow-hidden">
                  <button
                    onClick={() => selectLanguage('en')}
                    className={`block w-full text-left px-4 py-3 text-sm hover:bg-grey-800 transition-colors ${language === 'en' ? 'text-[#D5C4A1] font-bold' : 'text-grey-300'}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => selectLanguage('fr')}
                    className={`block w-full text-left px-4 py-3 text-sm hover:bg-grey-800 transition-colors ${language === 'fr' ? 'text-[#D5C4A1] font-bold' : 'text-grey-300'}`}
                  >
                    Français
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-grey-900 border-t border-grey-800">
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
                 {NAV_LABELS[language][link.name] || link.name}
              </a>
            ))}
            
            {/* Language Selector (Mobile) */}
            <div className="pt-6 border-t border-grey-800 w-1/2 flex justify-center space-x-6">
                 <button 
                    onClick={() => selectLanguage('en')}
                    className={`text-lg font-medium uppercase tracking-widest transition-colors ${language === 'en' ? 'text-[#D5C4A1]' : 'text-grey-400'}`}
                 >
                    EN
                 </button>
                 <span className="text-grey-600">|</span>
                 <button 
                    onClick={() => selectLanguage('fr')}
                    className={`text-lg font-medium uppercase tracking-widest transition-colors ${language === 'fr' ? 'text-[#D5C4A1]' : 'text-grey-400'}`}
                 >
                    FR
                 </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
