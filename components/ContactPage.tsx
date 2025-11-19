
import React, { useState } from 'react';
import { generateVoyageItinerary } from '../services/geminiService';
import { MapPinWaveIcon } from './icons/Icons';
import AnimatedSection from './AnimatedSection';

const ContactPage: React.FC = () => {
    // State for AI planner
    const [destination, setDestination] = useState('');
    const [itinerary, setItinerary] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [plannerError, setPlannerError] = useState('');

    // State for contact form
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [formError, setFormError] = useState('');

    // State for newsletter
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);
    const [newsletterError, setNewsletterError] = useState('');

    const handleGenerate = async () => {
        if (!destination.trim()) {
            setPlannerError('Please enter a destination.');
            return;
        }
        setPlannerError('');
        setIsLoading(true);
        setItinerary('');
        try {
            const result = await generateVoyageItinerary(destination);
            const formattedResult = result
                .replace(/### (.*)/g, '<h3 class="text-xl font-semibold text-[#D5C4A1] mt-4 mb-2">$1</h3>')
                .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-white mt-6 mb-3">$1</h2>')
                .replace(/\* \*(.*?)\* \*/g, '<strong>$1</strong>')
                .replace(/\* (.*?)\n/g, '<li class="ml-5 list-disc">$1</li>')
                .replace(/\n/g, '<br />');
            setItinerary(formattedResult);
        } catch (e) {
            setPlannerError('Failed to generate itinerary. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formState.name || !formState.email || !formState.message) {
            setFormError('Please fill in all fields.');
            return;
        }
        console.log('Form submitted:', formState); // In a real app, send this to a backend.
        setFormError('');
        setIsFormSubmitted(true);
        setTimeout(() => {
            setIsFormSubmitted(false);
            setFormState({ name: '', email: '', message: '' });
        }, 5000);
    };

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newsletterEmail || !newsletterEmail.includes('@')) {
            setNewsletterError('Please enter a valid email address.');
            return;
        }
        // In a real app, send this to backend
        console.log('Newsletter signup:', newsletterEmail);
        setIsNewsletterSubmitted(true);
        setNewsletterError('');
        setNewsletterEmail('');
        setTimeout(() => setIsNewsletterSubmitted(false), 5000);
    };

    return (
        <div className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Let's Connect</h1>
                    <p className="mt-6 text-xl text-grey-300">
                        We are currently shaping a new vision of modern catamaran design. While our first model is still in development, our team is available to answer questions, discuss partnerships, or simply connect with those who share our passion for innovative marine experiences.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mt-20 max-w-5xl mx-auto bg-grey-950/50 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="px-8 py-4 md:px-12 md:py-4 bg-[#0E1F2F]/30 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                            <p className="text-lg text-grey-300 mb-6">
                                Prefer to connect directly?
                            </p>
                            <p className="text-lg text-grey-300 mb-2">
                                You can reach us anytime at:
                            </p>
                            <a href="mailto:hello@nekoyachts.com" className="text-xl text-[#D5C4A1] hover:text-white transition-colors font-medium mb-6 block">
                                hello@nekoyachts.com
                            </a>
                            <p className="text-lg text-grey-300">
                                or simply send us a message through the form.
                            </p>
                            <p className="text-sm text-grey-400 mt-8 italic">
                                We typically respond within 2–3 business days.
                            </p>
                        </div>

                        <div className="px-8 py-4 md:px-12 md:py-4">
                            {isFormSubmitted ? (
                                <div className="text-center h-full flex flex-col justify-center items-center min-h-[300px]">
                                    <h3 className="text-2xl font-bold text-green-400">Thank You!</h3>
                                    <p className="mt-4 text-grey-300">Your message has been sent. We will get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleFormSubmit} noValidate>
                                    <div className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-grey-300 mb-2">Full Name</label>
                                            <input type="text" name="name" id="name" value={formState.name} onChange={handleFormChange} required className="w-full bg-grey-800 border border-grey-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D5C4A1]" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-grey-300 mb-2">Email Address</label>
                                            <input type="email" name="email" id="email" value={formState.email} onChange={handleFormChange} required className="w-full bg-grey-800 border border-grey-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D5C4A1]" />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-grey-300 mb-2">Message</label>
                                            <textarea name="message" id="message" rows={3} value={formState.message} onChange={handleFormChange} required className="w-full bg-grey-800 border border-grey-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D5C4A1]"></textarea>
                                        </div>
                                    </div>
                                    {formError && <p className="text-red-400 mt-4 text-center">{formError}</p>}
                                    <div className="mt-8">
                                        <button type="submit" className="w-full bg-[#D5C4A1] hover:bg-[#C8B593] text-grey-900 font-semibold py-3 px-8 rounded-full transition-colors shadow-lg">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Newsletter Section */}
                <AnimatedSection className="mt-20 max-w-5xl mx-auto text-center">
                    <div className="bg-[#0E1F2F]/30 p-8 md:p-12 rounded-2xl border border-white/5">
                        <h2 className="text-3xl font-bold text-white mb-6">Newsletter</h2>
                        <p className="text-base text-grey-300 leading-relaxed mb-8">
                            Want to follow the NEKO 19 journey as we bring our first catamaran to life? Join our mailing list for early updates, design previews, and announcements.
                        </p>
                        
                        {isNewsletterSubmitted ? (
                            <div className="text-green-400 font-semibold text-lg py-2">
                                Thank you! You are on the list.
                            </div>
                        ) : (
                            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    placeholder="Your email address"
                                    required
                                    className="flex-grow bg-grey-800 border border-grey-700 text-white rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-[#D5C4A1] w-full"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#D5C4A1] hover:bg-[#C8B593] text-grey-900 font-semibold py-3 px-8 rounded-full transition-colors shadow-lg whitespace-nowrap"
                                >
                                    Join List
                                </button>
                            </form>
                        )}
                        {newsletterError && <p className="text-red-400 mt-2">{newsletterError}</p>}

                        <p className="text-grey-400 mt-6 italic">
                            Your interest means a lot as we craft something truly special.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-24 max-w-4xl mx-auto bg-grey-950/50 p-8 md:p-12 rounded-2xl border border-[#D5C4A1]/50 shadow-[0_0_15px_rgba(213,196,161,0.5)]">
                    <div className="text-center">
                        <MapPinWaveIcon />
                        <h2 className="text-3xl font-bold text-white mt-4">Dream Your Voyage</h2>
                        <p className="mt-4 text-grey-300">Tell us your dream destination, and our AI-powered planner will craft a sample week-long itinerary for your NEKO 19 adventure.</p>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            placeholder="e.g., The Greek Islands, The Caribbean, or Fiji"
                            className="flex-grow bg-grey-800 border border-grey-700 text-white rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D5C4A1]"
                            disabled={isLoading}
                        />
                        <button onClick={handleGenerate} disabled={isLoading} className="bg-[#D5C4A1] hover:bg-[#C8B593] disabled:bg-[#D5C4A1]/50 disabled:cursor-not-allowed text-grey-900 font-semibold py-3 px-6 rounded-full transition-colors flex items-center justify-center">
                            {isLoading ? 'Generating...' : 'Create Itinerary'}
                        </button>
                    </div>
                    {plannerError && <p className="text-red-400 mt-4 text-center">{plannerError}</p>}
                    
                    {itinerary && !isLoading && (
                        <div className="mt-8 p-6 bg-grey-800 rounded-lg prose prose-invert max-w-none prose-p:text-grey-300">
                           <div dangerouslySetInnerHTML={{ __html: itinerary }} />
                        </div>
                    )}
                </AnimatedSection>

            </div>
        </div>
    );
};

export default ContactPage;
