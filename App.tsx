
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import WhyPage from './components/WhyPage';
import Neko19Page from './components/Neko19Page';
import ContactPage from './components/ContactPage';
import InvestorPage from './components/InvestorPage';
import PasswordProtect from './components/PasswordProtect';
import { Page, Language } from './types';
import { NAV_LINKS } from './constants';
import ScrollToTopButton from './components/ScrollToTopButton';
import DnaPage from './components/DnaPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import CookiePolicyPage from './components/CookiePolicyPage';
import TermsPage from './components/TermsPage';
import DisclaimerPage from './components/DisclaimerPage';
import SupplierPartnershipsPage from './components/SupplierPartnershipsPage';
import CookieConsent from './components/CookieConsent';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [language, setLanguage] = useState<Language>('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // For the homepage, we only consider it "scrolled" after passing the hero section
      const scrollThreshold = currentPage === 'Home' ? window.innerHeight * 0.8 : 10;
      setIsScrolled(window.scrollY > scrollThreshold);
      setShowScrollButton(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'The Why':
        return <WhyPage />;
      case 'The DNA':
        return <DnaPage />;
      case 'NEKO 19':
        return <Neko19Page />;
      case 'Investors':
        return (
          <PasswordProtect>
            <InvestorPage />
          </PasswordProtect>
        );
      case 'Contact':
        return <ContactPage />;
      case 'Privacy Policy':
        return <PrivacyPolicyPage />;
      case 'Cookie Policy':
        return <CookiePolicyPage />;
      case 'Terms and Conditions':
        return <TermsPage />;
      case 'Disclaimer':
        return <DisclaimerPage />;
      case 'Supplier Partnerships':
        return <SupplierPartnershipsPage />;
      case 'Home':
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-grey-900 text-grey-200">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        navLinks={NAV_LINKS}
        isScrolled={isScrolled}
        language={language}
        setLanguage={setLanguage}
      />
      <main className={`flex-grow ${currentPage === 'Home' ? '' : 'pt-20'}`}>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} navLinks={NAV_LINKS} />
      <ScrollToTopButton isVisible={showScrollButton} onClick={scrollToTop} />
      <CookieConsent />
    </div>
  );
};

export default App;