import React from 'react';
import AnimatedSection from './AnimatedSection';

const DnaPage: React.FC = () => {
  return (
    <div className="py-20 sm:py-28 bg-gray-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Our DNA</h1>
          <p className="mt-6 text-xl text-gray-300">
            We are a group of creative thinkers building a business to change an industry. Like many disruptive brands, we've spent countless hours arguing, discussing, and agreeing in our pervasive drive to cut costs (not corners).
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-20 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Bad marketing promotes values. Good marketing <span className="text-cyan-400 font-semibold">is</span> values. We've talked to manufacturers, suppliers, and prospective and existing owners, collating technical and anecdotal evidence about what’s important, what works, and what's right.
            </p>
            <p>
              Our first design, an 18m vessel, aims squarely at the cruising couple with the experience and knowledge to be 'living the dream' — and those who are now thinking of upgrading to a boat that 'ticks more boxes' without breaking the bank. (But this is not to say that 'newbies' would not find it great.)
            </p>
             <p>
              We capitalize on 'low key' unbranded technology from the marine/aviation sectors that equals or surpasses traditional 'name brand solutions'. We leverage existing COTS equipment to reduce clutter while lowering costs, without degrading performance.
            </p>
          </div>
          <div className="flex justify-center">
             <div className="bg-yellow-400 text-gray-900 p-8 transform -rotate-2 shadow-2xl max-w-sm">
                <p className="text-3xl font-bold text-center leading-tight">
                    Do what is right, not what is easy.
                </p>
             </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-24 max-w-4xl mx-auto">
            <img 
                src="https://images.unsplash.com/photo-1543204991-f93d39e3834c?q=80&w=1974&auto=format&fit=crop"
                alt="Aerial view of a catamaran sailing on clear blue water"
                className="rounded-lg shadow-2xl object-cover w-full h-80"
            />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default DnaPage;