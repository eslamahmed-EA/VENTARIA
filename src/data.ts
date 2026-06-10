import { ServiceItem, PortfolioItem, TestimonialItem, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'corporate-web',
    title: 'تصميم وتطوير المواقع التعريفية للشركات',
    subtitle: 'انطباع أول يدوم وفخامة تليق بك',
    description: 'نبني مواقع تعريفية مخصصة ومبتكرة تعكس هيبة ومكانة شركتك الاستراتيجية، مجهزة بأحدث التقنيات وأفضل معايير تجربة المستخدم والسرعة للتصدر في السوق.',
    badge: 'الخدمة الرئيسية ✨',
    iconName: 'Building',
    platformColor: 'text-[#00bc7d]',
    features: [
      'برمجة وتصميم واجهات حصرية 100% غير مكررة',
      'لوحة تحكم مرنة وسهلة لإدارة المحتوى الإخباري والخدمي',
      'توافق ثوري كامل مع جميع مقاسات الشاشات والهواتف',
      'سرعة تحميل فائقة ومتوافقة مع معايير Google Core Web Vitals',
      'هيكلة مخصصة متوافقة 100% مع محركات البحث SEO',
      'حماية وأمان مع شهادات SSL وربط البريد الرسمي للشركة'
    ],
    duration: '١٠ - ١٥ يوم عمل'
  },
  {
    id: 'business-sites',
    title: 'تصميم مواقع الخدمات والأعمال التجارية',
    subtitle: 'تسهيل رحلة عميلك لطلب الخدمة',
    description: 'مواقع مخصصة للشركات الخدمية، والمكاتب الاستشارية، والعيادات والمؤسسات، تسهل حجز المواعيد وعرض الخدمات وتلقي المدفوعات والطلبات المباشرة.',
    badge: 'فعّال ومثمر 💼',
    iconName: 'Briefcase',
    platformColor: 'text-primary',
    features: [
      'أنظمة متكاملة لجدولة وحجز المواعيد والاستشارات',
      'بوابات دفع إلكترونية آمنة لفوترة الخدمات مباشرة',
      'صفحات تفصيلية لكل خدمة مع كتابة تسويقية مقنعة للعميل',
      'لوحات لمتابعة طلبات واستفسارات العملاء بديناميكية',
      'تكامل أدوات الدردشة الفورية وخدمة العملاء (WhatsApp AI)',
      'صفحة خاصة لنماذج أعمال سابقة وحالات دراسية موثقة'
    ],
    duration: '٨ - ١٢ يوم عمل'
  },
  {
    id: 'landing-pages',
    title: 'تصميم صفحات الهبوط عالية التحويل',
    subtitle: 'ضاعف نتائج حملاتك الإعلانية',
    description: 'صفحات هبوط (Landing Pages) مجهزة بأعلى تكتيكات علم النفس الإقناعي وتجربة المستخدم لتوجيه الزوار من إعلاناتك مباشرة إلى إجراء الشراء أو التسجيل.',
    badge: 'أعلى معدل تحويل 📈',
    iconName: 'Target',
    platformColor: 'text-emerald-500',
    features: [
      'هندسة واجهات تركز بالكامل على زر اتخاذ الإجراء (CTA)',
      'صياغة نصوص وعناوين بأسلوب تسويقي يلامس رغبة العميل بدقة',
      'ربط وتحليل بكسل تتبع الإعلانات (سناب، تيك توك، ميتا، جوجل)',
      'سرعة تحميل خارقة تقلل من نسب خروج الزوار قبل التحويل',
      'تكامل نماذج تسجيل سريعة وربطها بأنظمة CRM',
      'تحديثات واختبارات A/B Testing لرفع فاعلية الصفحة'
    ],
    duration: '٣ - ٥ أيام عمل'
  },
  {
    id: 'salla',
    title: 'تأسيس متاجر سلة (Salla)',
    subtitle: 'المنصة الأولى محلياً بالتجارة الإلكترونية',
    description: 'بناء متجر احترافي متكامل على منصة سلة، وتجهيز كافة الإعدادات والخيارات التي تدفع مشروعك للانطلاق فورا بنجاح وحصد المبيعات.',
    badge: 'الأكثر طلباً 🇸🇦',
    iconName: 'ShoppingBag',
    platformColor: 'text-[#00bc7d]',
    features: [
      'ربط الدومين الخاص وحسابات مطوري جوجل وميتا',
      'تفعيل بوابات الدفع بالكامل (مدى، فيزا، Apple Pay)',
      'ربط شركات الشحن والتوصيل التلقائي لراحة تامة',
      'تصميم وتخصيص ثيم سلة بلمسة وتفاصيل براند فخم',
      'إدخال وتنسيق أول ٢٠ منتج بوصف تسويقي وصور جذابة',
      'إعدادات سلة برو والربط مع تحليلات Google Analytics'
    ],
    duration: '٥ - ٧ أيام عمل'
  },
  {
    id: 'zid',
    title: 'تأسيس متاجر زد (Zid)',
    subtitle: 'منظومة تفاعلية وتجزئة حديثة',
    description: 'بناء متجرك على منصة زد وتفعيل قنوات التجزئة الحديثة لربط مبيعات متجرك ومخازنك تحت منظومة إدارية وتحليلة واحدة وبلمسة جمالية.',
    badge: 'نمو متكامل 🚀',
    iconName: 'Store',
    platformColor: 'text-[#ff4522]',
    features: [
      'تهيئة المتجر وحساب التاجر بالكامل دون أخطاء',
      'تفعيل وتكامل منظومة زد شب وزد باي بأفضل العمولات',
      'تخصيص ثيم وسيمتري المتجر ليعكس هوية علامتك التجارية',
      'ربط بيكسل الإعلانات وتتبع جودة الإعلانات التلقائية',
      'تجهيز وتسعير خيارات الشحن السريع والذكي للمحافظات',
      'تفعيل ميزة الفواتير الفورية وإدارتها محاسبياً'
    ],
    duration: '٦ - ٨ أيام عمل'
  },
  {
    id: 'shopify',
    title: 'تطوير متاجر Shopify المخصصة',
    subtitle: 'التوسع العالمي والمرونة المطلقة',
    description: 'برمجة وتصميم متاجر شوبيفاي احترافية مخصصة للعلامات التجارية الطموحة التي تستهدف التوسع الإقليمي والعالمي بمزايا مرنة لا محدودة.',
    badge: 'توسع وعالمية 🌍',
    iconName: 'Globe',
    platformColor: 'text-[#96bf48]',
    features: [
      'برمجة وتخصيص قوالب شوبيفاي المتقدمة Liquid / React',
      'ربط بوابات الدفع الدولية والمحلية (Moyasar, Stripe, Tabby)',
      'تكامل تطبيقات الموردين وسلاسل الإمداد العالمية للدروبشيبنج',
      'تحسين سرعة التصفح وتوافقها مع الجوال بأعلى معايير SEO',
      'تهيئة أنظمة متعدد اللغات والعملات للمتجر بدقة وبساطة',
      'برمجة صفحات تتبع الشحنات المخصصة وحسابات الزبائن'
    ],
    duration: '١٠ - ١٥ يوم عمل'
  },
  {
    id: 'branding',
    title: 'تصميم الهوية البصرية والبراندنج',
    subtitle: 'شخصية بصرية متكاملة تنافس الكبار',
    description: 'نبني لعلامتك التجارية هوية فريدة وفخمة تجعلها تعلق بذهن عملائك، ونرسخ ملامح فخمة تشمل تصميم الشعار الفاخر وكود الألوان والخطوط بدليل البراند.',
    badge: 'فخامة وتميز ✨',
    iconName: 'Sparkles',
    platformColor: 'text-primary',
    features: [
      'تصميم شعار مبتكر فخم بـ ٣ مفاهيم ونماذج عمل هندسية',
      'تحديد لوحة الألوان السيكولوجية والخطوط الرسمية بدقة',
      'تصميم بطاقات المنتجات وملصقات التغليف والعلب وأكياس الشحن',
      'تصميم قوالب وبانرات احترافية وموحدة للسوشيال ميديا ومتجرك',
      'دليل كامل وموثق لاستخدام الهوية البصرية (Brand Guidelines)',
      'تسليم الملفات مفتوحة المصدر وبصيغ متعددة جاهزة للطباعة'
    ],
    duration: '٧ - ١٢ يوم عمل'
  },
  {
    id: 'logos',
    title: 'تصميم الشعارات الاحترافية',
    subtitle: 'رمز قوتك وبصمة تميزك',
    description: 'نصمم شعارات ذات رمزية عالية الدقة تجمع بين الحداثة والرمزية الفاخرة لتعبر عن قصة نجاح علامتك بلمح البصر وبشكل فوتوغرافي مميز.',
    badge: 'دقة وتفرد 🎨',
    iconName: 'PenTool',
    platformColor: 'text-indigo-600',
    features: [
      'دراسة وتحليل المنافسين لوضع فكرة متفردة وغير تقليدية',
      'نمذجة الشعار كأيقونة ونصوص خطية مخصصة (Typography)',
      'تهيئة أبعاد الشعار للتناسق في المساحات الصغيرة (Favicon to Profile)',
      'تقديم الشعار باللونين السادة (أسود/أبيض) والألوان المعتمدة',
      'مواد عرض واقعية (Mockups) لإظهار شكل الشعار واستخداماته',
      'الملفات بكافة الصيغ المتجهية (Vector) جودة لا نهائية للطباعة'
    ],
    duration: '٤ - ٦ أيام عمل'
  },
  {
    id: 'uiux',
    title: 'تصميم واجهات وتجربة المستخدم UI/UX',
    subtitle: 'علم التصفح السهل والشراء التلقائي',
    description: 'دراسة وتصميم واجهات وسيناريوهات التصفح والشراء لمنتجك الرقمي وتصميمها في فيجما لضمان تفاعل سلس ونهائي خالي من العقبات والمشاكل البصرية.',
    badge: 'هندسة تجربة الزائر 📊',
    iconName: 'Layout',
    platformColor: 'text-yellow-600',
    features: [
      'رسم الخريطة الهيكلية لتوزيع العناصر بأريحية (Wireframes)',
      'دراسة وتخطيط خريطة رحلة العميل وتدفق المستخدم (User Journey)',
      'تصميم الواجهات تفاعلياً بشكل كامل وبلمسات حديثة على Figma',
      'ملاءمة تامة ومدروسة لجميع قياسات الهواتف والشاشات اللوحية',
      'إنشاء نظام المكونات الموحد (Design System) للمشروع المعتمد',
      'تسليم نموذج أولي تفاعلي (Interactive Prototype) لاختباره'
    ],
    duration: '٨ - ١٤ يوم عمل'
  },
  {
    id: 'optimization',
    title: 'تحسين أداء وتحويل المتاجر الإلكترونية',
    subtitle: 'ضاعف معدل أرباحك بلا زيادة تكلفة إعلاناتك',
    description: 'نفحص متجرك أو موقعك الحالي لرفع السرعة لأقصى طاقة، وتحسين معدل التحويل (CRO) وحل كافة العقبات التي تقود العميل لترك سلة التسوق.',
    badge: 'تدقيق وتطوير 🛠️',
    iconName: 'TrendingUp',
    platformColor: 'text-emerald-600',
    features: [
      'تحسين سرعة تحميل الصور وضغط الكود لرفع درجات السيو وجودة الصفحة',
      'تحليل سلوك زوار موقعك الفعلي عن طريق الخرائط الحرارية المتقدمة',
      'تحسين محركات البحث المحلية (On-Page SEO) لسهولة العثور عليك',
      'إزالة أي حواجز أو تعقيدات خلال تجربة الدفع لسهولة الشراء',
      'تفعيل رسائل تذكير تلقائية ومخصصة لحالات السلات المتروكة',
      'تسليم تقرير التدقيق الفني الشامل بـ ٢٥+ توصية فورية للتنفيذ'
    ],
    duration: '٤ - ٦ أيام عمل'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'noire',
    title: 'NOIRÉ - عطور باثوس الملكية الفاخرة',
    category: 'تصميم الهوية البصرية الفخمة + متجر سلة برو المتكامل بكود مخصص',
    platform: 'سلة',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200',
    linkText: 'تصفح تفاصيل المتجر',
    results: [
      { label: 'نسبة زيادة المبيعات الشهرية', value: '+١٦٤٪' },
      { label: 'سرعة التحميل الإجمالية', value: '٠.٦ ثانية' },
      { label: 'انخفاض ارتداد السلات', value: '٣٨٪' }
    ],
    isFeatured: true,
    clientDescription: 'براند سعودي طموح ركّز على تقديم عطور وتوليفات شرقية وفرنسية ملكية ممزوجة بلمسة عصرية، يستهدف كبار الشخصيات وعشاق التفرد والفخامة المطلقة.',
    problemStatement: 'كان المتجر يواجه صعوبة في إقناع الزوار بشراء عطور حصرية تتجاوز قيمتها ٦٠٠ ريال نظراً لاستخدام قالب جاهز ومكرر على السلة لا يرسّخ قيمة العطر الملكية وندرته في نظر المتسوقين.',
    solutionExecuted: 'قمنا بإعادة صياغة الهوية البصرية كاملة بتصميم فاخر يعتمد على اللونين الأسود العاتم والذهب الصقيل، مع تصميم رمز شعار ملكي فريد. قمنا ببرمجة وتخصيص واجهة السلة بالكامل بكود CSS مخصص لصناعة صفحات هبوط فاخرة للمنتجات وعرض تفاصيل المكونات والنوتات العطرية بشكل تفاعلي ساحر، مع تسريع التحميل بنسبة تفوق ٤٠٠٪.',
    additionalImages: [
      'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800'
    ],
    mobileImage: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=600',
    technologies: ['سلة برو (Salla Pro)', 'تطوير CSS3 متقدم للغاية', 'Figma Prototyping', 'توجيه وتعديل صور الفوتوشوب ثلاثية الأبعاد', 'تحليلات المبيعات الذكية'],
    demoUrl: 'https://noire.ventaria.studio',
    brandLogoText: 'NOIRÉ',
    brandLogoTagline: 'L\'essence De La Nuit',
    brandColors: [
      { hex: '#0A0A0A', name: 'الأسود الملكي الحالك' },
      { hex: '#D4AF37', name: 'الذهبي الصقيل الدافئ' },
      { hex: '#FFFDF9', name: 'الأوف وايت العاجي الساحر' }
    ],
    brandTypography: { heading: 'Cinzel Decorative / Cormorant Garamond', bodyStyle: 'Tajawal Bold' },
    brandPackagingImage: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
    brandShowcaseItems: [
      { title: 'صفحة تفاصيل العطر والطلبات المباشرة', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600', type: 'شاشة متكاملة' },
      { title: 'علب وعبوات الهوية المطبوعة الفخراء', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600', type: 'تغليف وتطبيقات الهوية' },
      { title: 'واجهة السلة على الموبايل بخطوة دفع واحدة', image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=600', type: 'تطبيق ويب الجوال' }
    ]
  },
  {
    id: 'roasta',
    title: 'ROASTA - محمصة وحاضنة بن القهوة المختصة',
    category: 'تصميم استراتيجية العلامة + تغليف عبوات المنتجات + متجر زد المتكامل',
    platform: 'زد',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1200',
    linkText: 'عرض تفاصيل المشروع',
    results: [
      { label: 'متوسط قيمة الطلب (AOV)', value: '+٤٥٪' },
      { label: 'معدل التحويل الكلي بالمتجر', value: '٥.٤٪' },
      { label: 'سرعة التحميل بالثواني', value: '٠.٨ ثانية' }
    ],
    isFeatured: false,
    clientDescription: 'محمصة سعودية معاصرة تقدم حبوب البن المحمصة الفاخرة والمستورده من مزارع إنتاج عائلية مستديمة في أمريكا الجنوبية وأفريقيا وجنوب آسيا.',
    problemStatement: 'كان براند القهوة يغرق في بحر من الخيارات المكررة، بهوية كلاسيكية ذات صبغة بنية مألوفة، مما تسبب في ضعف ولاء العملاء وتكبّد كلفة إعلانات باهظة دون ميزة تنافسية تفصلهم عن بقية المنافسين.',
    solutionExecuted: 'ابتكرنا لهم استراتيجية هوية متكاملة بروح حديثة وتصميم جريء يدمج الأخضر الزبرجدي الحيوي والكريم الدافئ، بعيدًا عن البني التقليدي. قمنا برسم عبوات وحزم تغليف مبتكرة توضح السلالة ودرجة الحمص والارتفاع بشكل رائع، مع برمجة واجهة تسوق ذكية على منصة زد بفلتر ذكي يساعد على اختيار نوع القهوة حسب ذوق العميل في ثوانٍ معدودة.',
    additionalImages: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
    ],
    mobileImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600',
    technologies: ['زد تيمبليت كود (Zid Customization)', 'تصميم التغليف والعبوات الورقية الكرتونية', 'بناء استراتيجية الألوان والهوية البصرية', 'تصميم واجهة متكاملة Figma'],
    demoUrl: 'https://roasta.ventaria.studio',
    brandLogoText: 'ROASTA',
    brandLogoTagline: 'Pure Origin Specialty',
    brandColors: [
      { hex: '#1C3A27', name: 'الأخضر الغامق النبيل' },
      { hex: '#FAF7F0', name: 'الكريم الشيفوني الداعم' },
      { hex: '#E6A15C', name: 'البرتقالي المحروق الطازج' }
    ],
    brandTypography: { heading: 'Space Grotesk / Cabinet Grotesk', bodyStyle: 'Tajawal Heavy' },
    brandPackagingImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    brandShowcaseItems: [
      { title: 'مجموعة أكياس البن المختص للتوزيع', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600', type: 'تغليف المنتجات المخصصة' },
      { title: 'واجهة المتجر على المتصفح وتصفية البن', image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=600', type: 'واجهات تسوق فريدة' },
      { title: 'تصميم الكوب الورقي والشعارات المطبوعة', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600', type: 'تطبيقات الهوية بذكاء' }
    ]
  },
  {
    id: 'velora',
    title: 'VELORA - بوتيك الأزياء والملابس النسائية الفارهة',
    category: 'بناء الهوية السريالية البسيطة + متجر شوبيفاي بلس فائق الجمال',
    platform: 'Shopify',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200',
    linkText: 'تصفح صفحة الهبوط',
    results: [
      { label: 'نسبة عملاء العودة (Returning KPI)', value: '٤٤٪' },
      { label: 'تنامي المبيعات العضوية', value: '+٢٢٠٪' },
      { label: 'تقييم تجربة الموبايل المميزة', value: '٤.٩/٥' }
    ],
    isFeatured: false,
    clientDescription: 'بوتيك أزياء نسائية سعودية عالية الجودة، يركّز على تحضير وتصميم عبايات وفساتين سهرة راقية تجمع بين البساطة السويسرية والراحة الخلابة.',
    problemStatement: 'كانت العلامة تعتمد على الإنستغرام والواتساب وتفقد الكثير من الطلبيات وتفاصيل الدفع، مع عجز العميلات عن فهم دقة التفاصيل، فضلاً عن أن المتجر القديم لم ينقل هيبة وسحر وخصوصية قطع الدار الحصرية.',
    solutionExecuted: 'قمنا بصياغة هوية ممتازة بأسلوب Silent Luxury يعتمد على المساحات الفارغة الشرحة والتباينات الجذابة مع خطوط السيرف العريقة. قمنا ببرمجة متجر شوبيفاي بلس مدهش بصفحات منتجات عريضة تُبرز ملمس القماش وزوايا الإطلالة، مع دمج مميز لباقة الشراء الذكية بلمسة واحدة ودعم العملات المتعددة وسرعة انتقال رائعة.',
    additionalImages: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800'
    ],
    mobileImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600',
    technologies: ['Shopify Plus Engine', 'Liquid Coding Language', 'GSAP & Tailwind Animating', 'Figma UX Wireframing', 'Retargeting pixel tracking APIs'],
    demoUrl: 'https://velora.ventaria.studio',
    brandLogoText: 'VELORA',
    brandLogoTagline: 'Pure Silent Luxury',
    brandColors: [
      { hex: '#111111', name: 'الفحم الصخري المعتم' },
      { hex: '#EBE7E0', name: 'البيج المخملي الفرنسي' },
      { hex: '#FFFFFF', name: 'السيراميك الأبيض النقي' }
    ],
    brandTypography: { heading: 'Cormorant Garamond Serif / Didot', bodyStyle: 'Inter / Tajawal Regular' },
    brandPackagingImage: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800',
    brandShowcaseItems: [
      { title: 'تصميم بطاقة المنتج على صفحات المتجر الرئيسية', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600', type: 'تفاصيل الواجهات' },
      { title: 'علبة الشحن الفاخرة مع الأكياس وورق التحرير المذهب', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=600', type: 'براند وصناديق الطلب' },
      { title: 'تطبيق المتجر والتنقل المتكامل على هواتف الموبايل', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600', type: 'تصميم متوافق بنسبة ١٠٠٪' }
    ]
  },
  {
    id: 'nova-estate',
    title: 'NOVA ESTATE - منصة وبوابة الاستثمار والتسويق العقاري الذكي',
    category: 'تصميم الواجهات المذهلة + بوابة الويب المفتوحة السريعة المخصصة',
    platform: 'موقع مخصص',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200',
    linkText: 'تصفح معرض صور الهوية',
    results: [
      { label: 'طلبات وحجوزات معاينة الوحدات', value: '+٣١٢٪' },
      { label: 'أداء وتقييم الموقع ذي الصفحات الثقيلة', value: '١٠٠٪' },
      { label: 'انخفاض تكلفة العميل الترويجي (CPL)', value: '-٥١٪' }
    ],
    isFeatured: false,
    clientDescription: 'مطور عقاري رائد ومطور أسلوب حياة استثنائي في مدينة الرياض ومحافظة جدة، يختص بإنشاء مجمعات وبنتهاوس سكنية متفردة بهندسة بروتستانتية راقية.',
    problemStatement: 'كانت الشركة تعتمد على كتيبات الـ PDF الثقيلة ونظام عرض معقد للغاية ومنفر يستغرق دقائق للتحميل، مع عدم وجود صلة حجز مواعيد مرنة تضمن الحفاظ على المستثمرين وكبار العملاء من الضياع والتجاهل.',
    solutionExecuted: 'قمنا بتصميم وتطوير بوابة متكاملة ذات طابع تقني حديث تدمج الببليوجرافيا العقارية ومواقع الفروع الفاخرة بتقنيات ثلاثية الأبعاد ٣٦٠ درجة. وفرنا لوحة تحكم ذكية تتيح للزوار حجز معاينات في ثوانٍ معدودة بخرائط تفاعلية دقيقة، وتسهيل تصفح العقارات بسرعة تفتح بحد أقصى ميكرو ثانية لتوفير الراحة والتقديس الأمثل للمستخدم.',
    additionalImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800'
    ],
    mobileImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600',
    technologies: ['React SPA / Vite Project', 'Framer Motion Core Eng', 'Tailwind CSS Stylings', 'Mapbox API integration', 'High performance rendering tools'],
    demoUrl: 'https://novaestate.ventaria.studio',
    brandLogoText: 'NOVA ESTATE',
    brandLogoTagline: 'The Modern Dwelling Standard',
    brandColors: [
      { hex: '#0052CC', name: 'أزرق نوفا الاستراتيجي' },
      { hex: '#0F172A', name: 'الرمادي البحري والفولاذ' },
      { hex: '#F1F5F9', name: 'الأبيض الثلجي المطفي' }
    ],
    brandTypography: { heading: 'Outfit Display / Space Grotesk', bodyStyle: 'Tajawal Regular' },
    brandPackagingImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    brandShowcaseItems: [
      { title: 'واجهة بوابة العقارات المستهدفة واستكشاف المجمعات السكنية', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600', type: 'شاشة متصفح كاملة' },
      { title: 'صفحات الهبوط المخصصة للفلل والوحدات العقارية الحصرية', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600', type: 'تفاصيل صفحات الهبوط التفصيلية' },
      { title: 'لوحة التحكم لممثلي المبيعات وجدولة اتصالات المعاينة', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=600', type: 'لوحات تحكم Dashboard دقيقة' }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'المهندس مراد العتيبي',
    title: 'المدير التنفيذي',
    storeName: 'براند ريزن للعطور',
    platform: 'salla',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    content: 'فينتاريا كانت النقلة النوعية لعلامتنا التجارية. لم يقوموا فقط ببناء المتجر تقنياً، بل صمموا هوية بصرية جعلت عطورنا تبدو كماركة عالمية بأسعار مذهلة. المبيعات تضاعفت منذ الشهر الأول ونوصي بشدة بالعمل معهم لضميرهم اليقظ لمبيعات عملائهم!',
    rating: 5
  },
  {
    id: '2',
    name: 'الأستاذة سارة الشمري',
    title: 'مؤسسة علامة تجارية',
    storeName: 'مجوهرات تالين الترفيهية',
    platform: 'custom',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    content: 'أهم ميزة وجدتها في فينتاريا هي الفهم الفائق لمتطلبات قطاع الخدمات والأعمال الفخم في السعودية والخليج. حاسبة الأرباح الدقيقة بموقعهم كانت دافعاً كبيراً لي لتأمين استشارتي والبدء في برمجة موقع شركتنا التعريفي لديهم، وكانت أفضل تجربة إطلاق الإطلاق.',
    rating: 5
  },
  {
    id: '3',
    name: 'المستشار شريف علام',
    title: 'مدير النمو والتسويق الرقمي',
    storeName: 'أورجانيك هيرب لتجارة التجزئة',
    platform: 'shopify',
    avatar: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&q=80&w=150',
    content: 'قمنا بنقل متجرنا بالكامل إلى شوبيفاي وبناء صفحة هبوط مخصصة لكل منتج تريند مع فينتاريا بهدف تحسين سرعة الأداء وزيادة معدل التحويل وسيو. النتائج فاقت توقعاتنا بكثير، فسرعة التصفح وتماسك الهوية زادا من معدلات الثراء والولاء.',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'q1',
    question: 'كم يستغرق بناء موقع تعريفي للشركة أو صفحة هبوط؟',
    answer: 'صفحات الهبوط المجهزة للبيع عادة ما تستغرق ٣ إلى ٥ أيام عمل لتصميمها وبرمجتها على أحدث التقنيات. بينما المواقع التعريفية المتكاملة للشركات التي تشمل عرض الخدمات واللوحة ومميزات الأمان الاستراتيجية تستغرق ما بين ١٠ إلى ١٥ يوم عمل تبعا لتنوع الأقسام وعدد الصفحات المطلوبة بداخلها.'
  },
  {
    id: 'q2',
    question: 'هل توفر منصة فينتاريا باقات واشتراكات سلة وزد وشوبيفاي أم يجب شراؤها؟',
    answer: 'الاشتراكات الشهرية أو السنوية للباقات والترقيات تدفع مباشرة للمنصات (سلة، زد، شوبيفاي) وتكون باسمك وتحت ملكيتك وحسابك البنكي المباشر بنسبة ١٠٠٪. نحن في فينتاريا نتكفل بكافة مهام حجز الدومين، ربط السجل أو الهوية، تفعيل الدفع والشحن، وبرمجة الواجهات وتخصيص القوالب والربط دون أي عبء أو عناء من طرفك.'
  },
  {
    id: 'q3',
    question: 'ما الذي يجعل حاسبة أرباح المتاجر الإلكترونية لديكم دقيقة وخارجة عن المألوف؟',
    answer: 'لأننا لا نقوم فقط بجمع التكلفة التقليدية وطرحها، بل نطبق القواعد الفورية وعمولات بوابات الدفع الرسمية المعتمدة في السعودية والخليج (مدى، فيزا، Apple Pay، تابي، تمارا) وعمولات منصات سلة وزد وتأثير ميزانية الإعلان وتأثير تكرار الطلب، مما يزودك بأرقام محاسبية دقيقة تماثل تماما تقارير المحاسبين الماليين.'
  },
  {
    id: 'q4',
    question: 'هل أحتاج لسجل تجاري لكي تتمكنوا من بناء موقعي أو متجري الإلكتروني؟',
    answer: 'لصناعة موقع تعريفي للشركة أو صفحة هبوط، لا يشترط وجود سجل تجاري إلا لتفعيل بوابات الدفع الرسمية المباشرة بأسماء الشركات. بينما في سلة وزد، يكتفي المواطن السعودي بوثيقة العمل الحر المجانية لتفعيل بوابات الدفع وبدء البيع فوراً، وسنكون بجانبك لإرشادك خطوة بخطوة للحصول عليها في ثوانٍ.'
  }
];

export const SAUDI_PRESETS = [
  {
    name: '⚙️ تخصيص يدوي كلي',
    description: 'تحكم يدوي كامل في كافة مدخلات الأرباح والتكلفة لتجربة حرة',
    values: {
      sellingPrice: 150,
      productCost: 45,
      shippingCost: 25,
      packagingCost: 5,
      platformFeeType: 'percentage' as const,
      platformFeePercent: 0,
      platformFeeFixed: 0,
      paymentGateway: 'mada' as const,
      gatewayFeePercent: 1.75,
      gatewayFeeFixed: 1.0,
      advertisingCost: 2000
    }
  },
  {
    name: '👕 متجر أزياء وملابس (سلة برو + مدى السعودي)',
    description: 'سعر بيع للقطعة متوسط، شحن رخيص، الدفع الأسهل بالسعودية عبر مدى وسلة برو',
    values: {
      sellingPrice: 199,
      productCost: 60,
      shippingCost: 22,
      packagingCost: 6,
      platformFeeType: 'salla_pro' as const,
      platformFeePercent: 0,
      platformFeeFixed: 0,
      paymentGateway: 'mada' as const,
      gatewayFeePercent: 1.75,
      gatewayFeeFixed: 0,
      advertisingCost: 3500
    }
  },
  {
    name: '💎 عطور ومستحضرات تجميل (زد برو + دفع فيزا)',
    description: 'براند فاخر ذو هوية راقية، تكلفة منتج مع تغليف فاخر وشحن مخصص مع عملاء فيزا ودفع إلكتروني متكرر',
    values: {
      sellingPrice: 340,
      productCost: 85,
      shippingCost: 28,
      packagingCost: 15,
      platformFeeType: 'zid_pro' as const,
      platformFeePercent: 0,
      platformFeeFixed: 0,
      paymentGateway: 'visa' as const,
      gatewayFeePercent: 2.2,
      gatewayFeeFixed: 1.0,
      advertisingCost: 6000
    }
  },
  {
    name: '📦 دروب شيبنج دولي (شوبيفاي أساسي + شحن مجاني)',
    description: 'سعر بيع شامل الشحن، وتكلفة منتج دولي من علي إكسبرس، وعمولة شوبيفاي بنسبة 2%',
    values: {
      sellingPrice: 250,
      productCost: 110,
      shippingCost: 0,
      packagingCost: 3,
      platformFeeType: 'shopify_basic' as const,
      platformFeePercent: 2.0,
      platformFeeFixed: 0,
      paymentGateway: 'visa' as const,
      gatewayFeePercent: 2.9,
      gatewayFeeFixed: 1.25,
      advertisingCost: 5000
    }
  }
];
