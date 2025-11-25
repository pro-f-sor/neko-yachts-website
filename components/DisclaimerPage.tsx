
import React from 'react';
import AnimatedSection from './AnimatedSection';

const DisclaimerPage: React.FC = () => {
  return (
    <div className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-8">Disclaimer</h1>
          <div className="prose prose-invert max-w-none text-grey-300 space-y-6 text-lg leading-relaxed prose-p:font-light prose-li:font-light prose-headings:font-bold">
            <p className="text-grey-400 italic font-light">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
            
            <p>The information on the Neko website is provided for general marketing and informational purposes only.</p>

            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">1. No Professional Advice</h2>
            <p>Content on the Website—such as descriptions of vessels, services, or capabilities—is not intended as:</p>
            <ul className="list-disc pl-8">
                <li>Technical advice</li>
                <li>Safety advice</li>
                <li>Legal or regulatory advice</li>
            </ul>
            <p>Please contact us directly for official specifications or professional guidance.</p>

            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">2. Accuracy of Information</h2>
            <p>We strive to keep information accurate and up-to-date, but:</p>
            <ul className="list-disc pl-8">
                <li>Details may change during design and development</li>
                <li>Specifications may be updated</li>
                <li>Errors or omissions may occur</li>
            </ul>
            <p>We make no guarantees regarding completeness or accuracy.</p>

            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">3. External Links</h2>
            <p>We are not responsible for the content or reliability of external sites linked from the Website.</p>

            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">4. No Liability</h2>
            <p>To the fullest extent permitted by UK law, Cool Catamaran Company disclaims liability for:</p>
            <ul className="list-disc pl-8">
                <li>Any loss or damage arising from reliance on Website content</li>
                <li>Any issues encountered using or accessing the Website</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#D5C4A1] pt-4">5. Contact</h2>
            <p>For clarification about this Disclaimer, reach us at: <a href="mailto:mail@nekoyachts.com" className="text-[#D5C4A1] hover:underline">mail@nekoyachts.com</a></p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};
export default DisclaimerPage;
