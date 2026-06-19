import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import ServicesSection from './components/ServicesSection';
import PortfolioGrid from './components/PortfolioGrid';
import CaseStudiesSection from './components/CaseStudiesSection';
import PricingSection from './components/PricingSection';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import ToolsSection from './components/ToolsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConversionOverlay from './components/ConversionOverlay';

import { Language, CountryConfig, CurrencyConfig } from './types';
import { translations, countries, currencies } from './data/translations';

export default function App() {
  // Arabic (ar) is Default as explicitly requested
  const [lang, setLang] = useState<Language>('ar');
  const [activeCountry, setActiveCountry] = useState<CountryConfig>(countries[0]); // default Egypt
  const [currency, setCurrency] = useState<CurrencyConfig>(currencies.EGP); // default EGP
  const [currentNav, setCurrentNav] = useState<string>('home');

  // Automatic language & country/currency detection on mount
  useEffect(() => {
    // 1. Language Detection
    const userLocale = navigator.language || '';
    if (userLocale.toLowerCase().includes('en')) {
      setLang('en');
    } else {
      setLang('ar');
    }

    // 2. Country/Currency Detection based on timezone
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (timeZone.includes('Cairo') || userLocale.includes('EG')) {
        // Egypt
        const eg = countries.find(c => c.code === 'EG') || countries[0];
        setActiveCountry(eg);
        setCurrency(currencies.EGP);
      } else if (timeZone.includes('Riyadh') || timeZone.includes('Saudi') || userLocale.includes('SA')) {
        // Saudi Arabia
        const sa = countries.find(c => c.code === 'SA') || countries[1];
        setActiveCountry(sa);
        setCurrency(currencies.SAR);
      } else if (timeZone.includes('Dubai') || timeZone.includes('Asia/Dubai') || userLocale.includes('AE')) {
        // UAE
        const ae = countries.find(c => c.code === 'AE') || countries[2];
        setActiveCountry(ae);
        setCurrency(currencies.AED);
      } else {
        // Other (USD currency default as requested)
        const us = countries.find(c => c.code === 'US') || countries[3];
        setActiveCountry(us);
        setCurrency(currencies.USD);
      }
    } catch (e) {
      // Fallback
      setActiveCountry(countries[0]);
      setCurrency(currencies.EGP);
    }
  }, []);

  // Update body direction on change language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Page Scroll Spy to actively highlight navigation anchors matches
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'services', 'portfolio', 'case-studies', 'pricing', 'about', 'blog', 'tools', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setCurrentNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const t = translations[lang];

  return (
    <div className="relative min-h-screen bg-[#030712] text-white selection:bg-[#63D6B5] selection:text-gray-950 font-sans overflow-x-hidden">
      
      {/* Sticky top header menu bar */}
      <Header
        lang={lang}
        setLang={setLang}
        activeCountry={activeCountry}
        setActiveCountry={setActiveCountry}
        currency={currency}
        setCurrency={setCurrency}
        t={t}
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
      />

      {/* Pages Sections Orchestrated */}
      <main className="relative">
        
        {/* Page 1: Hero view */}
        <Hero3D lang={lang} t={t} setCurrentNav={setCurrentNav} />

        {/* Page 2: Services view */}
        <ServicesSection lang={lang} t={t} setCurrentNav={setCurrentNav} />

        {/* Page 3: Portfolio gallery view */}
        <PortfolioGrid lang={lang} t={t} />

        {/* Page 4: Detailed Case Studies carousel view */}
        <CaseStudiesSection lang={lang} t={t} />

        {/* Page 5: Free Interactive Tools view */}
        <ToolsSection lang={lang} currency={currency} t={t} />

        {/* Page 6: Dynamic Packages Pricing table view */}
        <PricingSection 
          lang={lang} 
          currency={currency} 
          activeCountry={activeCountry} 
          setActiveCountry={setActiveCountry} 
          setCurrency={setCurrency}
          t={t} 
        />

        {/* Page 7: About us narrative with team directory view */}
        <AboutSection lang={lang} t={t} />

        {/* Page 8: Technical blog insights lists view */}
        <BlogSection lang={lang} t={t} />

        {/* Page 9: Form submit and Scheduler scheduler view */}
        <ContactSection lang={lang} t={t} />

      </main>

      {/* Global interactive Footer */}
      <Footer lang={lang} t={t} setCurrentNav={setCurrentNav} />

      {/* Core Conversion Optimization Triggers & Overlay */}
      <ConversionOverlay lang={lang} />

    </div>
  );
}

