
import React, { useState, useMemo } from 'react';
import { Calendar, User, ArrowLeft, Search, PlusCircle, Filter, Tag, Newspaper, ShieldAlert, BarChart3 } from 'lucide-react';
import { UserRole, Article, CategoryType } from '../types';

// Define the missing BlogSectionProps interface
interface BlogSectionProps {
  userRole: UserRole;
  articles: Article[];
}

const FeedCard: React.FC<{ article: Article }> = ({ article }) => (
  <article className="group bg-cyber-ice/5 border border-cyber-powder/20 rounded-xl overflow-hidden hover:border-cyber-sapphire/40 transition-all duration-300 flex flex-col h-full">
    <div className="relative h-32 overflow-hidden">
      <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
      <div className="absolute top-2 right-2 bg-cyber-navy/90 border border-cyber-sapphire/20 px-2 py-0.5 text-[7px] text-cyber-powder font-black uppercase rounded">
        {article.subCategory || article.category}
      </div>
    </div>
    <div className="p-4 text-right flex-1 flex flex-col">
      <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-cyber-sapphire transition-colors line-clamp-2 leading-tight">{article.title}</h3>
      <p className="text-slate-300 text-[10px] mb-3 line-clamp-2 leading-relaxed">{article.excerpt}</p>
      <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-800/40">
         <span className="text-[8px] text-slate-400 font-bold">{article.date}</span>
         <button className="text-cyber-sapphire hover:text-white transition-colors"><ArrowLeft className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  </article>
);

const BlogSection: React.FC<BlogSectionProps> = ({ userRole, articles }) => {
  const newsArticles = useMemo(() => articles.filter(a => a.category === 'Cyber News' || a.category === 'Cyber Iraq').slice(0, 3), [articles]);
  const attackArticles = useMemo(() => articles.filter(a => a.category === 'Threats & Alerts' || a.category === 'Famous Hacks').slice(0, 3), [articles]);
  const analysisArticles = useMemo(() => articles.filter(a => a.category === 'Reports & Trends' || a.category === 'Opinion & Analysis').slice(0, 3), [articles]);

  return (
    <section id="news" className="py-12 bg-cyber-navy border-t border-cyber-powder/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-right mb-12">
          <h2 className="text-2xl font-black text-white italic">موجز <span className="text-cyber-sapphire">الاستخبارات الرقمية</span></h2>
          <p className="text-slate-400 text-xs mt-1">تقارير مفصلة تغطي كافة جوانب الصراع السيبراني.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="space-y-6">
            <div className="flex items-center justify-end gap-2 mb-4 border-b border-cyber-powder/10 pb-3">
              <span className="text-xs font-black text-white">آخر الأخبار</span>
              <Newspaper className="w-4 h-4 text-cyber-powder" />
            </div>
            <div className="grid gap-4">
              {newsArticles.map(article => <FeedCard key={article.id} article={article} />)}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-end gap-2 mb-4 border-b border-cyber-powder/10 pb-3">
              <span className="text-xs font-black text-white">أبرز الهجمات</span>
              <ShieldAlert className="w-4 h-4 text-red-500" />
            </div>
            <div className="grid gap-4">
              {attackArticles.map(article => <FeedCard key={article.id} article={article} />)}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-end gap-2 mb-4 border-b border-cyber-powder/10 pb-3">
              <span className="text-xs font-black text-white">تحليلات وتعليم</span>
              <BarChart3 className="w-4 h-4 text-cyber-sapphire" />
            </div>
            <div className="grid gap-4">
              {analysisArticles.map(article => <FeedCard key={article.id} article={article} />)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;
