import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, Clock, Share2, Search, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Language, BlogPost } from '../types';
import { blogPosts } from '../data/portfolio';

interface BlogSectionProps {
  lang: Language;
  t: any;
}

export default function BlogSection({ lang, t }: BlogSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');

  const categories = [
    { id: 'all', en: 'All Articles', ar: 'جميع الاستطلاعات والتقارير' },
    { id: 'Programming', en: 'Programming', ar: 'برمجة وأكواد' },
    { id: 'Web Development', en: 'Web Dev', ar: 'تطوير الويب' },
    { id: 'eCommerce', en: 'eCommerce', ar: 'تجارة إلكترونية' },
    { id: 'SEO', en: 'SEO & Growth', ar: 'سيو وتسويق' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const titleMatch = (lang === 'ar' ? post.titleAr : post.title).toLowerCase().includes(searchTerm.toLowerCase());
    const catMatch = selectedCat === 'all' || post.category === selectedCat;
    return titleMatch && catMatch;
  });

  return (
    <section id="blog" className="relative py-28 overflow-hidden bg-[#030712] border-t border-gray-900/50">
      
      {/* Light highlights */}
      <div className="absolute top-1/2 right-[10%] w-[350px] h-[350px] bg-[#63D6B5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#63D6B5]/10 border border-[#63D6B5]/30 text-[#89FFE1] text-xs font-mono uppercase tracking-wide mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#63D6B5]" />
            {lang === 'ar' ? 'البوابة المعرفية ونشرات فينتاريا' : 'Intellectual Publishing Hub'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {lang === 'ar' ? 'مدونة فينتاريا.. ثقافة تقنية متفوقة' : 'Ventaria Digital Intelligence Reports'}
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            {lang === 'ar' 
              ? 'نكتب ونشارك كبار المطورين أحدث اتجاهات الويب، والـ Headless للتجارة وثغرات الأمان والنمو المادي.' 
              : 'Our chief architects share cutting-edge insights on cloud scalability, transaction conversions, and SEO audits.'}
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div 
          style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
          className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 border-b border-gray-900 pb-8 text-right"
        >
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  selectedCat === cat.id
                    ? 'bg-[#63D6B5]/20 border-[#63D6B5] text-[#89FFE1]'
                    : 'bg-gray-950 border-gray-900 text-gray-400 hover:text-white'
                }`}
              >
                {lang === 'ar' ? cat.ar : cat.en}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 ${lang === 'ar' ? 'right-3' : 'left-3'}`} />
            <input
              type="text"
              placeholder={lang === 'ar' ? 'ابحث عن عناوين أو حلول...' : 'Search articles...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full bg-gray-950 border border-gray-900 rounded-xl py-2.5 text-xs text-white focus:outline-none focus:border-[#63D6B5] ${
                lang === 'ar' ? 'pr-9 pl-4 text-right' : 'pl-9 pr-4 text-left'
              }`}
            />
          </div>
        </div>

        {/* Blog Grid listing */}
        <div 
          style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between rounded-2xl border border-gray-900 bg-[#07111D]/40 backdrop-blur shadow-xl overflow-hidden hover:border-gray-800 transition-all text-right"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-950">
                  <img
                    src={post.image}
                    alt={lang === 'ar' ? post.titleAr : post.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Category badging */}
                  <div className="absolute bottom-3 right-3 bg-gray-950/80 px-2.5 py-0.5 rounded text-[9px] font-mono text-[#89FFE1] uppercase tracking-wider border border-gray-900">
                    {lang === 'ar' ? post.categoryAr : post.category}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  {/* Date & read time */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{lang === 'ar' ? post.readTimeAr : post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-[#63D6B5] transition-colors leading-snug">
                    {lang === 'ar' ? post.titleAr : post.title}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-2">
                    {lang === 'ar' ? post.excerptAr : post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read button info */}
              <div className="p-5 pt-0 border-t border-gray-900 mt-4 flex items-center justify-between text-[11px] font-bold text-gray-400">
                <span className="group-hover:text-[#89FFE1] transition-transform">
                  {lang === 'ar' ? 'اقرأ التقرير الكامل  ↗' : 'Read Full Report ↗'}
                </span>
                <button className="p-2 text-gray-500 hover:text-white" title="Share article URL">
                  <Share2 className="w-3.5 h-3.5" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
