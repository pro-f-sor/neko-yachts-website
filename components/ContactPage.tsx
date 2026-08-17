
import React, { useState } from 'react';
import { generateVoyageItinerary } from '../services/geminiService';
import { SpinnerIcon, ArrowRightIcon, CheckIcon } from './icons/Icons';
import AnimatedSection from './AnimatedSection';

const ContactPage: React.FC = () => {
    // State for AI planner
    const [destination, setDestination] = useState('');
    const [itinerary, setItinerary] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [plannerError, setPlannerError] = useState('');

    // State for Save Itinerary Form (Lead Magnet)
    const [saveForm, setSaveForm] = useState({ name: '', email: '', isOwner: 'no', currentVessel: '' });
    const [isSaveSubmitted, setIsSaveSubmitted] = useState(false);

    // State for contact form
    const [formState, setFormState] = useState({ name: '', email: '', interest: '', message: '' });
    const [formErrors, setFormErrors] = useState({ name: '', email: '', interest: '', message: '' });
    const [formTouched, setFormTouched] = useState({ name: false, email: false, interest: false, message: false });
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
        setIsSaveSubmitted(false); // Reset save state on new generation
        try {
            const result = await generateVoyageItinerary(destination);
            
            // Check for specific error prefixes returned by the service
            if (result.startsWith("We're sorry") || result.startsWith("Detailed itinerary unavailable") || result.startsWith("Error:")) {
                 setPlannerError(result);
            } else {
                const formattedResult = result
                    // Header 3
                    .replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold text-[#D5C4A1] mt-6 mb-2 tracking-wide uppercase">$1</h3>')
                    // Header 2
                    .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold text-white mt-8 mb-4 pb-2 border-b border-white/10">$1</h2>')
                    // Bold
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#D5C4A1] font-medium">$1</strong>')
                    // Lists (handle * and -)
                    .replace(/^\s*[\*\-]\s+(.*$)/gm, '<li class="ml-5 list-disc text-grey-300 mb-1 pl-2 font-light">$1</li>')
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

    const handleSaveItinerary = (e: React.FormEvent) => {
        e.preventDefault();
        if (saveForm.name && validateEmail(saveForm.email)) {
            console.log('Itinerary Lead Capture:', {
                destination,
                ...saveForm,
                itinerarySummary: itinerary.substring(0, 100) + '...'
            });
            setIsSaveSubmitted(true);
        }
    };
    
    // Contact Form Validation logic
    const validateContactField = (name: string, value: string) => {
        if (name === 'name' && !value.trim()) return 'Full Name is required.';
        if (name === 'message' && !value.trim()) return 'Message is required.';
        if (name === 'interest' && !value.trim()) return 'Please select an interest.';
        if (name === 'email') {
             if (!value.trim()) return 'Email Address is required.';
             if (!validateEmail(value)) return 'Please enter a valid email address.';
        }
        return '';
    };

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
        
        if (formTouched[name as keyof typeof formTouched]) {
             setFormErrors(prev => ({ ...prev, [name]: validateContactField(name, value) }));
        }
    };

    const handleContactBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormTouched(prev => ({ ...prev, [name]: true }));
        setFormErrors(prev => ({ ...prev, [name]: validateContactField(name, value) }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const nameError = validateContactField('name', formState.name);
        const emailError = validateContactField('email', formState.email);
        const interestError = validateContactField('interest', formState.interest);
        const messageError = validateContactField('message', formState.message);
        
        setFormErrors({ name: nameError, email: emailError, interest: interestError, message: messageError });
        setFormTouched({ name: true, email: true, interest: true, message: true });

        if (!nameError && !emailError && !interestError && !messageError) {
            console.log('Form submitted:', formState);
            setIsFormSubmitted(true);
            setTimeout(() => {
                setIsFormSubmitted(false);
                setFormState({ name: '', email: '', interest: '', message: '' });
                setFormTouched({ name: false, email: false, interest: false, message: false });
                setFormErrors({ name: '', email: '', interest: '', message: '' });
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

    const inputClasses = "w-full bg-transparent border-b border-grey-700 text-white px-0 py-3 focus:outline-none focus:border-[#D5C4A1] transition-colors font-light placeholder-grey-600 rounded-none";
    const errorClasses = "border-red-500 focus:border-red-500";

    return (
        <div className="bg-grey-900 text-white selection:bg-[#D5C4A1] selection:text-grey-900">
            
            {/* SECTION 1: HERO */}
            <div className="relative h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/images/contact/calmsea.png" 
                        alt="Calm sea horizon" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                
                <AnimatedSection className="relative z-10 container mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
                        BEGIN THE DIALOGUE
                    </h1>
                    <div className="max-w-3xl mx-auto border-t border-white/20 pt-8">
                        <p className="text-lg md:text-xl text-grey-200 font-light leading-relaxed">
                            The NEKO 19 is currently in the engineering phase. We are looking for future owners and partners who share our passion for "Aviation Grade" safety and sustainable luxury.
                        </p>
                    </div>
                </AnimatedSection>
                
                 {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10">
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
                </div>
            </div>

            {/* SECTION 2: CONTACT FORM & DETAILS */}
            <div className="py-24 sm:py-32 bg-grey-900">
                <div className="container mx-auto px-6 lg:px-12">
                    <AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                            
                            {/* Left Column: Info */}
                            <div>
                                <h3 className="text-[#D5C4A1] text-sm font-bold tracking-widest uppercase mb-4">Direct Access</h3>
                                <div className="space-y-8 text-lg text-grey-300 font-light leading-relaxed">
                                    <p>
                                        While our first hull is in development (Arriving 2027), our team is available to discuss specifications, investment opportunities, and the NEKO philosophy.
                                    </p>
                                    
                                    <div className="pt-4">
                                        <p className="text-white font-medium mb-1">Email</p>
                                        <a href="mailto:hello@nekoyachts.com" className="text-xl text-[#D5C4A1] hover:text-white transition-colors">
                                            hello@nekoyachts.com
                                        </a>
                                    </div>
                                    
                                    <div>
                                        <p className="text-white font-medium mb-1">Response Time</p>
                                        <p>We typically respond within 24 hours.</p>
                                    </div>

                                    <div className="pt-8 border-t border-grey-800">
                                        <p className="text-sm text-grey-500 italic">
                                            Designed in the EU & UK.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Form */}
                            <div>
                                {isFormSubmitted ? (
                                    <div className="h-full flex flex-col justify-center items-center text-center p-8 bg-grey-950/50 border border-white/5 rounded-none">
                                        <h3 className="text-2xl font-bold text-[#D5C4A1] mb-4">Message Received</h3>
                                        <p className="text-grey-300 font-light">
                                            Thank you for starting the conversation. We will be in touch shortly.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} noValidate className="space-y-10">
                                        
                                        <div className="grid grid-cols-1 gap-10">
                                            <div>
                                                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-grey-500 mb-2">Full Name</label>
                                                <input 
                                                    type="text" 
                                                    name="name" 
                                                    id="name" 
                                                    value={formState.name} 
                                                    onChange={handleContactChange} 
                                                    onBlur={handleContactBlur}
                                                    required 
                                                    className={`${inputClasses} ${formErrors.name ? errorClasses : ''}`}
                                                    placeholder="Enter your name"
                                                />
                                                {formErrors.name && <p className="mt-2 text-sm text-red-400 font-light">{formErrors.name}</p>}
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-grey-500 mb-2">Email Address</label>
                                                <input 
                                                    type="email" 
                                                    name="email" 
                                                    id="email" 
                                                    value={formState.email} 
                                                    onChange={handleContactChange} 
                                                    onBlur={handleContactBlur}
                                                    required 
                                                    className={`${inputClasses} ${formErrors.email ? errorClasses : ''}`}
                                                    placeholder="name@example.com"
                                                />
                                                {formErrors.email && <p className="mt-2 text-sm text-red-400 font-light">{formErrors.email}</p>}
                                            </div>

                                            <div>
                                                <label htmlFor="interest" className="block text-xs font-bold uppercase tracking-widest text-grey-500 mb-2">Interest</label>
                                                <div className="relative">
                                                    <select
                                                        name="interest"
                                                        id="interest"
                                                        value={formState.interest}
                                                        onChange={handleContactChange}
                                                        onBlur={handleContactBlur}
                                                        required
                                                        className={`${inputClasses} ${formErrors.interest ? errorClasses : ''} appearance-none cursor-pointer`}
                                                    >
                                                        <option value="" disabled>I am interested in...</option>
                                                        <option value="Ownership Inquiry" className="bg-grey-900">Ownership Inquiry</option>
                                                        <option value="Investor Relations" className="bg-grey-900">Investor Relations</option>
                                                        <option value="Supplier Partnership" className="bg-grey-900">Supplier Partnership</option>
                                                        <option value="Media/Press" className="bg-grey-900">Media/Press</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-grey-400">
                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                    </div>
                                                </div>
                                                {formErrors.interest && <p className="mt-2 text-sm text-red-400 font-light">{formErrors.interest}</p>}
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-grey-500 mb-2">Message</label>
                                                <textarea 
                                                    name="message" 
                                                    id="message" 
                                                    rows={4} 
                                                    value={formState.message} 
                                                    onChange={handleContactChange} 
                                                    onBlur={handleContactBlur}
                                                    required 
                                                    className={`${inputClasses} ${formErrors.message ? errorClasses : ''} resize-none`}
                                                    placeholder="How can we help?"
                                                ></textarea>
                                                {formErrors.message && <p className="mt-2 text-sm text-red-400 font-light">{formErrors.message}</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <button 
                                                type="submit" 
                                                className="inline-flex items-center group px-8 py-4 bg-[#D5C4A1] text-grey-900 font-bold tracking-widest uppercase rounded-none hover:bg-white transition-all duration-300"
                                            >
                                                Start The Conversation
                                                <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">
                                                    <ArrowRightIcon />
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* SECTION 3: AI VOYAGE PLANNER */}
            <div className="relative py-24 sm:py-32 flex flex-col justify-center items-center overflow-hidden">
                {/* Background Image (Nautical Chart) */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/images/contact/tour.png" 
                        alt="Vintage nautical chart" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-grey-900/40"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    <AnimatedSection className="max-w-4xl mx-auto">
                        <div className="backdrop-blur-xl bg-grey-900/80 border border-white/10 rounded-none p-8 md:p-12 shadow-2xl">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">DON'T JUST WAIT FOR THE BOAT.</h2>
                                <h2 className="text-3xl md:text-5xl font-bold text-[#D5C4A1] mb-6 leading-tight">PLAN WHERE YOU'LL TAKE IT.</h2>
                                <p className="text-lg text-grey-300 font-light">
                                    The boat is real in our minds. Make the journey real in yours. Tell us your dream destination, and we will craft a sample itinerary.
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 mb-8">
                                <input
                                    type="text"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && !isLoading && handleGenerate()}
                                    placeholder="e.g., The Greek Islands, The Caribbean, or Fiji"
                                    className="flex-grow bg-grey-950/50 border border-grey-600 text-white rounded-none px-6 py-4 focus:outline-none focus:border-[#D5C4A1] font-light text-lg placeholder-grey-500"
                                    disabled={isLoading}
                                />
                                <button 
                                    onClick={handleGenerate} 
                                    disabled={isLoading} 
                                    className="bg-[#D5C4A1] hover:bg-[#C8B593] disabled:bg-[#D5C4A1]/50 disabled:cursor-not-allowed text-grey-900 font-bold tracking-wider uppercase py-4 px-8 rounded-none transition-colors flex items-center justify-center min-w-[200px]"
                                >
                                    {isLoading ? (
                                        <>
                                            <SpinnerIcon />
                                            <span>Planning...</span>
                                        </>
                                    ) : (
                                        'Create Itinerary'
                                    )}
                                </button>
                            </div>

                            {plannerError && (
                                <div className="text-center p-4 bg-red-900/30 border border-red-500/30 rounded-none">
                                    <p className="text-red-300 font-light">{plannerError}</p>
                                </div>
                            )}
                            
                            {itinerary && !isLoading && (
                                <div className="space-y-8 animate-fade-in-up">
                                    {/* The Itinerary */}
                                    <div className="p-6 md:p-8 bg-grey-950/60 border border-white/5 rounded-none max-h-[500px] overflow-y-auto custom-scrollbar">
                                        <div className="prose prose-invert max-w-none prose-headings:font-bold prose-p:font-light prose-p:text-grey-300 prose-li:text-grey-300" dangerouslySetInnerHTML={{ __html: itinerary }} />
                                    </div>

                                    {/* The "Save Itinerary" Lead Magnet */}
                                    <div className="bg-[#D5C4A1]/10 border border-[#D5C4A1]/30 rounded-none p-6 md:p-8">
                                        {isSaveSubmitted ? (
                                            <div className="text-center py-4">
                                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D5C4A1]/20 text-[#D5C4A1] mb-4">
                                                    <CheckIcon />
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-2">Itinerary Sent</h3>
                                                <p className="text-grey-300 font-light">Check your inbox. We've saved this plan for you.</p>
                                            </div>
                                        ) : (
                                            <>
                                                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide flex items-center gap-3">
                                                    <span className="w-1.5 h-6 bg-[#D5C4A1]"></span>
                                                    Save this plan for later
                                                </h3>
                                                <form onSubmit={handleSaveItinerary} className="space-y-6">
                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        <div>
                                                            <input
                                                                type="text"
                                                                placeholder="Full Name"
                                                                required
                                                                value={saveForm.name}
                                                                onChange={(e) => setSaveForm({...saveForm, name: e.target.value})}
                                                                className="w-full bg-grey-950/50 border border-grey-600 text-white px-4 py-3 rounded-none focus:outline-none focus:border-[#D5C4A1]"
                                                            />
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="email"
                                                                placeholder="Email Address"
                                                                required
                                                                value={saveForm.email}
                                                                onChange={(e) => setSaveForm({...saveForm, email: e.target.value})}
                                                                className="w-full bg-grey-950/50 border border-grey-600 text-white px-4 py-3 rounded-none focus:outline-none focus:border-[#D5C4A1]"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Qualification Question */}
                                                    <div className="bg-grey-950/30 p-4 rounded-none border border-white/5">
                                                        <p className="text-sm font-bold text-grey-400 uppercase tracking-widest mb-3">Do you currently own a catamaran?</p>
                                                        <div className="flex items-center gap-6">
                                                            <label className="flex items-center gap-2 cursor-pointer">
                                                                <input 
                                                                    type="radio" 
                                                                    name="isOwner" 
                                                                    value="yes" 
                                                                    checked={saveForm.isOwner === 'yes'}
                                                                    onChange={(e) => setSaveForm({...saveForm, isOwner: e.target.value})}
                                                                    className="text-[#D5C4A1] focus:ring-[#D5C4A1]"
                                                                />
                                                                <span className="text-white font-light">Yes</span>
                                                            </label>
                                                            <label className="flex items-center gap-2 cursor-pointer">
                                                                <input 
                                                                    type="radio" 
                                                                    name="isOwner" 
                                                                    value="no" 
                                                                    checked={saveForm.isOwner === 'no'}
                                                                    onChange={(e) => setSaveForm({...saveForm, isOwner: e.target.value})}
                                                                    className="text-[#D5C4A1] focus:ring-[#D5C4A1]"
                                                                />
                                                                <span className="text-white font-light">No, I am aspiring</span>
                                                            </label>
                                                        </div>

                                                        {/* Conditional Vessel Input */}
                                                        {saveForm.isOwner === 'yes' && (
                                                            <div className="mt-4 animate-fade-in-up">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Which make/model do you sail? (e.g. Lagoon 620)"
                                                                    value={saveForm.currentVessel}
                                                                    onChange={(e) => setSaveForm({...saveForm, currentVessel: e.target.value})}
                                                                    className="w-full bg-grey-950/50 border border-grey-600 text-white px-4 py-3 rounded-none focus:outline-none focus:border-[#D5C4A1] text-sm"
                                                                />
                                                            </div>
                                                        )}
                                                    </div>

                                                    <button
                                                        type="submit"
                                                        className="w-full bg-[#D5C4A1] hover:bg-white text-grey-900 font-bold tracking-widest uppercase py-4 transition-colors rounded-none"
                                                    >
                                                        Email Me This Itinerary
                                                    </button>
                                                </form>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* SECTION 4: BUILD LOG (Footer) */}
            <div className="py-24 bg-grey-950 border-t border-grey-800">
                <div className="container mx-auto px-6 text-center">
                    <AnimatedSection className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-6">Join The Build Log</h3>
                        <p className="text-grey-400 font-light mb-8">
                            Receive engineering updates and behind-the-scenes access to the NEKO 19 development.
                        </p>

                        {isNewsletterSubmitted ? (
                            <div className="text-[#D5C4A1] font-medium text-lg">
                                Welcome aboard.
                            </div>
                        ) : (
                            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto relative" noValidate>
                                <input
                                    type="email"
                                    value={newsletterEmail}
                                    onChange={handleNewsletterChange}
                                    onBlur={handleNewsletterBlur}
                                    placeholder="Email Address"
                                    required
                                    className="w-full bg-transparent border-b border-grey-700 text-white px-4 py-3 focus:outline-none focus:border-[#D5C4A1] transition-colors font-light text-center placeholder-grey-600 rounded-none"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 top-3 text-grey-500 hover:text-[#D5C4A1] transition-colors uppercase text-xs font-bold tracking-widest"
                                >
                                    Join
                                </button>
                                {newsletterError && <p className="text-sm text-red-400 mt-2 font-light absolute left-0 -bottom-6 w-full">{newsletterError}</p>}
                            </form>
                        )}
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
