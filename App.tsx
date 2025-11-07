
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import WhyPage from './components/WhyPage';
import DnaPage from './components/DnaPage';
import Coca18Page from './components/Coca18Page';
import ContactPage from './components/ContactPage';
import InvestorPage from './components/InvestorPage';
import PasswordProtect from './components/PasswordProtect';
import { Page } from './types';
import { NAV_LINKS } from './constants';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
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
      case 'NEKO 62':
        return <Coca18Page />;
      case 'Investors':
        return (
          <PasswordProtect>
            <InvestorPage />
          </PasswordProtect>
        );
      case 'Contact':
        return <ContactPage />;
      case 'Home':
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        navLinks={NAV_LINKS}
        isScrolled={isScrolled}
      />
      <main className={`flex-grow ${currentPage === 'Home' ? '' : 'pt-20'}`}>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} navLinks={NAV_LINKS} />
      <ScrollToTopButton isVisible={showScrollButton} onClick={scrollToTop} />
    </div>
  );
};

export default App;