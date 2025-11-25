
import React from 'react';
import AnimatedSection from './AnimatedSection';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none text-grey-300 space-y-6 text-lg leading-relaxed prose-p:font-light prose-li:font-light prose-headings:font-bold">
            <p className="text-grey-400 italic font-light">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
            <p>This Privacy Policy explains how Cool Catamaran Company (“we”, “us”, “our”) collects, uses, and protects your personal data when you visit the Neko website (“Website”).</p>
            <p>We are committed to complying with applicable UK data protection laws, including the UK GDPR and the Data Protection Act 2018.</p>

            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">1. Data We Collect</h2>
            <p>We currently collect only the following personal information when voluntarily submitted via our interest or contact form:</p>
            <ul className="list-disc pl-8">
                <li>Name</li>
                <li>Email address</li>
            </ul>
            <p>We do not collect payment information or sensitive categories of personal data.</p>
            
            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">2. How We Use Your Data</h2>
            <p>Your data is used solely for:</p>
            <ul className="list-disc pl-8">
                <li>Responding to your inquiry</li>
                <li>Providing updates about the Neko vessel or related services</li>
                <li>Managing our contact list and potential client communications</li>
            </ul>
            <p>We do not sell, rent, or trade your information.</p>

            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">3. Lawful Basis for Processing</h2>
            <p>We process your information under:</p>
            <ul className="list-disc pl-8">
                <li><strong>Consent:</strong> When you submit your information voluntarily.</li>
                <li><strong>Legitimate Interest:</strong> To communicate with interested clients regarding the Neko vessel.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">4. Data Storage and Security</h2>
            <p>We take reasonable technical and organisational measures to protect your personal information. Data may be stored with reputable third-party service providers (e.g., website hosting, email communication tools).</p>

            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">5. Data Sharing</h2>
            <p>We may share your information only with:</p>
            <ul className="list-disc pl-8">
                <li>Service providers assisting with website hosting or communications</li>
            </ul>
            <p>These parties are required to protect your data and act only under our instruction.</p>
            <p>We do not transfer your data outside the UK unless adequate safeguards are in place.</p>
            
            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">6. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-8">
                <li>Access your data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion</li>
                <li>Withdraw consent</li>
                <li>Object to processing</li>
                <li>Lodge a complaint with the ICO (<a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#D5C4A1] hover:underline">www.ico.org.uk</a>)</li>
            </ul>
            <p>To exercise your rights, contact us at: <a href="mailto:mail@nekoyachts.com" className="text-[#D5C4A1] hover:underline">mail@nekoyachts.com</a></p>

            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">7. Cookies</h2>
            <p>See our full Cookie Policy below.</p>

            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">8. Contact Us</h2>
            <p>
                Cool Catamaran Company<br />
                128 City Road, London, United Kingdom, EC1V 2NX<br />
                Email: <a href="mailto:mail@nekoyachts.com" className="text-[#D5C4A1] hover:underline">mail@nekoyachts.com</a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};
export default PrivacyPolicyPage;
