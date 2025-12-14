
import React, { useState } from 'react';
import { Page, NavLink } from '../types';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './icons/Icons';
import { CeBadge } from './icons/CeBadge';

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
              <a href="https://www.facebook.com/NekoCatamaran" target="_blank" rel="noopener noreferrer" className="text-grey-400 hover:text-[#D5C4A1] transition-colors"><FacebookIcon /></a>
              <a href="https://www.instagram.com/neko.yachts/" target="_blank" rel="noopener noreferrer" className="text-grey-400 hover:text-[#D5C4A1] transition-colors"><InstagramIcon /></a>
              <a href="https://www.linkedin.com/company/neko-yachts/" target="_blank" rel="noopener noreferrer" className="text-grey-400 hover:text-[#D5C4A1] transition-colors"><LinkedInIcon /></a>
            </div>
            
            {/* CE Badge with Shimmer Beam */}
            <div className="mt-10 group cursor-default flex items-center relative">
                
                {/* Badge Container */}
                <div className="relative w-16 h-16 flex-shrink-0 mr-4">
                    {/* Rotating Shimmer Gradient (The Beam) */}
                    <div 
                        className="absolute -inset-[1px] rounded-full animate-[spin_3s_linear_infinite]"
                        style={{
                            background: 'conic-gradient(from 0deg, transparent 0deg, transparent 90deg, #D5C4A1 180deg, transparent 270deg, transparent 360deg)',
                            opacity: 0.6
                        }}
                    ></div>
                    
                    {/* Inner Mask to create the 1px border effect */}
                    <div className="absolute inset-0 bg-grey-950 rounded-full z-10"></div>

                    {/* The Badge */}
                    <CeBadge className="relative z-20 w-full h-full text-grey-600 group-hover:text-[#D5C4A1] transition-colors duration-500" />
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-[10px] text-grey-600 tracking-widest uppercase group-hover:text-[#D5C4A1] transition-colors leading-relaxed">
                        World's Highest Standard
                    </p>
                </div>
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
