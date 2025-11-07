import React from 'react';
import AnimatedSection from './AnimatedSection';

const TeamMemberCard: React.FC<{ imgSrc: string; name: string; title: string; bio: string; }> = ({ imgSrc, name, title, bio }) => (
    <div className="text-center">
        <img className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg" src={imgSrc} alt={`Portrait of ${name}`} />
        <h4 className="mt-4 text-xl font-bold text-white">{name}</h4>
        <p className="text-cyan-400">{title}</p>
        <p className="mt-2 text-gray-400 text-sm">{bio}</p>
    </div>
);


const InvestorPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://coolcatamaran.com/images/under-construction-in-modern-facility.png"
          alt="Sleek catamaran hull under construction in a modern facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-950 bg-opacity-80"></div>
      </div>

      <div className="relative z-10 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-cyan-400 font-semibold tracking-wider">FOR INVESTORS</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Join Us in Shaping the Future of Sailing</h1>
            <p className="mt-6 text-xl text-gray-300">
                NEKO Yachts is poised to disrupt the luxury catamaran market. We combine innovative design, sustainable technology, and a direct-to-consumer model to create unparalleled value for both our customers and investors.
            </p>
            </AnimatedSection>

            <AnimatedSection className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Investment Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg">
                <div className="bg-gray-950/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Massive Market Opportunity</h3>
                <p className="text-gray-300">The global catamaran market is growing rapidly, with increasing demand for larger, more comfortable, and eco-friendly vessels. We are positioned to capture a significant share of this expanding market.</p>
                </div>
                <div className="bg-gray-950/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Disruptive Business Model</h3>
                <p className="text-gray-300">Our lean, tech-driven approach minimizes overhead and traditional dealership markups, allowing us to offer a superior product at a competitive price point, maximizing profitability.</p>
                </div>
                <div className="bg-gray-950/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Proprietary Technology</h3>
                <p className="text-gray-300">Investment in our 'fast-build' techniques and integrated smart-yacht systems creates a strong competitive moat and opportunities for future licensing and technology partnerships.</p>
                </div>
                <div className="bg-gray-950/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Experienced Team</h3>
                <p className="text-gray-300">Our founding team comprises seasoned naval architects, marine engineers, and business leaders with a proven track record of innovation and success in the marine industry.</p>
                </div>
            </div>
            </AnimatedSection>
            
            <AnimatedSection className="mt-24">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Built by a Visionary Team</h2>
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <TeamMemberCard 
                        imgSrc="https://coolcatamaran.com/images/headshots/Peter.png" 
                        name="Peter" 
                        title="CEO" 
                        bio="A lifelong sailor and serial entrepreneur, Peter provides the strategic vision for Neko. His passion for the sea is a family legacy, inherited from his mother who circumnavigated the globe on a 100ft racing schooner. With early sailing experience across the Mediterranean and expertise in scaling disruptive tech companies, Peter is relentlessly focused on creating a superior sailing experience." 
                    />
                    <TeamMemberCard 
                        imgSrc="https://coolcatamaran.com/images/headshots/Mike.png" 
                        name="Michael" 
                        title="CTO" 
                        bio="A marine engineering veteran, Michael oversees all technical development. Steeped in a rich sailing heritage—his mother circumnavigated the globe on a 100ft racing schooner—he combines this practical experience from years sailing the Caribbean with deep technical expertise. Michael has led high-profile projects for renowned shipyards and is a specialist in lightweight composites and hybrid propulsion systems." 
                    />
                    <TeamMemberCard 
                        imgSrc="https://ui-avatars.com/api/?name=William&background=0891b2&color=fff&size=256"
                        name="William" 
                        title="Chief Naval Architect" 
                        bio="An award-winning German architect, William's avant-garde designs push the boundaries of performance and aesthetics. He is the creative force behind the NEKO 62's innovative hull design and spacious layout." 
                    />
                    <TeamMemberCard 
                        imgSrc="https://coolcatamaran.com/images/headshots/adele.png"
                        name="Adele" 
                        title="Interior Designer" 
                        bio="Adele specializes in creating luxurious, functional, and lightweight interiors for the marine environment. Her designs maximize space and integrate sustainable, high-end materials for ultimate comfort." 
                    />
                    <TeamMemberCard 
                        imgSrc="https://coolcatamaran.com/images/headshots/tanielle.png"
                        name="Tanielle" 
                        title="Interior Designer" 
                        bio="Tanielle brings a fresh, modern aesthetic, focusing on sustainable materials and creating a seamless indoor-outdoor flow. She works closely with clients to create bespoke interiors that reflect their personal style." 
                    />
                    <TeamMemberCard 
                        imgSrc="https://coolcatamaran.com/images/headshots/keagan.png"
                        name="Keagan" 
                        title="3D Visualization Expert" 
                        bio="A master of digital modeling, Keagan brings our designs to life with stunningly realistic renders. His work allows clients to virtually experience their yacht before it's built, ensuring every detail is perfect." 
                    />
                </div>
            </AnimatedSection>

            <AnimatedSection className="mt-24 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Request Investor Deck</h2>
                <p className="text-xl text-gray-300 mb-8">For detailed financial projections, market analysis, and to learn more about our funding rounds, please contact our investor relations team.</p>
                <a href="mailto:invest@nekoyachts.com" className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300">
                    Contact Investor Relations
                </a>
            </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default InvestorPage;