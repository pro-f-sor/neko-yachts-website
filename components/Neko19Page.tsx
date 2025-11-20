
import React from 'react';
import { CheckIcon } from './icons/Icons';
import AnimatedSection from './AnimatedSection';

const features = [
  "Flybridge with 360° views for easier docking and social gatherings",
  "Spacious transom and bow lounges",
  "East-West beds for optimal comfort",
  "Fully appointed bathrooms",
  "Integrated Washing machine & dryer",
  "Full size 'home' fridge/freezer in Island style Galley",
  "Rain-fed drinking water tanks with separate black, grey & fuel tanks",
  "3kw Solar power system",
  "Oversize Bow Storage for 'toys' & equipment",
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
    <span className="ml-3 text-grey-300">{children}</span>
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


const Neko19Page: React.FC = () => {
  return (
    <div className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-[#D5C4A1] font-semibold tracking-wider">THE NEKO 19</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">A New Standard in Performance Cruising</h1>
          <p className="mt-6 text-xl text-grey-300">
            Featuring the latest in lightweight construction technology and a raft of 'fast-build' proprietary techniques, the NEKO 19 is sleek, dynamic, and comfortable. It will throw down the gauntlet to all but the quickest catamarans out there.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Inclusive 'Menu' of Standard Features</h2>
          <div className="max-w-4xl mx-auto bg-grey-950/50 p-8 rounded-lg">
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
                <ImageCard src="https://coolcatamaran.com/images/rend/window.jpg" alt="Sleek, modern catamaran hull slicing through the water" title="Advanced Hull Design" />
                <ImageCard src="https://coolcatamaran.com/images/rend/interior.jpg" alt="Bright and modern interior of a luxury yacht saloon" title="Modern Interiors" />
            </div>
             <p className="text-center mt-8 text-grey-400 italic">Conceptual photos. Final design may vary.</p>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default Neko19Page;
