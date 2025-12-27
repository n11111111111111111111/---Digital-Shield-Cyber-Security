
import React, { useState, useMemo } from 'react';
import { Calendar, User, ArrowLeft, Search, PlusCircle, Filter, Tag, Newspaper, ShieldAlert, BarChart3 } from 'lucide-react';
import { UserRole, Article, CategoryType } from '../types';

interface BlogSectionProps {
  userRole: UserRole;
  articles: Article[];
}

const FeedCard: React.FC<{ article: Article }> = ({ article }) => (
  <article className="group bg-slate-900/30 border border-slate-800/60 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 flex flex-col h-full">
    <div className="relative h-40 overflow-hidden">
      <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
      <div className="absolute top-3 right-3 bg-slate-950/90 border border-cyan-500/20 px-2 py-0.5 text-[8px] text-cyan-400 font-black uppercase rounded">
        {article.subCategory || article.category}
      </div>
    </div>
    <div className="p-5 text-right flex-1 flex flex-col">
      <h3 className="text-md font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-tight">{article.title}</h3>
      <p className="text-slate-400 text-xs mb-4 line-clamp-2 leading-relaxed">{article.excerpt}</p>
      <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-800/40">
         <span className="text-[9px] text-slate-500 font-bold">{article.date}</span>
         <button className="text-cyan-500 hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" /></button>
      </div>
    </div>
  </article>
);

const BlogSection: React.FC<BlogSectionProps> = ({ userRole, articles }) => {
  // تصنيف المقالات حسب المحاور الأساسية بشكل ديناميكي
  const newsArticles = useMemo(() => articles.filter(a => a.category === 'Cyber News' || a.category === 'Cyber Iraq').slice(0, 3), [articles]);
  const attackArticles = useMemo(() => articles.filter(a => a.category === 'Threats & Alerts' || a.category === 'Famous Hacks').slice(0, 3), [articles]);
  const analysisArticles = useMemo(() => articles.filter(a => a.category === 'Reports & Trends' || a.category === 'Opinion & Analysis').slice(0, 3), [articles]);

  return (
    <section id="news" className="py-20 bg-slate-950 border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-right mb-16">
          <h2 className="text-3xl font-black text-white italic">موجز <span className="text-cyan-400">الاستخبارات الرقمية</span></h2>
          <p className="text-slate-500 text-sm mt-2">تقارير مفصلة تغطي كافة جوانب الصراع السيبراني.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Column 1: Latest News */}
          <div className="space-y-8">
            <div className="flex items-center justify-end gap-3 mb-6 border-b border-slate-800 pb-4">
              <span className="text-sm font-black text-white">آخر الأخبار وسايبر العراق</span>
              <Newspaper className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="grid gap-6">
              {newsArticles.map(article => <FeedCard key={article.id} article={article} />)}
              {newsArticles.length === 0 && <p className="text-center text-slate-700 py-10">لا يوجد محتوى حالياً</p>}
            </div>
          </div>

          {/* Column 2: Top Attacks */}
          <div className="space-y-8">
            <div className="flex items-center justify-end gap-3 mb-6 border-b border-slate-800 pb-4">
              <span className="text-sm font-black text-white">أبرز الهجمات</span>
              <ShieldAlert className="w-5 h-5 text-red-500" />
            </div>
            <div className="grid gap-6">
              {attackArticles.map(article => <FeedCard key={article.id} article={article} />)}
              {attackArticles.length === 0 && <p className="text-center text-slate-700 py-10">لا يوجد محتوى حالياً</p>}
            </div>
          </div>

          {/* Column 3: Main Analysis */}
          <div className="space-y-8">
            <div className="flex items-center justify-end gap-3 mb-6 border-b border-slate-800 pb-4">
              <span className="text-sm font-black text-white">أهم التحليلات والتعليم</span>
              <BarChart3 className="w-5 h-5 text-blue-400" />
            </div>
            <div className="grid gap-6">
              {analysisArticles.map(article => <FeedCard key={article.id} article={article} />)}
              {analysisArticles.length === 0 && <p className="text-center text-slate-700 py-10">لا يوجد محتوى حالياً</p>}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;
