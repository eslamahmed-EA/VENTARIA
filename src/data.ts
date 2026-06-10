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
    id: 'arvana',
    title: 'أرافانا للأثاث (ARVANA FURNITURE) — معارض ومتاجر الأثاث الراقي المبتكر',
    category: 'تصميم الهوية البصرية الفخمة + متجر سلة برو المتكامل بكود مخصص',
    platform: 'سلة',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',
    linkText: 'تصفح تفاصيل المتجر',
    results: [
      { label: 'نسبة زيادة المبيعات السنوية', value: '+١٨٨٪' },
      { label: 'متوسط قيمة سلة المشتريات', value: '٢,٨٥٠ ر.س' },
      { label: 'سرعة تحسين تحميل الجوال', value: '٠.٧ ثانية' }
    ],
    isFeatured: true,
    clientDescription: 'براند أثاث سعودي فاخر طموح ركّز على تقديم قطع أثاث وتوليفات معيشة راقية تجمع بين البساطة الهندسية والجمال الخلاب، يستهدف عشاق الفخامة والتميز.',
    problemStatement: 'كان المتجر يواجه قصوراً في توجيه العملاء لاستكمال شراء قطع أثاث راقية تتجاوز قيمتها آلاف الريالات نظراً لاعتماده على تصميم سلة كلاسيكي معتاد لا يعبر عن عراقة وهوية الأثاث المنزلي الفاخر.',
    solutionExecuted: 'قمنا بإعداد استراتيجية وهندسة الهوية الرقمية كاملة بألوان عصرية هادئة تعكس فخامة صالات العرض الفسيحة، وصممنا صفحات هبوط مخصصة لعرض مكونات الأخشاب والجلود والمنسوجات بميزات تفاعلية ساحرة وتطوير متقدم على سلة بكود CSS مخصص أدى لتسريع التحميل والتصفح بشكل ثوري.',
    additionalImages: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800'
    ],
    mobileImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600',
    technologies: ['سلة برو (Salla Pro)', 'تطوير كود تخصيص CSS مخصص ومتقدم', 'تصميم واجهات وتفاعل كامل Figma', 'تحليلات سلوك المتسوقين الفعالة'],
    demoUrl: 'https://arvana.ventaria.studio',
    brandLogoText: 'ARVANA',
    brandLogoTagline: 'Modern Dwelling Masterpieces',
    brandColors: [
      { hex: '#1E3A2F', name: 'الأخضر الصنوبري الفخم' },
      { hex: '#F3EFE0', name: 'العاجي العتيق الشيفون' },
      { hex: '#222222', name: 'الرمادي الفحمي الحالك' }
    ],
    brandTypography: { heading: 'Playfair Display / Space Grotesk', bodyStyle: 'Tajawal Bold' },
    brandPackagingImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800',
    brandShowcaseItems: [
      { title: 'صفحة المنتجات وتفاصيل واجهات الأثاث الفخم', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600', type: 'شاشة متكاملة' },
      { title: 'بطاقات المنتجات والخطوط التيبوغرافية المعتمدة', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600', type: 'تطبيقات الهوية والبراندنج' },
      { title: 'واجهة المتجر متوافقة بالكامل مع شاشات الجوال والدفع السريع', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600', type: 'تطبيق ويب الجوال' }
    ]
  },
  {
    id: 'elysee',
    title: 'إليزيه باريس (ÉLYSÉE PARIS) — دار الأزياء والملابس النسائية الفارهة',
    category: 'بناء وتطوير الهوية السريالية البسيطة + متجر شوبيفاي بلس فائق الجمال والسرعة',
    platform: 'Shopify',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    linkText: 'عرض تفاصيل المشروع',
    results: [
      { label: 'نسبة عميلات العودة والشراء المتكرر', value: '٤٨٪' },
      { label: 'نمو وتنامي المبيعات العضوية بالمتجر', value: '+٢٤٥٪' },
      { label: 'تقييم تجربة الموبايل وسرعة الشراء', value: '٤.٩/٥' }
    ],
    isFeatured: false,
    clientDescription: 'بوتيك أزياء نسائية راقية مستوحاة من تفاصيل الأزياء الباريسية الفاخرة، يركّز على فساتين سهرة وعباءات حصرية تبرز الأناقة البسيطة والراحة المتميزة.',
    problemStatement: 'كانت العلامة تدرج مبيعاتها يدوياً عبر إنستغرام وتفقد الكثير من طاقات الطلب والدفع، وتكتفي بتصميمات جاهزة لا ترسي ثقل وقيمة قطع الأزياء الحصرية المصنعة تدار بعناية فائقة.',
    solutionExecuted: 'قمنا بصياغة هوية متفردة بأسلوب Silent Luxury يعتمد على التباينات الفخمة والمساحات البيضاء المريحة مع تيبوغرافي فخم. قمنا ببرمجة متجر ذكي على شوبيفاي بلس يعرض صوراً عريضة تبرز خبايا وتفاصيل الأقمشة والخيوط بدقة، بلمسة شحن سريعة ودفع مرن بضغطة زر واحدة لكافة العملات لضمان التميز المطلق.',
    additionalImages: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800'
    ],
    mobileImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600',
    technologies: ['Shopify Plus Engine', 'Liquid Coding & Custom CSS styles', 'Framer Motion Web Effects', 'تحسين معدلات التحويل سيو والتتبع الذكي للبيكسلز'],
    demoUrl: 'https://elysee.ventaria.studio',
    brandLogoText: 'ÉLYSÉE',
    brandLogoTagline: 'Pure Elite Silent Luxury',
    brandColors: [
      { hex: '#0B0B0C', name: 'الفحم الصخري الباريسي' },
      { hex: '#E2D8C9', name: 'البيج المخملي الحريري' },
      { hex: '#FFFFFF', name: 'العاجي الأبيض النقي' }
    ],
    brandTypography: { heading: 'Cormorant Garamond Serif / Playfair', bodyStyle: 'Tajawal Regular' },
    brandPackagingImage: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800',
    brandShowcaseItems: [
      { title: 'صفحات الهبوط المخصصة لعرض طراز الملابس والأزياء', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600', type: 'تفاصيل الواجهات' },
      { title: 'أكياس وصناديق التعبئة والتغليف مع لوجو الدار المذهّب', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=600', type: 'براند وصناديق الطلب' },
      { title: 'سهولة الحجز وسرعة التصفح بالكامل عبر الجوال', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600', type: 'تصميم فائق الدقة ومتناسق' }
    ]
  },
  {
    id: 'lumiere',
    title: 'لوميير للمجوهرات (LUMIÈRE JEWELRY) — صياغة وتصميم المجوهرات النفيسة والذهب',
    category: 'تصميم استراتيجية البراندنج الفخم + عبوات التغليف المخصصة + متجر زد متكامل',
    platform: 'زد',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200',
    linkText: 'عرض معرض صور المشروع',
    results: [
      { label: 'تفوق وتنامي المبيعات الإجمالية', value: '+٢١٠٪' },
      { label: 'نسبة زيادة تكرار عودة عملاء الذهب', value: '٤٢٪' },
      { label: 'سرعة استجابة المتجر المذهلة', value: '٠.٦ ثانية' }
    ],
    isFeatured: false,
    clientDescription: 'براند مجوهرات وحلي ذهبية فاخرة، يركز على صياغة المجوهرات الفريدة المرصعة بالألماس والأحجار الكريمة، مستهدفاً الباحثين عن التفرد والجمال الدائم.',
    problemStatement: 'كان براند لوميير يواجه صعوبة في منافسة متاجر الذهب الكبيرة لعدم توفر متجر إلكتروني يضمن الأمان والمصداقية ونقل البريق الفعلي والفخامة لكل قطعة من المجوهرات.',
    solutionExecuted: 'قمنا ببناء وتأسيس هوية بصرية مذهلة تعتمد على الألوان البيج الكلاسيكية والخطوط الرفيعة المرتبطة بالفخامة. برمجنا ثيم متجر زد المطور وحسننا صفحات وتفاصيل المنتجات مع إضافة ميزة حاسبة مقاسات الأصابع وإبراز شهادات الضمان الموثقة مع كل طلب تضامناً مع بوابات شحن وتأمين دولية آمنة.',
    additionalImages: [
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800'
    ],
    mobileImage: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=600',
    technologies: ['منظومة زد المتكاملة (Zid Theme)', 'Figma Interface Engineering', 'توجيه وصناعة كتالوج الموديلز الاحترافي', 'ربط بوابات دفع مخصصة مدى وفيزا وماستركارد'],
    demoUrl: 'https://lumiere.ventaria.studio',
    brandLogoText: 'LUMIÈRE',
    brandLogoTagline: 'Where Gold Tells Forever Stories',
    brandColors: [
      { hex: '#1D1D1F', name: 'الفحم الصخري البسيط' },
      { hex: '#D5A459', name: 'الذهبي اللامع الفوسفوري' },
      { hex: '#F9F7F2', name: 'الأوف وايت العاجي الساحر' }
    ],
    brandTypography: { heading: 'Didot Serif / Cormorant Garamond', bodyStyle: 'Tajawal Bold' },
    brandPackagingImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    brandShowcaseItems: [
      { title: 'واجهة متجر لوميير على الويب وعرض الخواتم والأساور', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600', type: 'شاشات الويب والتصفح الفخم' },
      { title: 'علب الملمس والفتحات المبطنة للمجوهرات الفاخرة المطبوعة', image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=600', type: 'التعبئة ومواد البراندنج الملموس' },
      { title: 'واجهة الجوال المصممة كلياً لسهولة التصفح السريع والدفع المباشر Apple Pay', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600', type: 'شاشات توافق الهاتف' }
    ]
  },
  {
    id: 'al-hayat',
    title: 'عيادات الحياة (AL HAYAT CLINICS) — خدمات الرعاية الطبية الشاملة والمتقدمة',
    category: 'تصميم الواجهات UI/UX لـ ٧ أقسام + منصة حجز المواعيد والاستشارات الطبية المتكاملة',
    platform: 'موقع مخصص',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200',
    linkText: 'تصفح موقع العيادات',
    results: [
      { label: 'إجمالي مواعيد وتأكيدات الحجز الطبي الإلكتروني', value: '+٣٤٠٪' },
      { label: 'انخفاض في نسبة تغيب المرضى عن المواعيد', value: '-٦٨٪' },
      { label: 'سرعة التنقل وحجز عيادتك المفضلة', value: '٠.٤ ثانية' }
    ],
    isFeatured: false,
    clientDescription: 'مجمع عيادات ومراكز طبية رائدة في المملكة العربية السعودية، تقدم باقة من الحلول لعيادات الأسنان والجلدية وعيادات الأطفال لضمان رعاية ذات جودة وثقة متناهية.',
    problemStatement: 'كانت العيادات تستقبل اتصالات تفوق طاقتها الهاتفية مما أدى لضياع ٤٥٪ من المواعيد مع عجز المستعرضين عن فهم خدمات وأقسام الطبيب المفضل لديهم وتوزيع أوقات المعاينة.',
    solutionExecuted: 'صممنا وابتكرنا واجهات استخدام هادئة ومقنعة بألوان التركواز والأبيض الطبي لتوجيه المريض بسهولة. قمنا ببرمجة موقع مخصص ذي سرعة عالية يضم نظام جدولة مواعيد الطبيب التلقائي الفوري، مع إرسال رسائل تذكير تلقائية عبر الواتساب للمرضى ومؤشرات حجز تفاعلية مذهلة.',
    additionalImages: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800'
    ],
    mobileImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
    technologies: ['React Web Architecture', 'جدولة وتزامن API المواعيد', 'Framer Motion Smooth Animations', 'تحسين سيو محلي للعيادة Google Maps Local SEO'],
    demoUrl: 'https://alhayat.ventaria.studio',
    brandLogoText: 'AL HAYAT',
    brandLogoTagline: 'Professional Medical Care Standard',
    brandColors: [
      { hex: '#0A7A75', name: 'التركواز والأخضر العلاجي' },
      { hex: '#FFFFFF', name: 'الأبيض الطبي المعقم' },
      { hex: '#2A3439', name: 'الرمادي المعدني والصلب' }
    ],
    brandTypography: { heading: 'Inter UI / Space Grotesk', bodyStyle: 'Tajawal Bold' },
    brandPackagingImage: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800',
    brandShowcaseItems: [
      { title: 'صفحة تفاصيل العيادات وحجز الطبيب في ثوانٍ معدودة', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600', type: 'واجهات حجز المواقيت' },
      { title: 'نماذج الكروت والملصقات والشعارات للأطباء والمجمع', image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600', type: 'تطبيقات الهوية والعلامة' },
      { title: 'واجهة الحجز متوافقة تماماً وسلسة على شاشات الجوال', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600', type: 'شاشات متوافقة للجوال' }
    ]
  },
  {
    id: 'nova-estate',
    title: 'نوفا العقارية (NOVA ESTATE) — منصة وبوابة الاستثمار والتسويق العقاري الذكي',
    category: 'تصميم الواجهات المذهلة كلياً + بوابة الويب السريعة المتوافقة والموثقة بالكامل',
    platform: 'موقع مخصص',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200',
    linkText: 'تصفح تفاصيل الهوية المعروضة',
    results: [
      { label: 'طلبات وحجوزات معاينة الوحدات', value: '+٣١٢٪' },
      { label: 'أداء وتقييم البوابة السريعة بالكامل', value: '١٠٠٪' },
      { label: 'انخفاض تكلفة الحصول على العميل الاستثماري', value: '-٥١٪' }
    ],
    isFeatured: false,
    clientDescription: 'مطور عقاري ومسوق مشاريع فخمة في مدينة الرياض ومحافظة جدة، يختص بإنشاء مجمعات سكنية وبنتهاوس بمميزات معمارية راقية وتصاميم هندسية حصرية كليا.',
    problemStatement: 'كانت منصة التسويق تعتمد على تصفح PDF بطيء للغاية ومنفر للمستثمرين الراغبين في حجز الوحدات والاستثمار، مع فقد ملموس للتفاصيل والعثور على المواقع المفضلة.',
    solutionExecuted: 'قمنا بتصميم وبناء بوابة عقارية متطورة ومكتملة تمنح المستثمرين تجربة البحث بفلترة سريعة تظهر جغرافيا الوحدات بالتكامل التام مع خرائط دقيقة. وفرنا ميزة الحجز المباشر ومقاطع تفاعلية للوصف ثلاثي الأبعاد تمكن الزائر من العثور على شقته وحجز موعد استشارتها بسرعة فتح لا تضاهى.',
    additionalImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800'
    ],
    mobileImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600',
    technologies: ['React Development Framework', 'Mapbox Custom API', 'Framer Motion Animated Elements', 'رسم ومعاينة المخططات العقارية الفاخرة'],
    demoUrl: 'https://novaestate.ventaria.studio',
    brandLogoText: 'NOVA ESTATE',
    brandLogoTagline: 'Defining the Luxury Dwelling Standard',
    brandColors: [
      { hex: '#0B2545', name: 'الأزرق البحري العميق النادر' },
      { hex: '#134074', name: 'أزرق نوفا الاستراتيجي الحديدي' },
      { hex: '#F0F4F8', name: 'الأبيض الثلجي المطفي الرائع' }
    ],
    brandTypography: { heading: 'Outfit Display / Space Grotesk', bodyStyle: 'Tajawal Regular' },
    brandPackagingImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    brandShowcaseItems: [
      { title: 'واجهة بوابة العقارات المستهدفة واستكشاف المجمعات السكنية', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600', type: 'شاشة متصفح كاملة' },
      { title: 'المخططات وصور البانرات التسويقية مع الألوان المعتمدة للبراند', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600', type: 'خطوة دليل الهوية وابعادها' },
      { title: 'لوحة التحكم لممثلي المبيعات وجدولة اتصالات المعاينة الفورية', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=600', type: 'لوحات تحكم Dashboard دقيقة' }
    ]
  },
  {
    id: 'roasta',
    title: 'روستا كافيه (ROASTA COFFEE) — محمصة وحاضنة القهوة المختصة',
    category: 'تصميم استراتيجية العلامة + عبوات التغليف الفخمة + متجر زد متكامل كلياً',
    platform: 'زد',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1200',
    linkText: 'عرض تفاصيل المتجر',
    results: [
      { label: 'متوسط قيمة سلة ومشتريات العميل (AOV)', value: '+٤٥٪' },
      { label: 'معدل بقاء وتحويل متسوقي القهوة', value: '٥.٤٪' },
      { label: 'سرعة استجابة المتجر بالكامل', value: '٠.٨ ثانية' }
    ],
    isFeatured: false,
    clientDescription: 'محمصة قهوة مختصة سعودية معاصرة، تهدف لاستيراد وتحميص البُن النبيل الفاخر من جبال أمريكا الجنوبية وأفريقيا وتوزيعه بنكهة حماسية وثقافة واعية.',
    problemStatement: 'كانت المحمصة تعاني من ضعف الطلبات المباشرة وضياع التميز وسط خيارات المحامص التقليدية التي تستخدم خطوطاً بنية مكررة لا تجذب أعين المتسوقين الرقميين الطموحين.',
    solutionExecuted: 'صممت علامتنا لهم استراتيجية هوية متكاملة تدمج الأخضر الصنوبري المختص مع البرتقالي المحروق للإشعاع. قمنا بتصميم ورسم عبوات التغليف الكرتونية الفاخرة للحبوب وتفعيل متجر زد برو بالكامل بفرز ذكي يتيح تصفية البن حسب النكهة والسلالة وملاءمة الترشيح لسرعة اختيار خارقة.',
    additionalImages: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
    ],
    mobileImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600',
    technologies: ['تخصيص ثيم زد (Zid Template Code)', 'تصميم التعبئة والتغليف الملموس للمنتجات ورسم النماذج المطبوعة', 'استراتيجية وتنسيق الألوان وهوية العلامة الرائدة'],
    demoUrl: 'https://roasta.ventaria.studio',
    brandLogoText: 'ROASTA',
    brandLogoTagline: 'Pure Origin Specialty Coffee',
    brandColors: [
      { hex: '#1C3A27', name: 'الأخضر الداكن العريق' },
      { hex: '#FAF7F0', name: 'الكريم الشيفوني الداعم' },
      { hex: '#E6A15C', name: 'البرتقالي المحروق الفاتح للشهية' }
    ],
    brandTypography: { heading: 'Space Grotesk / Cabinet Grotesk', bodyStyle: 'Tajawal Bold' },
    brandPackagingImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    brandShowcaseItems: [
      { title: 'أكياس وحزم حبوب البن المختص المعتمدة للبراند', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600', type: 'تغليف المنتجات المخصصة' },
      { title: 'واجهة متصفح الويب وتفاصيل الفلترة المخصصة بالمتجر', image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=600', type: 'واجهات تسوق فريدة' },
      { title: 'الأكواب الورقية وملصقات الهوية البصرية من روستا كافيه', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600', type: 'تطبيقات الهوية بذكاء' }
    ]
  },
  {
    id: 'al-hadath',
    title: 'الحدث (AL HADATH NEWS) — المنصة والصحيفة الإخبارية المتكاملة',
    category: 'تصميم وبناء الهوية البصرية الإعلامية + تطوير البوابة الإخبارية والتحليلات بالكامل',
    platform: 'موقع تعريفي',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200',
    linkText: 'عرض تفاصيل العمل',
    results: [
      { label: 'متوسط عدد الزوار النشطين شهرياً بداخل البوابة', value: '+٢.٤ مليون' },
      { label: 'سرعة تسليم الخادم وسرعة القراءة تحت الحمل الثقيل', value: '٠.٢ ثانية' },
      { label: 'معدل البقاء بداخل الصحيفة ومقالات الأخبار', value: '٤.٥ دقيقة' }
    ],
    isFeatured: false,
    clientDescription: 'صحيفة وبوابة إخبارية رقمية كبرى تقدم الأخبار العاجلة والتحليلات الإقليمية وتتبع المستجدات لحظة بلحظة، وتستهدف ملايين القراء بمقالات خفيفة وسريعة.',
    problemStatement: 'كانت البوابة القديمة تنهار تماماً عند فترات الإعلانات العاجلة وتواجه تأخراً ثقيلاً في تحميل الفيديوهات والصور وتفتقر لخطوط عربية واضحة تجعل القراءة مريحة.',
    solutionExecuted: 'قمنا بإعادة هندسة وتعمير البوابة بالكامل بكود نظيف وتطوير وتعيين تصميم فخم بلون داكن وتباين أحمر عازل للأخبار الطارئة والعاجلة. وفرنا خطوط تيبوغرافي مخصصة سهلة القراءة ونظام تخزين خادم مؤقت يضمن عدم توقف البوابة في ظل وجود أحمال ثقيلة من الزوار المتزامنين.',
    additionalImages: [
      'https://images.unsplash.com/photo-1495020689067-958852a6565d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
    ],
    mobileImage: 'https://images.unsplash.com/photo-1495020689067-958852a6565d?auto=format&fit=crop&q=80&w=600',
    technologies: ['React SSR / High performance node caching APIs', 'تطوير كود تحرير واجهات الاستخدام Figma', 'تنسيق الخطوط والمسافات تيبوغرافي مقروء', 'تحليلات بقاء وجدولة المستخدمين المتقدمة'],
    demoUrl: 'https://alhadath.ventaria.studio',
    brandLogoText: 'AL HADATH',
    brandLogoTagline: 'Where Truth Speaks instantly',
    brandColors: [
      { hex: '#111113', name: 'الرمادي المعتم والحبر الفحمي' },
      { hex: '#DC2626', name: 'الأحمر العاجل المتوهج' },
      { hex: '#FFFDF9', name: 'الأوف وايت العاجي الساحر' }
    ],
    brandTypography: { heading: 'Cormorant Garamond / Cairo Display', bodyStyle: 'Tajawal Bold' },
    brandPackagingImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    brandShowcaseItems: [
      { title: 'واجهة الصفحة الرئيسية للمنصة وصور الشريط العاجل الإخباري', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600', type: 'شاشات الويب والبوابات الكبرى' },
      { title: 'دليل الهوية وأقسام الألوان المستخدمة لتمييز الأخبار العلوية', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600', type: 'دليل الهوية والبراندنج' },
      { title: 'سهولة قراءة الأخبار والتجاوب الفائق مع جميع الهواتف الذكية', image: 'https://images.unsplash.com/photo-1495020689067-958852a6565d?auto=format&fit=crop&q=80&w=600', type: 'تصميم فائق الدقة للجوال' }
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
