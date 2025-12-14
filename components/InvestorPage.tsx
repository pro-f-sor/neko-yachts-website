
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import InvestorPageGlobal from './InvestorPageGlobal';
import InvestorPageSingapore from './InvestorPageSingapore';
import InvestorGate from './InvestorGate';
import { 
    LightningBoltIcon, 
    CompassRoseIcon, 
    PalmTreeIcon, 
    LockIcon,
    ArrowRightIcon, 
    DiamondIcon,
    CheckIcon,
    CloseIcon,
    GlobeIcon
} from './icons/Icons';

interface InvestorFormState {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  title: string;
  country: string;
  investmentRange: string;
  investorType: string;
  timeline: string;
  meetingLocation: string;
  language: string;
  referralSource: string;
  message: string;
}

const initialFormState: InvestorFormState = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  title: '',
  country: '',
  investmentRange: '',
  investorType: '',
  timeline: '',
  meetingLocation: '',
  language: '',
  referralSource: '',
  message: ''
};

// GCC Content Dictionary
const CONTENT_GCC = {
    en: {
        hero: {
            badge: "Vision 2030 Aligned Strategy",
            title: "Defining The New\nMaritime Legacy.",
            body: "The GCC is redefining global tourism. As the region builds the world's most ambitious coastal destinations, NEKO provides the essential hardware for this new era."
        },
        macro: {
            eyebrow: "Regional Dynamics",
            title: "A Convergence of Opportunity",
            card1: {
                title: "The Saudi Vision 2030 Catalyst",
                body: "With giga-projects like NEOM, Sindalah, and the Red Sea Project coming online, the Kingdom requires a new fleet of eco-conscious, luxury vessels. NEKO is engineered to serve this specific demand surge."
            },
            card2: {
                title: "The Arabian Gulf Hub",
                body: "Dubai and Doha remain the epicenter of marine luxury. Our vessel is designed with the specific climate, layout, and service requirements of the Gulf client in mind, positioning the UAE and Qatar as key operational bases."
            },
            card3: {
                title: "Uncompromising Family Legacy",
                body: "For the UHNW family office, asset preservation and safety are paramount. Our \"Aviation Grade\" engineering offers a level of redundancy and security that aligns with the values of generational wealth stewardship."
            }
        },
        business: {
            eyebrow: "The Economics",
            title: "Tangible Asset Generation.",
            body: "We offer a partnership backed by physical assets, not speculation. Our model leverages European engineering excellence to serve the high-growth markets of the GCC.",
            points: [
                { title: "Manufacturing Efficiency", body: "Modular architecture significantly reduces build-time, accelerating delivery to waiting clients in the Red Sea and Gulf." },
                { title: "Direct Client Relationships", body: "We maintain direct stewardship of the client relationship, ensuring the highest standards of service and margin retention." },
                { title: "Regional Fleet Utility", body: "Dual-use capability (Private + Charter) unlocks high-yield returns, incentivizing fleet acquisitions for tourism infrastructure." }
            ],
            graph: {
                growth: "Primary Growth Market",
                backing: "Asset Backing",
                standard: "Engineering Standard"
            }
        },
        team: {
            eyebrow: "Stewardship",
            title: "Execution & Prudence.",
            peterRole: "Strategy & Finance",
            peterQuote: "We do not build on hope; we build on data. Our approach applies rigorous financial discipline to marine manufacturing, ensuring stability for our partners.",
            mikeRole: "Technical & Design",
            mikeQuote: "We bridge European craftsmanship with a deep understanding of the GCC client's needs, creating a product that is globally capable yet regionally optimised."
        },
        ask: {
            title: "A Legacy Partnership.",
            body: "We are not seeking passive capital; we are seeking a strategic alliance. We invite partners who share our vision for the future of maritime tourism in the GCC to join us in establishing a category-defining brand."
        },
        cta: {
            title: "Request Confidential Information Memorandum",
            sub: "For Accredited Investors & Strategic Partners Only.",
            button: "Submit Expression of Interest",
            footer: "The Founders are available for confidential briefings in Dubai, Riyadh, Doha, or London."
        }
    },
    ar: {
        hero: {
            badge: "استراتيجية متوافقة مع رؤية 2030",
            title: "رسم ملامح الإرث\nالبحري الجديد.",
            body: "تعيد دول مجلس التعاون الخليجي تعريف السياحة العالمية. وبينما تبني المنطقة وجهات ساحلية هي الأكثر طموحاً في العالم، تقدم NEKO البنية التحتية الأساسية لهذا العصر الجديد."
        },
        macro: {
            eyebrow: "الديناميكيات الإقليمية",
            title: "ملتقى الفرص الواعدة",
            card1: {
                title: "محفز رؤية المملكة 2030",
                body: "مع انطلاق المشاريع العملاقة مثل نيوم، وسندالة، ومشروع البحر الأحمر، تحتاج المملكة إلى أسطول جديد من السفن الفاخرة والصديقة للبيئة. صُممت NEKO لتلبية هذا الطلب المتزايد بدقة."
            },
            card2: {
                title: "مركز الخليج العربي",
                body: "تظل دبي والدوحة مركز الثقل للفخامة البحرية. صُممت سفينتنا مع مراعاة المناخ، والتخطيط، ومتطلبات الخدمة المحددة لعملاء الخليج، مما يضع الإمارات وقطر كقواعد تشغيلية رئيسية."
            },
            card3: {
                title: "إرث عائلي راسخ",
                body: "بالنسبة للمكاتب العائلية للأثرياء، يعد الحفاظ على الأصول والسلامة أمراً بالغ الأهمية. تقدم هندستنا \"بمعايير الطيران\" مستوى من التكرار والأمان يتماشى مع قيم إدارة الثروات عبر الأجيال."
            }
        },
        business: {
            eyebrow: "الاقتصاديات",
            title: "توليد أصول ملموسة.",
            body: "نحن نقدم شراكة مدعومة بأصول مادية، وليست مضاربة. نموذجنا يستفيد من التميز الهندسي الأوروبي لخدمة الأسواق عالية النمو في دول مجلس التعاون الخليجي.",
            points: [
                { title: "كفاءة التصنيع", body: "تقلل الهندسة المعيارية بشكل كبير من وقت البناء، مما يسرع التسليم للعملاء المنتظرين في البحر الأحمر والخليج." },
                { title: "علاقات مباشرة مع العملاء", body: "نحافظ على الإشراف المباشر على العلاقة مع العميل، مما يضمن أعلى معايير الخدمة والحفاظ على الهوامش الربحية." },
                { title: "منفعة الأسطول الإقليمي", body: "تفتح القدرة ثنائية الاستخدام (خاص + تأجير) عوائد عالية، مما يحفز الاستحواذ على الأساطيل للبنية التحتية السياحية." }
            ],
            graph: {
                growth: "سوق النمو الأولي",
                backing: "دعم الأصول",
                standard: "المعيار الهندسي"
            }
        },
        team: {
            eyebrow: "الإدارة والقيادة",
            title: "التنفيذ والحكمة.",
            peterRole: "الاستراتيجية والمالية",
            peterQuote: "نحن لا نبني على الأمل؛ نحن نبني على البيانات. يطبق نهجنا انضباطاً مالياً صارماً على التصنيع البحري، مما يضمن الاستقرار لشركائنا.",
            mikeRole: "التقنية والتصميم",
            mikeQuote: "نحن نجمع بين الحرفية الأوروبية والفهم العميق لاحتياجات عملاء الخليج، لإنتاج منتج قادر عالمياً ومُحسن إقليمياً."
        },
        ask: {
            title: "شراكة إرث.",
            body: "نحن لا نسعى لرأس مال سلبي؛ نحن نسعى لتحالف استراتيجي. ندعو الشركاء الذين يشاركوننا رؤيتنا لمستقبل السياحة البحرية في دول مجلس التعاون الخليجي للانضمام إلينا في تأسيس علامة تجارية رائدة."
        },
        cta: {
            title: "طلب مذكرة المعلومات السرية",
            sub: "للمستثمرين المعتمدين والشركاء الاستراتيجيين فقط.",
            button: "تقديم تعبير عن الاهتمام",
            footer: "المؤسسون متاحون لعقد اجتماعات سرية في دبي، الرياض، الدوحة، أو لندن."
        }
    }
};

