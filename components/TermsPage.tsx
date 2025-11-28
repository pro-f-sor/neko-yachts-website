
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ChevronLeftIcon } from './icons/Icons';
import { Page } from '../types';

interface TermsPageProps {
  setCurrentPage?: (page: Page) => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ setCurrentPage }) => {
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
            Terms & Conditions
          </h1>
          <p className="text-slate-500 italic text-sm mb-16 border-b border-slate-200 pb-8">
            Last Updated: {new Date().toLocaleDateString('en-GB')}
          </p>
          
          <div className="space-y-12 text-lg leading-relaxed font-light">
            
            {/* 1. ACCEPTANCE OF TERMS */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">1. Acceptance of Terms</h3>
                <p>
                    By accessing and using this website (the "Site"), operated by Cool Catamaran Company Ltd (trading as "NEKO Yachts"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Site.
                </p>
            </section>

            {/* 2. INTELLECTUAL PROPERTY RIGHTS */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">2. Intellectual Property Rights</h3>
                <h4 className="text-base font-bold text-slate-900 mb-2">Proprietary Designs:</h4>
                <p className="mb-4">
                    All content, conceptual renders, engineering specifications, trademarks, and logos related to the NEKO brand displayed on this Site are the exclusive property of Cool Catamaran Company Ltd.
                </p>
                <h4 className="text-base font-bold text-slate-900 mb-2">Restrictions:</h4>
                <p>
                    You may not reproduce, distribute, modify, or create derivative works of any material found on this Site without our express written permission. Unauthorized use of our conceptual designs for commercial purposes will be prosecuted to the fullest extent of the law.
                </p>
            </section>

            {/* 3. INVESTOR PORTAL ACCESS */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">3. Investor Portal Access</h3>
                <p>
                    Access to the NEKO Investor Portal is restricted to authorized users. You agree to maintain the confidentiality of your access credentials and are responsible for all activities that occur under your account. We reserve the right to terminate access immediately if we detect unauthorized sharing of proprietary data or credentials.
                </p>
            </section>

            {/* 4. LIMITATION OF LIABILITY */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">4. Limitation of Liability</h3>
                <p>
                    In no event shall Cool Catamaran Company Ltd, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of the Site.
                </p>
            </section>

            {/* 5. GOVERNING LAW */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">5. Governing Law</h3>
                <p>
                    These Terms shall be governed and construed in accordance with the laws of England and Wales/European Union, without regard to its conflict of law provisions.
                </p>
            </section>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TermsPage;
