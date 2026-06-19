import { PortfolioProject, CaseStudy, BlogPost } from '../types';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "p1",
    title: "Vespera - Luxury Fashion eCommerce",
    titleAr: "فيسبرا - متجر التجارة الإلكترونية الفاخر للأزياء",
    category: "eCommerce Stores",
    categoryAr: "متاجر إلكترونية",
    description: "Next-generation headless commerce platform engineered with incremental server regeneration and robust responsive fluid mechanics.",
    descriptionAr: "منصة تجارة إلكترونية متكاملة بدون رأس (Headless CRM) مطورة بتقنيات خوادم سرعة عالية وضغط صور رائع لتجربة فائقة الفخامة.",
    metrics: [{ label: "CTR", value: "+44%" }, { label: "Speed Index", value: "0.4s" }, { label: "Tech Rank", value: "Gold" }],
    tech: ["Next.js", "GraphQL", "Tailwind CSS", "PostgreSQL", "Stripe"],
    image: "https://picsum.photos/seed/luxurystore/800/600",
    beforeImage: "https://picsum.photos/seed/oldstore/800/600?grayscale=1",
    afterImage: "https://picsum.photos/seed/luxurystore/800/600"
  },
  {
    id: "p2",
    title: "Apex Core - SaaS Analytics Dashboard",
    titleAr: "أبيكس كور - لوحة تحليلات نظم برمجيات السحاب",
    category: "SaaS Platforms",
    categoryAr: "أنظمة برمجية سحابية",
    description: "A real-time metrics telemetry visualizer handling millions of event pipelines per second with beautiful WebGL rendering layers.",
    descriptionAr: "واجهة مرئية لرصد البيانات والملفات والعمليات الحوسبية السحابية بدقة عالية وأداء معالج رسومات ممتاز.",
    metrics: [{ label: "Data Pipeline", value: "2M/s" }, { label: "CPU Usage", value: "-15%" }],
    tech: ["React", "D3.js", "NestJS", "MongoDB", "Kubernetes"],
    image: "https://picsum.photos/seed/dashboardanalytics/800/600"
  },
  {
    id: "p3",
    title: "Al-Anbaa - Headless News Portal",
    titleAr: "بوابة الأنباء - منصة إخبارية غامرة فائقة السرعة",
    category: "News Websites",
    categoryAr: "مواقع ومنصات إخبارية",
    description: "Multi-tenant news publisher serving millions of daily visitors, synchronized on global edge servers with cloud-safe load balancers.",
    descriptionAr: "بوابة صحفية مجهزة لملايين الزيارات اليومية مع توزيع فوري للمحتوى وعمر بطارية فائق التوفير لقارئي الهواتف.",
    metrics: [{ label: "Lighthouse", value: "99%" }, { label: "Concurrent", value: "40k" }],
    tech: ["React Pages", "GraphQL", "Node.js", "Redis", "Cloudflare DNS"],
    image: "https://picsum.photos/seed/newsportal/800/600"
  },
  {
    id: "p4",
    title: "Elysian - High-End Real Estate",
    titleAr: "إليزيان - منصة العقارات الراقية وتصفح المشاريع",
    category: "Real Estate",
    categoryAr: "العقارات والمشاريع",
    description: "Interactive real estate application with custom SVG floor maps and seamless multi-channel broker synchronization pipelines.",
    descriptionAr: "تطبيق عقاري غامر يدعم الخرائط الهندسية التفاعلية والمزامنة المباشرة مع شركات الوساطة والمطورين العقاريين.",
    metrics: [{ label: "Conversions", value: "+32%" }, { label: "Inquiries", value: "3x" }],
    tech: ["Vite", "TypeScript", "Larvel API", "MySQL", "Google Maps"],
    image: "https://picsum.photos/seed/realestateestate/800/600"
  },
  {
    id: "p5",
    title: "MedLink - Modern Telehealth Suite",
    titleAr: "ميدلينك - النظام الطبي المتكامل للرعاية عن بعد",
    category: "Healthcare",
    categoryAr: "الرعاية الصحية والطب",
    description: "HIPAA-compliant healthcare workflow scheduler with custom end-to-end encrypted video streaming gateways.",
    descriptionAr: "نظام جدولة وحجز العيادات الطبية المشفر والمتوافق مع معايير الأمان العالمية لحقوق المريض وسرية الملفات الطبية.",
    metrics: [{ label: "Security Pass", value: "100%" }, { label: "Wait Time", value: "4m" }],
    tech: ["React", "TypeScript", "Node.js", "WebRTC", "PostgreSQL"],
    image: "https://picsum.photos/seed/telehealth/800/600"
  },
  {
    id: "p6",
    title: "Kayan - Corporate Enterprise Network",
    titleAr: "كيان - البوابة الرقمية للمؤسسة القابضة الكبرى",
    category: "Corporate Websites",
    categoryAr: "مواقع شركات ومؤسسات",
    description: "High-contrast custom portal for Saudi holdings, including multi-lingual compliance documents and automated job matching engines.",
    descriptionAr: "موقع تعريفي ونظام أعمال ضخم للمؤسسات الاستثمارية الكبرى في منطقة الخليج مجهز بطلبات التوظيف والتقييم الآلي.",
    metrics: [{ label: "Page Speed", value: "0.5s" }, { label: "Downloads", value: "50k/mo" }],
    tech: ["React SPA", "Tailwind CSS", "Laravel", "MySQL"],
    image: "https://picsum.photos/seed/corporatenet/800/600"
  },
  {
    id: "p7",
    title: "LearnGrid - Interactive LMS Hub",
    titleAr: "ليرن غريد - المنصة التعليمية الذكية للجامعات",
    category: "Education",
    categoryAr: "منصات تعليمية",
    description: "A comprehensive e-learning management system with integrated virtual lessons, interactive student quizzes, and video engines.",
    descriptionAr: "منصة تعليمية متكاملة تدعم الفصول الافتراضية، تتبع تقدم الطلاب التلقائي وإدارة المحاضرات المسجلة.",
    metrics: [{ label: "Active Students", value: "120k" }, { label: "Retention", value: "+60%" }],
    tech: ["Next.js", "Node.js", "MongoDB", "Express", "Vimeo Engine"],
    image: "https://picsum.photos/seed/learningspaces/800/600"
  },
  {
    id: "p8",
    title: "Gusto - Premium Restaurant Network",
    titleAr: "غوستو - نظام طلب المأكولات وحجز الطاولات",
    category: "Restaurants",
    categoryAr: "المطاعم والضيافة",
    description: "A fast multi-branch digital menu and kitchen order tracking application with instantaneous updates and localized tax invoicing.",
    descriptionAr: "تطبيق لطلب الوجبات فوري، مع لوحة تتبع مخصصة للمطابخ وسرعة تفاعل تناسب تشغيل ساعات الذروة.",
    metrics: [{ label: "Order Time", value: "-12m" }, { label: "Revenue Link", value: "+18%" }],
    tech: ["React Mobile-First", "Tailwind CSS", "Firebase", "WhatsApp API"],
    image: "https://picsum.photos/seed/diningrestaurant/800/600"
  },
  {
    id: "p9",
    title: "Veloce - Automobile Customizer",
    titleAr: "فيلوتشي - نظام تخصيص وحجز السيارات الفارهة",
    category: "Booking Systems",
    categoryAr: "أنظمة حجز متكاملة",
    description: "Next-gen immersive vehicle configuration and booking engine, featuring real-time dynamic pricing model depending on options.",
    descriptionAr: "بوابة تفاعلية فاخرة لاستعراض وتخصيص مواصفات السيارات الخارقة وحجزها مع حساب الرسوم والجمارك المحلية تلقائياً.",
    metrics: [{ label: "Conversions", value: "2.8x" }, { label: "Load Time", value: "0.8s" }],
    tech: ["Vite SPA", "Three.js Canvas", "Node.js", "Express", "MongoDB"],
    image: "https://picsum.photos/seed/luxurymotors/800/600"
  },
  {
    id: "p10",
    title: "Krypton - High-Converting Landing Flow",
    titleAr: "كريبتون - صفحة هبوط ترويجية عالية التحويل لـ SaaS",
    category: "Landing Pages",
    categoryAr: "صفحات هبوط ترويجية",
    description: "A conversion-optimized single-scroll promotional page featuring advanced glass transitions and localized marketing hooks.",
    descriptionAr: "صفحة هبوط مخصصة للتسويق المباشر تمتاز بأعلى معدلات التحويل ومؤثرات حركية فائقة التجاوب.",
    metrics: [{ label: "Conversion Rate", value: "11.4%" }, { label: "Bounce Rate", value: "21%" }],
    tech: ["React SPA", "Motion", "Tailwind CSS"],
    image: "https://picsum.photos/seed/conversionlanding/800/600"
  },
  // Adding remaining 20 mock items to reach easily 30 items for portfolio as explicitly requested
  {
    id: "p11",
    title: "Al-Riyadh Delivery - Logistics Hub",
    titleAr: "الرياض إكسبريس - نظام النقل والخدمات اللوجستية",
    category: "Booking Systems",
    categoryAr: "أنظمة حجز متكاملة",
    description: "Geolocated courier tracking pipeline with custom path calculators for enterprise delivery networks.",
    descriptionAr: "بوابات تتبع وتسجيل الشحنات والطرود اللوجستية محلياً مع حساب المسافة ومصاريف البنزين تلقائياً.",
    metrics: [{ label: "On-time", value: "99.2%" }, { label: "Active Drivers", value: "450" }],
    tech: ["Next.js", "PostgreSQL", "Google Maps Platform"],
    image: "https://picsum.photos/seed/deliveryhub/800/600"
  },
  {
    id: "p12",
    title: "Bazar Enterprise - Multi-vendor Marketplace",
    titleAr: "بازار - سوق إلكتروني ضخم متعدد التجار",
    category: "eCommerce Stores",
    categoryAr: "متاجر إلكترونية",
    description: "Enterprise marketplace supporting thousand vendors, distinct wallets, and split-routing Stripe payment processes.",
    descriptionAr: "منصة تجارية تتيح لآلاف التجار البيع مع إدارة المحافظ الرقمية وتوزيع الأرباح والعمولات آلياً.",
    metrics: [{ label: "Sellers", value: "3,200+" }, { label: "GMV Lift", value: "+340%" }],
    tech: ["Next.js", "GraphQL", "NestJS", "PostgreSQL", "Redis"],
    image: "https://picsum.photos/seed/marketplace/800/600"
  },
  {
    id: "p13",
    title: "Aether - Minimalist Architecture Portfolio",
    titleAr: "إيثر - معرض أعمال مهندسي الديكور والعمارة",
    category: "Corporate Websites",
    categoryAr: "مواقع شركات ومؤسسات",
    description: "Stunning ultra-high definition image layout for high-end boutique interior designers based in Cairo and Dubai.",
    descriptionAr: "واجهة فائقة الفخامة تلائم كبار مكاتب الديكور والاستشارات المعمارية واللقطات الحركية السلسة.",
    metrics: [{ label: "Awards Winner", value: "2025" }, { label: "Page weight", value: "1.1MB" }],
    tech: ["Vite", "Motion CSS", "Tailwind"],
    image: "https://picsum.photos/seed/architecture/800/600"
  },
  {
    id: "p14",
    title: "HealthSphere - Custom Clinic ERP",
    titleAr: "هيلث سفير - نظام تشغيل وإدارة المستشفيات الخاص",
    category: "Healthcare",
    categoryAr: "الرعاية الصحية والطب",
    description: "Advanced EHR dashboard managing clinical operations, inventory, and automated billing generation cycles.",
    descriptionAr: "برنامج ERP داخلي لتسجيل المرضى، تتبع المخزون الطبي، وإصدار الفواتير الضريبية المتوافقة.",
    metrics: [{ label: "Efficiency", value: "+38%" }, { label: "Saves", value: "$45k/yr" }],
    tech: ["React SPA", "Node.js", "Express", "MongoDB"],
    image: "https://picsum.photos/seed/clinicERP/800/600"
  },
  {
    id: "p15",
    title: "Sahel Homes - Real Estate Portal",
    titleAr: "عقارات الساحل - حجز شاليهات وفلل الساحل الشمالي",
    category: "Real Estate",
    categoryAr: "العقارات والمشاريع",
    description: "Vacation listing portal optimized for peak summer booking spikes with instant SMS notifications.",
    descriptionAr: "بوابة لحجز المصايف الفاخرة تتميز بسرعة فائقة في التصفح واستلام رسائل الإشعار النصية الفورية.",
    metrics: [{ label: "Bookings booked", value: "+150%" }, { label: "Load Time", value: "0.3s" }],
    tech: ["Next.js 14", "Tailwind CSS", "MySQL Hub"],
    image: "https://picsum.photos/seed/northcoast/800/600"
  },
  {
    id: "p16",
    title: "Academia.io - Online Tutoring Network",
    titleAr: "أكاديميا - منصة ربط المعلمين بالطلبة والدروس",
    category: "Education",
    categoryAr: "منصات تعليمية",
    description: "Educational booking engine bringing virtual tutoring classes and schedules to life.",
    descriptionAr: "برنامج تعليمي لربط الطلاب بالمدرسين الخصوصيين وحجز حصص الزوم وتقييم المعلم الفوري.",
    metrics: [{ label: "Active Tutors", value: "820" }, { label: "Lessons Held", value: "24k" }],
    tech: ["React", "Express", "PostgreSQL", "Zoom API"],
    image: "https://picsum.photos/seed/tutors/800/600"
  },
  {
    id: "p17",
    title: "Burger Capital - Mobile Food Tracker",
    titleAr: "برجر كابيتال - تطبيق طلب الوجبات الفورية",
    category: "Restaurants",
    categoryAr: "المطاعم والضيافة",
    description: "High-adrenaline visual order funnel for dynamic urban dining chain with interactive loyalty tier cards.",
    descriptionAr: "كارت رقمي وموقع مبيعات لسلسلة مطاعم برجر شهيرة يدعم ولاء العملاء وتجميع النقاط والمكافآت.",
    metrics: [{ label: "Loyalty Signups", value: "+54%" }, { label: "Mobile Bounce", value: "-30%" }],
    tech: ["Vite SPA", "Tailwind", "Firebase App"],
    image: "https://picsum.photos/seed/burger/800/600"
  },
  {
    id: "p18",
    title: "Nova CRM - Client Relationship Engine",
    titleAr: "نوفا CRM - نظام إدارة علاقات العملاء الذكي",
    category: "SaaS Platforms",
    categoryAr: "أنظمة برمجية سحابية",
    description: "Intuitive customer system designed for visual pipeline tracking state, custom lead scoring profiles.",
    descriptionAr: "برنامج سحابي متطور لتسجيل ورعاية العملاء المحتملين وتتبع الصفقات البيعية مع فلترة متقدمة.",
    metrics: [{ label: "Lead Close", value: "+22%" }, { label: "Data Index", value: "Instant" }],
    tech: ["Next.js", "NestJS Backend", "TypeScript", "PostgreSQL"],
    image: "https://picsum.photos/seed/novacrm/800/600"
  },
  {
    id: "p19",
    title: "EcoInvo - Green Invoicing System",
    titleAr: "إيكو إنفو - الفواتير الإلكترونية المعتمدة للشركات",
    category: "SaaS Platforms",
    categoryAr: "أنظمة برمجية سحابية",
    description: "ZATCA compliant fully certified automated business billing pipeline for corporate accounting departments.",
    descriptionAr: "نظام الفوترة الإلكترونية السحابي المعتمد من هيئات الزكاة والضرائب لخدمة الشركات والمؤسسات الكبرى.",
    metrics: [{ label: "ZATCA Pass", value: "100%" }, { label: "Invoices Filed", value: "300k" }],
    tech: ["React App", "Django REST API", "PostgreSQL", "Krypton Auth"],
    image: "https://picsum.photos/seed/invoiceZatca/800/600"
  },
  {
    id: "p20",
    title: "Scribe - Premium Arabic Headless CMS",
    titleAr: "سكرايب - نظام إدارة المحتوى الرقمي الفاخر",
    category: "News Websites",
    categoryAr: "مواقع ومنصات إخبارية",
    description: "A custom highly optimized Arabic-centric publishing database utilizing complex caching schemas.",
    descriptionAr: "نظام تدوين ونشر مقالات ومجلات رقمية يركز على تيسير الكتابة وقراءة المقالات بدون بطء.",
    metrics: [{ label: "Lighthouse SEO", value: "100%" }, { label: "Cached Speed", value: "45ms" }],
    tech: ["React SPA", "TypeScript", "Node.js", "Cloudflare KV"],
    image: "https://picsum.photos/seed/headlesscms/800/600"
  },
  {
    id: "p21",
    title: "Orbit ERP - Manufacturing Planner",
    titleAr: "أوربيت ERP - برنامج تخطيط وإدارة المصانع والموارد",
    category: "SaaS Platforms",
    categoryAr: "أنظمة برمجية سحابية",
    description: "Comprehensive warehouse and manufacturing scheduling terminal designed for heavy industrial operations.",
    descriptionAr: "حزمة برمجية متكاملة لربط خطوط إنتاج المصانع بإدارة المستودعات، الشحن والتحصيل المالي.",
    metrics: [{ label: "Error Rate", value: "-45%" }, { label: "OEE Score", value: "+18%" }],
    tech: ["React", "Express Hub", "MySQL", "Docker Containers"],
    image: "https://picsum.photos/seed/factoryerp/800/600"
  },
  {
    id: "p22",
    title: "Bloom - High-End Floral Marketplace",
    titleAr: "بلوم - متجر حجز الهدايا الراقية والورود",
    category: "eCommerce Stores",
    categoryAr: "متاجر إلكترونية",
    description: "Immersive luxury florist ordering platform integrated with live calendar selection, fast courier system.",
    descriptionAr: "متجر ورود وهدايا فخم يوفر إمكانية جدولة مواعيد التوصيل وحالة الشحنة بالخريطة الحية.",
    metrics: [{ label: "Cart Abandon", value: "-14%" }, { label: "Ratings", value: "4.9/5" }],
    tech: ["Vite", "Tailwind CSS", "Laravel", "MySQL"],
    image: "https://picsum.photos/seed/floriststore/800/600"
  },
  {
    id: "p23",
    title: "Boudl - Luxury Hotel Booking Suite",
    titleAr: "بودل - تطبيق ونظام حجز الأجنحة الفندقية المتميزة",
    category: "Booking Systems",
    categoryAr: "أنظمة حجز متكاملة",
    description: "Direct-to-room electronic keys and billing integration engine for high-end boutique hospitality groups.",
    descriptionAr: "نظام مخصص للفنادق والمنتجعات الفاخرة للتحكم في الحجوزات، تسعير الغرف الديناميكي وبوابة الخروج.",
    metrics: [{ label: "Direct Book", value: "+40%" }, { label: "Integration", value: "Fidelio Pass" }],
    tech: ["Next.js", "GraphQL API", "PostgreSQL", "Cloudflare Shield"],
    image: "https://picsum.photos/seed/hotelbooking/800/600"
  },
  {
    id: "p24",
    title: "Medina Estate - Off-Plan Property App",
    titleAr: "عقارات المدينة - منصة حجز الوحدات قيد الإنشاء",
    category: "Real Estate",
    categoryAr: "العقارات والمشاريع",
    description: "High-definition architectural rendering viewer and investor direct unit locking engine.",
    descriptionAr: "نظام تفاعلي للمستثمرين لاستكشاف المخططات العقارية وحجز الوحدات وتوقيع العقود رقمياً.",
    metrics: [{ label: "Sold rate", value: "3.2x" }, { label: "Signatures", value: "Legal E-sign" }],
    tech: ["React", "Node.js", "DocuSign API", "PostgreSQL"],
    image: "https://picsum.photos/seed/medinaestate/800/600"
  },
  {
    id: "p25",
    title: "Cairo SEO - Automated Traffic Engine",
    titleAr: "كايرو SEO - لوحة فحص وتهيئة محركات البحث التلقائية",
    category: "Landing Pages",
    categoryAr: "صفحات هبوط ترويجية",
    description: "SEO optimized and responsive landing funnel targeting enterprise translation services with high efficiency.",
    descriptionAr: "صفحة تسويق وهبوط تركز على تصدر نتائج جوجل وجلب العملاء عبر السيو التقني المطلي بالذهب.",
    metrics: [{ label: "Google Rank", value: "Top 3" }, { label: "Leads/mo", value: "+420" }],
    tech: ["React", "Custom SSR SEO Engine"],
    image: "https://picsum.photos/seed/seoflow/800/600"
  },
  {
    id: "p26",
    title: "Zenith - Premium Fitness Web App",
    titleAr: "زينيث - تطبيق لياقة بدنية وتدريب شخصي مخصص",
    category: "Booking Systems",
    categoryAr: "أنظمة حجز متكاملة",
    description: "Dynamic video player custom calendar platform for elite personalized fitness coaches globally.",
    descriptionAr: "موقع تفاعلي لجدولة تمرينات المشتركين ومقاطع فيديو عالية الجودة مع بوابة دفع اشتراكات تلقائية.",
    metrics: [{ label: "Subscriptions", value: "12k+" }, { label: "Stream Quality", value: "4K HDR" }],
    tech: ["Next.js", "Firebase Auth", "PostgreSQL"],
    image: "https://picsum.photos/seed/fitnessapp/800/600"
  },
  {
    id: "p27",
    title: "Nourish - Luxury Catering Dashboard",
    titleAr: "نوريش - نظام تخطيط الوجبات الشهرية للاشتراكات",
    category: "Restaurants",
    categoryAr: "المطاعم والضيافة",
    description: "Premium subscription catering service tracker with nutrition calculator modules, dynamic delivery routes.",
    descriptionAr: "منصة لإدارة وتوريد اشتراكات الطعام وجداول السعرات الحرارية وربطها بسائقين التوصيل يومياً.",
    metrics: [{ label: "Loyal Clients", value: "1.8K" }, { label: "Fulfillment", value: "99.8%" }],
    tech: ["Vite SPA", "Node", "PostgreSQL", "Google Maps Matrix"],
    image: "https://picsum.photos/seed/catering/800/600"
  },
  {
    id: "p28",
    title: "Al-Azhar Bookings - Event Coordinator",
    titleAr: "بوابات الأزهر - نظام جدولة وتذاكر قاعات المناسبات",
    category: "Booking Systems",
    categoryAr: "أنظمة حجز متكاملة",
    description: "High volume seating booking and check-in portal utilizing fast QR code scanner technology.",
    descriptionAr: "بوابة حجز قاعات المؤتمرات والفعاليات ودفع التذاكر رقمياً مع توليد باركود الدخول التمريري.",
    metrics: [{ label: "Tickets sold", value: "250k" }, { label: "Scan Speed", value: "0.2s" }],
    tech: ["React Mobile SPA", "NestJS Backend", "PostgreSQL"],
    image: "https://picsum.photos/seed/eventsseating/800/600"
  },
  {
    id: "p29",
    title: "Al-Mansoura Hospital - Portal",
    titleAr: "بوابة المنصورة الطبية - تواصل الطاقم وحجوزات المرضى",
    category: "Healthcare",
    categoryAr: "الرعاية الصحية والطب",
    description: "Patient appointment booking, electronic health records access and prescription sync system.",
    descriptionAr: "منصة طبية لحجز المواعيد واستلام الفحوصات والوصفات الطبية بشكل رقمي يغني عن الورق.",
    metrics: [{ label: "Patient Flow", value: "+54%" }, { label: "Paper Saved", value: "100%" }],
    tech: ["React SPA", "Node.js", "PostgreSQL"],
    image: "https://picsum.photos/seed/hospital/800/600"
  },
  {
    id: "p30",
    title: "Cleopatra - Luxury Jewelry eCommerce",
    titleAr: "كليوباترا - منصة التجارة الفاخرة للذهب والمجوهرات",
    category: "eCommerce Stores",
    categoryAr: "متاجر إلكترونية",
    description: "Next-generation luxurious shop with interactive virtual try-on technology, military secure payments.",
    descriptionAr: "متجر مجوهرات وقطع ثمينة فاخر يوفر أعلى معايير أمان الدفع الإلكتروني وتفقد جودة الأحجار الكريمة.",
    metrics: [{ label: "Avg order value", value: "$4.5K" }, { label: "Conversion Lift", value: "2.4x" }],
    tech: ["Next.js", "NestJS API", "PostgreSQL", "Tailwind CSS"],
    image: "https://picsum.photos/seed/jewelrystore/800/600"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    client: "Emaar Gulf Holding",
    clientAr: "إعمار القابضة للخليج",
    industry: "Real Estate & Architecture",
    industryAr: "العقارات والاستثمار",
    challenge: "Managing thousands of premium luxury villa requests across GCC without integrated CRM, resulting in massive response latency.",
    challengeAr: "إدارة آلاف الطلبات لشراء الشقق والفلل الفاخرة عبر دول الخليج دون نظام CRM ذكي متكامل، مما سبب تأخراً كبيراً في خدمة العملاء ومبيعات مفقودة.",
    solution: "We deployed a dedicated Next.js client-facing web application syncing instantly with a tailored NestJS core system on top of active AWS clusters, integrating automatic broker leads assignment and interactive SVG layout mapping.",
    solutionAr: "قمنا بتطوير منصة تصفح متكاملة تفاعلية مبنية بتقنية Next.js متصلة آلياً بخوادم NestJS وبنية سحابية مرنة على خوادم AWS، تدعم توزيع العملاء تلقائياً على الوكلاء العقاريين والخرائط الهندسية الحية.",
    results: [
      "Reduced client query response time from 18 hours to less than 2 minutes",
      "Increased booking closure rates by 48% across Riyadh and Dubai branches",
      "Achieved 100% data compliance safety cert under standard GDPR/Saudi regulations"
    ],
    resultsAr: [
      "خُفض وقت الاستجابة لاستفسارات العملاء من ١٨ ساعة إلى دقيقتين فقط بفضل الأتمتة.",
      "ارتفعت مبيعات الحجوزات العقارية المؤكدة بمعدل ٤٨% في فروع الرياض ودبي.",
      "الامتثال لمعايير حماية البيانات والأمن السيبراني بنسبة ١٠٠% بالكامل."
    ],
    metrics: [
      { label: "Response Time", labelAr: "سرعة الرد", value: "<2m" },
      { label: "Sales Lift", labelAr: "نمو المبيعات", value: "+48%" },
      { label: "Conversion Rate", labelAr: "معدل التحويل", value: "8.4%" }
    ],
    technologies: ["Next.js", "NestJS", "AWS Fargate", "PostgreSQL", "Google Maps"],
    image: "https://picsum.photos/seed/emaarcasestudy/800/450"
  },
  {
    id: "cs2",
    client: "Saudi Food Solutions (SFS)",
    clientAr: "الحلول الغذائية السعودية",
    industry: "Logistics & Food Outlets",
    industryAr: "المطاعم والخدمات الغذائية",
    challenge: "Handling peak ordering times during massive national campaigns with extreme server slowdowns and order loss on legacy platforms.",
    challengeAr: "انهيار خوادم المبيعات القديمة خلال فترات الذروة واحتفالات اليوم الوطني وضياع أكثر من ٢٠% من طلبات الطعام السريعة قبل معالجتها للعميل.",
    solution: "Built a fully reactive mobile-focused React Web Application backed by optimized Redis cache pipelines, Node.js queue processing, clustering, and dynamic Cloudflare fallback routing.",
    solutionAr: "أعدنا كتابة وهندسة النظام وبنينا تطبيقاً فائق التجاوب والتصميم للجوال مدعماً بـ Redis كاش، وقوائم معالجة الأحداث السريعة في Node.js، وحماية Cloudflare.",
    results: [
      "Zero server down-time reported over peak hours during high national campaign seasons",
      "Processed 150,000 orders daily without single drop or bottleneck",
      "Order processing time optimized, slashing preparation queues by 35%"
    ],
    resultsAr: [
      "صفر انقطاع في الخدمة أو تباطؤ في الخوادم طوال موسم حملة اليوم الوطني.",
      "معالجة أكثر من ١٥٠,٠٠٠ طلب بشكل يومي بنجاح تام ودون أي خسائر.",
      "توفير ٣٥% من وقت الطهاة وتجهيز الوجبة بفضل الذكاء التوزيعي للطلبات."
    ],
    metrics: [
      { label: "Daily Transactions", labelAr: "التحويلات اليومية", value: "150k+" },
      { label: "Server Uptime", labelAr: "استمرارية التشغيل", value: "99.99%" },
      { label: "Preparation Queue", labelAr: "قائمة التجهيز", value: "-35%" }
    ],
    technologies: ["React", "Node.js", "Redis", "MongoDB", "Cloudflare Load Balancing"],
    image: "https://picsum.photos/seed/cateringcasestudy/800/450"
  },
  {
    id: "cs3",
    client: "Cairo Learn Group",
    clientAr: "مجموعة كايرو ليرن التعليمية",
    industry: "Education & EdTech",
    industryAr: "التعليم التفاعلي عن بعد",
    challenge: "Legacy LMS could not support stable high-bandwidth live video streaming interfaces for 50,000+ interactive online students simultaneously.",
    challengeAr: "عجز نظام التعليم القديم لديهم عن بث محاضرات فيديو حية مستقرة وعالية الجودة وتلقي واقتسام غرف المحادثات لأكثر من ٥٠ ألف طالب في نفس اللحظة.",
    solution: "Engineered customized virtual classroom platform powered by WebRTC clusters, serverless WebSockets, fast CDN storage caching layered on top of edge network infrastructures.",
    solutionAr: "صممنا نظاماً دراسياً مبتكراً يعتمد على مجموعات WebRTC الموزعة وألياف WebSockets السحابية غير المركزية وخوادم النشر العالمية لتسريع بث الفيديو.",
    results: [
      "Supported 55k concurrent active interactive students stream without visual freeze",
      "Saved the organization 65% in cloud server costs via adaptive bitrate streaming algorithms",
      "Student completion metric grew, lifting direct institutional renewal revenues by 70%"
    ],
    resultsAr: [
      "استيعاب ٥٥,٠٠٠ طالب متفاعل حياً في نفس الوقت وبدون تقطيع للفارغ البصري.",
      "توفير ٦٥% من تكاليف الاستضافة السحابية بفضل تقنيات الضغط والتحكم الديناميكي بالبث.",
      "ارتفع معدل تجديد الاشتراكات السنوية للتعليم بنسبة ٧٠% بفضل الرضا الفني."
    ],
    metrics: [
      { label: "Concurrent Viewers", labelAr: "المشاهدين معاً", value: "55k" },
      { label: "Cost Savings", labelAr: "توفير التكاليف", value: "65%" },
      { label: "Renewal Revenue", labelAr: "الإيرادات الإضافية", value: "+70%" }
    ],
    technologies: ["React SPA", "Node.js", "WebRTC", "PostgreSQL", "Cloudflare Stream"],
    image: "https://picsum.photos/seed/edutechcasestudy/800/450"
  },
  {
    id: "cs4",
    client: "Medica Global Health",
    clientAr: "ميديكا العالمية للرعاية",
    industry: "Healthcare & HIPAA Systems",
    industryAr: "الرعاية الصحية والحلول الطبية",
    challenge: "Complex, slow patient scheduling and unencrypted patient medical report storage that failed regional data privacy regulations.",
    challengeAr: "بطء شديد في جدولة وفهرسة المواعيد الطبية وتخزين التقارير دون غطاء تشفير كافٍ، مما عرض المستشفى لمخالفة لوائح الخصوصية الصحية.",
    solution: "Designed and implemented an elegant patient terminal featuring complete AES-256 payload encryption and an interactive fluid booking cal.",
    solutionAr: " قمنا ببرمجة بوابة للمرضى والأطباء غاية في التقدم تستعمل تشفير الحماية AES-256 المتطور مع واجهة حجز فائقة السهولة والسرعة.",
    results: [
      "Achieved 100% regulatory compliance validation with full audit credentials first pass",
      "Reduced nurse scheduling and administrative paperwork burden by 50%",
      "Client retention and re-booking metric lifted significantly over 6-month launch window"
    ],
    resultsAr: [
      "الحصول على شهادة الامتثال لمعايير السرية والصحة الرقمية وبنسبة ١٠٠% محلياً وعالمياً.",
      "تخفيض الأعمال الإدارية والورقية للممرضات ومنسقي المرضى بمعدل النصف (٥٠%).",
      "ارتفاع قياسي في وعي وحجوزات المتابعة للمرضى الجدد والمستمرين."
    ],
    metrics: [
      { label: "Security Audit", labelAr: "تدقيق الحماية", value: "100% PASS" },
      { label: "Admin Workload", labelAr: "العمل الإداري", value: "-50%" },
      { label: "Retention Rate", labelAr: "الاستبقاء والولاء", value: "+45%" }
    ],
    technologies: ["Vite React", "TypeScript", "Node.js", "AES-256 Security", "PostgreSQL"],
    image: "https://picsum.photos/seed/medica_case/800/450"
  },
  {
    id: "cs5",
    client: "Bazar Online Retailers",
    clientAr: "بازار للتجزئة والإلكترونيات",
    industry: "eCommerce Marketplace",
    industryAr: "المنصات التجارية الكبرى",
    challenge: "Losing 60% of prospective clients during long check-out flows and page load durations exceeding 4.5 seconds on generic PHP platforms.",
    challengeAr: "خسارة أكثر من ٦٠% من زوار المتجر في مرحلة الدفع والإنهاء بسبب بطء استجابة السلة وتحميل الصور وللبطء العام للمتجر (٤.٥ ثانية للتحميل).",
    solution: "Refactored checkout flow entirely into Next.js edge static pre-rendering, lazy asset queries, and multi-channel instant payments.",
    solutionAr: "أعدنا بناء منصة الدفع والسلة في جيل واعد وبسرعة فائقة (Next.js Edge) مع كاش ذكي لصور السلع وعقود الحماية المشفرة.",
    results: [
      "Lighthouse Performance score soared to solid 98% with absolute page load of 0.5s",
      "Decreased shopping cart abandonment rates by 55%, capturing major lost sales",
      "Lifted overall sales order revenues by 64% in the first quarter post-launch"
    ],
    resultsAr: [
      "ارتفاع سرعة التحميل إلى ٠.٥ ثانية وسجل المتجر ٩٨% على مؤشر Lighthouse لسرعة جوجل.",
      "تراجع معدل ترك السلال بنسبة ٥٥%، مما استرجع آلاف المبيعات الضائعة.",
      "زيادة إجمالية قياسية في أرباح المبيعات المحققة بنسبة ٦٤% في الربع الأول."
    ],
    metrics: [
      { label: "Page Load Time", labelAr: "سرعة تحميل الصفحة", value: "0.5s" },
      { label: "Cart Abandonment", labelAr: "ترك السلة المفقودة", value: "-55%" },
      { label: "Sales Revenue Increase", labelAr: "نمو الإيرادات", value: "+64%" }
    ],
    technologies: ["Next.js", "Stripe API", "Node.js", "MySQL", "Tailwind CSS"],
    image: "https://picsum.photos/seed/market_case/800/450"
  },
  // We add up to 10 case study placeholders as explicitly requested
  {
    id: "cs6",
    client: "Riyadh Logistics Group",
    clientAr: "مجموعة الرياض للنقل واللوجستيات",
    industry: "Logistics SaaS Platform",
    industryAr: "الشحن والنقل اللوجستي",
    challenge: "Inability to assign multi-fleet driver dispatch schedules organically, causing route overlapping and delayed delivery statuses.",
    challengeAr: "عشوائية وصعوبة في توجيه وإرسال السائقين لنقاط الشحن والتوزيع محلياً، مما أثر على الجودة وأداء الشحن وتكلفة البنزين المرتفعة.",
    solution: "Engineered customized vehicle tracking engine dashboard utilizing Google Maps API matrix coordinates and Node dispatcher algorithms.",
    solutionAr: "صممنا لوحة أتمتة وتوجيه تعتمد على خرائط جوجل وحساب أقصر المسارات آلياً لتقييد الاختناقات المرورية.",
    results: [
      "Total fuel and routing operational overhead slashed by 24% globally across KSA",
      "Order on-time deliveries reached all-time high of 99.1%"
    ],
    resultsAr: [
      "توفير ٢٤% من مصاريف الوقود وتكاليف توجيه الشاحنات في المملكة العربية السعودية.",
      "قفزت نسبة الشحن والتوصيل في الموعد المحدد إلى مستوى تاريخي جديد لتبلغ ٩٩.١%."
    ],
    metrics: [
      { label: "Route Cost Saved", labelAr: "ميزانية النقل الموفرة", value: "24%" },
      { label: "On-Time Dispatch", labelAr: "الشحن في الموعد", value: "99.1%" }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Google Maps Platform"],
    image: "https://picsum.photos/seed/logistics_case/800/450"
  },
  {
    id: "cs7",
    client: "Cairo News Corp",
    clientAr: "كايرو نيوز الإخبارية",
    industry: "High-Traffic News Portal",
    industryAr: "الإعلام والبوابات الإخبارية",
    challenge: "Uncontrolled cloud server architecture costs and slow page generation when covering global high-impact breaking news alerts.",
    challengeAr: " تضخم تكاليف الاستضافة السحابية مع بطء تحميل وقراءة الأخبار السياسية الحساسة وقت انتشار تريند الأخبار العاجلة لمئات الآلاف.",
    solution: "Implemented pre-rendered headless CMS architectures distributed directly on Edge networks with Redis cache layer.",
    solutionAr: "قمنا بفصل واجهات القراءة عن نظام التحرير لتعمل الكودات بصفحات خفيفة مستفيدة من توزيع كلاودفلير وسيرفرات إيدج التلقائية.",
    results: [
      "Server bill diminished by 70% while handling 3x concurrent visitors traffic",
      "Google Core Web Vitals score hit green with solid perfect scores on all standards"
    ],
    resultsAr: [
      "توفير ٧٠% من فاتورة خوادم السحاب بالرغم من معالجة ٣ أضعاف الزيارات السابقة.",
      "تخطي جميع شروط تحسين محركات البحث وسرعات جوجل بنجاح باهر."
    ],
    metrics: [
      { label: "Hosting Budget", labelAr: "فاتورة الاستضافة السحابية", value: "-70%" },
      { label: "Speed Index score", labelAr: "مؤشر سرعة التفقد", value: "0.2s" }
    ],
    technologies: ["React SPA", "Node.js", "Redis Cache", "Cloudflare KV"],
    image: "https://picsum.photos/seed/news_case/800/450"
  },
  {
    id: "cs8",
    client: "E-Zakat Finance",
    clientAr: "الزكاة والمال للاستشارات",
    industry: "FinTech Compliance Systems",
    industryAr: "التكنولوجيا المالية الرقمية",
    challenge: "Complex manual validation for corporate tax calculations and lack of secure API protocols for regional banks authorization.",
    challengeAr: " بطء وتكرار الأخطاء البشرية الحسابية لتقدير الزكوات للشركات الكبرى، إضافة لتدني تشفير حماية الربط التلقائي للبنوك الإقليمية.",
    solution: "Constructed military-grade secure financial engine applying absolute double-entry digital ledger verification protocols.",
    solutionAr: " طورنا نظاماً مالياً محكماً وحاسبة لجمع وتقدير التبرعات متوافقة مع لوائح المحاسبة مع نظام تدقيق مالي مزدوج آمن وصارم.",
    results: [
      "100% calculation accuracy ensured, eliminating auditing error liabilities",
      "Handled over $20M financial transactions without a single dispute or leak in year one"
    ],
    resultsAr: [
      "دقة حسابية متقنة بنسبة ١٠٠% وإلغاء الغرامات الضريبية والأخطاء البشرية للشركات.",
      "معالجة عمليات تحصيل مصرفي بقيمة تزيد عن ٢٠ مليون دولار دون نزاع أو تسريب بنك."
    ],
    metrics: [
      { label: "Calculation Accuracy", labelAr: "دقة الحساب", value: "100%" },
      { label: "Volume Handled", labelAr: "حجم الأموال الدائرة", value: "$20M+" }
    ],
    technologies: ["Vite", "NodeJS", "PostgreSQL", "Ledger Engine"],
    image: "https://picsum.photos/seed/fintech_case/800/450"
  },
  {
    id: "cs9",
    client: "Zenith Fitness Brands",
    clientAr: "زينيث العالمية للرياضة",
    industry: "Dynamic Class SaaS Hub",
    industryAr: "الرياضة والأنظمة الرياضية",
    challenge: "High churn rate as users found booking exercises hard, leading to high gym refund rates.",
    challengeAr: "انخفاض تجديد اشتراكات المتدربين وصعوبة متابعة جدول التدريب اليومي مع الكابتن للصالات الرياضية.",
    solution: "Designed and coded an intuitive, dark gamified dashboard layout detailing streaks, video classes scheduler, and goals target.",
    solutionAr: "برمجنا كوداً متكاملاً لإدارة حصص وصالات الألعاب مبنياً على زيادة تحفيز اللاعب بالألقاب والجدولة الديناميكية للمواعيد.",
    results: [
      "Boosted monthly recurring subscription renewals by 42% over 90 days",
      "Refund requests collapsed down to less than 1.5% globally"
    ],
    resultsAr: [
      "زيادة حقيقية في تجديد الاشتراكات بنسبة ٤٢% خلال ثلاثة أشهر من الإطلاق.",
      "انخفاض مطالبات استرجاع الرسوم إلى أقل من ١.٥% للعملاء."
    ],
    metrics: [
      { label: "Subscription Renewal", labelAr: "تجديد الاشتراكات", value: "+42%" },
      { label: "Refund Rate", labelAr: "معدل استرجاع الاشتراكات", value: "<1.5%" }
    ],
    technologies: ["React", "TypeScript", "NodeJS", "Firebase Session"],
    image: "https://picsum.photos/seed/fitness_case/800/450"
  },
  {
    id: "cs10",
    client: "Layan Custom Themes",
    clientAr: "ليان لتصميم وتطوير القوالب",
    industry: "Custom Theme Ecosystems",
    industryAr: "تطوير القوالب المخصصة للتجارة",
    challenge: "Heavy themes made with old systems crashed pages resulting in low conversion metrics.",
    challengeAr: "قوالب ومواقع المتاجر والشركات القديمة ثقيلة جداً وتسبب بطء في تصفح المتايل وعقود البيع الرقمية.",
    solution: "Crafted sleek lightweight custom theme with clean CSS grids and fluid motion effects.",
    solutionAr: "صممت وبرمجت قوالب مصممة خصيصاً خفيفة جداً تضمن أقصى حركات الإثارة والتشويق للمشتري وتصفح رائع.",
    results: [
      "Page size slashed and average customer session time climbed by 85%"
    ],
    resultsAr: [
      "تصغير حجم الصفحات ومضاعفة وقت تواصل وبقاء العميل بالموقع بنسبة ٨٥%."
    ],
    metrics: [
      { label: "Page Weight Reduced", labelAr: "تقليل حجم الصفحات", value: "-60%" },
      { label: "Session Duration", labelAr: "مدة بقاء الزائر بالموقع", value: "+85%" }
    ],
    technologies: ["Next.js", "Tailwind CSS", "Motion", "Vite Optimizer"],
    image: "https://picsum.photos/seed/themes_case/800/450"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "The Ultimate Guide to Headless eCommerce Speed Advantages",
    titleAr: "الدليل الشامل لمزايا سرعة المتاجر الإلكترونية غير المتصلة بالواجهة (Headless eCommerce)",
    excerpt: "Learn how separation of backend inventory APIs from blazing-fast React storefronts can boost overall checkout conversions by 45%.",
    excerptAr: "كيف يساهم فصل واجهات الشراء عن قواعد البيانات والـ APIs في مضاعفة مبيعات متجرك الإلكتروني وتحميل الصفحة في لمح البصر.",
    category: "eCommerce",
    categoryAr: "تجارة إلكترونية",
    date: "June 15, 2026",
    readTime: "5 mins read",
    readTimeAr: "قراءة ٥ دقائق",
    image: "https://picsum.photos/seed/blog1/800/500"
  },
  {
    id: "b2",
    title: "Why Saudi Enterprises are migrating to Specialized Custom ERPs",
    titleAr: "لماذا تهاجر الشركات السعودية الكبرى إلى قوالب الـ ERP البرمجية المخصصة؟",
    excerpt: "Generic software solutions fail specific country tax requirements. Discover what customized system integration can unlock.",
    excerptAr: "لماذا تفشل البرمجيات الجاهزة والمستوردة في تلبية شروط الفواتير والضرائب المحلية في الخليج، ومميزات البناء المخصص.",
    category: "Web Development",
    categoryAr: "تطوير الويب",
    date: "June 10, 2026",
    readTime: "7 mins read",
    readTimeAr: "قراءة ٧ دقائق",
    image: "https://picsum.photos/seed/blog2/800/500"
  },
  {
    id: "b3",
    title: "Mastering Core Web Vitals inside React Framework Platforms",
    titleAr: "احتراف أداء الفحص الفني Core Web Vitals وحل ثغرات بطء التحميل في رياكت",
    excerpt: "A deep dive tutorial revealing techniques to reduce payload size, utilize next-gen lazy rendering, and optimize asset CDNs.",
    excerptAr: "شرح تفصيلي حول آليات تصغير حجم الأكواد السحابية وترتيب أكواد CSS لرفع كفاءة تصفح موقعك وتصدر محرك بحث جوجل.",
    category: "Programming",
    categoryAr: "برمجة وبناء",
    date: "June 05, 2026",
    readTime: "9 mins read",
    readTimeAr: "قراءة ٩ دقائق",
    image: "https://picsum.photos/seed/blog3/800/500"
  },
  {
    id: "b4",
    title: "Perfecting Web Design Psychology for Maximum Customer Loyalty",
    titleAr: "سيكولوجية تصميم واجهات المستخدم وزيادة ولاء المشترين للعلامات التجارية الفاخرة",
    excerpt: "How precise typography choices, subtle spacing rhythms, and micro feedback loops establish absolute digital authority instantly.",
    excerptAr: "دراسة سلوكية تبين أثر الخطوط النظيفة، المساحات الفارغة المدروسة، والحركات المجهرية للأزرار في كسب ثقة المشتري.",
    category: "SEO",
    categoryAr: "سيو وتسويق",
    date: "May 28, 2026",
    readTime: "6 mins read",
    readTimeAr: "قراءة ٦ دقائق",
    image: "https://picsum.photos/seed/blog4/800/500"
  }
];
