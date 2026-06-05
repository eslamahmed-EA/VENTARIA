import { useState } from "react";
import { Check, X, Shield, Clock, ArrowRight } from "lucide-react";
import { PRICING_PLANS_EN, PRICING_PLANS_AR, UI_TRANSLATIONS } from "../translations";

interface PricingProps {
  setCurrentPage: (page: string) => void;
  lang: "en" | "ar";
}

export default function Pricing({ setCurrentPage, lang }: PricingProps) {
  const [activePlanId, setActivePlanId] = useState<string>("growth");

  const pricingPlans = lang === "ar" ? PRICING_PLANS_AR : PRICING_PLANS_EN;

  const textAlignment = lang === "ar" ? "text-right" : "text-left";
  const flexDir = lang === "ar" ? "flex-row-reverse" : "flex-row";
  const spaceXRev = lang === "ar" ? "space-x-reverse" : "";
  const layoutCol = lang === "ar" ? "flex-col sm:flex-row-reverse" : "flex-col sm:flex-row";

  return (
    <div className={`bg-black text-white min-h-screen pt-28 pb-20 px-6 lg:px-12 ${textAlignment}`} id="pricing-view-root">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block">
              {UI_TRANSLATIONS[lang].investmentMatrix}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase text-white leading-tight">
            {UI_TRANSLATIONS[lang].chooseScale}
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
            {UI_TRANSLATIONS[lang].pricingSub}
          </p>
        </div>

        {/* 3-Tier Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan) => {
            const isRec = plan.recommendation;
            return (
              <div
                key={plan.id}
                onClick={() => setActivePlanId(plan.id)}
                className={`group cursor-pointer rounded-3xl p-8 transition-all duration-300 relative border flex flex-col justify-between min-h-[640px] glass accent-glow ${
                  isRec
                    ? "bg-accent/[0.03] border-accent/40 shadow-[0_10px_30px_rgba(94,225,181,0.08)]"
                    : "bg-zinc-900/60 border-zinc-800"
                } ${activePlanId === plan.id ? "ring-2 ring-accent" : ""}`}
                id={`plan-card-${plan.id}`}
              >
                {/* Highlight ribbon */}
                {isRec && (
                  <div className="absolute top-4 right-4 bg-accent text-black text-[9px] font-mono font-extrabold tracking-widest uppercase px-2.5 py-1 rounded">
                    {lang === "ar" ? "النخبة والموصى به" : "RECOMMENDED FOR SCALE"}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Slogan */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-accent font-bold uppercase tracking-widest">
                      {plan.id.toUpperCase()} MODULE
                    </span>
                    <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight">{plan.name}</h3>
                    <p className="text-xs text-zinc-400 leading-normal font-normal">{plan.tagline}</p>
                  </div>

                  {/* Pricing metrics */}
                  <div className="py-4 border-y border-zinc-800">
                    <div className={`flex items-baseline space-x-1.5 ${spaceXRev}`}>
                      <span className="text-4xl lg:text-5xl font-extrabold text-white font-mono">{plan.price}</span>
                      <span className="text-xs text-zinc-400 uppercase tracking-widest font-mono font-sans mt-1">/{lang === "ar" ? "سعر مسطح ثابت" : " PROJECT FLAT"}</span>
                    </div>
                    <div className={`flex items-center space-x-2 mt-2 text-xs font-mono text-zinc-400 ${spaceXRev}`}>
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      <span>{UI_TRANSLATIONS[lang].timelineLabel} {plan.timeline}</span>
                    </div>
                  </div>

                  {/* Guaranteed deliverables list */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold block">
                      {UI_TRANSLATIONS[lang].whatIsSecured}
                    </span>
                    <div className="space-y-1.5 text-xs text-white/90">
                      {plan.deliverables.slice(0, 3).map((item, idx) => (
                        <div key={idx} className={`flex items-start space-x-2 ${spaceXRev}`}>
                          <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fully populated features checklists */}
                  <div className="space-y-3 border-t border-zinc-800 pt-4">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold block">
                      {lang === "ar" ? "مؤشر المميزات التفصيلية" : "FEATURES INDEX"}
                    </span>
                    <div className="space-y-2 text-xs">
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className={`flex items-center space-x-2 ${spaceXRev}`}>
                          {feat.included ? (
                            <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                          ) : (
                            <X className="w-3.5 h-3.5 text-zinc-800 shrink-0" />
                          )}
                          <span className={feat.included ? "text-zinc-300 font-normal" : "text-zinc-700 font-normal line-through"}>
                            {feat.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing CTA */}
                <button
                  type="button"
                  onClick={() => {
                    setCurrentPage("contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-full h-12 rounded-lg font-extrabold tracking-wider text-xs uppercase mt-8 transition-transform duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                    isRec ? "bg-accent text-black hover:scale-103" : "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800"
                  } ${spaceXRev}`}
                  id={`plan-cta-btn-${plan.id}`}
                >
                  <span>{lang === "ar" ? "اختيار وبدء المشروع" : "Select Strategy"}</span>
                  <ArrowRight className="w-4 h-4 cursor-pointer" />
                </button>
              </div>
            );
          })}
        </div>

        {/* High end legal warranty trust board */}
        <div className={`p-8 bg-zinc-900 border border-zinc-800 rounded-3xl flex items-center justify-between gap-6 overflow-hidden relative glass accent-glow ${layoutCol}`}>
          <div className="absolute top-0 left-0 w-[200px] h-full bg-accent/3 rounded-full blur-2xl pointer-events-none" />
          
          <div className={`flex items-start space-x-4 ${spaceXRev}`}>
            <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-accent shrink-0 mt-1">
              <Shield className="w-5 h-5 text-accent" />
            </div>
            <div className="space-y-1 text-left">
              <h4 className="text-sm font-bold font-sans uppercase tracking-[0.05em] text-white">
                {UI_TRANSLATIONS[lang].establishSecurity}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xl font-normal">
                {UI_TRANSLATIONS[lang].guaranteeSpeed} {UI_TRANSLATIONS[lang].refundPolicy}
              </p>
            </div>
          </div>
          
          <button
            onClick={() => {
              setCurrentPage("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center space-x-2 py-4 px-6 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 rounded-lg text-xs font-bold uppercase text-white transition-all cursor-pointer inline-flex whitespace-nowrap"
            id="pricing-warranty-btn"
          >
            <span>{lang === "ar" ? "قراءة بنود اتفاقية الخدمة" : "Read Framework SLA"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
