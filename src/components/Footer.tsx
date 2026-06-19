import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle, Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  t: any;
  setCurrentNav: (nav: string) => void;
}

export default function Footer({ lang, t, setCurrentNav }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const navLinks = [
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
    <footer 
      style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
      className="relative z-10 bg-[#030712] border-t border-gray-900 pt-20 pb-8 text-right font-sans overflow-hidden"
    >
      {/* Accent glow corner */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#63D6B5]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Top Segment: Brand & Newsletters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-900">
          
          {/* Brand details */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#home" onClick={() => setCurrentNav('home')} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#63D6B5] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-gray-950" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">{t.brandName}</span>
            </a>
            
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-md text-justify">
              {t.footerDesc}
            </p>

            {/* Social media icons */}
            <div className="flex gap-3 justify-start">
              {[
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" }
              ].map((soc, idx) => {
                const SocIcon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-gray-950 border border-gray-900 text-gray-500 hover:text-[#89FFE1] hover:border-[#63D6B5] transition-all"
                  >
                    <SocIcon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links Hub */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#63D6B5] font-black">
              {lang === 'ar' ? 'الربط السريع للموقع' : 'Site Blueprint'}
            </h4>
            
            <div className="grid grid-cols-2 gap-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setCurrentNav(link.id)}
                  className="text-xs text-gray-400 hover:text-white transition-all font-semibold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Subscribe */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#63D6B5] font-black">
              {t.footerNewsletterTitle}
            </h4>
            <p className="text-xs text-gray-400">
              {lang === 'ar' 
                ? 'اشترك بالنشرة الدورية الفنية لشركائنا لاستقبال أحدث دراسات السيو والأكواد.' 
                : 'Subscribe to our periodic intelligence briefings for secure coding insights.'}
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-[#89FFE1] text-xs font-mono py-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'تم الاشتراك بنجاح!' : 'Subscription active! Thank you.'}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder={t.footerNewsletterPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-1 bg-gray-950 border border-gray-900 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#63D6B5] ${
                    lang === 'ar' ? 'text-right' : 'text-left'
                  }`}
                />
                <button
                  type="submit"
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#63D6B5] to-[#46C6A5] text-gray-950 font-bold text-xs"
                  aria-label="Confirm newsletter subscription"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Lower Segment: Copywriting & security badge */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-[11px] font-mono text-gray-600">
          <div>
            <span>{t.footerCopyright}</span>
          </div>

          {/* Trust and certifications markers */}
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <span>ISO 27001 SECURE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#63D6B5] block" />
            <span>GDPR DATA PROTECTION</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#63D6B5] block" />
            <span>PCI-DSS ENCRYPTED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
