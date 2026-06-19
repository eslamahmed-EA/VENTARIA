import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, Building, ShoppingBag, Globe, GraduationCap, Home, Calendar, Users, 
  Cpu, Layers, UserCheck, Lock, Sparkles, Server, Link, Palette, 
  CheckCircle, ArrowRight, ArrowLeft 
} from 'lucide-react';
import { Language, ServiceDetail } from '../types';
import { serviceDetails } from '../data/services';

interface ServicesSectionProps {
  lang: Language;
  t: any;
  setCurrentNav: (nav: string) => void;
}

// Map string keys to Lucide Components
const iconMap: { [key: string]: any } = {
  Briefcase, Building, ShoppingBag, Globe, GraduationCap, Home, Calendar, Users,
  Cpu, Layers, UserCheck, Lock, Sparkles, Server, Link, Palette
};

export default function ServicesSection({ lang, t, setCurrentNav }: ServicesSectionProps) {
  const [activeKey, setActiveKey] = useState<string>('business');

  const selectedService = serviceDetails[activeKey] || serviceDetails.business;
  const ActiveIcon = iconMap[selectedService.icon] || Briefcase;

  // List of keys to select
  const serviceKeys = Object.keys(serviceDetails);

  return (
    <section id="services" className="relative py-28 overflow-hidden bg-[#030712]">
      
      {/* Visual background accents */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#46C6A5]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Titles */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#63D6B5]/10 border border-[#63D6B5]/30 text-[#89FFE1] text-xs font-mono uppercase tracking-wide mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#63D6B5]" />
            {lang === 'ar' ? 'حلول ومعايير معمارية متطورة' : 'Elite Engineering Offerings'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {t.servicesSectionTitle}
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            {t.servicesSectionSubtitle}
          </p>
        </div>

        {/* 16 Services Tabs/Bento Grid Orchestration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Side Select List: 16 items scrolls on mobile, sticky rail on desktop */}
          <div 
            style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
            className="lg:col-span-5 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px] pb-4 lg:pb-0 scrollbar-thin scrollbar-thumb-gray-800 pr-1 text-right"
          >
            {serviceKeys.map((key) => {
              const detail = serviceDetails[key];
              const IconComp = iconMap[detail.icon] || Briefcase;
              const isSelected = activeKey === key;
              
              // Extract En/Ar names from composite translated title
              const titleParts = detail.title.split(' / ');
              const displayTitle = lang === 'ar' ? titleParts[1] : titleParts[0];

              return (
                <button
                  key={key}
                  onClick={() => setActiveKey(key)}
                  className={`w-full text-right flex items-center gap-3 px-4 py-3.5 rounded-xl border shrink-0 transition-all ${
                    isSelected 
                      ? 'border-[#63D6B5] bg-[#63D6B5]/10 text-[#89FFE1] shadow-inner font-extrabold scale-[1.01]' 
                      : 'border-gray-900 bg-gray-950/50 text-gray-400 hover:text-white hover:border-gray-800'
                  }`}
                >
                  <IconComp className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#63D6B5]' : 'text-gray-500'}`} />
                  <span className="text-xs md:text-sm whitespace-nowrap lg:whitespace-normal">{displayTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Central Active Service Visual Panel with interactive illustrations */}
          <div 
            style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
            className="lg:col-span-7 bg-[#07111D]/60 border border-gray-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeKey}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Header detail */}
                <div className="flex items-start justify-between gap-4 border-b border-gray-800 pb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white">
                      {lang === 'ar' ? selectedService.title.split(' / ')[1] : selectedService.title.split(' / ')[0]}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 mt-2 leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#63D6B5]/10 border border-[#63D6B5]/30 flex items-center justify-center text-[#89FFE1] shrink-0">
                    <ActiveIcon className="w-6 h-6 animate-pulse" />
                  </div>
                </div>

                {/* Sub features / benefits list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                  {/* Scope Benefits */}
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase font-mono font-bold text-gray-500 tracking-wider">
                      {lang === 'ar' ? 'المنافع الاستراتيجية للمشروع:' : 'Project Strategic Benefits:'}
                    </h4>
                    <div className="space-y-3">
                      {selectedService.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start">
                          <CheckCircle className="w-4 h-4 text-[#63D6B5] shrink-0 mt-0.5" />
                          <span className="text-xs md:text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features listing */}
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase font-mono font-bold text-gray-500 tracking-wider">
                      {lang === 'ar' ? 'المقاييس الفنية والمزايا:' : 'Engineering Implementations:'}
                    </h4>
                    <div className="space-y-3">
                      {selectedService.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#89FFE1] mt-2 block shrink-0" />
                          <span className="text-xs md:text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Optional Service Host Disclaimer */}
                <div className="p-4 bg-gray-950/70 border border-gray-900 rounded-xl">
                  <p className="text-[10px] text-gray-500 leading-relaxed text-justify">
                    * {t.hostingText.slice(0, 160)}...
                  </p>
                </div>

                {/* Order Call Button */}
                <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="text-xs text-gray-400 font-mono">
                    {t.servicesMoreDetails}
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setCurrentNav('contact')}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 font-bold text-xs hover:transform hover:scale-105 transition-all shadow-lg shadow-[#63D6B5]/10"
                  >
                    <span>{t.ctaGetStarted}</span>
                    {lang === 'ar' ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

    </section>
  );
}
