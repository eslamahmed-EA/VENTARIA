import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MapPin, Calendar as CalendarIcon, ArrowRight, Globe, MessageSquare } from "lucide-react";
import { UI_TRANSLATIONS } from "../translations";

interface ContactProps {
  lang: "en" | "ar";
}

export default function Contact({ lang }: ContactProps) {
  // Contact Form States
  const [formData, setFormData] = useState({
    name: "",
  phone: "",
    email: "",
    website: "",
    platform: "shopify",
    budget: "8500",
    message: ""
  });
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Calendly Mock States
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<string>("June 8, 2026");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [scheduleConfirmed, setScheduleConfirmed] = useState(false);

  const availableDays = lang === "ar" ? [
    { label: "الإثنين", dateStr: "8 يونيو، 2026", active: true },
    { label: "الثلاثاء", dateStr: "9 يونيو، 2026", active: true },
    { label: "الأربعاء", dateStr: "10 يونيو، 2026", active: true },
    { label: "الخميس", dateStr: "11 يونيو، 2026", active: true }
  ] : [
    { label: "MON", dateStr: "June 8, 2026", active: true },
    { label: "TUE", dateStr: "June 9, 2026", active: true },
    { label: "WED", dateStr: "June 10, 2026", active: true },
    { label: "THU", dateStr: "June 11, 2026", active: true }
  ];

  const availableSlots = [
    "09:00 AM", "11:00 AM", "02:30 PM", "04:00 PM"
  ];

  const handleFormInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!(formData.name && formData.email)) {
      setSubmitError("Please provide name and email.");
      return;
    }

    // Read webhook URL from Vite env var: VITE_SHEETS_WEBHOOK
    // If not provided, fall back to the Apps Script URL you supplied.
    const SHEETS_WEBHOOK = (((import.meta as any).env && (import.meta as any).env.VITE_SHEETS_WEBHOOK) as string | undefined)
  || 'https://script.google.com/macros/library/d/12JSQJEYQ1I7i_uK5LC4uah-bj8JadiOewRSEU3i2bzRMZLh4aLWS0dd5/2';

    setIsLoading(true);
    setSubmitError(null);

    // Prepare payload for a simple Google Apps Script / webhook that writes to Sheets
    const payload = {
      timestamp: new Date().toISOString(),
      name: formData.name,
  phone: formData.phone,
      email: formData.email,
  website: formData.website,
  // Apps Script expects `service` and `details` (matching your Sheet columns)
  service: formData.platform,
      budget: formData.budget,
  details: formData.message
    };

    fetch(SHEETS_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(async (res) => {
        setIsLoading(false);
        if (!res.ok) {
          const txt = await res.text().catch(() => "");
          throw new Error(`Webhook response ${res.status} ${txt}`);
        }
  setIsSubmitSuccess(true);
  // Optionally clear form
  setFormData({ name: "", phone: "", email: "", website: "", platform: "shopify", budget: "8500", message: "" });
      })
      .catch((err) => {
        console.error("Failed to submit intake form:", err);
        setIsLoading(false);
        setSubmitError("Failed to send. Please try again later.");
      });
  };

  const handleTimeSlotSelect = (slot: string) => {
    setSelectedTimeSlot(slot);
  };

  const handleScheduleConfirm = () => {
    if (selectedCalendarDate && selectedTimeSlot) {
      setScheduleConfirmed(true);
    }
  };

  const textAlignment = lang === "ar" ? "text-right" : "text-left";
  const flexDir = lang === "ar" ? "flex-row-reverse" : "flex-row";
  const spaceXRev = lang === "ar" ? "space-x-reverse" : "";

  return (
    <div className={`bg-black text-white min-h-screen pt-28 pb-20 px-6 lg:px-12 ${textAlignment}`} id="contact-view-root">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block font-mono tracking-widest">
              {UI_TRANSLATIONS[lang].secProject}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase text-white leading-tight">
            {UI_TRANSLATIONS[lang].strategicIntake}
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
            {UI_TRANSLATIONS[lang].expectedLatency}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Form Column */}
          <div className="lg:col-span-12 xl:col-span-7 bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden glass accent-glow">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-accent/3 rounded-full blur-2xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!isSubmitSuccess ? (
                <motion.form
                  key="contact-intake-form"
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                  id="contact-form"
                >
                  <div className="space-y-2 border-b border-zinc-800 pb-4">
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{UI_TRANSLATIONS[lang].strategicIntake}</h3>
                    <p className="text-xs text-zinc-400">{UI_TRANSLATIONS[lang].expectedLatency}</p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="space-y-1.5 text-left">
                      <label className={`text-[10px] font-mono text-zinc-500 uppercase block font-bold tracking-widest ${lang === "ar" ? "text-right" : "text-left"}`}>{UI_TRANSLATIONS[lang].clientName}</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormInputChange}
                        placeholder={lang === "ar" ? "مثال: خالد المطبّقاني" : "e.g. Khalid Al-Mutairi"}
                        className={`w-full bg-zinc-950 border border-zinc-800 rounded-lg h-12 px-4 text-sm focus:border-accent focus:outline-none text-white font-sans ${lang === "ar" ? "text-right" : "text-left"}`}
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className={`text-[10px] font-mono text-zinc-500 uppercase block font-bold tracking-widest ${lang === "ar" ? "text-right" : "text-left"}`}>{lang === "ar" ? "الجوال" : "Phone"}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormInputChange}
                        placeholder={lang === "ar" ? "مثال: 059xxxxxxx" : "e.g. +9665xxxxxxxx"}
                        className={`w-full bg-zinc-950 border border-zinc-800 rounded-lg h-12 px-4 text-sm focus:border-accent focus:outline-none text-white font-sans ${lang === "ar" ? "text-right" : "text-left"}`}
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className={`text-[10px] font-mono text-zinc-500 uppercase block font-bold tracking-widest ${lang === "ar" ? "text-right" : "text-left"}`}>{UI_TRANSLATIONS[lang].directMail}</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormInputChange}
                        placeholder="e.g. d.pegasus.store@gmail.com"
                        className={`w-full bg-zinc-950 border border-zinc-800 rounded-lg h-12 px-4 text-sm focus:border-accent focus:outline-none text-white font-sans ${lang === "ar" ? "text-right" : "text-left"}`}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5 text-left">
                      <label className={`text-[10px] font-mono text-zinc-500 uppercase block font-bold tracking-widest ${lang === "ar" ? "text-right" : "text-left"}`}>{UI_TRANSLATIONS[lang].brandSite}</label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleFormInputChange}
                        placeholder="e.g. www.example.com"
                        className={`w-full bg-zinc-950 border border-zinc-800 rounded-lg h-12 px-4 text-sm focus:border-accent focus:outline-none text-white font-sans ${lang === "ar" ? "text-right" : "text-left"}`}
                      />
                    </div>
                    <div className="space-y-1.5 text-left">
                      <label className={`text-[10px] font-mono text-zinc-500 uppercase block font-bold tracking-widest ${lang === "ar" ? "text-right" : "text-left"}`}>{UI_TRANSLATIONS[lang].enginePlatform}</label>
                      <select
                        name="platform"
                        value={formData.platform}
                        onChange={handleFormInputChange}
                        className={`w-full bg-zinc-950 border border-zinc-800 rounded-lg h-12 px-4 text-sm focus:border-accent focus:outline-none text-zinc-300 font-mono uppercase ${lang === "ar" ? "text-right" : "text-left"}`}
                      >
                        <option value="shopify">{lang === "ar" ? "تصميم وتطوير متجر شوبيفاي" : "Shopify Storefront Design"}</option>
                        <option value="salla">{lang === "ar" ? "ثيم سلة توايلايت مخصص فاخر" : "Salla Premium Twilight Theme"}</option>
                        <option value="zid">{lang === "ar" ? "تهيئة وتطوير متجر زد ريادي" : "Zid Enterprise Core Setup"}</option>
                        <option value="branding">{lang === "ar" ? "بناء كتاب الهوية والشعار" : "Full Brand Book & Identity"}</option>
                        <option value="packaging">{lang === "ar" ? "تصميم وتخطيط التغليف الفاخر" : "Tactile Lux Packaging Die-Lines"}</option>
                        <option value="cro">{lang === "ar" ? "تحسين مبيعات وسرعة CRO" : "CRO Speed Optimization"}</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className={`text-[10px] font-mono text-zinc-500 uppercase block font-bold tracking-widest ${lang === "ar" ? "text-right" : "text-left"}`}>{UI_TRANSLATIONS[lang].investmentCapacity}</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleFormInputChange}
                      className={`w-full bg-zinc-950 border border-zinc-800 rounded-lg h-12 px-4 text-sm focus:border-accent focus:outline-none text-zinc-300 font-mono uppercase ${lang === "ar" ? "text-right" : "text-left"}`}
                    >
                      <option value="4500">{lang === "ar" ? "إعداد ونمو أساسي مسطح (4,500 - 6,000 جنيه)" : "Starter Setup Flat (EGP 4,500 - EGP 6,000)"}</option>
                      <option value="8500">{lang === "ar" ? "إطار نموذج مضاعفة التحويلات (8,500 - 12,000 جنيه)" : "Growth Engine Framework Flat (EGP 8,500 - EGP 12,000)"}</option>
                      <option value="16000">{lang === "ar" ? "برمجة وبناء ميكرو-عقد مخصص (16,000+ جنيه)" : "Enterprise Headless Bespoke Flat (EGP 16,000+)"}</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className={`text-[10px] font-mono text-zinc-500 uppercase block font-bold tracking-widest ${lang === "ar" ? "text-right" : "text-left"}`}>{UI_TRANSLATIONS[lang].criticalInstructions}</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleFormInputChange}
                      placeholder={lang === "ar" ? "اذكر تاريخ الإطلاق المتوقع، وحجم مبيعاتك الحالي، واختناقات المتجر..." : "Detail your target launch day, current monthly sales volume, and specific bottlenecks..."}
                      className={`w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-sm focus:border-accent focus:outline-none text-white font-sans ${lang === "ar" ? "text-right" : "text-left"}`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex justify-center items-center space-x-2 w-full h-14 bg-accent hover:scale-103 text-black transition-transform duration-300 font-bold uppercase text-xs tracking-wider rounded-lg cursor-pointer animate-pulse-slow"
                    id="submit-contact-form-btn"
                  >
                    <span>{UI_TRANSLATIONS[lang].submitBlueprint}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="form-sub-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-6 animate-fade-in"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center mx-auto text-accent text-3xl font-bold">
                    ✓
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-sans text-white uppercase tracking-tight">{UI_TRANSLATIONS[lang].intakeLogged}</h3>
                    <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                      {UI_TRANSLATIONS[lang].intakeFeedback}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSubmitSuccess(false)}
                    className="text-xs font-mono text-accent hover:underline flex items-center justify-center space-x-1.5 mx-auto cursor-pointer font-bold tracking-widest"
                    id="reset-contact-form-btn"
                  >
                    <span>{UI_TRANSLATIONS[lang].submitAnother}</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Scheduler & HQ Column */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8 font-sans">
            {/* Interactive Calendly Mock */}
            <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-3xl space-y-6 relative glass accent-glow">
              <div className={`flex items-center justify-between border-b border-zinc-800 pb-4 ${flexDir}`}>
                <div className={`flex items-center space-x-2 ${spaceXRev}`}>
                  <CalendarIcon className="w-4 h-4 text-accent" />
                  <span className="text-xs font-mono text-white tracking-widest font-bold uppercase">{UI_TRANSLATIONS[lang].videoCalendar}</span>
                </div>
                <span className="text-[10px] font-mono text-accent bg-accent/5 px-2 py-0.5 rounded border border-accent/20 uppercase font-bold">{UI_TRANSLATIONS[lang].zoomCall}</span>
              </div>

              {!scheduleConfirmed ? (
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold block mb-2 tracking-widest">{UI_TRANSLATIONS[lang].pickDate}</span>
                    <div className="grid grid-cols-4 gap-2">
                      {availableDays.map((day) => (
                        <button
                          key={day.dateStr}
                          onClick={() => { setSelectedCalendarDate(day.dateStr); setSelectedTimeSlot(null); }}
                          className={`flex flex-col items-center p-2 rounded-lg border transition-colors cursor-pointer text-center ${
                            selectedCalendarDate === day.dateStr
                              ? "bg-accent/10 border-accent text-accent"
                              : "bg-black/40 border-zinc-800 text-white hover:bg-zinc-800"
                          }`}
                        >
                          <span className="text-[10px] font-mono text-zinc-500 font-bold">{day.label}</span>
                          <span className="text-xs font-bold font-sans mt-0.5">{day.dateStr.split(" ")[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold block mb-2 tracking-widest">{UI_TRANSLATIONS[lang].chooseTime}</span>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      {availableSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => handleTimeSlotSelect(slot)}
                          className={`p-2.5 rounded-lg border transition-colors cursor-pointer text-center uppercase tracking-wider font-bold ${
                            selectedTimeSlot === slot
                              ? "bg-accent/15 border-accent text-accent"
                              : "bg-black/40 border-zinc-800 text-zinc-400 hover:bg-zinc-800"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleScheduleConfirm}
                    disabled={!selectedTimeSlot}
                    className={`w-full h-12 rounded-lg font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer ${
                      selectedTimeSlot
                        ? "bg-accent text-black hover:scale-103"
                        : "bg-zinc-900 text-zinc-700 border border-zinc-800 cursor-not-allowed"
                    }`}
                    id="confirm-schedule-btn"
                  >
                    <span>{UI_TRANSLATIONS[lang].secureSlot}</span>
                    <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                  </button>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center mx-auto text-accent text-xl font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-tight">{UI_TRANSLATIONS[lang].slotLocked}</h4>
                    <p className="text-[11px] text-accent font-mono mt-1 uppercase font-bold">
                      {selectedCalendarDate} at {selectedTimeSlot}
                    </p>
                    <p className="text-[10px] text-zinc-400 max-w-xs mx-auto leading-normal mt-2">
                      {UI_TRANSLATIONS[lang].checkInbox}
                    </p>
                  </div>
                  <button
                    onClick={() => { setScheduleConfirmed(false); setSelectedTimeSlot(null); }}
                    className="text-[10px] font-mono text-accent hover:underline cursor-pointer font-bold tracking-wider"
                  >
                    {UI_TRANSLATIONS[lang].differentDate}
                  </button>
                </div>
              )}
            </div>

            {/* WhatsApp Direct Line Button */}
            <div className={`bg-zinc-900/60 border border-zinc-800 p-6 rounded-3xl flex items-center justify-between gap-4 glass accent-glow ${flexDir === "flex-row-reverse" ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"}`}>
              <div className="space-y-1 flex-grow">
                <div className="flex items-center space-x-1 border border-accent/20 bg-accent/5 px-2.5 py-0.5 rounded w-fit text-[9px] font-mono text-accent font-bold">
                  <span className="w-1 h-1 bg-accent rounded-full animate-pulse mr-1" />
                  <span>{UI_TRANSLATIONS[lang].directLine}</span>
                </div>
                <h4 className="text-sm font-bold font-sans text-white uppercase tracking-tight">{UI_TRANSLATIONS[lang].preferChat}</h4>
                <p className="text-[11px] text-zinc-400 leading-normal">{UI_TRANSLATIONS[lang].openWhatsApp}</p>
              </div>
              <a
                href="https://wa.me/96650000000?text=Hello%20Ventaria%20Studio%20Team%2C%20I%20would%20like%20to%20discuss%20an%20e-commerce%2520project."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-1.5 h-12 px-5 rounded-lg bg-emerald-500 hover:scale-103 text-black font-extrabold text-[10px] tracking-wider uppercase transition-transform shrink-0 cursor-pointer"
                id="whatsapp-direct-link"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{lang === "ar" ? "واتساب مباشر" : "WHATSAPP"}</span>
              </a>
            </div>

            {/* Headquarter Addresses and Map coordinates */}
            <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-3xl space-y-6 glass accent-glow">
              <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block font-bold">{UI_TRANSLATIONS[lang].officeLocations}</span>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 text-xs">
                  <div className={`flex items-center space-x-1 text-accent font-mono font-bold ${spaceXRev}`}>
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>{lang === "ar" ? "مقر الرياض // السعودية" : "RIYADH HQ // KSA"}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal whitespace-pre-line">{UI_TRANSLATIONS[lang].riyadhAddr}</p>
                </div>
                <div className="space-y-1 text-xs">
                  <div className={`flex items-center space-x-1 text-accent font-mono font-bold ${spaceXRev}`}>
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>{lang === "ar" ? "مكتب جنيف // سويسرا" : "GENEVA OFF // CH"}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal whitespace-pre-line">{UI_TRANSLATIONS[lang].genevaAddr}</p>
                </div>
              </div>

              {/* Mock dark beautiful vector map layout */}
              <div className="relative h-28 bg-black rounded-lg border border-zinc-800 flex items-center justify-center select-none overflow-hidden font-mono text-[9px] text-white/20">
                <div className="absolute inset-0 pointer-events-none bg-radial-gradient-accent opacity-5" />
                <div className="space-y-1 text-center">
                  <Globe className="w-6 h-6 mx-auto text-accent opacity-35" />
                  <span>{UI_TRANSLATIONS[lang].gpsSeeded}</span>
                  <div className="text-[8px] text-zinc-500 tracking-widest">RIYADH [24.7136° N, 46.6753° E] // GENEVA [46.2044° N, 6.1432° E]</div>
                </div>
              </div>
            </div>

            {/* Social Coordinate Links */}
            <div className={`flex justify-between items-center bg-zinc-900/60 border border-zinc-800 rounded-2xl px-5 py-4 text-xs font-mono text-zinc-400 glass ${flexDir}`}>
              <span className="font-bold tracking-wider text-[10px]">{UI_TRANSLATIONS[lang].socialLinks}</span>
              <div className="flex space-x-3 text-white font-bold">
                <a href="https://linkedin.com/company/ventariastudio" target="_blank" rel="noreferrer" className="hover:text-accent">LINKEDIN</a>
                <a href="https://instagram.com/ventariastudio" target="_blank" rel="noreferrer" className="hover:text-accent">INSTAGRAM</a>
                <a href="https://behance.net/ventariastudio" target="_blank" rel="noreferrer" className="hover:text-accent">BEHANCE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
