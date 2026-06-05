import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Calendar, ArrowRight, X, BookOpen } from "lucide-react";
import { BLOG_POSTS_EN, BLOG_POSTS_AR, UI_TRANSLATIONS } from "../translations";

interface BlogProps {
  lang: "en" | "ar";
}

export default function Blog({ lang }: BlogProps) {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const blogPosts = lang === "ar" ? BLOG_POSTS_AR : BLOG_POSTS_EN;

  const categoriesEn = ["All", "Shopify", "Salla Growth", "Branding", "E-commerce Marketing"];
  const categoriesAr = ["الكل", "شوبيفاي", "نمو سلة", "الهويات البصرية", "تسويق وحلول التحويل"];
  const categories = lang === "ar" ? categoriesAr : categoriesEn;

  const filteredPosts = activeCategoryIndex === 0
    ? blogPosts
    : blogPosts.filter((post) => {
        const catEn = categoriesEn[activeCategoryIndex];
        const catAr = categoriesAr[activeCategoryIndex];
        return post.category === catEn || post.category === catAr || post.id.includes(catEn.toLowerCase());
      });

  const selectedPost = blogPosts.find((p) => p.id === selectedPostId);

  const textAlignment = lang === "ar" ? "text-right" : "text-left";
  const flexDir = lang === "ar" ? "flex-row-reverse" : "flex-row";
  const spaceXRev = lang === "ar" ? "space-x-reverse" : "";

  return (
    <div className={`bg-black text-white min-h-screen pt-28 pb-20 px-6 lg:px-12 ${textAlignment}`} id="blog-view-root">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest rounded-full inline-block font-mono tracking-widest">
              {UI_TRANSLATIONS[lang].intelTitle}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase text-white leading-tight">
            {UI_TRANSLATIONS[lang].growthChron}
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
            {UI_TRANSLATIONS[lang].blogSub}
          </p>
        </div>

        {/* Filter Categories Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-zinc-800 pb-6">
          <div className={`flex items-center space-x-2 text-xs font-mono text-zinc-500 font-bold tracking-widest uppercase ${spaceXRev}`}>
            <BookOpen className="w-4 h-4 text-accent" />
            <span>{lang === "ar" ? "ترتيب وتصفية المقالات:" : "SORT CHROMOSOME:"}</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat, index) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryIndex(index)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeCategoryIndex === index
                    ? "bg-accent text-black font-extrabold shadow-[0_3px_15px_rgba(94,225,181,0.2)]"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
                id={`blog-cat-btn-${index}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post List Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPostId(post.id)}
              className="group bg-zinc-900/60 rounded-3xl overflow-hidden border border-zinc-800 hover:border-accent/30 transition-all duration-300 cursor-pointer flex flex-col justify-between h-96 p-6 glass accent-glow"
            >
              <div className="space-y-4 text-left">
                <div className={`flex justify-between items-center text-[10px] font-mono text-accent ${flexDir}`}>
                  <span className="bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-lg select-none uppercase font-bold text-[9px]">
                    {post.category}
                  </span>
                  <span className={`flex items-center font-bold tracking-wide ${spaceXRev}`}><Clock className="w-3 h-3 mx-1" /> {post.readTime}</span>
                </div>

                <h3 className={`text-xl md:text-2xl font-extrabold text-white group-hover:text-accent tracking-tight uppercase transition-colors duration-300 line-clamp-2 ${lang === "ar" ? "text-right" : "text-left"}`}>
                  {post.title}
                </h3>

                <p className={`text-xs text-zinc-400 leading-relaxed line-clamp-3 font-normal ${lang === "ar" ? "text-right" : "text-left"}`}>
                  {post.excerpt}
                </p>
              </div>

              {/* Author Metrics */}
              <div className={`flex items-center justify-between pt-4 border-t border-zinc-800 mt-4 ${flexDir}`}>
                <div className={`flex items-center space-x-3 font-sans ${spaceXRev}`}>
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-extrabold text-[10px] text-accent font-mono select-none shrink-0">
                    {post.author.avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-white font-sans">{post.author.name}</h4>
                    <p className="text-[9px] text-zinc-500 font-mono font-bold tracking-wider uppercase">{post.author.role}</p>
                  </div>
                </div>
                
                <span className={`text-[10px] font-mono text-accent flex items-center space-x-1 font-bold tracking-wider group-hover:translate-x-1 transition-transform ${spaceXRev}`}>
                  <span>{lang === "ar" ? "قراءة المقال التقني" : "READ ARCHITECTURE"}</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Real-time Detailed Full Article Reader (Modal Panel overlay) */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
              id="blog-article-reader-root"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative flex flex-col accent-glow"
              >
                {/* Header controls */}
                <div className={`p-6 border-b border-zinc-800 bg-zinc-950 flex justify-between items-center sticky top-0 z-10 ${flexDir}`}>
                  <div className={`flex items-center space-x-2 text-xs font-mono text-accent font-bold tracking-wider ${spaceXRev}`}>
                    <BookOpen className="w-4 h-4" />
                    <span>LITERATURE READING ARCHIVE // {selectedPost.category.toUpperCase()}</span>
                  </div>
                  <button
                    onClick={() => setSelectedPostId(null)}
                    className="p-1.5 rounded-lg bg-zinc-900 text-white hover:text-accent hover:bg-zinc-800 transition-colors focus:outline-none cursor-pointer"
                    aria-label="Close article"
                    id="blog-article-close-btn"
                  >
                    <X className="w-5 h-5 cursor-pointer" />
                  </button>
                </div>

                {/* Article Body */}
                <div className="p-8 lg:p-12 space-y-6">
                  <div className={`flex items-center justify-between text-[10px] font-mono text-zinc-500 font-bold tracking-wider uppercase ${flexDir}`}>
                    <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mx-1" /> {selectedPost.date}</span>
                    <span className="flex items-center"><Clock className="w-3.5 h-3.5 mx-1" /> {selectedPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight">
                    {selectedPost.title}
                  </h2>

                  {/* Author credit component */}
                  <div className={`flex items-center space-x-4 p-4 bg-zinc-900/60 rounded-2xl border border-zinc-800 font-sans ${spaceXRev}`}>
                    <div className="w-10 h-10 rounded-full bg-accent/25 flex items-center justify-center text-accent text-xs font-bold font-mono shrink-0">
                      {selectedPost.author.avatar}
                    </div>
                    <div className="text-left font-sans">
                      <h4 className="text-sm font-bold text-white mb-0.5">{selectedPost.author.name}</h4>
                      <p className="text-xs text-zinc-500 font-mono font-bold tracking-wider uppercase">{selectedPost.author.role}</p>
                    </div>
                  </div>

                  <hr className="border-zinc-800" />

                  {/* Body Copy */}
                  <div className="text-zinc-300 text-sm md:text-base leading-relaxed space-y-6 font-normal font-sans">
                    <p className="first-letter:text-4xl first-letter:font-extrabold first-letter:text-accent first-letter:mr-3 first-letter:float-left">
                      {selectedPost.content}
                    </p>
                    <p className="text-left font-sans">
                      {lang === "ar"
                        ? "إن تصميم وتطوير متجر ذو مظهر جذاب لا يكتمل إلا بهندسة متميزة لتقليص زمن الاستجابة لملايين المشترين حول العالم. عند استبعاد الأكواد والاعتماد كلياً على بيئة كود صلبة مبنية بعناية، نستطيع إلغاء الملفات الزائدة ونسرّع المبيعات بصورة مباشرة وعلامة راسخة تفيض ثقة كلياً."
                        : "E-commerce storefronts that rely on heavy multi-tiered themes suffer from extreme layout shifts and script contention. By writing lightweight Liquid schemas or using headless setups built with solid React cores, we can strip away over 70% of unnecessary payload, ensuring that the critical path-to-purchase loads instantaneously under any regional connection."}
                    </p>
                    <p className="bg-accent/5 border border-accent/20 p-5 rounded-2xl text-xs font-mono text-accent leading-normal font-bold">
                      {lang === "ar" 
                        ? "النصيحة الأساسية: استثمر بالمظهر والأداء معاً. العميل يبحث عن السرعة وتفاصيل التميز الفندقي في متجرك. القوالب المكررة تضر بالهوية."
                        : "KEY TAKEAWAY: Prioritize visual performance budgets. High-luxury buyers choose speed and prestige layout. Templetization actively harms AOV."}
                    </p>
                  </div>
                </div>

                {/* Footer read confirmation */}
                <div className="p-6 bg-zinc-950 border-t border-zinc-800 text-center text-[10px] font-mono text-zinc-500 font-bold tracking-widest uppercase">
                  {UI_TRANSLATIONS[lang].brandName} {lang === "ar" ? "بروتوكول الببليوغرافيا والأبحاث المباشرة // نهاية الوثيقة" : "STUDIO DIRECT RESEARCH ARCHIVE // END OF DOCUMENT"}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
