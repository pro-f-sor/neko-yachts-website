
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ArrowRightIcon } from './icons/Icons';
import { Page } from '../types';

interface DnaPageProps {
  setCurrentPage?: (page: Page) => void;
}

const FounderCard: React.FC<{ 
    imgSrc: string; 
    name: string; 
    title: string; 
    body: string; 
    quote: string; 
}> = ({ imgSrc, name, title, body, quote }) => {
    return (
        <div className="bg-grey-950/30 border border-white/5 p-8 rounded-lg flex flex-col h-full">
            <div className="mb-8 overflow-hidden rounded-md shadow-lg">
                <img 
                    src={imgSrc} 
                    alt={`Portrait of ${name}`} 
                    className="w-full h-80 object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1 tracking-wide">{name}</h3>
            <p className="text-[#D5C4A1] text-sm font-medium tracking-widest uppercase mb-6">{title}</p>
            
            <div className="flex-grow">
                 <p className="text-grey-300 font-light leading-relaxed mb-8 whitespace-pre-line">
                    {body}
                 </p>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10">
                <blockquote className="italic text-grey-500 text-lg leading-relaxed">
                    "{quote}"
                </blockquote>
            </div>
        </div>
    );
};

const DnaPage: React.FC<DnaPageProps> = ({ setCurrentPage }) => {
    const handleNavigation = (page: Page) => {
        if (setCurrentPage) {
            setCurrentPage(page);
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="bg-grey-900 text-white selection:bg-[#D5C4A1] selection:text-grey-900">
            
            {/* 1. HERO SECTION */}
            <div className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://coolcatamaran.com/images/dna/waveshero.png" 
                        alt="Dark moody ocean waves" 
                        className="w-full h-full object-cover"
                    />
                    {/* Black overlay for readability */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                
                <AnimatedSection className="relative z-10 container mx-auto px-6">
                    <h1 className="text-sm font-bold tracking-[0.3em] text-[#D5C4A1] uppercase mb-6">
                        The DNA
                    </h1>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl mx-auto leading-tight">
                        Salt Water in the Blood.<br/>
                        The Future in the Hull.
                    </h2>
                    <div className="mt-12 max-w-2xl mx-auto border-t border-white/20 pt-8">
                        <p className="text-lg md:text-xl text-grey-200 font-light leading-relaxed">
                            NEKO was born from a simple belief: The courage of the past deserves the technology of the future. We are brothers, sailors, and fathers. We are creating the catamaran we would trust with our own families.
                        </p>
                    </div>
                </AnimatedSection>
                
                 {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10">
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
                </div>
            </div>

            <div className="py-20 sm:py-32 bg-grey-900">
                <div className="container mx-auto px-6 lg:px-12 space-y-32">
                    
                    {/* 2. THE ORIGIN (Image Left, Text Right) */}
                    <AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                            {/* Left: Image */}
                            <div className="relative h-[500px] md:h-[600px] w-full rounded-lg overflow-hidden shadow-2xl order-1">
                                <img 
                                    src="https://coolcatamaran.com/images/dna/sundancer.png" 
                                    alt="Vintage 100-foot schooner" 
                                    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-grey-900/10 mix-blend-multiply"></div>
                            </div>
                            
                            {/* Right: Text */}
                            <div className="order-2 flex flex-col justify-center">
                                <h3 className="text-[#D5C4A1] text-sm font-bold tracking-widest uppercase mb-4">The Origin</h3>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Guided by Stars.<br/>Grounded in Truth.</h2>
                                <h4 className="text-xl text-white mb-6 font-medium">The NEKO story began decades before the first hull was drawn.</h4>
                                
                                <div className="text-grey-300 font-light text-lg space-y-6 leading-relaxed">
                                    <p>
                                        It started on the deck of a 100-foot schooner. Our mother set out to circumnavigate the globe—not as a passenger, but as a working crew member. She did this despite a terrifying reality: She could not swim.
                                    </p>
                                    <p>
                                        In an era before GPS, she learned to navigate using only a sextant, paper charts, and the night sky. She taught us two fundamental lessons:
                                    </p>
                                    <ol className="list-decimal pl-5 space-y-2 text-white font-medium">
                                        <li>Technology is useful, but competence is vital.</li>
                                        <li>The sea doesn't care about your title—it only respects your preparation.</li>
                                    </ol>
                                    <p>
                                        That level of conviction is inherited. Today, that same respect for the ocean is the keel of every NEKO Catamaran.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* 3. THE FOUNDERS */}
                    <AnimatedSection>
                        <div className="text-center mb-16 max-w-4xl mx-auto">
                             <h3 className="text-[#D5C4A1] text-sm font-bold tracking-widest uppercase mb-4">The Founders</h3>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Convergence of Two Worlds</h2>
                            <p className="text-xl text-grey-300 font-light">
                                NEKO is what happens when the daring of exploration meets the precision of modern engineering.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                            <FounderCard 
                                name="Michael Walker"
                                title="The Architect | Co-Founder & Technical Lead"
                                imgSrc="https://coolcatamaran.com/images/headshots/Mike.png"
                                body={`If Peter is the destination, Michael is the machine. With an MBA and a deep background in digital systems, Michael brings an obsessive level of detail to the NEKO hull. He is not satisfied with 'standard marine practice.'

Having cut his teeth sailing the Caribbean, he bridges the gap between the raw elements and advanced technology. He specialises in 'invisible engineering'—hybrid propulsion and systems integration that grant a sailor silence, safety, and autonomy. He ensures that every NEKO performs as beautifully in the engine room as it does at the helm.`}
                                quote="Innovation isn’t adding more. It’s the discipline to strip away everything but excellence."
                            />

                            <FounderCard 
                                name="Peter Walker"
                                title="The Course Setter | Co-Founder & Strategic Lead"
                                imgSrc="https://coolcatamaran.com/images/headshots/Peter.png"
                                body={`Peter provides the stability behind the vision. A lifelong entrepreneur with a background in high-stakes finance, he built and exited a major Forex technology firm—a career defined by managing risk with zero margin for error.

But his compass was always set on the water. Shaped by the Mediterranean and the inherited memory of his mother’s circumnavigation, he saw a need for a vessel that balanced true sailing capability with modern business precision. Peter ensures that NEKO is built not just as a passion project, but as a robust, enduring enterprise.`}
                                quote="We refused to accept industry compromises. We didn't design this boat to compete; we designed it to correct."
                            />
                        </div>
                    </AnimatedSection>

                    {/* 4. THE PHILOSOPHY (Text Left, Image Right) */}
                    <AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                             {/* Left: Text */}
                             <div className="order-1 flex flex-col justify-center">
                                <h3 className="text-[#D5C4A1] text-sm font-bold tracking-widest uppercase mb-4">The Philosophy</h3>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Aviation Grade.<br/>Ocean Tested.</h2>
                                
                                <div className="text-grey-300 font-light text-lg space-y-6 leading-relaxed mb-10">
                                    <p>
                                        We asked a dangerous question: Why do airplanes have better systems than sailing yachts? In aviation, system failure is not an option. In yachting, it is often accepted as "part of the lifestyle."
                                    </p>
                                    <p>
                                        We decided to tear down that wall. By integrating aviation-grade redundancy, we are engineering a vessel that treats safety as a science.
                                    </p>
                                </div>

                                {/* The Father Filter - Highlighted Box */}
                                <div className="bg-[#D5C4A1]/10 border-l-4 border-[#D5C4A1] p-8 rounded-r-lg">
                                    <h4 className="text-xl font-bold text-white mb-3">The "Father Filter"</h4>
                                    <p className="text-grey-300 leading-relaxed">
                                        This is our ultimate quality control. We design with one rule: If we wouldn't send our own children to sea on it, it doesn't go on the boat. The result is a catamaran with the space of a superyacht, but the intuitive agility to be sailed single-handed by a father, a mother, or a couple.
                                    </p>
                                </div>
                            </div>

                            {/* Right: Image */}
                            <div className="relative h-[500px] md:h-[600px] w-full rounded-lg overflow-hidden shadow-2xl order-2">
                                <img 
                                    src="https://coolcatamaran.com/images/dna/earo-abstract3.png" 
                                    alt="Abstract aviation inspired design" 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* 5. THE METHODOLOGY (Image Left, Text Right) */}
                    <AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                             {/* Left: Image */}
                             <div className="relative h-[500px] md:h-[600px] w-full rounded-lg overflow-hidden shadow-2xl order-1">
                                <img 
                                    src="https://coolcatamaran.com/images/dna/architech1.png" 
                                    alt="Architect working on plans" 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Right: Text */}
                            <div className="order-2 flex flex-col justify-center">
                                <h3 className="text-[#D5C4A1] text-sm font-bold tracking-widest uppercase mb-4">The Methodology</h3>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Designed by Dialogue</h2>
                                
                                <div className="text-grey-300 font-light text-lg space-y-6 leading-relaxed">
                                    <p>
                                        Before we drew a single line, we chose to listen. We didn't just speak to manufacturers; we interviewed the frustrated.
                                    </p>
                                    <ul className="space-y-4 my-6 border-l border-white/20 pl-6">
                                        <li className="flex items-center text-white font-medium">
                                            <span className="w-2 h-2 bg-[#D5C4A1] rounded-full mr-4"></span>
                                            We asked seasoned sailors what broke.
                                        </li>
                                        <li className="flex items-center text-white font-medium">
                                            <span className="w-2 h-2 bg-[#D5C4A1] rounded-full mr-4"></span>
                                            We asked partners what made them feel unsafe.
                                        </li>
                                        <li className="flex items-center text-white font-medium">
                                            <span className="w-2 h-2 bg-[#D5C4A1] rounded-full mr-4"></span>
                                            We asked mechanics what was impossible to fix.
                                        </li>
                                    </ul>
                                    <p>
                                        The NEKO 19 is the answer to those questions. It is a vessel shaped not by ego, but by the collective wisdom of those who know the ocean best.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* 6. CTA / BRIDGE (Full-Width Banner) */}
            <div className="relative py-24 sm:py-32 flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://coolcatamaran.com/images/dna/cat1.png" 
                        alt="Silhouette of NEKO 19 Catamaran" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-grey-950/80"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">WE BUILT THE FOUNDATION.</h2>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#D5C4A1] mb-8 leading-tight">NOW, MEET THE MACHINE.</h2>
                        
                        <p className="text-xl text-grey-300 font-light mb-10 leading-relaxed max-w-3xl mx-auto">
                            Our history is in the past. Our philosophy is in the mind. The NEKO 19 is the proof. See how we translated heritage and safety into the most capable 19-metre catamaran ever conceived.
                        </p>

                        <div>
                            <button 
                                onClick={() => handleNavigation('NEKO 19')}
                                className="inline-flex items-center group px-10 py-5 bg-[#D5C4A1] text-grey-900 font-bold tracking-wider uppercase rounded-sm hover:bg-white transition-all duration-300"
                            >
                                Discover The NEKO 19
                                <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">
                                    <ArrowRightIcon />
                                </span>
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default DnaPage;