const FORM_CONTENT = {
    en: {
        successTitle: "Expression of Interest Received",
        successBody: "Thank you for your interest in NEKO Yachts. We will personally review your submission and respond within 24-48 hours. Qualified parties will receive the Information Memorandum following NDA execution.",
        close: "Close Window",
        title: "Strategic Access Request",
        sub: "Please provide your details for confidential consideration.",
        headers: {
            identity: "Identity",
            fit: "Strategic Fit",
            prefs: "Preferences"
        },
        labels: {
            name: "Full Name *",
            email: "Email Address *",
            phone: "Phone (with Country Code) *",
            company: "Company / Entity Name *",
            title: "Title / Role",
            country: "Country / Region",
            type: "Investor Type *",
            range: "Investment Range *",
            timeline: "Interest Level / Timeline",
            location: "Preferred Meeting Location",
            lang: "Language Preference",
            referral: "Referral Source (Important)",
            message: "Additional Context (Optional)",
            submit: "Submit Request"
        },
        placeholders: {
            name: "First Last",
            email: "name@firm.com",
            phone: "+971 50 000 0000",
            company: "Investment Group / Family Office",
            title: "Managing Director",
            country: "Region",
            referral: "Who introduced you to NEKO?",
            message: "Any specific areas of interest or requirements..."
        },
        options: {
            select: "Select...",
            type: ["Family Office", "Private Investor (UHNW)", "Strategic Trade Partner", "Institutional / Sovereign", "Venture Capital / PE", "Other"],
            range: ["$500K - $1M", "$1M - $5M", "$5M - $10M", "$10M+", "Strategic Alliance"],
            timeline: ["Exploring Opportunities", "Active Interest", "Ready to proceed"],
            lang: ["English", "Arabic", "Both"]
        }
    },
    ar: {
        successTitle: "تم استلام التعبير عن الاهتمام",
        successBody: "شكراً لاهتمامكم بـ NEKO Yachts. سنقوم بمراجعة طلبكم شخصياً والرد خلال 24-48 ساعة. ستحصل الأطراف المؤهلة على مذكرة المعلومات بعد توقيع اتفاقية عدم الإفصاح.",
        close: "إغلاق النافذة",
        title: "طلب وصول استراتيجي",
        sub: "يرجى تقديم التفاصيل الخاصة بك للنظر فيها بسرية.",
        headers: {
            identity: "الهوية",
            fit: "الملاءمة الاستراتيجية",
            prefs: "التفضيلات"
        },
        labels: {
            name: "الاسم الكامل *",
            email: "البريد الإلكتروني *",
            phone: "الهاتف (مع رمز الدولة) *",
            company: "اسم الشركة / الجهة *",
            title: "المسمى الوظيفي / الدور",
            country: "الدولة / المنطقة",
            type: "نوع المستثمر *",
            range: "نطاق الاستثمار *",
            timeline: "مستوى الاهتمام / الجدول الزمني",
            location: "موقع الاجتماع المفضل",
            lang: "تفضيل اللغة",
            referral: "مصدر الإحالة (هام)",
            message: "سياق إضافي (اختياري)",
            submit: "إرسال الطلب"
        },
        placeholders: {
            name: "الاسم الأول واللقب",
            email: "name@firm.com",
            phone: "+966 50 000 0000",
            company: "مجموعة استثمارية / مكتب عائلي",
            title: "مدير عام",
            country: "المملكة العربية السعودية / الإمارات",
            referral: "من قام بتعريفك بـ NEKO؟",
            message: "أي مجالات اهتمام محددة أو متطلبات..."
        },
        options: {
            select: "اختر...",
            type: ["مكتب عائلي", "مستثمر خاص (فائق الثراء)", "شريك تجاري استراتيجي", "مؤسسي / سيادي", "أخرى"],
            range: ["500 ألف - 1 مليون دولار", "1 مليون - 5 مليون دولار", "5 مليون - 10 مليون دولار", "10 مليون دولار +", "تحالف استراتيجي"],
            timeline: ["استكشاف الفرص", "اهتمام نشط", "جاهز للمضي قدماً"],
            lang: ["الإنجليزية", "العربية", "كلاهما"]
        }
    }
}

