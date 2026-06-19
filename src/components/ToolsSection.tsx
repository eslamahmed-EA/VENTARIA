import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  ShieldAlert, 
  Sparkles, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Loader2, 
  RefreshCw,
  Layers,
  Zap,
  Globe,
  ShoppingBag,
  Database,
  HelpCircle,
  Code,
  Layout,
  Lock,
  PlusCircle,
  FileText,
  Check
} from 'lucide-react';
import { Language, CurrencyConfig } from '../types';

// Animated Number Counter Sub-component for Premium Look & Feel
function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(value);
  
  useEffect(() => {
    let start = displayValue;
    const end = value;
    if (start === end) return;
    
    const duration = 650; // ms
    const startTime = performance.now();
    
    let animationFrameId: number;
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quad
      const easeProgress = progress * (2 - progress);
      
      const nextValue = Math.round(start + (end - start) * easeProgress);
      setDisplayValue(nextValue);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value]);
  
  return <>{displayValue.toLocaleString()}</>;
}

interface ToolsSectionProps {
  lang: Language;
  currency: CurrencyConfig;
  t: any;
}

export default function ToolsSection({ lang, currency, t }: ToolsSectionProps) {
  const [activeTab, setActiveTab ] = useState<'cost' | 'seo' | 'roi'>('cost');

  // --- WEBSITE COST CALCULATOR STATE ---
  const [projectType, setProjectType] = useState<'company' | 'business' | 'news' | 'store' | 'saas'>('company');
  const [pageCount, setPageCount] = useState<number>(5);
  const [features, setFeatures] = useState<string[]>(['bilingual', 'seo']);
  const [deliverySpeed, setDeliverySpeed] = useState<'standard' | 'express'>('standard');

  // --- NEW VENTARIA PRICING DEFINITIONS ---
  const BASE_PRICES = {
    company: { EGP: 7500, SAR: 650, USD: 180, AED: 640 },
    business: { EGP: 17500, SAR: 1500, USD: 420, AED: 1480 },
    news: { EGP: 14900, SAR: 1250, USD: 350, AED: 1225 },
    store: { EGP: 29500, SAR: 2500, USD: 700, AED: 2450 },
    saas: { EGP: 59500, SAR: 5000, USD: 1400, AED: 4900 }
  };

  const convertEgpValue = (egpVal: number) => {
    if (currency.code === 'EGP') return egpVal;
    if (currency.code === 'SAR') return egpVal / 11.5;
    if (currency.code === 'AED') return (egpVal / 11.5) * 0.98;
    if (currency.code === 'USD') return egpVal / 50;
    return egpVal * (currency.rate / 50);
  };

  const getPageCountAdjustmentEGP = (pages: number): number => {
    if (pages <= 5) return 0;
    if (pages <= 10) {
      const ratio = (pages - 5) / 5;
      return ratio * 2500;
    }
    if (pages <= 15) {
      const ratio = (pages - 10) / 5;
      return 2500 + ratio * 2500;
    }
    if (pages <= 20) {
      const ratio = (pages - 15) / 5;
      return 5000 + ratio * 3000;
    }
    if (pages <= 30) {
      const ratio = (pages - 20) / 10;
      return 8000 + ratio * 7000;
    }
    return 15000;
  };

  const optionalFeatures = [
    { id: 'bilingual', nameAr: 'موقع ثنائي اللغة (عربي / إنجليزي)', nameEn: 'Bilingual Website (Arabic / English)', priceEgp: 3500 },
    { id: 'seo', nameAr: 'تهيئة سيو متقدمة (Advanced SEO)', nameEn: 'Advanced SEO Optimizations', priceEgp: 3000 },
    { id: 'analytics', nameAr: 'لوحة تحليلات تفاعلية متقدمة', nameEn: 'Advanced Analytics Dashboard', priceEgp: 4000 },
    { id: 'payment', nameAr: 'ربط بوابة دفع إلكتروني آمنة', nameEn: 'Payment Gateway Integration', priceEgp: 5000 },
    { id: 'booking', nameAr: 'نظام حجز مواعيد وجدولة ذكي', nameEn: 'Interactive Booking System', priceEgp: 4500 },
    { id: 'membership', nameAr: 'نظام اشتراك وبوابة مستخدمين', nameEn: 'Membership & User Portal', priceEgp: 7500 },
    { id: 'marketplace', nameAr: 'منظومة متعددة البائعين (Marketplace)', nameEn: 'Multi-Vendor Marketplace Pack', priceEgp: 20000 },
    { id: 'admin', nameAr: 'لوحة تحكم إدارية مخصصة للعمليات', nameEn: 'Custom Operations Admin Panel', priceEgp: 10000 },
    { id: 'mobile_api', nameAr: 'واجهات برمجية لتطبيق الجوال (API)', nameEn: 'Mobile App API Endpoints', priceEgp: 8000 },
    { id: 'ai', nameAr: 'تكامل خدمات ذكاء اصطناعي ونصوص', nameEn: 'Full AI Model & Cognitive Integration', priceEgp: 12000 },
  ];

  // Base raw calculated EGP costs
  const baseCostEgp = BASE_PRICES[projectType]?.EGP || 7500;
  const pageAdjustEgp = getPageCountAdjustmentEGP(pageCount);
  
  // Features sum
  const featuresEgp = features.reduce((sum, fId) => {
    const feat = optionalFeatures.find(f => f.id === fId);
    return sum + (feat ? feat.priceEgp : 0);
  }, 0);

  // Total raw EGP cost with delivery speed booster
  let totalRawEgp = baseCostEgp + pageAdjustEgp + featuresEgp;
  const speedMultiplier = deliverySpeed === 'express' ? 1.25 : 1.0;
  totalRawEgp = totalRawEgp * speedMultiplier;

  // Range conversion (SAR approx, otherwise EGP translation rates)
  const rawMinConverted = convertEgpValue(totalRawEgp);
  const rawMaxConverted = rawMinConverted * 1.20; // 20% span margin

  // Round dynamically per currency standard
  let minFormatted = 0;
  let maxFormatted = 0;

  if (currency.code === 'EGP') {
    minFormatted = Math.round(rawMinConverted / 500) * 500;
    maxFormatted = Math.round(rawMaxConverted / 500) * 500;
  } else if (currency.code === 'SAR') {
    minFormatted = Math.round(rawMinConverted / 50) * 50;
    maxFormatted = Math.round(rawMaxConverted / 50) * 50;
  } else if (currency.code === 'AED') {
    minFormatted = Math.round(rawMinConverted / 50) * 50;
    maxFormatted = Math.round(rawMaxConverted / 50) * 50;
  } else {
    minFormatted = Math.round(rawMinConverted / 10) * 10;
    maxFormatted = Math.round(rawMaxConverted / 10) * 10;
  }

  // Starts From
  const startsFromPrice = BASE_PRICES[projectType][currency.code as keyof typeof BASE_PRICES['company']] || BASE_PRICES[projectType].EGP / 11.5;

  const formatFeaturePrice = (egpVal: number) => {
    const converted = convertEgpValue(egpVal);
    if (currency.code === 'EGP') {
      return `+${Math.round(converted).toLocaleString()} EGP`;
    } else if (currency.code === 'SAR') {
      return `+${Math.round(converted).toLocaleString()} SAR`;
    } else if (currency.code === 'AED') {
      return `+${Math.round(converted).toLocaleString()} AED`;
    } else {
      return `+${Math.round(converted).toLocaleString()} ${currency.code}`;
    }
  };

  // --- SEO AUDIT STATE ---
  const [auditUrl, setAuditUrl] = useState<string>('');
  const [auditStatus, setAuditStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [auditLogs, setAuditLogs] = useState<string[]>([]);
  const [activeLogIndex, setActiveLogIndex] = useState<number>(0);
  const [seoScore, setSeoScore] = useState<number>(0);

  // --- ROI CALCULATOR STATE ---
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(20000);
  const [currentConvRate, setCurrentConvRate] = useState<number>(1.2);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(150);
  const [projectedLift, setProjectedLift] = useState<number>(2.5); // Boost in conversion rate %

  // Handle SEO simulation
  const startSeoAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditUrl) return;
    
    setAuditStatus('running');
    setActiveLogIndex(0);
    
    const logs = lang === 'ar' ? [
      "جاري فحص كود الاستفسار الأولي وتبادل مصافحات الأمان DNS...",
      "جاري قياس وقت وصول أول بايت تفاعل (TTFB) للموقع السحابي...",
      "جاري تدقيق ملفات الروبوت robots.txt وخريط الـ Sitemap النشطة...",
      "جاري رصد سرعة استقرار المظهر الخارجي وتجاوب الصور والشبكة...",
      "جاري تحليل وسم الأمان وبوابات التشفير SSL وحقن البرمجيات الخبيثة...",
      "فحص كامل! جاري تركيب ميزان تقييم محرك بحث Google..."
    ] : [
      "Probing DNS handshakes & initial security handshakes...",
      "Measuring Time-to-First-Byte (TTFB) latency configurations...",
      "Scanning crawlable robots.txt mappings & XML sitemaps...",
      "Auditing Cumulative Layout Shift (CLS) on high-dpi mobile frameworks...",
      "Verifying active SSL/TLS certificates and security header protocols...",
      "Audit complete! Synthesize technical Google Lighthouse scores..."
    ];

    setAuditLogs(logs);

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < logs.length) {
        setActiveLogIndex(currentStep);
      } else {
        clearInterval(interval);
        setAuditStatus('completed');
        setSeoScore(Math.floor(Math.random() * 21) + 75); // 75 - 95 score
      }
    }, 900);
  };

  const handleFeatureToggle = (id: string) => {
    if (features.includes(id)) {
      setFeatures(features.filter(f => f !== id));
    } else {
      setFeatures([...features, id]);
    }
  };

  // ROI Math
  const currentMonthlyRevenue = (monthlyVisitors * (currentConvRate / 100)) * avgOrderValue;
  const projectedConvRate = currentConvRate + projectedLift;
  const projectedMonthlyRevenue = (monthlyVisitors * (projectedConvRate / 100)) * avgOrderValue;
  const monthlyGain = projectedMonthlyRevenue - currentMonthlyRevenue;
  const annualGain = monthlyGain * 12;

  return (
    <section id="tools" className="relative py-28 overflow-hidden bg-gradient-to-b from-[#030712] via-[#07111D] to-[#030712] border-t border-gray-900">
      
      {/* Background Neon Elements */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#63D6B5]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#46C6A5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Title Grid */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#63D6B5]/10 border border-[#63D6B5]/30 text-[#89FFE1] text-xs font-mono uppercase tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#63D6B5] animate-pulse" />
            {lang === 'ar' ? 'أدوات التقييم وجذب العملاء' : 'Interactive Growth Engines'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            {lang === 'ar' ? 'أدواتنا المجانية لتخطيط نموك الرقمي' : 'Free Interactive Planners'}
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
            {lang === 'ar' 
              ? 'صممنا هذه الأدوات المتقدمة لمساعدتك في محاكاة تكلفة موقعك، فحص أداء السيو التقني لديك، وحساب أرباح نمو البيع الفعلي بالتعاون معنا.' 
              : 'Try our elite toolset to instantly calculate costs, audit technical speed compliance, and simulate transactional growth metrics.'}
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12 p-1.5 bg-[#07111D]/80 border border-gray-800 rounded-2xl max-w-lg mx-auto backdrop-blur-md">
          <button
            onClick={() => setActiveTab('cost')}
            className={`flex-1 py-3 text-xs md:text-sm font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'cost' 
                ? 'bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 font-bold shadow-lg shadow-[#63D6B5]/20' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800/40'
            }`}
          >
            <Calculator className="w-4 h-4" />
            {lang === 'ar' ? 'حاسبة التكلفة' : 'Cost Calculator'}
          </button>
          
          <button
            onClick={() => setActiveTab('seo')}
            className={`flex-1 py-3 text-xs md:text-sm font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'seo' 
                ? 'bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 font-bold shadow-lg shadow-[#63D6B5]/20' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800/40'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            {lang === 'ar' ? 'فاحص السيو' : 'SEO Audit'}
          </button>

          <button
            onClick={() => setActiveTab('roi')}
            className={`flex-1 py-3 text-xs md:text-sm font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'roi' 
                ? 'bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 font-bold shadow-lg shadow-[#63D6B5]/20' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800/40'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            {lang === 'ar' ? 'حاسبة الأرباح' : 'ROI Simulator'}
          </button>
        </div>

        {/* Tab Wrapper */}
        <div className="bg-[#07111D]/60 border border-gray-800/80 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl transition-all duration-500">
          
          {/* TOOL 1: COST CALCULATOR */}
          {activeTab === 'cost' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              <div className="lg:col-span-7 space-y-8">
                {/* Project Category Selection */}
                <div>
                  <h3 className="text-sm font-semibold font-mono text-gray-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#63D6B5] animate-ping" />
                    {lang === 'ar' ? 'تصنيف وحجم النظام الرقمي المستهدف' : 'Target System Architecture Level'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {[
                      { id: 'company', labelAr: 'موقع تعريفي (Starter)', labelEn: 'Starter Website', descAr: 'مثالي للتعريف ونشاط الهوية الرئيسي', descEn: 'Bespoke corporate identity design', icon: Layout },
                      { id: 'business', labelAr: 'موقع أعمال احترافي', labelEn: 'Business Website', descAr: 'للشركات المتوسطة والباحثين عن مبيعات', descEn: 'Fully custom client portal config', icon: Layers },
                      { id: 'news', labelAr: 'رواق منصة إخبارية صحفية', labelEn: 'News Portal Setup', descAr: 'توافق كامل مع أخبار جوجل للأرشفة', descEn: 'Google News compatible system', icon: FileText },
                      { id: 'store', labelAr: 'متجر إلكتروني فاخر', labelEn: 'eCommerce Hub', descAr: 'بطاقات دفع متصلة وسلال غنية وشحن', descEn: 'Ultimate conversion retail funnel', icon: ShoppingBag },
                      { id: 'saas', labelAr: 'منظومة SaaS / نظام مخصص', labelEn: 'Custom SaaS & ERP Platform', descAr: 'لوحات تحكم وقواعد بيانات عملاقة', descEn: 'Elastic custom enterprise server flow', icon: Database }
                    ].map((opt) => {
                      const Icon = opt.icon;
                      const active = projectType === opt.id;
                      return (
                        <motion.button
                          key={opt.id}
                          whileHover={{ scale: 1.01, y: -2 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => setProjectType(opt.id as any)}
                          className={`text-right p-4.5 rounded-2xl border transition-all duration-300 text-left relative overflow-hidden group/opt flex gap-3.5 items-start ${
                            active 
                              ? 'border-[#63D6B5] bg-gradient-to-tr from-[#63D6B5]/10 to-[#46C6A5]/5 shadow-[0_0_20px_rgba(99,214,181,0.06)]' 
                              : 'border-gray-800 bg-gray-900/30 hover:border-gray-700/80 hover:bg-gray-900/50'
                          }`}
                          style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
                        >
                          <div className={`p-2.5 rounded-xl border shrink-0 transition-colors ${
                            active ? 'bg-[#63D6B5]/20 border-[#63D6B5]/30 text-[#89FFE1]' : 'bg-gray-950 border-gray-800 text-gray-500 group-hover/opt:text-white'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className={`text-sm font-bold tracking-tight ${active ? 'text-[#89FFE1]' : 'text-gray-200 group-hover/opt:text-white'}`}>
                              {lang === 'ar' ? opt.labelAr : opt.labelEn}
                            </div>
                            <div className="text-[11px] text-gray-500 mt-1 leading-relaxed">{lang === 'ar' ? opt.descAr : opt.descEn}</div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Page Count Slider */}
                <div className="p-6 bg-gray-950/40 border border-gray-800/80 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#63D6B5]/2 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <h3 className="text-sm font-bold font-mono text-gray-400">
                        {lang === 'ar' ? 'تقدير عدد صفحات واجهات ومميزات العرض' : 'Estimated Designed Pages'}
                      </h3>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        {lang === 'ar' ? 'تعديل السلايدر لتغيير كثافة وعدد واجهات النظام' : 'Dynamically adjust system density views'}
                      </p>
                    </div>
                    <span className="text-xl font-black text-[#89FFE1] border border-[#63D6B5]/30 px-4 py-1.5 rounded-xl bg-[#63D6B5]/10 font-mono shadow-inner">
                      {pageCount}
                    </span>
                  </div>

                  <div className="px-1 py-4">
                    <input
                      type="range"
                      min="1"
                      max="40"
                      value={pageCount}
                      onChange={(e) => setPageCount(parseInt(e.target.value))}
                      className="w-full h-2 rounded-lg cursor-pointer bg-gray-900 accent-[#63D6B5] hover:accent-[#89FFE1] transition-all duration-150"
                      style={{
                        background: `linear-gradient(to ${lang === 'ar' ? 'left' : 'right'}, #63D6B5 0%, #63D6B5 ${(pageCount / 40) * 100}%, #111827 ${(pageCount / 40) * 100}%, #111827 100%)`
                      }}
                    />
                    <div className="flex justify-between text-[11px] font-mono text-gray-500 mt-3 px-1">
                      <span>1</span>
                      <span>5 ({lang === 'ar' ? 'افتراضي' : 'Starter'})</span>
                      <span>10</span>
                      <span>20</span>
                      <span>30</span>
                      <span>40+ ({lang === 'ar' ? 'نظام ضخم' : 'Enterprise'})</span>
                    </div>
                  </div>

                  {/* Micro breakdown page adjustment indicator */}
                  <div className="mt-3 pt-3 border-t border-gray-900 flex justify-between items-center text-xs">
                    <span className="text-gray-500">{lang === 'ar' ? 'رسوم تعديل عدد الواجهات:' : 'Page density adjustment cost:'}</span>
                    <span className="font-bold text-[#63D6B5] font-mono">
                      {pageAdjustEgp === 0 ? (
                        lang === 'ar' ? 'أول 5 صفحات مجانية' : 'First 5 pages free'
                      ) : (
                        `+ ${Math.round(convertEgpValue(pageAdjustEgp)).toLocaleString()} ${currency.code}`
                      )}
                    </span>
                  </div>
                </div>

                {/* Micro Inclusions / Custom Features */}
                <div>
                  <h3 className="text-sm font-semibold font-mono text-gray-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#63D6B5]" />
                    {lang === 'ar' ? 'المزايا الإضافية والمزامنات المطلوبة لمضاعفة عملك' : 'Custom Functional Additions & API Integrations'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {optionalFeatures.map((f) => {
                      const selected = features.includes(f.id);
                      return (
                        <motion.label 
                          key={f.id}
                          whileHover={{ scale: 1.01, border: '1px solid rgba(99, 214, 181, 0.4)' }}
                          className={`flex items-center gap-3.5 p-4 rounded-2xl border cursor-pointer select-none transition-all duration-300 relative ${
                            selected 
                              ? 'border-[#63D6B5]/60 bg-[#63D6B5]/5 text-[#89FFE1]' 
                              : 'border-gray-800 bg-gray-900/10 text-gray-400 hover:border-gray-700 hover:bg-gray-900/20'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selected}
                            onChange={() => handleFeatureToggle(f.id)}
                            className="w-4 h-4 rounded text-[#63D6B5] bg-gray-950 border-gray-800 focus:ring-0 cursor-pointer"
                          />
                          <div className="flex-1 min-w-0">
                            <span className={`text-xs font-bold block ${selected ? 'text-white' : 'text-gray-300'}`}>
                              {lang === 'ar' ? f.nameAr : f.nameEn}
                            </span>
                            <span className="text-[10px] text-gray-500 mt-1 font-semibold font-mono block">
                              {formatFeaturePrice(f.priceEgp)}
                            </span>
                          </div>
                        </motion.label>
                      );
                    })}
                  </div>
                </div>

                {/* Delivery Priority speed */}
                <div className="p-6 bg-gray-950/20 border border-gray-900 rounded-2xl">
                  <h3 className="text-sm font-semibold font-mono text-gray-400 mb-4">
                    {lang === 'ar' ? 'سرعة الإنجاز والجدول الزمني للهندسة البرمجية' : 'Engineering Delivery Priority & Schedule'}
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => setDeliverySpeed('standard')}
                      className={`flex-1 py-4 px-4 rounded-2xl border text-xs font-bold transition-all duration-350 text-right ${
                        deliverySpeed === 'standard' 
                          ? 'border-[#63D6B5] bg-[#63D6B5]/5 text-[#89FFE1]' 
                          : 'border-gray-800 text-gray-400 hover:bg-gray-900/40 hover:border-gray-700'
                      }`}
                      style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
                    >
                      <div className="font-bold flex items-center gap-1.5 mb-1 text-xs text-white">
                        <Check className="w-3.5 h-3.5 text-[#63D6B5]" />
                        {lang === 'ar' ? 'مجدول قياسي (السرعة الطبيعية)' : 'Standard Development'}
                      </div>
                      <p className="text-[10px] text-gray-500 font-medium">
                        {lang === 'ar' ? 'إطلاق حذر وآمن خاضع لاختبار مراجعة دقيق بكامل التكلفة القياسية.' : 'Includes standard code sanity check & automated CI reviews details.'}
                      </p>
                    </button>
                    <button
                      onClick={() => setDeliverySpeed('express')}
                      className={`flex-1 py-4 px-4 rounded-2xl border text-xs font-bold transition-all duration-350 text-right ${
                        deliverySpeed === 'express' 
                          ? 'border-amber-500/50 bg-amber-500/5 text-amber-200' 
                          : 'border-gray-800 text-gray-400 hover:bg-gray-900/40 hover:border-gray-700'
                      }`}
                      style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
                    >
                      <div className="font-bold flex items-center gap-1.5 mb-1 text-xs text-amber-300">
                        <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
                        {lang === 'ar' ? 'تطوير مستعجل وسريع (تسجيل أولوية)' : 'Priority Express Delivery (+25%)'}
                      </div>
                      <p className="text-[10px] text-gray-500 font-medium">
                        {lang === 'ar' ? 'تخصيص كامل لفريق المهندسين الفردي ومضاعفة سرعة البناء والتحميل.' : 'Triages full engineering team bandwidth to launch your project on speed schedule.'}
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              {/* Estimate Receipt Panel */}
              <div className="lg:col-span-5">
                <motion.div 
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="sticky top-4 border border-[#63D6B5]/30 bg-gradient-to-b from-[#091523]/90 to-[#050B14]/90 rounded-3xl p-6 md:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden group/receipt text-right"
                  style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
                >
                  {/* Decorative corner lines */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#63D6B5]/75" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#63D6B5]/75" />
                  
                  <div className={`flex items-center gap-2 mb-6 ${lang === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <Calculator className="w-5 h-5 text-[#63D6B5]" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#89FFE1]">
                      {lang === 'ar' ? 'تسعير أولي مرن مقترح' : 'PROVISIONAL PREMIUM QUOTATION'}
                    </span>
                  </div>

                  {/* Breakdown Specifications */}
                  <div className="space-y-4 text-xs font-mono border-b border-gray-900 pb-5 text-gray-400">
                    <div className="flex justify-between">
                      <span>{lang === 'ar' ? 'صنف البرمجة الأساسي:' : 'Platform Base Architecture:'}</span>
                      <span className="text-white font-bold capitalize">{projectType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{lang === 'ar' ? 'الواجهات والمنصات المصممة:' : 'Interfaces Count:'}</span>
                      <span className="text-white font-bold">{pageCount} {lang === 'ar' ? 'صفحة' : 'Pages'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{lang === 'ar' ? 'الإضافات وخدمات المزامنة:' : 'Inclusions Selected:'}</span>
                      <span className="text-white font-bold">{features.length} / 10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{lang === 'ar' ? 'جدول الهندسة:' : 'Priority Line:'}</span>
                      <span className="text-white font-bold">{deliverySpeed.toUpperCase()}</span>
                    </div>
                  </div>

                  {/* Starts From Box (Prompt Constraint) */}
                  <div className="mt-5 py-3 px-4 bg-gray-950/80 border border-gray-900 rounded-xl flex items-center justify-between">
                    <span className="text-gray-400 text-xs font-mono">{lang === 'ar' ? 'يبدأ من (Starts From):' : 'Starts From:'}</span>
                    <span className="text-[#89FFE1] font-extrabold font-mono text-sm leading-none">
                      <AnimatedNumber value={Math.round(startsFromPrice)} /> {currency.code}
                    </span>
                  </div>

                  {/* Main Estimated Cost Range Display (Prompt Constraint: Never show exact price, show starting/estimated ranges) */}
                  <div className="py-6 text-center space-y-1.5 mt-4 border border-teal-500/10 bg-[#63D6B5]/3 rounded-2xl">
                    <div className="text-[11px] text-gray-400 font-mono font-bold uppercase tracking-wider">{lang === 'ar' ? 'التكلفة الإجمالية التقديرية' : 'ESTIMATED STARTING COST'}</div>
                    
                    <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#63D6B5] via-teal-300 to-[#89FFE1] font-mono leading-none py-2.5">
                      <AnimatedNumber value={minFormatted} /> - <AnimatedNumber value={maxFormatted} /> 
                      <span className="text-sm text-white font-bold ml-1.5 uppercase font-sans">{currency.code}</span>
                    </div>
                    
                    <p className="text-[10px] text-gray-500 px-4 leading-relaxed font-semibold">
                      {lang === 'ar' 
                        ? 'ملاحظة: هذا تقدير مرن خاضع لمراجعة هندسية فردية لمتطلبات السيرفر وقواعد البيانات.' 
                        : 'Note: Automated range built to secure flexibility dependent on individual server redundancies.'}
                    </p>
                  </div>

                  {/* CTA Engagement Button */}
                  <a 
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 mt-6 rounded-xl bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 font-extrabold text-sm tracking-wide text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#63D6B5]/20 hover:scale-[1.01]"
                  >
                    {lang === 'ar' ? 'احجز استشارة وراجع المقايسة المخصصة ↗' : 'Claim Complimentary Consultation ↗'}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* TOOL 2: SEO TECHNICAL AUDIT */}
          {activeTab === 'seo' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto space-y-8"
            >
              <div className="text-center">
                <ShieldAlert className="w-12 h-12 text-[#63D6B5] mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {lang === 'ar' ? 'ادخل موقعك للبحث عن مشاكل الأداء و السيو مجاناً' : 'Analyze Your Core Web Vitals & Technical Alignment'}
                </h3>
                <p className="text-sm text-gray-400">
                  {lang === 'ar' 
                    ? 'سيقوم الروبوت الخاص بك بفحص استجابة الخوادم وتأكد توافقية وسم SEO والملفات المعقدة.' 
                    : 'Our proprietary checker simulates payload handshakes, verifying canonical indexes and mobile responsiveness levels.'}
                </p>
              </div>

              <form onSubmit={startSeoAudit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="url"
                  required
                  placeholder={lang === 'ar' ? 'مثال: https://mywebsite.com' : 'e.g. https://mywebsite.com'}
                  value={auditUrl}
                  onChange={(e) => setAuditUrl(e.target.value)}
                  className="flex-1 bg-gray-950 border border-gray-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#63D6B5] font-mono text-left"
                />
                <button
                  type="submit"
                  disabled={auditStatus === 'running'}
                  className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 font-bold text-sm transition-all flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-50 cursor-pointer"
                >
                  {auditStatus === 'running' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {lang === 'ar' ? 'جاري الفحص...' : 'Auditing System...'}
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4" />
                      {lang === 'ar' ? 'ابدأ الفحص الفوري' : 'Launch Assessment'}
                    </>
                  )}
                </button>
              </form>

              {/* SIMULATION TRON LABELS */}
              {auditStatus === 'running' && (
                <div className="border border-gray-800 bg-gray-950 rounded-2xl p-6 font-mono text-left text-xs text-emerald-400 space-y-2 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#63D6B5] to-teal-500 animate-pulse w-full" />
                  <div className="text-gray-500">// SYSTEM_AUDIT_TERMINAL //</div>
                  {auditLogs.slice(0, activeLogIndex + 1).map((log, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span className="text-gray-600">&gt;</span>
                      <span className={i === activeLogIndex ? 'animate-pulse text-white' : ''}>{log}</span>
                    </div>
                  ))}
                </div>
              )}

              {auditStatus === 'completed' && (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }} 
                  animate={{ scale: 1, opacity: 1 }}
                  className="border border-[#63D6B5]/30 bg-[#63D6B5]/5 rounded-2xl p-6 md:p-8 space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-b border-gray-800/80 pb-6">
                    <div>
                      <div className="text-4xl font-mono font-extrabold text-[#63D6B5]">{seoScore}/100</div>
                      <div className="text-xs text-gray-400 mt-2">{lang === 'ar' ? 'درجة السيو التقني' : 'Technical Core Score'}</div>
                    </div>
                    <div>
                      <div className="text-4xl font-mono font-extrabold text-amber-500">77%</div>
                      <div className="text-xs text-gray-400 mt-2">{lang === 'ar' ? 'مؤشر أداء السرعة' : 'Lighthouse Speed Rating'}</div>
                    </div>
                    <div>
                      <div className="text-4xl font-mono font-extrabold text-[#89FFE1]">C (Average)</div>
                      <div className="text-xs text-gray-400 mt-2">{lang === 'ar' ? 'الحالة المعمارية العامة' : 'Structural Health Stat'}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      {lang === 'ar' ? 'توصيات مهندسي فينتاريا لتسريع موقعك:' : 'Direct Engineering Recommendations:'}
                    </h4>
                    <div className="space-y-2 text-xs md:text-sm text-gray-300">
                      <p>• {lang === 'ar' ? 'سيرفر الاستضافة بطيء: خوادمك السابقة تزيد زمن تحميل أول بايت (TTFB).' : 'High Host Latency: Your server increases TTFB times.'}</p>
                      <p>• {lang === 'ar' ? 'صور ضخمة غير مضغوطة: يجب تحويل الصور لـ WebP لتسريع الصفحة.' : 'Unoptimized Assets: Compress illustrations into WebP to save bandwidth.'}</p>
                      <p>• {lang === 'ar' ? 'موقعك لا يعتمد على Edge CDN كافية لدول الخليج والشرق الأوسط.' : 'Missing Edge Edge Cache: Enable Cloudflare or AWS routes.'}</p>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-950/70 p-4 rounded-xl border border-gray-800">
                    <p className="text-xs text-gray-400 text-center sm:text-left">
                      {lang === 'ar' ? 'تبنى موقعاً خارق السرعة 100/100 بأداوتنا الفريدة.' : 'Unlock perfect 100/100 Google core web vitals with us.'}
                    </p>
                    <a
                      href="#contact"
                      className="px-5 py-2.5 rounded-lg bg-[#63D6B5] text-gray-950 font-bold text-xs hover:bg-[#46C6A5] transition-all"
                    >
                      {lang === 'ar' ? 'صلح موقعك فوراً ↗' : 'Optimize Your Site Now ↗'}
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* TOOL 3: ROI GROWTH CALCULATOR */}
          {activeTab === 'roi' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10"
            >
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#63D6B5]" />
                    {lang === 'ar' ? 'محدد المقاييس التشغيلية الحالية' : 'Operational Metrics inputs'}
                  </h3>
                </div>

                {/* Monthly Visitors */}
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono text-xs text-gray-400">
                    <span>{lang === 'ar' ? 'عدد زوار الموقع شهرياً:' : 'Monthly Site traffic:'}</span>
                    <span className="text-white font-bold">{monthlyVisitors.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={monthlyVisitors}
                    onChange={(e) => setMonthlyVisitors(parseInt(e.target.value))}
                    className="w-full accent-[#63D6B5] h-1.5 bg-gray-800 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Conversion Rate */}
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono text-xs text-gray-400">
                    <span>{lang === 'ar' ? 'معدل الشراء / التحويل الحالي (%):' : 'Current conversion rate (%):'}</span>
                    <span className="text-white font-bold">{currentConvRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="5.0"
                    step="0.1"
                    value={currentConvRate}
                    onChange={(e) => setCurrentConvRate(parseFloat(e.target.value))}
                    className="w-full accent-[#63D6B5] h-1.5 bg-gray-800 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Average Order Value (AOV) */}
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono text-xs text-gray-400">
                    <span>{lang === 'ar' ? 'متوسط قيمة الطلب الفردي (AOV):' : 'Average ticket value per client:'}</span>
                    <span className="text-white font-bold">{avgOrderValue} {currency.code}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(parseInt(e.target.value))}
                    className="w-full accent-[#63D6B5] h-1.5 bg-gray-800 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Conversion Boost Expected */}
                <div className="p-4 bg-[#63D6B5]/5 border border-[#63D6B5]/20 rounded-xl">
                  <div className="flex justify-between items-center mb-2 font-mono text-xs text-gray-400">
                    <span className="text-[#89FFE1] font-bold">{lang === 'ar' ? 'التحسن المتوقع بموقع فينتاريا:' : 'Projected Boost with VENTARIA:'}</span>
                    <span className="text-[#63D6B5] font-black font-mono">+{projectedLift}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="6.0"
                    step="0.5"
                    value={projectedLift}
                    onChange={(e) => setProjectedLift(parseFloat(e.target.value))}
                    className="w-full accent-[#89FFE1] h-1.5 bg-gray-800 rounded-lg cursor-pointer"
                  />
                  <p className="text-[10px] text-gray-400 mt-2">
                    {lang === 'ar' 
                      ? '• معدل النمو المعتاد لمشاريعنا يحوم حول +1.5% إلى +4.5% بفضل الـ High-End UX المطور.' 
                      : '• Our redesigns typically unlock between +1.5% to +4.5% in transactional conversion lifts.'}
                  </p>
                </div>
              </div>

              {/* Simulation Result Column */}
              <div className="lg:col-span-6 flex flex-col justify-between border border-gray-800 bg-gray-900/10 p-6 md:p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                  <TrendingUp className="w-48 h-48 text-[#63D6B5]" />
                </div>

                <div className="space-y-4">
                  <span className="text-xs font-mono tracking-widest text-[#89FFE1]">
                    {lang === 'ar' ? 'مخرجات محاكاة الأرباح' : 'Simulated Growth Metrics'}
                  </span>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-gray-800/80 bg-gray-950 p-4 rounded-xl">
                      <div className="text-gray-400 text-[10px] uppercase font-mono">{lang === 'ar' ? 'الدخل الشهري الحالي' : 'Current Monthly Sales'}</div>
                      <div className="text-lg font-mono font-bold text-white mt-1">
                        {Math.round(currentMonthlyRevenue).toLocaleString()} {currency.code}
                      </div>
                    </div>
                    <div className="border border-gray-800/80 bg-[#112423] p-4 rounded-xl">
                      <div className="text-[#89FFE1] text-[10px] uppercase font-mono">{lang === 'ar' ? 'الدخل الشهري الجديد' : 'New Monthly Sales'}</div>
                      <div className="text-lg font-mono font-bold text-[#63D6B5] mt-1 text-emerald-400">
                        {Math.round(projectedMonthlyRevenue).toLocaleString()} {currency.code}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-tr from-[#63D6B5]/20 to-teal-900/10 border border-[#63D6B5]/30 rounded-xl space-y-2 text-center">
                    <div className="text-xs text-gray-400 font-mono">{lang === 'ar' ? 'صافي الإيرادات الإضافية شهرياً' : 'Net Incremental Revenue / Month'}</div>
                    <div className="text-3xl md:text-4xl font-extrabold text-[#89FFE1] font-mono leading-none py-1">
                      +{Math.round(monthlyGain).toLocaleString()} <span className="text-xs text-white">{currency.code}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-900/80 font-mono text-center space-y-1">
                    <div className="text-gray-500 text-[10px]">{lang === 'ar' ? 'العائد الإضافي المتوقع سنوياً' : 'Projected Annual Financial Growth'}</div>
                    <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-amber-300 font-mono">
                      +{Math.round(annualGain).toLocaleString()} {currency.code}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-[10px] text-gray-500 max-w-sm text-center sm:text-left">
                    {lang === 'ar' 
                      ? 'ابدأ الهجرة البرمجية الفاخرة للأنظمة الرقمية المخصصة واستحوذ على نموك الضائع.' 
                      : 'Stop leaking visitors. Partner with Nexus and lock in your structural growth milestones.'}
                  </p>
                  <a
                    href="#contact"
                    className="w-full sm:w-auto px-5 py-3 rounded-lg bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 font-bold text-xs transition-all hover:scale-105"
                  >
                    {lang === 'ar' ? 'تواصل معنا للتنفيذ ↗' : 'Connect for Roadmap ↗'}
                  </a>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
