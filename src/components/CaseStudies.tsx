import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Zap, Award, Cpu, ArrowRight } from "lucide-react";
import { CASE_STUDIES_DATA_EN, CASE_STUDIES_DATA_AR, UI_TRANSLATIONS } from "../translations";

interface CaseStudiesProps {
  selectedCaseStudyId: string | null;
  setSelectedCaseStudyId: (id: string | null) => void;
  setCurrentPage: (page: string) => void;
  lang: "en" | "ar";
}

export default function CaseStudies({ selectedCaseStudyId, setSelectedCaseStudyId, setCurrentPage, lang }: CaseStudiesProps) {
  const caseStudiesData = lang === "ar" ? CASE_STUDIES_DATA_AR : CASE_STUDIES_DATA_EN;

  const [activeId, setActiveId] = useState<string>("aether-apparel");

  useEffect(() => {
    if (selectedCaseStudyId) {
      setActiveId(selectedCaseStudyId);
    }
  }, [selectedCaseStudyId]);

  const activeCS = caseStudiesData.find((cs) => cs.id === activeId) || caseStudiesData[0];

  const handleCSChange = (id: string) => {
    setActiveId(id);
    setSelectedCaseStudyId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCSVisualBlueprint = (id: string) => {
    const isAr = lang === "ar";
    const spaceOffset = isAr ? "space-x-reverse" : "";
    const textAlign = isAr ? "text-right" : "text-left";
    const flexB = isAr ? "flex-row-reverse" : "flex-row";

    switch (id) {
      case "aether-apparel":
        return (
          <div className={`w-full bg-neutral-900 border border-white/5 rounded-xl p-6 lg:p-8 space-y-6 ${textAlign}`} id="blueprint-aether">
            <div className={`flex justify-between items-center text-xs font-mono border-b border-white/5 pb-4 ${flexB}`}>
              <span className="text-accent flex items-center shrink-0"><Zap className="w-3.5 h-3.5 mx-1" /> {isAr ? "مخطط هيكلة نواة المتجر" : "CORE METASTORE DIAGRAM"}</span>
              <span className="text-text-secondary">{isAr ? "مستوى النظام: نشط" : "SYSTEM LEVEL: ACC LIVE"}</span>
            </div>
            
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-text-secondary uppercase block">{isAr ? "عارض تفاعلي عالي الدقة للخصائص" : "HIGH-ACCURACY INTERACTIVE VISUALIZER"}</span>
              <div className="space-y-2">
                <div className="p-4 bg-black/60 rounded border border-accent/20">
                  <div className={`flex justify-between items-center mb-1 ${flexB}`}>
                    <span className="text-xs font-bold font-mono text-accent">{isAr ? "المستوى ٠١: واجهة سريعة الاستجابة" : "LAYER 01: DWR POLAMIDE SHELL"}</span>
                    <span className="text-[9px] font-mono text-accent bg-accent/10 px-1 rounded uppercase font-bold">{isAr ? "سرعة مضاعفة" : "Hydrophobic"}</span>
                  </div>
                  <p className="text-[11px] text-text-secondary">{isAr ? "كود مخصص يسحب بنية السلع والمنتجات بطريقة ديناميكية فائقة خالية من التأخير." : "Custom Liquid metaobjects pull fabric density files dynamically."}</p>
                </div>
                <div className="p-4 bg-black/60 rounded border border-white/5">
                  <div className={`flex justify-between items-center mb-1 ${flexB}`}>
                    <span className="text-xs font-bold font-mono text-white">{isAr ? "المستوى ٠٢: تكامل بوابات دفع سلسلة" : "LAYER 02: ACTIVE PAYMENT FLOWS"}</span>
                    <span className="text-[9px] font-mono text-text-secondary">0.05s latency</span>
                  </div>
                  <p className="text-[11px] text-text-secondary">{isAr ? "تنفيذ فوري لعمليات الدفع عبر Apple Pay ومدى دون مغادرة سلة المشتريات." : "Renders interactive hot-spots in high-density PNG."}</p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 p-4 rounded text-center text-xs font-mono text-accent font-bold">
              {isAr ? "تقليص زمن الاستجابة والتحميل بنسبة ٦٥٪ تعاقدياً" : "TOTAL TRANSACTION PIPELINE REDUCED BY 65% LATENCY"}
            </div>
          </div>
        );
      case "luna-gazing-cosmetics":
        return (
          <div className={`w-full bg-[#120e0e] border border-white/5 rounded-xl p-6 lg:p-8 space-y-6 ${textAlign}`} id="blueprint-luna">
            <div className={`flex justify-between items-center text-xs font-mono border-b border-pink-500/15 pb-4 ${flexB}`}>
              <span className="text-accent flex items-center shrink-0"><Award className="w-3.5 h-3.5 mx-1" /> {isAr ? "مصفوفة ترجمات ثنائية مرنة" : "DUAL SALLA TRANSLATE MATRIX"}</span>
              <span className="text-text-secondary">{isAr ? "الموقع // الرياض // معتمد" : "LOC // RIYADH // COMPLIANT"}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-black/80 rounded border border-white/5 text-right font-serif">
                <span className="text-[9px] font-mono text-accent block uppercase">{isAr ? "سجل التصيير العربي:" : "ARABIC RENDER LOG:"}</span>
                <span className="text-base text-white">لونـا قـيـزينـق</span>
                <span className="text-[10px] text-text-secondary block font-sans mt-2 font-light">{isAr ? "منحنيات هندسية تخدم فخامة التجربة." : "Custom geom-curves designed for gcc luxury."}</span>
              </div>
              <div className="p-4 bg-black/80 rounded border border-white/5 text-left font-sans">
                <span className="text-[9px] font-mono text-text-secondary block uppercase">LATIN RENDER LOG:</span>
                <span className="text-base text-white font-extrabold font-sans">LUNA BEAUTY</span>
                <span className="text-[10px] text-text-secondary block mt-2 font-light">Inter font metrics aligned to dual typography laws.</span>
              </div>
            </div>

            <div className="p-4 rounded bg-white/5 text-[10px] font-mono text-center text-text-secondary font-bold">
              {isAr ? "تم إدراج دعم Apple Pay ومدى بشكل مرن متوافق مع نظام سلة" : "MADA AND APPLE PAY EXECUTIONS INTEGRATED DIRECT INTO TWILIGHT"}
            </div>
          </div>
        );
      case "elysian-luxury-watches":
        return (
          <div className={`w-full bg-[#0a0d0d] border border-white/5 rounded-xl p-6 lg:p-8 space-y-6 ${textAlign}`} id="blueprint-elysian">
            <div className={`flex justify-between items-center text-xs font-mono border-b border-teal-500/15 pb-4 ${flexB}`}>
              <span className="text-accent flex items-center shrink-0"><Cpu className="w-3.5 h-3.5 mx-1" /> {isAr ? "برمجة اللامركزية وتفاعل فوري" : "HYDROGEN REACT MODEL CORE"}</span>
              <span className="text-text-secondary">{isAr ? "زمن التفاعل: ٠.٦٢ ثانية" : "TIME TO INTERACTIVE: 0.62S"}</span>
            </div>

            <div className="p-6 bg-black/95 rounded border border-accent/20 text-center space-y-3 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-radial-gradient-accent opacity-5" />
              <span className="text-[9px] font-mono text-accent tracking-[0.3em] uppercase block font-bold">{isAr ? "قاعة الساعات الفاخرة الافتراضية" : "VIP HOROLOGY SALON"}</span>
              
              <div className="w-16 h-16 rounded-full border-2 border-accent border-dashed mx-auto flex items-center justify-center animate-spin">
                <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center font-mono text-[9px] text-accent">
                  UTC+1
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-white mb-1">{isAr ? "معاينة تفاعلية ثلاثية الأبعاد بـ ٣٦٠ درجة" : "Interactive 360° Crown Dialer"}</p>
                <p className="text-[10px] text-text-secondary leading-normal max-w-xs mx-auto font-light">{isAr ? "تصفح ذكي غير مستهلك للذاكرة العشوائية لضمان سرعة فائقة لهواتف عملاء النخبة." : "Rendered using lazy-loaded canvas layers to prevent general thread bloating."}</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const textAlignment = lang === "ar" ? "text-right" : "text-left";
  const flexDir = lang === "ar" ? "flex-row-reverse" : "flex-row";
  const spaceXRev = lang === "ar" ? "space-x-reverse" : "";
  const layoutCol = lang === "ar" ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row";

  return (
    <div className={`bg-black text-white min-h-screen pt-28 pb-20 px-6 lg:px-12 ${textAlignment}`} id="case-studies-view-root">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block font-mono tracking-widest">
              {UI_TRANSLATIONS[lang].caseStudiesTitle}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase text-white leading-tight">
            {UI_TRANSLATIONS[lang].empiricalCaseStudies}
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
            {UI_TRANSLATIONS[lang].caseStudiesSub}
          </p>
        </div>

        {/* Case Study Selector Buttons */}
        <div className={`flex flex-wrap gap-4 justify-center border-y border-zinc-900 py-6 max-w-4xl mx-auto`}>
          {caseStudiesData.map((cs) => {
            const isActive = cs.id === activeCS.id;
            return (
              <button
                key={cs.id}
                onClick={() => handleCSChange(cs.id)}
                className={`px-5 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-accent text-black font-extrabold shadow-[0_3px_15px_rgba(94,225,181,0.2)]"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
                id={`cs-selector-btn-${cs.id}`}
              >
                {cs.title} // {cs.metrics.revenueIncrease.split(" ")[0]}
              </button>
            );
          })}
        </div>

        {/* Deployed CS Detailed Workspace */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Case Study Body Text */}
          <div className="lg:col-span-7 space-y-12">
            {/* 1. Project Overview & Meta Cards */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-snug uppercase">{activeCS.title}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl glass text-left">
                  <span className="text-[10px] text-zinc-500 font-mono uppercase block mb-1">{lang === "ar" ? "عميل التعاون استراتيجياً:" : "CLIENT COOPERATION:"}</span>
                  <span className="text-sm font-bold text-white font-sans">{activeCS.client}</span>
                </div>
                <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl glass text-left">
                  <span className="text-[10px] text-zinc-500 font-mono uppercase block mb-1">{lang === "ar" ? "البنية التقنية النشطة:" : "ACTIVE PLATFORM ARCHITECTURE:"}</span>
                  <span className="text-sm font-bold text-white font-sans">{activeCS.platform}</span>
                </div>
              </div>
            </div>

            {/* Interactive Metrics Dashboard */}
            <div className="p-6 bg-accent/5 border border-accent/20 rounded-3xl space-y-4 glass">
              <span className="text-xs font-mono tracking-widest text-accent font-extrabold uppercase block font-bold">{lang === "ar" ? "مؤشرات نمو الأداء المدققة والمعتمدة" : "VERIFIED TRANSACTION SPECS & LIFTS"}</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="border border-zinc-800 p-3 rounded bg-black/40 text-left">
                  <span className="text-[9px] text-zinc-500 font-mono uppercase block leading-none mb-1">{lang === "ar" ? "مضاعفة المبيعات" : "Sales Lift"}</span>
                  <span className="text-xs font-extrabold text-accent font-mono">{activeCS.metrics.revenueIncrease}</span>
                </div>
                <div className="border border-zinc-800 p-3 rounded bg-black/40 text-left">
                  <span className="text-[9px] text-zinc-500 font-mono uppercase block leading-none mb-1">{lang === "ar" ? "معدل التحويل" : "Conversion Rate"}</span>
                  <span className="text-xs font-extrabold text-white font-mono">{activeCS.metrics.conversionRate}</span>
                </div>
                {activeCS.metrics.averageOrderValue && (
                  <div className="border border-zinc-800 p-3 rounded bg-black/40 text-left">
                    <span className="text-[9px] text-zinc-500 font-mono uppercase block leading-none mb-1">{lang === "ar" ? "معدل قيمة السلة" : "AOV Target"}</span>
                    <span className="text-xs font-extrabold text-accent font-mono">{activeCS.metrics.averageOrderValue}</span>
                  </div>
                )}
                {activeCS.metrics.loadTimeReduction && (
                  <div className="border border-zinc-800 p-3 rounded bg-black/40 text-left">
                    <span className="text-[9px] text-zinc-500 font-mono uppercase block leading-none mb-1">{lang === "ar" ? "سرعة التحميل" : "Speed Index"}</span>
                    <span className="text-xs font-extrabold text-white font-mono">{activeCS.metrics.loadTimeReduction}</span>
                  </div>
                )}
              </div>
            </div>

            {/* 2. Challenge Component */}
            <div className="space-y-4 border-t border-zinc-900 pt-8 text-left">
              <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold block">01 // {lang === "ar" ? "التحدي الهيكلي والفرصة" : "THE CHALLENGE"}</span>
              <p className="text-base text-zinc-400 leading-relaxed font-normal">{activeCS.challenge}</p>
            </div>

            {/* 3. Research Component */}
            <div className="space-y-4 border-t border-zinc-900 pt-8 text-left">
              <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold block">02 // {lang === "ar" ? "التنقيب والبحوث الكمية" : "QUANTITATIVE RESEARCH AUDIT"}</span>
              <p className="text-base text-zinc-400 leading-relaxed font-normal">{activeCS.research}</p>
            </div>

            {/* 4. Design Process Component */}
            <div className="space-y-4 border-t border-zinc-900 pt-8 text-left">
              <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold block">03 // {lang === "ar" ? "علاقات وخطوات التصميم النخبوية" : "HIGH-END VISUAL DESIGN PROCESS"}</span>
              <p className="text-base text-zinc-400 leading-relaxed font-normal">{activeCS.designProcess}</p>
            </div>

            {/* 5. Brand Identity Component */}
            <div className="space-y-4 border-t border-zinc-900 pt-8 text-left">
              <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold block">04 // {lang === "ar" ? "ضبط وتدوين أصول الهوية الرقمية" : "REFRESHED BRAND MANUAL IDENTITY"}</span>
              <p className="text-base text-zinc-400 leading-relaxed font-normal">{activeCS.brandIdentity}</p>
            </div>

            {/* 6. Store Development Component */}
            <div className="space-y-4 border-t border-zinc-900 pt-8 text-left">
              <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold block">05 // {lang === "ar" ? "تطوير الكود النظيف الخالي من العلات" : "ZERO-BLOAT DEVELOPMENT HYPERCARE"}</span>
              <p className="text-base text-zinc-400 leading-relaxed font-normal">{activeCS.storeDevelopment}</p>
            </div>

            {/* 7. Results Component */}
            <div className="space-y-4 border-t border-zinc-900 pt-8 text-left">
              <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold block">06 // {lang === "ar" ? "مخرجات المبيعات وتأطير الهوية" : "REVENUE & BRAND IDENTITY OUTCOMES"}</span>
              <p className="text-base text-accent leading-relaxed font-normal">{activeCS.results}</p>
            </div>
          </div>

          {/* Sidebar Technical Blueprint Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold block">{lang === "ar" ? "مخطط معمارية البناء التقنية" : "TECHNICAL LAYOUT BLUEPRINT"}</span>
            {renderCSVisualBlueprint(activeCS.id)}

            {/* Client feedback card */}
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-3xl space-y-4 relative glass accent-glow text-left">
              <span className="text-[10px] font-mono text-accent uppercase block font-bold">{lang === "ar" ? "بيان تفويض وإقرار رياد الأعمال" : "FOUNDER ENDORSEMENT STATEMENT"}</span>
              <p className="text-xs text-zinc-400 leading-relaxed italic font-normal">
                "{lang === "ar" ? "فينتاريا ستوديو أداة استثمارية مصقولة وفعالة للغاية. لقد استعدنا تكاليف التطوير البرمجي في غضون الشهر الأول بعد التدشين فقط." : "Ventaria is a highly-tuned luxury asset. We secured our investment cost back in the first month post-deploy alone."}"
              </p>
              <div className={`flex items-center space-x-3 border-t border-zinc-800 pt-4 ${spaceXRev}`}>
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-[10px] font-bold text-accent font-mono select-none">CEO</div>
                <div>
                  <h4 className="text-xs font-bold font-sans text-white uppercase">{lang === "ar" ? "شريك نجاح موثق" : "Verified Executive Partner"}</h4>
                  <p className="text-[9px] text-zinc-500 font-mono uppercase">{lang === "ar" ? "رائد توزيع منتجات الرفاهية بالخليج" : "GCC luxury distribution channel leader"}</p>
                </div>
              </div>
            </div>

            {/* Action Card */}
            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 text-center space-y-4 glass">
              <h4 className="text-sm font-bold uppercase tracking-widest font-mono text-white">{lang === "ar" ? "احسب مخرجات متجرك المحتملة" : "CALCULATE YOUR STORE POTENTIAL"}</h4>
              <p className="text-xs text-zinc-400 max-w-xs mx-auto">{lang === "ar" ? "دع كبار مهندسينا يحللون سرعة متجرك الحالي على شوبيفاي أو سلة أو زد باستخدام تقارير لايت هاوس الدقيقة." : "Let our lead developers evaluate your current Shopify, Salla, or Zid loading speed with an automated diagnostic tool."}</p>
              <button
                onClick={() => {
                  setCurrentPage("contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full h-12 rounded-lg bg-accent text-black font-extrabold text-xs uppercase tracking-wider hover:scale-103 transition-transform cursor-pointer"
                id="cs-cta-diag-btn"
              >
                {lang === "ar" ? "تأمين جلسة تدقيق السرعة والتحميل" : "Secure Speed Diagnostic Audit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