const InvestorPage: React.FC = () => {
  // Authentication State
  const [accessLevel, setAccessLevel] = useState<'LOCKED' | 'GCC' | 'GLOBAL' | 'SINGAPORE'>('LOCKED');

  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<InvestorFormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<InvestorFormState>>({});
  
  // View State
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  
  // Content Logic
  const t = CONTENT_GCC[lang];
  const tForm = FORM_CONTENT[lang];
  const isArabic = lang === 'ar';

  // Dynamic Locations based on Region
  let locations: string[] = [];
  if (accessLevel === 'GCC') {
      locations = isArabic ? ["دبي", "الرياض", "الدوحة", "لندن", "افتراضي / مكالمة فيديو"] : ["Dubai", "Riyadh", "Doha", "London", "Virtual / Video Call"];
  } else if (accessLevel === 'SINGAPORE') {
      locations = ["Singapore", "London", "Dubai", "Virtual / Video Call", "Other"];
  } else {
      locations = ["London", "New York", "San Francisco", "Monaco", "Virtual / Video Call"];
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof InvestorFormState]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<InvestorFormState> = {};
    if (!formData.fullName) newErrors.fullName = 'Required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.phone) newErrors.phone = 'Required';
    if (!formData.company) newErrors.company = 'Required';
    if (!formData.investmentRange) newErrors.investmentRange = 'Required';
    if (!formData.investorType) newErrors.investorType = 'Required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Investor Form Submitted:', { ...formData, region: accessLevel });
      setTimeout(() => {
        setIsSubmitted(true);
      }, 500);
    }
  };

  const closeForm = () => {
    setShowForm(false);
    if (isSubmitted) {
        setIsSubmitted(false);
        setFormData(initialFormState);
    }
  };

  const labelClass = "block text-xs font-bold uppercase tracking-widest text-grey-500 mb-2";
  const inputClass = "w-full bg-white border border-grey-300 text-grey-900 px-4 py-3 rounded-none focus:outline-none focus:border-[#D5C4A1] focus:ring-1 focus:ring-[#D5C4A1] transition-colors font-light text-sm";
  const errorClass = "mt-1 text-xs text-red-500 font-mono";

  // If locked, show gate
  if (accessLevel === 'LOCKED') {
      return <InvestorGate onUnlock={(version) => {
          setAccessLevel(version);
          // Set default language based on region
          setLang(version === 'GCC' ? 'en' : 'en');
      }} />;
  }

  return (
    <div className={`selection:bg-[#D5C4A1] selection:text-white ${isArabic ? 'font-arabic' : 'font-sans'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      
      {/* TOGGLES CONTAINER - Sticky Top */}
      <div className="absolute top-24 left-6 z-50 md:top-28 md:left-12 flex flex-col md:flex-row gap-4">
          
          {/* Language Toggle (Only for GCC) */}
          {accessLevel === 'GCC' && (
            <button 
                onClick={() => setLang(isArabic ? 'en' : 'ar')}
                className="flex items-center space-x-2 bg-grey-900 text-[#D5C4A1] border border-[#D5C4A1] px-5 py-3 rounded-none shadow-xl hover:bg-grey-800 hover:shadow-2xl transition-all duration-300 w-fit"
            >
                <GlobeIcon />
                <span className={`text-xs font-bold uppercase tracking-wider ${isArabic ? 'font-sans' : 'font-arabic'}`}>
                    {isArabic ? 'English' : 'العربية'}
                </span>
            </button>
          )}
      </div>

      {/* --- CONTENT RENDER --- */}
      {accessLevel === 'GLOBAL' ? (
          <InvestorPageGlobal onOpenForm={() => setShowForm(true)} />
      ) : accessLevel === 'SINGAPORE' ? (
          <InvestorPageSingapore onOpenForm={() => setShowForm(true)} />
      ) : (
        /* --- GCC CONTENT --- */
        <div className="bg-grey-50 text-grey-900">
            {/* SECTION 1: HERO */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className={isArabic ? 'scale-x-[-1]' : ''}>
                        <path d="M0 100 L100 0" stroke="currentColor" strokeWidth="0.5" className="text-grey-900" />
                        <path d="M20 100 L100 20" stroke="currentColor" strokeWidth="0.5" className="text-grey-900" />
                        <path d="M40 100 L100 40" stroke="currentColor" strokeWidth="0.5" className="text-grey-900" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <AnimatedSection className="max-w-4xl">
                        <span className="inline-block py-1 px-3 border border-grey-900 text-xs font-bold uppercase tracking-widest mb-6">
                            {t.hero.badge}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-grey-900 tracking-tight leading-none mb-8 uppercase whitespace-pre-line">
                            {t.hero.title}
                        </h1>
                        <p className={`text-xl md:text-2xl text-grey-600 font-light max-w-2xl leading-relaxed border-[#D5C4A1] ${isArabic ? 'border-r-4 pr-6' : 'border-l-4 pl-6'}`}>
                            {t.hero.body}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* SECTION 2: THE MACRO OPPORTUNITY */}
            <section className="py-24 bg-white border-y border-grey-200">
                <div className="container mx-auto px-6 lg:px-12">
                    <AnimatedSection className="mb-16 flex justify-between items-end">
                        <div>
                            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-grey-400 mb-2">{t.macro.eyebrow}</h2>
                            <h3 className="text-3xl font-bold text-grey-900 uppercase">{t.macro.title}</h3>
                        </div>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Card 1 */}
                        <AnimatedSection delay={100} className="bg-grey-50 p-8 border border-grey-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-[#D5C4A1] mb-6">
                                <LightningBoltIcon />
                            </div>
                            <h4 className="text-xl font-bold text-grey-900 mb-4">{t.macro.card1.title}</h4>
                            <p className="text-grey-600 font-light text-sm leading-relaxed">
                                {t.macro.card1.body}
                            </p>
                        </AnimatedSection>

                        {/* Card 2 */}
                        <AnimatedSection delay={200} className="bg-grey-50 p-8 border border-grey-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-[#D5C4A1] mb-6">
                                <CompassRoseIcon />
                            </div>
                            <h4 className="text-xl font-bold text-grey-900 mb-4">{t.macro.card2.title}</h4>
                            <p className="text-grey-600 font-light text-sm leading-relaxed">
                                {t.macro.card2.body}
                            </p>
                        </AnimatedSection>

                        {/* Card 3 */}
                        <AnimatedSection delay={300} className="bg-grey-50 p-8 border border-grey-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-[#D5C4A1] mb-6">
                                <PalmTreeIcon />
                            </div>
                            <h4 className="text-xl font-bold text-grey-900 mb-4">{t.macro.card3.title}</h4>
                            <p className="text-grey-600 font-light text-sm leading-relaxed">
                                {t.macro.card3.body}
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE BUSINESS MODEL */}
            <section className="py-24 bg-grey-900 text-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <AnimatedSection className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#D5C4A1] mb-2">{t.business.eyebrow}</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase">{t.business.title}</h3>
                            <p className="text-lg text-grey-400 font-light leading-relaxed mb-8">
                                {t.business.body}
                            </p>
                            
                            <div className="space-y-6">
                                {t.business.points.map((point, i) => (
                                    <div key={i} className="flex items-start">
                                        <div className={`mt-1 text-[#D5C4A1] ${isArabic ? 'ml-4' : 'mr-4'}`}><CheckIcon /></div>
                                        <div>
                                            <strong className="block text-white uppercase tracking-wide text-sm font-bold">{point.title}</strong>
                                            <span className="text-grey-500 font-light text-sm">{point.body}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Abstraction */}
                        <div className="relative h-[500px] border border-white/10 p-8 flex flex-col justify-between bg-grey-950">
                                <div className={`absolute top-0 p-4 ${isArabic ? 'left-0' : 'right-0'}`}>
                                    <DiamondIcon />
                                </div>
                                <div className="space-y-12 mt-auto" dir="ltr">
                                    <div className={isArabic ? 'text-right' : ''}>
                                        <div className="text-4xl font-bold text-white mb-1">GCC</div>
                                        <div className="text-xs text-grey-500 uppercase tracking-widest">{t.business.graph.growth}</div>
                                        <div className={`w-full h-1 bg-grey-800 mt-2 flex ${isArabic ? 'justify-end' : ''}`}><div className="w-[85%] h-full bg-[#D5C4A1]"></div></div>
                                    </div>
                                    <div className={isArabic ? 'text-right' : ''}>
                                        <div className="text-4xl font-bold text-white mb-1">Tangible</div>
                                        <div className="text-xs text-grey-500 uppercase tracking-widest">{t.business.graph.backing}</div>
                                        <div className={`w-full h-1 bg-grey-800 mt-2 flex ${isArabic ? 'justify-end' : ''}`}><div className="w-[100%] h-full bg-[#D5C4A1]"></div></div>
                                    </div>
                                    <div className={isArabic ? 'text-right' : ''}>
                                        <div className="text-4xl font-bold text-white mb-1">Global</div>
                                        <div className="text-xs text-grey-500 uppercase tracking-widest">{t.business.graph.standard}</div>
                                        <div className={`w-full h-1 bg-grey-800 mt-2 flex ${isArabic ? 'justify-end' : ''}`}><div className="w-full h-full bg-[#D5C4A1]"></div></div>
                                    </div>
                                </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* SECTION 4: THE TEAM */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <AnimatedSection className="mb-16 text-center">
                        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-grey-400 mb-2">{t.team.eyebrow}</h2>
                        <h3 className="text-3xl font-bold text-grey-900 uppercase">{t.team.title}</h3>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Peter */}
                        <AnimatedSection delay={100} className="flex flex-col md:flex-row gap-8 items-start">
                            <img 
                                src="https://coolcatamaran.com/images/headshots/Peter.png" 
                                alt="Peter Walker" 
                                className="w-24 h-24 rounded-none object-cover grayscale"
                            />
                            <div>
                                <h4 className="text-xl font-bold text-grey-900">Peter Walker</h4>
                                <p className="text-xs font-bold text-[#D5C4A1] uppercase tracking-widest mb-4">{t.team.peterRole}</p>
                                <blockquote className={`text-grey-600 font-light italic text-sm leading-relaxed border-[#D5C4A1] ${isArabic ? 'border-r-2 pr-4' : 'border-l-2 pl-4'}`}>
                                    "{t.team.peterQuote}"
                                </blockquote>
                            </div>
                        </AnimatedSection>

                        {/* Michael */}
                        <AnimatedSection delay={200} className="flex flex-col md:flex-row gap-8 items-start">
                            <img 
                                src="https://coolcatamaran.com/images/headshots/Mike.png" 
                                alt="Michael Walker" 
                                className="w-24 h-24 rounded-none object-cover grayscale"
                            />
                            <div>
                                <h4 className="text-xl font-bold text-grey-900">Michael Walker</h4>
                                <p className="text-xs font-bold text-[#D5C4A1] uppercase tracking-widest mb-4">{t.team.mikeRole}</p>
                                <blockquote className={`text-grey-600 font-light italic text-sm leading-relaxed border-[#D5C4A1] ${isArabic ? 'border-r-2 pr-4' : 'border-l-2 pl-4'}`}>
                                    "{t.team.mikeQuote}"
                                </blockquote>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* SECTION 5: THE ASK */}
            <section className="py-24 bg-grey-50 border-t border-grey-200">
                <div className="container mx-auto px-6 lg:px-12">
                    <AnimatedSection className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-grey-900 uppercase mb-8">{t.ask.title}</h2>
                        <p className="text-xl text-grey-600 font-light leading-relaxed">
                            {t.ask.body}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* SECTION 6: DATA ROOM ACCESS (CTA) */}
            <section className="py-32 bg-grey-900 text-center">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center p-4 bg-[#D5C4A1]/10 rounded-full mb-8">
                            <LockIcon />
                        </div>
                        <h2 className="text-4xl font-bold text-white uppercase mb-4 tracking-tight">{t.cta.title}</h2>
                        <p className="text-grey-400 font-light mb-10 text-lg">
                            {t.cta.sub}
                        </p>
                        
                        <button 
                            onClick={() => setShowForm(true)}
                            className="inline-flex items-center justify-center px-10 py-5 bg-[#D5C4A1] hover:bg-white text-grey-900 font-bold tracking-widest uppercase transition-all duration-300 shadow-xl rounded-none"
                        >
                            {t.cta.button}
                            <span className={`transform ${isArabic ? 'rotate-180 mr-3' : 'ml-3'}`}><ArrowRightIcon /></span>
                        </button>

                        <p className="mt-16 text-xs text-grey-400 font-mono uppercase tracking-widest">
                            {t.cta.footer}
                        </p>
                    </AnimatedSection>
                </div>
            </section>
        </div>
      )}

      {/* SHARED MODAL FORM */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" dir={isArabic ? 'rtl' : 'ltr'}>
            <div className="absolute inset-0 bg-grey-900/90 backdrop-blur-sm" onClick={closeForm}></div>
            
            <div className={`relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-none shadow-2xl animate-fade-in-up ${isArabic ? 'font-arabic' : 'font-sans'}`}>
                <button 
                    onClick={closeForm}
                    className={`absolute top-6 text-grey-500 hover:text-grey-900 transition-colors ${isArabic ? 'left-6' : 'right-6'}`}
                >
                    <CloseIcon />
                </button>

                <div className="p-8 md:p-12">
                    {isSubmitted ? (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D5C4A1]/20 text-[#D5C4A1] mb-6">
                                <CheckIcon />
                            </div>
                            <h3 className="text-3xl font-bold text-grey-900 mb-4">{tForm.successTitle}</h3>
                            <p className="text-grey-600 font-light leading-relaxed max-w-md mx-auto">
                                {tForm.successBody}
                            </p>
                            <button 
                                onClick={closeForm}
                                className="mt-8 text-sm font-bold text-grey-900 border-b border-grey-900 hover:text-[#D5C4A1] hover:border-[#D5C4A1] transition-colors"
                            >
                                {tForm.close}
                            </button>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-2xl font-bold text-grey-900 mb-2 uppercase">{tForm.title}</h3>
                            <p className="text-grey-500 text-sm mb-8">{tForm.sub}</p>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Identity Section */}
                                <div className="space-y-6">
                                    <h4 className="text-xs font-bold text-[#D5C4A1] uppercase tracking-[0.2em] border-b border-grey-100 pb-2">{tForm.headers.identity}</h4>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className={labelClass}>{tForm.labels.name}</label>
                                            <input 
                                                type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                                                className={`${inputClass} ${errors.fullName ? 'border-red-300' : ''}`}
                                                placeholder={tForm.placeholders.name}
                                            />
                                            {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
                                        </div>
                                        <div>
                                            <label className={labelClass}>{tForm.labels.email}</label>
                                            <input 
                                                type="email" name="email" value={formData.email} onChange={handleChange}
                                                className={`${inputClass} ${errors.email ? 'border-red-300' : ''}`}
                                                placeholder={tForm.placeholders.email}
                                            />
                                            {errors.email && <p className={errorClass}>{errors.email}</p>}
                                        </div>
                                        <div>
                                            <label className={labelClass}>{tForm.labels.phone}</label>
                                            <input 
                                                type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                                className={`${inputClass} ${errors.phone ? 'border-red-300' : ''}`}
                                                placeholder={tForm.placeholders.phone}
                                                dir="ltr"
                                            />
                                             {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                                        </div>
                                        <div>
                                            <label className={labelClass}>{tForm.labels.company}</label>
                                            <input 
                                                type="text" name="company" value={formData.company} onChange={handleChange}
                                                className={`${inputClass} ${errors.company ? 'border-red-300' : ''}`}
                                                placeholder={tForm.placeholders.company}
                                            />
                                            {errors.company && <p className={errorClass}>{errors.company}</p>}
                                        </div>
                                        <div>
                                            <label className={labelClass}>{tForm.labels.title}</label>
                                            <input 
                                                type="text" name="title" value={formData.title} onChange={handleChange}
                                                className={inputClass}
                                                placeholder={tForm.placeholders.title}
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass}>{tForm.labels.country}</label>
                                            <input 
                                                type="text" name="country" value={formData.country} onChange={handleChange}
                                                className={inputClass}
                                                placeholder={tForm.placeholders.country}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Qualification Section */}
                                <div className="space-y-6">
                                    <h4 className="text-xs font-bold text-[#D5C4A1] uppercase tracking-[0.2em] border-b border-grey-100 pb-2">{tForm.headers.fit}</h4>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className={labelClass}>{tForm.labels.type}</label>
                                            <select 
                                                name="investorType" value={formData.investorType} onChange={handleChange}
                                                className={`${inputClass} appearance-none cursor-pointer`}
                                            >
                                                <option value="" disabled>{tForm.options.select}</option>
                                                {tForm.options.type.map((opt, i) => (
                                                    <option key={i} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                            {errors.investorType && <p className={errorClass}>{errors.investorType}</p>}
                                        </div>
                                        <div>
                                            <label className={labelClass}>{tForm.labels.range}</label>
                                            <select 
                                                name="investmentRange" value={formData.investmentRange} onChange={handleChange}
                                                className={`${inputClass} appearance-none cursor-pointer`}
                                            >
                                                <option value="" disabled>{tForm.options.select}</option>
                                                {tForm.options.range.map((opt, i) => (
                                                    <option key={i} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                            {errors.investmentRange && <p className={errorClass}>{errors.investmentRange}</p>}
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className={labelClass}>{tForm.labels.timeline}</label>
                                             <select 
                                                name="timeline" value={formData.timeline} onChange={handleChange}
                                                className={`${inputClass} appearance-none cursor-pointer`}
                                            >
                                                <option value="" disabled>{tForm.options.select}</option>
                                                {tForm.options.timeline.map((opt, i) => (
                                                    <option key={i} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Preferences Section */}
                                <div className="space-y-6">
                                    <h4 className="text-xs font-bold text-[#D5C4A1] uppercase tracking-[0.2em] border-b border-grey-100 pb-2">{tForm.headers.prefs}</h4>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className={labelClass}>{tForm.labels.location}</label>
                                             <select 
                                                name="meetingLocation" value={formData.meetingLocation} onChange={handleChange}
                                                className={`${inputClass} appearance-none cursor-pointer`}
                                            >
                                                <option value="" disabled>{tForm.options.select}</option>
                                                {locations.map((opt, i) => (
                                                    <option key={i} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className={labelClass}>{tForm.labels.lang}</label>
                                             <select 
                                                name="language" value={formData.language} onChange={handleChange}
                                                className={`${inputClass} appearance-none cursor-pointer`}
                                            >
                                                <option value="" disabled>{tForm.options.select}</option>
                                                {tForm.options.lang.map((opt, i) => (
                                                    <option key={i} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className={labelClass}>{tForm.labels.referral}</label>
                                            <input 
                                                type="text" name="referralSource" value={formData.referralSource} onChange={handleChange}
                                                className={inputClass}
                                                placeholder={tForm.placeholders.referral}
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className={labelClass}>{tForm.labels.message}</label>
                                            <textarea 
                                                name="message" value={formData.message} onChange={handleChange}
                                                className={inputClass}
                                                rows={3}
                                                placeholder={tForm.placeholders.message}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-grey-100 flex justify-end">
                                    <button 
                                        type="submit" 
                                        className="inline-flex items-center justify-center px-10 py-4 bg-[#D5C4A1] hover:bg-grey-900 hover:text-white text-grey-900 font-bold tracking-widest uppercase transition-all duration-300 shadow-lg rounded-none"
                                    >
                                        {tForm.labels.submit}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
      )}

    </div>
  );
};

export default InvestorPage;
