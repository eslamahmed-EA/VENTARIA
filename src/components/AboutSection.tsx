import React from 'react';
import { motion } from 'motion/react';
import { Eye, Shield, Users, Compass, Network, Award, Milestone, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface AboutSectionProps {
  lang: Language;
  t: any;
}

export default function AboutSection({ lang, t }: AboutSectionProps) {
  const values = [
    {
      id: "v1",
      icon: Eye,
      titleEn: "Absolute Visionary Aesthetics",
      titleAr: "الرؤية والجمال الإبداعي المطلق",
      descEn: "We refuse generic corporate visuals. We invent memorable digital statements that demand interest and respect.",
      descAr: "نرفض تماماً التصاميم الجاهزة والقوالب المكررة. نحن نبتكر هوية بصرية مذهلة تحظى باهتمام واحترام السوق فوراً."
    },
    {
      id: "v2",
      icon: Shield,
      titleEn: "Rigid Engineering Integrity",
      titleAr: "النزاهة والمتانة الهندسية الصارمة",
      descEn: "We write clean, strictly typesafe codebases designed for absolute horizontal concurrency and robust defense.",
      descAr: "نكتب برمجيات نظيفة وخالية من الأخطاء والعيوب ومجهزة للتوسع اللانهائي دون أي تنازلات تقنية أو أمنية."
    },
    {
      id: "v3",
      icon: Award,
      titleEn: "Elite Quality Audits",
      titleAr: "ضمان الجودة ومؤشرات Lighthouse",
      descEn: "Every page in our system must score above 95% on Google speed tests, minimizing visitor leakage ratios.",
      descAr: "يجب أن تحقق كافة واجهات الأنظمة سرعة تحميل فائقة وسكوراً أعلى من 95% لإلغاء أي تسريب في المبيعات."
    }
  ];

  const team = [
    {
      id: "t1",
      nameEn: "Faisal bin Ahmed",
      nameAr: "م. فيصل بن أحمد",
      roleEn: "Founder & Chief Technology Architect",
      roleAr: "المؤسس والرئيس التقني للتطوير والمطابقة",
      bioEn: "M.Sc. in Distributed Cloud Systems from Stanford; over 12 years coding high-stakes transactional pipelines.",
      bioAr: "ماجستير في الحوسبة السحابية من جامعة ستانفورد؛ خبرة تزيد عن ١٢ عاماً في معالجة البرمجيات وهندسة الخوادم.",
      image: "https://picsum.photos/seed/teammember1/300/300"
    },
    {
      id: "t2",
      nameEn: "Sarah Al-Ghamdi",
      nameAr: "م. سارة الغامدي",
      roleEn: "Principal UX/UI Experience Director",
      roleAr: "مديرة التصميم وتجارب المستخدم الإبداعية",
      bioEn: "Former director at creative boutiques in Geneva; specialized in high-end micro-interactions layout designs.",
      bioAr: "خبيرة سابقة في استوديوهات جنيف السويسرية تخصصت في هندسة الحركة المجهرية وسيكولوجية تلوين القوالب الفاخرة.",
      image: "https://picsum.photos/seed/teammember2/300/300"
    },
    {
      id: "t3",
      nameEn: "Dr. Sherif Abdel-Moaty",
      nameAr: "د. شريف عبد المعطي",
      roleEn: "Chief Cyber Security Inspector",
      roleAr: "مدير البنية التحتية والسلامة السيبرانية",
      bioEn: "Doctorate in Cryptographic Algorithms; specializes in securing payload transfers and database defense setups.",
      bioAr: "دكتوراه في خوارزميات التشفير وأمن الشبكات؛ يتولى رصد وفحص الثغرات وحوكمة بوابات الدفع وقواعد البيانات.",
      image: "https://picsum.photos/seed/teammember3/300/300"
    }
  ];

  const timeline = [
    {
      year: "2020",
      titleEn: "Creative Lab Founded",
      titleAr: "تأسيس مختبر فينتاريا التقني",
      descEn: "Launched as a specialized boutique cloud engineering lab focusing on custom APIs routing.",
      descAr: "بدأنا كمختبر مالي وهندسي لتطوير وتوفير واجهات برمجة التطبيقات APIs والحلول السحابية المعقدة في القاهرة."
    },
    {
      year: "2022",
      titleEn: "Gulf Expansion (Riyadh Hub)",
      titleAr: "التمدد الخليجي (افتتاح فرع الرياض)",
      descEn: "Officially launched our secondary office registry in Riyadh to service corporate GCC partners directly.",
      descAr: "أطلقنا فرعنا الرئيسي الثاني في مدينة الرياض للإشراف المباشر على مشاريع كبار الشركاء بالمملكة الخليجية."
    },
    {
      year: "2024",
      titleEn: "Lighthouse Gold Award Winner",
      titleAr: "جائزة التميز المعماري للسرعة",
      descEn: "Won top design boutique honor for having the fastest loading eCommerce setups in the region.",
      descAr: "تتويج الشركة كأفضل وكالة برمجيات تطور الأنظمة الأسرع تحميلاً توازياً مع دقة التصميم في الشرق الأوسط."
    },
    {
      year: "2026",
      titleEn: "The AI & Next Gen Matrix Launch",
      titleAr: "حقبة Next.JS وأنظمة الـ Realtime",
      descEn: "Spearheading serverless headless database networks across all regional enterprise clients, keeping systems rock-fast.",
      descAr: "نقود الجيل الأحدث والأرقى لأنظمة الـ ERP والـ Headless للتجارة الإلكترونية مستفيدين من البنى بدون سيرفر."
    }
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-gradient-to-b from-[#030712] via-[#07111D] to-[#030712] border-t border-gray-900/40">
      
      {/* Visual neon elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#63D6B5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#63D6B5]/10 border border-[#63D6B5]/30 text-[#89FFE1] text-xs font-mono uppercase tracking-wide mb-4">
            <Compass className="w-3.5 h-3.5 text-[#63D6B5]" />
            {lang === 'ar' ? 'من نحن وقيم البناء فينتاريا' : 'Elite Engineering Persona'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {lang === 'ar' ? 'استوديو فينتاريا.. هندسة برمجية بلا حدود' : 'VENTARIA.. Engineering Beyond Borders'}
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            {lang === 'ar' 
              ? 'نحن لا نكتب أكواداً وحسب، بل نصنع هوية برمجية تدوم وتبث الثقة، ونشرف على تحولك السحابي المتكامل بكامل الدقة.' 
              : 'Discover how we design high-security cloud layouts and gorgeous transactional systems that secure conversions.'}
          </p>
        </div>

        {/* Narrative & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Main Story Text */}
          <div 
            style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
            className="lg:col-span-6 space-y-6 text-right"
          >
            <h3 className="text-2xl font-bold text-white leading-tight">
              {lang === 'ar' ? 'قصة نجاح مبنية على الشفافية وهندسة الكود' : 'Our Legacy of Precision Coding'}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed text-justify">
              {lang === 'ar' 
                ? 'تأسست شركة فينتاريا للحلول الرقمية على يد نخبة من المطورين ومهندسي الأنظمة لتغيير الصورة النمطية السائدة لمواقع الويب المعطلة والبطيئة والمليئة بالثغرات في المنطقة العربية. أخذنا على عاتقنا تقديم برمجيات ممتازة فائقة السرعة، مصممة خصيصاً بلغة React فائقة التجاوب وبنيات مستخدم UX تخلب الألباب وتدعو للشراء وحسم العمل.'
                : 'VENTARIA was founded by elite distributed systems architects to redefine web standards across the Middle East. By replacing generic, bottlenecked PHP sites with blistering-fast React systems, we help corporations protect active conversions. Today, our regional clusters power thousands of real-time transactions daily with perfect uptime.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-900 font-mono text-center">
              <div className="p-4 bg-[#07111D] border border-gray-900 rounded-xl">
                <div className="text-[#63D6B5] font-black text-xl">100%</div>
                <div className="text-[9px] text-gray-500 mt-1 uppercase">{lang === 'ar' ? 'نسبة الامتثال للأمان' : 'CYBERPASS SECURITY'}</div>
              </div>
              <div className="p-4 bg-[#07111D] border border-gray-900 rounded-xl">
                <div className="text-white font-black text-xl">95+</div>
                <div className="text-[9px] text-gray-500 mt-1 uppercase">{lang === 'ar' ? 'مؤشر أداء السرعة' : 'LIGHTHOUSE SPEED'}</div>
              </div>
              <div className="p-4 bg-[#07111D] border border-gray-900 rounded-xl">
                <div className="text-[#89FFE1] font-black text-xl">ZERO</div>
                <div className="text-[9px] text-gray-500 mt-1 uppercase">{lang === 'ar' ? 'ثغرات معمارية' : 'ARCHITECTURAL BLOAT'}</div>
              </div>
            </div>
          </div>

          {/* Core Values blocks */}
          <div className="lg:col-span-6 space-y-4">
            {values.map((v) => {
              const ValIcon = v.icon;
              return (
                <div
                  key={v.id}
                  className="flex gap-4 p-5 rounded-2xl border border-gray-900 bg-[#07111D]/40 backdrop-blur"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#63D6B5]/10 border border-[#63D6B5]/30 flex items-center justify-center text-[#89FFE1] shrink-0">
                    <ValIcon className="w-5 h-5" />
                  </div>
                  <div 
                    style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
                    className="text-right"
                  >
                    <h4 className="text-sm font-bold text-white mb-1">
                      {lang === 'ar' ? v.titleAr : v.titleEn}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed text-justify">
                      {lang === 'ar' ? v.descAr : v.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Company Journey Timeline section */}
        <div className="mb-24">
          <h3 className="text-center text-lg font-mono text-[#89FFE1] mb-12 flex items-center justify-center gap-1.5 uppercase tracking-wider">
            <Milestone className="w-4 h-4 text-[#63D6B5]" />
            <span>{lang === 'ar' ? 'خط رحلة التطور والنجاح التقني لفينتاريا' : 'VENTARIA Historical Project milestones'}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-[45px] left-0 right-0 h-0.5 bg-gray-900 z-0" />
            
            {timeline.map((point, idx) => (
              <div 
                key={idx}
                style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
                className="relative z-10 text-right bg-gray-950 p-6 rounded-2xl border border-gray-900 hover:border-gray-800 transition"
              >
                <div className="inline-block px-3 py-1 bg-[#63D6B5]/10 text-[#89FFE1] border border-[#63D6B5]/30 rounded text-xs font-mono font-black mb-4">
                  {point.year}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">
                  {lang === 'ar' ? point.titleAr : point.titleEn}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed text-justify">
                  {lang === 'ar' ? point.descAr : point.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-center text-lg font-mono text-[#89FFE1] mb-12 flex items-center justify-center gap-1.5 uppercase tracking-wider">
            <Users className="w-4 h-4 text-[#63D6B5]" />
            <span>{lang === 'ar' ? 'فريق المهندسين ومدراء فينتاريا النخبة' : 'Our Board of Directors & Architects'}</span>
          </h3>

          <div 
            style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right"
          >
            {team.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl border border-gray-900 bg-[#07111D]/40 backdrop-blur p-6 space-y-4 text-center hover:border-gray-800 transition-all"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-[#63D6B5] shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.nameEn} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    {lang === 'ar' ? member.nameAr : member.nameEn}
                  </h4>
                  <div className="text-xs text-[#63D6B5] font-mono mt-1 font-semibold">
                    {lang === 'ar' ? member.roleAr : member.roleEn}
                  </div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed text-center px-2">
                  {lang === 'ar' ? member.bioAr : member.bioEn}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
