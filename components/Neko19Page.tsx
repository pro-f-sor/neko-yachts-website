
import React from 'react';
import { Page } from '../types';
import { CheckIcon, ArrowRightIcon } from './icons/Icons';
import AnimatedSection from './AnimatedSection';

interface Neko19PageProps {
  setCurrentPage: (page: Page) => void;
}

const features = [
  "Flybridge with 360° views for easier docking and social gatherings",
  "Spacious transom and bow lounges",
  "East-West beds for optimal comfort",
  "Fully appointed bathrooms",
  "Integrated washing machine & dryer",
  "Full size 'home' fridge/freezer in Island style Galley",
  "Rain-fed drinking water tanks with separate black, grey & fuel tanks",
  "3kw Solar power system",
  "Oversized Bow Storage for 'toys' & equipment",
  "4 Watertight collision bulkheads – front & aft",
  "100Ah batteries in each hull (48v reticulation for efficiency)",
  "Video Camera links for monitoring",
  "Integrated RIB/Swim platform",
  "Dedicated workshop area",
  "Ducted Air Conditioning",
  "Integrated 10kw generator",
  "Forward-facing Nav/PC station with 2nd helm position",
  "Designed for single-handed sailing performance"
];

const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0">
      <CheckIcon />
    </div>
    <span className="ml-3 text-grey-300 font-light">{children}</span>
  </li>
);

const ImageCard: React.FC<{ src: string; alt: string; title: string }> = ({ src, alt, title }) => (
    <div className="bg-grey-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img src={src} alt={alt} className="w-full h-64 object-cover" />
        <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
    </div>
);


const Neko19Page: React.FC<Neko19PageProps> = ({ setCurrentPage }) => {
  const handleRequestBrochure = () => {
    setCurrentPage('Enquire');
    window.scrollTo(0, 0);
  };

  return (
    <div className="selection:bg-[#D5C4A1] selection:text-grey-900">
        {/* Full-Screen Hero Section */}
        <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
             {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1566576588212-b478fb037996?q=80&w=2670&auto=format&fit=crop"
                    alt="Catamaran sailing on a calm turquoise sea at sunset"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

             <AnimatedSection className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-[#D5C4A1] font-semibold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">THE NEKO 19</p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
                    A New Standard in<br/>Performance Cruising
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-white font-light leading-relaxed drop-shadow-md">
                     Featuring the latest in lightweight construction technology and 'fast-build' proprietary techniques, the NEKO 19 is sleek, dynamic, and comfortable.
                </p>
            </AnimatedSection>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-80 z-10 text-white">
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
            </div>
        </div>

      <div className="py-20 sm:py-28 bg-grey-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
          <AnimatedSection className="mt-10">
             <h2 className="text-3xl font-bold text-center text-white mb-12">Inclusive 'Menu' of Standard Features</h2>
            <div className="max-w-4xl mx-auto bg-grey-950/50 p-8 rounded-lg border border-white/5">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {features.map((feature, index) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-24">
              <h2 className="text-3xl font-bold text-center text-white mb-12">Design Glimpses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ImageCard src="https://coolcatamaran.com/images/rend/flybridge.jpg" alt="Expansive view from a modern yacht flybridge" title="Expansive Flybridge" />
                  <ImageCard src="https://coolcatamaran.com/images/rend/rear.jpg" alt="Comfortable transom lounge area on a catamaran" title="Social Transom Lounge" />
                  <ImageCard src="https://coolcatamaran.com/images/rend/front.jpg" alt="Relaxing seating area on the bow of a yacht" title="Serene Bow Lounge" />
                  <ImageCard src="https://coolcatamaran.com/images/rend/int.jpg" alt="Overhead view showing the spacious layout of a catamaran" title="Layout & Space" />
                  <ImageCard src="https://coolcatamaran.com/images/rend/hull-starter.png" alt="Sleek, modern catamaran hull slicing through the water" title="Advanced Hull Design" />
                  <ImageCard src="https://coolcatamaran.com/images/rend/interior.jpg" alt="Bright and modern interior of a luxury yacht saloon" title="Modern Interiors" />
              </div>
               <p className="text-center mt-8 text-grey-400 italic font-light">Conceptual photos. Final design may vary.</p>
          </AnimatedSection>

          <AnimatedSection className="mt-24 pb-12">
              <div className="relative bg-gradient-to-br from-grey-900 to-[#0E1F2F] border border-[#D5C4A1]/20 rounded-3xl p-8 md:p-16 text-center overflow-hidden shadow-2xl">
                  {/* Background decoration */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#D5C4A1] rounded-full filter blur-3xl"></div>
                      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#D5C4A1] rounded-full filter blur-3xl"></div>
                  </div>

                  <div className="relative z-10 max-w-3xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                          Ready to Start Your Journey?
                      </h2>
                      <p className="text-lg text-grey-300 mb-10 leading-relaxed font-light">
                          The NEKO 19 represents a new era of catamaran design. Get in touch to request our comprehensive brochure, explore technical specifications, and discover customization possibilities in detail.
                      </p>
                      <button
                          onClick={handleRequestBrochure}
                          className="group inline-flex items-center justify-center px-8 py-4 bg-[#D5C4A1] hover:bg-[#C8B593] text-grey-900 font-bold text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#D5C4A1] focus:ring-offset-2 focus:ring-offset-grey-900"
                      >
                          Request a Brochure
                          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                              <ArrowRightIcon />
                          </span>
                      </button>
                  </div>
              </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Neko19Page;