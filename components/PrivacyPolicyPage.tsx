
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ChevronLeftIcon } from './icons/Icons';
import { Page } from '../types';

interface PrivacyPolicyPageProps {
  setCurrentPage?: (page: Page) => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ setCurrentPage }) => {
  const handleHomeClick = (e: React.MouseEvent) => {
    if (setCurrentPage) {
      e.preventDefault();
      setCurrentPage('Home');
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 font-sans text-slate-800 selection:bg-[#D5C4A1] selection:text-white">
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
            Privacy Policy
          </h1>
          <p className="text-slate-500 italic text-sm mb-16 border-b border-slate-200 pb-8">
            Last Updated: {new Date().toLocaleDateString('en-GB')}
          </p>

          <div className="space-y-12 text-[15.5px] leading-relaxed font-light">
            
            {/* 1. INTRODUCTION */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">1. Introduction</h3>
                <p>
                    Cool Catamaran Company Ltd (trading as "NEKO Yachts", "we", "us") is committed to protecting the privacy and security of our clients, investors, and partners. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or access the secure NEKO Investor Portal.
                </p>
            </section>

            {/* 2. INFORMATION WE COLLECT */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">2. Information We Collect</h3>
                <p className="mb-4">
                    We collect information to provide a bespoke service and ensure the security of our proprietary data.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><strong className="font-bold text-slate-900">Personal Identity Data:</strong> Name, email address, and phone number provided via our "Enquire" or "Inner Circle" forms.</li>
                    <li><strong className="font-bold text-slate-900">Professional Data:</strong> For investors requesting access to the Data Room, we may collect entity names, investment accreditation status, and regional location.</li>
                    <li><strong className="font-bold text-slate-900">Technical Data:</strong> IP address, browser type, and usage data to monitor site performance and security.</li>
                </ul>
            </section>

            {/* 3. HOW WE USE YOUR DATA */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">3. How We Use Your Data</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><strong className="font-bold text-slate-900">Investor Verification:</strong> To vet applicants for the secure Investor Portal.</li>
                    <li><strong className="font-bold text-slate-900">Communication:</strong> To provide updates regarding the NEKO 19 development and launch timeline.</li>
                    <li><strong className="font-bold text-slate-900">Security:</strong> To prevent unauthorized access to our proprietary intellectual property.</li>
                </ul>
            </section>

            {/* 4. DATA SHARING & SECURITY */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">4. Data Sharing & Security</h3>
                <p>
                    We do not sell your personal data. We may share data with trusted third-party service providers (e.g., secure hosting, CRM systems) solely for operational purposes. We employ enterprise-grade encryption and access controls to protect your data.
                </p>
            </section>

             {/* 5. YOUR RIGHTS */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">5. Your Rights (GDPR/UK)</h3>
                <p>
                    Under applicable data protection laws, you have the right to access, correct, or request the deletion of your personal data. To exercise these rights, please contact our Data Protection Officer at <a href="mailto:privacy@nekoyachts.com" className="text-[#D5C4A1] font-bold hover:underline">privacy@nekoyachts.com</a>.
                </p>
            </section>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
