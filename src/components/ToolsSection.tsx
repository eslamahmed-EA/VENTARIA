import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, ShieldAlert, Sparkles, TrendingUp, CheckCircle, ArrowRight, Loader2, RefreshCw } from 'lucide-react';
import { Language, CurrencyConfig } from '../types';

interface ToolsSectionProps {
  lang: Language;
  currency: CurrencyConfig;
  t: any;
}

export default function ToolsSection({ lang, currency, t }: ToolsSectionProps) {
  const [activeTab, setActiveTab ] = useState<'cost' | 'seo' | 'roi'>('cost');

  // --- WEBSITE COST CALCULATOR STATE ---
  const [projectType, setProjectType] = useState<'business' | 'store' | 'saas' | 'custom'>('business');
  const [pageCount, setPageCount] = useState<number>(5);
  const [features, setFeatures] = useState<string[]>(['multilingual']);
  const [deliverySpeed, setDeliverySpeed] = useState<'standard' | 'express'>('standard');
  const [calculatedCost, setCalculatedCost] = useState<number>(0);

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

  // Calculate project cost instantly
  useEffect(() => {
    let base = 0;
    if (projectType === 'business') base = 1500;
    else if (projectType === 'store') base = 3500;
    else if (projectType === 'saas') base = 6000;
    else if (projectType === 'custom') base = 8500;

    let pageCost = (pageCount - 1) * 120;
    if (pageCount > 15) pageCost = 14 * 120 + (pageCount - 15) * 80;

    let featuresCost = features.length * 400;
    if (features.includes('e-payment')) featuresCost += 500;
    if (features.includes('custom-systems')) featuresCost += 1000;

    let speedMultiplier = deliverySpeed === 'express' ? 1.4 : 1.0;

    const totalUSD = (base + pageCost + featuresCost) * speedMultiplier;
    setCalculatedCost(Math.round(totalUSD * currency.rate));
  }, [projectType, pageCount, features, deliverySpeed, currency]);

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
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#63D6B5]" />
                    {lang === 'ar' ? 'تصنيف وحجم النظام الرقمي' : 'System Category'}
                  </h3>
                  <div className="grid grid-cols-2 gap-3.5">
                    {[
                      { id: 'business', label: lang === 'ar' ? 'موقع شركة تعريفي' : 'Business Page', desc: 'Representative UX' },
                      { id: 'store', label: lang === 'ar' ? 'متجر إلكتروني فاخر' : 'Luxury eCommerce', desc: 'High conversions' },
                      { id: 'saas', label: lang === 'ar' ? 'منصة سحابية SaaS' : 'SaaS Application', desc: 'Secure metrics' },
                      { id: 'custom', label: lang === 'ar' ? 'برنامج و نظام مخصص' : 'Custom Software', desc: 'Bespoke logic' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setProjectType(opt.id as any)}
                        className={`text-right p-4 rounded-xl border transition-all duration-300 text-left ${
                          projectType === opt.id 
                            ? 'border-[#63D6B5] bg-[#63D6B5]/5 shadow-inner' 
                            : 'border-gray-800 bg-gray-900/40 hover:border-gray-700'
                        }`}
                      >
                        <div className={`text-sm font-bold ${projectType === opt.id ? 'text-[#89FFE1]' : 'text-gray-300'}`}>
                          {opt.label}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Page Count Slider */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-bold font-mono text-gray-400">
                      {lang === 'ar' ? 'عدد واجهات العرض / الصفحات المصممة' : 'Estimated Designed Pages'}
                    </h3>
                    <span className="text-lg font-bold text-[#89FFE1] border border-[#63D6B5]/30 px-3 py-1 rounded bg-[#63D6B5]/10 font-mono">
                      {pageCount}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={pageCount}
                    onChange={(e) => setPageCount(parseInt(e.target.value))}
                    className="w-full accent-[#63D6B5] h-2 bg-gray-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                    <span>1</span>
                    <span>10</span>
                    <span>20</span>
                    <span>30</span>
                    <span>40+</span>
                  </div>
                </div>

                {/* Micro Inclusions / Custom Features */}
                <div>
                  <h3 className="text-sm font-bold font-mono text-gray-400 mb-4">
                    {lang === 'ar' ? 'المزايا الإضافية والمزامنات المطلوبة' : 'Custom Inclusions & Additions'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'multilingual', labelText: lang === 'ar' ? 'بنائية ثنائية اللغة (عربي/إنجليزي)' : 'Full Multi-Language (Ar/En)' },
                      { id: 'e-payment', labelText: lang === 'ar' ? 'بوابة سداد إلكتروني معقدة' : 'Secure API Merchant Gateways' },
                      { id: 'custom-systems', labelText: lang === 'ar' ? 'لوحة إحصائيات متكاملة ومؤشرات' : 'Advanced Analytics Telemetry' },
                      { id: 'seo-optimized', labelText: lang === 'ar' ? 'تهيئة تامة لمحركات البحث (SEO)' : 'Core Lighthouse SEO Tuning' }
                    ].map((f) => (
                      <label 
                        key={f.id}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                          features.includes(f.id) 
                            ? 'border-[#63D6B5]/60 bg-[#63D6B5]/5 text-[#89FFE1]' 
                            : 'border-gray-800 bg-gray-900/20 text-gray-400 hover:border-gray-700'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={features.includes(f.id)}
                          onChange={() => handleFeatureToggle(f.id)}
                          className="w-4 h-4 rounded text-[#63D6B5] bg-gray-800 border-gray-700 focus:ring-0 cursor-pointer"
                        />
                        <span className="text-xs font-semibold">{f.labelText}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Delivery Priority speed */}
                <div>
                  <h3 className="text-sm font-bold font-mono text-gray-400 mb-3">
                    {lang === 'ar' ? 'سرعة الإنجاز والجدول الزمني للهندسة' : 'Delivery Timeline Requirement'}
                  </h3>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setDeliverySpeed('standard')}
                      className={`flex-1 py-3 px-4 rounded-xl border text-xs font-bold transition-all ${
                        deliverySpeed === 'standard' 
                          ? 'border-[#63D6B5] bg-[#63D6B5]/5 text-[#89FFE1]' 
                          : 'border-gray-800 text-gray-400 hover:bg-gray-900/40'
                      }`}
                    >
                      {lang === 'ar' ? 'قياسي (ضمان الجودة والدقة القصوى)' : 'Standard Elite Quality (Rigid Audits)'}
                    </button>
                    <button
                      onClick={() => setDeliverySpeed('express')}
                      className={`flex-1 py-3 px-4 rounded-xl border text-xs font-bold transition-all ${
                        deliverySpeed === 'express' 
                          ? 'border-amber-500/50 bg-amber-500/5 text-amber-200' 
                          : 'border-gray-800 text-gray-400 hover:bg-gray-900/40'
                      }`}
                    >
                      ⚡ {lang === 'ar' ? 'مستعجل (تخصيص طاقم كامل فوري)' : 'Express Launch (Fully Dedicated Squad)'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Estimate Receipt Panel */}
              <div className="lg:col-span-5">
                <div className="sticky top-4 border border-[#63D6B5]/30 bg-gradient-to-b from-gray-900/70 to-[#07111D] rounded-2xl p-6 shadow-xl relative overflow-hidden">
                  
                  {/* Decorative corner lines */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#63D6B5]/75" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#63D6B5]/75" />
                  
                  <div className="flex items-center gap-2 mb-6">
                    <Calculator className="w-5 h-5 text-[#63D6B5]" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#89FFE1]">
                      {lang === 'ar' ? 'تقدير أولي مبدئي' : 'Provisional Quotation'}
                    </span>
                  </div>

                  <div className="space-y-4 text-xs font-mono border-b border-gray-800 pb-6 text-gray-400">
                    <div className="flex justify-between">
                      <span>{lang === 'ar' ? 'صنف البرمجة:' : 'System Base:'}</span>
                      <span className="text-white font-bold">{projectType.toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{lang === 'ar' ? 'الواجهات المقدرة:' : 'Interfaces Count:'}</span>
                      <span className="text-white font-bold">{pageCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{lang === 'ar' ? 'الميزات النشطة:' : 'Selected Extras:'}</span>
                      <span className="text-white font-bold">{features.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{lang === 'ar' ? 'جدول الهندسة:' : 'Delivery Model:'}</span>
                      <span className="text-white font-bold">{deliverySpeed.toUpperCase()}</span>
                    </div>
                  </div>

                  <div className="py-6 text-center">
                    <div className="text-xs text-gray-500 font-mono mb-1">{lang === 'ar' ? 'التكلفة الاستثمارية المتوقعة' : 'Estimated Capital Investment'}</div>
                    <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#63D6B5] via-teal-300 to-[#89FFE1] font-mono leading-none py-2">
                        {calculatedCost.toLocaleString()} <span className="text-lg text-white font-sans">{currency.code}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2 px-4 leading-relaxed">
                      {lang === 'ar' 
                        ? 'ملاحظة: هذا تقدير تقريبي آلي خاضع للمراجعة الهندسية الفردية لمتطلبات السيرفرات.' 
                        : 'Note: Automated estimation subject to individual review depending on dynamic storage models.'}
                    </p>
                  </div>

                  <a 
                    href="#contact"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 font-bold text-sm tracking-wide text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#63D6B5]/20 hover:scale-[1.02]"
                  >
                    {lang === 'ar' ? 'احجز استشارة لتأكيد السعر ↗' : 'Book Session to Lock Estimation ↗'}
                  </a>
                </div>
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
                      {lang === 'ar' ? 'توصيات مهندسي نكسس لتسريع موقعك:' : 'Direct Engineering Recommendations:'}
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
                    <span className="text-[#89FFE1] font-bold">{lang === 'ar' ? 'التحسن المتوقع بموقع نكسس:' : 'Projected Boost with Nexus:'}</span>
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
