
import React, { useState, useMemo } from 'react';
import { ARTICLES } from '../constants';
import { Calendar, User, ArrowLeft, Tag, Layers, Bot, Search, X } from 'lucide-react';

const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('الكل');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['الكل', 'أخبار', 'تعليم', 'تحليل التهديدات', 'الثغرات', 'تقنية'];

  // خريطة لتحويل أسماء الفئات من العربية إلى الإنجليزية لتطابق البيانات
  const categoryMap: Record<string, string> = {
    'أخبار': 'News',
    'تعليم': 'Education',
    'تحليل التهديدات': 'Threat Analysis',
    'الثغرات': 'Vulnerabilities',
    'تقنية': 'Tech'
  };

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter(article => {
      // فلترة الفئة
      const matchesCategory = activeCategory === 'الكل' || article.category === categoryMap[activeCategory];
      
      // فلترة البحث
      const matchesSearch = 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section id="news" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Controls */}
        <div className="flex flex-col gap-10 mb-16">
          <div className="text-right">
            <h2 className="text-4xl font-black text-white mb-4">آخر <span className="text-cyan-400 italic">التقارير والتحليلات</span></h2>
            <p className="text-slate-400">تابع أحدث التطورات الأمنية من خبراء عالميين.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96 order-2 lg:order-1">
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-500" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث عن مقال..."
                className="w-full bg-slate-900/50 border border-slate-800 text-white text-sm rounded-sm py-3 pr-12 pl-10 focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-600"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 bg-slate-900 p-1 rounded border border-slate-800 overflow-x-auto max-w-full no-scrollbar order-1 lg:order-2">
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-sm text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/20' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article 
                key={article.id} 
                className="group bg-slate-900/50 border border-slate-800 rounded-sm overflow-hidden hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-[10px] text-cyan-400 font-black uppercase tracking-widest">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[10px] text-slate-500 mb-4 mono uppercase">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                    <span className="opacity-20">|</span>
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-800/50">
                    <a href="#" className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm group/link">
                      اقرأ المزيد
                      <ArrowLeft className="w-4 h-4 group-hover/link:-translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-slate-800 rounded-lg">
            <div className="inline-flex p-4 rounded-full bg-slate-900 mb-4">
              <Search className="w-8 h-8 text-slate-700" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">لم يتم العثور على نتائج</h3>
            <p className="text-slate-500 text-sm">حاول البحث بكلمات أخرى أو تغيير الفئة المختارة.</p>
            <button 
              onClick={() => {setSearchTerm(''); setActiveCategory('الكل');}}
              className="mt-6 text-cyan-500 text-sm font-bold hover:underline"
            >
              إعادة ضبط البحث
            </button>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default BlogSection;
