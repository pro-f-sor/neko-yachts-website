import React from 'react';
import AnimatedSection from './AnimatedSection';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12 uppercase">Cookie Policy</h1>
          
          <div className="text-grey-300 space-y-8 text-lg sm:text-xl leading-relaxed font-light">
            <p className="text-grey-400 italic text-base">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
            
            <p>This Cookie Policy explains how Neko (“Website”) uses cookies and similar technologies.</p>

            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">1. What Are Cookies?</h2>
                <p>Cookies are small files stored on your device when browsing a website. They help improve functionality and user experience.</p>
            </div>
            
            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">2. Types of Cookies We Use</h2>
                <p>Because the Website is still in development, we currently use minimal or essential cookies only:</p>
                
                <h3 className="text-xl font-bold text-white mt-6 mb-2">a) Essential Cookies</h3>
                <p>Necessary for core website functions, such as navigation and loading.</p>
                
                <h3 className="text-xl font-bold text-white mt-6 mb-2">b) Analytics Cookies (only if implemented later — update as needed)</h3>
                <p>Used to understand how visitors use the site. Examples include Google Analytics.</p>
                <p className="text-grey-400 italic text-base mt-2">If analytics are not yet implemented, remove this line or keep it as a placeholder for future compliance.</p>
            </div>
            
            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">3. How You Can Control Cookies</h2>
                <p>You can set your browser to:</p>
                <ul className="list-disc pl-8 space-y-2 mt-4">
                    <li>Block all cookies</li>
                    <li>Delete existing cookies</li>
                    <li>Notify you when cookies are being used</li>
                </ul>
                <p className="mt-4">Please note: disabling cookies may affect website functionality.</p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">4. Third-Party Cookies</h2>
                <p>If we use third-party services such as analytics or embedded media, they may set their own cookies. These providers have their own privacy policies.</p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">5. Updates to This Cookie Policy</h2>
                <p>We may update this policy as we add new services or modify the Website.</p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">6. Contact Us</h2>
                <p>For questions, contact: <a href="mailto:mail@nekoyachts.com" className="text-[#D5C4A1] hover:underline">mail@nekoyachts.com</a></p>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};
export default CookiePolicyPage;