import { UI_TRANSLATIONS } from "../translations";

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  lang: "en" | "ar";
}

export default function Footer({ currentPage, setCurrentPage, lang }: FooterProps) {
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const disciplines = lang === "ar" ? [
    "متاجر شوبيفاي المخصصة",
    "ثيمات سلة الإقليمية",
    "تجهيز متاجر زيد للأعمال",
    "هندسة التغليف الملموس",
    "تدقيق معدل التحويل وسرعته"
  ] : [
    "Shopify Store Blueprints",
    "Salla Regional Themes",
    "Zid Omni Setup Cores",
    "Tactile Package Engineering",
    "Conversion Rate Audits"
  ];

  const dirLabels: Record<string, string> = lang === "ar" ? {
    "home": "الرئيسية",
    "services": "الخدمات",
    "portfolio": "أعمالنا",
    "case-studies": "دراسات الحالة",
    "about": "من نحن",
    "pricing": "الأسعار",
    "blog": "المدونة",
    "contact": "تواصل معنا"
  } : {
    "home": "Home",
    "services": "Services",
    "portfolio": "Portfolio",
    "case-studies": "Case Studies",
    "about": "About",
    "pricing": "Pricing",
    "blog": "Blog",
    "contact": "Contact"
  };

  return (
    <footer className="border-t border-zinc-900 bg-black text-white py-16 px-6 lg:px-12 relative overflow-hidden" id="global-footer">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/2 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 text-sm">
        {/* Pitch Branding Left column */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20">
              <span className="text-accent font-bold font-mono text-xs tracking-tighter">V</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-md tracking-wider font-sans">{UI_TRANSLATIONS[lang].brandName}</span>
              <span className="text-[8px] text-accent tracking-[0.3em] uppercase -mt-0.5">{UI_TRANSLATIONS[lang].studio}</span>
            </div>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-normal">
            {UI_TRANSLATIONS[lang].heroSub}
          </p>
          <div className="text-[10px] font-mono text-accent font-bold tracking-widest uppercase">
            {UI_TRANSLATIONS[lang].escrowSecurity}
          </div>
        </div>

        {/* Categories center column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono tracking-widest text-zinc-500 uppercase font-bold">{UI_TRANSLATIONS[lang].coreDisciplines}</h4>
          <div className="flex flex-col space-y-2 text-xs">
            {disciplines.map((disc, idx) => (
              <button 
                key={idx} 
                onClick={() => handleNavClick("services")} 
                className="text-left hover:text-accent text-zinc-400 transition-colors cursor-pointer font-medium"
              >
                {disc}
              </button>
            ))}
          </div>
        </div>

        {/* Directory links */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-mono tracking-widest text-zinc-500 uppercase font-bold">{UI_TRANSLATIONS[lang].directory}</h4>
          <div className="flex flex-col space-y-2 text-xs">
            {["home", "services", "portfolio", "case-studies", "about", "pricing", "blog", "contact"].map((page) => (
              <button
                key={page}
                onClick={() => handleNavClick(page)}
                className="text-left uppercase text-[10px] font-mono tracking-widest text-zinc-400 hover:text-accent transition-colors cursor-pointer font-bold"
                id={`footer-nav-${page}`}
              >
                {dirLabels[page] || page}
              </button>
            ))}
          </div>
        </div>

        {/* Global Offices */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono tracking-widest text-zinc-500 uppercase font-bold">{UI_TRANSLATIONS[lang].globalHq}</h4>
          <div className="space-y-3 text-[11px] text-zinc-400 font-normal leading-normal">
            <div>
              <strong className="text-white font-mono uppercase text-[9px] tracking-widest block font-bold mb-1">{UI_TRANSLATIONS[lang].saHqLabel}</strong>
              {UI_TRANSLATIONS[lang].riyadhAddr}
            </div>
            <div>
              <strong className="text-white font-mono uppercase text-[9px] tracking-widest block font-bold mb-1">{UI_TRANSLATIONS[lang].euOffLabel}</strong>
              {UI_TRANSLATIONS[lang].genevaAddr}
            </div>
          </div>
        </div>
      </div>

      {/* Under copyright bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 gap-4 font-mono">
        <div className="font-bold tracking-wider text-[10px]">
          {UI_TRANSLATIONS[lang].allRights.replace("2026", new Date().getFullYear().toString())}
        </div>
        <div className="flex space-x-6 text-[10px] font-bold">
          <span className="text-accent tracking-widest">// {UI_TRANSLATIONS[lang].compSpeeds}</span>
          <span className="tracking-widest">{UI_TRANSLATIONS[lang].accuracySecured}</span>
        </div>
      </div>
    </footer>
  );
}
