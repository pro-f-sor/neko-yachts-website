
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { LightningBoltIcon, DiamondIcon, UserGroupIcon, MegaphoneIcon } from './icons/Icons';

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="text-center">
        {icon}
        <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
        <p className="mt-4 text-grey-400">{children}</p>
    </div>
);


const SupplierPartnershipsPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://coolcatamaran.com/images/Ocean-wake-jpeg.jpg" 
            alt="The wake of a fast-moving vessel on the ocean" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <AnimatedSection className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Supplier Partnerships
          </h1>
        </AnimatedSection>
      </div>

      {/* Content Section */}
      <div className="py-20 sm:py-28 bg-grey-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#D5C4A1] mb-6">
              A Partnership Built on Excellence
            </h2>
            <div className="text-lg text-grey-300 leading-relaxed space-y-6 text-left md:text-center">
                <p>
                    For our NEKO range of catamarans, we consider our suppliers to be integral to our success. Our Supplier Partnerships help us develop world-class innovative products that delight our customers and deliver award-winning luxury performance catamarans.
                </p>
                <p>
                    We continually work to strengthen relationships with our suppliers to establish and maintain long-term business partnerships that benefit both parties.
                </p>
            </div>
          </AnimatedSection>

           <AnimatedSection className="mt-24">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Why Partner With NEKO Yachts?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <BenefitCard icon={<LightningBoltIcon />} title="Pioneer with Us">
                    Bring your cutting-edge solutions to the forefront. We actively collaborate with our partners to integrate and co-develop innovative technologies, from sustainable materials to smart-yacht systems.
                </BenefitCard>
                <BenefitCard icon={<DiamondIcon />} title="Reach a Discerning Audience">
                    Align your brand with the pinnacle of luxury and performance. NEKO catamarans attract a global clientele that values quality, craftsmanship, and innovation above all else.
                </BenefitCard>
                 <BenefitCard icon={<UserGroupIcon />} title="Build a Lasting Partnership">
                    We believe in growing together. We seek to build stable, long-term relationships based on trust, mutual respect, and shared success, moving beyond transactional interactions.
                </BenefitCard>
                <BenefitCard icon={<MegaphoneIcon />} title="Amplify Your Brand Story">
                    Gain visibility through our marketing channels. We feature key partners in our communications, showcasing the quality and innovation that goes into every NEKO vessel.
                </BenefitCard>
            </div>
        </AnimatedSection>

         <AnimatedSection className="mt-24 text-center">
             <h3 className="text-2xl font-bold text-white">Join Us</h3>
             <p className="mt-4 max-w-2xl mx-auto text-lg text-grey-300">
                If you are a leader in your field and share our commitment to quality and innovation, we invite you to connect with us.
             </p>
             <p className="mt-6 text-lg font-semibold">
                 Contact our partnerships team at <a href="mailto:info@nekoyachts.com" className="text-[#D5C4A1] hover:underline">info@nekoyachts.com</a>
             </p>
        </AnimatedSection>

        </div>
      </div>
    </div>
  );
};

export default SupplierPartnershipsPage;
