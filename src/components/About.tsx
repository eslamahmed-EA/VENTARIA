import { motion } from "motion/react";
import { ShieldCheck, Award, Zap, Globe, Target, Eye } from "lucide-react";
import { UI_TRANSLATIONS } from "../translations";

interface AboutProps {
  setCurrentPage: (page: string) => void;
  lang: "en" | "ar";
}

export default function About({ setCurrentPage, lang }: AboutProps) {
  const coreValues = lang === "ar" ? [
    {
      icon: <Award className="w-5 h-5 text-accent" />,
      title: "معايير تمايز لا تقارن",
      desc: "نحن لا نؤمن بالنماذج الجاهزة أو الأداء المتواضع. نصمم ونبني واجهاتك الرقمية بهندسة تفصيلية صارمة ودقة متناهية."
    },
    {
      icon: <Zap className="w-5 h-5 text-accent" />,
      title: "البرمجة اليدوية وسرعة الحركة",
      desc: "القوالب الجاهزة بطيئة ومثقلة بالأكواد. كل سطر كود نكتبه يدوياً ليجتاز السرعة القياسية وتفوق 95+ في مؤشرات لايت هاوس."
    },
    {
      icon: <Globe className="w-5 h-5 text-accent" />,
      title: "قيادة ريادية موجهة لمنطقة الخليج",
      desc: "نفهم البيئة الاستهلاكية والاقتصادية الخليجية - بما يشمل الخطوط العربية الراقية وبوابات الدفع (مدى) والخدمات الشحن المحلية."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      title: "أمان مالي واتفاقيات سرية NDA",
      desc: "كافة إستراتيجيات العمل محاطة بمؤشرات نمو حاسمة، وتواريخ تقويمية واضحة، وحقوق الـ NDA المصدقة وخطط فحص الأداء المستمر."
    }
  ] : [
    {
      icon: <Award className="w-5 h-5 text-accent" />,
      title: "Unyielding Standard",
      desc: "We do not believe in standard guidelines or mediocre performance. We design digital assets with extreme grid discipline and pixel-perfect detail."
    },
    {
      icon: <Zap className="w-5 h-5 text-accent" />,
      title: "Velocity is Custom-Code",
      desc: "Templeted code is bloated and sluggish. Every line we write is custom compiled to score a perfect 95+ on Google Lighthouse audits."
    },
    {
      icon: <Globe className="w-5 h-5 text-accent" />,
      title: "GCC Regional Leadership",
      desc: "We understand localized GCC commerce on a biological level—integrating flawless bilingual Arabic typography, Mada processors, and shipping logistics."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      title: "Complete Enterprise Escrow",
      desc: "All client strategies are built around rock-solid ROI parameters, strict transparency calendars, legal NDAs, and ongoing code audits."
    }
  ];

  const executiveTeam = lang === "ar" ? [
    {
      name: "جان-بيير دوراند",
      role: "المؤسس والمدير الإبداعي",
      bio: "صمم سابقاً واجهات وأنظمة بصرية لصالونات الساعات الفاخرة في باريس وجنيف قبل تأسيس رؤية فينتاريا الكبرى.",
      avatar: "ج د"
    },
    {
      name: "طارق فاروق",
      role: "الرئيس التنفيذي للتكنولوجيا",
      bio: "خبرة تفوق 12 عام في تطوير البنية البرمجية ونواة المتاجر. متخصص رائد في حلول شوبيفاي بلس والأنظمة اللامركزية هيدليس.",
      avatar: "ط ف"
    },
    {
      name: "ياسمين الأزهر",
      role: "رئيسة اتجاه التصميم لأسواق الخليج",
      bio: "متخصصة ومستشارة في تدوير وضبط روعة الخطوط العربية وعمارة حركات الشراء المخصصة لعملاء الرفاهية بالخليج.",
      avatar: "ي أ"
    }
  ] : [
    {
      name: "Jean-Pierre Durand",
      role: "Founder & Creative Director",
      bio: "Formerly designing visual structures for Parisian luxury watchmakers before establishing Ventaria's master vision.",
      avatar: "JD"
    },
    {
      name: "Tariq Farooq",
      role: "Chief Technology Officer",
      bio: "Over twelve years code-blueprinting e-commerce cores. Lead specialist in Shopify Plus and advanced headless web setups.",
      avatar: "TF"
    },
    {
      name: "Yasmine Al-Azhar",
      role: "Lead UI/UX Regional Designer",
      bio: "Specialist in elite custom Arabic typography and GCC-centric luxury consumer experiences.",
      avatar: "YA"
    }
  ];

  const textAlignment = lang === "ar" ? "text-right" : "text-left";
  const layoutCol = lang === "ar" ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row";

  return (
    <div className={`bg-black text-white min-h-screen pt-28 pb-20 px-6 lg:px-12 ${textAlignment}`} id="about-view-root">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block">
              {UI_TRANSLATIONS[lang].aboutHeroLabel}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase text-white leading-tight">
            {UI_TRANSLATIONS[lang].aboutHeroTitle} <br />
            <span className="text-accent">{UI_TRANSLATIONS[lang].aboutHeroTitleAccent}</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
            {UI_TRANSLATIONS[lang].aboutHeroSub}
          </p>
        </div>

        {/* Our Story Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center border-t border-zinc-900 pt-16">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block">
                {UI_TRANSLATIONS[lang].corporateChronicle}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white leading-tight">
              {UI_TRANSLATIONS[lang].howBornTitle}
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
              {lang === "ar" ? UI_TRANSLATIONS[lang].howBornP1 : "Founded in 2021 by e-commerce designer Jean-Pierre Durand and system engineer Tariq Farooq, Ventaria Studio arose from a deep irritation with slow, generic themes holding back high-end DTC brands."}
            </p>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
              {lang === "ar" ? UI_TRANSLATIONS[lang].howBornP2 : "We realized that premium brands were pouring massive capital into paid commercials to drive traffic to storefronts that looked like cheap duplicates of each other, loading sluggishly. Our absolute mandate is to combine world-class Swiss design aesthetics with lightning-fast custom coding."}
            </p>
          </div>

          <div className="lg:col-span-6 border border-zinc-800 bg-zinc-900/60 p-8 lg:p-12 rounded-3xl relative overflow-hidden flex flex-col justify-between h-96 glass accent-glow">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-4">{UI_TRANSLATIONS[lang].theIntellectualMatrix}</span>
            
            <div className="space-y-4">
              <div className={`flex items-center space-x-3 text-white ${lang === 'ar' ? 'space-x-reverse' : ''}`}>
                <Target className="w-5 h-5 text-accent" />
                <span className="text-xs font-mono uppercase tracking-widest font-bold text-white">{UI_TRANSLATIONS[lang].coreMissionTitle}</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                {UI_TRANSLATIONS[lang].coreMissionDesc}
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-zinc-800">
              <div className={`flex items-center space-x-3 text-white ${lang === 'ar' ? 'space-x-reverse' : ''}`}>
                <Eye className="w-5 h-5 text-accent" />
                <span className="text-xs font-mono uppercase tracking-widest font-bold text-white">{UI_TRANSLATIONS[lang].coreVisionTitle}</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                {UI_TRANSLATIONS[lang].coreVisionDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Values */}
        <div className="space-y-12 border-t border-zinc-900 pt-16">
          <div className="space-y-2">
            <div>
              <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block">
                {UI_TRANSLATIONS[lang].coreCommitments}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white">{UI_TRANSLATIONS[lang].coreOurValues}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col justify-between space-y-4 glass accent-glow text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded bg-white/5 flex items-center justify-center text-accent shrink-0">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight">{val.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-12 border-t border-zinc-900 pt-16">
          <div className="text-center space-y-2">
            <div>
              <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block">
                {UI_TRANSLATIONS[lang].intellectualGenerals}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white leading-tight">{UI_TRANSLATIONS[lang].meetLeaders}</h2>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{UI_TRANSLATIONS[lang].meetLeadersSub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {executiveTeam.map((member, idx) => (
              <div
                key={idx}
                className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center space-y-4 glass accent-glow"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl font-bold font-mono shadow-inner">
                  {member.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-none">{member.name}</h3>
                  <span className="text-[10px] text-accent tracking-widest font-mono uppercase mt-1.5 inline-block">{member.role}</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal max-w-xs">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Action Banner */}
        <div className={`relative rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 lg:p-12 flex justify-between items-center gap-6 overflow-hidden glass accent-glow ${layoutCol}`}>
          <div className="absolute top-0 right-0 w-[150px] h-full bg-accent/2 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-2 flex-grow max-w-2xl text-left">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{UI_TRANSLATIONS[lang].establishSecurity}</span>
            <h4 className="text-xl font-bold font-sans text-white uppercase tracking-tight leading-snug">{UI_TRANSLATIONS[lang].guaranteeSpeed}</h4>
            <p className="text-xs text-zinc-400">{UI_TRANSLATIONS[lang].refundPolicy}</p>
          </div>
          <button
            onClick={() => {
              setCurrentPage("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center justify-center space-x-2 px-8 h-14 rounded-lg bg-accent text-black text-xs font-bold uppercase tracking-wider hover:scale-103 transition-transform cursor-pointer shrink-0"
            id="about-cta-btn"
          >
            <span>{UI_TRANSLATIONS[lang].bookLegalConsult}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
