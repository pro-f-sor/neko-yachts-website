
import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { CheckIcon, ArrowRightIcon } from './icons/Icons';

// A simple pull-quote component for this page
const PullQuote: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`text-center my-12 ${className}`}>
        <p className="text-2xl md:text-3xl italic text-grey-200 font-light leading-relaxed">
            {children}
        </p>
    </div>
);

// Founder card component with hover-to-expand functionality
const FounderCard: React.FC<{ imgSrc: string; name: string; title: string; summary: string; bio: string; }> = ({ imgSrc, name, title, summary, bio }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(prev => !prev);
    
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpand();
        }
    };

    return (
        <div
            className="group bg-grey-950/50 p-8 rounded-lg text-center flex flex-col items-center h-full transition-all duration-300 ease-in-out cursor-pointer"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            onClick={toggleExpand}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-controls={`bio-${name.toLowerCase()}`}
        >
            <img className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4" src={imgSrc} alt={`Portrait of ${name}`} />
            <h4 className="text-2xl font-bold text-white">{name}</h4>
            <p className="text-[#D5C4A1] mb-4 font-medium tracking-wide">{title}</p>
            <div className="text-grey-400 text-left text-base leading-relaxed flex-grow w-full">
                <p className="italic">{summary}</p>
                <div
                    id={`bio-${name.toLowerCase()}`}
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                >
                    <p className="whitespace-pre-line">{bio}</p>
                </div>
            </div>
             <div className="mt-4 text-sm text-[#D5C4A1] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {isExpanded ? 'Show Less' : 'Show More'}
            </div>
        </div>
    );
};

const heritageImages = [
    { src: "https://coolcatamaran.com/images/Sundancer-mum3.png", alt: "100' all steel Sundancer" },
    { src: "https://coolcatamaran.com/images/sextant-map3.png", alt: "sextant and navigational maps" }
];

