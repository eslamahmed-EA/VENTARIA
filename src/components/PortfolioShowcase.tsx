import { useState, useMemo } from 'react';
import { 
  Check, 
  Globe, 
  Laptop, 
  Smartphone, 
  X, 
  ExternalLink, 
  Sparkles, 
  Clock, 
  ArrowLeft, 
  Building2, 
  ChevronRight, 
  ChevronLeft, 
  TrendingUp, 
  Activity, 
  Zap, 
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioItem } from '../types';

interface PortfolioShowcaseProps {
  portfolioItems: PortfolioItem[];
  portfolioFilter: 'all' | 'corporate' | 'landing' | 'ecommerce' | 'branding';
  setPortfolioFilter: (filter: 'all' | 'corporate' | 'landing' | 'ecommerce' | 'branding') => void;
  onContactTrigger: (serviceId?: string) => void;
}

export default function PortfolioShowcase({
  portfolioItems,
  portfolioFilter,
  setPortfolioFilter,
  onContactTrigger
}: PortfolioShowcaseProps) {
  
  // Selection state for active case study modal
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  
  // Interactive mockup view inside the modal: 'desktop' or 'mobile'
  const [modalPreviewMode, setModalPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  
  // Active photo index inside the modal slideshow gallery
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  // Brand exhibition play state elements
  const [activeIngredient, setActiveIngredient] = useState<string>('amber');
  const [roastLevel, setRoastLevel] = useState<'light' | 'medium' | 'dark'>('medium');
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [selectedCity, setSelectedCity] = useState<string>('riyadh');
  const [isFloorPlanBooked, setIsFloorPlanBooked] = useState<boolean>(false);

  // Separate the featured project from the rest of the grid
  const featuredProject = useMemo(() => {
    return portfolioItems.find(p => p.isFeatured) || portfolioItems[0];
  }, [portfolioItems]);

  // Filter the grid items (excluding the featured project to avoid duplicate representation inside the grid)
  const gridProjects = useMemo(() => {
    return portfolioItems.filter(p => !p.isFeatured);
  }, [portfolioItems]);

  // Open detailing case study
  const handleOpenDetails = (project: PortfolioItem) => {
    setSelectedProject(project);
    setModalPreviewMode('desktop');
    setActivePhotoIdx(0);
    setActiveIngredient('amber');
    setRoastLevel('medium');
    setSelectedSize('M');
    setSelectedCity('riyadh');
    setIsFloorPlanBooked(false);
    // Suppress scrollbar on body
    document.body.style.overflow = 'hidden';
  };

  // Close detailing case study
  const handleCloseDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="space-y-12">
      
      {/* 💡 Information Banner on Portfolio Status */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-emerald-50/40 border border-[#00bc7d]/20 rounded-2xl p-5 sm:p-6 text-right max-w-7xl mx-auto flex sm:flex-row flex-col items-start sm:items-center gap-4 shadow-sm"
        id="portfolio-disclaimer-banner"
      >
        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Sparkles className="w-5.5 h-5.5 text-primary" />
        </div>
        <div className="space-y-1">
          <h4 className="font-display font-extrabold text-xs sm:text-sm text-zinc-900 leading-snug">هل ترغب في امتلاك متجر أو موقع إلكتروني فاخر يضاهي هذه الأعمال؟</h4>
          <p className="text-zinc-600 text-[10px] sm:text-xs leading-relaxed">
            جميع ما تراه بالمعرض هي نماذج حقيقية وتصاميم صقلناها لأعمال سابقة؛ ونحن مجهزون بالكامل في <strong className="text-zinc-900 font-extrabold">فينتاريا</strong> لتصميم وبرمجة مشروع خاص مماثل ومخصص لك تماماً وفق تطلعاتك!
          </p>
        </div>
      </motion.div>

      {/* 1. FEATURED PROJECT SECTION (Awwwards / Webflow Agency Style) */}
      {featuredProject && (
        <section id="featured-project-showcase" className="relative bg-zinc-950 text-white rounded-3xl p-6 sm:p-10 lg:p-16 overflow-hidden border border-zinc-800 shadow-2xl">
          {/* Ambient glow spots */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00bc7d]/10 rounded-full filter blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6 text-right">
              <div className="inline-flex items-center gap-2 bg-[#00bc7d]/10 border border-[#00bc7d]/20 px-3 py-1.5 rounded-full text-[11px] font-black text-primary uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                مشروع مميز ونفخر به
              </div>
              
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
                {featuredProject.title}
              </h3>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {featuredProject.clientDescription || 'إعادة ابتكار تجربة الهوية والواجهات والتحويل لمتجرك لخدمة طموحاتك ومضاعفة نتائج ميزانيتك الإعلانية.'}
              </p>

              {/* Technologies */}
              {featuredProject.technologies && (
                <div className="space-y-3">
                  <span className="block text-zinc-500 text-xs font-bold">التقنيات المستخدمة:</span>
                  <div className="flex flex-wrap gap-1.5 justify-start">
                    {featuredProject.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] px-2.5 py-1 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Outstanding KPIs horizontal list */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-zinc-800 text-right">
                {featuredProject.results.map((res, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-[10px] text-zinc-500 block font-semibold leading-tight">{res.label}</span>
                    <span className="text-primary font-display font-black text-lg sm:text-xl block">{res.value}</span>
                  </div>
                ))}
              </div>

              {/* Primary action */}
              <div className="flex sm:flex-row flex-col gap-3 pt-2">
                <button 
                  onClick={() => handleOpenDetails(featuredProject)}
                  className="bg-primary hover:bg-[#009e68] text-zinc-950 font-black px-6 py-3 rounded-xl text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
                >
                  استعرض قصة النجاح بالتفصيل
                  <ArrowLeft className="w-4 h-4 text-zinc-950 shrink-0" />
                </button>
                <button 
                  onClick={() => onContactTrigger('corporate-web')}
                  className="border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all"
                >
                  اطلب مشروعاً مشابهاً لمتجرك
                </button>
              </div>
            </div>

            {/* Right Massive Mockup Column (Covers big portion of screen, Awwwards aesthetic) */}
            <div className="lg:col-span-7">
              <div 
                className="relative mx-auto rounded-2xl p-1.5 sm:p-2 bg-zinc-800 border border-zinc-700 shadow-2xl overflow-hidden group cursor-pointer"
                onClick={() => handleOpenDetails(featuredProject)}
              >
                {/* Browser bar */}
                <div className="flex items-center justify-between pb-2 px-2.5 border-b border-zinc-700/60 text-zinc-500">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                  <div className="bg-zinc-900/60 text-zinc-400 text-[9px] py-0.5 px-6 rounded font-mono truncate max-w-sm">
                    {featuredProject.title.replace(/\s+/g, '-').toLowerCase()}.com/preview
                  </div>
                  <div className="w-4"></div>
                </div>

                {/* Massive Image Screen Frame with scroll simulation of the mockup screenshot on hover */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-900">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle luxurious overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <div>
                      <span className="text-[#00bc7d] text-[10px] font-black tracking-widest uppercase block mb-1">عرض التفاصيل</span>
                      <h4 className="text-white text-lg font-bold">أنقر لقراءة المشكلة، خطط الحل، والنتائج مع المنصة</h4>
                    </div>
                  </div>

                  {/* Absolute badge */}
                  <span className="absolute top-4 right-4 bg-primary text-zinc-950 font-black text-[10px] sm:text-xs px-3 py-1.5 rounded-full shadow-lg">
                    {featuredProject.platform}
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      )}

      {/* 2. REGULAR PORTFOLIO GRID (Modern, high-contrast, premium layouts) */}
      <div className="space-y-12">
        
        {/* Navigation & category tabs */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 border-b border-zinc-100 pb-6">
          <div className="max-w-xl text-right">
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest bg-emerald-50/70 border border-primary/15 px-3 py-1.5 rounded-full">
              معرض أعمال فينتاريا
            </span>
            <h3 className="mt-3 font-display font-black text-2xl sm:text-3xl text-zinc-800">
              استكشف باقة من أعمالنا وتصاميمنا الرقمية
            </h3>
            <p className="mt-2 text-zinc-500 text-xs sm:text-sm">
              مشاريع استراتيجية ساهمنا في هندستها وصياغتها لتصبح منصات تنبض بالحياة والربحية للتجار والمستثمرين.
            </p>
          </div>

          {/* Tab switches */}
          <div className="flex flex-wrap gap-2 justify-start scrollbar-none" id="portfolio-category-filter">
            {[
              { id: 'all', name: 'الكل' },
              { id: 'corporate', name: 'مواقع الشركات' },
              { id: 'landing', name: 'صفحات الهبوط' },
              { id: 'ecommerce', name: 'متاجر سلة وزد وشوبيفاي' },
              { id: 'branding', name: 'الهوية البصرية' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setPortfolioFilter(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all relative ${portfolioFilter === tab.id ? 'bg-[#111111] text-white shadow-md' : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'}`}
                id={`btn-tab-${tab.id}`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* The Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-case-studies-grid">
          {gridProjects.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#fcfdfe] border border-zinc-100 hover:border-zinc-200/80 rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              id={`project-card-${item.id}`}
            >
              
              {/* Photo & Browser frame wrapper */}
              <div className="p-3 bg-zinc-50/80 border-b border-zinc-100">
                {/* Simulated lightweight Browser mockup head */}
                <div className="flex items-center justify-between pb-2 px-1 text-zinc-400">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-400/80"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-400/80"></span>
                    <span className="w-2 h-2 rounded-full bg-green-400/80"></span>
                  </div>
                  <span className="text-[8px] bg-white border border-zinc-200/60 text-zinc-400 font-mono py-0.5 px-4 rounded-md truncate max-w-[120px]">
                    {item.platform.toLowerCase()}.com
                  </span>
                  <div className="w-3"></div>
                </div>

                <div 
                  className="relative overflow-hidden aspect-[16/11] bg-white rounded-xl border border-zinc-100 cursor-pointer"
                  onClick={() => handleOpenDetails(item)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-zinc-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 text-zinc-950 font-extrabold text-xs px-4 py-2 rounded-lg py-2.5 shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      قراءة دراسة الحالة
                      <ArrowLeft className="w-3.5 h-3.5 text-zinc-950" />
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-zinc-800 font-black text-[9px] px-2.5 py-1 rounded-full shadow-sm">
                    {item.platform}
                  </span>
                </div>
              </div>

              {/* Data & KPIs */}
              <div className="p-5 sm:p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-primary text-[10px] font-black uppercase tracking-wider block">{item.category}</span>
                  <h4 className="font-display font-extrabold text-[#111111] text-base group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">
                    {item.clientDescription || 'تم تصميم المشروع وهندسة تجربة تصفحه لتوفير أفضل قيمة للزوار والمستخدمين وسرعة ممتازة.'}
                  </p>
                </div>

                {/* Technologies used checklist preview */}
                {item.technologies && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[9px] font-medium bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Micro KPIs layout */}
                <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-zinc-100 text-right">
                  {item.results.map((res, index) => (
                    <div key={index} className="space-y-0.5">
                      <span className="text-[9px] text-zinc-400 block font-semibold leading-tight truncate">{res.label}</span>
                      <span className="text-[#00bc7d] font-display font-black text-xs block">{res.value}</span>
                    </div>
                  ))}
                </div>

                {/* Replica Callout Notice */}
                <div className="bg-emerald-50/20 border border-[#00bc7d]/15 rounded-xl px-3 py-2 text-center text-[10px] text-zinc-650 font-bold mt-2">
                  💡 تواصل معنا لطلب متجر/موقع ومثيل له تماماً
                </div>

                {/* Case Study Entry Click link */}
                <button 
                  onClick={() => handleOpenDetails(item)}
                  className="w-full mt-3 text-center bg-zinc-50 hover:bg-zinc-100 text-zinc-800 text-xs font-black py-2.5 rounded-xl transition-all duration-200 border border-zinc-200/50 flex items-center justify-center gap-1.5"
                >
                  استعرض الحل والمشكلة والسرعة
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 3. CASE STUDY DETAILED IN-DEPTH DIALOG OVERLAY (Beautiful customized modal) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto overflow-x-hidden text-right" id="case-study-modal-container">
            
            {/* Modal backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseDetails}
              className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm"
              id="modal-backdrop-blur"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-zinc-100 z-10 max-h-[92vh] flex flex-col"
              id="case-study-modal-box"
            >
              
              {/* Header inside modal */}
              <div className="flex items-center justify-between p-5 border-b border-zinc-100 bg-zinc-50/50 sticky top-0 z-20 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-zinc-900 text-sm sm:text-base leading-none">
                      {selectedProject.title}
                    </h4>
                    <span className="text-zinc-500 text-[10px] sm:text-xs tracking-wider font-semibold block mt-1">
                      دراسة حالة تفصيلية مخصصة
                    </span>
                  </div>
                </div>
                
                {/* Close Button */}
                <button 
                  onClick={handleCloseDetails}
                  className="p-2 text-zinc-400 hover:text-zinc-900 bg-white border border-zinc-200 hover:bg-zinc-100 rounded-full transition-all focus:outline-none"
                  aria-label="إغلاق تفاصيل المشروع"
                  id="btn-close-modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Container Content */}
              <div className="p-6 sm:p-8 space-y-10 overflow-y-auto flex-grow scrollbar-thin">
                
                {/* TOP PORTION: Interactive Layout Preview Panel (Browser Mockup vs Mobile Toggler Frame) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-zinc-50 rounded-2xl p-4 sm:p-6 border border-zinc-200/50">
                  
                  {/* Left Column: Responsive Simulation Engine */}
                  <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[320px] sm:min-h-[400px] relative">
                    
                    {/* Viewport Switching Controls */}
                    {selectedProject.mobileImage && (
                      <div className="absolute top-0 right-0 z-10 bg-white shadow-sm border border-zinc-200 p-1 rounded-xl flex gap-1 text-xs">
                        <button
                          onClick={() => setModalPreviewMode('desktop')}
                          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-bold transition-all ${modalPreviewMode === 'desktop' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-900'}`}
                          id="btn-switch-desktop"
                        >
                          <Laptop className="w-3.5 h-3.5" />
                          المتصفح
                        </button>
                        <button
                          onClick={() => setModalPreviewMode('mobile')}
                          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-bold transition-all ${modalPreviewMode === 'mobile' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-900'}`}
                          id="btn-switch-mobile"
                        >
                          <Smartphone className="w-3.5 h-3.5" />
                          الجوال
                        </button>
                      </div>
                    )}

                    {/* Simulation frame rendering */}
                    <div className="w-full flex items-center justify-center pt-8">
                      {modalPreviewMode === 'desktop' ? (
                        /* Desktop Web Browser mockup frame */
                        <div className="w-full bg-zinc-900 rounded-xl p-1.5 sm:p-2 border border-zinc-800 shadow-xl overflow-hidden max-w-2xl transform transition-transform duration-500">
                          {/* Chrome bar */}
                          <div className="flex items-center justify-between pb-1.5 px-2 border-b border-zinc-800 text-zinc-500">
                            <div className="flex gap-1">
                              <span className="w-2 h-2 rounded-full bg-red-500/70"></span>
                              <span className="w-2 h-2 rounded-full bg-yellow-500/70"></span>
                              <span className="w-2 h-2 rounded-full bg-green-500/70"></span>
                            </div>
                            <div className="bg-zinc-800 text-zinc-400 text-[8px] py-0.5 px-6 rounded font-mono truncate max-w-xs text-center">
                              {selectedProject.demoUrl || 'https://demo.ventaria.com'}
                            </div>
                            <div className="w-3"></div>
                          </div>
                          
                          {/* Image frame */}
                          <div className="relative aspect-[16/10] overflow-hidden rounded bg-zinc-950 flex items-center justify-center group/scr">
                            <img 
                              src={
                                activePhotoIdx === 0 
                                  ? selectedProject.image 
                                  : (selectedProject.additionalImages && selectedProject.additionalImages[activePhotoIdx - 1]) || selectedProject.image
                              } 
                              alt={selectedProject.title} 
                              className="w-full h-full object-cover rounded-sm"
                              id="modal-desktop-preview-image"
                              referrerPolicy="no-referrer"
                            />
                            
                            {/* Hover screen scan effect */}
                            <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none opacity-20"></div>
                          </div>
                        </div>
                      ) : (
                        /* Mobile iPhone mockup frame with absolute precision */
                        <div className="relative bg-zinc-900 border-[10px] border-zinc-800 rounded-[40px] shadow-2xl w-60 sm:w-64 aspect-[9/18] overflow-hidden outline outline-1 outline-zinc-700/50">
                          {/* Speaker notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-zinc-800 h-5 w-24 rounded-b-xl z-20 flex items-center justify-center">
                            <span className="w-10 h-1 bg-zinc-900 rounded-full"></span>
                          </div>

                          {/* Image frame screen inside iPhone */}
                          <div className="relative w-full h-full bg-white z-10">
                            <img 
                              src={selectedProject.mobileImage || selectedProject.image} 
                              alt={`${selectedProject.title} Mobile Device`}
                              className="w-full h-full object-cover"
                              id="modal-mobile-preview-image"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/60 to-transparent p-4 flex items-end">
                              <span className="text-[10px] text-white font-mono opacity-85">متجاوب بالكامل 📱</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Multi-Image selector slideshow */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                    <div className="space-y-3 text-right">
                      <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">معرض صور وتفاصيل الواجهة:</span>
                      
                      <div className="grid grid-cols-2 gap-3" id="modal-gallery-thumbnails">
                        {/* Thumbnail Index 0 representing the main screenshot image */}
                        <button
                          onClick={() => { setActivePhotoIdx(0); setModalPreviewMode('desktop'); }}
                          className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${activePhotoIdx === 0 ? 'border-primary ring-2 ring-primary/10' : 'border-transparent opacity-70 hover:opacity-100 bg-white shadow-sm'}`}
                        >
                          <img 
                            src={selectedProject.image} 
                            alt={`${selectedProject.title} thumbnail`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute bottom-1 right-1 bg-zinc-950/80 text-white text-[8px] font-semibold px-2 py-0.5 rounded">رئيسية</span>
                        </button>

                        {/* Other screenshot thumbnails */}
                        {selectedProject.additionalImages && selectedProject.additionalImages.map((imgUrl, index) => (
                          <button
                            key={index}
                            onClick={() => { setActivePhotoIdx(index + 1); setModalPreviewMode('desktop'); }}
                            className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${activePhotoIdx === index + 1 ? 'border-primary ring-2 ring-primary/10' : 'border-transparent opacity-70 hover:opacity-100 bg-white shadow-sm'}`}
                          >
                            <img 
                              src={imgUrl} 
                              alt={`${selectedProject.title} gallery ${index + 1}`}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <span className="absolute bottom-1 right-1 bg-zinc-950/80 text-white text-[8px] font-semibold px-2 py-0.5 rounded">معاينة {index + 1}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Live visit URL Button action */}
                    {selectedProject.demoUrl && (
                      <a 
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full shadow-sm hover:shadow bg-zinc-900 text-white hover:text-white py-3.5 px-4 rounded-xl text-center text-xs font-black flex items-center justify-center gap-2 transition-all duration-300 hover:bg-zinc-800"
                        id="btn-visit-external-link"
                      >
                        زيارة الموقع الفعلي وحساب السرعة بنفسك
                        <ExternalLink className="w-4 h-4 shrink-0" />
                      </a>
                    )}
                  </div>

                </div>

                {/* 1B. BRAND SPECIFICATION SHEET (Spec Sheet & Brand Persona) */}
                {selectedProject.brandLogoText && (
                  <div className="border border-zinc-200/80 rounded-3xl p-6 sm:p-8 bg-zinc-50/50 space-y-8 text-right" id="brand-specs-exhibition-panel">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-200/60 pb-5 gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                          <h5 className="font-display font-black text-zinc-950 text-lg sm:text-xl">
                            مواصفات الهوية وتطبيقات البراند (Brand Specs)
                          </h5>
                        </div>
                        <p className="text-zinc-500 text-xs sm:text-sm mt-1">بنينا نظاماً بصرياً يرسّخ قيمة العلامة التجارية في الأسواق العالمية والمحلية.</p>
                      </div>
                      <span className="text-zinc-500 text-[10px] sm:text-xs font-black tracking-widest bg-zinc-200/60 px-3.5 py-1.5 rounded-xl uppercase self-start sm:self-center">
                        Concept Spec Sheet By Ventaria
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      
                      {/* Brand Logo Spec Display */}
                      <div className="bg-white border border-zinc-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm min-h-[220px]">
                        <div>
                          <span className="text-[10px] text-zinc-400 font-bold block mb-3 uppercase">تصميم الشعار وتوطين الرسم</span>
                          
                          {/* Animated Customized Badge based on selected brand */}
                          <div className="py-4 px-2 rounded-xl border border-zinc-100 bg-zinc-50/50 flex flex-col items-center justify-center text-center">
                            {selectedProject.id === 'noire' && (
                              <div className="space-y-1">
                                <span className="font-serif font-black text-2xl tracking-widest text-zinc-900 block" style={{ fontFamily: 'Cinzel, Georgia, serif' }}>NOIRÉ</span>
                                <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] block font-semibold">L'essence de la nuit</span>
                              </div>
                            )}
                            {selectedProject.id === 'roasta' && (
                              <div className="space-y-1">
                                <span className="font-sans font-black text-2xl tracking-tight text-emerald-950 block" style={{ fontFamily: 'system-ui, sans-serif' }}>☕ ROASTA</span>
                                <span className="text-[9px] uppercase tracking-wider text-emerald-600 block font-semibold">Pure Origin Specialty</span>
                              </div>
                            )}
                            {selectedProject.id === 'velora' && (
                              <div className="space-y-1">
                                <span className="font-serif font-extralight text-2xl tracking-widest text-zinc-900 block" style={{ fontFamily: 'Cormorant, Garamond, serif' }}>V E L O R A</span>
                                <span className="text-[8px] uppercase tracking-widest text-zinc-400 block pb-1">Silent Luxury Mode</span>
                              </div>
                            )}
                            {selectedProject.id === 'nova-estate' && (
                              <div className="space-y-1">
                                <span className="font-sans font-black text-xl tracking-tighter text-[#0052CC] block">▲ NOVA ESTATE</span>
                                <span className="text-[8px] uppercase tracking-widest text-zinc-500 block">The Smart Dwelling Standard</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                          <strong>مفهوم الشعار:</strong> {
                            selectedProject.id === 'noire' ? 'شعار لغوي Serif مع تباين ناعم يوحي بالتحرر من الكلاسيكية والتميز الباريسي.'
                            : selectedProject.id === 'roasta' ? 'شعار هندسي حديث يتميز برمز حبة البن المندمج مع حرف الراء لسهولة المطبوعات.'
                            : selectedProject.id === 'velora' ? 'خط كلاسيكي مسافاته واسعة يعامَل كشعار صامت لا يفقد بريقه مع تقلبات الموضة.'
                            : 'شعار مركب يرمز للبناء والتطلع العقاري العالي، مصمم لتطبيقات الموبايل المريحة.'
                          }
                        </div>
                      </div>

                      {/* Brand Colors Swatches */}
                      <div className="bg-white border border-zinc-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm min-h-[220px]">
                        <div>
                          <span className="text-[10px] text-zinc-400 font-bold block mb-3 uppercase">منظومة الألوان الأساسية (Palettes)</span>
                          <div className="flex gap-3 justify-center py-2" id="concept-color-swatches">
                            {selectedProject.brandColors?.map((col, index) => (
                              <div key={index} className="flex flex-col items-center space-y-1 group/col cursor-pointer">
                                <div 
                                  className="w-12 h-12 rounded-full border-2 border-white shadow-md transform hover:scale-110 transition-transform duration-200"
                                  style={{ backgroundColor: col.hex }}
                                  title={`اضغط لنسخ: ${col.hex}`}
                                  onClick={() => navigator.clipboard.writeText(col.hex)}
                                />
                                <span className="text-[10px] text-zinc-900 font-bold font-mono">{col.hex}</span>
                                <span className="text-[9px] text-[#4a4a4a] text-center leading-tight max-w-[65px] truncate">{col.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                          انقر على أي كود لنسخه فوراً. الألوان تدعم التباين الرائع وتوجيه عيون المتسوق لزر الشراء مباشرة.
                        </div>
                      </div>

                      {/* Brand Typography display */}
                      <div className="bg-white border border-zinc-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm min-h-[220px]">
                        <div>
                          <span className="text-[10px] text-zinc-400 font-bold block mb-3 uppercase">طبوغرافيا الخطوط والكليشيه (Typography)</span>
                          <div className="space-y-2 py-1 text-center bg-zinc-50 rounded-xl p-2.5 border border-zinc-100">
                            <span className="text-3xl text-zinc-900 font-display font-medium block">Aa</span>
                            <div className="text-[10px] text-zinc-700 leading-tight">
                              <div><strong>رأس الصفحة:</strong> {selectedProject.brandTypography?.heading}</div>
                              <div className="mt-1"><strong>المتن:</strong> {selectedProject.brandTypography?.bodyStyle}</div>
                            </div>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-zinc-100 text-[11px] text-zinc-500 leading-relaxed">
                          الخطوط المختارة متناسقة لغوياً وبصرياً، وتدعم سرعة القراءة وسيكولوجية تملك المنتجات دون تردد.
                        </div>
                      </div>

                    </div>

                    {/* Interactive Prototype Showcase (Unique to each brand project) */}
                    <div className="bg-white border border-zinc-100 rounded-2xl p-6 sm:p-8 space-y-6">
                      <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-primary" />
                          <h6 className="font-display font-bold text-zinc-950 text-sm sm:text-base">
                            معاينة الوظائف وتفاعل الواجهات التفاعلية (Interactive Sandbox)
                          </h6>
                        </div>
                        <span className="font-mono text-[9px] text-zinc-400">Sandbox Preview</span>
                      </div>

                      {/* Rendering Custom Interactive Sandbox Mockups per selectedProject */}
                      <div>
                        {selectedProject.id === 'noire' && (
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                            {/* Interactive perfume bottle mockup panel */}
                            <div className="lg:col-span-5 flex justify-center bg-zinc-950 p-6 rounded-2xl border border-zinc-900 aspect-square relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-40 h-40 bg-zinc-800/10 rounded-full blur-2xl"></div>
                              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl"></div>
                              
                              {/* Pure CSS perfume bottle */}
                              <div className="relative w-28 h-40 flex flex-col items-center justify-center self-center" id="css-noire-bottle">
                                {/* Gold spray cap */}
                                <div className="w-8 h-4 bg-gradient-to-r from-yellow-600 via-amber-400 to-yellow-600 rounded-t-md shadow-inner border-b border-amber-600"></div>
                                <div className="w-10 h-7 bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 rounded-sm"></div>
                                {/* Golden neck collar rings */}
                                <div className="w-12 h-1.5 bg-yellow-400 rounded-full"></div>
                                {/* Dark Glass Body container with absolute style */}
                                <div className="w-24 h-28 bg-gradient-to-b from-zinc-900 to-black rounded-xl border border-zinc-800 shadow-2xl flex flex-col items-center justify-center relative p-2">
                                  <div className="border border-yellow-500/20 w-full h-full rounded-lg flex flex-col items-center justify-center p-2 text-center relative">
                                    <span className="text-[11px] font-serif font-black tracking-widest text-[#D4AF37] block" style={{ fontFamily: 'Georgia, serif' }}>NOIRÉ</span>
                                    <span className="text-[5px] text-zinc-500 block uppercase font-mono tracking-widest mt-1">Eau De Parfum</span>
                                    <span className="text-[9px] text-zinc-300 block mt-2 font-serif font-bold text-yellow-500/90">{activeIngredient === 'amber' ? 'العنبر الداكن' : activeIngredient === 'oud' ? 'العود المعتق' : 'الورد الباريسي'}</span>
                                  </div>
                                  
                                  {/* Gloss shine reflection strip */}
                                  <div className="absolute top-1/2 left-2 w-1.5 h-20 bg-white/10 rounded-full filter blur-xs -translate-y-1/2"></div>
                                </div>
                              </div>
                            </div>

                            {/* Options and properties selectors */}
                            <div className="lg:col-span-7 space-y-4 text-right">
                              <span className="text-[#00bc7d] text-[10px] font-black uppercase tracking-wider block">تجربة المتسوق والتركيب</span>
                              <h3 className="font-display font-extrabold text-[#111111] text-lg sm:text-xl">تخصيص مكونات عطر باثوس</h3>
                              <p className="text-zinc-500 text-xs leading-relaxed">
                                واجهة سلة المخصصة تتيح للزائر اختيار النوتة العطرية الغلبانة ورؤية الزجاجة تتطور فورياً، مما يرفع ثقة العميل ويحفزهم للشراء. نجرب تغيير الشذا الترويحي بالأسفل:
                              </p>

                              {/* Ingredient Option Selectors */}
                              <div className="flex flex-wrap gap-2 pt-2">
                                {[
                                  { id: 'amber', name: 'العنبر الداكن الفاخر' },
                                  { id: 'oud', name: 'العود المعتق النقي' },
                                  { id: 'rose', name: 'الورد التركي والمندرين' }
                                ].map((item) => (
                                  <button
                                    key={item.id}
                                    onClick={() => setActiveIngredient(item.id)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${activeIngredient === item.id ? 'bg-[#00bc7d]/10 text-primary border-primary' : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50'}`}
                                  >
                                    {item.name}
                                  </button>
                                ))}
                              </div>

                              <div className="bg-zinc-50 border border-zinc-100 p-3.5 rounded-xl text-xs text-zinc-600">
                                <strong>تأثير المكون المحدد:</strong> {
                                  activeIngredient === 'amber' ? 'يعطي العطر لمسة سكرية ترابية غامضة وثبات مذهل في الشتاء.'
                                  : activeIngredient === 'oud' ? 'نكهة ملوكية تبهر الحاضرين في اللحظة الأولى للتعطر برائحة التميز والوجاهة.'
                                  : 'خيار ممتاز للاستخدام الصباحي والخلطات اللطيفة اليومية لثقة ناعمة مبتكرة.'
                                }
                              </div>
                            </div>
                          </div>
                        )}

                        {selectedProject.id === 'roasta' && (
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                            {/* Coffee envelope mock */}
                            <div className="lg:col-span-5 flex justify-center bg-[#FAF7F0] p-6 rounded-2xl border border-zinc-200/50 aspect-square relative select-none">
                              {/* Simulated bag */}
                              <div className="w-24 sm:w-28 h-40 rounded-lg shadow-xl relative border-[4px] border-zinc-900 overflow-hidden flex flex-col justify-between p-3 self-center transition-colors duration-300" style={{ backgroundColor: roastLevel === 'light' ? '#E6A15C' : roastLevel === 'medium' ? '#795548' : '#1C3A27' }}>
                                {/* Top seam seal and handle */}
                                <div className="absolute top-0 inset-x-0 h-2 bg-black/10"></div>
                                
                                <div className="space-y-1">
                                  <span className="text-[11px] font-black text-white tracking-widest block">ROASTA</span>
                                  <span className="text-[6px] text-white/70 uppercase tracking-widest block">Specialty Roasters</span>
                                </div>

                                <div className="space-y-2 pb-1 text-white text-right">
                                  <span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded text-white font-mono block w-max">Origin Kenya</span>
                                  <span className="text-[10px] font-bold block leading-tight text-white font-display">بن كينيا الفاخر</span>
                                  <div className="flex gap-1 text-[7px] text-white/90">
                                    <span>الحمص:</span>
                                    <span className="font-bold underline">{roastLevel === 'light' ? 'فلتر خفيف' : roastLevel === 'medium' ? 'متوسط متوازن' : 'إسبريسو داكن'}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="lg:col-span-7 space-y-4 text-right">
                              <span className="text-[#00bc7d]/90 text-[10px] font-black uppercase tracking-wider block">تجربة الذائقة وبطاقة التحضير</span>
                              <h3 className="font-display font-extrabold text-[#111111] text-lg sm:text-xl">تصفية درجة الحبوب والتحميص</h3>
                              <p className="text-zinc-500 text-xs leading-relaxed">
                                من خلال متجر زد المطور، قمنا بتنفيذ موديول تحديد وتصفية ذكي يتيح للعملاء تبديل التحميص ومستوى الطحن ليرى العميل تغليف الحزمة بطابع لوني طازج يناسب الكأس المفضلة. جرب تغيير مستوى التحميص:
                              </p>

                              {/* Roast selectors */}
                              <div className="flex flex-wrap gap-2">
                                {[
                                  { level: 'light', name: 'تحميص خفيف (شقراء فلتر)' },
                                  { level: 'medium', name: 'تحميص متوسط (متوازنة)' },
                                  { level: 'dark', name: 'تحميص داكن (إسبريسو قوي)' }
                                ].map((item) => (
                                  <button
                                    key={item.level}
                                    onClick={() => setRoastLevel(item.level as any)}
                                    className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${roastLevel === item.level ? 'bg-[#1C3A27] text-white border-zinc-950' : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50'}`}
                                  >
                                    {item.name}
                                  </button>
                                ))}
                              </div>

                              <div className="bg-zinc-50 border border-zinc-100 p-3 rounded-xl text-xs text-zinc-600">
                                <strong>طريقة التحضير المقترحة:</strong> {
                                  roastLevel === 'light' ? 'مناسب جداً للتقطير وأدوات V60 لاستخلاص حلاوة ونوتات البن الطبيعية الشبيهة بالياسمين والخوخ.'
                                  : roastLevel === 'medium' ? 'مثالي ومحايد لحقن الإسبريسو أو الفلتر المنزلي ومحضرات كولد برو مع إيحاءات البندق والشوكولاتة.'
                                  : 'ممتاز لخلطات الحليب الثقيلة، الكابتشينو، الموكا، ودلة القهوة الشرقية العميقة لتركيز فريد.'
                                }
                              </div>
                            </div>
                          </div>
                        )}

                        {selectedProject.id === 'velora' && (
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                            {/* Visual Garment selectors */}
                            <div className="lg:col-span-5 flex justify-center bg-zinc-50 p-6 rounded-2xl border border-zinc-200/50 aspect-square relative">
                              <div className="w-full h-full flex flex-col justify-between p-4 bg-white rounded-xl shadow-md border border-zinc-100 self-center max-w-[280px]">
                                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-zinc-100">
                                  <img 
                                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600" 
                                    alt="Velora Wear"
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <div className="pt-3 text-right">
                                  <span className="text-[10px] text-zinc-400 font-bold block">مجموعة فساتين فيلورا المخملية</span>
                                  <h4 className="font-display font-bold text-xs text-zinc-900 mt-1">حرير فرنسي ناعم كلاسيكي</h4>
                                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-100">
                                    <span className="text-zinc-900 text-xs font-bold">٥٩٠ ر.س</span>
                                    <span className="text-[9px] bg-zinc-900 text-white font-mono px-2 py-0.5 rounded font-semibold uppercase">Size: {selectedSize}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="lg:col-span-7 space-y-4 text-right">
                              <span className="text-[#00bc7d] text-[10px] font-black uppercase tracking-wider block">تجربة المقاسات المرنة</span>
                              <h3 className="font-display font-extrabold text-[#111111] text-lg sm:text-xl">تفاعل دقيق ومكثف لمقاسات العميل</h3>
                              <p className="text-zinc-500 text-xs leading-relaxed">
                                للتخلص من التردد الذي يزيد من السلات المتروكة في متاجر الأزياء، أقمنا وسيلة تحديد مقاس مرئية مع معلومات تفصيلية عن الطول تظهر سيكولوجياً وخطوات سريعة. جرب تبديل مقاس الفستان:
                              </p>

                              {/* Size buttons */}
                              <div className="flex gap-2.5">
                                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                  <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-10 h-10 rounded-full text-xs font-bold border transition-all cursor-pointer ${selectedSize === size ? 'bg-[#111111] text-white border-zinc-950' : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50'}`}
                                  >
                                    {size}
                                  </button>
                                ))}
                              </div>

                              <div className="bg-zinc-50 border border-zinc-100 p-3 rounded-xl text-xs text-zinc-600">
                                <strong>توصية المقياس ومخطط الحياكة لحجم ({selectedSize}):</strong> {
                                  selectedSize === 'XS' ? 'طول الفستان ١٣٥ سم، صدر ٨٢ سم، مرن جداً للفتيات بطول تحت ١٥٥ سم لقصة ضيقة دقيقة.'
                                  : selectedSize === 'S' ? 'طول الفستان ١٤٠ سم، صدر ٨٦ سم، تفصيلة الوسط مريحة وداعمة للأجسام فوق المتوسطة.'
                                  : selectedSize === 'M' ? 'المقاس الأكثر طلباً بطول ١٤٥ سم، صدر ٩٠ سم، بنظام توسيع جانبي مخفي للأكتاف.'
                                  : selectedSize === 'L' ? 'طول الفستان ١٥٠ سم، ممتازة للفعاليات والطلبات الطويلة، صدر ٩٦ سم مريح.'
                                  : 'أطول مقاس متوفر بطول ١٥٨ سم، صدر ١٠٢ سم، حياكة مستديمة بحواف ممتصة وقابلة للتقصير.'
                                }
                              </div>
                            </div>
                          </div>
                        )}

                        {selectedProject.id === 'nova-estate' && (
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                            {/* Interactive Blueprint dashboard layout */}
                            <div className="lg:col-span-5 flex justify-center bg-zinc-900 border border-zinc-800 p-6 rounded-2xl aspect-square relative text-white">
                              <div className="w-full h-full flex flex-col justify-between p-4 bg-zinc-950 rounded-xl relative overflow-hidden text-right border border-zinc-800 self-center max-w-[280px]">
                                <div className="space-y-1">
                                  <span className="text-[10px] text-zinc-500 block">مشروع فلل الياسمين الذكية</span>
                                  <h4 className="font-display font-extrabold text-sm text-white">مخطط الطابق السكني (Floor A2)</h4>
                                </div>

                                {/* Drawn floor plans */}
                                <div className="border border-zinc-800 rounded-lg p-3 my-2 space-y-1 bg-zinc-900/40 relative">
                                  <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
                                    <div className="border border-zinc-800 p-2 rounded bg-zinc-900">غرفة النوم الرئيسية</div>
                                    <div className="border border-zinc-800 p-2 rounded bg-zinc-900">مجلس عربي فسيح</div>
                                    <div className="border border-zinc-800 p-2 rounded bg-zinc-900">شرفة خارجية ومسبح</div>
                                    <div className={`border p-2 rounded transition-all cursor-pointer ${isFloorPlanBooked ? 'bg-[#00bc7d]/20 text-primary border-primary' : 'bg-rose-500/10 text-rose-500 border-rose-500/30'}`} onClick={() => setIsFloorPlanBooked(!isFloorPlanBooked)}>
                                      {isFloorPlanBooked ? 'جناح الحجز (معزز)' : 'جناح المعاينة الحالية'}
                                    </div>
                                  </div>
                                  <div className="text-[8px] text-zinc-500 text-center pt-2">انقر على الخيار الأخير لتجربة الحجز الذكية</div>
                                </div>

                                <div className="flex justify-between items-center pt-2 border-t border-zinc-900 text-xs">
                                  <span className="text-zinc-500">حالة المخطط:</span>
                                  <span className="font-bold text-[#00bc7d]">{isFloorPlanBooked ? 'تم حجزه مؤقتاً معاينة' : 'متوفر الحجز رقمياً'}</span>
                                </div>
                              </div>
                            </div>

                            <div className="lg:col-span-7 space-y-4 text-right">
                              <span className="text-[#00bc7d] text-[10px] font-black uppercase tracking-wider block">تجربة لوحة قيادة المعاينة ۳D</span>
                              <h3 className="font-display font-extrabold text-[#111111] text-lg sm:text-xl">بوابة حجز ومخططات الطوابق الأوتوماتيكية</h3>
                              <p className="text-zinc-500 text-xs leading-relaxed">
                                بدلاً من الكتالوجات المملّة، صممنا بوابة عقارية تعرض طوابق شقق وبنتهاوس سديم العقارية تفاعلياً، حيث يمكن للمشتري اختيار الغرف وحجر موعد دقيق مع معاينة المعرض بالثانية، جرب تفعيل الجناح:
                              </p>

                              {/* City tabs */}
                              <div className="flex gap-2 pt-1">
                                {[
                                  { id: 'riyadh', name: 'فرع الرياض (كمبوند الياسمين)' },
                                  { id: 'jeddah', name: 'فرع جدة (أبراج البحرية)' }
                                ].map((tab) => (
                                  <button
                                    key={tab.id}
                                    onClick={() => setSelectedCity(tab.id)}
                                    className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${selectedCity === tab.id ? 'bg-[#0052CC] text-white border-zinc-900' : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50'}`}
                                  >
                                    {tab.name}
                                  </button>
                                ))}
                              </div>

                              <div className="bg-zinc-50 border border-zinc-100 p-3 rounded-xl text-xs text-zinc-600">
                                <strong>توصيف الاستثمار السكني لفرع ({selectedCity === 'riyadh' ? 'الرياض' : 'جدة'}):</strong> {
                                  selectedCity === 'riyadh' ? 'مساحة عريضة وهادئة بجوار مسارات المشي والطاقة الشمسية، مصممة بأنماط مستدامة ومساحات خضراء هادئة ومكيفة لجو الرياض الممتاز.'
                                  : 'أبراج سكنية بإطلالة بانورامية كاملة على واجهة جدة البحرية والريفيرا، تدمج زجاج عازل مزدوج ومرفأ لليخوت ومسبح علوي للأعضاء.'
                                }
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                )}

                {/* BOTTOM PORTION: Narrative structured Case study modules */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Problem, Solution, Technologies (8 cols on desktop) */}
                  <div className="lg:col-span-8 space-y-8 text-right">
                    
                    {/* Summary About Client */}
                    <div className="space-y-3">
                      <h5 className="flex items-center gap-2 font-display font-extrabold text-zinc-900 text-base">
                        <span className="w-1.5 h-6 bg-primary rounded-full block"></span>
                        من هو العميل؟
                      </h5>
                      <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                        {selectedProject.clientDescription || 'أحد عملائنا الكرام الذين شاركناهم رحلة إطلاق فكرتهم المميزة وتحويلها لمنصة رقمية بأعلى معايير السوق.'}
                      </p>
                    </div>

                    {/* Problem Statement */}
                    <div className="bg-rose-50/40 border border-rose-100 rounded-2xl p-5 space-y-3">
                      <h5 className="flex items-center gap-2 font-display font-extrabold text-rose-800 text-base">
                        <ShieldAlert className="w-5 h-5 text-rose-600" />
                        المشكلة والتحديات التي كان يواجهها:
                      </h5>
                      <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                        {selectedProject.problemStatement || 'كان يواجه صعوبة في تحويل الزوار وسرعة بطيئة وهندسة مبيعات معقدة تدفع المهتمين لمغادرة الموقع في المنتصف.'}
                      </p>
                    </div>

                    {/* Solution Executed */}
                    <div className="bg-[#00bc7d]/5 border border-[#00bc7d]/10 rounded-2xl p-5 space-y-3">
                      <h5 className="flex items-center gap-2 font-display font-extrabold text-[#008a5b] text-base">
                        <Check className="w-5 h-5 text-primary" />
                        الحل الذي صممناه ونفذناه بكفاءة:
                      </h5>
                      <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                        {selectedProject.solutionExecuted || 'هندسة فريدة تعتمد على التماسك البصري المتطور، السيرفرات السريعة وتسهيل حجز الخدمة بنقرة تفاعلية سريعة.'}
                      </p>
                    </div>

                    {/* Step Technologies list */}
                    {selectedProject.technologies && (
                      <div className="space-y-3">
                        <h5 className="font-display font-extrabold text-zinc-900 text-base">برمجيات ومفاتيح النجاح الفني:</h5>
                        <div className="flex flex-wrap gap-2 justify-start">
                          {selectedProject.technologies.map((tech, i) => (
                            <span key={i} className="bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-700 font-bold text-xs px-3.5 py-1.5 rounded-xl">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Right Column: Key outstanding achievements / Results metrics (4 cols on desktop) */}
                  <div className="lg:col-span-4 bg-[#fbfcfd] border border-zinc-100 rounded-2xl p-5 sm:p-6 space-y-6 text-right">
                    <div>
                      <span className="text-primary text-[10px] font-black uppercase tracking-widest block mb-1">النتائج المحققة</span>
                      <h5 className="font-display font-extrabold text-zinc-900 text-base">أرقام نعتز بمشاركتها:</h5>
                    </div>

                    {/* Results map with metrics & visual checkmarks */}
                    <div className="space-y-5">
                      {selectedProject.results.map((res, i) => (
                        <div key={i} className="bg-white border border-zinc-200/60 p-4 rounded-xl space-y-2">
                          <span className="text-[10px] text-zinc-400 block font-bold leading-tight">{res.label}</span>
                          <div className="flex items-center justify-between">
                            <span className="text-emerald-600 font-display font-extrabold text-xl sm:text-2xl">{res.value}</span>
                            <Zap className="w-5 h-5 text-primary shrink-0" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order like this CTA */}
                    <button
                      onClick={() => {
                        handleCloseDetails();
                        onContactTrigger('corporate-web');
                      }}
                      className="w-full bg-primary hover:bg-[#009e68] text-zinc-950 font-black py-3 rounded-xl text-center text-xs transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm"
                      id="btn-trigger-similar-project"
                    >
                      أطلب من فينتاريا مشروعاً مماثلاً
                      <ArrowLeft className="w-4 h-4 text-zinc-950" />
                    </button>
                  </div>

                </div>

              </div>

              {/* Bottom footer bar */}
              <div className="p-4 border-t border-zinc-100 bg-zinc-50/50 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3">
                <span>تنويه: جميع النتائج حقيقية وموثقة مع ملاك المشاريع.</span>
                <span className="font-mono">منصة فينتاريا الرقمية © ٢٠٢٦</span>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
