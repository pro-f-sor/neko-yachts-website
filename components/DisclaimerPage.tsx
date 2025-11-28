
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ChevronLeftIcon } from './icons/Icons';
import { Page } from '../types';

interface DisclaimerPageProps {
  setCurrentPage?: (page: Page) => void;
}

const DisclaimerPage: React.FC<DisclaimerPageProps> = ({ setCurrentPage }) => {
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
            Legal Disclaimer &<br/>Terms of Use
          </h1>
          <p className="text-slate-500 italic text-sm mb-16 border-b border-slate-200 pb-8">
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </p>
          
          <div className="space-y-12 text-lg leading-relaxed font-light">
            
            {/* 1. GENERAL INFORMATION */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">1. General Information</h3>
                <p>
                    The information provided on this website (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however, NEKO Yachts Ltd ("NEKO", "we", "us", or "our") makes no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                </p>
            </section>

            {/* 2. FORWARD-LOOKING STATEMENTS */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">2. Forward-Looking Statements (Safe Harbor)</h3>
                <p className="mb-6">
                    This Site and the associated Investor Portal contain "forward-looking statements" within the meaning of applicable securities laws. These statements may be identified by words such as "anticipates," "believes," "estimates," "expects," "intends," "may," "plans," "projects," "will," "would," and similar expressions.
                </p>
                
                <h4 className="text-base font-bold text-slate-900 mb-2">Specific Projections:</h4>
                <p className="mb-6">
                    Statements regarding the launch date of the NEKO 19 (Projected 2027), the projected growth of the luxury catamaran market, and anticipated unit economics are forward-looking.
                </p>

                <h4 className="text-base font-bold text-slate-900 mb-2">Risk Factors:</h4>
                <p className="mb-4">
                    These statements are based on current management expectations and are subject to significant risks and uncertainties that could cause actual results to differ materially. Factors include, but are not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700">
                    <li>Supply chain disruptions or raw material shortages.</li>
                    <li>Changes in global economic conditions or luxury market demand.</li>
                    <li>Regulatory changes in maritime manufacturing standards.</li>
                    <li>Delays in shipyard tooling or production.</li>
                </ul>
                <p>
                    NEKO Yachts assumes no obligation to update forward-looking statements to reflect events or circumstances after the date they were made.
                </p>
            </section>

            {/* 3. NO OFFER OF SECURITIES */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">3. No Offer of Securities</h3>
                <p>
                    Nothing on this Site constitutes an offer to sell or the solicitation of an offer to buy any securities or financial instruments. Any investment in NEKO Yachts may only be made pursuant to a definitive Subscription Agreement and confidential Information Memorandum (IM), which will be provided only to qualified investors who have been verified through our Investor Portal.
                </p>
            </section>

            {/* 4. INTELLECTUAL PROPERTY */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">4. Intellectual Property & Conceptual Renders</h3>
                
                <h4 className="text-base font-bold text-slate-900 mb-2">Conceptual Nature:</h4>
                <p className="mb-6">
                    The NEKO 19 vessel depicted on this Site is currently in the design and engineering phase. All images, renders, and specifications are conceptual and subject to change without notice during the final engineering and manufacturing process.
                </p>

                <h4 className="text-base font-bold text-slate-900 mb-2">Copyright:</h4>
                <p>
                    All content, designs, renders, and text are the exclusive property of NEKO Yachts Ltd. Unauthorized reproduction or use of these materials for commercial purposes is strictly prohibited.
                </p>
            </section>

            {/* 5. PROFESSIONAL ADVICE */}
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">5. Professional Advice</h3>
                <p>
                    The content of this Site does not constitute legal, financial, or tax advice. You should consult with your own professional advisors regarding any potential investment or purchase.
                </p>
            </section>

            {/* CONTACT */}
            <section className="pt-12 border-t border-slate-200 mt-12">
                <p className="text-sm text-slate-500">
                    For specific legal enquiries, please contact: <a href="mailto:mail@nekoyachts.com" className="text-[#D5C4A1] font-bold hover:underline">mail@nekoyachts.com</a>
                </p>
            </section>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};
export default DisclaimerPage;
