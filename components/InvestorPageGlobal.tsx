
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { LightningBoltIcon, DiamondIcon, UserGroupIcon, ArrowRightIcon, LockIcon, CheckIcon, MapPinWaveIcon } from './icons/Icons';

interface InvestorPageGlobalProps {
  onOpenForm: () => void;
}

const InvestorPageGlobal: React.FC<InvestorPageGlobalProps> = ({ onOpenForm }) => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 border-b border-slate-200 overflow-hidden">
        {/* Visual: Abstract upward-trending architectural lines */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none text-slate-900">
             <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Diagonal lines suggesting upward growth */}
                <path d="M-20 100 L80 0" stroke="currentColor" strokeWidth="0.2" />
                <path d="M-10 100 L90 0" stroke="currentColor" strokeWidth="0.2" />
                <path d="M0 100 L100 0" stroke="currentColor" strokeWidth="0.5" />
                <path d="M10 100 L110 0" stroke="currentColor" strokeWidth="0.2" />
                <path d="M20 100 L120 0" stroke="currentColor" strokeWidth="0.2" />
                <path d="M30 100 L130 0" stroke="currentColor" strokeWidth="0.5" />
             </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="max-w-5xl">
                <span className="inline-block py-1 px-3 border border-slate-900 text-xs font-bold uppercase tracking-widest mb-8 bg-white">
                    Investment Thesis
                </span>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 uppercase leading-none text-slate-900 bg-white/50 backdrop-blur-sm inline-block pr-8">
                    The Market<br/>Correction.
                </h1>
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-8">
                        <p className="text-xl md:text-3xl text-slate-600 font-light leading-relaxed border-l-4 border-slate-900 pl-8 bg-white/80 backdrop-blur-sm p-4">
                            The $17B luxury marine sector is operating on an obsolete model. NEKO is the upgrade.
                        </p>
                        <p className="mt-8 text-lg text-slate-500 font-light leading-relaxed pl-8">
                             We are capitalising on the massive shift from monohull to catamaran by applying "Aviation-Grade" efficiency to a fragmented, artisan industry.
                        </p>
                    </div>
                </div>
            </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: THE THESIS (3 Cards) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-16">
                 <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-2">The Opportunity</h2>
                 <h3 className="text-3xl font-bold text-slate-900 uppercase">Structural Arbitrage</h3>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <AnimatedSection delay={100} className="bg-white p-10 border border-slate-200 hover:border-slate-400 transition-colors shadow-sm">
                    <div className="text-slate-900 mb-8">
                        <LightningBoltIcon />
                    </div>
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">The Supply Gap</h3>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">
                        Demand for luxury catamarans exceeds supply by 300%. Legacy yards have 5-year waitlists. We are built for velocity, utilising modular assembly to slash lead times.
                    </p>
                </AnimatedSection>

                {/* Card 2 */}
                <AnimatedSection delay={200} className="bg-white p-10 border border-slate-200 hover:border-slate-400 transition-colors shadow-sm">
                    <div className="text-slate-900 mb-8">
                        <DiamondIcon />
                    </div>
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">The Margin Advantage</h3>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">
                         Our Direct-to-Consumer model captures the 20-30% margin typically lost to dealership networks, allowing for superior product quality at competitive pricing.
                    </p>
                </AnimatedSection>

                {/* Card 3 */}
                <AnimatedSection delay={300} className="bg-white p-10 border border-slate-200 hover:border-slate-400 transition-colors shadow-sm">
                    <div className="text-slate-900 mb-8">
                        <UserGroupIcon />
                    </div>
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">The Tech Moat</h3>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">
                        By standardising "Invisible Engineering" (48V systems, Hybrid propulsion), we reduce warranty claims and increase asset value, distancing ourselves from "cottage industry" competitors.
                    </p>
                </AnimatedSection>
            </div>
        </div>
      </section>

      {/* SECTION 3: THE BUSINESS MODEL (Refined Graphical Layout) */}
      <section className="py-24 border-y border-slate-200 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection>
                <div className="mb-16">
                    <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">The Business Model</h2>
                    <h3 className="text-4xl md:text-5xl font-bold uppercase mb-2 leading-tight text-slate-900">
                        Asset-Backed Growth.
                    </h3>
                </div>
                 
                 {/* The 3 Growth Pillars - Graphical Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    
                    {/* Block 1: Unit Economics */}
                    <div className="bg-slate-50 p-8 border-t-4 border-slate-900 relative group hover:bg-slate-100 transition-colors overflow-hidden">
                        <div className="absolute top-4 right-4 text-slate-200 text-6xl font-bold leading-none select-none group-hover:text-slate-300 transition-colors">01</div>
                        <div className="relative z-10 pt-4">
                            <div className="mb-6 text-slate-900 transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                                <LightningBoltIcon />
                            </div>
                            <div className="h-16 flex items-end mb-4">
                                <span className="text-5xl font-bold text-slate-900 tracking-tighter">-30%</span>
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 uppercase mb-3">Build Time Reduction</h4>
                            <p className="text-slate-600 font-light text-sm leading-relaxed mb-6">
                                Modular "Fast-Build" architecture significantly increases capital velocity compared to traditional hand-laid manufacturing.
                            </p>
                            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-slate-900 h-full w-[70%] group-hover:w-[75%] transition-all duration-700"></div>
                            </div>
                            <p className="text-[10px] uppercase font-bold text-slate-400 mt-2 tracking-wider">Efficiency Index</p>
                        </div>
                    </div>

                    {/* Block 2: D2C */}
                    <div className="bg-slate-50 p-8 border-t-4 border-slate-900 relative group hover:bg-slate-100 transition-colors overflow-hidden">
                        <div className="absolute top-4 right-4 text-slate-200 text-6xl font-bold leading-none select-none group-hover:text-slate-300 transition-colors">02</div>
                        <div className="relative z-10 pt-4">
                            <div className="mb-6 text-slate-900 transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                                <DiamondIcon />
                            </div>
                            <div className="h-16 flex items-end mb-4">
                                <span className="text-5xl font-bold text-slate-900 tracking-tighter">+20%</span>
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 uppercase mb-3">Margin Capture</h4>
                            <p className="text-slate-600 font-light text-sm leading-relaxed mb-6">
                                Bypassing dealership networks allows us to retain significant margin, reinvesting in superior product quality.
                            </p>
                             <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-slate-900 h-full w-[80%] group-hover:w-[85%] transition-all duration-700"></div>
                            </div>
                            <p className="text-[10px] uppercase font-bold text-slate-400 mt-2 tracking-wider">Profit Retention</p>
                        </div>
                    </div>

                    {/* Block 3: Charter Revenue */}
                    <div className="bg-slate-50 p-8 border-t-4 border-slate-900 relative group hover:bg-slate-100 transition-colors overflow-hidden">
                        <div className="absolute top-4 right-4 text-slate-200 text-6xl font-bold leading-none select-none group-hover:text-slate-300 transition-colors">03</div>
                        <div className="relative z-10 pt-4">
                            <div className="mb-6 text-slate-900 transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                                <MapPinWaveIcon />
                            </div>
                            <div className="h-16 flex items-end mb-4">
                                <span className="text-3xl font-bold text-slate-900 tracking-tighter">DUAL-USE</span>
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 uppercase mb-3">Asset Yield</h4>
                            <p className="text-slate-600 font-light text-sm leading-relaxed mb-6">
                                Meeting stringent commercial codes unlocks high-yield charter returns for owners, transforming a liability into an asset.
                            </p>
                             <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-slate-900 h-full w-[90%] group-hover:w-[95%] transition-all duration-700"></div>
                            </div>
                            <p className="text-[10px] uppercase font-bold text-slate-400 mt-2 tracking-wider">Utilisation Rate</p>
                        </div>
                    </div>

                </div>
            </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4: THE FOUNDERS (Risk Management) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-16">
                 <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-2">The Risk Managers</h2>
                 <h3 className="text-3xl font-bold text-slate-900 uppercase">Disciplined Execution</h3>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                <AnimatedSection className="flex flex-col md:flex-row gap-8 items-start">
                    <img 
                        src="https://coolcatamaran.com/images/headshots/Peter.png?v=2" 
                        alt="Peter Walker" 
                        className="w-32 h-32 object-cover grayscale border border-slate-200"
                    />
                    <div>
                        <h4 className="text-2xl font-bold text-slate-900">Peter Walker</h4>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Co-Founder | Strategy</p>
                        <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">
                            Ex-FinTech Founder with a successful exit in the Forex technology sector. Peter brings institutional-grade risk management and financial discipline to marine manufacturing.
                        </p>
                        <blockquote className="text-slate-900 font-medium italic text-sm border-l-2 border-slate-900 pl-4">
                            "We do not build on hope. We build on unit economics."
                        </blockquote>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="flex flex-col md:flex-row gap-8 items-start">
                    <img 
                        src="https://coolcatamaran.com/images/headshots/Mike.png?v=2" 
                        alt="Michael Walker" 
                        className="w-32 h-32 object-cover grayscale border border-slate-200"
                    />
                    <div>
                        <h4 className="text-2xl font-bold text-slate-900">Michael Walker</h4>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Co-Founder | Technical</p>
                        <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">
                            Systems Architect specialising in high-redundancy environments. Michael translates complex aviation standards into marine reality, creating the "Tech Moat" of the NEKO 19.
                        </p>
                        <blockquote className="text-slate-900 font-medium italic text-sm border-l-2 border-slate-900 pl-4">
                            "Innovation is the discipline to strip away everything but excellence."
                        </blockquote>
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </section>

      {/* SECTION 5: ROADMAP */}
      <section className="py-24 bg-white border-t border-slate-200">
         <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection>
                <h3 className="text-xl font-bold text-slate-900 uppercase mb-12">Execution Roadmap</h3>
                
                <div className="relative border-l border-slate-200 ml-4 space-y-12">
                    {/* Item 1 */}
                    <div className="relative pl-12">
                        <div className="absolute -left-1.5 top-2 w-3 h-3 bg-slate-900 rounded-full"></div>
                        <h4 className="text-lg font-bold text-slate-900">Design & Engineering</h4>
                        <span className="text-xs font-bold uppercase tracking-widest text-green-600 bg-green-50 px-2 py-1 rounded-sm mt-1 inline-block">Completed</span>
                        <p className="text-slate-500 font-light text-sm mt-2">Full naval architecture, systems schematic, and interior design finalised.</p>
                    </div>
                    {/* Item 2 */}
                    <div className="relative pl-12">
                        <div className="absolute -left-1.5 top-2 w-3 h-3 bg-slate-400 rounded-full"></div>
                        <h4 className="text-lg font-bold text-slate-900">Factory Tooling</h4>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-2 py-1 rounded-sm mt-1 inline-block">In Progress</span>
                        <p className="text-slate-500 font-light text-sm mt-2">Mould production and supply chain activation.</p>
                    </div>
                    {/* Item 3 */}
                    <div className="relative pl-12">
                         <div className="absolute -left-1.5 top-2 w-3 h-3 bg-slate-200 rounded-full"></div>
                        <h4 className="text-lg font-bold text-slate-900">Hull #1 Launch</h4>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1 inline-block">2027</span>
                        <p className="text-slate-500 font-light text-sm mt-2">Sea trials and global press debut.</p>
                    </div>
                </div>
            </AnimatedSection>
         </div>
      </section>

      {/* SECTION 6: THE ASK */}
      <section className="py-32 bg-slate-900 text-center">
        <div className="container mx-auto px-6">
            <AnimatedSection className="max-w-4xl mx-auto">
                 <div className="inline-flex items-center justify-center p-6 bg-white/5 border border-white/10 rounded-full mb-10 text-white">
                      <LockIcon />
                  </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white uppercase mb-8 tracking-tight">Strategic Capital Only.</h2>
                <p className="text-xl md:text-2xl text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                    We are opening a strategic round to accelerate factory tooling and hull production.
                </p>
                
                <button
                    onClick={onOpenForm}
                    className="group inline-flex items-center justify-center px-12 py-6 bg-white text-slate-900 font-bold tracking-[0.1em] uppercase hover:bg-slate-200 transition-all duration-300"
                >
                    Request Investment Memo
                    <span className="ml-4 group-hover:translate-x-1 transition-transform"><ArrowRightIcon /></span>
                </button>
            </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default InvestorPageGlobal;
