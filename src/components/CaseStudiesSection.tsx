import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Lightbulb, TrendingUp, Cpu, Sparkles, Receipt, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language, CaseStudy } from '../types';
import { caseStudies } from '../data/portfolio';

interface CaseStudiesSectionProps {
  lang: Language;
  t: any;
}

export default function CaseStudiesSection({ lang, t }: CaseStudiesSectionProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const activeCS: CaseStudy = caseStudies[activeIdx] || caseStudies[0];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="case-studies" className="relative py-28 overflow-hidden bg-gradient-to-b from-[#030712] via-[#07111D] to-[#030712] border-t border-gray-900/50">
      
      {/* Light ray from top left */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#63D6B5]/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#89FFE1]/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Titles */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#63D6B5]/10 border border-[#63D6B5]/30 text-[#89FFE1] text-xs font-mono uppercase tracking-wide mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#63D6B5]" />
              {lang === 'ar' ? 'أثر ونمو تقني ملموس' : 'Empirical Success Metrics'}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              {lang === 'ar' ? 'تفاصيل دراسات الحالة الهندسية' : 'Scientific Case Analyses'}
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl text-sm md:text-base">
              {lang === 'ar' 
                ? 'استطلع تفاصيل المشاكل الحقيقية التي تفككنا من حلها، والآليات التقنية والأدلة القياسية المحرزة.' 
                : 'Deep-dive audits into complex enterprise bottlenecks resolved with rigid software engineering.'}
            </p>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-xl border border-gray-800 bg-gray-950 text-gray-400 hover:text-white hover:border-gray-700 transition"
              aria-label="Previous Case Study"
            >
              <ArrowRight className="w-5 h-5 scale-x-[-1]" />
            </button>
            <span className="font-mono text-xs text-gray-500">
              {String(activeIdx + 1).padStart(2, '0')} / {String(caseStudies.length).padStart(2, '0')}
            </span>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-xl border border-gray-800 bg-gray-950 text-gray-400 hover:text-white hover:border-gray-700 transition"
              aria-label="Next Case Study"
            >
              <ArrowLeft className="w-5 h-5 scale-x-[-1]" />
            </button>
          </div>
        </div>

        {/* Dynamic Case Studies Viewer - Custom Animated Panels */}
        <div className="bg-[#07111D]/80 border border-gray-800/80 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCS.id}
              initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: lang === 'ar' ? -30 : 30 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              
              {/* Image Frame & Metrics Row */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-800 shadow-xl group bg-gray-950">
                  <img 
                    src={activeCS.image} 
                    alt={lang === 'ar' ? activeCS.clientAr : activeCS.client}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 right-4 bg-gray-950/90 border border-gray-800 px-3.5 py-1.5 rounded-lg text-xs text-white uppercase tracking-wider font-mono">
                    {lang === 'ar' ? activeCS.industryAr : activeCS.industry}
                  </div>
                </div>

                {/* 3 Metrics blocks (Key highlights) */}
                <div 
                  style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
                  className="grid grid-cols-3 gap-3"
                >
                  {activeCS.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 bg-gray-950 border border-gray-900 rounded-xl text-center">
                      <div className="text-xl md:text-2xl font-mono font-black text-[#89FFE1]">{m.value}</div>
                      <div className="text-[9px] text-gray-500 mt-1 uppercase font-mono tracking-wider">
                        {lang === 'ar' ? m.labelAr : m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Detailed Specifications */}
              <div 
                style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
                className="lg:col-span-7 space-y-6 md:space-y-8 text-right"
              >
                <div>
                  <span className="text-xs uppercase font-mono font-bold text-[#63D6B5] tracking-widest">{lang === 'ar' ? 'شريك النجاح' : 'Client Profile'}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">
                    {lang === 'ar' ? activeCS.clientAr : activeCS.client}
                  </h3>
                </div>

                {/* Challenge & Solution Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-gray-800/80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-red-400" />
                      <span>{lang === 'ar' ? 'عقبة وتحدي العميل' : 'Operation Challenge'}</span>
                    </h4>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed text-justify">
                      {lang === 'ar' ? activeCS.challengeAr : activeCS.challenge}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                      <Lightbulb className="w-4 h-4 text-[#63D6B5]" />
                      <span>{lang === 'ar' ? 'حل فينتاريا المبتكر' : 'Ventaria Solution'}</span>
                    </h4>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed text-justify">
                      {lang === 'ar' ? activeCS.solutionAr : activeCS.solution}
                    </p>
                  </div>
                </div>

                {/* Measurable Results bullet list */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-mono font-bold text-gray-500 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#89FFE1]" />
                    <span>{lang === 'ar' ? 'النتائج المحققة قياساً بالأرقام:' : 'Empirical Outcomes Achieved:'}</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs md:text-sm text-gray-300">
                    {(lang === 'ar' ? activeCS.resultsAr : activeCS.results).map((res, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#63D6B5] mt-1.5 block shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Grid */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-mono text-gray-500">{lang === 'ar' ? 'التقنيات النشطة في المعمارية:' : 'Architectual Technologies Engaged:'}</h4>
                  <div className="flex flex-wrap gap-2 justify-start">
                    {activeCS.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs font-mono text-white px-3 py-1 bg-gray-950 rounded-lg border border-gray-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* 10 Dots selector for case studies index indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {caseStudies.map((cs, i) => (
            <button
              key={cs.id}
              onClick={() => setActiveIdx(i)}
              className={`w-2 h-2.5 rounded-full transition-all duration-300 ${
                activeIdx === i ? 'bg-[#63D6B5] w-6' : 'bg-gray-800 hover:bg-gray-700'
              }`}
              title={`View Case Study ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
