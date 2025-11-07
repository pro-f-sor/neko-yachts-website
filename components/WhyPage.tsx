
import React from 'react';
import AnimatedSection from './AnimatedSection';

const QuoteCard: React.FC<{ children: React.ReactNode; author?: string }> = ({ children, author }) => (
    <div className="bg-cyan-800/20 border-l-4 border-cyan-500 p-6 my-8 rounded-r-lg">
        <p className="text-xl italic text-gray-300">{children}</p>
        {author && <p className="text-right mt-4 text-cyan-400 font-semibold">{author}</p>}
    </div>
);

const WhyPage: React.FC = () => {
  return (
    <div className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Our Raison D'être</h1>
          <p className="mt-6 text-xl text-gray-300">
            Our respect for nature and love of the sea is a design attribute, not just a slogan. We're moving the dial away from ‘old-school’ thinking and the costly list of compromises that typically goes with it.
          </p>
        </AnimatedSection>

        <div className="mt-20 max-w-4xl mx-auto space-y-12 text-lg text-gray-300 leading-relaxed">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">The Problem with the Status Quo</h2>
            <p>
              Visit almost any catamaran vendor website and you will likely be confronted with jargon on the landing page - engineering mumbo-jumbo, self-praise about construction techniques, and never-ending superlatives. In this sector of the market, the 'C' words crop up almost as frequently as mushrooms: Custom, compromise, colossal, comfort, cutting (edge).
            </p>
            <p className="mt-4">
              But there is one unequivocal winner... C for confusion. This contest only serves to deliver added complexity, more confusion, higher costs, and sadly more calamity for the buyer's dream.
            </p>
             <QuoteCard>
                The more you focus on what your competition is doing, the less time you're focused on what you are doing.
            </QuoteCard>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Our Philosophy: Value as Standard</h2>
            <p>
              We are not racing our boats, and we doubt you are either. As a modern and tech-savvy company, we can't help but be critical about everything we do. If it doesn't add value or solve a real-world pain-point, it won't make it to our feature list. We've discovered that many manufacturers view 'value' as simply an upsell option.
            </p>
            <p className="mt-4">
              So-called 'optional' features are typically disguised under a cloak of 'personalization', resulting in almost every new boat being incapable of "sailing away" in its basic form. We're keeping it simple—not because it's easy, but because we respect you and your time.
            </p>
            <QuoteCard author="Simon Sinek">
              The opportunity for creativity begins the moment we don't know what we are doing.
            </QuoteCard>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Introducing "NEKO"</h2>
            <p>
              We introduce a new name... "NEKO" (our cue for Next-generation Eco Katamaran). This name exemplifies Value – not as an add-on, but as standard. A NEKO Catamaran occupies that rare space where the three pillars of performance, price, and comfort meet.
            </p>
            <p className="mt-4">
              The result is a vessel that is well-appointed, high-performing, and easy to sail—typically by just a couple, or even single-handedly. It can accommodate 6 guests while providing separate private spaces for tranquility and reflection. That's a feature you won't see on any spec sheet, but it's one we think is essential for life on the water.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default WhyPage;