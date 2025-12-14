
import React from 'react';
import { Page } from '../types';
import { ArrowRightIcon, CheckIcon } from './icons/Icons';
import AnimatedSection from './AnimatedSection';
import SEO from './SEO';

interface Neko19PageProps {
  setCurrentPage: (page: Page) => void;
}

const DossierCard: React.FC<{ 
  number: string;
  title: string; 
  imgSrc: string; 
  body: string;
  label: string;
}> = ({ number, title, imgSrc, body, label }) => (
  <div className="bg-grey-950 border border-grey-800 rounded-none overflow-hidden group hover:border-[#D5C4A1]/50 transition-colors duration-500">
      {/* Image Container (Aspect Video) */}
      <div className="relative aspect-video overflow-hidden">
          <img 
            src={imgSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-0 group-hover:saturate-100" 
          />
          {/* Technical Overlay */}
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 border border-white/10">
              <span className="text-[10px] font-mono text-[#D5C4A1] tracking-widest uppercase">{label}</span>
          </div>
      </div>
      
      {/* Content */}
      <div className="p-8">
          <div className="text-xs font-mono text-grey-500 mb-2">{number}</div>
          <h3 className="text-xl font-bold text-white mb-4 tracking-wide uppercase">{title}</h3>
          <p className="text-grey-400 font-light leading-relaxed text-sm">
            {body}
          </p>
      </div>
  </div>
);

const Neko19Page: React.FC<Neko19PageProps> = ({ setCurrentPage }) => {
  const handleJoinList = () => {
    setCurrentPage('Enquire');
    window.scrollTo(0, 0);
  };

  // SCHEMA.ORG: Product Data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "NEKO 19",
    "brand": {
      "@type": "Brand",
      "name": "NEKO Catamarans"
    },
    "description": "A category-defining 19-metre sailing catamaran combining aviation-grade engineering with value-as-standard. Launching 2027.",
    "image": "https://coolcatamaran.com/images/neko19/mysterycat3.png",
    "releaseDate": "2027-06-01",
    "manufacturer": {
      "@type": "Organization",
      "name": "Cool Catamaran Company Ltd"
    },
    "category": "Luxury Catamaran"
  };

  return (
    <div className="bg-grey-900 text-white selection:bg-[#D5C4A1] selection:text-grey-900 font-sans">
        <SEO 
            title="NEKO 19 | The Correction" 
            description="The NEKO 19 redefines the luxury catamaran market. No options list, just aviation-grade engineering and sustainable luxury as standard." 
            canonical="/?page=neko-19"
            schema={productSchema}
        />
        
        {/* [SECTION 1: HERO] - The Silhouette */}
        <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
             {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://coolcatamaran.com/images/neko19/mysterycat3.png"
                    alt="Silhouette of the NEKO 19 Catamaran in low light"
                    className="w-full h-full object-cover"
                />
                {/* Overlay: 10% Opacity Black */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

             <AnimatedSection className="relative z-10 container mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mb-6 uppercase">
                    The NEKO 19
                </h1>
                <p className="text-[#D5C4A1] text-sm md:text-lg font-medium tracking-[0.3em] uppercase mb-12">
                    A Category of One. Arriving 2027.
                </p>
                
                <div className="max-w-2xl mx-auto border-l-2 border-[#D5C4A1] pl-6 text-left md:text-center md:border-l-0 md:border-t-2 md:pt-8">
                    <p className="text-xl md:text-2xl text-grey-200 font-light leading-relaxed mb-10">
                        The world doesn't need another catamaran. It needs a better one. This is not just a launch. It’s a correction.
                    </p>
                </div>

                <button
                    onClick={handleJoinList}
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#D5C4A1] text-grey-900 font-bold tracking-widest uppercase text-sm hover:bg-white transition-all duration-300 rounded-none"
                >
                    Join The Priority List
                    <span className="ml-3"><ArrowRightIcon /></span>
                </button>
            </AnimatedSection>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10">
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </div>

        {/* [SECTION 2: THE PROMISE] - Spec List */}
        <section className="py-24 sm:py-32 bg-grey-950">
            <div className="container mx-auto px-6 lg:px-12">
                <AnimatedSection className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left: Manifesto */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase leading-tight">
                            The End of the <br/>"Option List"
                        </h2>
                        <h3 className="text-[#D5C4A1] text-xl font-light italic mb-8">Standard is the new Luxury.</h3>
                        <p className="text-lg text-grey-300 font-light leading-relaxed">
                            In an industry addicted to upsells, the NEKO 19 stands alone. We don't charge you extra for the things you actually need to sail. We believe a vessel should be capable of crossing an ocean the moment it leaves the factory.
                        </p>
                    </div>

                    {/* Right: The List */}
                    <div className="bg-grey-900 p-8 md:p-12 border border-white/5 rounded-none">
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <div className="mt-1 flex-shrink-0 text-[#D5C4A1]"><CheckIcon /></div>
                                <div className="ml-4">
                                    <h4 className="text-white font-bold text-lg uppercase tracking-wide">Global Autonomy</h4>
                                    <p className="text-grey-400 font-light text-sm mt-1">Designed to CE Category A (Ocean) standards for unrestricted blue water navigation.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="mt-1 flex-shrink-0 text-[#D5C4A1]"><CheckIcon /></div>
                                <div className="ml-4">
                                    <h4 className="text-white font-bold text-lg uppercase tracking-wide">Energy Independence</h4>
                                    <p className="text-grey-400 font-light text-sm mt-1">3kW Solar Array + 10kW Generator (Integrated).</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="mt-1 flex-shrink-0 text-[#D5C4A1]"><CheckIcon /></div>
                                <div className="ml-4">
                                    <h4 className="text-white font-bold text-lg uppercase tracking-wide">True Liveability</h4>
                                    <p className="text-grey-400 font-light text-sm mt-1">Full-size household refrigeration, Washing Machine & Dryer.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="mt-1 flex-shrink-0 text-[#D5C4A1]"><CheckIcon /></div>
                                <div className="ml-4">
                                    <h4 className="text-white font-bold text-lg uppercase tracking-wide">Aviation Systems</h4>
                                    <p className="text-grey-400 font-light text-sm mt-1">48V Reticulation and Redundant Propulsion.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>
            </div>
        </section>

        {/* [SECTION 3: THE SNEAK PEEK] - Renders */}
        <section className="py-24 sm:py-32 bg-grey-900">
            <div className="container mx-auto px-6 lg:px-12">
                <AnimatedSection className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">Designed for the New Era</h2>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <DossierCard 
                            number="01"
                            title="The Flybridge"
                            imgSrc="https://coolcatamaran.com/images/rend/flybridge.jpg"
                            body="360° Vision. Zero Compromise. A command centre designed for single-handed sailing, transitioning instantly into a social lounge for 8 guests."
                            label="Engineering Concept [ALPHA]"
                        />
                         <DossierCard 
                            number="02"
                            title="The Interior"
                            imgSrc="https://coolcatamaran.com/images/rend/interior.jpg"
                            body="A Loft, Not a Cabin. East-West beds. Ducted climate control. We prioritised silence, space, and light over cabin count."
                            label="Engineering Concept [ALPHA]"
                        />
                         <DossierCard 
                            number="03"
                            title="The Invisible Engineering"
                            imgSrc="https://coolcatamaran.com/images/rend/hull-starter.png"
                            body="From the collision bulkheads to the proprietary hull layup, the true luxury of the NEKO 19 is peace of mind."
                            label="Engineering Concept [ALPHA]"
                        />
                    </div>
                </AnimatedSection>
            </div>
        </section>

        {/* [SECTION 4: THE STRATEGIC TEASE] */}
        <section className="py-32 bg-black text-center">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <p className="text-[#D5C4A1] font-mono text-sm uppercase tracking-widest mb-6">Status Update</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                        "WE ARE SAVING THE BEST FOR LAST."
                    </h2>
                    <p className="text-xl text-grey-400 font-light max-w-3xl mx-auto leading-relaxed mb-16">
                        The specifications you see here are just the baseline. We are currently finalising three proprietary innovations that will redefine sustainable propulsion.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-12 text-center md:text-left border-t border-grey-900 pt-12 inline-flex">
                        <div>
                            <span className="block text-grey-500 text-xs font-bold uppercase tracking-widest mb-2">Projected Launch</span>
                            <span className="text-white text-lg font-light">Mid 2027</span>
                        </div>
                        <div className="hidden md:block w-px bg-grey-900"></div>
                        <div>
                            <span className="block text-grey-500 text-xs font-bold uppercase tracking-widest mb-2">Hull Allocations</span>
                            <span className="text-white text-lg font-light">Opening Soon</span>
                        </div>
                        <div className="hidden md:block w-px bg-grey-900"></div>
                        <div>
                            <span className="block text-grey-500 text-xs font-bold uppercase tracking-widest mb-2">Sea Trials</span>
                            <span className="text-white text-lg font-light">Mediterranean, Early 2027</span>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>

        {/* [SECTION 5: CONVERSION] */}
        <section className="py-24 sm:py-32 bg-grey-900 border-t border-grey-800">
            <div className="container mx-auto px-6 text-center">
                <AnimatedSection className="max-w-4xl mx-auto bg-grey-950 p-12 md:p-20 rounded-none shadow-2xl relative overflow-hidden">
                    {/* Decorative blurred glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D5C4A1]/5 blur-[120px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">Secure Your Place In Line.</h2>
                        <p className="text-lg md:text-xl text-grey-300 font-light mb-10 leading-relaxed">
                            We are limiting the initial production run to ensure absolute perfection for our founding owners. Join the Inner Circle for uncensored updates and priority allocation.
                        </p>
                        
                        <button 
                            onClick={handleJoinList}
                            className="inline-flex items-center justify-center px-12 py-5 bg-[#D5C4A1] text-grey-900 font-bold tracking-widest uppercase text-sm hover:bg-white transition-all duration-300 shadow-xl rounded-none"
                        >
                            Request Access
                        </button>
                        
                        <p className="mt-6 text-grey-600 text-xs font-mono uppercase tracking-widest">
                            Serious enquiries only.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </section>

    </div>
  );
};

export default Neko19Page;
