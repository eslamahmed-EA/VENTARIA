import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Calendar, Clock, MapPin, Send, MessageSquare, Sparkles, CheckCircle, Smartphone } from 'lucide-react';
import { Language } from '../types';

interface ContactSectionProps {
  lang: Language;
  t: any;
}

export default function ContactSection({ lang, t }: ContactSectionProps) {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [projectScope, setProjectScope] = useState('store');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Appointment slots State
  const [bookingDate, setBookingDate] = useState('');
  const [bookingSlot, setBookingSlot] = useState('');
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

  const availableSlots = [
    { id: 't1', time: '10:00 AM', arTime: '١٠:٠٠ صباحاً' },
    { id: 't2', time: '01:00 PM', arTime: '٠١:٠٠ مساءً' },
    { id: 't3', time: '03:30 PM', arTime: '٠٣:٣٠ مساءً' },
    { id: 't4', time: '05:00 PM', arTime: '٠٥:٠٠ مساءً' }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // WhatsApp direct message fallback
    const textMessage = `Hello Nexus! My name is ${name} from ${company || 'Individual'}. I am looking to build a ${projectScope}. Message: ${message}. Phone: ${phone}. Email: ${email}`;
    // Encode
    const enc = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/201200000000?text=${enc}`; // Mock phone number
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  const handleBookingConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate || !bookingSlot) return;
    setAppointmentConfirmed(true);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-[#030712] border-t border-gray-900/40">
      
      {/* Light highlights */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#63D6B5]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Titles */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#63D6B5]/10 border border-[#63D6B5]/30 text-[#89FFE1] text-xs font-mono uppercase tracking-wide mb-4">
            <Smartphone className="w-3.5 h-3.5 text-[#63D6B5]" />
            {lang === 'ar' ? 'مستشارونا بانتظار فكرتك تالياً' : 'Lock in Your Next Structural Milestone'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {lang === 'ar' ? 'ابدأ خطوتك الأولى نحو التقوق والنجاح' : 'Initiate Your Project Commission'}
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            {lang === 'ar' 
              ? 'احجز موعد استشارة تقنية فورية أو راسل مطوري الشركة عبر فورم الويب السحابي والواتساب مباشرة.' 
              : 'Submit your requirements to trigger our structural evaluation protocols, or speak with director nodes.'}
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Informational contacts & Interactive map SVG */}
          <div 
            style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
            className="lg:col-span-4 space-y-8 text-right"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                {lang === 'ar' ? 'معلومات الاتصال الفني والأمني' : 'Director Registry Node'}
              </h3>
              
              <div className="space-y-4 text-xs md:text-sm text-gray-400 font-mono">
                <div className="flex gap-3 items-center">
                  <div className="p-2.5 rounded-lg bg-[#07111D] border border-gray-800 text-[#63D6B5]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-[10px]">{lang === 'ar' ? 'البريد الإلكتروني:' : 'ELECTRONIC MAIL:'}</div>
                    <span className="text-white">directors@nexus-software.agency</span>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="p-2.5 rounded-lg bg-[#07111D] border border-gray-800 text-[#63D6B5]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-[10px]">{lang === 'ar' ? 'رقم الهاتف والواتساب ومكالمات:' : 'DIRECT TELEPHONY WHATSAPP:'}</div>
                    <span className="text-white">+966 500 000 000 / +20 120 000 000</span>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="p-2.5 rounded-lg bg-[#07111D] border border-gray-800 text-[#63D6B5]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-[10px]">{lang === 'ar' ? 'المقرات الإقليمية الموثوقة:' : 'REGIONAL OFFICE NODES:'}</div>
                    <span className="text-white">{lang === 'ar' ? 'الرياض - دبي - القاهرة' : 'Riyadh - Dubai - Cairo'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* INTERACTIVE TECH SVG MAP (EXCLUSIVE AESTHETIC COMPONENT) */}
            <div className="border border-gray-800 bg-[#07111D]/60 p-4 rounded-2xl space-y-4">
              <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 uppercase">
                <span>{lang === 'ar' ? 'التغطية والربط الجغرافي النشط' : 'Regional Mesh Network'}</span>
                <span className="text-[#63D6B5] animate-pulse">● Active</span>
              </div>
              
              <div className="relative aspect-video w-full rounded-xl bg-gray-950 border border-gray-900 overflow-hidden flex items-center justify-center">
                
                {/* Tech mapping lines overlay */}
                <svg className="w-full h-full p-2" viewBox="0 0 100 60">
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(99, 214, 181, 0.05)" strokeWidth="0.5" />
                  <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(99, 214, 181, 0.05)" strokeWidth="0.5" />
                  <line x1="30" y1="0" x2="30" y2="60" stroke="rgba(99, 214, 181, 0.05)" strokeWidth="0.5" />
                  <line x1="70" y1="0" x2="70" y2="60" stroke="rgba(99, 214, 181, 0.05)" strokeWidth="0.5" />
                  
                  {/* Cairo, Riyadh, Dubai Node connection loops */}
                  <path d="M40 35 L65 30 L73 33 Z" stroke="#63D6B5" strokeWidth="0.5" fill="none" strokeDasharray="2" />
                  
                  {/* Glowing Node dots */}
                  <circle cx="40" cy="35" r="1.5" fill="#89FFE1" className="animate-ping" style={{ transformOrigin: '40px 35px' }} />
                  <circle cx="40" cy="35" r="1" fill="#63D6B5" />
                  <text x="36" y="42" fill="#89FFE1" fontSize="3" fontFamily="monospace">Cairo</text>

                  <circle cx="65" cy="30" r="1.5" fill="#89FFE1" className="animate-ping" style={{ transformOrigin: '65px 30px' }} />
                  <circle cx="65" cy="30" r="1" fill="#63D6B5" />
                  <text x="61" y="26" fill="#89FFE1" fontSize="3" fontFamily="monospace">Riyadh</text>

                  <circle cx="73" cy="33" r="1.5" fill="#89FFE1" className="animate-ping" style={{ transformOrigin: '73px 33px' }} />
                  <circle cx="73" cy="33" r="1" fill="#63D6B5" />
                  <text x="75" y="36" fill="#89FFE1" fontSize="3" fontFamily="monospace">Dubai</text>
                </svg>

                <div className="absolute inset-x-0 bottom-2 text-center text-[9px] font-mono text-gray-500">
                  {lang === 'ar' ? 'دعم كامل لدول الخليج والشرق الأوسط' : 'Zero-latency support across Middle East'}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Advanced Contact Form */}
          <div 
            style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
            className="lg:col-span-5 bg-[#07111D]/80 border border-gray-800 p-6 md:p-8 rounded-3xl backdrop-blur text-right"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#63D6B5]" />
              <span>{lang === 'ar' ? 'تفاصيل فكرتك واحتياجاتك' : 'Technical Specifications proposal'}</span>
            </h3>

            {formSubmitted ? (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12 space-y-4"
              >
                <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">{lang === 'ar' ? 'تم الإرسال والربط بنجاح!' : 'Handshake Succeeded!'}</h4>
                <p className="text-xs text-gray-400">
                  {lang === 'ar' 
                    ? 'سيتم توجيهك الآن مباشرة لمحادثة المطورين على واتساب لاستكمال الملفات.' 
                    : 'We are transferring you to WhatsApp to conclude dynamic specifications.'}
                </p>
                <div className="pt-4 animate-pulse text-[11px] text-[#63D6B5] font-mono">
                  {lang === 'ar' ? 'جاري فتح شات المحادثة...' : 'Triggering client chat gateway...'}
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs md:text-sm">
                <div>
                  <label className="block text-gray-400 font-bold mb-2 font-mono uppercase text-[10px] tracking-wider">{lang === 'ar' ? 'الاسم الاحترافي الكامل:' : 'YOUR FULL NAME:'}</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'ar' ? 'مثال: فيصل بن سعود' : 'e.g. John Doe'}
                    className="w-full bg-gray-950 border border-gray-800 p-3 rounded-xl text-white focus:outline-none focus:border-[#63D6B5]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 font-bold mb-2 font-mono uppercase text-[10px] tracking-wider">{lang === 'ar' ? 'البريد الإلكتروني:' : 'BUSINESS EMAIL:'}</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@company.com"
                      className="w-full bg-gray-950 border border-gray-800 p-3 rounded-xl text-white focus:outline-none focus:border-[#63D6B5] font-mono text-left"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 font-bold mb-2 font-mono uppercase text-[10px] tracking-wider">{lang === 'ar' ? 'رقم الجوال النشط:' : 'PHONE NUMBER:'}</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+966 500 000"
                      className="w-full bg-gray-950 border border-gray-800 p-3 rounded-xl text-white focus:outline-none focus:border-[#63D6B5] font-mono text-left"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 font-bold mb-2 font-mono uppercase text-[10px] tracking-wider">{lang === 'ar' ? 'اسم الموقع أو الشركة (اختياري):' : 'COMPANY NAME (OPTIONAL):'}</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={lang === 'ar' ? 'مثال: نكسس الاستثمارية' : 'e.g. Acme Corp'}
                      className="w-full bg-gray-950 border border-gray-800 p-3 rounded-xl text-white focus:outline-none focus:border-[#63D6B5]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 font-bold mb-2 font-mono uppercase text-[10px] tracking-wider">{lang === 'ar' ? 'تصنيف وحجم النظام:' : 'EXPECTED ARCHITECTURE:'}</label>
                    <select
                      value={projectScope}
                      onChange={(e) => setProjectScope(e.target.value)}
                      className="w-full bg-gray-950 border border-gray-800 p-3 rounded-xl text-gray-300 focus:outline-none focus:border-[#63D6B5] cursor-pointer"
                    >
                      <option value="business">{lang === 'ar' ? 'مواقع شركات تعريفي' : 'Business Informational Web'}</option>
                      <option value="store">{lang === 'ar' ? 'متجر إلكتروني فاخر' : 'High Conversion eStore'}</option>
                      <option value="saas">{lang === 'ar' ? 'نظام سحابي SaaS / لوحة ومؤشرات' : 'Unicorn SaaS Platform'}</option>
                      <option value="custom">{lang === 'ar' ? 'تكامل ERP أو نظام مخصص ضخم' : 'Bespoke ERP Enterprise'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 font-bold mb-2 font-mono uppercase text-[10px] tracking-wider">{lang === 'ar' ? 'مواصفات وفكرة المشروع تفصيلاً:' : 'REQUIREMENTS BLUEPRINT DESCRIPTION:'}</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={lang === 'ar' ? 'اكتب تطلعاتك وأنظمة الربط والمزايا المطلوبة هنا...' : 'Describe expected integrations, timelines, and business targets...'}
                    className="w-full bg-gray-950 border border-gray-800 p-3 rounded-xl text-white focus:outline-none focus:border-[#63D6B5] leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#63D6B5]/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'إرسال وتأكيد الطلب هندسياً ↗' : 'Submit & Initiate Handshake ↗'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Column 3: Appointment Booking Slots */}
          <div 
            style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
            className="lg:col-span-3 bg-gradient-to-b from-gray-950 to-gray-950/40 border border-gray-900 p-5 rounded-2xl text-right"
          >
            <div className="flex items-center gap-1.5 mb-4 text-[#89FFE1]">
              <Calendar className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-widest">{lang === 'ar' ? 'جدولة استشارة فورية' : 'Interactive Meeting Grid'}</span>
            </div>

            <h3 className="text-sm font-bold text-white mb-2">{lang === 'ar' ? 'احجز موعداً مغلقاً مع الإدارة' : 'Secure Session Booking'}</h3>
            <p className="text-[10px] text-gray-400 leading-relaxed mb-6">
              {lang === 'ar' ? 'اختر اليوم والslot المناسب وسنتصل بك لحسم الأمور فورا مكملا للتراتيب.' : 'Pick your preferred date/timeslot, triggering automated coordinator alerts.'}
            </p>

            {appointmentConfirmed ? (
              <div className="p-4 bg-[#63D6B5]/5 border border-[#63D6B5]/30 rounded-xl space-y-2 text-center">
                <CheckCircle className="w-8 h-8 text-[#63D6B5] mx-auto" />
                <h4 className="text-xs font-bold text-white">{lang === 'ar' ? 'تم تأكيد الحجز بنجاح!' : 'Meeting Request Logged!'}</h4>
                <p className="text-[10px] text-gray-400 font-mono">
                  {bookingDate} @ {bookingSlot}
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingConfirm} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-gray-500 mb-1 text-[10px] uppercase">{lang === 'ar' ? '1. اختر التاريخ المتاح:' : '1. Choose Date:'}</label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-900 p-2 rounded text-white text-xs focus:outline-none focus:border-[#63D6B5]"
                  />
                </div>

                <div>
                  <label className="block text-gray-500 mb-2 text-[10px] uppercase">{lang === 'ar' ? '2. فترات الدعم الشاغرة:' : '2. Vacant Slots:'}</label>
                  <div className="grid grid-cols-2 gap-2">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setBookingSlot(slot.time)}
                        className={`py-1.5 text-[10px] border rounded transition-all text-center ${
                          bookingSlot === slot.time
                            ? 'border-[#63D6B5] bg-[#63D6B5]/10 text-[#89FFE1]'
                            : 'border-gray-900 bg-gray-950 text-gray-400'
                        }`}
                      >
                        {lang === 'ar' ? slot.arTime : slot.time}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded bg-gray-900 hover:bg-gray-850 hover:border-[#63D6B5] text-white border border-gray-800 text-[10px] font-bold"
                >
                  {t.ctaBookAppointment}
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-gray-900 text-[9px] font-mono text-gray-500 text-center leading-relaxed">
              {lang === 'ar' 
                ? '✦ تم فحص وضمان دقة النظام والامتداد الإلكتروني.' 
                : '✦ Secured with high performance digital lock-in.'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
