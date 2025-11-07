import React, { useState } from 'react';
import { generateVoyageItinerary } from '../services/geminiService';
import { SparklesIcon } from './icons/Icons';
import AnimatedSection from './AnimatedSection';

const ContactCard: React.FC<{ title: string; description: string; email: string }> = ({ title, description, email }) => (
    <div className="bg-gray-800/50 p-8 rounded-lg text-center h-full flex flex-col">
        <h3 className="text-2xl font-bold text-cyan-400">{title}</h3>
        <p className="mt-4 text-gray-300 flex-grow">{description}</p>
        <a href={`mailto:${email}`} className="mt-6 inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition-colors">
            Contact Us
        </a>
    </div>
);

const ContactPage: React.FC = () => {
    const [destination, setDestination] = useState('');
    const [itinerary, setItinerary] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!destination.trim()) {
            setError('Please enter a destination.');
            return;
        }
        setError('');
        setIsLoading(true);
        setItinerary('');
        try {
            const result = await generateVoyageItinerary(destination);
            // Basic markdown-to-html conversion for display
            const formattedResult = result
                .replace(/### (.*)/g, '<h3 class="text-xl font-semibold text-cyan-400 mt-4 mb-2">$1</h3>')
                .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-white mt-6 mb-3">$1</h2>')
                .replace(/\* \*(.*?)\* \*/g, '<strong>$1</strong>')
                .replace(/\* (.*?)\n/g, '<li class="ml-5 list-disc">$1</li>')
                .replace(/\n/g, '<br />');

            setItinerary(formattedResult);
        } catch (e) {
            setError('Failed to generate itinerary. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Let's Connect</h1>
                    <p className="mt-6 text-xl text-gray-300">
                        Whether you are a prospective owner, supplier, or investor, we'd love to hear from you.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mt-20 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                    <ContactCard title="Buyers" description="Start the conversation about your future on the water." email="sales@nekoyachts.com" />
                    <ContactCard title="Suppliers" description="Partner with us to build the next generation of catamarans." email="partners@nekoyachts.com" />
                    <ContactCard title="Investors" description="Join us in disrupting the marine industry. Inquire about opportunities." email="invest@nekoyachts.com" />
                </AnimatedSection>

                <AnimatedSection className="mt-24 max-w-4xl mx-auto bg-gray-950/50 p-8 md:p-12 rounded-2xl shadow-2xl">
                    <div className="text-center">
                        <SparklesIcon />
                        <h2 className="text-3xl font-bold text-white mt-4">Dream Your Voyage</h2>
                        <p className="mt-4 text-gray-300">Tell us your dream destination, and our AI-powered planner will craft a sample week-long itinerary for your NEKO 62 adventure.</p>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            placeholder="e.g., The Greek Islands, The Caribbean, or Fiji"
                            className="flex-grow bg-gray-800 border border-gray-700 text-white rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            disabled={isLoading}
                        />
                        <button onClick={handleGenerate} disabled={isLoading} className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-full transition-colors flex items-center justify-center">
                            {isLoading ? 'Generating...' : 'Create Itinerary'}
                        </button>
                    </div>
                    {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
                    
                    {itinerary && !isLoading && (
                        <div className="mt-8 p-6 bg-gray-800 rounded-lg prose prose-invert max-w-none prose-p:text-gray-300">
                           <div dangerouslySetInnerHTML={{ __html: itinerary }} />
                        </div>
                    )}
                </AnimatedSection>

            </div>
        </div>
    );
};

export default ContactPage;