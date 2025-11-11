import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

// A simple pull-quote component for this page
const PullQuote: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`text-center my-12 ${className}`}>
        <p className="text-2xl md:text-3xl italic text-gray-200 font-light leading-relaxed">
            {children}
        </p>
    </div>
);

// Founder card component with hover-to-expand functionality
const FounderCard: React.FC<{ imgSrc: string; name: string; title: string; summary: string; bio: string; }> = ({ imgSrc, name, title, summary, bio }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(prev => !prev);
    
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpand();
        }
    };

    return (
        <div
            className="group bg-gray-950/50 p-8 rounded-lg text-center flex flex-col items-center h-full transition-all duration-300 ease-in-out cursor-pointer"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            onClick={toggleExpand}
            onKeyPress={handleKeyPress}
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-controls={`bio-${name.toLowerCase()}`}
        >
            <img className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4" src={imgSrc} alt={`Portrait of ${name}`} />
            <h4 className="text-2xl font-bold text-white">{name}</h4>
            <p className="text-cyan-400 mb-4">{title}</p>
            <div className="text-gray-400 text-left text-base leading-relaxed flex-grow w-full">
                <p className="italic">{summary}</p>
                <div
                    id={`bio-${name.toLowerCase()}`}
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                >
                    <p>{bio}</p>
                </div>
            </div>
             <div className="mt-4 text-sm text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {isExpanded ? 'Show Less' : 'Show More'}
            </div>
        </div>
    );
};


const Dna2Page: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white">
            {/* 1. Hero Section */}
            <div className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        poster="https://images.pexels.com/photos/163236/luxury-yacht-sailing-sea-sky-163236.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    >
                        <source src="http://coolcatamaran.com/images/video/oceansunset.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                <AnimatedSection className="relative z-10 p-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Do what is right, not what is easy.
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
                        We are a group of creative thinkers building a business to change an industry.
                    </p>
                </AnimatedSection>
            </div>

            <div className="py-20 sm:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    {/* 2. The Vision */}
                    <AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-6">A vision to redefine what’s possible</h2>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    For over two years we have dedicated ourselves to designing a catamaran that redefines what is possible, balancing performance, beauty and comfort without compromise.
                                </p>
                                <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                                    The idea began with two brothers who could not find a vessel that met every expectation, so they set out to create their own. What started as a personal pursuit soon became a shared mission to craft the catamaran they had always dreamed of — and that others too had been waiting for.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="https://coolcatamaran.com/images/architech_detail_4_landscape.png"
                                    alt="Concept sketches of a catamaran"
                                    className="rounded-lg shadow-2xl object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* 3. Heritage and Strength */}
                    <AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                             <div className="flex justify-center md:order-2">
                                <img
                                    src="http://coolcatamaran.com/images/Sundancer-4.png"
                                    alt="Archival photo of a large schooner sailing"
                                    className="rounded-lg shadow-2xl object-cover w-full h-auto"
                                />
                            </div>
                            <div className="md:order-1">
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-6">Heritage meets innovation</h2>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Perhaps the sea was always in their blood. Their mother once circumnavigated the globe on a 100-foot schooner — a quiet reminder that true journeys begin with courage and conviction.
                                </p>
                                <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                                    With backgrounds in business, technology and engineering, the brothers bring precision, innovation and attention to detail to every decision. Their combination of entrepreneurial vision and technical mastery defines the essence of Neko.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* 4. Philosophy */}
                    <AnimatedSection>
                         <PullQuote>
                            Do what is right, not what is easy.
                            <br />
                            To create with intention. To build without compromise.
                        </PullQuote>
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                From the beginning we chose to listen. We spoke with manufacturers, suppliers and sailors — both seasoned and new — gathering insights to understand what truly matters at sea: what works, what endures, what feels right.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* 5. The First Design */}
                    <AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-6">Intelligent design. Effortless performance.</h2>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Our first creation, a 19-metre (62-foot) vessel, is designed for the cruising couple who want to live their dream. It offers the space, refinement and performance of a larger yacht, yet remains effortless to sail single-handed.
                                </p>
                                <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                                    Drawing on expertise from both the marine and aviation worlds, we integrate proven technologies to achieve simplicity, efficiency and reliability — delivering exceptional value without compromise.
                                </p>
                            </div>
                             <div className="flex justify-center">
                                <img
                                    src="https://coolcatamaran.com/images/Closeup_reverse_bow_landscape.png"
                                    alt="Sleek catamaran hull render"
                                    className="rounded-lg shadow-2xl object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </AnimatedSection>
                    
                    {/* 6. Founders Section */}
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-4">The Founders</h2>
                        <p className="text-center text-lg text-gray-400 mb-12 max-w-3xl mx-auto">Two brothers united by vision, innovation and a lifelong connection to the sea.</p>
                        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <FounderCard
                                name="Peter Walker"
                                title="Co-Founder"
                                imgSrc="https://coolcatamaran.com/images/headshots/Peter.png"
                                summary="A lifelong entrepreneur, Peter brings strategic vision and commercial insight to Neko. He combines business leadership with a passion for the sea, inspired by a family legacy of circumnavigation."
                                bio="A lifelong entrepreneur, Peter Walker brings strategic vision and commercial insight to Neko. With a background in finance and technology, including the successful sale of his own forex company, he combines business leadership with a passion for the sea. Inspired by his mother’s circumnavigation aboard a 100-foot racing schooner and his own early sailing in the Mediterranean, Peter now channels that legacy into Neko. Together with his brother Michael, he is focused on building both the company and its first vessel — redefining what modern sailing can be."
                            />
                            <FounderCard
                                name="Michael Walker"
                                title="Co-Founder"
                                imgSrc="https://coolcatamaran.com/images/headshots/Mike.png"
                                summary="Michael leads all technical development, blending deep engineering expertise with a forward-thinking approach. He specialises in hybrid propulsion and advanced onboard technologies, driven by his passion for the sea."
                                bio="Michael Walker leads all technical development at Neko, blending deep engineering expertise with a forward-thinking approach to design. With an MBA and a background in digital and electronic systems, he has led complex projects across global industries and specialises in hybrid propulsion and advanced onboard technologies. Having sailed the Caribbean and inspired by his mother’s ocean-crossing adventures, Michael combines his technical mastery with a genuine passion for the sea. Alongside his brother Peter, he is dedicated to developing Neko’s first catamaran — a vessel built on innovation, precision and purpose."
                            />
                        </div>
                    </AnimatedSection>

                    {/* 7. Closing Section */}
                     <AnimatedSection>
                        <div className="relative text-center py-20 px-4 rounded-lg overflow-hidden">
                             <div className="absolute inset-0 z-0">
                                <img
                                    src="http://coolcatamaran.com/images/aerial%20shot%202.png"
                                    alt="Aerial view of a catamaran on the open ocean"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gray-950/70"></div>
                            </div>
                             <div className="relative z-10 max-w-4xl mx-auto">
                                <PullQuote className="my-0">
                                    True innovation lies not in excess, but in excellence.
                                    <br />
                                    The right way is rarely the easy way — and that principle defines everything we create.
                                </PullQuote>
                             </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default Dna2Page;