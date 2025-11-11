import React from 'react';
import AnimatedSection from './AnimatedSection';

const QuoteBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-gray-950/50 border-l-4 border-cyan-500 p-6 rounded-r-lg">
        <p className="text-2xl italic text-gray-200 font-semibold">{children}</p>
    </div>
);

const DnaPage: React.FC = () => {
  return (
    <div className="py-20 sm:py-28 bg-gray-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Our DNA</h1>
        </AnimatedSection>

        <div className="mt-20 max-w-4xl mx-auto space-y-16 text-lg text-gray-300 leading-relaxed">
            <AnimatedSection>
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">A Vision to Redefine What’s Possible</h2>
                <p>
                    We are a group of creative thinkers building a business to change an industry.
                </p>
                <p className="mt-4">
                    For over two years we have been designing a catamaran that balances performance, beauty and comfort without compromise.
                </p>
            </AnimatedSection>
            
            <AnimatedSection>
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">From Idea to Vision</h2>
                <p>
                    The journey began with two brothers who could not find a vessel that met every expectation, so they set out to create their own.
                </p>
                <p className="mt-4">
                    What started as a personal pursuit soon became a shared mission to craft the catamaran they had always imagined — and that others had long been waiting for.
                </p>
            </AnimatedSection>

            <AnimatedSection>
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">Heritage and Strength</h2>
                <p>
                    Perhaps the sea was always in their blood.
                </p>
                <p className="mt-4">
                    Their mother once circumnavigated the globe on a 100-foot schooner, a quiet reminder that true journeys begin with courage and conviction.
                </p>
                <p className="mt-4">
                    Grounded in business, technology and engineering, the brothers bring precision, innovation and attention to detail to every decision.
                </p>
            </AnimatedSection>

            <AnimatedSection>
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">Our Philosophy</h2>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mt-6">
                    <div className="md:flex-1">
                        <p>
                            From the outset we chose to listen. Conversations with manufacturers, suppliers and sailors helped us understand what truly matters at sea — what works, what endures, what feels right.
                        </p>
                    </div>
                    <div className="w-full md:w-2/5">
                        <QuoteBlock>Do what is right, not what is easy.</QuoteBlock>
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection>
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">The First Design</h2>
                <p>
                    Our first creation, a 19-metre (62-foot) vessel, is designed for the cruising couple seeking to live their dream.
                </p>
                <p className="mt-4">
                    It offers the space, refinement and performance of a larger yacht, yet can be sailed single-handed with ease.
                </p>
            </AnimatedSection>
            
            <AnimatedSection>
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">Intelligent Design</h2>
                 <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mt-6">
                    <div className="md:flex-1">
                        <p>
                            We draw on expertise from both the marine and aviation worlds, integrating proven commercial technologies to achieve simplicity, efficiency and reliability.
                        </p>
                        <p className="mt-4">
                            By reducing complexity and enhancing usability, we deliver exceptional value without compromise.
                        </p>
                    </div>
                    <div className="w-full md:w-2/5">
                        <QuoteBlock>To create with intention. To build without compromise.</QuoteBlock>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">A Lasting Belief</h2>
                <p>
                    True innovation lies not in excess, but in excellence.
                </p>
                <p className="mt-4">
                    The right way is rarely the easy way — and that principle defines everything we create.
                </p>
            </AnimatedSection>
        </div>

        <AnimatedSection className="mt-24 max-w-4xl mx-auto">
            <img 
                src="http://coolcatamaran.com/images/aerial%20shot%202.png"
                alt="Aerial view of a catamaran sailing on clear blue water"
                className="rounded-lg shadow-2xl object-cover w-full h-80"
            />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default DnaPage;