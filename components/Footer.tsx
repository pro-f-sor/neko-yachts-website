
import React, { useState } from 'react';
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
    <footer className="bg-grey-950 border-t border-grey-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-0.5">
              <h2 className="text-2xl font-bold tracking-wider text-white">NEK</h2>
              <img 
                src="https://coolcatamaran.com/images/logo/NEK-O-gold.png" 
                alt="O" 
                className="h-6 w-auto object-contain ml-[-3px] mt-[-1px]"
              />
            </div>
            <p className="mt-4 text-grey-400 text-sm">Redefining performance cruising.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-grey-400 hover:text-[#D5C4A1] transition-colors"><TwitterIcon /></a>
              <a href="#" className="text-grey-400 hover:text-[#D5C4A1] transition-colors"><InstagramIcon /></a>
              <a href="#" className="text-grey-400 hover:text-[#D5C4A1] transition-colors"><LinkedInIcon /></a>
            </div>
            
            {/* CE Badge */}
            <div className="mt-8 inline-flex items-center gap-3 border border-grey-800 bg-grey-900 px-4 py-2 rounded-sm group hover:border-[#D5C4A1]/50 transition-colors cursor-default">
                <div className="h-2 w-2 rounded-full bg-[#D5C4A1] animate-pulse"></div>
                <span className="text-[10px] font-bold text-grey-300 uppercase tracking-widest group-hover:text-white transition-colors">CE Class A Certified</span>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-grey-200 tracking-wider uppercase">Navigate</h3>
              <ul className="mt-4 space-y-2">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.name); }} className="text-base text-[#D8D8D8] hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-grey-200 tracking-wider uppercase">Enquiries</h3>
              <ul className="mt-4 space-y-2">
                <li>
                    <a href="?page=enquire" onClick={(e) => { e.preventDefault(); handleNavClick('Enquire'); }} className="text-base text-[#D8D8D8] hover:text-white transition-colors">Sales</a>
                </li>
                <li>
                    <a href="?page=supplier-partnerships" onClick={(e) => { e.preventDefault(); handleNavClick('Supplier Partnerships'); }} className="text-base text-[#D8D8D8] hover:text-white transition-colors">Supplier Partnerships</a>
                </li>
                <li>
                    <a href="?page=investors" onClick={(e) => { e.preventDefault(); handleNavClick('Investors'); }} className="text-base text-[#D8D8D8] hover:text-white transition-colors">Investors</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-grey-200 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                    <a href="?page=privacy-policy" onClick={(e) => { e.preventDefault(); handleNavClick('Privacy Policy'); }} className="text-base text-[#D8D8D8] hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                    <a href="?page=cookie-policy" onClick={(e) => { e.preventDefault(); handleNavClick('Cookie Policy'); }} className="text-base text-[#D8D8D8] hover:text-white transition-colors">Cookie Policy</a>
                </li>
                <li>
                    <a href="?page=terms-and-conditions" onClick={(e) => { e.preventDefault(); handleNavClick('Terms and Conditions'); }} className="text-base text-[#D8D8D8] hover:text-white transition-colors">Terms & Conditions</a>
                </li>
                 <li>
                    <a href="?page=disclaimer" onClick={(e) => { e.preventDefault(); handleNavClick('Disclaimer'); }} className="text-base text-[#D8D8D8] hover:text-white transition-colors">Disclaimer</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-grey-200 tracking-wider uppercase">Contact</h3>
              <ul className="mt-4 space-y-2 text-base text-[#D8D8D8]">
                <li><a href="mailto:hello@nekoyachts.com" className="hover:text-white">hello@nekoyachts.com</a></li>
                <li>Designed in the EU & UK</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-grey-800 pt-8 text-center text-sm text-grey-500">
          <p>&copy; {new Date().getFullYear()} Cool Catamaran Company Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
