import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Info, Sparkles, HelpCircle, PhoneCall, Gift, Zap } from 'lucide-react';
import { Language, CurrencyConfig, CountryConfig } from '../types';
import { countries, currencies } from '../data/translations';

interface PricingSectionProps {
  lang: Language;
  currency: CurrencyConfig;
  activeCountry: CountryConfig;
  setActiveCountry: (country: CountryConfig) => void;
  setCurrency: (currency: CurrencyConfig) => void;
  t: any;
}

export default function PricingSection({
  lang,
  currency,
  activeCountry,
  setActiveCountry,
  setCurrency,
  t
}: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'oneTime'>('oneTime');

  // Custom packages with exact pricing structures as requested by USER
  const basePackages = {
    starter: {
      titleEn: "Starter Website",
      titleAr: "الباقة التمهيدية (Starter)",
      pricesOneTime: { EGP: 7500, SAR: 650, USD: 180, AED: 640 },
      pricesMonthly: { EGP: 750, SAR: 65, USD: 18, AED: 64 },
      suitableAr: "مناسبة للشركات الناشئة والمشاريع الصغيرة",
      suitableEn: "Suitable for startups and small businesses",
      featuresAr: [
        "تصميم مخصص واحترافي بالكامل",
        "تطوير ما يصل إلى 5 صفحات رئيسية وفرعية",
        "تصميم متكامل متوافق مع كافة الشاشات والذكية",
        "ربط فوري ومباشر لزر واتساب التفاعلي",
        "نموذج تواصل واستلام طلبات متطور",
        "تهيئات السيو التقنية الأوليّة لمحركات البحث Google",
        "تحسين سرعة التحميل والارتقاء بالأداء",
        "تفعيل تواصل الأمان وشهادات SSL مجاناً",
        "ضمان وصيانة مجانية لمدة 14 يوماً"
      ],
      featuresEn: [
        "Fully professional custom design",
        "Up to 5 highly-optimized pages",
        "100% mobile & tablet responsive layouts",
        "Direct dynamic WhatsApp chat integration",
        "Secure interactive client contact form",
        "Core Google SEO structuring setup",
        "Blazing-fast page loading speed optimization",
        "Complimentary SSL certificate configuration",
        "14 days premium engineering maintenance"
      ]
    },
    business: {
      titleEn: "Business Website",
      titleAr: "الباقة الاحترافية (Business)",
      pricesOneTime: { EGP: 17500, SAR: 1500, USD: 420, AED: 1480 },
      pricesMonthly: { EGP: 1750, SAR: 150, USD: 42, AED: 148 },
      popular: true,
      suitableAr: "الخيار الأمثل للشركات القائمة والراغبة بالتميز",
      suitableEn: "Perfect for established firms looking to scale",
      featuresAr: [
        "كافة مزايا الباقة التمهيدية (Starter)",
        "تطوير ما يصل إلى 15 صفحة مخصصة",
        "تصميم واجهات وتجربة مستخدم فاخرة (Premium UI/UX)",
        "نظام متكامل لنشر وإدارة المدونات والأخبار",
        "عدد غير محدود من صفحات عرض الخدمات",
        "تهيئة سيو متقدمة (Advanced Google SEO)",
        "ربط أدوات ومؤشرات التحليل وإحصائيات الزوار",
        "نماذج مرنة لجمع بيانات وتقارير العملاء المستهدفين",
        "معرض أعمال تفاعلي مدمج لعرض المشروعات",
        "حركات وتأثيرات بصرية بالغة الأركان والجاذبية",
        "ضمان وصيانة فنية وهندسية شاملة لمدة شهرين (2)"
      ],
      featuresEn: [
        "Includes everything in the Starter package",
        "Up to 15 completely custom pages",
        "Cinematic high-prestige UI/UX design features",
        "Full-scale blogging and news publishing CMS",
        "Unlimited custom services showcase pages",
        "Advanced comprehensive SEO positioning setup",
        "Detailed visitor analytics & tracking integration",
        "High-converting interactive lead pipelines",
        "Integrated portfolio section for showcasing projects",
        "Sleek custom animations & fluid scrolling effects",
        "2 months priority engineering maintenance & support"
      ]
    },
    ecommerce: {
      titleEn: "eCommerce Store",
      titleAr: "متجر إلكتروني فاخر (eCommerce)",
      pricesOneTime: { EGP: 29500, SAR: 2500, USD: 700, AED: 2450 },
      pricesMonthly: { EGP: 2950, SAR: 250, USD: 70, AED: 245 },
      suitableAr: "للشركات الراغبة في تنظيم وبيع السلع والتحصيل",
      suitableEn: "Engineered to maximize digital transactions",
      featuresAr: [
        "منصة متجر إلكتروني متكاملة فائقة الحماية والأداء",
        "إمكانية إضافة عدد غير محدود من المنتجات والسلع",
        "تصنيفات وعلامات ومرشحات تصفح ذكية وبسيطة",
        "نظام كوبونات وأكواد وبطاقات خصم وتوليد قسائم",
        "ربط مع بوابات الدفع الإلكتروني المألوفة (مدى، فيزا، ماستر)",
        "تكامل مؤتمت مع شركات الشحن والخدمات اللوجستية",
        "تقارير مبيعات شاملة ومؤشرات أداء تفصيلية وجرافيكس",
        "تهيئة سيو استثنائية لجميع صفحات المنتجات والمبيعات",
        "تحسين سرعة وأداء المتجر وسرعة تنقل المشتري",
        "دعم هندسي كامل وصيانة مستمرة لمدة 3 أشهر"
      ],
      featuresEn: [
        "Complete enterprise-grade online store setup",
        "Capacity for unlimited products & collections",
        "Smart product categorization & faceted search",
        "Flexible discount coupons & promotional code systems",
        "Integrated secure payment gateways (Mada, Visa, etc.)",
        "Automated fulfillment & logistics shipping routes",
        "Comprehensive sales data dashboards & reporting",
        "Maximized eCommerce product-centric SEO",
        "Ultimate asset caching & Lighthouse loading speeds",
        "3 months comprehensive engineering support"
      ]
    },
    custom: {
      titleEn: "Custom Systems & SaaS",
      titleAr: "أنظمة مخصصة و SaaS سحابية",
      pricesOneTime: { EGP: 59500, SAR: 5000, USD: 1400, AED: 4900 },
      pricesMonthly: { EGP: 5950, SAR: 500, USD: 140, AED: 490 },
      suitableAr: "للشركات الكبرى ذات الاحتياجات المعقدة",
      suitableEn: "Designed for heavy-consequence digital ventures",
      featuresAr: [
        "تطوير أنظمة تخطيط وإدارة الموارد ERP والخاصة",
        "بناء أنظمة إدارة علاقات العملاء CRM لربط المعاملات",
        "تطوير واجهات خلفية وقواعد بيانات سحابية SaaS",
        "لوحات تخطيط وتحليلات ذكية وتفاعلية ورسوم D3",
        "تأمين وبرمجة واجهات برمجية مخصصة (Custom APIs)",
        "نظام صلاحيات هرمية دقيق للمستخدمين والمدراء",
        "قواعد بيانات ذات فهرسة وموثوقية فائقة الحماية",
        "أمان سيبراني مطلق متوافق بالكامل مع معايير OWASP",
        "معمارية سحابية هجينة مرنة ومستقلة لتوسع لامتناهي",
        "فريق دعم مخصص وصيانة وعقد SLA بأعلى أولوية"
      ],
      featuresEn: [
        "Custom tailor-made ERP & tracking platforms",
        "Immersive CRM solutions mapped to business workflows",
        "Scalable SaaS serverless cloud product build-out",
        "Cinematic interactive metric & control dashboards",
        "Securely engineered custom API interfaces & webhooks",
        "Granular hierarchical user permissions architecture",
        "Highly-indexed robust structured database configuration",
        "Fortress-level security auditing (OWASP compliance)",
        "Elastic horizontally-scalable system architecture",
        "SLA prioritization with dedicated system architects"
      ]
    }
  };

  // Special News Websites Service (Requested in project update)
  const newsSpecialPackage = {
    titleEn: "News Portal Development",
    titleAr: "تطوير المنصات الإخبارية والصحفية",
    pricesOneTime: { EGP: 14900, SAR: 1250, USD: 350, AED: 1225 },
    pricesMonthly: { EGP: 1490, SAR: 125, USD: 35, AED: 122 },
    featuresAr: [
      "أقسام وتصنيفات غير محدودة للأخبار والمقالات والمنشورات",
      "لوحة تحكم إدارية متكاملة لإدارة المحررين والكتاب والناشرين آلياً",
      "نظام إشعارات عاجلة فوري وتنبيهات مخصصة للهواتف",
      "تهيئة البنية التقنية بالكامل لتوافق محرك بحث الأخبار Google News",
      "أماكن إعلانية مخصصة جاهزة للربط فوراً مع شبكات الإعلانات AdSense",
      "أرقى معايير تهيئة السيو الإخباري ونقاط التدفق السريع",
      "بنية برمجية معمارية مخصصة لتحمل مئات آلاف الزيارات المتزامنة"
    ],
    featuresEn: [
      "Create unlimited news categories & article taxonomies",
      "Robust editorial administrative dashboard for writer/editor management",
      "Instant push notification and breaking news system alert modules",
      "Perfect metadata configuration for instant Google News approval",
      "Ad-ready slots designed to maximize Google AdSense yield organically",
      "Maximized high-traffic structural news schema & SEO setup",
      "Blistering-fast pre-rendered edge serving handling millions of persistent visitors"
    ]
  };

  const handleCountrySwitch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    const country = countries.find(c => c.code === code);
    if (country) {
      setActiveCountry(country);
      const targetCurrency = currencies[country.currency as keyof typeof currencies] || currencies.USD;
      setCurrency(targetCurrency);
    }
  };

  return (
    <section id="pricing" className="relative py-28 overflow-hidden bg-gradient-to-b from-[#030712] via-[#07111D] to-[#030712] border-t border-gray-900/50">
      
      {/* Glow rings in background */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-[#63D6B5]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#63D6B5]/10 border border-[#63D6B5]/30 text-[#89FFE1] text-xs font-mono uppercase tracking-wide mb-4">
            <Zap className="w-3.5 h-3.5 text-[#63D6B5]" />
            {lang === 'ar' ? 'باقات برمجية واستشارية دقيقة' : 'Transparent Structural Terms'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {t.pricingTitle}
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            {t.pricingSubtitle}
          </p>
        </div>

        {/* Currency override details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#07111D]/80 border border-gray-800 rounded-2xl max-w-3xl mx-auto mb-12 text-xs text-gray-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-sm">{activeCountry.flag}</span>
            <span>{t.currencyText} <strong className="text-white">{currency.code} ({currency.symbol})</strong></span>
          </div>
          
          {/* Manual Selector */}
          <div className="flex items-center gap-2">
            <span>{t.selectCountry}</span>
            <select
              value={activeCountry.code}
              onChange={handleCountrySwitch}
              className="bg-gray-950 border border-gray-800 text-gray-300 rounded px-2 py-1 text-xs font-mono focus:border-[#63D6B5] focus:outline-none cursor-pointer"
            >
              {countries.map(c => (
                <option key={c.code} value={c.code}>
                  {lang === 'ar' ? c.nameAr : c.nameEn} ({c.currency})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Billing cycle toggler */}
        <div className="flex justify-center mb-16">
          <div className="p-1.5 bg-gray-950 border border-gray-900 rounded-2xl flex items-center gap-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
                billingCycle === 'monthly'
                  ? 'bg-[#63D6B5] text-gray-950 shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {lang === 'ar' ? 'صيانة وضمان شهري' : 'Monthly Support retainer'}
            </button>
            <button
              onClick={() => setBillingCycle('oneTime')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
                billingCycle === 'oneTime'
                  ? 'bg-[#63D6B5] text-gray-950 shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {lang === 'ar' ? 'دفعة واحدة (البناء والملكية)' : 'One-Time Build & Handover'}
            </button>
          </div>
        </div>

        {/* Four Main Packages bento grid */}
        <div 
          style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        >
          {Object.entries(basePackages).map(([key, pack]) => {
            const isPopular = 'popular' in pack && pack.popular;
            const priceDict = billingCycle === 'oneTime' ? pack.pricesOneTime : pack.pricesMonthly;
            const finalPrice = priceDict[currency.code as keyof typeof priceDict] || priceDict.USD;

            return (
              <div
                key={key}
                className={`relative flex flex-col justify-between rounded-3xl p-6 md:p-8 backdrop-blur border text-right transition-all duration-300 ${
                  isPopular
                    ? 'border-[#63D6B5] bg-[#63D6B5]/5 shadow-[0_0_40px_rgba(99,214,181,0.1)] scale-[1.03] z-10'
                    : 'border-gray-900 bg-[#07111D]/50 hover:border-gray-800'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    Most Popular / الأكثر طلباً ✨
                  </div>
                )}

                <div>
                  {/* Name */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {lang === 'ar' ? pack.titleAr : pack.titleEn}
                  </h3>
                  
                  {/* Suitability subtitle */}
                  <p className="text-[10px] text-gray-500 mb-4 leading-normal">
                    {lang === 'ar' ? pack.suitableAr : pack.suitableEn}
                  </p>
                  
                  {/* Price */}
                  <div className="py-4 border-b border-gray-800/80 mb-6 bg-gray-950/45 p-3 rounded-2xl">
                    <span className="text-3xl font-extrabold text-white font-mono">{finalPrice.toLocaleString()}</span>
                    <span className="text-xs text-gray-400 font-mono ml-2">{currency.code}</span>
                    <div className="text-[10px] text-gray-500 mt-2 font-mono">
                      {billingCycle === 'oneTime' ? t.billedOneTime : t.billedMonthly}
                    </div>
                  </div>

                  {/* Bullet features list */}
                  <ul className="space-y-3.5 mb-8">
                    {(lang === 'ar' ? pack.featuresAr : pack.featuresEn).map((feat, idx) => (
                      <li key={idx} className="flex gap-2 text-right items-start">
                        <Check className="w-4 h-4 text-[#63D6B5] shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-300 leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold text-center tracking-wide transition-all ${
                    isPopular
                      ? 'bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 shadow-lg shadow-[#63D6B5]/10 hover:shadow-[#63D6B5]/20 hover:scale-[1.02]'
                      : 'bg-gray-900 text-white border border-gray-800 hover:border-gray-700'
                  }`}
                >
                  {t.ctaGetStarted}
                </a>
              </div>
            );
          })}
        </div>

        {/* Special Service: News Websites (Beautiful standalone showcase) */}
        <div className="mt-12 bg-gradient-to-r from-teal-950/10 via-[#07111D] to-teal-950/10 border border-amber-500/30 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Sparkles className="w-48 h-48 text-amber-500" />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-right" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono uppercase tracking-wider">
                <Sparkles className="w-3" />
                {lang === 'ar' ? 'عرض برميوم خاص' : 'Specialized Media Architecture'}
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white">
                {lang === 'ar' ? newsSpecialPackage.titleAr : newsSpecialPackage.titleEn}
              </h3>
              
              <div className="py-2.5 border-b border-gray-800/80 max-w-xs bg-gray-950/60 p-3 rounded-2xl">
                <span className="text-3xl font-extrabold text-amber-400 font-mono">
                  {(billingCycle === 'oneTime' ? newsSpecialPackage.pricesOneTime : newsSpecialPackage.pricesMonthly)[currency.code as keyof typeof newsSpecialPackage.pricesOneTime || 'USD'].toLocaleString()}
                </span>
                <span className="text-xs text-gray-400 font-mono ml-2">{currency.code}</span>
                <div className="text-[10px] text-gray-500 mt-2 font-mono">
                  {billingCycle === 'oneTime' ? t.billedOneTime : t.billedMonthly}
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed text-justify">
                {lang === 'ar' 
                  ? 'بوابات صحفية فائقة الأداء ونطاقات غير محدودة للمقال والكاتب، مجهزة ومطوعة للقبول الفوري في لوحة مصلحة أخبار جوجل وخدمات تحقيق الأرباح.' 
                  : 'Ultra-fast media ecosystems designed with fully dynamic schemas, writer nodes, and Google News metadata protocols.'}
              </p>

              <a
                href="#contact"
                className="inline-flex w-full md:w-auto justify-center items-center py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-gray-950 text-xs font-bold shadow-lg shadow-amber-500/15 hover:shadow-amber-500/25 transition-all"
              >
                {t.ctaGetStarted}
              </a>
            </div>

            <div className="lg:col-span-7">
              <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-4 font-bold">
                {lang === 'ar' ? 'المزايا الفنية والأنظمة الفرعية المتضمنة:' : 'Included news portal specifications:'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(lang === 'ar' ? newsSpecialPackage.featuresAr : newsSpecialPackage.featuresEn).map((feat, idx) => (
                  <div key={idx} className="flex gap-2 items-start text-right">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-300 leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Free Hosting and partner networks section as optional services */}
        <div className="mt-12 p-6 md:p-8 border border-gray-900 bg-gradient-to-r from-gray-950 to-[#07111D] rounded-3xl relative overflow-hidden text-right">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Gift className="w-32 h-32 text-[#63D6B5]" />
          </div>
          <div className="max-w-3xl space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
              <Gift className="w-5 h-5 text-[#63D6B5]" />
              <span>{t.hostingTitle}</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed text-justify">
              {t.hostingText}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
