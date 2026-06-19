import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sparkles, ChevronDown } from 'lucide-react';
import { Language, CurrencyConfig, CountryConfig } from '../types';
import { countries, currencies } from '../data/translations';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activeCountry: CountryConfig;
  setActiveCountry: (country: CountryConfig) => void;
  currency: CurrencyConfig;
  setCurrency: (currency: CurrencyConfig) => void;
  t: any;
  currentNav: string;
  setCurrentNav: (nav: string) => void;
}

export default function Header({
  lang,
  setLang,
  activeCountry,
  setActiveCountry,
  currency,
  setCurrency,
  t,
  currentNav,
  setCurrentNav
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectCountryHandler = (country: CountryConfig) => {
    setActiveCountry(country);
    // Sync currency
    const targetCurrency = currencies[country.currency as keyof typeof currencies] || currencies.USD;
    setCurrency(targetCurrency);
    setCountryDropdownOpen(false);
  };

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'services', label: t.navServices },
    { id: 'portfolio', label: t.navPortfolio },
    { id: 'case-studies', label: t.navCaseStudies },
    { id: 'pricing', label: t.navPricing },
    { id: 'about', label: t.navAbout },
    { id: 'blog', label: t.navBlog },
    { id: 'tools', label: t.navTools },
    { id: 'contact', label: t.navContact }
  ];

  return (
    <header 
      style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto ${
        scrolled 
          ? 'bg-[#030712]/90 backdrop-blur-md border-b border-gray-900/80 py-4 shadow-xl shadow-[#030712]/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        {/* Brand Logo & Slogan */}
        <a 
          href="#home" 
          onClick={() => setCurrentNav('home')} 
          className="flex items-center gap-2.5 group"
        >
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-[#63D6B5] to-[#46C6A5] flex items-center justify-center shadow-lg shadow-[#63D6B5]/25 group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-gray-950 animate-pulse" />
            <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-25" />
          </div>
          <div>
            <span className="text-lg font-bold text-white tracking-tight group-hover:text-[#89FFE1] transition-all">
              {t.brandName}
            </span>
            <span className="hidden md:block text-[9px] text-[#63D6B5] font-mono leading-none tracking-widest mt-0.5">
              INTL CREATIVE STUDIO
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-gray-950/60 border border-gray-900 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setCurrentNav(item.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                currentNav === item.id 
                  ? 'bg-gradient-to-r from-[#63D6B5]/25 to-[#46C6A5]/25 text-[#89FFE1] border border-[#63D6B5]/30' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-900/40 border border-transparent'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Global Selectors */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Dynamic Flag Country & Currency Dropdown Selector */}
          <div className="relative">
            <button
              onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-950 border border-gray-800 text-xs font-mono text-gray-300 hover:border-gray-700 transition-all"
            >
              <span className="text-sm leading-none">{activeCountry.flag}</span>
              <span>{lang === 'ar' ? activeCountry.nameAr : activeCountry.nameEn} ({currency.code})</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>

            {countryDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setCountryDropdownOpen(false)} />
                <div className={`absolute z-50 mt-2 w-52 rounded-xl bg-gray-950 border border-gray-800 p-1.5 shadow-2xl ${lang === 'ar' ? 'left-0' : 'right-0'}`}>
                  <div className="px-3 py-2 text-[10px] uppercase font-mono text-gray-500 border-b border-gray-900 mb-1">
                    {lang === 'ar' ? 'اختر الدولة والمقاييس' : 'Select Location & Currencies'}
                  </div>
                  {countries.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => selectCountryHandler(c)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono text-gray-300 hover:bg-gray-900 text-left transition-all ${
                        activeCountry.code === c.code ? 'bg-[#63D6B5]/10 text-[#89FFE1]' : ''
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{c.flag}</span>
                        <span>{lang === 'ar' ? c.nameAr : c.nameEn}</span>
                      </span>
                      <span className="opacity-65 text-[10px] border border-gray-800 px-1 py-0.5 rounded">{c.currency}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Bilingual Language Selector */}
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-gray-950 to-gray-900 border border-gray-800 hover:border-gray-700 transition-all text-xs font-bold text-[#89FFE1]"
          >
            <Globe className="w-3.5 h-3.5 text-[#63D6B5]" />
            <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
          </button>

          {/* CTA Link */}
          <a
            href="#contact"
            onClick={() => setCurrentNav('contact')}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 text-xs font-extrabold tracking-tight hover:shadow-lg hover:shadow-[#63D6B5]/20 hover:scale-[1.02] transition-all"
          >
            {t.ctaGetStarted}
          </a>
        </div>

        {/* Mobile Actions (Menu Toggle & Lang & Country Icon) */}
        <div className="flex lg:hidden items-center gap-2">
          
          {/* Quick Lang Switch */}
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="p-2 rounded-full bg-gray-950 border border-gray-800 text-[#89FFE1]"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
          </button>

          {/* Quick Country/Currency Switch */}
          <button
            onClick={() => {
              // Rotate country index
              const currentIndex = countries.findIndex(c => c.code === activeCountry.code);
              const nextIndex = (currentIndex + 1) % countries.length;
              selectCountryHandler(countries[nextIndex]);
            }}
            className="p-2 rounded-full bg-gray-950 border border-gray-800 text-xs font-mono"
            title="Switch Currency/Country"
          >
            {activeCountry.flag}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-gray-950 border border-gray-800 text-gray-400 hover:text-white transition-all"
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 focus:animate-pulse" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[68px] z-45 bg-[#030712] border-t border-gray-900 lg:hidden overflow-y-auto">
          <div className="p-6 space-y-6">
            <nav className="flex flex-col gap-1.5 border-b border-gray-900 pb-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    setCurrentNav(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold tracking-wide transition-all border ${
                    currentNav === item.id 
                      ? 'bg-gradient-to-r from-[#63D6B5]/10 to-[#46C6A5]/10 border-[#63D6B5]/40 text-[#89FFE1]' 
                      : 'border-transparent text-gray-400 hover:bg-gray-900/50 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="space-y-4">
              <div className="text-xs uppercase font-mono text-gray-500">{lang === 'ar' ? 'المنطقة والعملة' : 'Active Scope'}</div>
              <div className="flex items-center justify-between p-3.5 bg-gray-950 border border-gray-900 rounded-xl">
                <span className="text-xs text-gray-400 font-mono">
                  {lang === 'ar' ? 'البلد والعملة النشطة:' : 'Direct Country Scope:'}
                </span>
                <span className="text-xs font-mono font-bold text-[#89FFE1]">
                  {activeCountry.flag} {lang === 'ar' ? activeCountry.nameAr : activeCountry.nameEn} ({currency.code})
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {countries.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => selectCountryHandler(c)}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg border text-[11px] font-mono ${
                      activeCountry.code === c.code 
                        ? 'border-[#63D6B5] bg-[#63D6B5]/5 text-[#89FFE1]' 
                        : 'border-gray-900 bg-gray-950 text-gray-500'
                    }`}
                  >
                    <span>{c.flag}</span>
                    <span>{c.currency}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 pb-12">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 font-bold text-center text-sm shadow-xl shadow-[#63D6B5]/10"
              >
                {t.ctaGetStarted}
              </a>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
