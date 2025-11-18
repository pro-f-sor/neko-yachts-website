
import React, { useState, useEffect, useCallback } from 'react';
import { Page } from '../types';
import { 
  ArrowRightIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  LightningBoltIcon,
  DiamondIcon,
  LeafIcon
} from './icons/Icons';
import AnimatedSection from './AnimatedSection';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const innovationGlimpses = [
  {
    imgSrc: 'https://coolcatamaran.com/images/Closeup_reverse_bow_landscape.png',
    alt: 'Dramatic silhouette of a catamaran bow against a sunrise',
    text: 'A silhouette engineered for performance and sculpted by the wind.',
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
  },
  {
    imgSrc: 'https://coolcatamaran.com/images/architech_detail_4_landscape.png',
    alt: 'A beautiful line drawing from the naval architect on a design table',
    text: 'From the first sketch, a commitment to a new vision.',
  },
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
    const slideInterval = setInterval(nextSlide, 5000); // Auto-play every 5 seconds
    return () => clearInterval(slideInterval);
  }, [nextSlide]);
  
  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY * 0.5); // Move background at half the scroll speed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation, in a real app this would be more robust
    if (email && email.includes('@')) {
      console.log('Email submitted for Inner Circle:', email);
      setIsSubmitted(true);
      // In a real app, you would send this email to your backend/mailing list service
      setTimeout(() => setIsSubmitted(false), 5000); // Reset form after 5 seconds
    }
  };

  return (
    <>
      <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* New animated background, at the very bottom of the z-stack */}
        <div className="absolute inset-0 z-0 animated-gradient-bg"></div>

        {/* Video container with parallax effect */}
        <div
          className="absolute inset-0 z-10"
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
              src="https://coolcatamaran.com/images/veo-video-1762517943829.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* This overlay will sit on top of the video, or on top of the gradient if the video fails */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content container, on top of everything */}
        <AnimatedSection className="relative z-20 p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            WE MAKE DREAMS REAL
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-grey-300">
            Discover the freedom of the open water. A new era of performance cruising is on the horizon.
          </p>
          <div className="mt-10">
            <button
              onClick={() => handleNavClick('NEKO 19')}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#D5C4A1] hover:bg-[#C8B593] text-grey-900 font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              Explore The NEKO 19
              <ArrowRightIcon />
            </button>
          </div>
        </AnimatedSection>
      </div>

      {/* Why Compromise Section */}
      <div className="py-20 sm:py-28 bg-grey-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                We Asked: Why Compromise?
              </h2>
              <p className="mt-6 text-lg text-grey-300 leading-relaxed">
                For too long, sailors have been forced to choose. Speed or comfort? Performance or luxury? We believed a better way was possible. We are crafting a vessel that reconciles these opposites—a catamaran that doesn’t just sail, it performs, without sacrificing comfort.
              </p>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <img 
                src="https://coolcatamaran.com/images/Carbon_fibre_2_Landscape.png"
                alt="Abstract close-up of a carbon fiber weave"
                className="rounded-lg shadow-2xl object-cover w-full h-auto max-w-md"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Glimpses of Innovation Section */}
      <div className="py-20 sm:py-28 animated-gradient-bg-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Details Matter
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-grey-400">
              A preview of the philosophy that guides our hands and inspires our design.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mt-16">
            <div className="relative w-full max-w-5xl mx-auto h-[70vh] max-h-[600px] overflow-hidden rounded-lg shadow-2xl">
              {/* Slides */}
              {innovationGlimpses.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  aria-hidden={index !== currentSlide}
                >
                  <img
                    src={item.imgSrc}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full text-center">
                    <p
                      className={`text-white text-xl italic transition-all duration-700 ease-out ${
                        index === currentSlide
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 z-10 p-3 bg-black/30 rounded-full hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 z-10 p-3 bg-black/30 rounded-full hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRightIcon />
              </button>

              {/* Indicator Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
                {innovationGlimpses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* The Ethos Section */}
      <div className="py-20 sm:py-28 bg-grey-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              The NEKO Difference
            </h2>
          </AnimatedSection>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            <AnimatedSection className="text-center" delay={0}>
              <LightningBoltIcon />
              <h3 className="mt-6 text-2xl font-bold text-white">Unrivalled Performance</h3>
              <p className="mt-4 text-grey-400">
                We are obsessed with speed, stability, and responsiveness. Our design challenges convention to deliver an exhilarating and confident ride in all conditions.
              </p>
            </AnimatedSection>
            <AnimatedSection className="text-center" delay={200}>
              <DiamondIcon />
              <h3 className="mt-6 text-2xl font-bold text-white">Refined Bespoke Luxury</h3>
              <p className="mt-4 text-grey-400">
                This is not a production boat. This is a floating masterpiece, with interiors and finishes that reflect the discerning tastes of its owner.
              </p>
            </AnimatedSection>
            <AnimatedSection className="text-center" delay={400}>
              <LeafIcon />
              <h3 className="mt-6 text-2xl font-bold text-white">Sustainable Eco Future</h3>
              <p className="mt-4 text-grey-400">
                Harnessing the power of the ocean means protecting it. We are integrating cutting-edge, eco-conscious systems and materials.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-16">
            <button
              onClick={() => handleNavClick('NEKO 19')}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#D5C4A1] hover:bg-[#C8B593] text-grey-900 font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              See The NEKO 19 In Detail
              <ArrowRightIcon />
            </button>
          </AnimatedSection>
        </div>
      </div>

      {/* Inner Circle CTA Section */}
      <div className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://coolcatamaran.com/images/in-a-bay-at-dusk.png"
            alt="A luxury catamaran anchored in a serene bay at dusk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-grey-950/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Join the Inner Circle
            </h2>
            <p className="mt-6 text-lg text-grey-300">
              The full reveal is coming. By joining our private list, you will be the first to see the full designs, receive access to the private specification sheet, and be notified of exclusive pre-launch events.
            </p>
             <p className="mt-4 text-lg text-[#D5C4A1] font-semibold">
              Access is limited. Register your interest.
            </p>
            <div className="mt-10">
              {isSubmitted ? (
                <p className="text-xl text-green-400 font-semibold">
                  Thank you! You are on the list.
                </p>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    aria-label="Email address"
                    className="flex-grow bg-grey-800 border border-grey-700 text-white rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D5C4A1] transition-colors w-full"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-3 bg-[#D5C4A1] hover:bg-[#C8B593] text-grey-900 font-semibold rounded-full shadow-md transition-transform transform hover:scale-105 duration-300 whitespace-nowrap"
                  >
                    Register Interest
                    <ArrowRightIcon />
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default HomePage;