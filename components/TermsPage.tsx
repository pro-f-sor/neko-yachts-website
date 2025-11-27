import React from 'react';
import AnimatedSection from './AnimatedSection';

const TermsPage: React.FC = () => {
  return (
    <div className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12 uppercase">Website Terms and Conditions</h1>
          
          <div className="text-grey-300 space-y-8 text-lg sm:text-xl leading-relaxed font-light">
            <p className="text-grey-400 italic text-base">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
            <p>Welcome to the Neko website (“Website”), operated by Cool Catamaran Company (“we”, “us”, “our”). By accessing this Website, you agree to these Terms of Service.</p>
            <p>If you do not agree, please do not use the Website.</p>

            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">1. Purpose of the Website</h2>
                <p>The Website provides marketing and informational content about the Neko catamaran vessel and allows visitors to express interest or contact us.</p>
                <p>The Website does not facilitate bookings, payments, or online transactions.</p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">2. Use of the Website</h2>
                <p>You agree to:</p>
                <ul className="list-disc pl-8 space-y-2 mt-4">
                    <li>Use the Website only for lawful purposes</li>
                    <li>Not attempt to disrupt or compromise the Website</li>
                    <li>Not submit false or misleading information</li>
                </ul>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">3. Intellectual Property</h2>
                <p>All content—including text, images, graphics, logos, and design—is owned by Cool Catamaran Company or licensed to us.</p>
                <p>You may not reproduce, distribute, or modify content without our written permission.</p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">4. User Submissions</h2>
                <p>If you submit your name and email:</p>
                <ul className="list-disc pl-8 space-y-2 mt-4">
                    <li>You confirm the information is accurate</li>
                    <li>You grant us permission to contact you regarding our services</li>
                    <li>We will handle your information according to our Privacy Policy.</li>
                </ul>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">5. Third-Party Links</h2>
                <p>The Website may contain links to external websites.</p>
                <p>We are not responsible for the content or practices of these third-party sites.</p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">6. Website Availability</h2>
                <p>We do our best to keep the Website up and running but do not guarantee uninterrupted access.</p>
                <p>We may modify or discontinue the Website at any time.</p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">7. Disclaimer of Warranties</h2>
                <p>The Website is provided “as is” without warranties of any kind.</p>
                <p>See full Disclaimer below.</p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">8. Limitation of Liability</h2>
                <p>To the extent permitted by law, Cool Catamaran Company shall not be liable for:</p>
                <ul className="list-disc pl-8 space-y-2 mt-4">
                    <li>Any indirect, incidental, or consequential damages</li>
                    <li>Loss resulting from use or inability to use the Website</li>
                </ul>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">9. Governing Law</h2>
                <p>These Terms are governed by the laws of England and Wales.</p>
                <p>Any disputes will be resolved in UK courts.</p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#D5C4A1] mb-4 uppercase tracking-wide">10. Contact</h2>
                <p>For questions about these Terms, email us at: <a href="mailto:mail@nekoyachts.com" className="text-[#D5C4A1] hover:underline">mail@nekoyachts.com</a></p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};
export default TermsPage;