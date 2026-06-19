import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Eye, ChevronRight, X, Sparkles, AlertCircle, Maximize2, Zap } from 'lucide-react';
import { Language, PortfolioProject } from '../types';
import { portfolioProjects } from '../data/portfolio';

interface PortfolioGridProps {
  lang: Language;
  t: any;
}

export default function PortfolioGrid({ lang, t }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  
  // Before / After slider state for the interactive project mockup
  const [beforeAfterSplit, setBeforeAfterSplit] = useState<number>(50);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  // Categories in both languages
  const categories = [
    { id: 'all', en: 'All Systems', ar: 'جميع الأنظمة' },
    { id: 'Corporate Websites', en: 'Corporates', ar: 'مواقع الشركات' },
    { id: 'eCommerce Stores', en: 'Stores & Retail', ar: 'متاجر إلكترونية' },
    { id: 'News Websites', en: 'News Platforms', ar: 'منصات إخبارية' },
    { id: 'SaaS Platforms', en: 'SaaS Clouds', ar: 'برمجيات سحابية' },
    { id: 'Landing Pages', en: 'Promotional', ar: 'صفحات هبوط' },
    { id: 'Real Estate', en: 'Real Estate', ar: 'العقارات' },
    { id: 'Education', en: 'EdTech & LMS', ar: 'التعليم الذكي' },
    { id: 'Healthcare', en: 'Clinics & Health', ar: 'الرعاية والطب' },
    { id: 'Restaurants', en: 'Restaurants', ar: 'المطاعم والضيافة' },
    { id: 'Booking Systems', en: 'Live Bookings', ar: 'أنظمة حجز تفاعلية' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === selectedCategory);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isResizing) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setBeforeAfterSplit(percentage);
  };

  return (
    <section id="portfolio" className="relative py-28 overflow-hidden bg-[#030712]">
      
      {/* Decorative Grid Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      <div className="absolute top-1/4 right-[5%] w-[400px] h-[400px] bg-[#63D6B5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#63D6B5]/10 border border-[#63D6B5]/30 text-[#89FFE1] text-xs font-mono uppercase tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#63D6B5]" />
            {lang === 'ar' ? 'معرض المنتجات الرقمية الفاخرة' : 'Signature Architectural Works'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            {lang === 'ar' ? 'أعمال صُنعت لتدوم وتنافس عالمياً' : 'Portfolio of Engineering Excellence'}
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
            {lang === 'ar' 
              ? 'تصفح أكثر من ٣٠ نموذجاً واقعياً لأقوى الأنظمة، المواقع، وبوابات البيع الفاخرة التي برمجناها بالشراكة مع كبار الرواد.' 
              : 'Explore our comprehensive archive of custom applications, e-stores, and corporate portals, proving built speed and rigid defense.'}
          </p>
        </div>

        {/* Dynamic Category Filter bar (Masonry friendly scrolling on mobile) */}
        <div 
          style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
          className="flex gap-2 mb-12 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent justify-start lg:justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all border shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 border-transparent shadow-lg shadow-[#63D6B5]/20'
                  : 'bg-[#07111D] border-gray-900 text-gray-400 hover:text-white hover:border-gray-700'
              }`}
            >
              {lang === 'ar' ? cat.ar : cat.en}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid - 30 elements rendered beautifully */}
        <div 
          style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl border border-gray-900 bg-[#07111D]/40 backdrop-blur shadow-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-950/80">
                  <img
                    src={project.image}
                    alt={lang === 'ar' ? project.titleAr : project.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle black overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-90" />
                  
                  {/* Performance metric badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1 bg-[#1aa87a]/90 backdrop-blur px-2.5 py-0.5 rounded text-[10px] font-mono text-emerald-100 uppercase tracking-widest border border-emerald-500/30">
                    <Zap className="w-3 h-3 text-emerald-300 fill-emerald-300" />
                    Lighthouse: 99%
                  </div>
                </div>

                {/* Info Overlay Panel */}
                <div className="p-6 text-right">
                  <span className="text-[10px] font-mono font-bold text-[#63D6B5] uppercase tracking-widest">
                    {lang === 'ar' ? project.categoryAr : project.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-[#89FFE1] transition-colors leading-snug">
                    {lang === 'ar' ? project.titleAr : project.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                    {lang === 'ar' ? project.descriptionAr : project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5 justify-start">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[9px] font-mono text-gray-500 px-2 py-0.5 rounded border border-gray-800">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[9px] font-mono text-[#63D6B5] px-2 py-0.5 rounded border border-gray-800">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* PORTFOLIO PROJECT COMPREHENSIVE DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop Blur overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#030712]/90 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl border border-gray-800 bg-[#07111D] p-6 md:p-8 shadow-2xl z-50 text-right"
            >
              
              {/* Close Button top edge */}
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-6 p-2 rounded-full bg-gray-950 border border-gray-800 text-gray-400 hover:text-white transition-all ${lang === 'ar' ? 'left-6' : 'right-6'}`}
                aria-label="Close Project Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono font-bold text-[#63D6B5] uppercase tracking-widest block mb-1">
                  {lang === 'ar' ? selectedProject.categoryAr : selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  {lang === 'ar' ? selectedProject.titleAr : selectedProject.title}
                </h3>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Media/Visuals on left (or 1st on mobile) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* INTERACTIVE BEFORE/AFTER SLIDER (EXCLUSIVE LUXURY COMPONENT) */}
                  {selectedProject.beforeImage && selectedProject.afterImage ? (
                    <div>
                      <div className="text-xs text-gray-400 font-mono mb-2 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-[#63D6B5]" />
                        {lang === 'ar' ? 'اسحب لمقارنة المظهر القديم بالسرعة والأناقة الجديدة:' : 'Slide to compare legacy look vs VENTARIA performance:'}
                      </div>

                      <div 
                        onMouseMove={handleSliderMove}
                        onTouchMove={handleSliderMove}
                        onMouseDown={() => setIsResizing(true)}
                        onMouseUp={() => setIsResizing(false)}
                        onTouchStart={() => setIsResizing(true)}
                        onTouchEnd={() => setIsResizing(false)}
                        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-800 select-none cursor-ew-resize bg-gray-950"
                      >
                        {/* Before Image (Legacy grayscale) */}
                        <img 
                          src={selectedProject.beforeImage} 
                          alt="Old Version Layout" 
                          referrerPolicy="no-referrer"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className={`absolute bottom-3 text-[10px] font-mono px-2 py-1 bg-red-950/80 border border-red-800 text-red-200 uppercase rounded ${lang === 'ar' ? 'right-3' : 'left-3'}`}>
                          {lang === 'ar' ? 'قبل (بطيء وقديم)' : 'Legacy PHP Site (Slow)'}
                        </div>

                        {/* After Image (Modern) */}
                        <div 
                          className="absolute inset-0 w-full h-full overflow-hidden"
                          style={{
                            clipPath: `polygon(0 0, ${beforeAfterSplit}% 0, ${beforeAfterSplit}% 100%, 0 100%)`
                          }}
                        >
                          <img 
                            src={selectedProject.afterImage} 
                            alt="Nexus Redesign layout" 
                            referrerPolicy="no-referrer"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className={`absolute bottom-3 text-[10px] font-mono px-2 py-1 bg-emerald-950/80 border border-emerald-800 text-[#89FFE1] uppercase rounded ${lang === 'ar' ? 'left-3' : 'right-3'}`}>
                            {lang === 'ar' ? 'المظهر الجديد المطور من فينتاريا' : 'VENTARIA Ultra React (0.4s)'}
                          </div>
                        </div>

                        {/* Split Bar handle line */}
                        <div 
                          className="absolute top-0 bottom-0 w-1 bg-[#63D6B5] cursor-ew-resize flex items-center justify-center"
                          style={{ left: `${beforeAfterSplit}%` }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#63D6B5] text-gray-950 flex items-center justify-center shadow-lg border-2 border-white/40">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-gray-950">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}

                  {/* Screenshots gallery placeholder */}
                  <div className="grid grid-cols-3 gap-3">
                    <img src="https://picsum.photos/seed/view1/400/300" alt="Subview 1" referrerPolicy="no-referrer" className="rounded-lg border border-gray-800 hover:border-gray-700 transition" />
                    <img src="https://picsum.photos/seed/view2/400/300" alt="Subview 2" referrerPolicy="no-referrer" className="rounded-lg border border-gray-800 hover:border-gray-700 transition" />
                    <img src="https://picsum.photos/seed/view3/400/300" alt="Subview 3" referrerPolicy="no-referrer" className="rounded-lg border border-gray-800 hover:border-gray-700 transition" />
                  </div>
                </div>

                {/* Details texts on right */}
                <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">
                        {lang === 'ar' ? 'فكرة ونطاق المشروع' : 'Overview & Challenge'}
                      </h4>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed text-justify">
                        {lang === 'ar' ? selectedProject.descriptionAr : selectedProject.description}
                      </p>
                    </div>

                    {/* Performance metrics list */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">
                        {lang === 'ar' ? 'مؤشرات الأداء المحققة' : 'Performance Audit Results'}
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedProject.metrics.map((m, idx) => (
                          <div key={idx} className="p-3 bg-gray-950 border border-gray-900 rounded-xl">
                            <div className="text-[#63D6B5] font-mono text-base font-bold">{m.value}</div>
                            <div className="text-[10px] text-gray-500 mt-1 font-mono uppercase">{m.label}</div>
                          </div>
                        ))}
                        <div className="p-3 bg-[#132521] border border-emerald-900/50 rounded-xl">
                          <div className="text-emerald-400 font-mono text-base font-bold">PASS</div>
                          <div className="text-[10px] text-gray-400 mt-1 font-mono uppercase">{lang === 'ar' ? 'فحص الأمان' : 'Cyber Audit'}</div>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">
                        {lang === 'ar' ? 'التقنيات المستخدمة بالدقة' : 'Engineering Stack'}
                      </h4>
                      <div className="flex flex-wrap gap-1.5 justify-start">
                        {selectedProject.tech.map((t, idx) => (
                          <span key={idx} className="text-xs font-mono text-white px-3 py-1 bg-gray-950 rounded-lg border border-gray-800">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Consultation handoff CTA */}
                  <div className="pt-6 border-t border-gray-900">
                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 font-bold text-sm hover:shadow-lg transition-all"
                    >
                      <span>{lang === 'ar' ? 'اطلب نظاماً فائق الجود مماثلاً ↗' : 'Commission This High Quality Layout ↗'}</span>
                    </a>
                  </div>

                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
