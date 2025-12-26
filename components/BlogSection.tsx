
import React, { useState } from 'react';
import { ARTICLES } from '../constants';
import { Calendar, User, ArrowRight, Tag, Layers, Bot } from 'lucide-react';

const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'News', 'Education', 'Threat Analysis', 'Vulnerabilities', 'Tech'];

  const filteredArticles = activeCategory === 'All' 
    ? ARTICLES 
    : ARTICLES.filter(article => article.category === activeCategory);

  return (
    <section id="news" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-left">
            <h2 className="text-4xl font-black text-white mb-4">Latest <span className="text-cyan-400 italic">Insights & Reports</span></h2>
            <p className="text-slate-400">Keep up with the latest security developments from global experts.</p>
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

        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="group bg-slate-900/50 border border-slate-800 rounded-sm overflow-hidden hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-cyan-600/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold rounded-sm flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {article.author}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors h-14 overflow-hidden">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed h-10">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <a href="#" className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm group/link">
                      Read Full Report
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <button title="Bookmark" className="text-slate-600 hover:text-cyan-400 transition-colors">
                      <Layers className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border-2 border-dashed border-slate-800 rounded-xl">
             <Bot className="w-16 h-16 text-slate-700 mx-auto mb-4" />
             <p className="text-slate-500 font-bold">No articles available in this category yet.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <button className="px-12 py-4 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10 transition-all font-bold tracking-widest uppercase flex items-center gap-2 mx-auto group">
            View Archive
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
