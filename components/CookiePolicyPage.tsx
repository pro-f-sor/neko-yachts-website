
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ChevronLeftIcon } from './icons/Icons';
import { Page } from '../types';

interface CookiePolicyPageProps {
  setCurrentPage?: (page: Page) => void;
}

const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ setCurrentPage }) => {
  const handleHomeClick = (e: React.MouseEvent) => {
    if (setCurrentPage) {
      e.preventDefault();
      setCurrentPage('Home');
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 font-sans text-slate-800">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Navigation */}
        <div className="max-w-3xl mx-auto mb-12">
            <a 
              href="/" 
              onClick={handleHomeClick}
              className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-[#D5C4A1] transition-colors cursor-pointer"
            >
                <span className="mr-2 transform rotate-180"><ChevronLeftIcon /></span>
                Back to Home
            </a>
        </div>

        <AnimatedSection className="max-w-3xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4 uppercase">
            Cookie Policy
          </h1>
          <p className="text-slate-500 italic text-sm mb-16 border-b border-slate-200 pb-8">
            Last Updated: {new Date().toLocaleDateString('en-GB')}
          </p>
          
          <div className="space-y-12 text-lg leading-relaxed font-light">
            
            {/* 1. WHAT ARE COOKIES? */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">1. What Are Cookies?</h3>
                <p>
                    Cookies are small text files placed on your device to ensure our website functions correctly and to help us understand how users interact with our content.
                </p>
            </section>

            {/* 2. HOW WE USE COOKIES */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">2. How We Use Cookies</h3>
                <p className="mb-4">
                    Cool Catamaran Company Ltd uses cookies for the following functions:
                </p>
                <ul className="list-disc pl-6 space-y-4 text-slate-700">
                    <li>
                        <strong className="font-bold text-slate-900">Essential Cookies:</strong> These are necessary for the website to function, particularly for the secure authentication of the NEKO Investor Portal. These cannot be switched off.
                    </li>
                    <li>
                        <strong className="font-bold text-slate-900">Performance Cookies:</strong> These allow us to count visits and traffic sources so we can improve the performance of our site. All information these cookies collect is aggregated and anonymous.
                    </li>
                    <li>
                        <strong className="font-bold text-slate-900">Functional Cookies:</strong> These enable the website to provide enhanced functionality and personalization, such as remembering your region or preferences.
                    </li>
                </ul>
            </section>

            {/* 3. MANAGING COOKIES */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">3. Managing Cookies</h3>
                <p>
                    Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="http://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#D5C4A1] font-bold hover:underline">www.aboutcookies.org</a> or <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#D5C4A1] font-bold hover:underline">www.allaboutcookies.org</a>.
                </p>
            </section>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
