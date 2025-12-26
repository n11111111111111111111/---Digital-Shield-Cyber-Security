
import React, { useState } from 'react';
import { ARTICLES } from '../constants';
import { Calendar, User, ArrowLeft, Tag, Layers, Bot } from 'lucide-react';

const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('الكل');

  const categories = ['الكل', 'أخبار', 'تعليم', 'تحليل التهديدات', 'الثغرات', 'تقنية'];

  return (
    <section id="news" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-right">
            <h2 className="text-4xl font-black text-white mb-4">آخر <span className="text-cyan-400 italic">التقارير والتحليلات</span></h2>
            <p className="text-slate-400">تابع أحدث التطورات الأمنية من خبراء عالميين.</p>
          </div>
          <div className="flex gap-2 bg-slate-900 p-1 rounded border border-slate-800 overflow-x-auto max-w-full no-scrollbar">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article key={article.id} className="group bg-slate-900/50 border border-slate-800 rounded-sm overflow-hidden hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <a href="#" className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm group/link">
                    اقرأ المزيد
                    <ArrowLeft className="w-4 h-4 group-hover/link:-translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
