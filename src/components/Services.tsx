import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Layers, Laptop, Landmark, Globe, Hammer, Award, HelpCircle as HelpIcon, ArrowRight } from "lucide-react";
import { SERVICES_DATA_EN, SERVICES_DATA_AR, UI_TRANSLATIONS } from "../translations";

interface ServicesProps {
  selectedServiceId: string | null;
  setSelectedServiceId: (id: string | null) => void;
  setCurrentPage: (page: string) => void;
  lang: "en" | "ar";
}

export default function Services({ selectedServiceId, setSelectedServiceId, setCurrentPage, lang }: ServicesProps) {
  const servicesData = lang === "ar" ? SERVICES_DATA_AR : SERVICES_DATA_EN;

  // Use local state initialized from prop, fallback to first service
  const [activeServiceId, setActiveServiceId] = useState<string>("shopify-development");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Synchronize with external selectedServiceId prop
  useEffect(() => {
    if (selectedServiceId) {
      setActiveServiceId(selectedServiceId);
    }
  }, [selectedServiceId]);

  const activeService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  const handleTabChange = (id: string) => {
    setActiveServiceId(id);
    setSelectedServiceId(id);
    setOpenFaqIndex(null);
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "shopify-development":
        return <Laptop className="w-4 h-4 shrink-0" />;
      case "salla-development":
        return <Landmark className="w-4 h-4 shrink-0" />;
      case "zid-development":
        return <Globe className="w-4 h-4 shrink-0" />;
      case "branding":
        return <Award className="w-4 h-4 shrink-0" />;
      case "packaging-design":
        return <Layers className="w-4 h-4 shrink-0" />;
      case "cro":
        return <Award className="w-4 h-4 shrink-0" />;
      case "ui-ux-design":
        return <Hammer className="w-4 h-4 shrink-0" />;
      default:
        return <Laptop className="w-4 h-4 shrink-0" />;
    }
  };

  const textAlignment = lang === "ar" ? "text-right" : "text-left";
  const flexDir = lang === "ar" ? "flex-row-reverse" : "flex-row";
  const spaceXRev = lang === "ar" ? "space-x-reverse" : "";

  return (
    <div className={`bg-black text-white min-h-screen pt-28 pb-20 px-6 lg:px-12 ${textAlignment}`} id="services-view-root">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block">
              {lang === "ar" ? "مصفوفة هندسة المبيعات للشركات" : "PREMIUM E-COMMERCE CONSOLE"}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase text-white leading-tight">
            {lang === "ar" ? (
              <>
                قـدرات تـم تـطـويـرهـا <br />
                <span className="text-accent">لتحقيق التوسع الأقصى</span>
              </>
            ) : (
              <>
                OUR ELITE <br />
                <span className="text-accent">CAPABILITIES.</span>
              </>
            )}
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
            {UI_TRANSLATIONS[lang].capabilitiesSub}
          </p>
        </div>

        {/* Tab Navigation System (Bento Console Style) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 p-1.5 border border-zinc-800 bg-zinc-900/60 rounded-2xl lg:space-y-1 scrollbar-none shrink-0 scroll-smooth">
            {servicesData.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => handleTabChange(service.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-xs font-mono font-bold uppercase tracking-widest cursor-pointer whitespace-nowrap transition-all duration-300 w-full hover:bg-zinc-800 ${spaceXRev} ${
                    isActive ? "bg-accent/10 border border-accent/20 text-accent" : "text-zinc-400 border border-transparent"
                  }`}
                  id={`service-tab-btn-${service.id}`}
                >
                  {getServiceIcon(service.id)}
                  <span>{service.title.replace(" Development", "").replace(" & Visual Identity", "").replace(" & Interactive Design", "").substring(0, 20)}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Terminal Display */}
          <div className="lg:col-span-9 bg-zinc-900/60 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl relative glass accent-glow">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/3 rounded-full blur-3xl ambient-glow pointer-events-none" />
            
            {/* Terminal Window Header Bar */}
            <div className={`px-6 py-4 bg-zinc-950 border-b border-zinc-800 flex justify-between items-center text-xs font-mono text-zinc-500 font-bold tracking-widest uppercase ${flexDir}`}>
              <span className={`text-accent flex items-center space-x-1 ${spaceXRev}`}>
                <span className="w-2 h-2 bg-accent rounded-full inline-block animate-pulse align-middle" />
                <span>{UI_TRANSLATIONS[lang].activeEngine} // {activeService.id.toUpperCase()}</span>
              </span>
              <span>Lighthouse Verified // 100% Core</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 lg:p-12 space-y-10"
              >
                {/* 1. Hero Summary */}
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white uppercase">{activeService.title}</h2>
                  <p className="text-zinc-400 text-base leading-relaxed font-normal">{activeService.fullDescription}</p>
                </div>

                {/* 2. Benefits Checklist */}
                <div className="space-y-4 border-t border-zinc-800 pt-8">
                  <h3 className="text-sm font-mono tracking-widest text-accent uppercase font-bold">{UI_TRANSLATIONS[lang].corePerfBenefits}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {activeService.benefits.map((benefit, idx) => (
                      <div key={idx} className={`flex items-start space-x-3 p-4 bg-zinc-950 border border-zinc-800 rounded-xl ${spaceXRev}`}>
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs text-white leading-relaxed font-sans font-bold">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Operational Process */}
                <div className="space-y-4 border-t border-zinc-800 pt-8">
                  <h3 className="text-sm font-mono tracking-widest text-accent uppercase font-bold">{UI_TRANSLATIONS[lang].operationalProcessSteps}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {activeService.process.map((p) => (
                      <div key={p.step} className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 relative flex flex-col justify-between space-y-3">
                        <span className="text-accent text-[10px] font-mono tracking-widest font-bold">{p.step} // STAGE</span>
                        <div>
                          <h4 className="text-xs font-extrabold text-white mb-1 uppercase tracking-wider">{p.title}</h4>
                          <p className="text-[11px] text-zinc-400 font-normal leading-snug">{p.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Concrete Deliverables Checklist */}
                <div className="space-y-4 border-t border-zinc-800 pt-8">
                  <h3 className="text-sm font-mono tracking-widest text-accent uppercase font-bold">{UI_TRANSLATIONS[lang].guaranteedDeliverables}</h3>
                  <div className="space-y-3 max-w-2xl bg-zinc-950 p-5 border border-zinc-800 rounded-2xl">
                    {activeService.deliverables.map((item, idx) => (
                      <div key={idx} className={`flex items-center space-x-3 ${spaceXRev}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span className="text-xs font-mono text-zinc-300 font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Custom FAQ Accordion */}
                {activeService.faq && activeService.faq.length > 0 && (
                  <div className="space-y-4 border-t border-zinc-800 pt-8">
                    <h3 className={`text-sm font-mono tracking-widest text-accent uppercase font-bold flex items-center ${spaceXRev}`}>
                      <HelpIcon className="w-4 h-4 text-accent" />
                      <span className="mx-1.5">{UI_TRANSLATIONS[lang].faqAccordionHeader}</span>
                    </h3>
                    <div className="space-y-3">
                      {activeService.faq.map((faq, idx) => {
                        const isOpen = openFaqIndex === idx;
                        return (
                          <div key={idx} className="border border-zinc-800 rounded-xl bg-zinc-950 overflow-hidden">
                            <button
                              type="button"
                              onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                              className={`w-full p-4 flex justify-between items-center font-bold text-xs font-mono uppercase tracking-wider focus:outline-none cursor-pointer hover:bg-zinc-900 transition-colors ${flexDir}`}
                              id={`services-faq-toggle-${idx}`}
                            >
                              <span>{faq.question}</span>
                              <span className="text-accent ml-2 shrink-0">{isOpen ? "−" : "+"}</span>
                            </button>
                            {isOpen && (
                              <div className="p-4 bg-zinc-900/60 text-xs font-sans text-zinc-400 leading-relaxed border-t border-zinc-800">
                                {faq.answer}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 6. In-Line Direct Call To Action */}
                <div className={`border-t border-zinc-800 pt-8 flex justify-between items-center gap-6 ${flexDir === "flex-row-reverse" ? "flex-col sm:flex-row-reverse" : "flex-col sm:flex-row"}`}>
                  <div className="space-y-2 text-center sm:text-left">
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest font-mono">// {lang === "ar" ? "هل أنت مستعد لقيادة هذا المسار؟" : "READY TO ENGAGE THIS TRACK?"}</h4>
                    <p className="text-xs text-zinc-400 font-normal">
                      {lang === "ar" ? "متوسط الموعد المقدر لإنجاز مسودة الكود والبدء هو 7 أيام تحت عقود أمان معتمدة." : "Average startup latency is 7 days under legal escrow guarantees."}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentPage("contact");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex items-center justify-center space-x-2 px-8 h-12 bg-accent text-black font-extrabold text-xs uppercase tracking-wider rounded-lg hover:scale-103 transition-transform shadow-lg cursor-pointer"
                    id="service-cta-btn"
                  >
                    <span>{UI_TRANSLATIONS[lang].startProject}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-black" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
