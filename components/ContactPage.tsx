
import React, { useState } from 'react';
import { generateVoyageItinerary } from '../services/geminiService';
import { MapPinWaveIcon, SpinnerIcon } from './icons/Icons';
import AnimatedSection from './AnimatedSection';

const ContactPage: React.FC = () => {
    // State for AI planner
    const [destination, setDestination] = useState('');
    const [itinerary, setItinerary] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [plannerError, setPlannerError] = useState('');

    // State for contact form
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });
    const [formTouched, setFormTouched] = useState({ name: false, email: false, message: false });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // State for newsletter
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterError, setNewsletterError] = useState('');
    const [newsletterTouched, setNewsletterTouched] = useState(false);
    const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

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
            
            if (result.startsWith("We're sorry") || result.startsWith("Detailed itinerary unavailable")) {
                 setPlannerError(result);
            } else {
                const formattedResult = result
                    // Header 3
                    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-[#D5C4A1] mt-6 mb-2">$1</h3>')
                    // Header 2
                    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-white/10">$1</h2>')
                    // Bold
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#D5C4A1]">$1</strong>')
                    // Lists (handle * and -)
                    .replace(/^\s*[\*\-]\s+(.*$)/gm, '<li class="ml-5 list-disc text-grey-300 mb-1 pl-2">$1</li>')
                    // Newlines
                    .replace(/\n/g, '<br />');
                    
                setItinerary(formattedResult);
            }
        } catch (e) {
            setPlannerError('Failed to generate itinerary. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    
    // Contact Form Validation logic
    const validateContactField = (name: string, value: string) => {
        if (name === 'name' && !value.trim()) return 'Full Name is required.';
        if (name === 'message' && !value.trim()) return 'Message is required.';
        if (name === 'email') {
             if (!value.trim()) return 'Email Address is required.';
             if (!validateEmail(value)) return 'Please enter a valid email address.';
        }
        return '';
    };

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
        
        if (formTouched[name as keyof typeof formTouched]) {
             setFormErrors(prev => ({ ...prev, [name]: validateContactField(name, value) }));
        }
    };

    const handleContactBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormTouched(prev => ({ ...prev, [name]: true }));
        setFormErrors(prev => ({ ...prev, [name]: validateContactField(name, value) }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const nameError = validateContactField('name', formState.name);
        const emailError = validateContactField('email', formState.email);
        const messageError = validateContactField('message', formState.message);
        
        setFormErrors({ name: nameError, email: emailError, message: messageError });
        setFormTouched({ name: true, email: true, message: true });

        if (!nameError && !emailError && !messageError) {
            console.log('Form submitted:', formState);
            setIsFormSubmitted(true);
            setTimeout(() => {
                setIsFormSubmitted(false);
                setFormState({ name: '', email: '', message: '' });
                setFormTouched({ name: false, email: false, message: false });
                setFormErrors({ name: '', email: '', message: '' });
            }, 5000);
        }
    };

    // Newsletter Validation logic
    const handleNewsletterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setNewsletterEmail(val);
        if (newsletterTouched) {
             if (!val.trim()) setNewsletterError('Email is required.');
             else if (!validateEmail(val)) setNewsletterError('Please enter a valid email address.');
             else setNewsletterError('');
        }
    };

    const handleNewsletterBlur = () => {
        setNewsletterTouched(true);
        if (!newsletterEmail.trim()) setNewsletterError('Email is required.');
        else if (!validateEmail(newsletterEmail)) setNewsletterError('Please enter a valid email address.');
        else setNewsletterError('');
    };

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setNewsletterTouched(true);
        
        let error = '';
        if (!newsletterEmail.trim()) error = 'Email is required.';
        else if (!validateEmail(newsletterEmail)) error = 'Please enter a valid email address.';
        
        setNewsletterError(error);

        if (!error) {
            console.log('Newsletter signup:', newsletterEmail);
            setIsNewsletterSubmitted(true);
            setNewsletterEmail('');
            setNewsletterTouched(false);
            setTimeout(() => setIsNewsletterSubmitted(false), 5000);
        }
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
                                            <input 
                                                type="text" 
                                                name="name" 
                                                id="name" 
                                                value={formState.name} 
                                                onChange={handleContactChange} 
                                                onBlur={handleContactBlur}
                                                required 
                                                className={`w-full bg-grey-800 border ${formErrors.name ? 'border-red-500' : 'border-grey-700'} text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${formErrors.name ? 'focus:ring-red-500' : 'focus:ring-[#D5C4A1]'}`} 
                                            />
                                            {formErrors.name && <p className="mt-1 text-sm text-red-400">{formErrors.name}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-grey-300 mb-2">Email Address</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                id="email" 
                                                value={formState.email} 
                                                onChange={handleContactChange} 
                                                onBlur={handleContactBlur}
                                                required 
                                                className={`w-full bg-grey-800 border ${formErrors.email ? 'border-red-500' : 'border-grey-700'} text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${formErrors.email ? 'focus:ring-red-500' : 'focus:ring-[#D5C4A1]'}`} 
                                            />
                                            {formErrors.email && <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-grey-300 mb-2">Message</label>
                                            <textarea 
                                                name="message" 
                                                id="message" 
                                                rows={3} 
                                                value={formState.message} 
                                                onChange={handleContactChange} 
                                                onBlur={handleContactBlur}
                                                required 
                                                className={`w-full bg-grey-800 border ${formErrors.message ? 'border-red-500' : 'border-grey-700'} text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${formErrors.message ? 'focus:ring-red-500' : 'focus:ring-[#D5C4A1]'}`}
                                            ></textarea>
                                            {formErrors.message && <p className="mt-1 text-sm text-red-400">{formErrors.message}</p>}
                                        </div>
                                    </div>
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
                            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto items-start" noValidate>
                                <div className="flex-grow w-full text-left">
                                    <input
                                        type="email"
                                        value={newsletterEmail}
                                        onChange={handleNewsletterChange}
                                        onBlur={handleNewsletterBlur}
                                        placeholder="Your email address"
                                        required
                                        className={`w-full bg-grey-800 border ${newsletterError ? 'border-red-500' : 'border-grey-700'} text-white rounded-full px-6 py-3 focus:outline-none focus:ring-2 ${newsletterError ? 'focus:ring-red-500' : 'focus:ring-[#D5C4A1]'}`}
                                    />
                                    {newsletterError && <p className="text-sm text-red-400 mt-2 ml-4">{newsletterError}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#D5C4A1] hover:bg-[#C8B593] text-grey-900 font-semibold py-3 px-8 rounded-full transition-colors shadow-lg whitespace-nowrap h-[50px]"
                                >
                                    Join List
                                </button>
                            </form>
                        )}

                        <p className={`text-grey-400 mt-6 italic`}>
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
                         <button 
                            onClick={handleGenerate} 
                            disabled={isLoading} 
                            className="bg-[#D5C4A1] hover:bg-[#C8B593] disabled:bg-[#D5C4A1]/50 disabled:cursor-not-allowed text-grey-900 font-semibold py-3 px-6 rounded-full transition-colors flex items-center justify-center min-w-[180px]"
                        >
                            {isLoading ? (
                                <>
                                    <SpinnerIcon />
                                    <span>Generating...</span>
                                </>
                            ) : (
                                'Create Itinerary'
                            )}
                        </button>
                    </div>
                    {plannerError && <p className="text-red-400 mt-4 text-center bg-red-900/20 p-3 rounded-lg border border-red-500/30">{plannerError}</p>}
                    
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
