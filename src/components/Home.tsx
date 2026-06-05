import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, TrendingUp, Zap, ArrowUpRight, Award, Flame, Quote, Sparkles } from "lucide-react";
import {
  UI_TRANSLATIONS,
  SERVICES_DATA_EN,
  SERVICES_DATA_AR,
  CASE_STUDIES_DATA_EN,
  CASE_STUDIES_DATA_AR,
  TESTIMONIALS_DATA_EN,
  TESTIMONIALS_DATA_AR,
  FAQS_DATA_EN,
  FAQS_DATA_AR
} from "../translations";

interface HomeProps {
  setCurrentPage: (page: string) => void;
  setSelectedServiceId: (id: string | null) => void;
  setSelectedCaseStudyId: (id: string | null) => void;
  lang: "en" | "ar";
}

export default function Home({ setCurrentPage, setSelectedServiceId, setSelectedCaseStudyId, lang }: HomeProps) {
  // Calculator States
  const [traffic, setTraffic] = useState<number>(50000);
  const [currentCr, setCurrentCr] = useState<number>(1.2);
  const [aov, setAov] = useState<number>(150);

  // Before & After Interactive Image Slider State
  const [beforeAfterSplit, setBeforeAfterSplit] = useState<number>(55);
  const [activeTab, setActiveTab] = useState<"shopify" | "dashboard" | "branding">("shopify");

  // FAQ Accordion State
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  // Use Dynamic Translation Data
  const servicesData = lang === "ar" ? SERVICES_DATA_AR : SERVICES_DATA_EN;
  const caseStudiesData = lang === "ar" ? CASE_STUDIES_DATA_AR : CASE_STUDIES_DATA_EN;
  const testimonialsData = lang === "ar" ? TESTIMONIALS_DATA_AR : TESTIMONIALS_DATA_EN;
  const faqsData = lang === "ar" ? FAQS_DATA_AR : FAQS_DATA_EN;

  // Compute Calculator Metrics
  const currentMonthlyRevenue = (traffic * (currentCr / 100)) * aov;
  const targetCr = Math.min(4.8, currentCr * 2.2); // Typical conservative estimate (2.2x increase)
  const targetMonthlyRevenue = (traffic * (targetCr / 100)) * (aov * 1.15); // AOV rises with premium checkout
  const rawRevSpike = targetMonthlyRevenue - currentMonthlyRevenue;
  const annualRevSpike = rawRevSpike * 12;

  const clientLogos = lang === "ar" ? [
    { name: "أثير لايف ستايل", tagline: "أزياء وملابس فنية" },
    { name: "لونا بيوتي", tagline: "مستحضرات تجميل سعودية" },
    { name: "إليسيان جنيف", tagline: "ساعات سويسرية راقية" },
    { name: "فولتيك لابس", tagline: "هندسة صوتيات متطورة" },
    { name: "بيستروت باريسيان", tagline: "مطعم فرنسي ميشلان" },
    { name: "سيروكو ريتيل", tagline: "علامات التجزئة الكبرى بالخليج" }
  ] : [
    { name: "Aether Lifestyle", tagline: "Technical Wear" },
    { name: "Luna Beauty", tagline: "Saudi Cosmetics" },
    { name: "Elysian Geneva", tagline: "Swiss Horology" },
    { name: "Voltaic Labs", tagline: "Audiophile Sound" },
    { name: "Bistrot Parisian", tagline: "Michelin Dining" },
    { name: "Sirocco Retail", tagline: "GCC Enterprise" }
  ];

  const statMetrics = lang === "ar" ? [
    { value: "+280%", label: "متوسط تسريع وزيادة أداء المتجر", sub: "تحميل فوري في أقل من 1.2 ثانية تعاقدياً" },
    { value: "4.85%", label: "متوسط معدل تحويل الواجهات والمتاجر", sub: "متوسط التحويل للتجارة التقليدية بالخليج هو 1.1%" },
    { value: "$48M+", label: "أرباح وعوائد عملائنا بعد الإطلاق", sub: "رصد وتوثيق دقيق عبر أنظمة تحليلات GA4" },
    { value: "98+", label: "متوسط تقييم ومؤشر أداء Google Lighthouse", sub: "برمجة وبناء مخصص خفيف وبلا استنزاف ثواني" }
  ] : [
    { value: "+280%", label: "Average Shopify/Salla Web Speed Boost", sub: "Under 1.2s average load time" },
    { value: "4.85%", label: "Average Storefront Conversion Rate", sub: "GCC e-commerce average is 1.1%" },
    { value: "$48M+", label: "Client Revenue Generated Since Launch", sub: "Tracking via certified GA4 pixels" },
    { value: "98+", label: "Average Google Lighthouse Audit Score", sub: "Zero-bloat customized programming" }
  ];

  const coreProcesses = lang === "ar" ? [
    { step: "01", name: "الاكتشاف والاستشارة", desc: "دراسة وتدقيق منافسي علامتك التجارية ورسم الهيكل وسيناريوهات النمو والعوائد." },
    { step: "02", name: "التخطيط والاستراتيجية", desc: "تخطيط واجهات وعرض الهوية، قنوات ووسائل الدفع، وبناء مسارات الإطلاق." },
    { step: "03", name: "التصميم الفاخر", desc: "بناء واجهات ونماذج تفاعلية مذهلة على Figma مستوحاة من روعة الفخامة السويسرية." },
    { step: "04", name: "التطوير والبرمجة", desc: "كتابة وبناء المتجر يدوياً بكود نظيف جداً على شوبيفاي أو Twilight سلة." },
    { step: "05", name: "التشغيل وحوكمة الأمان", desc: "مراجعة المتجر على أكثر من 15 جهاز لضمان سرعات فائقة وربط الـ DNS الآمن." },
    { step: "06", name: "بحوث تحسين التحويل CRO", desc: "إجراء مقارنات A/B سلوكية وتدوير حزم البيع والمقترحات للوصول لأقصى الأرباح." }
  ] : [
    { step: "01", name: "Discovery", desc: "Scientific competitor catalog auditing, target consumer profiling, and ROI metric calculation." },
    { step: "02", name: "Strategy", desc: "Designing visual layouts, localized GCC payment pipelines, and high-stakes speed plans." },
    { step: "03", name: "Design", desc: "Assembling custom Figma prototypes inspired by Swiss minimalist aesthetics and high conversion principles." },
    { step: "04", name: "Development", desc: "Writing hand-coded, zero-bloat Shopify Liquid or Salla Twilight architectures." },
    { step: "05", name: "Launch", desc: "Performing multi-browser, multi-device QA testing with perfect secure DNS integration." },
    { step: "06", name: "Growth", desc: "Ongoing custom scientific A/B tests, and micro-copy updates to squeeze maximum yields." }
  ];

  const handleServiceClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentPage("services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCaseStudyClick = (caseId: string) => {
    setSelectedCaseStudyId(caseId);
    setCurrentPage("case-studies");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const textAlignment = lang === "ar" ? "text-right" : "text-left";
  const flexDir = lang === "ar" ? "flex-row-reverse" : "flex-row";

  return (
    <div className={`relative bg-black text-white min-h-screen overflow-x-hidden pt-20 ${textAlignment}`} id="home-view-root">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 ambient-glow" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 ambient-glow" />

      {/* ================= HERO SECTION ================= */}
      <section className="relative px-6 lg:px-12 pt-16 pb-24 max-w-7xl mx-auto" id="hero-section">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block">
                {UI_TRANSLATIONS[lang].partnerLabel}
              </span>
            </div>

            <h1 className="text-5xl md:text-[84px] leading-[0.9] font-extrabold tracking-tighter text-white" id="hero-title">
              {UI_TRANSLATIONS[lang].heroTitle1} <br />
              {UI_TRANSLATIONS[lang].heroTitle2} <span className="text-zinc-800">{UI_TRANSLATIONS[lang].heroTitle3}</span> <br />
              <span className="text-accent">{UI_TRANSLATIONS[lang].heroTitle4}</span>
            </h1>

            <p className="text-lg text-zinc-400 max-w-md leading-relaxed font-normal">
              {UI_TRANSLATIONS[lang].heroSub}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setCurrentPage("contact")}
                className="bg-accent text-black px-8 py-4 font-bold rounded-lg hover:scale-103 transition-transform text-sm tracking-wide cursor-pointer"
                id="hero-cta-start"
              >
                {UI_TRANSLATIONS[lang].startProject}
              </button>
              <button
                onClick={() => setCurrentPage("pricing")}
                className="bg-zinc-900 text-white px-8 py-4 font-bold rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors text-sm tracking-wide cursor-pointer"
                id="hero-cta-consult"
              >
                {UI_TRANSLATIONS[lang].viewCaseStudies}
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="flex items-center space-x-8 pt-8 border-t border-zinc-900">
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white">500+</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">{UI_TRANSLATIONS[lang].storesLaunched}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white">$250M+</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">{UI_TRANSLATIONS[lang].clientRev}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-accent">98%</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">{UI_TRANSLATIONS[lang].retentionRate}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 h-[480px]">
            {/* Elegant Mockup Sandbox Layout */}
            <div className="w-full h-full relative rounded-3xl p-0 overflow-hidden glass accent-glow">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-black/40">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-text-secondary tracking-widest bg-white/5 py-1 px-3 rounded">
                  {UI_TRANSLATIONS[lang].labsLabel}
                </div>
                <div className="w-4 h-4 text-accent">
                  <Zap className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Internal tabs for dashboard, store mockup, branding */}
              <div className="flex bg-black/60 p-1 border-b border-white/5">
                {["shopify", "dashboard", "branding"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`flex-1 py-2 text-xs font-mono uppercase tracking-widest text-center cursor-pointer transition-colors duration-300 ${
                      activeTab === tab ? "bg-white/5 text-accent border-b-2 border-accent" : "text-text-secondary opacity-60"
                    }`}
                  >
                    {tab === "shopify" && (lang === "ar" ? "شوبيفاي" : "Shopify")}
                    {tab === "dashboard" && (lang === "ar" ? "لوحة التحكم" : "Dashboard")}
                    {tab === "branding" && (lang === "ar" ? "الهوية البصرية" : "Branding")}
                  </button>
                ))}
              </div>

              {/* Dynamic Interactive Panel Mockup */}
              <div className="p-6 h-[calc(100%-88px)] flex flex-col justify-between overflow-y-auto">
                <AnimatePresence mode="wait">
                  {activeTab === "shopify" && (
                    <motion.div
                      key="shopify-mock"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between bg-white/5 p-4 rounded-lg border border-white/5">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-accent/20 flex items-center justify-center text-accent text-xs font-extrabold font-mono rounded-lg">
                            S+
                          </div>
                          <div>
                            <p className="text-xs font-mono text-accent uppercase tracking-widest">ECOMMERCE CORE</p>
                            <h4 className="text-sm font-bold text-white font-sans">{UI_TRANSLATIONS[lang].vanguardShopify.split(" ")[0]}</h4>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-text-secondary py-1 px-2 bg-black rounded">$499.00</span>
                      </div>

                      {/* Interactive buy module simulator */}
                      <div className="rounded-lg bg-black/90 p-4 border border-accent/20 space-y-3 text-left">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-text-secondary font-mono">SELECTED FABRIC:</span>
                          <span className="text-accent font-bold font-mono">3-LAYER GORE-TEX</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="border border-accent rounded p-2 text-center bg-accent/5">
                            <span className="text-[10px] font-mono text-text-secondary block">WATERPROOF</span>
                            <span className="text-xs font-bold font-mono text-white">28,000mm</span>
                          </div>
                          <div className="border border-white/5 rounded p-2 text-center bg-white/5">
                            <span className="text-[10px] font-mono text-text-secondary block">BREATHABILITY</span>
                            <span className="text-xs font-bold font-mono text-white">RET &lt; 9</span>
                          </div>
                          <div className="border border-white/5 rounded p-2 text-center bg-white/5">
                            <span className="text-[10px] font-mono text-text-secondary block">WEIGHT</span>
                            <span className="text-xs font-bold font-mono text-white">385g</span>
                          </div>
                        </div>
                        <button className="w-full h-10 rounded bg-accent text-black text-xs font-extrabold uppercase tracking-widest mt-2 flex items-center justify-center space-x-2 cursor-pointer">
                          <Zap className="w-3.5 h-3.5 text-black" />
                          <span>{lang === "ar" ? "شراء فوري سريع" : "INSTANT CHECKOUT"}</span>
                        </button>
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono bg-white/5 p-3 rounded">
                        <span className="text-text-secondary">LIGHTHOUSE SPEED INDEX:</span>
                        <span className="text-accent font-bold">100% EXCELLENCE</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "dashboard" && (
                    <motion.div
                      key="dashboard-mock"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-white/5 border border-white/5 rounded-lg">
                          <span className="text-[10px] text-text-secondary font-mono uppercase block">{lang === "ar" ? "إجمالي المبيعات" : "Total Sales"}</span>
                          <span className="text-lg font-bold font-mono text-white">$142,500.00</span>
                          <div className="text-[10px] text-accent font-mono mt-1 flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" /> +342%
                          </div>
                        </div>
                        <div className="p-3 bg-white/5 border border-white/5 rounded-lg">
                          <span className="text-[10px] text-text-secondary font-mono uppercase block">{lang === "ar" ? "معدل التحويل" : "Conversion Rate"}</span>
                          <span className="text-lg font-bold font-mono text-accent">5.85%</span>
                          <div className="text-[10px] text-accent font-mono mt-1 flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" /> {lang === "ar" ? "الأفضل قطاعياً" : "Best in segment"}
                          </div>
                        </div>
                      </div>

                      <div className="h-32 bg-black/60 rounded-lg p-3 border border-white/5 flex flex-col justify-between">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-mono text-text-secondary uppercase">{lang === "ar" ? "معدل تدفق المعاملات" : "Hourly Transactions"}</span>
                          <span className="text-[10px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded">REAL-TIME</span>
                        </div>
                        <div className="flex items-end space-x-1.5 h-16 pt-2">
                          <div className="w-full bg-accent/20 h-6 rounded-t" />
                          <div className="w-full bg-accent/30 h-10 rounded-t" />
                          <div className="w-full bg-accent/40 h-14 rounded-t" />
                          <div className="w-full bg-accent/60 h-8 rounded-t" />
                          <div className="w-full bg-accent/80 h-18 rounded-t" />
                          <div className="w-full bg-accent h-24 rounded-t" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "branding" && (
                    <motion.div
                      key="branding-mock"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="p-4 bg-white/5 border border-white/5 rounded-lg text-center space-y-3">
                        <span className="text-[9px] font-mono text-accent tracking-[0.3em] uppercase block">TACTILE GEOMETRY GRID</span>
                        <div className="w-24 h-24 mx-auto rounded-full border border-dashed border-accent flex items-center justify-center p-3 relative">
                          <div className="w-full h-full rounded-full border border-accent/20 flex items-center justify-center font-mono text-lg text-accent font-bold">
                            V
                          </div>
                          <div className="absolute top-0 w-1.5 h-1.5 bg-accent rounded-full -mt-0.75" />
                          <div className="absolute bottom-0 w-1.5 h-1.5 bg-accent rounded-full -mb-0.75" />
                          <div className="absolute left-0 w-1.5 h-1.5 bg-accent rounded-full -ml-0.75" />
                          <div className="absolute right-0 w-1.5 h-1.5 bg-accent rounded-full -mr-0.75" />
                        </div>
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-widest text-text-secondary">{UI_TRANSLATIONS[lang].brandName} LOGOMARK</h4>
                          <p className="text-[10px] text-text-secondary mt-1 font-sans">Strict ratio grid designed around golden ratio spirals.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="flex items-center space-x-1 justify-center mt-4">
                  <div className={`w-1.5 h-1.5 rounded-full ${activeTab === 'shopify' ? 'bg-accent' : 'bg-white/10'}`} />
                  <div className={`w-1.5 h-1.5 rounded-full ${activeTab === 'dashboard' ? 'bg-accent' : 'bg-white/10'}`} />
                  <div className={`w-1.5 h-1.5 rounded-full ${activeTab === 'branding' ? 'bg-accent' : 'bg-white/10'}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST LOGOS SECTION ================= */}
      <section className="border-y border-white/5 bg-dark-secondary py-12 px-6 lg:px-12" id="trust-section">
        <div className="max-w-7xl mx-auto flex flex-col space-y-6">
          <p className="text-center text-xs font-mono tracking-[0.3em] uppercase text-text-secondary">
            {lang === "ar" ? "شراكات استثنائية ونمو متسارع حول العالم" : "PARTNERING WITH DISRUPTIVE ENTERPRISES WORLDWIDE"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20 pt-2">
            {clientLogos.map((client, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-pointer">
                <span className="text-white hover:text-accent font-extrabold tracking-wider font-sans text-md transition-colors duration-300">
                  {client.name.toUpperCase()}
                </span>
                <span className="text-[9px] text-text-secondary font-mono tracking-widest">
                  {client.tagline.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE ROI CALCULATOR ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto" id="roi-section">
        <div className="glass-panel-accent rounded-3xl p-8 lg:p-12 relative overflow-hidden accent-glow">
          <div className="absolute -top-24 -right-24 w-52 h-52 rounded-full bg-accent/10 blur-3xl" />
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block">
                  {UI_TRANSLATIONS[lang].calcHeading}
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase text-white leading-tight">
                {lang === "ar" ? "احسب قفزة" : "CALCULATE YOUR"}<br />
                <span className="text-accent">{UI_TRANSLATIONS[lang].brandName} LIFT.</span>
              </h2>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                {UI_TRANSLATIONS[lang].calcSub}
              </p>

              {/* Calculator Form Inputs */}
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-text-secondary uppercase">{UI_TRANSLATIONS[lang].monthlyTraffic}</span>
                    <span className="text-white font-bold">{traffic.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={traffic}
                    onChange={(e) => setTraffic(Number(e.target.value))}
                    className="w-full accent-accent bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-text-secondary uppercase">{UI_TRANSLATIONS[lang].currentConversion}</span>
                    <span className="text-white font-bold">{currentCr.toFixed(1)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="4.0"
                    step="0.1"
                    value={currentCr}
                    onChange={(e) => setCurrentCr(Number(e.target.value))}
                    className="w-full accent-accent bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-text-secondary uppercase">{UI_TRANSLATIONS[lang].avgOrderVal}</span>
                    <span className="text-white font-bold">${aov}</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="1000"
                    step="10"
                    value={aov}
                    onChange={(e) => setAov(Number(e.target.value))}
                    className="w-full accent-accent bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-black/60 border border-white/5 p-8 rounded-xl flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono tracking-widest text-text-secondary uppercase block">{lang === "ar" ? "عوائد الأداء المتوقعة من الدمج" : "PROSPECTED PERFORMANCE YIELD"}</span>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-white/5 p-4 rounded bg-white/5 text-left">
                    <span className="text-[10px] text-text-secondary font-mono block uppercase">{lang === "ar" ? "المدخول الحالي" : "Current Revenue"}</span>
                    <span className="text-lg font-bold font-mono text-white opacity-80">${Math.round(currentMonthlyRevenue).toLocaleString()}/mo</span>
                  </div>
                  <div className="border border-accent/20 p-4 rounded bg-accent/5 text-left">
                    <span className="text-[10px] text-accent font-mono block uppercase">{UI_TRANSLATIONS[lang].projectedCr}</span>
                    <span className="text-lg font-bold font-mono text-accent">${Math.round(targetMonthlyRevenue).toLocaleString()}/mo</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 text-left">
                  <span className="text-xs text-text-secondary font-mono block uppercase mb-1">{UI_TRANSLATIONS[lang].estRevIncrease}</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl lg:text-5xl font-extrabold text-accent font-mono">${Math.round(rawRevSpike).toLocaleString()}</span>
                    <span className="text-xs text-text-secondary font-mono">{lang === "ar" ? "ريال / شهرياً إضافي" : "/ Month Extra"}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-accent/10 rounded-lg flex items-center space-x-3 border border-accent/20">
                <TrendingUp className="w-8 h-8 text-accent shrink-0" />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white font-mono">{UI_TRANSLATIONS[lang].annualRevIncrease}</h4>
                  <p className="text-lg font-extrabold text-accent font-mono">+${Math.round(annualRevSpike).toLocaleString()}</p>
                </div>
              </div>

              <button
                onClick={() => setCurrentPage("contact")}
                className="w-full h-12 rounded bg-accent hover:bg-accent-hover text-black font-extrabold text-xs tracking-wider uppercase mt-2 transition-colors duration-300 flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>{UI_TRANSLATIONS[lang].startScaleBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-zinc-900" id="services-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block">
              {UI_TRANSLATIONS[lang].designDirection}
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase text-white leading-tight">
              {lang === "ar" ? "قدرات وهندسة" : "ENTERPRISE"}<br />
              <span className="text-zinc-500">{lang === "ar" ? "التجارة النخبوية" : "E-COMMERCE."}</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm md:text-base max-w-md leading-relaxed font-normal">
            {UI_TRANSLATIONS[lang].capabilitiesSub.substring(0, 150)}...
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const icons = [<Zap className="w-5 h-5 text-accent" />, <Flame className="w-5 h-5 text-accent" />, <Award className="w-5 h-5 text-accent" />, <Sparkles className="w-5 h-5 text-accent" />];
            return (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className="group border border-white/5 hover:border-accent/40 bg-dark-secondary/60 hover:bg-accent/5 p-8 rounded-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-80 relative overflow-hidden"
              >
                <div className="absolute -right-12 -bottom-12 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all duration-300" />
                
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors duration-300 text-accent">
                    {icons[idx % icons.length]}
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                  <p className="text-xs text-text-secondary line-clamp-3 leading-relaxed font-light">{service.shortDescription}</p>
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono text-accent hover:underline group-hover:translate-x-1.5 transition-transform duration-300">
                  <span>{lang === "ar" ? "استكشاف تفاصيل التميز" : "DISCOVER REVENUE MATRICES"}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FEATURED PROJECTS SECTION ================= */}
      <section className="py-24 bg-dark-secondary/40 px-6 lg:px-12 border-t border-zinc-900" id="projects-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <div>
                <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block">
                  {UI_TRANSLATIONS[lang].clientResults}
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase text-white">
                {lang === "ar" ? "أبرز مشاريع" : "FEATURED CASE"}<br />
                <span className="text-zinc-500">{lang === "ar" ? "شركاء النجاح" : "STUDIES."}</span>
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage("portfolio")}
              className="group flex items-center space-x-1 text-sm font-mono text-accent hover:underline cursor-pointer font-bold uppercase tracking-widest"
            >
              <span>{lang === "ar" ? "مشاهدة الأرشيف الاستراتيجي" : "EXPLORE ALL ARCHITECTURES"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="space-y-20">
            {caseStudiesData.slice(0, 2).map((cs, index) => (
              <div
                key={cs.id}
                className="grid lg:grid-cols-12 gap-12 items-center border-b border-white/5 pb-16 last:border-b-0"
              >
                <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center space-x-3 text-xs font-mono">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded border border-accent/20 uppercase">{cs.industry}</span>
                    <span className="text-text-secondary">{cs.platform}</span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">{cs.title}</h3>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-3 bg-white/5 border border-white/5 rounded text-left">
                      <span className="text-[9px] text-text-secondary font-mono uppercase block">{lang === "ar" ? "نسبة قفزة المبيعات" : "Sales Lift"}</span>
                      <span className="text-sm font-bold font-mono text-accent">{cs.metrics.revenueIncrease}</span>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/5 rounded text-left">
                      <span className="text-[9px] text-text-secondary font-mono uppercase block">{lang === "ar" ? "معدل تحويل المتجر" : "Conversion Rate"}</span>
                      <span className="text-sm font-bold font-mono text-white">{cs.metrics.conversionRate}</span>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/5 rounded col-span-2 md:col-span-1 text-left">
                      <span className="text-[9px] text-text-secondary font-mono uppercase block">{lang === "ar" ? "سرعة التحميل" : "Speed Index"}</span>
                      <span className="text-sm font-bold font-mono text-accent">{cs.metrics.loadTimeReduction}</span>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-text-secondary font-light leading-relaxed">
                    <strong className="text-white">{lang === "ar" ? "التحدي الهيكلي:" : "The Challenge:"}</strong> {cs.challenge.substring(0, 180)}...
                  </p>

                  <button
                    onClick={() => handleCaseStudyClick(cs.id)}
                    className="flex items-center space-x-2 px-6 h-12 rounded border border-accent/20 hover:border-accent bg-accent/5 hover:bg-accent hover:text-black text-accent text-xs font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer"
                  >
                    <span>{UI_TRANSLATIONS[lang].readFullStudy}</span>
                    <ArrowUpRight className="w-4 h-4 cursor-pointer" />
                  </button>
                </div>

                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative rounded-xl border border-white/10 bg-black overflow-hidden h-[340px] shadow-2xl flex flex-col justify-between group/cs shadow-accent/5">
                    <div className="absolute inset-0 select-none">
                      {/* Left: Premium Layout (After) */}
                      <div className="absolute inset-0 bg-dark-secondary flex flex-col justify-center p-8 space-y-4">
                        <div className="inline-flex py-1 px-2.5 bg-accent/10 border border-accent/20 text-accent text-[9px] font-mono rounded w-fit uppercase">{UI_TRANSLATIONS[lang].brandName} PERFORMANCE RENDER</div>
                        <h4 className="text-2xl font-bold font-sans">Bespoke Fluid Checkout System</h4>
                        <div className="flex space-x-4">
                          <div className="w-16 h-2 bg-accent rounded" />
                          <div className="w-24 h-2 bg-white/20 rounded" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 max-w-sm">
                          <div className="bg-black/60 p-3 rounded border border-white/5 flex flex-col text-left">
                            <span className="text-[9px] text-accent font-mono block">CHECKOUT STEP COUNT:</span>
                            <span className="text-sm font-bold text-white">1 Fluid Slide</span>
                          </div>
                          <div className="bg-black/60 p-3 rounded border border-white/5 flex flex-col text-left">
                            <span className="text-[9px] text-accent font-mono block">TRANSACTION LATENCY:</span>
                            <span className="text-sm font-bold text-accent">0.82 Seconds</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Old Bloated Layout (Before) */}
                      <div
                        className="absolute inset-0 bg-zinc-900 border-l border-zinc-700 p-8 flex flex-col justify-center space-y-4"
                        style={{ clipPath: `rect(0px 1000px 1000px ${beforeAfterSplit}%)` }}
                      >
                        <div className="inline-flex py-1 px-2.5 bg-red-500/10 border border-red-500/20 text-red-400 text-[9px] font-mono rounded w-fit uppercase">GENERIC THEME BLOTTER</div>
                        <h4 className="text-2xl font-bold font-sans text-zinc-400">Standard Bloated Theme</h4>
                        <div className="flex space-x-4">
                          <div className="w-16 h-2 bg-zinc-600 rounded" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 max-w-sm">
                          <div className="bg-black/40 p-3 rounded border border-white/5 flex flex-col text-left">
                            <span className="text-[9px] text-zinc-500 font-mono block">CHECKOUT STEP COUNT:</span>
                            <span className="text-sm font-bold text-zinc-500">4 Staggered Pages</span>
                          </div>
                          <div className="bg-black/40 p-3 rounded border border-white/5 flex flex-col text-left">
                            <span className="text-[9px] text-zinc-500 font-mono block">TRANSACTION LATENCY:</span>
                            <span className="text-sm font-bold text-zinc-500">4.8 Seconds</span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive split slider guide */}
                      <div className="absolute top-0 bottom-0 pointer-events-none" style={{ left: `${beforeAfterSplit}%` }}>
                        <div className="w-[2px] h-full bg-accent relative flex items-center justify-center">
                          <div className="absolute w-8 h-8 rounded-full bg-accent text-black border-2 border-black flex items-center justify-center text-[10px] font-mono font-bold shadow-lg shadow-accent/50 -ml-1">
                            ↔
                          </div>
                        </div>
                      </div>

                      {/* Virtual scrubber region */}
                      <input
                        type="range"
                        min="10"
                        max="90"
                        value={beforeAfterSplit}
                        onChange={(e) => setBeforeAfterSplit(Number(e.target.value))}
                        className="absolute inset-0 opacity-0 w-full h-full cursor-ew-resize pointer-events-auto"
                      />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] font-mono text-text-secondary bg-black/60 p-2 rounded backdrop-blur border border-white/5">
                      <span>{lang === "ar" ? "← اسحب المعاينة التفاعلية لخصائص المتجر →" : "← SCRUB HARMONY SPEED DEPLOYMENT →"}</span>
                      <span className="text-accent">{lang === "ar" ? "شريحة مقارنة" : "INTERACTIVE SLIDER"}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-zinc-900" id="process-section">
        <div className="text-center space-y-4 mb-20">
          <div>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block">
              {UI_TRANSLATIONS[lang].coreProcessTitle}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase text-white leading-tight">
            {lang === "ar" ? "دورة حياة بناء" : "OUR SIX-STAGE"}<br />
            <span className="text-zinc-500">{lang === "ar" ? "المتجر الاستراتيجي" : "E-COMMERCE BLUEPRINT."}</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            {UI_TRANSLATIONS[lang].howWeStructure}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreProcesses.map((p, idx) => (
            <div
              key={idx}
              className="border border-white/5 bg-dark-secondary/20 p-8 rounded-xl relative group hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 text-left"
            >
              <div className="absolute top-4 right-6 text-5xl font-extrabold font-mono text-white/[0.03] group-hover:text-accent/[0.08] transition-colors duration-300 select-none">
                {p.step}
              </div>
              <div className="flex flex-col space-y-4">
                <span className="text-xs font-mono text-accent font-extrabold tracking-widest">{p.step} • STAGE</span>
                <h3 className="text-xl font-bold group-hover:text-amber-50">{p.name}</h3>
                <p className="text-sm text-text-secondary leading-relaxed font-light">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="py-24 bg-dark-secondary/30 px-6 lg:px-12 border-t border-zinc-900" id="testimonials-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div>
              <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block">
                {UI_TRANSLATIONS[lang].whatClientsSay}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase text-white leading-tight">
              {lang === "ar" ? "آراء قادة وصناع" : "WHAT FOUNDERS"}<br />
              <span className="text-zinc-500">{lang === "ar" ? "التجارة والـ DTC" : "ARE SAYING."}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonialsData.map((t) => (
              <div
                key={t.id}
                className="glass-panel p-8 rounded-xl flex flex-col justify-between space-y-6 border border-white/5 shadow-lg relative text-left"
              >
                <div className="absolute right-6 top-6 text-accent/10">
                  <Quote className="w-10 h-10" />
                </div>
                
                <p className="text-sm md:text-base text-text-secondary leading-relaxed italic font-light relative z-10">
                  "{t.content}"
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                  <div className="w-11 h-11 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-bold text-accent">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-text-secondary font-mono">{t.role}</p>
                    <p className="text-[10px] text-accent font-mono mt-0.5">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto border-t border-zinc-900" id="faq-section">
        <div className="text-center space-y-4 mb-16">
          <div>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block">
              {UI_TRANSLATIONS[lang].faqTitle}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase text-white leading-tight">
            {lang === "ar" ? "الأسئلة الشائعة" : "FREQUENTLY ASKED"}<br />
            <span className="text-zinc-500">{lang === "ar" ? "المستندة للحقائق" : "QUERIES."}</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-white/5 bg-dark-secondary/40 rounded-lg overflow-hidden transition-all duration-300 text-left"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 focus:outline-none cursor-pointer"
                  id={`home-faq-toggle-${faq.id}`}
                >
                  <span className="text-base font-bold text-white pr-4">{faq.question}</span>
                  <span className="text-accent font-mono text-xl shrink-0 select-none">{isOpen ? "−" : "+"}</span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-white/5"
                    >
                      <div className="p-6 text-sm text-text-secondary leading-relaxed bg-black/40 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5" id="final-cta">
        <div className="relative rounded-2xl bg-gradient-to-br from-dark-secondary to-black border border-white/10 p-10 lg:p-16 text-center select-none overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
          
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase font-bold block">{lang === "ar" ? "ارتق بمتجرك مع فينتاريا اليوم" : "ENGAGE VENTARIA STUDIO TODAY"}</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              {lang === "ar" ? "هل أنت مستعد لمضاعفة أرباحك؟" : "Ready to double your store sales?"}
            </h2>
            <p className="text-text-secondary text-sm md:text-base font-light leading-relaxed max-w-lg mx-auto">
              {lang === "ar" ? "احجز جلسة مراجعة معمارية خالية من الرسوم لنوائم تحويلاتك ونحصي القفزات الإستراتيجية." : "Book your secure e-commerce architecture evaluation. We will map your conversion leakages and calculate your ROI potential."}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button
                onClick={() => setCurrentPage("contact")}
                className="flex items-center justify-center space-x-1.5 px-8 h-12 rounded bg-accent text-black font-extrabold text-xs uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-lg cursor-pointer"
                id="cta-start-project"
              >
                <span>{UI_TRANSLATIONS[lang].startProject}</span>
                <ArrowRight className="w-4 h-4 text-black cursor-pointer" />
              </button>
              <button
                onClick={() => setCurrentPage("pricing")}
                className="flex items-center justify-center space-x-1.5 px-8 h-12 rounded border border-white/10 hover:border-accent bg-transparent text-white text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer"
                id="cta-view-plans"
              >
                <span>{lang === "ar" ? "مشاهدة الأسعار والخطط" : "View Packaging and Plans"}</span>
              </button>
            </div>
            
            <p className="text-[11px] text-text-secondary font-mono mt-4">
              {lang === "ar" ? "ضمان تحميل الجوال أقل من 1.5 ثانية • استشارة مجانية" : "Guaranteed under 1.5s mobile speed index • Free consultation slot"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
