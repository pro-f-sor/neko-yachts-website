import React, { useState } from 'react';
import { generateVoyageItinerary } from '../services/geminiService';
import { SparklesIcon } from './icons/Icons';
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
                .replace(/### (.*)/g, '<h3 class="text-xl font-semibold text-cyan-400 mt-4 mb-2">$1</h3>')
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

    return (
        <div className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Let's Connect</h1>
                    <p className="mt-6 text-xl text-grey-300">
                        Have a question or want to start a conversation? Fill out the form below and we'll be in touch.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mt-20 max-w-3xl mx-auto bg-grey-950/50 p-8 md:p-12 rounded-2xl shadow-2xl">
                    {isFormSubmitted ? (
                        <div className="text-center">
                        <h3 className="text-2xl font-bold text-green-400">Thank You!</h3>
                        <p className="mt-4 text-grey-300">Your message has been sent. We will get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleFormSubmit} noValidate>
                        <h2 className="text-3xl font-bold text-white text-center mb-8">Send us a Message</h2>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-grey-300 mb-2">Full Name</label>
                                <input type="text" name="name" id="name" value={formState.name} onChange={handleFormChange} required className="w-full bg-grey-800 border border-grey-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-grey-300 mb-2">Email Address</label>
                                <input type="email" name="email" id="email" value={formState.email} onChange={handleFormChange} required className="w-full bg-grey-800 border border-grey-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-grey-300 mb-2">Message</label>
                                <textarea name="message" id="message" rows={5} value={formState.message} onChange={handleFormChange} required className="w-full bg-grey-800 border border-grey-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                            </div>
                        </div>
                        {formError && <p className="text-red-400 mt-4 text-center">{formError}</p>}
                        <div className="mt-8 text-center">
                            <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition-colors">
                                Send Message
                            </button>
                        </div>
                        </form>
                    )}
                </AnimatedSection>


                <AnimatedSection className="mt-24 max-w-4xl mx-auto bg-grey-950/50 p-8 md:p-12 rounded-2xl shadow-2xl">
                    <div className="text-center">
                        <SparklesIcon />
                        <h2 className="text-3xl font-bold text-white mt-4">Dream Your Voyage</h2>
                        <p className="mt-4 text-grey-300">Tell us your dream destination, and our AI-powered planner will craft a sample week-long itinerary for your NEKO 19 adventure.</p>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            placeholder="e.g., The Greek Islands, The Caribbean, or Fiji"
                            className="flex-grow bg-grey-800 border border-grey-700 text-white rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            disabled={isLoading}
                        />
                        <button onClick={handleGenerate} disabled={isLoading} className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-full transition-colors flex items-center justify-center">
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