import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Sparkles, ArrowRight, ArrowLeft, PhoneCall, Check, Send, ShieldAlert, Award, FileText } from 'lucide-react';
import { Language } from '../types';

interface ConversionOverlayProps {
  lang: Language;
}

export default function ConversionOverlay({ lang }: ConversionOverlayProps) {
  const [modalType, setModalType] = useState<'consultation' | 'quote' | 'exitIntent' | null>(null);
  const [hasSeenExitIntent, setHasSeenExitIntent] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  
  // Lead Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [scope, setScope] = useState('Business Setup');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Monitor scrolling to show sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor mouse leaving viewport for exit intent
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // clientY < 15 triggers when mouse leaves top boundary of window
      if (e.clientY < 15 && !hasSeenExitIntent && !modalType) {
        setModalType('exitIntent');
        setHasSeenExitIntent(true);
        // Persist seen in memory
        localStorage.setItem('ventaria_seen_exit', 'true');
      }
    };

    // Check localStorage first
    const seen = localStorage.getItem('ventaria_seen_exit');
    if (seen === 'true') {
      setHasSeenExitIntent(true);
    } else {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasSeenExitIntent, modalType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    
    // Simulate high-end software agency analysis
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Save lead securely locally
      const storedLeads = JSON.parse(localStorage.getItem('ventaria_leads') || '[]');
      storedLeads.push({
        id: Date.now(),
        type: modalType,
        name,
        phone,
        email,
        website,
        budget,
        scope,
        message,
        date: new Date().toISOString()
      });
      localStorage.setItem('ventaria_leads', JSON.stringify(storedLeads));

      // Prefill WhatsApp link option for instant engagement
      // Users can directly send their structured request to the directors
      const waText = lang === 'ar'
        ? `مرحباً فينتاريا، لقد أرسلت طلباً للاستشارة:
الاسم: ${name}
الهاتف: ${phone}
نوع الخدمة: ${scope}
الميزانية المتوقعة: ${budget}
الموقع الحالي: ${website || 'لا يوجد'}
الرسالة: ${message}`
        : `Hello Ventaria, I just submitted an inquiry:
Name: ${name}
Phone: ${phone}
Service: ${scope}
Budget: ${budget}
Website: ${website || 'None'}
Message: ${message}`;

      const encoded = encodeURIComponent(waText);
  // Use the provided single WhatsApp contact for all routes
  const waNumber = '201014046106';
      
      // We will present a button for them to trigger WhatsApp directly
      (window as any)._prefilledWaLink = `https://wa.me/${waNumber}?text=${encoded}`;
    }, 1500);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setWebsite('');
    setBudget('');
    setMessage('');
    setScope('Business Setup');
    setIsSuccess(false);
    setModalType(null);
  };

  const openModal = (type: 'consultation' | 'quote' | 'exitIntent') => {
    setModalType(type);
    setIsSuccess(false);
  };

  // Translations specifically for conversion overlays
  const ct = {
    whatsappTooltip: lang === 'ar' ? 'تحدث مع المستشار البرمجي' : 'Chat with Software Architects',
    exitTitle: lang === 'ar' ? 'هل تريد تسريع مبيعاتك مجاناً؟ 🚀' : 'Boost Your Loading Speed & Core Sales 🚀',
    exitSubtitle: lang === 'ar' ? 'نحن نقدم لك تقييم وتدقيق مجاني لأداء وأكواد موقعك بقيمة 1500$ لمساعدتك على مضاعفة عمليات التحول والشراء.' : 'Get a complimentary $1,500 expert audit of your website speed, security, and conversion metrics to scale revenue.',
    exitClaim: lang === 'ar' ? 'احصل على التقرير البرمجي المجاني' : 'Claim Free Architectural Review',
    exitNoThanks: lang === 'ar' ? 'لا شكراً، لا أريد أكواد سريعة' : 'No thanks, I prefer default speeds',
    consultationTitle: lang === 'ar' ? 'طلب استشارة هندسية مجانية' : 'Book Free Technical Consultation',
    consultationSubtitle: lang === 'ar' ? 'جلسة فنية مدتها 30 دقيقة مع كبار المهندسين لمناقشة أتمتة الأنظمة وتوسيع الكود.' : '30-minute strategic mapping session with Lead Architects to plan your system or eCommerce scale-out.',
    quoteTitle: lang === 'ar' ? 'طلب مقايسة وعرض سعر تفصيلي' : 'Request Custom Quote & Estimate',
    quoteSubtitle: lang === 'ar' ? 'زودنا بتفاصيل نظامك وسنقوم بصياغة هيكل وبنية وتكلفة المشروع خلال 24 ساعة.' : 'Specify your technical parameters to receive a complete architectural cost estimate in 24 hours.',
    nameLabel: lang === 'ar' ? 'اسمك الكريم / الشركة *' : 'YOUR FULL NAME / BRAND *',
    phoneLabel: lang === 'ar' ? 'رقم الهاتف / الواتساب النشط *' : 'MOBILE / ACTIVE WHATSAPP *',
    emailLabel: lang === 'ar' ? 'البريد الإلكتروني المهني' : 'PROFESSIONAL EMAIL ADDRESS',
    websiteLabel: lang === 'ar' ? 'رابط موقعك الحالي (إن وجد)' : 'CURRENT LOGGED WEBSITE (IF ANY)',
    budgetLabel: lang === 'ar' ? 'الميزانية المتوقعة للاستثمار' : 'EXPECTED CAPITAL BUDGET',
    budget1: lang === 'ar' ? 'أقل من 15,000 ج.م / 1,500 ريال' : 'Under 1,500 SAR / 15,000 EGP',
    budget2: lang === 'ar' ? '15,000 - 40,000 ج.م / 1,500 - 3,500 ريال' : '1,500 - 3,500 SAR / 15k - 40k EGP',
    budget3: lang === 'ar' ? '40,000 - 80,000 ج.م / 3,500 - 7,500 ريال' : '3,500 - 7,500 SAR / 40k - 80k EGP',
    budget4: lang === 'ar' ? 'أكثر من 80,000 ج.م / 7,500 ريال' : 'Above 7,500 SAR / 80,000 EGP +',
    scopeLabel: lang === 'ar' ? 'تصنيف ونوع النظام المستهدف' : 'TARGET ARCHITECTURE LEVEL',
    msgLabel: lang === 'ar' ? 'اشرح لنا فكرة النظام وما تطمح لتحقيقه' : 'DESCRIBE SPREAD OF YOUR APP IDEA',
    submitButton: lang === 'ar' ? 'أرسل الطلب للمهندسين' : 'Transmit to Engineering Core',
    submitting: lang === 'ar' ? 'جاري الفهرسة والإرسال...' : 'Transmitting encrypted secure data...',
    successTitle: lang === 'ar' ? 'تم تسجيل طلبك وتعيين الاستشاري! 🎉' : 'Architect Sworn In & Inquiry Filed! 🎉',
    successText: lang === 'ar' ? 'سيتصل بك أحد كبار مهندسي فينتاريا خلال ساعات لبدء الدراسة والتدقيق الفني.' : 'A Lead Systems Architect will contact you today to commence technical blueprint reviews.',
    whatsappOptionAr: 'بدء المحادثة الفورية مع المستشار عبر واتساب 💬',
    whatsappOptionEn: 'Connect Instantly via Secure WhatsApp 💬',
    closeButton: lang === 'ar' ? 'إغلاق النافذة' : 'Dismiss Panel',
    stickyMainText: lang === 'ar' ? 'جاهز لإطلاق مبيعاتك مع برمجيات فينتاريا الفاخرة؟ 💎' : 'Ready to launch with high-prestige VENTARIA systems? 💎',
    stickyBtn: lang === 'ar' ? 'طلب استشارة مجانية' : 'Book Session'
  };

  const handleWhatsAppRedirect = () => {
    if ((window as any)._prefilledWaLink) {
      window.open((window as any)._prefilledWaLink, '_blank');
    } else {
      // Fallback to the provided WhatsApp number
      const waNumber = '201014046106';
      window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(lang === 'ar' ? 'مرحباً فينتاريا، أود الاستفسار عن خدمات تطوير البرمجيات' : 'Hi Ventaria, I want to inquire about custom software development.')}`, '_blank');
    }
  };

  return (
    <>
      {/* 🚀 1. FLOATING WHATSAPP BUTTON */}
      <div 
        className={`fixed bottom-6 z-50 flex items-center gap-3 ${lang === 'ar' ? 'left-6 flex-row-reverse' : 'right-6'}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative group"
        >
          {/* Pulsating back glow */}
          <div className="absolute inset-0 bg-[#63D6B5] opacity-20 rounded-full blur-xl group-hover:opacity-40 transition-opacity animate-pulse" />
          
              <button
                onClick={() => {
                  // Use single contact number for direct chat
                  const waNumber = '201014046106';
                  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(lang === 'ar' ? 'أهلاً فينتاريا، أرغب في حجز موعد تدقيق برمجي مجاني لموقعي.' : 'Hello Ventaria, I would like to book a free architectural review.')}`, '_blank');
                }}
            aria-label="WhatsApp Chat"
            className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 border border-[#89FFE1]/40 flex items-center justify-center text-white shadow-xl relative z-10 transition-all hover:scale-110 active:scale-95"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white animate-pulse" />
          </button>

          {/* Interactive dynamic tooltip expanding */}
          <div className={`absolute top-1/2 -translate-y-1/2 bg-gray-950/95 border border-gray-800 text-white font-semibold text-xs py-2 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-xl ${
            lang === 'ar' ? 'right-16' : 'left-16'
          }`}>
            {ct.whatsappTooltip}
          </div>
        </motion.div>
      </div>

      {/* 🚀 2. STICKY BOTTOM SPECIAL CTA BAR */}
      <AnimatePresence>
        {showStickyCta && !modalType && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-[#030712]/90 backdrop-blur-lg border-t border-[#63D6B5]/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto rounded-t-3xl"
            style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
          >
            <div className="flex items-center gap-3 text-right">
              <div className="p-2 bg-[#63D6B5]/10 border border-[#63D6B5]/30 rounded-xl text-[#89FFE1] hidden md:block">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold text-white">
                  {ct.stickyMainText}
                </p>
                <p className="text-[10px] text-[#63D6B5] font-semibold">
                  {lang === 'ar' ? '✨ وفرنا باقات جديدة تناسب ميزانيتك بدقة' : '✨ Brand-new high-prestige pricing packages loaded.'}
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <button
                onClick={() => openModal('quote')}
                className="px-4 py-2 bg-gray-950 border border-gray-800 text-white hover:text-[#63D6B5] rounded-xl text-xs font-semibold transition"
              >
                {lang === 'ar' ? 'طلب ميزانية تفصيلية' : 'Request Estimate'}
              </button>
              <button
                onClick={() => openModal('consultation')}
                className="px-5 py-2 bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 rounded-xl text-xs font-bold shadow-lg shadow-[#63D6B5]/20 hover:scale-[1.02] transition"
              >
                {ct.stickyBtn}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🚀 3. EXIT INTENT POPUP & BOOKING MODAL */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-md">
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-[#07111D] border border-gray-800 rounded-3xl p-6 md:p-8 overflow-hidden shadow-2xl text-right"
              style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
            >
              {/* Absolutes back glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#63D6B5]/10 rounded-full blur-3xl pointer-events-none" />
              
              {/* Close Button */}
              <button
                onClick={resetForm}
                className="absolute top-4 left-4 p-2 rounded-xl bg-gray-950 border border-gray-800 text-gray-400 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>

              {/* SUCCESS PANEL */}
              {isSuccess ? (
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto scale-110">
                    <Check className="w-8 h-8 font-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {ct.successTitle}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-md mx-auto">
                      {ct.successText}
                    </p>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-gray-900">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="w-full inline-flex justify-center items-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition shadow-lg shadow-emerald-500/10"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{lang === 'ar' ? ct.whatsappOptionAr : ct.whatsappOptionEn}</span>
                    </button>
                    <button
                      onClick={resetForm}
                      className="w-full py-2.5 px-4 rounded-xl bg-gray-950 border border-gray-800 text-gray-400 text-xs font-semibold hover:text-white transition"
                    >
                      {ct.closeButton}
                    </button>
                  </div>
                </div>
              ) : (
                /* MAIN FORM WORK */
                <div>
                  
                  {/* MODAL HEADER */}
                  {modalType === 'exitIntent' && (
                    <div className="space-y-3 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] font-mono uppercase tracking-wider">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        {lang === 'ar' ? 'عرض مجاني محدود للزوار' : 'LIMITED FREE OFFER'}
                      </span>
                      <h3 className="text-lg md:text-xl font-black text-white leading-tight">
                        {ct.exitTitle}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed text-justify">
                        {ct.exitSubtitle}
                      </p>
                    </div>
                  )}

                  {modalType === 'consultation' && (
                    <div className="space-y-2 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#63D6B5]/10 border border-[#63D6B5]/30 text-[#89FFE1] text-[10px] font-mono uppercase tracking-wider">
                        <Award className="w-3.5 h-3.5" />
                        {lang === 'ar' ? 'استشارة برمجية مجانية' : 'NO-INTEGRATION CALL'}
                      </span>
                      <h3 className="text-lg md:text-xl font-black text-white leading-tight">
                        {ct.consultationTitle}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed text-justify">
                        {ct.consultationSubtitle}
                      </p>
                    </div>
                  )}

                  {modalType === 'quote' && (
                    <div className="space-y-2 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono uppercase tracking-wider">
                        <FileText className="w-3.5 h-3.5" />
                        {lang === 'ar' ? 'مقايسة كود معتمدة' : 'ESTIMATE BLUEPRINT REQUIRED'}
                      </span>
                      <h3 className="text-lg md:text-xl font-black text-white leading-tight">
                        {ct.quoteTitle}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed text-justify">
                        {ct.quoteSubtitle}
                      </p>
                    </div>
                  )}

                  {/* FORM CODE */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-gray-400 font-bold mb-1.5 font-mono text-[9px] uppercase tracking-wider">
                        {ct.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={lang === 'ar' ? 'عبد الله الخالدي' : 'e.g. John Doe'}
                        className="w-full bg-gray-950 border border-gray-800 p-3 rounded-xl text-xs text-white focus:outline-none focus:border-[#63D6B5] transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-gray-400 font-bold mb-1.5 font-mono text-[9px] uppercase tracking-wider">
                          {ct.phoneLabel}
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={lang === 'ar' ? '05xxxxxxxx / +20xxxxxxxxx' : 'e.g. +96650...'}
                          className="w-full bg-gray-950 border border-gray-800 p-3 rounded-xl text-xs text-white focus:outline-none focus:border-[#63D6B5] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 font-bold mb-1.5 font-mono text-[9px] uppercase tracking-wider">
                          {ct.emailLabel}
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full bg-gray-950 border border-gray-800 p-3 rounded-xl text-xs text-white focus:outline-none focus:border-[#63D6B5] transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
                      <div>
                        <label className="block text-gray-400 font-bold mb-1.5 font-mono text-[9px] uppercase tracking-wider">
                          {ct.scopeLabel}
                        </label>
                        <select
                          value={scope}
                          onChange={(e) => setScope(e.target.value)}
                          className="w-full bg-gray-950 border border-gray-800 p-3 rounded-xl text-xs text-gray-300 focus:outline-none focus:border-[#63D6B5] cursor-pointer"
                        >
                          <option value="Starter Website">{lang === 'ar' ? 'موقع تعريفي وبسيط' : 'Starter Website'}</option>
                          <option value="Business Platform">{lang === 'ar' ? 'موقع أعمال احترافي' : 'Business Platform'}</option>
                          <option value="eCommerce Hub">{lang === 'ar' ? 'متجر إلكتروني فاخر' : 'eCommerce Hub'}</option>
                          <option value="Custom SaaS / ERP">{lang === 'ar' ? 'نظام برمجي / لوحة تحكم SaaS' : 'Custom SaaS / ERP'}</option>
                          <option value="News Website">{lang === 'ar' ? 'رواق إخباري متكامل' : 'News Portal Setup'}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-400 font-bold mb-1.5 font-mono text-[9px] uppercase tracking-wider">
                          {ct.budgetLabel}
                        </label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full bg-gray-950 border border-gray-800 p-3 rounded-xl text-xs text-gray-300 focus:outline-none focus:border-[#63D6B5] cursor-pointer"
                        >
                          <option value="">{lang === 'ar' ? '-- حدد ميزانية التقريبية --' : '-- Choose budget tier --'}</option>
                          <option value="Under 1,500 SAR">{ct.budget1}</option>
                          <option value="1,500 - 3,500 SAR">{ct.budget2}</option>
                          <option value="3,500 - 7,500 SAR">{ct.budget3}</option>
                          <option value="Above 7,500 SAR">{ct.budget4}</option>
                        </select>
                      </div>
                    </div>

                    {modalType !== 'exitIntent' && (
                      <div>
                        <label className="block text-gray-400 font-bold mb-1.5 font-mono text-[9px] uppercase tracking-wider">
                          {ct.msgLabel}
                        </label>
                        <textarea
                          rows={2}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder={lang === 'ar' ? 'اكتب تطلعاتك وإطار عمل التطبيق...' : 'Describe special flows, deadlines, APIs, etc.'}
                          className="w-full bg-gray-950 border border-gray-800 p-3 rounded-xl text-xs text-white focus:outline-none focus:border-[#63D6B5] resize-none transition animate-none"
                        />
                      </div>
                    )}

                    {modalType === 'exitIntent' && (
                      <div>
                        <label className="block text-gray-400 font-bold mb-1.5 font-mono text-[9px] uppercase tracking-wider">
                          {ct.websiteLabel}
                        </label>
                        <input
                          type="text"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          placeholder="www.mybrand.com"
                          className="w-full bg-gray-950 border border-gray-800 p-3 rounded-xl text-xs text-white focus:outline-none focus:border-[#63D6B5] transition"
                        />
                      </div>
                    )}

                    <div className="pt-4 flex flex-col gap-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex justify-center items-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 text-xs font-bold shadow-lg shadow-[#63D6B5]/10 hover:shadow-[#63D6B5]/25 hover:scale-[1.01] transition-all disabled:opacity-50"
                      >
                        <Send className="w-4 h-4 shrink-0" />
                        <span>{isSubmitting ? ct.submitting : (modalType === 'exitIntent' ? ct.exitClaim : ct.submitButton)}</span>
                      </button>

                      {modalType === 'exitIntent' && (
                        <button
                          type="button"
                          onClick={resetForm}
                          className="w-full py-2.5 text-center text-gray-500 hover:text-white text-xs transition"
                        >
                          {ct.exitNoThanks}
                        </button>
                      )}
                    </div>

                  </form>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );

  // Helper inside ConversionOverlay to read current browser timezone values or fallback to default
  function activeCountryCode(): string {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (tz.includes('Riyadh')) return 'SA';
      if (tz.includes('Cairo')) return 'EG';
      if (tz.includes('Dubai')) return 'AE';
    } catch (_) {}
    return 'EG';
  }
}
