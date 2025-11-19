
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
              A Partnership That Supports the NEKO Vision
            </h2>
            <div className="text-lg text-grey-300 leading-relaxed space-y-6 text-left md:text-center">
                <p>
                    Our suppliers are instrumental in shaping the quality and performance of the NEKO catamaran range. As a growing company, we see our suppliers not simply as vendors but as valued partners who share our commitment to precision, innovation and dependable craftsmanship.
                </p>
                <p>
                    Every material, component and service sourced for NEKO directly influences the experience we provide to our customers. By working closely with trusted suppliers, we are able to deliver catamarans that offer reliability, comfort and thoughtful design, qualities our clients expect and appreciate.
                </p>
                <p>
                    We aim to build long term and mutually rewarding relationships with suppliers who are passionate about raising standards. Together, we enhance the NEKO range, strengthen customer confidence and build a foundation for shared and sustainable success.
                </p>
            </div>
          </AnimatedSection>

           <AnimatedSection className="mt-24">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Why Partner With the NEKO Brand?</h2>
            <p className="text-lg text-grey-300 leading-relaxed text-center max-w-3xl mx-auto mb-12">
                Although NEKO is a growing brand, we offer a positive and collaborative environment for suppliers who want to build long lasting relationships.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <BenefitCard icon={<LightningBoltIcon />} title="Pioneer with Us">
                    Bring your cutting-edge solutions to the forefront. We actively collaborate with our partners to integrate and co-develop innovative technologies, from <strong>sustainable materials</strong> to smart-yacht systems.
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

        <AnimatedSection className="mt-24 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#D5C4A1] mb-6">About NEKO</h2>
            <p className="text-lg text-grey-300 leading-relaxed">
                NEKO catamarans are designed with a clear focus on quality, efficiency and comfort. Each vessel reflects our belief that thoughtful engineering and attention to detail can deliver a remarkable experience on the water. Our ambition is to build dependable, beautifully crafted catamarans that our clients can trust, whether for leisure, charter or extended cruising.
            </p>
        </AnimatedSection>

         <AnimatedSection className="mt-24 text-center">
             <h3 className="text-2xl font-bold text-white">Join Us in Shaping the Future of NEKO</h3>
             <p className="mt-4 max-w-2xl mx-auto text-lg text-grey-300">
                We believe that strong supplier relationships are the foundation of reliable and well crafted catamarans. If you share our values and would like to contribute to the NEKO journey, we look forward to the opportunity to collaborate.
             </p>
             <p className="mt-6 text-lg font-semibold text-grey-300">
                 contact us at: <a href="mailto:suppliers@nekoyachts.com" className="text-[#D5C4A1] hover:underline">suppliers@nekoyachts.com</a>
             </p>
        </AnimatedSection>

        </div>
      </div>
    </div>
  );
};

export default SupplierPartnershipsPage;
