
import React from 'react';
import AnimatedSection from './AnimatedSection';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-8">Cookie Policy</h1>
          <div className="prose prose-invert max-w-none text-grey-300 space-y-6 text-lg leading-relaxed prose-p:font-light prose-li:font-light prose-headings:font-bold">
            <p className="text-grey-400 italic font-light">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
            
            <p>This Cookie Policy explains how Neko (“Website”) uses cookies and similar technologies.</p>

            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">1. What Are Cookies?</h2>
            <p>Cookies are small files stored on your device when browsing a website. They help improve functionality and user experience.</p>
            
            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">2. Types of Cookies We Use</h2>
            <p>Because the Website is still in development, we currently use minimal or essential cookies only:</p>
            
            <h3 className="text-xl font-semibold text-white pt-2">a) Essential Cookies</h3>
            <p>Necessary for core website functions, such as navigation and loading.</p>
            
            <h3 className="text-xl font-semibold text-white pt-2">b) Analytics Cookies (only if implemented later — update as needed)</h3>
            <p>Used to understand how visitors use the site. Examples include Google Analytics.</p>
            <p className="text-grey-400 italic text-base">If analytics are not yet implemented, remove this line or keep it as a placeholder for future compliance.</p>
            
            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">3. How You Can Control Cookies</h2>
            <p>You can set your browser to:</p>
            <ul className="list-disc pl-8">
                <li>Block all cookies</li>
                <li>Delete existing cookies</li>
                <li>Notify you when cookies are being used</li>
            </ul>
            <p>Please note: disabling cookies may affect website functionality.</p>

            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">4. Third-Party Cookies</h2>
            <p>If we use third-party services such as analytics or embedded media, they may set their own cookies. These providers have their own privacy policies.</p>

            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">5. Updates to This Cookie Policy</h2>
            <p>We may update this policy as we add new services or modify the Website.</p>

            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">6. Contact Us</h2>
            <p>For questions, contact: <a href="mailto:mail@nekoyachts.com" className="text-[#D5C4A1] hover:underline">mail@nekoyachts.com</a></p>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};
export default CookiePolicyPage;
