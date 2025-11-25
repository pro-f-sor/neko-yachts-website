
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Page } from '../types';
import { ArrowRightIcon, DiamondIcon, LightningBoltIcon, LeafIcon } from './icons/Icons';

interface WhyPageProps {
  setCurrentPage?: (page: Page) => void;
}

const Divider = () => (
  <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#D5C4A1] to-transparent mx-auto my-12 opacity-50"></div>
);

const WhyPage: React.FC<WhyPageProps> = ({ setCurrentPage }) => {
  const handleNavigation = (page: Page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="bg-grey-900 text-white selection:bg-[#D5C4A1] selection:text-grey-900">
      
      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center py-24 sm:py-32 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://coolcatamaran.com/images/why/wave1.png" 
            alt="Ocean waves representing respect for nature" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-grey-900/50"></div>
        </div>
        
        <AnimatedSection className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-xs sm:text-sm font-bold tracking-[0.3em] text-[#D5C4A1] uppercase mb-8 animate-fade-in-up">
            The Why
          </h1>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium leading-tight text-white max-w-5xl mx-auto mb-12">
            We didn’t find the yacht we wanted to build.<br />
            <span className="text-grey-400 italic">So we created the philosophy first.</span>
          </h2>
          <div className="max-w-2xl mx-auto border-t border-white/10 pt-10">
            <h3 className="text-xl font-bold tracking-widest uppercase mb-4 text-[#D5C4A1]">Our Raison D'être</h3>
            <p className="text-lg sm:text-xl text-grey-300 font-light leading-relaxed">
              The ocean demands respect. Yet, the industry often offers confusion. Our love of the sea is a design attribute, not just a slogan. We are moving the dial away from 'old-school' thinking to create a vessel that balances modern capability with the timeless rhythm of the tides.
            </p>
          </div>
        </AnimatedSection>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* SECTION 2: THE CONFLICT */}
      <section className="py-24 sm:py-32 bg-grey-950">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Split Screen: Text & List Left / Image Right */}
          <AnimatedSection className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            
            {/* Left Column: Text & List */}
            <div className="flex flex-col justify-center py-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">The Problem with the Status Quo</h2>
              
              <p className="text-lg text-grey-300 font-light leading-relaxed mb-10">
                Visit almost any catamaran builder, and you are confronted with "The Wall of Noise": engineering mumbo-jumbo and never-ending superlatives. In this sector, the 'C' words crop up like mushrooms. But usually, they add up to one thing: Confusion.
              </p>

              {/* The List */}
              <div className="space-y-4 mb-10 pl-6 border-l-2 border-[#D5C4A1]">
                 <div className="text-2xl sm:text-3xl text-grey-600 font-medium line-through decoration-[#D5C4A1] decoration-2 opacity-70">Compromise</div>
                 <div className="text-2xl sm:text-3xl text-grey-600 font-medium line-through decoration-[#D5C4A1] decoration-2 opacity-70">Colossal</div>
                 <div className="text-2xl sm:text-3xl text-grey-600 font-medium line-through decoration-[#D5C4A1] decoration-2 opacity-70">Complexity</div>
                 <div className="text-3xl sm:text-4xl font-bold text-[#D5C4A1] mt-4 tracking-wide">CLARITY</div>
              </div>

              <p className="text-lg text-grey-300 font-light leading-relaxed">
                The contest for complexity only serves to deliver higher costs and more calamity for the buyer's dream. We believe that if you focus too much on what the competition is doing, you stop focusing on what you are doing. So, we stopped looking at them. And started looking at you.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="relative h-full min-h-[400px] md:min-h-full rounded-xl overflow-hidden shadow-2xl group">
                 <img 
                    src="https://coolcatamaran.com/images/why/compass1.png" 
                    alt="Compass and nautical chart representing direction" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-grey-950/40 to-transparent pointer-events-none"></div>
            </div>

          </AnimatedSection>

        </div>
      </section>

      {/* SECTION 3: THE SOLUTION */}
      <section className="py-24 sm:py-32 relative bg-grey-900">
        <div className="container mx-auto px-6 lg:px-12">
            
            {/* Split Screen: Image Left / Text Right (Zig-Zag) */}
            <AnimatedSection className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Left Column: Image */}
                <div className="relative h-full min-h-[500px] rounded-xl overflow-hidden shadow-2xl group order-1">
                    <img 
                        src="https://coolcatamaran.com/images/why/abstract4.png" 
                        alt="Abstract representation of NEKO design philosophy" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-grey-950/40 to-transparent pointer-events-none"></div>
                </div>

                {/* Right Column: Text & Content */}
                <div className="flex flex-col justify-center order-2 py-8">
                    <p className="text-[#D5C4A1] font-bold tracking-widest uppercase mb-4">The Solution</p>
                    <h2 className="text-4xl sm:text-6xl font-bold text-white mb-2">INTRODUCING NEKO</h2>
                    <p className="text-xl sm:text-2xl font-light text-grey-400 italic mb-10">Next-generation Eco Katamaran</p>
                    
                    <p className="text-lg text-grey-300 font-light leading-relaxed mb-10">
                        A NEKO catamaran occupies that rare space where the three pillars of yachting finally meet:
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start group">
                            <div className="flex-shrink-0 mr-4 mt-1 text-[#D5C4A1] group-hover:scale-110 transition-transform duration-300">
                                <div className="transform scale-75 origin-top-left">
                                    <LightningBoltIcon />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D5C4A1] transition-colors">Performance</h3>
                                <p className="text-grey-400 font-light">Capable of crossing oceans, not just bays.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start group">
                            <div className="flex-shrink-0 mr-4 mt-1 text-[#D5C4A1] group-hover:scale-110 transition-transform duration-300">
                                <div className="transform scale-75 origin-top-left">
                                    <DiamondIcon />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D5C4A1] transition-colors">Price</h3>
                                <p className="text-grey-400 font-light">Transparent, fair, and devoid of hidden premiums.</p>
                            </div>
                        </div>

                        <div className="flex items-start group">
                            <div className="flex-shrink-0 mr-4 mt-1 text-[#D5C4A1] group-hover:scale-110 transition-transform duration-300">
                                <div className="transform scale-75 origin-top-left">
                                    <LeafIcon />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D5C4A1] transition-colors">Comfort</h3>
                                <p className="text-grey-400 font-light">A home, not a hotel room.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4: THE PHILOSOPHY */}
      <section className="py-24 sm:py-32 bg-[#D5C4A1] text-grey-950">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-12 opacity-80 border-b border-grey-950/20 inline-block pb-2">Value as Standard</h2>
            
            <blockquote className="text-3xl sm:text-4xl md:text-5xl leading-tight mb-12">
              "The opportunity for creativity begins the moment we don't know what we are doing."
              <footer className="text-base font-bold mt-6 tracking-wide opacity-70 uppercase">— Simon Sinek</footer>
            </blockquote>

            <div className="text-lg sm:text-xl font-light leading-relaxed space-y-6">
                <p>
                    We are tech-savvy, but we are critical. If a feature doesn't solve a real-world pain point, it doesn't make the list. We discovered that many manufacturers view 'value' as an upsell. They sell you a hull, then charge you for the 'luxury' of using it.
                </p>
                <p>
                    We reject this. At NEKO, value is not an add-on; it is the baseline. We strip away the 'optional' disguise to deliver a vessel capable of "sailing away" in its basic form. We keep it simple not because it’s easy, but because we respect your time.
                </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PARALLAX IMAGE PORTAL (Between Section 4 and 5) */}
      <div 
          className="relative w-full min-h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat py-24"
          style={{ backgroundImage: `url('https://coolcatamaran.com/images/why/sunset2.png')` }}
      >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
              <AnimatedSection>
                  <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-xl">
                      Built for the sunset,<br/>
                      <span className="text-[#D5C4A1]">not the stopwatch.</span>
                  </h2>
              </AnimatedSection>
          </div>
      </div>

      {/* SECTION 5: THE LIFESTYLE TEXT */}
      <section className="py-24 sm:py-32 bg-grey-900">
        <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
                <div className="space-y-8 text-lg sm:text-xl text-grey-300 font-light leading-relaxed">
                    <p>
                        We are not racing our boats, and we doubt you are either. While others chase knots, we chase moments.
                    </p>
                    <p>
                        A NEKO is designed to be sailed single-handedly or by a couple, offering intimacy for owners and distinct privacy for up to 6 guests. It provides separate private spaces for tranquillity and reflection. That is a feature you won’t see on a spec sheet, but it is essential for life on the water.
                    </p>
                </div>
            </AnimatedSection>
        </div>
      </section>

      <Divider />

      {/* SECTION 6: CTA / BRIDGE */}
      <section className="py-24 sm:py-32 bg-grey-950">
        <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Column: Text */}
                <div className="flex flex-col justify-center order-1">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">A Vision Authenticated by History</h2>
                    <p className="text-lg sm:text-xl text-grey-300 font-light mb-8">
                        A philosophy is only as strong as the people behind it. We are designing the future, but our roots are anchored in a deep maritime heritage. We aren't just dreamers; we are builders, sailors, and pioneers.
                    </p>
                    <p className="text-lg text-grey-400 mb-10">
                        You understand <em>Why</em> we are doing this. Now, meet the team with the experience to pull it off.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <button 
                            onClick={() => handleNavigation('The DNA')}
                            className="group px-10 py-4 bg-transparent border border-[#D5C4A1] text-[#D5C4A1] font-semibold tracking-widest uppercase hover:bg-[#D5C4A1] hover:text-grey-900 transition-all duration-300"
                        >
                            Discover The DNA
                        </button>
                        
                        <button
                            onClick={() => handleNavigation('Enquire')}
                            className="mt-4 sm:mt-0 py-4 text-white hover:text-[#D5C4A1] transition-colors border-b border-transparent hover:border-[#D5C4A1] font-light"
                        >
                            Join the Waitlist
                        </button>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl group order-2">
                    <img 
                        src="https://coolcatamaran.com/images/why/architech2.png" 
                        alt="Architect drafting plans" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-grey-950/40 to-transparent pointer-events-none"></div>
                </div>
            </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default WhyPage;
