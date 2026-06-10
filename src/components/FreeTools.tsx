import { useState, useMemo, useEffect, FormEvent } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  RefreshCw, 
  FileText, 
  Copy, 
  Download, 
  ArrowLeft, 
  Check, 
  Award, 
  Scale, 
  Building2, 
  DollarSign, 
  ArrowUpRight, 
  Zap,
  Globe,
  Info,
  CheckCircle2,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Dynamic type declarations for state
interface ReturnPolicyInputs {
  storeName: string;
  storeUrl: string;
  email: string;
  whatsapp: string;
  returnDays: string;
  exchangeDays: string;
  allowSaleItems: 'yes' | 'no';
  allowDigitalItems: 'yes' | 'no';
  country: string;
}

interface PrivacyPolicyInputs {
  storeName: string;
  storeUrl: string;
  email: string;
  country: string;
  collectData: 'yes' | 'no';
  useCookies: 'yes' | 'no';
}

interface ComparisonInputs {
  projectSize: 'beginner' | 'growth' | 'enterprise';
  productCount: 'small' | 'medium' | 'large';
  budget: 'low' | 'medium' | 'high';
  country: 'saudi' | 'egypt' | 'uae' | 'global';
}

interface FreeToolsProps {
  onNavigateHome: () => void;
  onContactClick: () => void;
}

