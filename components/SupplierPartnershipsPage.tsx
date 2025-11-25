
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { LightningBoltIcon, MegaphoneIcon, UserGroupIcon, CheckIcon, ArrowRightIcon } from './icons/Icons';

const SupplierPartnershipsPage: React.FC = () => {
  return (
    <div className="bg-white text-grey-900 selection:bg-[#D5C4A1] selection:text-white font-sans">
      
      {/* SECTION 1: HERO (Full Width Background) */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
             <img 
                src="https://coolcatamaran.com/images/Carbon_fibre_2_Landscape.png" 
                alt="Detail of raw carbon fibre weave" 
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-grey-900/75 mix-blend-multiply"></div>
         </div>

         {/* Content */}
         <div className="relative z-10 container mx-auto px-6 lg:px-12">
            <AnimatedSection className="max-w-4xl">
                <div className="h-1 w-20 bg-[#D5C4A1] mb-8"></div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 uppercase leading-none text-white">
                    Engineering<br/><span className="text-[#D5C4A1]">The Exception.</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-light text-grey-200 mb-8 max-w-xl border-l-4 border-[#D5C4A1] pl-6 py-2">
                    We don't just buy components. We co-develop the future of marine performance.
                </h2>
                <p className="text-lg text-grey-300 font-light leading-relaxed max-w-xl">
                    The NEKO 19 is not an assembly of off-the-shelf parts. It is a curated integration of the world's finest marine engineering. We are looking for technical partners ready to push the limits of what a 19-metre vessel can achieve.
                </p>
            </AnimatedSection>
         </div>
      </div>

      {/* SECTION 2: THE OPPORTUNITY (3-Column Grid) */}
      <div className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
              <AnimatedSection className="mb-20">
                  <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-grey-400 mb-4">The Opportunity</h2>
                  <h3 className="text-3xl md:text-5xl font-bold text-grey-900">WHY PARTNER WITH NEKO?</h3>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                  {/* Card 1 */}
                  <AnimatedSection delay={100} className="group">
                      <div className="text-grey-900 mb-6 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                          <LightningBoltIcon />
                      </div>
                      <div className="border-t border-grey-200 pt-6 group-hover:border-[#D5C4A1] transition-colors duration-300">
                        <h4 className="text-xl font-bold mb-4 uppercase text-grey-900">Innovation First</h4>
                        <p className="text-grey-500 font-light leading-relaxed">
                            We actively collaborate to beta-test and co-develop new technologies. Bring us your "impossible" prototypes. If it improves the hull, the helm, or the habitat, we will integrate it.
                        </p>
                      </div>
                  </AnimatedSection>

                  {/* Card 2 */}
                  <AnimatedSection delay={200} className="group">
                      <div className="text-grey-900 mb-6 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                          <MegaphoneIcon />
                      </div>
                      <div className="border-t border-grey-200 pt-6 group-hover:border-[#D5C4A1] transition-colors duration-300">
                        <h4 className="text-xl font-bold mb-4 uppercase text-grey-900">Global Visibility</h4>
                        <p className="text-grey-500 font-light leading-relaxed">
                            We don't hide our suppliers; we celebrate them. A partnership with NEKO places your brand in front of a discerning, high-net-worth audience that values component pedigree.
                        </p>
                      </div>
                  </AnimatedSection>

                  {/* Card 3 */}
                  <AnimatedSection delay={300} className="group">
                       <div className="text-grey-900 mb-6 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                          <UserGroupIcon />
                       </div>
                       <div className="border-t border-grey-200 pt-6 group-hover:border-[#D5C4A1] transition-colors duration-300">
                        <h4 className="text-xl font-bold mb-4 uppercase text-grey-900">Sustainable Scale</h4>
                        <p className="text-grey-500 font-light leading-relaxed">
                            We are building for the next decade, not the next quarter. We offer stable, forecasted volume for partners who can meet our rigorous standards for sustainability and reliability.
                        </p>
                      </div>
                  </AnimatedSection>
              </div>
          </div>
      </div>

      {/* SECTION 3: THE STANDARD (Manifesto Block) */}
      <div className="py-24 bg-[#D5C4A1]/20 border-y border-[#D5C4A1]/30">
          <div className="container mx-auto px-6 lg:px-12">
              <AnimatedSection className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-grey-600 mb-4">The Standard</h2>
                      <h3 className="text-3xl md:text-4xl font-bold text-grey-900 mb-8">OUR EXPECTATIONS</h3>
                      <p className="text-xl text-grey-700 font-light leading-relaxed">
                          We view our suppliers as an extension of our own engineering team. We demand the same rigour from our partners as we do from ourselves.
                      </p>
                  </div>
                  
                  {/* Manifesto Card */}
                  <div className="bg-white p-10 shadow-2xl border-l-4 border-[#D5C4A1]">
                      <ul className="space-y-8">
                          <li className="flex items-start">
                              <span className="mt-1 mr-4 text-[#D5C4A1] flex-shrink-0"><CheckIcon /></span>
                              <div>
                                  <strong className="block text-grey-900 uppercase tracking-wide text-sm font-bold mb-1">Precision</strong>
                                  <span className="text-grey-500 font-light">Zero tolerance for variance in specifications or quality.</span>
                              </div>
                          </li>
                          <li className="flex items-start">
                              <span className="mt-1 mr-4 text-[#D5C4A1] flex-shrink-0"><CheckIcon /></span>
                              <div>
                                  <strong className="block text-grey-900 uppercase tracking-wide text-sm font-bold mb-1">Transparency</strong>
                                  <span className="text-grey-500 font-light">Open communication regarding supply chain and sourcing.</span>
                              </div>
                          </li>
                           <li className="flex items-start">
                              <span className="mt-1 mr-4 text-[#D5C4A1] flex-shrink-0"><CheckIcon /></span>
                              <div>
                                  <strong className="block text-grey-900 uppercase tracking-wide text-sm font-bold mb-1">Agility</strong>
                                  <span className="text-grey-500 font-light">The ability to adapt quickly as we refine the NEKO definition.</span>
                              </div>
                          </li>
                           <li className="flex items-start">
                              <span className="mt-1 mr-4 text-[#D5C4A1] flex-shrink-0"><CheckIcon /></span>
                              <div>
                                  <strong className="block text-grey-900 uppercase tracking-wide text-sm font-bold mb-1">Support</strong>
                                  <span className="text-grey-500 font-light">Global service capability to support our owners, wherever they sail.</span>
                              </div>
                          </li>
                      </ul>
                  </div>
              </AnimatedSection>
          </div>
      </div>

      {/* SECTION 4: CALL TO ACTION */}
      <div className="py-32 bg-[#D5C4A1] text-center">
          <div className="container mx-auto px-6">
              <AnimatedSection className="max-w-4xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-bold text-grey-900 mb-8 uppercase tracking-tight">Join The Supply Chain.</h2>
                  <p className="text-xl text-grey-800 font-light mb-12 leading-relaxed max-w-2xl mx-auto">
                      If you believe your product belongs on the NEKO 19, we invite you to open a dialogue with our procurement team.
                  </p>
                  
                  <div>
                    <a 
                        href="mailto:suppliers@nekoyachts.com?subject=Strategic Partnership Proposal | [Company Name]" 
                        className="inline-flex items-center justify-center px-12 py-5 bg-grey-900 text-white font-bold tracking-[0.1em] uppercase hover:bg-white hover:text-grey-900 transition-all duration-300 shadow-xl"
                    >
                        Initiate A Partnership
                        <span className="ml-3"><ArrowRightIcon /></span>
                    </a>
                  </div>
                  
                  <p className="mt-8 text-sm text-grey-800 font-light">
                      Please include your technical portfolio and relevant certifications.
                  </p>
              </AnimatedSection>
          </div>
      </div>

    </div>
  );
};

export default SupplierPartnershipsPage;
