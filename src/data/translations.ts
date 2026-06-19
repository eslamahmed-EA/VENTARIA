import { Language } from '../types';

export const currencies = {
  USD: { code: 'USD', symbol: '$', rate: 1 },
  EGP: { code: 'EGP', symbol: 'EGP', rate: 50 },
  SAR: { code: 'SAR', symbol: 'SAR', rate: 3.75 },
  AED: { code: 'AED', symbol: 'AED', rate: 3.67 },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92 }
};

export const countries = [
  { code: 'EG', nameEn: 'Egypt', nameAr: 'مصر', currency: 'EGP', flag: '🇪🇬' },
  { code: 'SA', nameEn: 'Saudi Arabia', nameAr: 'السعودية', currency: 'SAR', flag: '🇸🇦' },
  { code: 'AE', nameEn: 'United Arab Emirates', nameAr: 'الإمارات', currency: 'AED', flag: '🇦🇪' },
  { code: 'US', nameEn: 'United States', nameAr: 'الولايات المتحدة', currency: 'USD', flag: '🇺🇸' },
  { code: 'OTHER', nameEn: 'Other Countries', nameAr: 'دول أخرى', currency: 'USD', flag: '🌐' }
];

export const translations = {
  ar: {
    brandName: "فينتاريا",
    brandSubtitle: "فينتاريا للحلول الرقمية - استوديو إبداعي عالمي لتصميم وتطوير الحلول السحابية والأنظمة الرقمية الفاخرة.",
    
    // Navigation
    navHome: "الرئيسية",
    navServices: "خدماتنا",
    navPortfolio: "أعمالنا",
    navCaseStudies: "دراسات الحالة",
    navPricing: "الأسعار",
    navAbout: "عن فينتاريا",
    navBlog: "المدونة",
    navTools: "أدوات مجانية",
    navContact: "اتصل بنا",

    // Action Buttons
    ctaGetStarted: "ابدأ مشروعك الآن",
    ctaConsultation: "احجز استشارة مجانية",
    ctaViewPortfolio: "تصفح معرض أعمالنا",
    ctaCalculate: "احسب التكلفة تالياً",
    ctaSubscribe: "اشترك بالنشرة الإخبارية",
    ctaCalculateCost: "احسب تكلفة موقعك",
    ctaRunAudit: "ابدأ الفحص الفني",
    ctaRunROI: "احسب العائد على الاستثمار",
    ctaContactUs: "تواصل معنا",
    ctaWhatsApp: "راسلنا مباشرة على واتساب",
    ctaBookAppointment: "تأكيد حجز الموعد",

    // Hero Section
    heroTitle: "نبني تجارب رقمية تقود نمو الأعمال",
    heroSubtitle: "استوديو برمجيات دولي رائد ومتخصص في هندسة المنتجات الرقمية الفاخرة، وتصميم واجهات المستخدم الاستثنائية، وتطوير منصات التجارة الإلكترونية عالية الأداء للشركات الكبرى والشركات الناشئة الطموحة.",
    heroTrustBadge: "✦ وكالة برمجيات متميزة بتقييم 5 نجوم",
    heroStatProjects: "مشروع متكامل بدقة فائقة",
    heroStatClients: "عميل عالمي يثق بمنتجاتنا",
    heroStatSatisfaction: "معدل الرضا الأكاديمي والمهني",
    heroStatSupport: "فريق دعم هندسي متكامل",

    // Hosting Info
    hostingTitle: "الاستضافة وحجز النطاقات والبريد المهني",
    hostingText: "نحن نساعد شركاءنا النخبة في حجز خوادم الاستضافة السحابية وإعداد وتوثيق النطاقات (Domain)، ترحيل ونقل البيانات والأنظمة، تهيئة وتفعيل البريد الإلكتروني الرسمي للأعمال وحلول البنية التحتية السحابية من خلال شبكتنا من الشركاء التقنيين الموثوقين. نوفر هذه التسهيلات التقنية كخيارات مضافة وخدمات اختيارية لضمان استقرار المشاريع.",

    // Services Overview Section
    servicesSectionTitle: "منظومة الخدمات الرقمية الاستشارية",
    servicesSectionSubtitle: "نقدم حلولاً متكاملة تجمع بين ريادة الأعمال الهندسية، والتصميم المبتكر، والتطوير البرمجي عالي الجودة.",
    servicesMoreDetails: "شاهد تفاصيل الخدمة والمزايا الهيكلية المرفقة ↗",

    // Why Choose Us Section
    whyChooseUsTitle: "لماذا يختارنا عمالقة الأعمال؟",
    whyChooseUsSubtitle: "نحن لسنا مجرد منفذين؛ بل شركاء استراتيجيون نصبو لتقديم أعلى معايير الجودة التقنية والأمان.",
    whyCard1Title: "هندسة برمجية نظيفة وتنافسية",
    whyCard1Desc: "نكتب برمجيات خالية من الأخطاء، معمارية مرنة وقابلة للتوسع اللانهائي تضمن سرعة البرمجة واستقرار النظام.",
    whyCard2Title: "تصميم فاخر وعصري (High-End UX)",
    whyCard2Desc: "ندرس سلوك المستخدمين ونصمم حركات مجهرية ولمسات بصرية ترسخ علامتك التجارية في وجدان العميل.",
    whyCard3Title: "حماية سيبرانية وأمان مطلق",
    whyCard3Desc: "تشفير كامل للبيانات وحماية من هجمات حجب الخدمة، مع الالتزام بأعلى معايير الأمن السيبراني الدولية.",
    whyCard4Title: "تكامل الأنظمة الشامل (System Integration)",
    whyCard4Desc: "ربط فوري وموثوق مع بوابات الدفع، مزودي الشحن، أنظمة المحاسبة، والذكاء الاصطناعي.",

    // Process Section
    processTitle: "رحلة البناء الهندسي فينتاريا",
    processSubtitle: "دورة عمل منهجية واحترافية تمر بـ 6 مراحل رئيسية لضمان تحويل الفكرة والاحتياجات لواقع رقمي فريد.",
    step1Title: "1. الاكتشاف والتحليل",
    step1Desc: "ورش عمل تفصيلية لدراسة الأهداف، متطلبات السوق وجدوى المشروع الفنية والتجارية.",
    step2Title: "2. المعمارية السحابية",
    step2Desc: "تصميم واجهة برمجة التطبيقات (API) ورسم خرائط سير البيانات وقواعد البيانات لضمان كفاءتها واستقرارها.",
    step3Title: "3. واجهات وتجربة المستخدم UX/UI",
    step3Desc: "نمذجة بصرية متطورة مفعمة بالتفاصيل والـ Micro-Interactions التي تعزز وتكرم هوية علامتك التجارية.",
    step4Title: "4. التطوير الهندسي المتين",
    step4Desc: "بدء التطوير البرمجي المكتوب بأرقى الأكواد عبر مطورين برتبة مهندسين محترفين لضمان كفاءة الأداء للتطبيقات.",
    step5Title: "5. الفحص ومراقبة الجودة QA",
    step5Desc: "اختبارات صارمة للأداء، الأمان الرقمي، والتوافقية الكاملة عبر جميع المنصات والشاشات.",
    step6Title: "6. الإطلاق والتحسين المستمر",
    step6Desc: "إطلاق آمن مع ضبط الخوادم السحابية ونظام الحماية، ومتابعة البيانات الحقيقية لتحسين معدلات التحويل.",

    // Testimonials
    testimonialsTitle: "شهادات شركاء النجاح النخبة",
    testimonialsSubtitle: "ماذا يقول المؤسسون والرؤساء التنفيذيون عن تجربتهم الرقمية الفاخرة معنا؟",

    // FAQ Section
    faqTitle: "الأسئلة الشائعة والاستفسارات التقنية",
    faqSubtitle: "كل ما تود معرفته عن المنهجيات، آليات التقدير والتحصيل البرمجي للحلول المطورة.",
    faqQ1: "أين وكيف يتم استضافة الأنظمة والمواقع بعد برمجتها؟",
    faqA1: "نقوم بتهيئة ونشر مشاريعنا على أفضل المنصات السحابية كـ AWS أو Google Cloud أو Vercel. نهتم بكافة جوانب ضبط النطاق، شهادات الأمان الإلكترونية وإعدادات Cloudflare لحظر الثغرات والهجمات مجاناً.",
    faqQ2: "هل تمنحون العميل الكود البرمجي بالكامل وحقوق الملكية الفكرية؟",
    faqA2: "بالتأكيد. جميع حقوق الملكية الفكرية والأكواد المصدرية النظيفة (Source Code) والملفات البيئية تنقل للعميل بالكامل بشكل رسمي فور تسليم المشروع وتصفيته تقنياً.",
    faqQ3: "كيف تضمنون جودة وأمن التطبيقات والمواقع محلياً وعالمياً؟",
    faqA3: "نطبق فحوصات حماية آلية ويدوية دورية، مع معايير OWASP للحماية من الثغرات، كما نختبر أداء السرعة للتحميل للتأكد من وصول معدلات الأداء إلى سرعات خارقة تفوق 95% على Lighthouse.",

    // Trust Elements
    securityStandards: "معايير الأمان الدولية المطبقة (ISO 27001، GDPR والامتثال الكامل لـ PCI-DSS)",
    awardsWon: "جوائز التميز كأفضل وكالة برمجة وتصميم واجهات مستخدم متميزة لعام 2025/2026",

    // Pricing Page
    pricingTitle: "باقات برمجية مرنة ومدروسة وبموازين حقيقية",
    pricingSubtitle: "اختر الحجم البرمجي والسرعة المناسبة لمشروعك، أو تواصل معنا لصياغة باقة معمارية مخصصة وعقد سنوي شامل.",
    monthly: "شهرياً",
    oneTime: "دفعة واحدة",
    billedMonthly: "تفوتر وتدفع شهرياً كاشتراك برمجيات متكامل وصيانة مستمرة.",
    billedOneTime: "تدفع لمرة واحدة شامل تسليم الكود الفوري والملكية والضمان البرمجي.",
    currencyText: "العملة المكتشفة والنشطة الآن:",
    selectCountry: "تغيير البلد يدوياً:",

    // Footer
    footerDesc: "نصمم ونطور البرمجيات المعمارية الأكثر تطوراً في الوطن العربي والعالم. نحن بوابة تحولك الرقمي المتفوق.",
    footerNewsletterTitle: "الاشتراك في النشرة الفنية",
    footerNewsletterPlaceholder: "أدخل بريدك الإلكتروني الاحترافي",
    footerCopyright: "© 2026 فينتاريا للحلول الرقمية. جميع الحقوق الفكرية والهندسية محفوظة."
  },
  en: {
    brandName: "VENTARIA",
    brandSubtitle: "Ventaria Digital Solutions. An elite international creative studio designing and engineering luxury cloud solutions and customized digital systems.",
    
    // Navigation
    navHome: "Home",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navCaseStudies: "Case Studies",
    navPricing: "Pricing",
    navAbout: "About Nexus",
    navBlog: "Blog",
    navTools: "Free Tools",
    navContact: "Contact",

    // Action Buttons
    ctaGetStarted: "Start Your Project",
    ctaConsultation: "Book Free Consultation",
    ctaViewPortfolio: "Browse Best Work",
    ctaCalculate: "Calculate Next Below",
    ctaSubscribe: "Subscribe to Newsletter",
    ctaCalculateCost: "Estimate Project Cost",
    ctaRunAudit: "Run Technical Healthcheck",
    ctaRunROI: "Calculate Growth Marketing ROI",
    ctaContactUs: "Write to Us",
    ctaWhatsApp: "Ping Us on WhatsApp",
    ctaBookAppointment: "Confirm Booking Reservation",

    // Hero Section
    heroTitle: "We Build Digital Experiences That Drive Business Growth",
    heroSubtitle: "An elite international digital studio specializing in high-consequence product engineering, majestic user experience architectures, and high-performance transactional platforms for unicorn startups and Fortune 500 enterprises.",
    heroTrustBadge: "✦ Premium Five-Star Rated Development Agency",
    heroStatProjects: "Projects Delivered with Precision",
    heroStatClients: "Global Active Clients",
    heroStatSatisfaction: "Average Retention and Satisfaction Rating",
    heroStatSupport: "Dedicated Engineering Support",

    // Hosting Info
    hostingTitle: "Hosting, Domain & Infrastructure Assistance",
    hostingText: "We assist clients with hosting, domain registration, website migration, business email setup, and infrastructure services through our trusted technology partners. These are presented as optional services only to ensure seamless operations.",

    // Services Overview Section
    servicesSectionTitle: "Our Comprehensive Digital Solutions",
    servicesSectionSubtitle: "A robust nexus combining technical mastery, gorgeous modern interface aesthetics, and premium business strategy.",
    servicesMoreDetails: "View structural inclusions & benefits ↗",

    // Why Choose Us Section
    whyChooseUsTitle: "Why Elite Businesses Partner With Us",
    whyChooseUsSubtitle: "We do not merely build; we design technical roadmaps designed for unmatched scalability and robust defense.",
    whyCard1Title: "Impeccable & Clean System Engineering",
    whyCard1Desc: "Beautifully structured code written for extreme horizontal scalability, keeping maintenance lightweight and robust.",
    whyCard2Title: "Elite & Prestigious Visuals (High-End UX)",
    whyCard2Desc: "Meticulously paced micro-animations and interfaces tailored to leave a lasting, high-prestige branding bookmark.",
    whyCard3Title: "Fortress-Level Cyber Security",
    whyCard3Desc: "End-to-end payload encryption, rigorous validation routines, and cloud protection to mitigate hostile exploits.",
    whyCard4Title: "Seamless Ecosystem Integrations",
    whyCard4Desc: "Prompt and reliable linkage with global payment gateways, shipping APIs, ERP/CRM platforms, and AI vectors.",

    // Process Section
    processTitle: "Our Six-Stage Architectural Roadmap",
    processSubtitle: "A highly systematic execution loop engineered to transform high-level vision into perfect digital solutions.",
    step1Title: "1. Strategy & Market Discovery",
    step1Desc: "In-depth consultative workshops to specify roadmap constraints, target audiences, and commercial goals.",
    step2Title: "2. Cloud Architecture Layout",
    step2Desc: "Crafting structured DB schemas, modeling state progression, and choosing reliable technology protocols.",
    step3Title: "3. High-Fidelity UI/UX Prototyping",
    step3Desc: "Producing cinematic, gorgeous interactive layouts incorporating customized responsive states.",
    step4Title: "4. Rigid Full-Stack Development",
    step4Desc: "Writing flawless modern code powered by leading frontend frameworks and fast, robust backend APIs.",
    step5Title: "5. Robust QA & Security Hardening",
    step5Desc: "Exhaustive automated integration suites combined with manual compliance passes for absolute protection.",
    step6Title: "6. Production Rollout & Growth Optimization",
    step6Desc: "Orchestrated server handovers paired with Cloudflare CDN routing and post-live analytics analysis.",

    // Testimonials
    testimonialsTitle: "Praise From Industry Directors & Founders",
    testimonialsSubtitle: "Discover how we transformed operations, expanded brand equity, and catalyzed transactional volumes.",

    // FAQ Section
    faqTitle: "Technical FAQs & Architectural Guidelines",
    faqSubtitle: "Answering critical inquiries regarding codebase handbacks, operational milestones, and standard service expectations.",
    faqQ1: "Where are the systems and platforms hosted after launch?",
    faqA1: "We deploy systems to robust cloud infrastructure such as AWS, Google Cloud, or Vercel. We configure automated CDN caching through Cloudflare and SSL certificates, fully protected from DDoS attacks for free.",
    faqQ2: "Do we receive full ownership and root codebase assets?",
    faqA2: "Yes, absolutely. Once final deliverables are approved and settled, we officially transfer 100% intellectual property, clean source code files, and build environment configurations to your company.",
    faqQ3: "How is security and page speed performance certified?",
    faqA3: "Our systems align directly with OWASP guidelines and are stress-tested for ultra-high traffic load concurrency. We guarantee page delivery rates with Lighthouse performance metrics scoring above 95%.",

    // Trust Elements
    securityStandards: "International Security Compliances (PCI-DSS, ISO 27001, & full GDPR regulatory alignment)",
    awardsWon: "Honored with Best Digital Craft and Outstanding Design Innovation Awards in 2025/2026",

    // Pricing Page
    pricingTitle: "Clear, High-Value Engineering Packages",
    pricingSubtitle: "Select the optimal tier for your venture, or speak with our directors to forge a custom enterprise agreement.",
    monthly: "Monthly",
    oneTime: "One-Time",
    billedMonthly: "Invoiced as an all-inclusive ongoing platform agreement including continuous patches, updates and priority support.",
    billedOneTime: "A one-time structural investment, including standard handover, 1-year stability warranty and full source code files.",
    currencyText: "Detected Currency:",
    selectCountry: "Manually Switch Country:",

    // Footer
    footerDesc: "Designing and developing the most high-performance digital architectures in the world. Your portal to advanced software supremacy.",
    footerNewsletterTitle: "Subscribe to Intel Reports",
    footerNewsletterPlaceholder: "Enter your professional email",
    footerCopyright: "© 2026 VENTARIA. All engineering and intellectual assets are reserved."
  }
};
