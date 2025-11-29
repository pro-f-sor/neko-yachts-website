
import React, { useState, useEffect } from 'react';

type CookieCategory = 'necessary' | 'analytics' | 'marketing';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true and disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    try {
      const savedConsent = localStorage.getItem('neko-cookie-consent');
      if (!savedConsent) {
        // Small delay for animation effect on load
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
      } else {
        // Load saved preferences if available
        setPreferences(JSON.parse(savedConsent));
      }
    } catch (e) {
      // If localStorage is blocked, just show the banner
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    savePreferences(allAccepted);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = { necessary: true, analytics: false, marketing: false };
    savePreferences(necessaryOnly);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem('neko-cookie-consent', JSON.stringify(prefs));
    } catch (e) {
      console.warn('Could not save cookie preferences to localStorage');
    }
    setPreferences(prefs);
    setIsVisible(false);
    
    // Here you would typically trigger your analytics initialization based on 'prefs'
    if (prefs.analytics) {
      console.log('Analytics cookies enabled');
    }
    if (prefs.marketing) {
      console.log('Marketing cookies enabled');
    }
  };

  const togglePreference = (category: CookieCategory) => {
    if (category === 'necessary') return;
    setPreferences(prev => ({ ...prev, [category]: !prev[category] }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in-up">
      <div className="max-w-6xl mx-auto bg-[#0E1F2F]/50 backdrop-blur-md border border-grey-800 shadow-2xl rounded-xl overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
            
            {/* Text Content */}
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-white mb-3">Your Privacy Choices</h3>
              <p className="text-grey-300 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or withdraw your consent at any time. 
                <a href="?page=cookie-policy" className="text-[#D5C4A1] hover:underline ml-1">Read our Cookie Policy.</a>
              </p>

              {/* Detailed Preferences Toggle */}
              {showDetails && (
                <div className="mt-6 grid gap-4 border-t border-grey-800 pt-6">
                  {/* Necessary */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white text-sm">Necessary</p>
                      <p className="text-xs text-grey-500">Required for the website to function.</p>
                    </div>
                    {/* Locked 'On' Switch */}
                    <div 
                        className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#D5C4A1]/50 cursor-not-allowed"
                    >
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white/50 translate-x-6" />
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white text-sm">Analytics</p>
                      <p className="text-xs text-grey-500">Help us understand how visitors interact with the website.</p>
                    </div>
                    <button 
                        onClick={() => togglePreference('analytics')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#D5C4A1] focus:ring-offset-2 focus:ring-offset-grey-900 ${preferences.analytics ? 'bg-[#D5C4A1]' : 'bg-grey-700'}`}
                        aria-pressed={preferences.analytics}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${preferences.analytics ? 'translate-x-6' : 'translate-x-1'}`}
                        />
                    </button>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white text-sm">Marketing</p>
                      <p className="text-xs text-grey-500">Used to display ads that are relevant to you.</p>
                    </div>
                    <button 
                        onClick={() => togglePreference('marketing')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#D5C4A1] focus:ring-offset-2 focus:ring-offset-grey-900 ${preferences.marketing ? 'bg-[#D5C4A1]' : 'bg-grey-700'}`}
                        aria-pressed={preferences.marketing}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${preferences.marketing ? 'translate-x-6' : 'translate-x-1'}`}
                        />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0 min-w-[200px]">
              <button
                onClick={handleAcceptAll}
                className="w-full px-6 py-3 bg-[#D5C4A1] hover:bg-[#C8B593] text-grey-900 font-semibold rounded-lg text-sm transition-colors shadow-md"
              >
                Accept All
              </button>
              
              {showDetails ? (
                <button
                  onClick={handleSavePreferences}
                  className="w-full px-6 py-3 bg-grey-800 hover:bg-grey-700 text-white font-semibold rounded-lg text-sm transition-colors border border-grey-700"
                >
                  Save Preferences
                </button>
              ) : (
                <button
                    onClick={handleAcceptNecessary}
                    className="w-full px-6 py-3 bg-transparent hover:bg-grey-800 text-[#D8D8D8] hover:text-white font-medium rounded-lg text-sm transition-colors border border-grey-700"
                >
                    Necessary Only
                </button>
              )}

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full px-6 py-2 text-xs text-grey-400 hover:text-[#D5C4A1] underline transition-colors"
              >
                {showDetails ? 'Less Options' : 'Customise Settings'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
