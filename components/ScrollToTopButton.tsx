
import React from 'react';
import { UpArrowIcon } from './icons/Icons';

interface ScrollToTopButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ isVisible, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 z-50 p-3 bg-[#D5C4A1] text-grey-900 rounded-full shadow-lg hover:bg-[#C8B593] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grey-900 focus:ring-[#D5C4A1] transition-all duration-300 transform ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <UpArrowIcon />
    </button>
  );
};

export default ScrollToTopButton;