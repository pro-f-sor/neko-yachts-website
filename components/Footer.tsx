import React from 'react';
import { Page, NavLink } from '../types';
import { TwitterIcon, InstagramIcon, LinkedInIcon } from './icons/Icons';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
  navLinks: NavLink[];
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage, navLinks }) => {

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
    
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold tracking-wider text-white">NEKO</h2>
            <p className="mt-4 text-gray-400 text-sm">Redefining performance cruising.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><TwitterIcon /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><InstagramIcon /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><LinkedInIcon /></a>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Navigate</h3>
              <ul className="mt-4 space-y-2">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(link.name); }} className="text-base text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Inquiries</h3>
              <ul className="mt-4 space-y-2">
                <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('Contact'); }} className="text-base text-gray-400 hover:text-white transition-colors">Sales</a>
                </li>
                <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('Contact'); }} className="text-base text-gray-400 hover:text-white transition-colors">Suppliers</a>
                </li>
                <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('Investors'); }} className="text-base text-gray-400 hover:text-white transition-colors">Investors</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
              <ul className="mt-4 space-y-2 text-base text-gray-400">
                <li><a href="mailto:hello@nekoyachts.com" className="hover:text-white">hello@nekoyachts.com</a></li>
                <li>Designed in the EU & UK</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} NEKO Yachts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;