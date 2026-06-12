import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { UI_TRANSLATIONS } from "../translations";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  lang: "en" | "ar";
  setLang: (lang: "en" | "ar") => void;
}

export default function Navbar({ currentPage, setCurrentPage, lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const logoUrl = new URL('../../assets/ventaria-logo.png', import.meta.url).href;

  // helper to force pointer cursor in cases where an overlay/global rule prevents it
  const setBodyCursor = (val: '' | 'pointer') => {
    if (typeof document !== 'undefined') document.body.style.cursor = val;
  };

  // ensure cursor is reset when component unmounts
  useEffect(() => {
    return () => {
      if (typeof document !== 'undefined') document.body.style.cursor = '';
    };
  }, []);

  const navLinks = lang === "ar" ? [
    { label: "الرئيسية", value: "home" },
    { label: "الخدمات", value: "services" },
    { label: "أعمالنا", value: "portfolio" },
    { label: "دراسات الحالة", value: "case-studies" },
    { label: "من نحن", value: "about" },
    { label: "الأسعار", value: "pricing" },
    { label: "المدونة", value: "blog" }
  ] : [
    { label: "Home", value: "home" },
    { label: "Services", value: "services" },
    { label: "Portfolio", value: "portfolio" },
    { label: "Case Studies", value: "case-studies" },
    { label: "About", value: "about" },
    { label: "Pricing", value: "pricing" },
    { label: "Blog", value: "blog" }
  ];

  const handleNavClick = (value: string) => {
    setCurrentPage(value);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Debug helper: log top element under cursor to detect overlays blocking pointer
  const handleDebugMouseMove = (e: React.MouseEvent) => {
    try {
      const x = e.clientX;
      const y = e.clientY;
      const el = document.elementFromPoint(x, y) as HTMLElement | null;
      if (!el) return;
      const btn = document.getElementById('nav-contact-btn');
      // if the top element is the button (or inside it) do nothing
      if (btn && (el === btn || btn.contains(el))) return;
      // otherwise log info to console to help debugging
      const cs = window.getComputedStyle(el);
      console.warn('[Navbar debug] top element under cursor:', {
        tag: el.tagName,
        id: el.id || null,
        classes: el.className || null,
        pointerEvents: cs.pointerEvents,
        cursor: cs.cursor,
        zIndex: cs.zIndex,
      });
    } catch (err) {
      // ignore
    }
  };

  return (
    <nav ref={navRef} onMouseMove={handleDebugMouseMove} className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group"
            id="nav-logo-btn"
          >
            <img src={logoUrl} alt="Ventaria logo" className="w-6 h-6 object-contain transform rotate-45 transition-transform duration-500 group-hover:rotate-180" />
            <span className="text-2xl font-extrabold tracking-tighter text-white">
              {UI_TRANSLATIONS[lang].brandName}
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.value;
              return (
                <button
                  key={link.value}
                  onClick={() => handleNavClick(link.value)}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 hover:text-accent relative py-2 focus:outline-none cursor-pointer ${
                    isActive ? "text-accent" : "text-zinc-400"
                  }`}
                  id={`nav-link-${link.value}`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
                  )}
                </button>
              );
            })}
            {/* Contact Button */}
            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              onMouseEnter={() => setBodyCursor('pointer')}
              onMouseLeave={() => setBodyCursor('')}
              className="px-4 py-2 bg-accent hover:bg-accent-hover text-black font-bold text-xs tracking-widest uppercase rounded-full transition-transform hover:scale-105 cursor-pointer shadow-[0_0_20px_rgba(94,225,181,0.2)]"
              id="nav-contact-btn"
              aria-label={lang === "ar" ? "تواصل معنا" : "Contact"}
              style={{ cursor: 'pointer', pointerEvents: 'auto' }}
            >
              {lang === "ar" ? "تواصل معنا" : "Contact"}
            </button>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center">
            {/* Language Switch Button */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className={`px-3 py-1.5 border border-zinc-800 hover:border-accent/30 text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-zinc-400 hover:text-white ${
                lang === "ar" ? "ml-4" : "mr-4"
              }`}
              id="nav-lang-toggle"
            >
              {lang === "en" ? "العربية" : "English"}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              onMouseEnter={() => setBodyCursor('pointer')}
              onMouseLeave={() => setBodyCursor('')}
              className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-black font-extrabold text-xs tracking-widest uppercase rounded-full transition-transform hover:scale-102 cursor-pointer shadow-[0_0_20px_rgba(94,225,181,0.2)]"
              id="desktop-cta-btn"
              aria-label={UI_TRANSLATIONS[lang].bookCall}
              style={{ cursor: 'pointer', pointerEvents: 'auto' }}
            >
              {UI_TRANSLATIONS[lang].bookCall}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Language Switch Mobile */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-2.5 py-1 border border-zinc-800 text-[10px] font-mono font-bold uppercase rounded-lg text-zinc-400 hover:text-white"
              id="mobile-lang-toggle"
            >
              {lang === "en" ? "العربية" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent focus:outline-none p-1 pointer-events-auto cursor-pointer"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links Tray */}
      {isOpen && (
        <div className="lg:hidden border-b border-white/5 bg-black/95 backdrop-blur-2xl px-6 py-8 absolute top-20 left-0 w-full flex flex-col space-y-5 shadow-2xl z-40 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = currentPage === link.value;
              return (
                <button
                  key={link.value}
                  onClick={() => handleNavClick(link.value)}
                  className={`text-left text-lg font-medium tracking-wide py-1 border-b border-white/5 flex justify-between items-center cursor-pointer ${
                    isActive ? "text-accent pl-2 border-l-2 border-l-accent" : "text-text-secondary"
                  }`}
                  id={`mobile-nav-link-${link.value}`}
                >
                  <span>{link.label}</span>
                  <div className={`w-1.5 h-1.5 rounded-full bg-accent ${isActive ? "opacity-100" : "opacity-0"}`} />
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            onMouseEnter={() => setBodyCursor('pointer')}
            onMouseLeave={() => setBodyCursor('')}
            className="flex items-center justify-center space-x-2 w-full h-12 rounded-lg bg-accent text-black font-extrabold hover:bg-accent-hover transition-colors duration-300 shadow-md cursor-pointer"
            id="mobile-nav-cta-btn"
            style={{ cursor: 'pointer', pointerEvents: 'auto' }}
          >
            <span>{UI_TRANSLATIONS[lang].startProject}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
}
