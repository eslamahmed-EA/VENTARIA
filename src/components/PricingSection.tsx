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

  // Pricing Base in USD
  const basePackages = {
    starter: {
      titleEn: "Starter Suite",
      titleAr: "الباقة التمهيدية",
      usdMonthly: 149,
      usdOneTime: 1499,
      featuresAr: [
        "تصميم واجهات احترافية ومظليّة (تصل إلى 5 واجهات)",
        "برمجة خفيفة فائقة السرعة مع React / Vite SPA",
        "تكامل مباشر لمكالمات ودردشات واتساب وهاتف",
        "ضبط محرك بحث السيو الأولي (Google SEO Standard)",
        "شهادة أمان رقمية مجانية وإعدادات Cloudflare",
        "دعم فني هندسي وصيانة تقنية لمدة شهرين"
      ],
      featuresEn: [
        "Exemplary UX responsive design (up to 5 screens)",
        "Lightweight React / Vite Single Page App skeleton",
        "Instant responsive WhatsApp and call linkage",
        "Basic Google structural SEO indexing metadata",
        "Free SSL certificate setup and Cloudflare routes",
        "2-Months continuous structural patches & support"
      ]
    },
    professional: {
      titleEn: "Professional Platform",
      titleAr: "باقة رواد الأعمال",
      usdMonthly: 349,
      usdOneTime: 2999,
      popular: true,
      featuresAr: [
        "تصميم واجهات وتجارب مستخدم متكاملة (12 صفحة)",
        "برمجة خوادم Node.js سريعة مع معمارية سحابية مستقلة",
        "لوحة تحرير وإدارة محتوى مخصصة ومدونات",
        "ربط بوابات دفع مألوفة (Stripe، تابل أو تمارا)",
        "تهيئة متفوقة لسرعة جوجل (Lighthouse > 95%)",
        "ضمان فني وشهور صيانة كاملة (6 شهور)"
      ],
      featuresEn: [
        "Complete pristine high-fidelity layouts (12 screens)",
        "Integrated Node.js backend secure payload routing",
        "Dynamic lightweight custom publishing admin panel",
        "Seamless Stripe, PayLink, or local checkout links",
        "Guaranteed premium Lighthouse speed score (> 95%)",
        "6-Months premium structural maintenance warranty"
      ]
    },
    business: {
      titleEn: "Business Unicorn",
      titleAr: "باقة المؤسسات والـ SaaS",
      usdMonthly: 599,
      usdOneTime: 5499,
      featuresAr: [
        "تصميم واجهات غير محدود لمتطلبات الأنظمة",
        "برمجة صفحات سيو سحابية مع Next.js فائقة الكفاءة",
        "ربط أنغولا وإرسال رسائل نصية تلقائية SMS",
        "نظام مصادقة آمن وحماية سيبرانية خاضعةOWASP",
        "سبر وتحليل قواعد بيانات متجاوبة (PostgreSQL)",
        "دعم مباشر للمهندسين وضمان وصيانة لمدة عام كامل"
      ],
      featuresEn: [
        "Unlimited tailored custom system interfaces",
        "Advanced SEO headless Next.js framework build",
        "Automated client SMS alerting and webhook nodes",
        "Full OAuth2 security handshakes & encryption pass",
        "Highly-indexed PostgreSQL database integrations",
        "1-Year direct priority engineer support contract"
      ]
    },
    enterprise: {
      titleEn: "Custom Enterprise",
      titleAr: "الأنظمة العملاقة المخصصة",
      usdMonthly: 999,
      usdOneTime: 9500,
      featuresAr: [
        "أنظمة هجينة و تتبع مستودعات مخصصة (ERP/CRM)",
        "برمجيات حوسبة سحابية معقدة ومجموعات لوجستية",
        "ربط فوري وحساب فواتير الزكاة المعتمدة ZATCA",
        "فحوصات وضمانات ممتدة حظر الاختناق Concurrency",
        "حقوق نقل الملكية الفكرية ونقل الكود المصدر بالكامل",
        "دعم على مدار الساعة مع رعاية فنية ممتدة مخصصة"
      ],
      featuresEn: [
        "Tailor-made customized ERP, CRM or heavy networks",
        "High-performance clustered cloud orchestration",
        "ZATCA stage-2 electronic invoicing compliances",
        "Rigorous traffic stress-testing loops (OWASP verified)",
        "100% Legal hands-over of final proprietary source files",
        "24/7/365 Dedicated service level agreement (SLA)"
      ]
    }
  };

  const computePrice = (usdAmount: number) => {
    return Math.round(usdAmount * currency.rate);
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
            {lang === 'ar' ? 'شفافية مادية وهندسية' : 'Transparent Structural Terms'}
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
              {t.monthly}
            </button>
            <button
              onClick={() => setBillingCycle('oneTime')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
                billingCycle === 'oneTime'
                  ? 'bg-[#63D6B5] text-gray-950 shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t.oneTime}
            </button>
          </div>
        </div>

        {/* Four Packages bento grid */}
        <div 
          style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        >
          {Object.entries(basePackages).map(([key, pack]) => {
            const isProfessional = key === 'professional';
            const rawUSD = billingCycle === 'oneTime' ? pack.usdOneTime : pack.usdMonthly;
            const finalPrice = computePrice(rawUSD);

            return (
              <div
                key={key}
                className={`relative flex flex-col justify-between rounded-2xl p-6 md:p-8 backdrop-blur border text-right transition-all duration-300 ${
                  isProfessional
                    ? 'border-[#63D6B5] bg-[#63D6B5]/5 shadow-[0_0_40px_rgba(99,214,181,0.1)] scale-[1.03] z-10'
                    : 'border-gray-900 bg-[#07111D]/50 hover:border-gray-800'
                }`}
              >
                {isProfessional && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    Most Popular / الأكثر طلباً ✨
                  </div>
                )}

                <div>
                  {/* Name */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {lang === 'ar' ? pack.titleAr : pack.titleEn}
                  </h3>
                  
                  {/* Price */}
                  <div className="py-4 border-b border-gray-800/80 mb-6">
                    <span className="text-4xl font-extrabold text-white font-mono">{finalPrice.toLocaleString()}</span>
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
                    isProfessional
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

        {/* Free Hosting and partner networks section */}
        <div className="mt-16 p-6 md:p-8 border border-[#63D6B5]/30 bg-gradient-to-r from-gray-950 to-[#07111D] rounded-3xl relative overflow-hidden text-right">
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