const DnaPage: React.FC = () => {
    const [currentHeritageImage, setCurrentHeritageImage] = useState(0);

    // State for the "Follow the Build" form
    const [showBuildForm, setShowBuildForm] = useState(false);
    const [buildFormState, setBuildFormState] = useState({ name: '', email: '' });
    const [isBuildFormSubmitted, setIsBuildFormSubmitted] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeritageImage((prev) => (prev + 1) % heritageImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleBuildSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (buildFormState.email && buildFormState.name) {
            // In a real app, submit to backend here
            console.log("Build Update Signup:", buildFormState);
            setIsBuildFormSubmitted(true);
            setTimeout(() => {
                setShowBuildForm(false);
                setIsBuildFormSubmitted(false);
                setBuildFormState({ name: '', email: '' });
            }, 5000);
        }
    };

    return (
        <div className="bg-grey-900 text-white">
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
                        <source src="https://coolcatamaran.com/images/video/oceansunset_modified.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                <AnimatedSection className="relative z-10 p-4 flex flex-col items-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-5xl">
                        Salt Water in the Blood.<br/>The Future in the Hull.
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-grey-300 font-light leading-relaxed">
                        NEKO was born from a simple belief: That the courage of the past deserves the technology of the future. We are brothers, sailors, and fathers, creating the catamaran we would trust with our own families.
                    </p>
                </AnimatedSection>

            </div>

            <div className="py-20 sm:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    
                    {/* 2. Heritage (Side by Side) */}
                    <AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative w-full h-[300px] md:h-[400px] rounded-lg shadow-2xl overflow-hidden order-2 md:order-1">
                                {heritageImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img.src}
                                        alt={img.alt}
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                                            index === currentHeritageImage ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    />
                                ))}
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#D5C4A1] mb-6">Guided by Stars. Grounded in Truth.</h2>
                                <p className="text-lg text-grey-300 leading-relaxed mb-4">
                                    The Neko story begins decades before the first hull was drawn, on the deck of a 100-foot schooner.
                                </p>
                                <p className="text-lg text-grey-300 leading-relaxed mb-4">
                                    The founding brothers' mother set out to circumnavigate the globe, not as a passenger, but as a working part of a small team. She served alongside a captain, and while the crew rotated with every new ocean crossed, she remained for the full journey. She did this despite a terrifying reality; she could not swim.
                                </p>
                                <p className="text-lg text-grey-300 leading-relaxed mb-4">
                                    In an era before GPS, she learned to navigate using only a sextant, paper charts, and the night sky. She taught us that technology is useful, but competence is vital. That the sea doesn't care about your title—it only respects your preparation.
                                </p>
                                <p className="text-lg text-grey-300 leading-relaxed">
                                    That level of conviction doesn't fade; it is inherited. Today, that same respect for the ocean is the keel of every Neko Catamaran.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* 3. Founders Section */}
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-2">The Founders</h2>
                        <p className="text-center text-xl text-[#D5C4A1] font-bold mb-4">Two Brothers. One Vision.</p>
                        <p className="text-center text-lg text-grey-300 mb-12 max-w-3xl mx-auto">
                            Neko is the convergence of two distinct worlds: the daring of exploration and the precision of modern engineering.
                        </p>
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                             <FounderCard
                                name="Michael Walker"
                                title="The Architect | Co-Founder & Technical Lead"
                                imgSrc="https://coolcatamaran.com/images/headshots/Mike.png"
                                summary="If Peter is the destination, Michael is the machine. With an MBA and a deep background in digital and electronic systems, Michael brings an obsessive level of detail to the Neko hull. He is not satisfied with 'standard marine practice.'"
                                bio={`Having cut his teeth sailing the Caribbean and leading complex global projects, he creates the bridge between the elements and the technology. He specializes in hybrid propulsion and advanced systems integration—focusing on the 'invisible engineering' that grants a sailor silence, safety, and autonomy. He ensures that every Neko catamaran performs as beautifully in the engine room as it does at the helm.

“Innovation isn’t adding more. It’s the discipline to make the right things disappear until only excellence remains.”`}
                            />
                            <FounderCard
                                name="Peter Walker"
                                title="The Course Setter | Co-Founder & Strategic Lead"
                                imgSrc="https://coolcatamaran.com/images/headshots/Peter.png"
                                summary="Peter provides the stability behind the vision. A lifelong entrepreneur with a background in high-stakes finance, Peter successfully built and exited a major Forex technology firm—a career defined by managing risk and executing with precision."
                                bio={`But his compass was always set on the water. Shaped by early years sailing the Mediterranean and the inherited memory of his mother’s global circumnavigation, he saw a gap in the market for a vessel that balanced true sailing capability with modern business management. Peter ensures that Neko is built not just as a passion project, but as a robust, enduring enterprise.

“Every significant innovation begins the same way, with dissatisfaction. We simply refused to accept the limits others considered normal.”`}
                            />
                        </div>
                    </AnimatedSection>

                    {/* 4. The Vision */}
                    <AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#D5C4A1] mb-6">Aviation Grade. Ocean Tested.</h2>
                                <p className="text-lg text-grey-300 leading-relaxed mb-4">
                                    We asked a dangerous question: Why do airplanes have better systems than sailing yachts?
                                </p>
                                <p className="text-lg text-grey-300 leading-relaxed mb-4">
                                    We decided to tear down the wall between the two worlds. By integrating aviation-grade redundancy and hybrid efficiency into the Neko 19, we aren’t just making a boat. We are engineering a vessel that treats safety as a science and speed as a byproduct of perfection.
                                </p>
                                <p className="text-lg text-grey-300 leading-relaxed">
                                    We design with the "Father Filter": if we wouldn't send our own children to sea on it, it doesn't go on the boat. The result is a catamaran with the space of a superyacht, but the agility to be sailed single-handed.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                {/* Mobile (< md) and Desktop (>= lg) Image */}
                                <img
                                    src="https://coolcatamaran.com/images/desk.png"
                                    alt="Technical design desk with engineering plans"
                                    className="rounded-lg shadow-2xl object-cover w-full h-auto md:hidden lg:block"
                                />
                                {/* Tablet (>= md and < lg) Image */}
                                <img
                                    src="https://coolcatamaran.com/images/deskportrait.png"
                                    alt="Technical design desk with engineering plans"
                                    className="rounded-lg shadow-2xl object-cover w-full h-auto hidden md:block lg:hidden"
                                />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* 5. Designed by Dialogue (Replaces Philosophy) */}
            <div className="bg-grey-950 py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight">
                            Designed by Dialogue.
                        </h2>
                        <div className="space-y-8 text-lg md:text-xl text-grey-300 font-light leading-relaxed">
                            <p>
                                "Before we drew a single line, we chose to listen. We didn't just speak to manufacturers; we interviewed the frustrated. We asked seasoned sailors what broke. We asked partners what made them feel unsafe. We asked mechanics what was impossible to fix.
                            </p>
                            <p>
                                The Neko 19 is the answer to those questions. It is a vessel shaped not by ego, but by the collective wisdom of those who know the ocean best."
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
            
            {/* 6. The Legend Arrives 2027 (Parallax Strip) */}
            <div 
                className="relative w-full py-32 my-0 bg-fixed bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url('https://coolcatamaran.com/images/hullrender.jpg')` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-grey-950/80"></div>
                
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                            The Legend Arrives 2027.
                        </h2>
                        <p className="max-w-3xl mx-auto text-xl text-grey-200 leading-relaxed mb-10">
                            We are currently in the final stages of design. Every curve is being calculated, every material stress-tested. We are building a machine for the pure joy of sailing.
                        </p>
                        
                        {!showBuildForm && !isBuildFormSubmitted && (
                            <button 
                                onClick={() => setShowBuildForm(true)}
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#D5C4A1] hover:bg-[#C8B593] text-grey-900 font-bold text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                Follow the Build
                                <span className="ml-2"><ArrowRightIcon /></span>
                            </button>
                        )}

                        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${showBuildForm || isBuildFormSubmitted ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            {isBuildFormSubmitted ? (
                                <div className="flex flex-col items-center justify-center p-6 bg-[#0E1F2F]/60 backdrop-blur-sm rounded-xl max-w-md mx-auto border border-[#D5C4A1]/30">
                                    <div className="bg-green-500/20 p-3 rounded-full mb-4">
                                        <CheckIcon />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Welcome Aboard</h3>
                                    <p className="text-grey-300 mt-2">You've been added to the exclusive build list.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleBuildSubmit} className="max-w-lg mx-auto bg-[#0E1F2F]/80 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-2xl">
                                    <h3 className="text-xl font-semibold text-white mb-6">Join the Inner Circle</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <input 
                                                type="text" 
                                                placeholder="Your Name"
                                                required
                                                value={buildFormState.name}
                                                onChange={(e) => setBuildFormState(prev => ({...prev, name: e.target.value}))}
                                                className="w-full bg-grey-800/80 border border-grey-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D5C4A1]" 
                                            />
                                        </div>
                                        <div>
                                            <input 
                                                type="email" 
                                                placeholder="Your Email Address"
                                                required
                                                value={buildFormState.email}
                                                onChange={(e) => setBuildFormState(prev => ({...prev, email: e.target.value}))}
                                                className="w-full bg-grey-800/80 border border-grey-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D5C4A1]" 
                                            />
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="w-full bg-[#D5C4A1] hover:bg-[#C8B593] text-grey-900 font-bold py-3 rounded-lg transition-colors shadow-md"
                                        >
                                            Keep Me Updated
                                        </button>
                                    </div>
                                    <button 
                                        type="button"
                                        onClick={() => setShowBuildForm(false)}
                                        className="mt-4 text-sm text-grey-400 hover:text-white underline"
                                    >
                                        Cancel
                                    </button>
                                </form>
                            )}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default DnaPage;
