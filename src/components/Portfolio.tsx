import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, TrendingUp, Filter, Compass } from "lucide-react";
import { PORTFOLIO_DATA_EN, PORTFOLIO_DATA_AR, UI_TRANSLATIONS } from "../translations";

interface PortfolioProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudyId: (id: string | null) => void;
  lang: "en" | "ar";
}

export default function Portfolio({ setCurrentPage, setSelectedCaseStudyId, lang }: PortfolioProps) {
  const [activeFilterIndex, setActiveFilterIndex] = useState<number>(0);

  const portfolioItems = lang === "ar" ? PORTFOLIO_DATA_AR : PORTFOLIO_DATA_EN;

  const categoriesEn = ["All", "Fashion", "Cosmetics", "Restaurants", "Luxury", "Electronics"];
  const categoriesAr = ["الكل", "أزياء", "مستحضرات تجميل", "مطاعم", "فاخر", "إلكترونيات"];
  const categories = lang === "ar" ? categoriesAr : categoriesEn;

  const filteredItems = activeFilterIndex === 0
    ? portfolioItems
    : portfolioItems.filter((item) => {
        // Match on catalog identifier or original categorical label
        const targetCategoryEn = categoriesEn[activeFilterIndex];
        const targetCategoryAr = categoriesAr[activeFilterIndex];
        // Normalize item check
        return (
          item.category === targetCategoryEn ||
          item.category === targetCategoryAr ||
          item.id.includes(targetCategoryEn.toLowerCase())
        );
      });

  const handleCaseStudyRedirect = (caseId: string) => {
    setSelectedCaseStudyId(caseId);
    setCurrentPage("case-studies");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderProjectMockupVisual = (itemId: string) => {
    const isAr = lang === "ar";

    if (itemId.includes("aether") || itemId.includes("fashion")) {
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black p-6 flex flex-col justify-between text-left" id="mockup-fashion">
          <div className="flex justify-between items-center text-[10px] font-mono text-accent">
            <span>AETHER // TECHNICAL COUTURE</span>
            <span>100% MOBILE SPEED</span>
          </div>
          <div className="space-y-3 max-w-xs py-4 text-left">
            <span className="text-[10px] font-mono tracking-widest text-[#b5b5b5] uppercase">FABRIC TECH INC.</span>
            <h4 className="text-xl font-extrabold font-sans leading-tight text-white">3-Layer Haptic Shell Jacket</h4>
            <div className="flex space-x-2">
              <span className="w-4 h-4 rounded-full bg-accent inline-block border border-black" />
              <span className="w-4 h-4 rounded-full bg-zinc-700 inline-block border border-black" />
              <span className="w-4 h-4 rounded-full bg-white/20 inline-block" />
            </div>
          </div>
          <div className="flex justify-between items-center text-xs font-mono border-t border-white/5 pt-3">
            <span>AOV: $285</span>
            <span className="text-accent underline font-bold">ADD TO CART</span>
          </div>
        </div>
      );
    }

    if (itemId.includes("luna") || itemId.includes("cosmetics")) {
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-neutral-950 p-6 flex flex-col justify-between text-center" id="mockup-cosmetics">
          <div className="flex justify-between items-center text-[10px] font-mono text-accent">
            <span>LUNA BEAUTY // ACTIVE HYDRA</span>
            <span>RTL CONVERSION FOCUS</span>
          </div>
          <div className="space-y-2 text-center py-4">
            <div className="w-12 h-12 rounded-full border border-dashed border-accent mx-auto flex items-center justify-center">
              <Compass className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-lg font-serif italic text-white/95">Gazing Organic Nectar</h4>
            <p className="text-[9px] text-accent font-mono uppercase tracking-[0.2em]">Saudi Riyadh Certified</p>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <div className="w-16 h-1 bg-white/10 rounded animate-pulse" />
          </div>
        </div>
      );
    }

    if (itemId.includes("bistrot") || itemId.includes("restaurant")) {
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#120f0f] to-zinc-950 p-6 flex flex-col justify-between text-center" id="mockup-restaurant">
          <div className="flex justify-between items-center text-[10px] font-mono text-amber-100/60">
            <span>LE BISTROT // PARIS</span>
            <span>MICHELIN GUIDE</span>
          </div>
          <div className="space-y-1 py-4 text-center">
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">EST. 1924</span>
            <h4 className="text-2xl font-serif text-white/90 font-light italic">L'Art Gout</h4>
            <p className="text-[10px] text-[#b5b5b5]">Direct Reservation Module Engaged</p>
          </div>
          <div className="h-6 rounded bg-accent/10 border border-accent/20 flex items-center justify-center text-[10px] text-accent font-mono font-bold uppercase">
            98% RESERVATION SUCCESS LIFT
          </div>
        </div>
      );
    }

    if (itemId.includes("elysian") || itemId.includes("luxury")) {
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-[#101014] to-black p-6 flex flex-col justify-between border-b-2 border-accent/20 text-left" id="mockup-luxury">
          <div className="flex justify-between items-center text-[10px] font-mono text-accent">
            <span>ELYSIAN TIMEPIECES // HOROLOGY</span>
            <span>HYDROGEN SETUP CORE</span>
          </div>
          <div className="py-4 space-y-2 text-left">
            <span className="text-[9px] text-[#b5b5b5] tracking-[0.3em] font-mono uppercase">CALIBRE 394</span>
            <h4 className="text-xl font-bold font-sans tracking-tight text-white">The Imperial Tourbillon</h4>
            <div className="w-full bg-white/5 h-1 rounded overflow-hidden">
              <div className="w-3/4 bg-accent h-full animate-pulse" />
            </div>
          </div>
          <div className="flex justify-between text-xs font-mono leading-none">
            <span className="text-white">AOV: $5,400</span>
            <span className="text-accent underline font-bold">VIEW GALLERY</span>
          </div>
        </div>
      );
    }

    if (itemId.includes("voltaic") || itemId.includes("electronics")) {
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-6 flex flex-col justify-between text-center" id="mockup-electronics">
          <div className="flex justify-between items-center text-[10px] font-mono text-accent">
            <span>VOLTAIC LABS // ELECTROSTATIC</span>
            <span>ENTERPRISE DIGITAL FLOW</span>
          </div>
          <div className="text-center py-4 space-y-2">
            <div className="inline-flex rounded-full px-2 py-0.5 bg-black text-accent text-[9px] font-mono border border-accent/20">LOW DISPERSION COILS</div>
            <h4 className="text-lg font-extrabold font-sans text-white">Voltaic Sound Lab Pro</h4>
          </div>
          <div className="grid grid-cols-2 gap-2 text-center text-[9px] font-mono select-none">
            <div className="p-1 bg-white/5 rounded">0.02% THD</div>
            <div className="p-1 bg-accent/10 text-accent rounded font-bold">124dB SPL</div>
          </div>
        </div>
      );
    }

    return (
      <div className="absolute inset-0 bg-zinc-900 p-6 flex flex-col justify-center items-center text-center">
        <h4 className="text-lg font-bold text-white">{UI_TRANSLATIONS[lang].brandName} Design Renders</h4>
      </div>
    );
  };

  const textAlignment = lang === "ar" ? "text-right" : "text-left";
  const flexDir = lang === "ar" ? "flex-row-reverse" : "flex-row";
  const spaceXRev = lang === "ar" ? "space-x-reverse" : "";
  const layoutCol = lang === "ar" ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row";

  return (
    <div className={`bg-black text-white min-h-screen pt-28 pb-20 px-6 lg:px-12 ${textAlignment}`} id="portfolio-view-root">
      {/* Background shadow glows */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block font-mono tracking-widest">
              {UI_TRANSLATIONS[lang].curatedShowcase}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase text-white leading-tight">
            {UI_TRANSLATIONS[lang].proofInWork}
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
            {UI_TRANSLATIONS[lang].portfolioSub}
          </p>
        </div>

        {/* Filter Toolbar Section */}
        <div className={`flex flex-col md:flex-row gap-4 items-center justify-between border-y border-zinc-900 py-6`}>
          <div className={`flex items-center space-x-2 text-xs font-mono text-zinc-500 font-bold tracking-widest ${spaceXRev}`}>
            <Filter className="w-4 h-4 text-accent" />
            <span className="uppercase tracking-widest font-bold font-mono">{lang === "ar" ? "اختر القطاع أو الصناعة:" : "CHOOSE SEGMENT MATRIX:"}</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((filter, index) => (
              <button
                key={filter}
                onClick={() => setActiveFilterIndex(index)}
                className={`px-4 py-2 rounded text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  activeFilterIndex === index
                    ? "bg-accent text-black font-extrabold shadow-[0_3px_15px_rgba(94,225,181,0.2)]"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
                id={`portfolio-filter-btn-${index}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-zinc-900/60 rounded-3xl overflow-hidden border border-zinc-800 hover:border-accent/30 transition-all duration-300 flex flex-col justify-between glass accent-glow"
              >
                {/* Visual Viewport Mock Frame */}
                <div className="relative h-60 w-full bg-black border-b border-zinc-800 overflow-hidden">
                  {renderProjectMockupVisual(item.id)}
                  
                  {/* Subtle layout screen grid lines for elite dev feel */}
                  <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
                </div>

                {/* Info Text */}
                <div className="p-8 space-y-4">
                  <div className={`flex justify-between items-start gap-4 ${flexDir}`}>
                    <div className="text-left">
                      <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold block mb-1">{item.category} MODULE</span>
                      <h3 className={`text-lg font-bold text-white group-hover:text-accent transition-colors duration-300 uppercase tracking-tight ${lang === "ar" ? "text-right" : "text-left"}`}>{item.title}</h3>
                    </div>
                    {/* Interactive conversion badge */}
                    <div className={`flex items-center space-x-1 text-xs text-accent font-mono bg-accent/5 px-2.5 py-1 rounded border border-accent/20 shrink-0 ${spaceXRev}`}>
                      <TrendingUp className="w-3 h-3 text-accent" />
                      <span>{item.metrics}</span>
                    </div>
                  </div>

                  <p className={`text-xs text-zinc-400 leading-normal font-normal ${lang === "ar" ? "text-right" : "text-left"}`}>{item.subtitle}</p>

                  <div className={`flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800 ${flexDir}`}>
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-[9px] font-mono text-zinc-500 py-0.5 px-2 bg-black rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={`pt-4 flex justify-between items-center ${flexDir}`}>
                    {item.caseStudyId ? (
                      <button
                        onClick={() => handleCaseStudyRedirect(item.caseStudyId!)}
                        className={`text-xs font-mono text-accent hover:underline flex items-center space-x-1 transition-all duration-300 cursor-pointer font-bold tracking-widest ${spaceXRev}`}
                        id={`portfolio-case-study-btn-${item.id}`}
                      >
                        <span>{UI_TRANSLATIONS[lang].viewCaseAction}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <span className="text-[10px] font-mono text-zinc-500 uppercase select-none font-bold">{lang === "ar" ? "البنية مغلقة باتفاقية عدم إفشاء" : "LOCKED BY NDA"}</span>
                    )}

                    <span className="text-[10px] font-mono text-zinc-500 uppercase">{lang === "ar" ? "نشط حالياً" : "Active live"}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA block */}
        <div className={`relative rounded-3xl border border-zinc-800 bg-zinc-900/60 shadow-xl p-8 flex justify-between items-center gap-6 overflow-hidden glass accent-glow ${layoutCol}`}>
          <div className="absolute top-0 left-0 w-[200px] h-full bg-accent/2 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-2 flex-grow text-left">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block font-bold">{lang === "ar" ? "هل لديك متطلبات خاصة؟" : "HAVE AN AMBITIOUS VISION?"}</span>
            <h4 className="text-xl font-bold font-sans text-white uppercase tracking-tight leading-snug">{lang === "ar" ? "مهندسونا الأساسيون مستعدون وحاضرون دائماً" : "OUR BESPOKE ARCHITECTS ARE FULLY ENGAGED"}</h4>
            <p className="text-xs text-zinc-400">{lang === "ar" ? "تحدثوا مباشرة مع القيادة وشريك تصميم مخصص لمناقشة أهداف النمو وتامين التنزيل." : "Speak directly with a lead visual director or partner to map custom layouts."}</p>
          </div>
          <button
            onClick={() => {
              setCurrentPage("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center justify-center space-x-2 px-8 h-14 rounded-lg bg-accent text-black text-xs font-bold uppercase tracking-wider hover:scale-103 transition-transform cursor-pointer shrink-0 animate-pulse-slow font-sans"
            id="portfolio-bottom-cta"
          >
            <span>{lang === "ar" ? "بدا تفعيل المشروع مجاناً" : "Secure Design Session"}</span>
            <ArrowUpRight className="w-4 h-4 text-black cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
}
