
import React, { useState, useEffect, useCallback } from 'react';
import { Page } from '../types';
import { 
  ArrowRightIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  LightningBoltIcon,
  DiamondIcon,
  MapPinWaveIcon
} from './icons/Icons';
import AnimatedSection from './AnimatedSection';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const innovationGlimpses = [
  {
    imgSrc: 'https://coolcatamaran.com/images/Closeup_reverse_bow_landscape.png',
    alt: 'Dramatic silhouette of a catamaran bow against a sunrise',
    text: 'A silhouette engineered for performance. Sculpted by the wind.',
  },
  {
    imgSrc: 'https://coolcatamaran.com/images/cleat_1_landscape.png',
    alt: 'Extreme close-up of a custom-designed deck fitting on a yacht',
    text: 'Every component, re-imagined. Every line, considered.',
  },
  {
    imgSrc: 'https://coolcatamaran.com/images/modern-abstract-interior.png',
    alt: 'Modern and abstract catamaran interior with flowing lines',
    text: 'Where light and shadow define a new dimension of space.',
  }
];

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === innovationGlimpses.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? innovationGlimpses.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); 
    return () => clearInterval(slideInterval);
  }, [nextSlide]);
  
  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY * 0.5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      console.log('Email submitted for Inner Circle:', email);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="bg-grey-900 text-white selection:bg-[#D5C4A1] selection:text-grey-900 font-sans">
      
      {/* [SECTION 1: HERO] - THE HOOK */}
      <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Video with Parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.pexels.com/photos/163236/luxury-yacht-sailing-sea-sky-163236.jpeg?auto=compress&cs=tinysrgb&w=1920"
          >
            <source
              src="https://coolcatamaran.com/images/video/sidehull.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* Heavy Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <AnimatedSection className="relative z-10 container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none text-white mb-6 uppercase">
            THE CORRECTION.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-grey-200 font-light tracking-wide">
            The world didn't need another catamaran. It needed a better one. Arriving 2027.
          </p>
          <div className="mt-12">
            <button
              onClick={() => handleNavClick('NEKO 19')}
              className="inline-flex items-center justify-center px-10 py-4 bg-[#D5C4A1] hover:bg-white text-grey-900 font-bold tracking-widest uppercase rounded-sm transition-all duration-300 shadow-lg"
            >
              Meet The NEKO 19
              <span className="ml-3"><ArrowRightIcon /></span>
            </button>
          </div>
        </AnimatedSection>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10">
            <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>

      {/* [SECTION 2: THE PROBLEM] - BRIDGE TO 'THE WHY' */}
      <section className="py-24 sm:py-32 bg-grey-950 border-t border-grey-800">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left: Text */}
            <div className="order-1 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-8 uppercase">
                Why Compromise?
              </h2>
              <p className="text-lg text-grey-300 font-light leading-relaxed mb-10">
                For decades, you had to choose: Speed or Comfort. The industry told you that you couldn't have both. We disagreed. We are crafting a vessel that reconciles these opposites.
              </p>
              <div>
                <button
                  onClick={() => handleNavClick('The Why')}
                  className="group inline-flex items-center text-[#D5C4A1] hover:text-white font-bold tracking-widest uppercase transition-colors"
                >
                  Read The Philosophy
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform"><ArrowRightIcon /></span>
                </button>
              </div>
            </div>
            
            {/* Right: Image */}
            <div className="order-2 relative h-[400px] md:h-[500px] w-full rounded-sm overflow-hidden shadow-2xl group">
              <img 
                src="https://coolcatamaran.com/images/Carbon_fibre_2_Landscape.png"
                alt="Close up of carbon fibre weave"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-grey-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* [SECTION 3: THE CREDIBILITY] - BRIDGE TO 'THE DNA' */}
      <section className="py-24 sm:py-32 bg-grey-900">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 uppercase">
              Salt Water In The Blood.
            </h2>
            <p className="text-lg text-grey-300 font-light leading-relaxed">
              A vision is only as strong as the people behind it. We aren't just boat builders. We are lifelong entrepreneurs who applied business precision to build a dream vessel.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <AnimatedSection delay={100} className="text-center group">
              <div className="mb-6 text-[#D5C4A1] transform group-hover:scale-110 transition-transform duration-300">
                <LightningBoltIcon />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">The Architect</h3>
              <p className="text-grey-400 font-light text-sm">Engineering excellence meets digital precision.</p>
            </AnimatedSection>

            <AnimatedSection delay={200} className="text-center group">
              <div className="mb-6 text-[#D5C4A1] transform group-hover:scale-110 transition-transform duration-300">
                <DiamondIcon />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">The Course Setter</h3>
              <p className="text-grey-400 font-light text-sm">Strategic vision born from high-stakes finance.</p>
            </AnimatedSection>

            <AnimatedSection delay={300} className="text-center group">
              <div className="mb-6 text-[#D5C4A1] transform group-hover:scale-110 transition-transform duration-300">
                <MapPinWaveIcon />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">The Origin</h3>
              <p className="text-grey-400 font-light text-sm">Inspired by a 100ft schooner circumnavigation.</p>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center">
            <button
              onClick={() => handleNavClick('The DNA')}
              className="px-10 py-4 border border-grey-700 hover:border-[#D5C4A1] text-white hover:text-[#D5C4A1] font-bold tracking-widest uppercase transition-all duration-300 rounded-sm"
            >
              Discover The DNA
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* [SECTION 4: THE PRODUCT] - BRIDGE TO 'NEKO 19' */}
      <section className="py-24 sm:py-32 bg-grey-950 border-t border-grey-800">
        <div className="container mx-auto px-6 lg:px-12">
           <AnimatedSection className="mb-16 flex flex-col md:flex-row justify-between items-end">
              <div className="max-w-2xl">
                 <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 uppercase">
                  Glimpses of Innovation
                </h2>
                <p className="text-grey-400 font-light">
                  A preview of the philosophy that guides our hands and inspires our design.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                 <button
                  onClick={() => handleNavClick('NEKO 19')}
                  className="group inline-flex items-center text-[#D5C4A1] hover:text-white font-bold tracking-widest uppercase transition-colors"
                >
                  Reveal The Vessel
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform"><ArrowRightIcon /></span>
                </button>
              </div>
           </AnimatedSection>

          <AnimatedSection>
            <div className="relative w-full max-w-6xl mx-auto h-[60vh] max-h-[600px] overflow-hidden rounded-sm shadow-2xl bg-grey-900">
              {/* Slides */}
              {innovationGlimpses.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={item.imgSrc}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full max-w-4xl">
                    <p
                      className={`text-white text-xl md:text-3xl font-light italic leading-relaxed transition-all duration-700 ease-out ${
                        index === currentSlide
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      }`}
                    >
                      "{item.text}"
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-10 p-4 text-white/50 hover:text-white transition-colors"
              >
                <ChevronLeftIcon />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-10 p-4 text-white/50 hover:text-white transition-colors"
              >
                <ChevronRightIcon />
              </button>

              {/* Indicator Lines */}
              <div className="absolute bottom-8 right-8 z-10 flex space-x-2">
                {innovationGlimpses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1 transition-all duration-300 ${
                      index === currentSlide ? 'w-8 bg-[#D5C4A1]' : 'w-4 bg-white/30 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* [SECTION 5: CONVERSION] - BRIDGE TO 'ENQUIRE' */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://coolcatamaran.com/images/in-a-bay-at-dusk.png"
            alt="Catamaran anchored at dusk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-grey-950/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
              Secure Your Hull.
            </h2>
            <p className="text-xl text-grey-300 font-light mb-12 leading-relaxed">
              We are limiting the initial production run to ensure absolute perfection for our founding owners. Join the Inner Circle for uncensored updates and priority allocation.
            </p>

            {/* Form & Button Combo */}
            <div className="space-y-8">
                {/* Newsletter Form */}
                {isSubmitted ? (
                    <div className="p-4 bg-[#D5C4A1]/10 border border-[#D5C4A1] text-[#D5C4A1] font-bold tracking-wider uppercase">
                        Welcome to the Inner Circle.
                    </div>
                ) : (
                    <form onSubmit={handleFormSubmit} className="max-w-md mx-auto relative">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            required
                            className="w-full bg-grey-900/50 border border-grey-600 text-white px-6 py-4 rounded-sm focus:outline-none focus:border-[#D5C4A1] transition-colors font-light placeholder-grey-400 backdrop-blur-sm"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-2 bottom-2 px-4 text-xs font-bold uppercase tracking-widest text-grey-400 hover:text-[#D5C4A1] transition-colors"
                        >
                            Join
                        </button>
                    </form>
                )}
                
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-grey-700"></div>
                    <span className="text-grey-500 text-xs font-mono uppercase tracking-widest">OR</span>
                    <div className="h-px w-12 bg-grey-700"></div>
                </div>

                <button
                    onClick={() => handleNavClick('Enquire')}
                    className="inline-flex items-center justify-center px-12 py-5 bg-[#D5C4A1] hover:bg-white text-grey-900 font-bold tracking-widest uppercase rounded-sm transition-all duration-300 shadow-xl"
                >
                    Start The Dialogue
                    <span className="ml-3"><ArrowRightIcon /></span>
                </button>
            </div>

          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