export default function FreeTools({ onNavigateHome, onContactClick }: FreeToolsProps) {
  // Current Active Tab / View
  // 'dashboard' | 'return-pdf' | 'privacy-pdf' | 'comparison'
  const [activeTab, setActiveTab] = useState<'dashboard' | 'return-pdf' | 'privacy-pdf' | 'comparison'>('dashboard');

  // Success states for clipboard copies
  const [copiedReturn, setCopiedReturn] = useState(false);
  const [copiedPrivacy, setCopiedPrivacy] = useState(false);

  // Return policy state
  const [returnInputs, setReturnInputs] = useState<ReturnPolicyInputs>({
    storeName: '',
    storeUrl: '',
    email: '',
    whatsapp: '',
    returnDays: '7',
    exchangeDays: '14',
    allowSaleItems: 'no',
    allowDigitalItems: 'no',
    country: 'المملكة العربية السعودية'
  });
  const [generatedReturnPolicy, setGeneratedReturnPolicy] = useState('');

  // Privacy policy state
  const [privacyInputs, setPrivacyInputs] = useState<PrivacyPolicyInputs>({
    storeName: '',
    storeUrl: '',
    email: '',
    country: 'المملكة العربية السعودية',
    collectData: 'yes',
    useCookies: 'yes'
  });
  const [generatedPrivacyPolicy, setGeneratedPrivacyPolicy] = useState('');

  // Comparison inputs state
  const [compInputs, setCompInputs] = useState<ComparisonInputs>({
    projectSize: 'growth',
    productCount: 'medium',
    budget: 'medium',
    country: 'saudi'
  });
  const [comparisonResult, setComparisonResult] = useState<any | null>(null);

  // Update SEO Meta tags when entering tools section
  useEffect(() => {
    document.title = 'أدوات مجانية لأصحاب المتاجر الإلكترونية | Ventaria';
    
    // Smooth scroll to top of tools
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'مجموعة أدوات مجانية لأصحاب المتاجر الإلكترونية تشمل مولد سياسة الاسترجاع والاستبدال ومولد سياسة الخصوصية ومقارنة سلة وزد و Shopify.');
  }, [activeTab]);

  // Clean form change handlers
  const handleReturnChange = (field: keyof ReturnPolicyInputs, value: string) => {
    setReturnInputs(prev => ({ ...prev, [field]: value }));
  };

  const handlePrivacyChange = (field: keyof PrivacyPolicyInputs, value: string) => {
    setPrivacyInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleCompChange = (field: keyof ComparisonInputs, value: string) => {
    setCompInputs(prev => ({ ...prev, [field]: value }));
  };

  // 1. Return policy generator execution
  const handleGenerateReturn = (e: FormEvent) => {
    e.preventDefault();
    const storeName = returnInputs.storeName || 'متجري المميز';
    const storeUrl = returnInputs.storeUrl || 'www.example.com';
    const email = returnInputs.email || 'support@example.com';
    const whatsapp = returnInputs.whatsapp || '+966500000000';
    const refundDays = returnInputs.returnDays || '7';
    const exchangeDays = returnInputs.exchangeDays || '14';
    const saleAllowed = returnInputs.allowSaleItems === 'yes';
    const digitalAllowed = returnInputs.allowDigitalItems === 'yes';
    const country = returnInputs.country || 'المملكة العربية السعودية';

    const policy = `سياسة الاسترجاع والاستبدال الرسمية لمتجر ${storeName}

أهلاً بكم في متجر ${storeName} (${storeUrl}). نسعى جاهدين لتقديم أفضل تجربة تسوق ممكنة لعملائنا الكرام من خلال تقديم منتجات ذات جودة فائقة وتصاميم مميزة. ونظراً لأهمية وضوح تعاملاتنا وسلامة الإجراءات التجارية داخل متجرنا في ${country}، يسعدنا أن نوضح لكم أدناه بنود وشروط سياسة الاسترجاع والاستبدال المعتمدة والمعمول بها لدينا:

أولاً: فترة تقديم طلب الاسترجاع والاستبدال
١. مدة الاسترجاع: يحق للعميل تقديم طلب استرجاع المنتجات المؤهلة خلال فترة لا تتجاوز ${refundDays} أيام من تاريخ استلام الشحنة الفعلي.
٢. مدة الاستبدال: يحق للعميل تقديم طلب استبدال المنتجات المؤهلة بمنتج آخر خلال فترة لا تتجاوز ${exchangeDays} أيام من تاريخ استلام الشحنة الفعلي.

ثانياً: الشروط العامة لقبول الاسترجاع أو الاستبدال
لكي يتم قبول طلب الاسترجاع أو الاستبدال بنجاح، يجب استيفاء الاشتراطات المعيارية التالية:
١. أن يكون المنتج في حالته الأصلية المعبأة التي تم استلامه بها بجميع ملصقاته وصناديقه وعبوته الكرتونية الأصلية دون إجراء أي تغيير أو إتلاف.
٢. ألا يكون المنتج قد استُخدم أو فُتح أو ارتُدي أو تم غسله أو العبث بملحقاته بأي شكل من الأشكال.
٣. تقديم الفاتورة الرسمية الصادرة من متجر ${storeName} أو إرفاق تفاصيل تأكيد الطلب المعتمد.
٤. يتحمل العميل كافة رسوم وتكاليف خدمات التوصيل والشحن المقررة للإرجاع، باستثناء الحالات التي يكون فيها المنتج تالفاً كلياً أو يحمل عيباً مصنعياً حقيقياً، أو في حال تم تسليم منتج خاطئ من قبل فريقنا التجاري.

ثالثاً: سياسة المنتجات الخاضعة للتخفيضات والخصوم والعروض
${saleAllowed 
  ? `• يسعدنا إبلاغ عملائنا الكرام بأنه يُسمح كلياً باسترجاع واستبدال المنتجات الخاضعة للعروض الترويجية والخصومات، شريطة الالتزام التام بكافة الشروط العامة المذكورة أعلاه وتحمل كلفة الشحن المترتبة على ذلك.` 
  : `• يُرجى العلم بأن المنتجات المخفضة أو التي تم اقتناؤها خلال فترات العروض الترويجية والتصفيات الكبرى غير قابلة للاسترجاع، ويقتصر الإجراء المتاح لها على الاستبدال برصيد شراء أو بموديل آخر (وفقاً للمخزون المتوفر لدينا) خلال الفترة المسموحة.`}

رابعاً: سياسة المنتجات الرقمية والخدمات غير الملموسة
${digitalAllowed 
  ? `• يُتاح رد الأموال أو استبدال المنتجات والخدمات الرقمية والتحميل الفوري، شريطة عدم تفعيل كود الخدمة أو بدء تحميل المحتوى أو الاستفادة الفعلية من المنتج قبل طلب الإرجاع.` 
  : `• نظراً للطبيعة الفورية وغير القابلة للاسترجاع للسلع الرقمية (مثل الاشتراكات، الأكواد، التصاميم، الملفات القابلة للتحميل، وغيرها)، يوضح متجر ${storeName} الكائن في ${country} بأن كافة المنتجات والخدمات الرقمية بعد وصولها إلى العميل نهائية بالكامل وغير قابلة للاسترجاع أو الاستبدال تحت أي ظرف من الظروف نظراً لاستحالة استرداد الحقوق الفكرية المرتبطة بها.`}

خامساً: آلية معالجة واسترداد الأموال للعملاء
١. يتم فحص المنتجات المرتجعة فور وصولها إلى مستودعاتنا في ${country} للتأكد من مواءمتها التامة لشروط السياسة.
٢. في حال وافق فريق المستودعات على طلب الاسترجاع، سيقوم النظام تلقائياً بتحويل قيمة المنتجات المعنية مباشرة إلى العميل (باستثناء الرسوم الإدارية، رسوم التوصيل الأصلية، أو رسوم خدمة الدفع عند الاستلام).
٣. قد تستغرق عملية معالجة الأموال المستردة فترة تتراوح بين ٧ إلى ١٤ يوم عمل طبقاً لسياسات البنوك وبوابات الدفع الإلكتروني المعتمدة بالمتجر.

سادساً: للتواصل وتقديم طلبات الإرجاع
نأمل التكرم بالتواصل الفوري مع مركز الدعم وخدمات عملاء متجر ${storeName} عبر قنوات الاتصال التالية:
• البريد الإلكتروني: ${email}
• الدعم الفني عبر الواتساب المباشر: ${whatsapp}

نثمن ثقتكم الغالية واختيار الشراء من متجر ${storeName}! نحن دوماً في خدمتكم لتوفير أرقى تجارب التسوق الفاخرة الميسّرة.`;

    setGeneratedReturnPolicy(policy);
  };

  // 2. Privacy policy generator execution
  const handleGeneratePrivacy = (e: FormEvent) => {
    e.preventDefault();
    const storeName = privacyInputs.storeName || 'متجري المميز';
    const storeUrl = privacyInputs.storeUrl || 'www.example.com';
    const email = privacyInputs.email || 'info@example.com';
    const country = privacyInputs.country || 'المملكة العربية السعودية';
    const collectData = privacyInputs.collectData === 'yes';
    const useCookies = privacyInputs.useCookies === 'yes';

    const policy = `سياسة الخصوصية وسرية البيانات لمتجر ${storeName}

مرحباً بكم في متجر ${storeName} (${storeUrl}). يمثل الحفاظ على خصوصية وسرية بياناتكم الشخصية قيمة جوهرية وركيزة أساسية نبني عليها علاقتنا معكم. نوضح لكم في هذه الاتفاقية بنود جمع البيانات الشخصية والتعامل معها وطرق حمايتها بمتجر ${storeName} في ${country} بما يتماشى مع الأنظمة المحلية لحماية البيانات والخصوصية الرقمية:

أولاً: البيانات التي نقوم بمعالجتها واستخدامها
${collectData 
  ? `١. نقوم بجمع واستلام ومعالجة بعض المعلومات والبيانات الشخصية المقدمة بمحض إرادتك لتسهيل تجهيز المشتريات وحجز الشحنات واستلامها، وتشمل: الاسم بالكامل، رقم الهاتف الجوال، عنوان التوصيل الفعلي، البريد الإلكتروني، وتأكيدات عمليات الدفع الإلكتروني.
٢. نقوم بجمع وتوظيف هذه البيانات لغايات توفير الشحن، تسريع استلام الطلبات، إرسال فواتير الدفع والتحديثات، إعداد عروض تسويقية ملائمة وتتبع حالات السلات المهجورة لتحسين تجربتكم الشاملة.` 
  : `١. يسعى متجر ${storeName} لتقليل جمع البيانات غير الضرورية إلى الحد الأدنى، ولا نستبقي أي بيانات شخصية حساسة خارج إطار تجهيز الشراء الفوري وطلبات فواتير المشتريات والخدمات المحدودة تفادياً للاحتفاظ بالمعلومات الزائدة للعملاء.`}

ثانياً: ملفات تعريف الارتباط (Cookies) وتتبع الجلسات
${useCookies 
  ? `١. يستخدم متجرنا ملفات تعريف الارتباط (Cookies) لتخصيص محتوى المتجر وتحسين تجربة حركتكم وبقائكم في صفحات المتصفح.
٢. تساعد ملفات تعريف الارتباط على تذكر المنتجات الموجودة في سلة الشرائيات، وحفظ المشتريات التلقائية، وتخزين الإعدادات المفضلة، وتحسين سرعة استدعاء البيانات عند زيارتكم اللاحقة للموقع لتوثيق الجودة.` 
  : `١. لا يوظف متجرنا أي وسوم تتبع شخصية أو ملفات تعريف الارتباط النشطة لتتبع سلوك العميل، ونعتمد فقط على جلسات اتصال تقنية مؤقتة تنتهي بترميز إغلاق المتصفح لضمان أقصى مستويات السرية والراحة.`}

ثالثاً: سلامة البيانات وحظر مشاركتها مع أطراف ثالثة
١. يتعهد متجر ${storeName} في ${country} تعهداً قاطعاً وملفات أخلاقية صارمة بعدم بيع، تأجير، مقايضة، أو مشاركة أي جزء من أسرار وبيانات المتسوقين مع أي جهات خارجية أو تابعة لطرف ثالث لأغراض نفعية أو إعلانية.
٢. تتم مشاركة البيانات المحدودة المطلوبة فقط (تشمل الاسم، العنوان، ورقم الهاتف الجوال) مع مزودي الدعم اللوجستي وشركات الشحن المعتمدة (مثل سمسا، أرامكس، سبل، وغيرها) لإيصال طلبكم إلى باب المنزل بنجاح.

رابعاً: أمن المعلومات وتقنيات التدريع الرقمي
نحن نطبق بنية برمجية ذات جودة عالية وندمج بروتوكول التشفير الفخم والمتقدم (SSL/HTTPS) لحماية وتأمين نقل البيانات على الويب بالكامل لتفادي أي حالات للفقد، التعديل أو الاختراق غير المصرح به بأجهزة ريادية متكاملة.

خامساً: حقوق الزوار والعملاء
يحق لأي زائر لمتجر ${storeName} مراجعة وتحديث وتعديل أو حتى طلب الحذف الكامل والنهائي لملف بيانه الشخصي المسجل بقاعدة بياناتنا في أي وقت يشاء، شريطة عدم تضارب ذلك مع أي متطلبات محاسبية لفواتير سابقة أو تنظيمات رقابية محلية جارية بالدولة.

سادساً: للتواصل وتحديث حسابات البيانات
لأي طلب لحذف سجل البيانات أو في حال وجود استفسارات تخص سياسات الخصوصية وحماية البيانات، نرجو التكرم بالتواصل مع المسؤول لدينا بالبريد الإلكتروني:
${email}

نشكركم على ثقتكم الغالية بمتجر ${storeName}! يسرنا دائماً مرافقتكم وبناء بيئة تسوق مميزة وآمنة لأعمالكم.`;

    setGeneratedPrivacyPolicy(policy);
  };

  // 3. Platform comparison scoring engine
  const handleCalculateComparison = (e: FormEvent) => {
    e.preventDefault();
    const { projectSize, productCount, budget, country } = compInputs;

    let salla = 0;
    let zid = 0;
    let shopify = 0;

    // Country Scoring
    if (country === 'saudi') {
      salla += 5;
      zid += 5;
      shopify += 2;
    } else if (country === 'uae') {
      salla += 4;
      zid += 3;
      shopify += 3;
    } else if (country === 'egypt') {
      shopify += 4;
      salla += 2;
      zid += 2;
    } else {
      shopify += 6;
      salla += 1;
      zid += 1;
    }

    // Budget Scoring
    if (budget === 'low') {
      salla += 4;
      zid += 3;
      shopify += 1;
    } else if (budget === 'medium') {
      salla += 4;
      zid += 4;
      shopify += 3;
    } else {
      shopify += 5;
      salla += 3;
      zid += 3;
    }

    // Project Size Scoring
    if (projectSize === 'beginner') {
      salla += 4;
      zid += 3;
      shopify += 1;
    } else if (projectSize === 'growth') {
      salla += 4;
      zid += 4;
      shopify += 4;
    } else {
      shopify += 5;
      salla += 3;
      zid += 2;
    }

    // Product Count Scoring
    if (productCount === 'small') {
      salla += 3;
      zid += 3;
      shopify += 2;
    } else if (productCount === 'medium') {
      salla += 3;
      zid += 3;
      shopify += 3;
    } else {
      shopify += 5;
      salla += 3;
      zid += 2;
    }

    let recommended: 'salla' | 'zid' | 'shopify' = 'salla';
    const maxScore = Math.max(salla, zid, shopify);
    if (maxScore === salla) recommended = 'salla';
    else if (maxScore === zid) recommended = 'zid';
    else recommended = 'shopify';

    const meta: Record<'salla' | 'zid' | 'shopify', {
      name: string;
      reason: string;
      rating: number;
      advantages: string[];
      disadvantages: string[];
    }> = {
      salla: {
        name: 'سلة (Salla)',
        reason: 'تميزها الخارق والأكثر انتشاراً في السوق السعودي والخليجي مع تقديم سرعة فائقة ودعم كامل وفوري للمدفوعات المحلية مثل مدى وأبل باي مع تطبيق صفر٪ عمولة مبيعات في خططها المدفوعة، مما يجعلها الخيار النموذجي والاعتماد الأول لتشغيل متجر تجارة إلكترونية متطور دون كوست إضافي.',
        rating: 4.9,
        advantages: [
          'ربط لحظي وبلمحات كود كامل لمدى، فيزا، ماستركارد، وأبل باي.',
          'صفر٪ عمولة على المبيعات بداخل الباقات الشهرية الاحترافية (سلة برو والبلس).',
          'صفحات دفع سريعة بخطوة واحدة تزيد معدلات نجاح الشراء وتقلل تراجع السلات.',
          'لوحة تحكم وتطبيقات متجر متكامل ممتازة باللغة العربية مدعومة بدليل كامل.'
        ],
        disadvantages: [
          'صعوبة تخصيص تصميم المتجر بمظهر مخصص تماماً خارج نطاق الـ CSS والمطورين المعتمدين.',
          'محدودية الخيارات عند التوافق المطلق مع الدروب شيبنج الدولي مقارنة بشوبيفاي.'
        ]
      },
      zid: {
        name: 'زد (Zid)',
        reason: 'شريك الأتمتة الموثق والحل الأمثل للتجار والشركات الراغبة في بناء مظهر تجاري رصين متزامن مع معارض البيع الفعلية وبوابات تزويد شحن مركزية (Zid Ship & Zid Pay)، لخدمة المتاجر السريعة والمتوسطة التمدد.',
        rating: 4.7,
        advantages: [
          'عقد شراكة وشحن موحد مع "زد شب" يمنحك أفضل بريك وتخفيض شحن في السوق.',
          'منصة ممتازة لتكامل المتاجر الرقمية في فضاء واحد مع الفروع والبيع الواقعي لجرد أفضل.',
          'أكاديمية ودعم فني عربي ومباشر متميز لتأهيل الشركات والتجار للبيع الرقمي الاحترافي.',
          'لوحة تحكّم معززة لتقارير الأرباح والخسائر وحلول المحاسبة المتطورة.'
        ],
        disadvantages: [
          'عدد تطبيقات المتجر بسوق تطبيقات زد أقل بقليل مقارنة بالبنية التحتية لمنصة شوبيفاي.',
          'الكلفة المرتفعة نسبياً للخطط السنوية والخدمات المتقدمة قد تمثل عبءاً على رواد الأعمال المبتدئين.'
        ]
      },
      shopify: {
        name: 'Shopify (شوبيفاي)',
        reason: 'المنصة العالمية والريادية رقم #1 للدروب شيبنج والبراندات الفاخرة سريعة التمدد ذات الطابع متعدد العملات واللغات ومخازن الشحن الضخمة في مختلف دول وقارات العالم لضمان حرية مذهلة للتصميم والواجهات.',
        rating: 4.8,
        advantages: [
          'حرية استثنائية وبدون حدود للتخصيص والهندسة والتصميم مع لغة Liquid أو الواجهات المخصصة (Headless).',
          'عشرات الآلاف من التطبيقات والأكواد وحلول التسويق والذكاء الاصطناعي وبقاء البيكسلز.',
          'مثالي وعملي جداً لدروب شيبنج والتجارات الدولية والتكامل التلقائي مع الموردين في الصين وأمريكا.',
          'خوادم عملاقة تضمن تصفحاً فائق السرعة واستقراراً ممتازاً تحت أثقل هجمات زوار متزامنين.'
        ],
        disadvantages: [
          'اقتطاع عمولات وإضافات مالية مبيعات في حال عدم استخدام بوابات دفع شوبيفاي الرسمية.',
          'تراكم كلفة التطبيقات والخدمات وبدء تشغيل بوابات المطورين قد يجعل السعر الإجمالي باهظاً بالدولار.'
        ]
      }
    };

    setComparisonResult(meta[recommended]);
  };

  // Clipboard copies
  const handleCopyText = (text: string, type: 'return' | 'privacy') => {
    navigator.clipboard.writeText(text);
    if (type === 'return') {
      setCopiedReturn(true);
      setTimeout(() => setCopiedReturn(false), 2500);
    } else {
      setCopiedPrivacy(true);
      setTimeout(() => setCopiedPrivacy(false), 2500);
    }
  };

  // Printable PDF Generator window launcher
  const handlePrintPDF = (title: string, content: string) => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html dir="rtl" lang="ar">
          <head>
            <meta charset="UTF-8">
            <title>${title}</title>
            <link href="https://fonts.googleapis.com/css2family=Alexandria:wght@400;600;700&display=swap" rel="stylesheet">
            <style>
              body {
                font-family: 'Alexandria', sans-serif;
                padding: 40px;
                line-height: 1.8;
                color: #111111;
                background-color: #ffffff;
                direction: rtl;
                text-align: right;
              }
              .header {
                text-align: center;
                border-bottom: 3px solid #00bc7d;
                padding-bottom: 25px;
                margin-bottom: 35px;
              }
              .logo {
                color: #00bc7d;
                font-size: 32px;
                font-weight: 800;
                margin-bottom: 5px;
                letter-spacing: -1px;
              }
              .tagline {
                font-size: 11px;
                color: #666;
                text-transform: uppercase;
                letter-spacing: 2px;
              }
              .title {
                font-size: 20px;
                font-weight: 700;
                margin-top: 15px;
                color: #111111;
                background: #f4fbf8;
                display: inline-block;
                padding: 8px 18px;
                border-radius: 8px;
                border: 1px solid #00bc7d/20;
              }
              .content {
                font-size: 14px;
                white-space: pre-wrap;
                text-align: justify;
                color: #2e2e2e;
              }
              .footer {
                margin-top: 60px;
                border-top: 1px dashed #cccccc;
                padding-top: 20px;
                text-align: center;
                font-size: 11px;
                color: #888888;
              }
              @media print {
                body { padding: 20px; }
                .no-print { display: none; }
              }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="logo">VENTARIA</div>
              <div class="tagline">مستشار الحلول الرقمية والمتاجر الفاخرة</div>
              <div class="title">${title}</div>
            </div>
            <div class="content">${content}</div>
            <div class="footer">
              تم توليد هذا المستند الرسمي بواسطة أدوات فينتاريا المجانية لخدمة المتاجر الإلكترونية - © ${new Date().getFullYear()} Ventaria Digital
            </div>
            <script>
              window.onload = function() {
                window.print();
                setTimeout(function() { window.close(); }, 500);
              };
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <div id="free-tools-route-section" className="min-h-screen bg-white">
      
      {/* 🔮 SEO HERO HEADER FOR FREE TOOLS SECTION */}
      <section className="bg-gradient-to-b from-zinc-50 via-white to-white py-16 md:py-24 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold"
          >
            <Sparkles className="w-4 h-4" />
            <span>باقة فينتاريا لدعم التجار والمبتدئين</span>
          </motion.div>
          {/* SEO Optimized H1 Header */}
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-zinc-900 leading-tight tracking-tight">
            أدوات التجارة الإلكترونية المجانية
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-600 font-medium text-sm sm:text-base leading-relaxed">
            مستشارك الرقمي الفوري جاهز! قمنا بصياغة وتطوير هذه الأدوات الإرشادية لتمكين أصحاب المتاجر والمشاريع من توليد سياسات احترافية ومقارنة واختيار المنصات بدقة مجاناً بالكامل.
          </p>
        </div>
      </section>

      {/* 🧭 TABS SELECTOR / BACK TO DEEP MENU BAR */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 overflow-x-auto gap-4 no-scrollbar">
            
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 py-3 px-3.5 text-xs font-extrabold rounded-lg whitespace-nowrap transition-all ${activeTab === 'dashboard' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50'}`}
            >
              <ArrowLeft className="w-4 h-4 rotate-180" />
              <span>لوحة الأدوات الرئيسية</span>
            </button>

            <span className="text-zinc-300 hidden md:inline">|</span>

            {/* Micro Tabs List */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => {
                  setActiveTab('return-pdf');
                  setGeneratedReturnPolicy('');
                }}
                className={`flex items-center gap-1.5 py-2 px-3 text-xs font-bold rounded-lg transition-all ${activeTab === 'return-pdf' ? 'text-primary bg-primary/10' : 'text-zinc-500 hover:text-zinc-900'}`}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>سياسة الاسترجاع</span>
              </button>

              <button 
                onClick={() => {
                  setActiveTab('privacy-pdf');
                  setGeneratedPrivacyPolicy('');
                }}
                className={`flex items-center gap-1.5 py-2 px-3 text-xs font-bold rounded-lg transition-all ${activeTab === 'privacy-pdf' ? 'text-primary bg-primary/10' : 'text-zinc-500 hover:text-zinc-900'}`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>سياسة الخصوصية</span>
              </button>

              <button 
                onClick={() => {
                  setActiveTab('comparison');
                  setComparisonResult(null);
                }}
                className={`flex items-center gap-1.5 py-2 px-3 text-xs font-bold rounded-lg transition-all ${activeTab === 'comparison' ? 'text-primary bg-primary/10' : 'text-zinc-500 hover:text-zinc-900'}`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>مقارنة المنصات</span>
              </button>
            </div>

            <span className="text-zinc-300 hidden md:inline">|</span>

            {/* Quick Exit */}
            <button 
              onClick={onNavigateHome}
              className="text-zinc-600 hover:text-primary py-2 px-3 text-xs font-black transition-colors whitespace-nowrap"
            >
              العودة لموقع فينتاريا الرئيسي ⟵
            </button>

          </div>
        </div>
      </div>

      {/* 📦 TOOLS SELECTION CENTER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <AnimatePresence mode="wait">
          
          {/* A. DASHBOARD VIEW (3 Beautiful Modern SaaS Cards) */}
          {activeTab === 'dashboard' && (
            <motion.div 
              key="dashboard-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-12"
            >
              {/* Introduction header */}
              <div className="text-right space-y-1.5">
                <h2 className="font-display font-black text-xl sm:text-2xl text-zinc-900">اختر الأداة المناسبة لمشروعك الآن</h2>
                <p className="text-zinc-500 text-xs sm:text-sm">بنقرة واحدة، قمنا بهندسة الواجهات لتجهيز أعمالك دون عناء وبأداء ريادي مذهل.</p>
              </div>

              {/* Grid of the 3 SaaS cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* 1. Return & Refund Generator Card */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white border border-zinc-200/80 rounded-2xl p-6 hover:shadow-xl hover:border-primary/40 transition-all flex flex-col justify-between"
                  id="tool-card-return"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <RefreshCw className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-base text-zinc-900">
                        مولد سياسة الاسترجاع والاستبدال
                      </h3>
                      <p className="text-zinc-500 text-xs leading-relaxed mt-2 text-justify">
                        قم بصناعة وتوليد مستند سياسة استبدال واسترجاع احترافي ومتوافق مع شروط وزارة التجارة والمنظومات الدولية لزيادة ثقة عملائك وإثبات وضوح ومصداقية معاملاتك.
                      </p>
                    </div>
                  </div>
                  <div className="pt-6">
                    <button 
                      onClick={() => setActiveTab('return-pdf')}
                      className="w-full bg-[#111111] hover:bg-primary hover:text-white text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>تشغيل مولد السياسات المتقدم</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>

                {/* 2. Privacy Policy Generator Card */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white border border-zinc-200/80 rounded-2xl p-6 hover:shadow-xl hover:border-primary/40 transition-all flex flex-col justify-between"
                  id="tool-card-privacy"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-base text-zinc-900">
                        مولد سياسة الخصوصية وسرية البيانات
                      </h3>
                      <p className="text-zinc-500 text-xs leading-relaxed mt-2 text-justify">
                        احمِ متجرك وعملائك! ولّد سياسة خصوصية قانونية محكمة توضح تفاصيل معالجة البيانات، استخدام ملفات الـ Cookies وحقوق الزائر، لتأهيله بداخل بوابات الدفع وقوقل أدس.
                      </p>
                    </div>
                  </div>
                  <div className="pt-6">
                    <button 
                      onClick={() => setActiveTab('privacy-pdf')}
                      className="w-full bg-[#111111] hover:bg-primary hover:text-white text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>تجهيز وحفظ سياسة الخصوصية</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>

                {/* 3. Platform Comparison Card */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white border border-zinc-200/80 rounded-2xl p-6 hover:shadow-xl hover:border-primary/40 transition-all flex flex-col justify-between"
                  id="tool-card-comparison"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Scale className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-base text-zinc-900">
                        مقارنة سلة وزد و Shopify المتقدمة
                      </h3>
                      <p className="text-zinc-500 text-xs leading-relaxed mt-2 text-justify">
                        محتار بتقرير أي منصة أفضل لمتجرك؟ أدخل حجم مشروعك، عدد منتجاتك، وميزانيتك المتاحة للحصول على ترشيح فوري متناهي الدقة مدعوماً بتقرير المميزات، العيوب، وجدول المقارنات.
                      </p>
                    </div>
                  </div>
                  <div className="pt-6">
                    <button 
                      onClick={() => setActiveTab('comparison')}
                      className="w-full bg-[#111111] hover:bg-primary hover:text-white text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>تشغيل حاسبة مقارنة المنصات</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>

              </div>

              {/* 💡 Friendly reminder / Information Box */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 text-right max-w-4xl mx-auto flex items-start gap-4" id="tools-notice-box">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display font-extrabold text-sm text-zinc-900">هل تحتاج برمجيات وأدوات إضافية؟</h4>
                  <p className="text-zinc-600 text-xs leading-relaxed">
                    نسعى باستمرار لتطوير وتوفير الأدوات التي تبسط حياة التجار في الخليج العربي. جميع مولدات السياسات ومستندات الأكواد مبنية بامتثال كامل لتعليمات الدوائر الحكومية والأنظمة القياسية الدولية في المملكة العربية السعودية والكويت وغيرها.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* B. TAB 1: Return & Refund Policy */}
          {activeTab === 'return-pdf' && (
            <motion.div 
              key="return-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              
              {/* Sidebar Input Fields - 5 columns */}
              <div className="lg:col-span-5 bg-zinc-50 rounded-2xl p-6 sm:p-8 border border-zinc-200/80 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-sm text-zinc-900">معطيات سياسة الارتجاع</h3>
                    <p className="text-[11px] text-zinc-500">أدخل معلومات متجرك الرسمية وسيتم صياغتها في ثوانٍ</p>
                  </div>
                </div>

                <form onSubmit={handleGenerateReturn} className="space-y-4 leading-normal">
                  
                  {/* Store Name & Store URL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-zinc-800">اسم المتجر *</label>
                      <input 
                        type="text"
                        required
                        placeholder="مثال: واحة البن الفاخر"
                        value={returnInputs.storeName}
                        onChange={(e) => handleReturnChange('storeName', e.target.value)}
                        className="w-full text-xs font-bold px-3 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-primary bg-white text-zinc-900"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-zinc-800">رابط الموقع *</label>
                      <input 
                        type="text"
                        required
                        placeholder="مثال: mycoffeeshop.com"
                        value={returnInputs.storeUrl}
                        onChange={(e) => handleReturnChange('storeUrl', e.target.value)}
                        className="w-full text-xs font-bold px-3 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-primary bg-white text-zinc-900 text-left"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* Mail and Whatsapp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-zinc-800">البريد الإلكتروني للدعم *</label>
                      <input 
                        type="email"
                        required
                        placeholder="مثال: support@shop.com"
                        value={returnInputs.email}
                        onChange={(e) => handleReturnChange('email', e.target.value)}
                        className="w-full text-xs font-bold px-3 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-primary bg-white text-zinc-900 text-left"
                        dir="ltr"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-zinc-800">رقم الواتساب للدعم *</label>
                      <input 
                        type="text"
                        required
                        placeholder="مثال: 009665xxxxxxxx"
                        value={returnInputs.whatsapp}
                        onChange={(e) => handleReturnChange('whatsapp', e.target.value)}
                        className="w-full text-xs font-bold px-3 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-primary bg-white text-zinc-900 text-left"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* Period in Days */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-zinc-800">فترة الاسترجاع (بالأيام)</label>
                      <select 
                        value={returnInputs.returnDays}
                        onChange={(e) => handleReturnChange('returnDays', e.target.value)}
                        className="w-full text-xs font-bold px-2 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-primary bg-white text-zinc-800"
                      >
                        <option value="3">٣ أيام (محدودة جداً)</option>
                        <option value="7">٧ أيام (المعيار الخليجي الشائع)</option>
                        <option value="14">١٤ يوماً (حق المستهلك القانوني)</option>
                        <option value="30">٣٠ يوماً (للماركات العالمية)</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-zinc-800">فترة الاستبدال (بالأيام)</label>
                      <select 
                        value={returnInputs.exchangeDays}
                        onChange={(e) => handleReturnChange('exchangeDays', e.target.value)}
                        className="w-full text-xs font-bold px-2 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-primary bg-white text-zinc-800"
                      >
                        <option value="7">٧ أيام</option>
                        <option value="14">١٤ يوماً (المدى الشائع)</option>
                        <option value="30">٣٠ يوماً (الحد الأقصى المريح)</option>
                      </select>
                    </div>
                  </div>

                  {/* Yes or No for discounted products */}
                  <div className="space-y-1">
                    <label className="text-xs font-extrabold text-zinc-800">هل يوجد استرجاع للمنتجات الخاضعة لخصومات؟</label>
                    <div className="flex gap-4 pt-1">
                      <label className="flex items-center gap-1.5 text-xs text-zinc-700 font-bold cursor-pointer">
                        <input 
                          type="radio" 
                          name="allowSale" 
                          value="yes"
                          checked={returnInputs.allowSaleItems === 'yes'}
                          onChange={() => handleReturnChange('allowSaleItems', 'yes')}
                          className="accent-primary"
                        />
                        <span>نعم، يُسمح كلياً بصفتها حق طبيعي</span>
                      </label>
                      <label className="flex items-center gap-1.5 text-xs text-zinc-700 font-bold cursor-pointer">
                        <input 
                          type="radio" 
                          name="allowSale" 
                          value="no"
                          checked={returnInputs.allowSaleItems === 'no'}
                          onChange={() => handleReturnChange('allowSaleItems', 'no')}
                          className="accent-primary"
                        />
                        <span>لا، الاستبدال فقط أو تصفيات نهائية</span>
                      </label>
                    </div>
                  </div>

                  {/* Yes or No for digital items */}
                  <div className="space-y-1">
                    <label className="text-xs font-extrabold text-zinc-800">هل يوجد استرجاع للمنتجات والخدمات الرقمية؟</label>
                    <div className="flex gap-4 pt-1">
                      <label className="flex items-center gap-1.5 text-xs text-zinc-700 font-bold cursor-pointer">
                        <input 
                          type="radio" 
                          name="allowDigital" 
                          value="yes"
                          checked={returnInputs.allowDigitalItems === 'yes'}
                          onChange={() => handleReturnChange('allowDigitalItems', 'yes')}
                          className="accent-primary"
                        />
                        <span>نعم، يسمح قبل التفعيل للملف</span>
                      </label>
                      <label className="flex items-center gap-1.5 text-xs text-zinc-700 font-bold cursor-pointer">
                        <input 
                          type="radio" 
                          name="allowDigital" 
                          value="no"
                          checked={returnInputs.allowDigitalItems === 'no'}
                          onChange={() => handleReturnChange('allowDigitalItems', 'no')}
                          className="accent-primary"
                        />
                        <span>لا، المنتجات الرقمية نهائية وغير مستردة</span>
                      </label>
                    </div>
                  </div>

                  {/* Country Selection */}
                  <div className="space-y-1">
                    <label className="text-xs font-extrabold text-zinc-800">الدولة / بلد المتجر</label>
                    <input 
                      type="text"
                      placeholder="مثل: المملكة العربية السعودية"
                      value={returnInputs.country}
                      onChange={(e) => handleReturnChange('country', e.target.value)}
                      className="w-full text-xs font-bold px-3 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-primary bg-white text-zinc-900"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-[#009e68] text-white hover:text-white py-3 rounded-xl font-extrabold text-center text-sm transition-all duration-200 mt-2"
                  >
                    توليد السياسة الاحترافية الآن
                  </button>

                </form>
              </div>

              {/* Output Content Editor - 7 columns */}
              <div className="lg:col-span-12 xl:col-span-7 space-y-4">
                {generatedReturnPolicy ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-extrabold text-sm text-zinc-900 flex items-center gap-1.5">
                        <FileText className="w-5 h-5 text-primary" />
                        <span>سياسة الاسترجاع الجاهزة لمتجرك</span>
                      </h4>
                      
                      {/* Control panel buttons */}
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleCopyText(generatedReturnPolicy, 'return')}
                          className="flex items-center gap-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs px-3 py-2 rounded-xl transition-all font-black"
                        >
                          {copiedReturn ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                          <span>{copiedReturn ? 'تم النسخ!' : 'نسخ السياسة'}</span>
                        </button>

                        <button 
                          onClick={() => handlePrintPDF(`سياسة الاسترجاع والاستبدال لمتجر ${returnInputs.storeName || 'فينتار'}`, generatedReturnPolicy)}
                          className="flex items-center gap-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-white text-xs px-3 py-2 rounded-xl transition-all font-black"
                        >
                          <Download className="w-4 h-4" />
                          <span>تحميل PDF</span>
                        </button>
                      </div>
                    </div>

                    {/* Rich text editor screen mock */}
                    <div className="bg-zinc-900 text-zinc-100 rounded-2xl p-6 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed overflow-y-auto max-h-[500px] border border-zinc-800 shadow-inner whitespace-pre-wrap text-justify">
                      {generatedReturnPolicy}
                    </div>

                    {/* CONVERSION CTA PANEL */}
                    <div className="bg-emerald-50/50 border border-primary/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                      <div className="text-right space-y-1">
                        <h5 className="font-display font-black text-sm text-zinc-900">هل تحتاج متجراً احترافياً أو هوية بصرية مخصصة؟</h5>
                        <p className="text-zinc-500 text-xs">نحن نساعدك لتأسيس المتجر بتفاصيل فريدة وبرمجة مخصصة تزيد البيع.</p>
                      </div>
                      <button 
                        onClick={onContactClick}
                        className="bg-zinc-950 hover:bg-primary text-white hover:text-white px-5 py-2.5 rounded-xl font-black text-xs shrink-0 transition-all flex items-center gap-1.5"
                      >
                        <span>اطلب استشارة مجانية</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                  </motion.div>
                ) : (
                  <div className="border-2 border-dashed border-zinc-200 rounded-2xl p-12 text-center text-zinc-400 space-y-3">
                    <div className="w-14 h-14 bg-zinc-50 rounded-full flex items-center justify-center mx-auto">
                      <RefreshCw className="w-8 h-8 text-zinc-300" />
                    </div>
                    <div className="space-y-1 font-sans">
                      <p className="font-bold text-sm text-zinc-700">بانتظار إدخال المعطيات</p>
                      <p className="text-xs text-zinc-500">قم بتعبئة نموذج الحقول على اليمين ثم اضغط على زر "توليد السياسة" لعرض المكاتيب هنا</p>
                    </div>
                  </div>
                )}
              </div>

            </motion.div>
          )}

          {/* C. TAB 2: Privacy Policy Generator */}
          {activeTab === 'privacy-pdf' && (
            <motion.div 
              key="privacy-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              
              {/* Sidebar Input Fields - 5 columns */}
              <div className="lg:col-span-5 bg-zinc-50 rounded-2xl p-6 sm:p-8 border border-zinc-200/80 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-sm text-zinc-900">بيانات سياسة الخصوصية</h3>
                    <p className="text-[11px] text-zinc-500">ولّد اتفاقية حماية معلومات تتطابق مع القوانين والمدفوعات</p>
                  </div>
                </div>

                <form onSubmit={handleGeneratePrivacy} className="space-y-4 leading-normal">
                  
                  {/* Store Name & Store URL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-zinc-800">اسم المتجر *</label>
                      <input 
                        type="text"
                        required
                        placeholder="مثال: واحة البن الفاخر"
                        value={privacyInputs.storeName}
                        onChange={(e) => handlePrivacyChange('storeName', e.target.value)}
                        className="w-full text-xs font-bold px-3 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-primary bg-white text-zinc-900"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-zinc-800">رابط الموقع *</label>
                      <input 
                        type="text"
                        required
                        placeholder="مثال: mycoffeeshop.com"
                        value={privacyInputs.storeUrl}
                        onChange={(e) => handlePrivacyChange('storeUrl', e.target.value)}
                        className="w-full text-xs font-bold px-3 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-primary bg-white text-zinc-900 text-left"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* Mail and Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-zinc-800">البريد المعتمد *</label>
                      <input 
                        type="email"
                        required
                        placeholder="مثال: privacy@shop.com"
                        value={privacyInputs.email}
                        onChange={(e) => handlePrivacyChange('email', e.target.value)}
                        className="w-full text-xs font-bold px-3 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-primary bg-white text-zinc-900 text-left"
                        dir="ltr"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-zinc-800">دولة المتجر والمقود</label>
                      <input 
                        type="text"
                        placeholder="مثل: المملكة العربية السعودية"
                        value={privacyInputs.country}
                        onChange={(e) => handlePrivacyChange('country', e.target.value)}
                        className="w-full text-xs font-bold px-3 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-primary bg-white text-zinc-900"
                      />
                    </div>
                  </div>

                  {/* Yes or No for Customer Data Collection */}
                  <div className="space-y-1">
                    <label className="text-xs font-extrabold text-zinc-800">هل يتم جمع بيانات العملاء (الاسم، الجوال، الشحن...)؟</label>
                    <div className="flex gap-4 pt-1">
                      <label className="flex items-center gap-1.5 text-xs text-zinc-700 font-bold cursor-pointer">
                        <input 
                          type="radio" 
                          name="collectData" 
                          value="yes"
                          checked={privacyInputs.collectData === 'yes'}
                          onChange={() => handlePrivacyChange('collectData', 'yes')}
                          className="accent-primary"
                        />
                        <span>نعم لتسهيل الفوترة وتوصيل الطلبيات</span>
                      </label>
                      <label className="flex items-center gap-1.5 text-xs text-zinc-700 font-bold cursor-pointer">
                        <input 
                          type="radio" 
                          name="collectData" 
                          value="no"
                          checked={privacyInputs.collectData === 'no'}
                          onChange={() => handlePrivacyChange('collectData', 'no')}
                          className="accent-primary"
                        />
                        <span>لا، نجمع معطيات ثانوية ومحدودة جداً</span>
                      </label>
                    </div>
                  </div>

                  {/* Yes or No for Cookies */}
                  <div className="space-y-1">
                    <label className="text-xs font-extrabold text-zinc-800">هل يتم استخدام ملفات تعريف الارتباط Cookies بالمتصفح؟</label>
                    <div className="flex gap-4 pt-1">
                      <label className="flex items-center gap-1.5 text-xs text-zinc-700 font-bold cursor-pointer">
                        <input 
                          type="radio" 
                          name="useCookies" 
                          value="yes"
                          checked={privacyInputs.useCookies === 'yes'}
                          onChange={() => handlePrivacyChange('useCookies', 'yes')}
                          className="accent-primary"
                        />
                        <span>نعم، لحفظ السلات والخيارات المفضلة</span>
                      </label>
                      <label className="flex items-center gap-1.5 text-xs text-zinc-700 font-bold cursor-pointer">
                        <input 
                          type="radio" 
                          name="useCookies" 
                          value="no"
                          checked={privacyInputs.useCookies === 'no'}
                          onChange={() => handlePrivacyChange('useCookies', 'no')}
                          className="accent-primary"
                        />
                        <span>لا نستخدمها لأمان كامل وحرية تصفح</span>
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-[#009e68] text-white hover:text-white py-3 rounded-xl font-extrabold text-center text-sm transition-all duration-200 mt-2"
                  >
                    تجهيز وتوليد سياسة الخصوصية
                  </button>

                </form>
              </div>

              {/* Output Content Editor - 7 columns */}
              <div className="lg:col-span-12 xl:col-span-7 space-y-4">
                {generatedPrivacyPolicy ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-extrabold text-sm text-zinc-900 flex items-center gap-1.5">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <span>سياسة الخصوصية وسرية المعلومات</span>
                      </h4>
                      
                      {/* Control panel buttons */}
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleCopyText(generatedPrivacyPolicy, 'privacy')}
                          className="flex items-center gap-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs px-3 py-2 rounded-xl transition-all font-black"
                        >
                          {copiedPrivacy ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                          <span>{copiedPrivacy ? 'تم النسخ!' : 'نسخ'}</span>
                        </button>

                        <button 
                          onClick={() => handlePrintPDF(`سياسة الخصوصية وحماية بيانات لمتجر ${privacyInputs.storeName || 'فينتار'}`, generatedPrivacyPolicy)}
                          className="flex items-center gap-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-white text-xs px-3 py-2 rounded-xl transition-all font-black"
                        >
                          <Download className="w-4 h-4" />
                          <span>تحميل PDF</span>
                        </button>
                      </div>
                    </div>

                    {/* Rich text editor screen mock */}
                    <div className="bg-zinc-900 text-zinc-100 rounded-2xl p-6 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed overflow-y-auto max-h-[500px] border border-zinc-800 shadow-inner whitespace-pre-wrap text-justify">
                      {generatedPrivacyPolicy}
                    </div>

                    {/* CONVERSION CTA PANEL */}
                    <div className="bg-emerald-50/50 border border-primary/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                      <div className="text-right space-y-1">
                        <h5 className="font-display font-black text-sm text-zinc-900">هل تبحث عن متجر متكامل بهوية رقمية نادرة؟</h5>
                        <p className="text-zinc-500 text-xs">نحن نبتكر تصاميم فريدة تجعل متجرك يلمع كبراند فاخر في السوق.</p>
                      </div>
                      <button 
                        onClick={onContactClick}
                        className="bg-zinc-950 hover:bg-primary text-white hover:text-white px-5 py-2.5 rounded-xl font-black text-xs shrink-0 transition-all flex items-center gap-1.5"
                      >
                        <span>اطلب استشارة مجانية</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                  </motion.div>
                ) : (
                  <div className="border-2 border-dashed border-zinc-200 rounded-2xl p-12 text-center text-zinc-400 space-y-3">
                    <div className="w-14 h-14 bg-zinc-50 rounded-full flex items-center justify-center mx-auto">
                      <ShieldCheck className="w-8 h-8 text-zinc-300" />
                    </div>
                    <div className="space-y-1 font-sans">
                      <p className="font-bold text-sm text-zinc-700">بانتظار إدخال المعطيات</p>
                      <p className="text-xs text-zinc-500">قم بتعبئة نموذج الحقول على اليمين ثم اضغط على زر "توليد السياسة" لعرض المكاتيب هنا</p>
                    </div>
                  </div>
                )}
              </div>

            </motion.div>
          )}

          {/* D. TAB 3: Salla vs Zid vs Shopify Comparison Tool */}
          {activeTab === 'comparison' && (
            <motion.div 
              key="comparison-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-12"
            >
              
              {/* Form Input fields */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-sm text-zinc-900">معلمات وحجم مشروعك التجاري</h3>
                    <p className="text-[11px] text-zinc-500">اختر المعطيات لحساب المنصة الأقوى والأوفر لمتجرك بالتحديد</p>
                  </div>
                </div>

                <form onSubmit={handleCalculateComparison} className="grid grid-cols-1 sm:grid-cols-4 gap-6 items-end leading-normal">
                  
                  {/* Project Size */}
                  <div className="space-y-1">
                    <label className="text-xs font-extrabold text-zinc-800">حجم المشروع وعمر التشغيل</label>
                    <select 
                      value={compInputs.projectSize}
                      onChange={(e) => handleCompChange('projectSize', e.target.value)}
                      className="w-full text-xs font-bold px-2 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-primary bg-white text-zinc-850"
                    >
                      <option value="beginner">مبتدئ / تجريبي أو فكرة ناشئة</option>
                      <option value="growth">متوسط / نمو متسارع ومبيعات نشطة</option>
                      <option value="enterprise">مؤسسة / براند شهير بمخازن ضخمة</option>
                    </select>
                  </div>

                  {/* Product count */}
                  <div className="space-y-1">
                    <label className="text-xs font-extrabold text-zinc-800">عدد المنتجات بالمتجر</label>
                    <select 
                      value={compInputs.productCount}
                      onChange={(e) => handleCompChange('productCount', e.target.value)}
                      className="w-full text-xs font-bold px-2 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-primary bg-white text-zinc-850"
                    >
                      <option value="small">من ١ إلى ٢٠ منتج (كتالوج ناعم)</option>
                      <option value="medium">من ٢١ إلى ١٠٠ منتج (متوسط)</option>
                      <option value="large">أكثر من ١٠٠ منتج (كتالوج ضخم وعريض)</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-1">
                    <label className="text-xs font-extrabold text-zinc-800">الميزانية الشهرية المقرّرة للبنية</label>
                    <select 
                      value={compInputs.budget}
                      onChange={(e) => handleCompChange('budget', e.target.value)}
                      className="w-full text-xs font-bold px-2 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-primary bg-white text-zinc-850"
                    >
                      <option value="low">منخفضة (أقل من ٣٠٠ ريال شهرياً)</option>
                      <option value="medium">متوسطة (٣٠٠ - ١٠٠٠ ريال شهرياً)</option>
                      <option value="high">عالية (أكثر من ١٠٠٠ ريال شهرياً)</option>
                    </select>
                  </div>

                  {/* Country */}
                  <div className="space-y-1">
                    <label className="text-xs font-extrabold text-zinc-800">البلد / السوق الأساسي المستهدف</label>
                    <select 
                      value={compInputs.country}
                      onChange={(e) => handleCompChange('country', e.target.value)}
                      className="w-full text-xs font-bold px-2 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-primary bg-white text-zinc-850"
                    >
                      <option value="saudi">المملكة العربية السعودية 🇸🇦</option>
                      <option value="uae">الدول الخليجية الأخرى والمشتركة 🇦🇪</option>
                      <option value="egypt">جمهورية مصر العربية 🇪🇬</option>
                      <option value="global">باقي دول العالم / ومبيعات عابرة للحدود 🌍</option>
                    </select>
                  </div>

                  {/* CTA button */}
                  <div className="sm:col-span-4">
                    <button 
                      type="submit"
                      className="w-full bg-[#111111] hover:bg-primary text-white hover:text-white py-3.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all"
                    >
                      احسب وقارن ورشّح المنصة النخبوية لمتجري
                    </button>
                  </div>

                </form>
              </div>

              {/* Outputs display */}
              {comparisonResult ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-12"
                >
                  
                  {/* A. Winning Recommendation Card */}
                  <div className="bg-zinc-950 text-white rounded-3xl p-6 sm:p-10 border border-zinc-800 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl pointer-events-none"></div>

                    <div className="relative space-y-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="space-y-1 text-right">
                          <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-[10px] font-black tracking-wide uppercase">المنصة المرشحة والأنسب لمشروعك</span>
                          <h4 className="font-display font-black text-2xl sm:text-3xl text-white pt-2">{comparisonResult.name}</h4>
                        </div>
                        <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-2xl self-start sm:self-auto">
                          <span className="text-amber-400 font-extrabold text-lg">★</span>
                          <span className="font-mono text-sm font-bold text-zinc-300">التقييم العام:</span>
                          <span className="font-sans text-sm font-black text-white">{comparisonResult.rating}/5</span>
                        </div>
                      </div>

                      {/* Reason text */}
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed text-justify border-t border-zinc-800 pt-5">
                        <strong className="text-white">سبب الترشيح: </strong> 
                        {comparisonResult.reason}
                      </p>

                      {/* Pros & Cons list */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                        
                        {/* Advantages list */}
                        <div className="bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800/40 space-y-3">
                          <h5 className="font-display font-extrabold text-xs text-primary flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            الميزات وقيمة الفوز:
                          </h5>
                          <ul className="space-y-2 text-[11px] sm:text-xs text-zinc-300 leading-normal list-none">
                            {comparisonResult.advantages.map((adv: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-primary font-bold shrink-0">✓</span>
                                <span>{adv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Disadvantages list */}
                        <div className="bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800/40 space-y-3">
                          <h5 className="font-display font-extrabold text-xs text-red-400 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-red-400"></span>
                            العيوب والتحديات:
                          </h5>
                          <ul className="space-y-2 text-[11px] sm:text-xs text-zinc-300 leading-normal list-none">
                            {comparisonResult.disadvantages.map((dis: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-red-400 font-bold shrink-0">✗</span>
                                <span>{dis}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* B. Deep Comparison Table Panel */}
                  <div className="space-y-5">
                    <div className="text-right">
                      <h4 className="font-display font-black text-base text-zinc-900">جدول المقارنة التفصيلية الشاملة</h4>
                      <p className="text-zinc-500 text-[11px]">جدول يوضح الفروق التقنية البحتة بناءً على دراساتنا للشركات بالسوق العربي</p>
                    </div>

                    <div className="border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
                      <div className="overflow-x-auto">
                        <table className="w-full text-right text-xs">
                          <thead className="bg-zinc-50 text-zinc-700 font-extrabold border-b border-zinc-200">
                            <tr>
                              <th className="px-4 py-3.5 sm:px-6">المعايير والخصائص</th>
                              <th className="px-4 py-3.5 sm:px-6">سلة (Salla)</th>
                              <th className="px-4 py-3.5 sm:px-6">زد (Zid)</th>
                              <th className="px-4 py-3.5 sm:px-6 text-[#111111]">Shopify (شوبيفاي)</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-zinc-150 font-medium text-zinc-600">
                            
                            {/* Ease of use */}
                            <tr>
                              <td className="px-4 py-3 font-extrabold text-zinc-900 bg-zinc-50/50 sm:px-6">سهولة الاستخدام</td>
                              <td className="px-4 py-3 text-emerald-600 font-bold sm:px-6">ممتازة (لوحة تحكم وتوجيه عربي متكامل)</td>
                              <td className="px-4 py-3 text-emerald-600 font-bold sm:px-6">سهلة جداً (تدريب مجاني وفوري للتجار)</td>
                              <td className="px-4 py-3 text-amber-600 sm:px-6">متوسطة (مسار تعلم بالإنكليزي يتطلب وعياً)</td>
                            </tr>

                            {/* customization */}
                            <tr>
                              <td className="px-4 py-3 font-extrabold text-zinc-900 bg-zinc-50/50 sm:px-6">التخصيص والتحكم</td>
                              <td className="px-4 py-3 text-amber-600 sm:px-6">محدودة (قوالب مسبقة مع تعديل CSS خفيف)</td>
                              <td className="px-4 py-3 text-amber-600 sm:px-6">محدودة (قوالب جاهزة قابلة للتعديل الهيكلي)</td>
                              <td className="px-4 py-3 text-emerald-600 font-bold sm:px-6">مفتوحة بالكامل (حرية تحرير الأكواد كاملة)</td>
                            </tr>

                            {/* cost */}
                            <tr>
                              <td className="px-4 py-3 font-extrabold text-zinc-900 bg-zinc-50/50 sm:px-6">التكلفة والرسوم</td>
                              <td className="px-4 py-3 text-emerald-600 font-bold sm:px-6">اشتراك شهري ثابت (صفر عمولة مبيعات)</td>
                              <td className="px-4 py-3 text-emerald-600 font-bold sm:px-6">باقات شهرية/سنوية (صفر عمولة)</td>
                              <td className="px-4 py-3 text-red-500 sm:px-6">مرتفعة (اشتراك بالدولار + عمولة مبيعات)</td>
                            </tr>

                            {/* apps */}
                            <tr>
                              <td className="px-4 py-3 font-extrabold text-zinc-900 bg-zinc-50/50 sm:px-6">تطبيقات المتجر</td>
                              <td className="px-4 py-3 sm:px-6">متوسطة وممتازة (محلية للتوصيل والدفع)</td>
                              <td className="px-4 py-3 sm:px-6">جيدة وقائمة بشكل أساسي على تكامل زد</td>
                              <td className="px-4 py-3 text-emerald-600 font-bold sm:px-6">عملاقة (أكثر من ٨٠٠٠ تطبيق وبرمجية)</td>
                            </tr>

                            {/* Arabic support */}
                            <tr>
                              <td className="px-4 py-3 font-extrabold text-zinc-900 bg-zinc-50/50 sm:px-6">الدعم العربي</td>
                              <td className="px-4 py-3 text-emerald-600 font-bold sm:px-6">ممتاز وفوري عبر التذاكر والشات</td>
                              <td className="px-4 py-3 text-emerald-600 font-bold sm:px-6">ممتاز جداً (مدراء حسابات وندوات فورية)</td>
                              <td className="px-4 py-3 text-red-500 sm:px-6">محدود أو غير مخصص للسعودية</td>
                            </tr>

                            {/* payment gates */}
                            <tr>
                              <td className="px-4 py-3 font-extrabold text-zinc-900 bg-zinc-50/50 sm:px-6">خيارات الدفع</td>
                              <td className="px-4 py-3 text-emerald-600 font-bold sm:px-6">رائعة (تكامل تام مع مدى وباي وسامسونج)</td>
                              <td className="px-4 py-3 text-emerald-600 font-bold sm:px-6">ممتازة (خدمة زد باي شاملة كل شيء)</td>
                              <td className="px-4 py-3 text-amber-600 sm:px-6">متاحة (تحتاج طرف وسيط للربط بمدى)</td>
                            </tr>

                            {/* speed */}
                            <tr>
                              <td className="px-4 py-3 font-extrabold text-zinc-900 bg-zinc-50/50 sm:px-6">السرعة والأداء</td>
                              <td className="px-4 py-3 text-emerald-600 font-bold sm:px-6">سريعة جداً (خوادم مهيأة للمنطقة)</td>
                              <td className="px-4 py-3 text-emerald-600 font-bold sm:px-6">سريعة وممتازة وخفيفة الوزن</td>
                              <td className="px-4 py-3 text-emerald-600 font-bold sm:px-6">خارقة (بنية تحتية عملاقة لا تقهر)</td>
                            </tr>

                            {/* seo */}
                            <tr>
                              <td className="px-4 py-3 font-extrabold text-zinc-900 bg-zinc-50/50 sm:px-6">محركات البحث SEO</td>
                              <td className="px-4 py-3 sm:px-6">جيدة وتوفر أساسيات أرشفة المقالات والمنتجات</td>
                              <td className="px-4 py-3 sm:px-6">جيدة جداً مع أتمتة خريطة الموقع</td>
                              <td className="px-4 py-3 text-emerald-600 font-bold sm:px-6">منقطعة النظير (تحكم شامل وسرعة بالوسوم)</td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* CONVERSION CTA PANEL */}
                  <div className="bg-emerald-50/50 border border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6" id="comp-cta-card">
                    <div className="text-right space-y-1">
                      <h4 className="font-display font-black text-sm sm:text-base text-zinc-900">هل تحتاج متجراً احترافياً ببرمجة وتصميم مخصص لك تماماً؟</h4>
                      <p className="text-zinc-500 text-xs sm:text-sm">سواء اخترت سلة، زد أو شوبيفاي؛ فينتاريا مجهزة بالكامل لتصميم وتحسين متجرك ورفد واجهاته بكود مخصص خارق.</p>
                    </div>
                    <button 
                      onClick={onContactClick}
                      className="bg-zinc-950 hover:bg-primary text-white hover:text-white px-6 py-3 rounded-xl font-black text-xs sm:text-sm shrink-0 transition-all flex items-center gap-1.5 shadow-md shadow-zinc-200"
                    >
                      <span>اطلب استشارة مجانية</span>
                      <ArrowUpRight className="w-4.5 h-4.5" />
                    </button>
                  </div>

                </motion.div>
              ) : (
                <div className="border-2 border-dashed border-zinc-200 rounded-2xl p-12 text-center text-zinc-400 space-y-3">
                  <div className="w-14 h-14 bg-zinc-50 rounded-full flex items-center justify-center mx-auto">
                    <Scale className="w-8 h-8 text-zinc-300" />
                  </div>
                  <div className="space-y-1 font-sans">
                    <p className="font-bold text-sm text-zinc-700">بانتظار إدخال وحفظ المعطيات</p>
                    <p className="text-xs text-zinc-500">قم باختيار معلمات وحجم مشروعك وتكلفة الميزانية في الأعلى ثم اضغط على زر "احسب وقارن"</p>
                  </div>
                </div>
              )}

            </motion.div>
          )}

        </AnimatePresence>
      </main>

    </div>
  );
}
