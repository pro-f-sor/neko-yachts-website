
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import WhyPage from './components/WhyPage';
import Neko19Page from './components/Neko19Page';
import ContactPage from './components/ContactPage';
import InvestorPage from './components/InvestorPage';
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

// Mapping for URL slugs to internal Page types
const SLUG_TO_PAGE: Record<string, Page> = {
  'home': 'Home',
  'the-why': 'The Why',
  'the-dna': 'The DNA',
  'neko-19': 'NEKO 19',
  'investors': 'Investors',
  'contact': 'Enquire', // Handle legacy slug
  'enquire': 'Enquire',
  'privacy-policy': 'Privacy Policy',
  'cookie-policy': 'Cookie Policy',
  'terms-and-conditions': 'Terms and Conditions',
  'disclaimer': 'Disclaimer',
  'supplier-partnerships': 'Supplier Partnerships'
};

// Reverse mapping to generate URL slugs from Page types
const PAGE_TO_SLUG: Record<string, string> = Object.entries(SLUG_TO_PAGE).reduce((acc, [slug, page]) => {
  acc[page] = slug;
  return acc;
}, {} as Record<string, string>);

const App: React.FC = () => {
  // Initialize state by reading the URL 'page' query parameter
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const pageSlug = params.get('page');
      if (pageSlug && SLUG_TO_PAGE[pageSlug]) {
        return SLUG_TO_PAGE[pageSlug];
      }
    }
    return 'Home';
  });

  const [language, setLanguage] = useState<Language>('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Sync URL when currentPage changes
  useEffect(() => {
    const slug = PAGE_TO_SLUG[currentPage] || 'home';
    const url = new URL(window.location.href);
    
    if (slug === 'home') {
      url.searchParams.delete('page');
    } else {
      url.searchParams.set('page', slug);
    }

    // Only push state if the URL actually changed to prevent redundant history entries
    // Ensure url is converted to string for compatibility
    // Wrap in try-catch to prevent Uncaught SecurityError in restricted environments
    try {
      if (window.location.search !== url.search) {
        window.history.pushState({}, '', url.toString());
      }
    } catch (e) {
      console.warn('Unable to update URL history', e);
    }
  }, [currentPage]);

  // Handle browser Back/Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const pageSlug = params.get('page');
      setCurrentPage(pageSlug && SLUG_TO_PAGE[pageSlug] ? SLUG_TO_PAGE[pageSlug] : 'Home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
        return <WhyPage setCurrentPage={setCurrentPage} />;
      case 'The DNA':
        return <DnaPage setCurrentPage={setCurrentPage} />;
      case 'NEKO 19':
        return <Neko19Page setCurrentPage={setCurrentPage} />;
      case 'Investors':
        return <InvestorPage />;
      case 'Enquire':
        return <ContactPage />;
      case 'Privacy Policy':
        return <PrivacyPolicyPage setCurrentPage={setCurrentPage} />;
      case 'Cookie Policy':
        return <CookiePolicyPage setCurrentPage={setCurrentPage} />;
      case 'Terms and Conditions':
        return <TermsPage setCurrentPage={setCurrentPage} />;
      case 'Disclaimer':
        return <DisclaimerPage setCurrentPage={setCurrentPage} />;
      case 'Supplier Partnerships':
        return <SupplierPartnershipsPage setCurrentPage={setCurrentPage} />;
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
