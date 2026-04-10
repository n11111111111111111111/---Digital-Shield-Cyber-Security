
import React from 'react';
import { ARTICLES } from '../constants';
import { Radio, Calendar, ChevronLeft, ArrowUpRight } from 'lucide-react';

const LatestFeed: React.FC = () => {
  // نأخذ أحدث 4 مقالات للعرض في الخلاصة
  const latestArticles = ARTICLES.slice(0, 4);

  return (
    <section className="py-12 bg-cyber-navy/30 border-y border-cyber-powder/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Headline Section */}
          <div className="lg:w-1/3 text-right">
            <div className="flex items-center justify-end gap-3 mb-6">
              <span className="text-xs font-black text-red-500 uppercase tracking-widest flex items-center gap-2">
                <Radio className="w-4 h-4 animate-pulse" />
                تحديثات مباشرة
              </span>
              <div className="h-[1px] w-12 bg-red-500/30"></div>
            </div>
            <h2 className="text-3xl font-black text-white mb-6">خلاصة <span className="text-cyber-sapphire">الاستخبارات الرقمية</span></h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              رصد مستمر لأحدث الثغرات، الهجمات، والتحليلات الأمنية التي يتم نشرها عبر منصتنا على مدار الساعة.
            </p>
            <button className="hidden lg:flex items-center gap-2 text-white bg-cyber-navy border border-cyber-powder/20 px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-cyber-sapphire hover:border-cyber-sapphire transition-all group">
              مشاهدة المركز الإعلامي
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Feed List */}
          <div className="lg:w-2/3 space-y-4">
            {latestArticles.map((article, index) => (
              <div 
                key={article.id} 
                className="group relative flex flex-col sm:flex-row items-center gap-6 bg-cyber-ice/5 border border-cyber-powder/10 p-4 hover:bg-cyber-ice/10 hover:border-cyber-sapphire/20 transition-all duration-300 backdrop-blur-sm"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Thumbnail */}
                <div className="w-full sm:w-32 h-20 shrink-0 overflow-hidden bg-cyber-navy">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-4 mb-2">
                    <span className="text-[10px] font-black text-cyber-sapphire uppercase tracking-tighter mono">
                      {article.category}
                    </span>
                    <span className="text-[10px] text-slate-500 flex items-center gap-1 mono">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-md font-bold text-slate-200 group-hover:text-white transition-colors line-clamp-1">
                    {article.title}
                  </h3>
                </div>

                {/* Action Icon */}
                <div className="shrink-0 p-2 text-slate-700 group-hover:text-cyber-sapphire transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

                {/* Left Border Accent (for RTL) */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-cyber-sapphire transition-colors"></div>
              </div>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden">
            <button className="w-full flex items-center justify-center gap-2 text-white bg-cyber-navy border border-cyber-powder/20 px-6 py-4 text-xs font-black uppercase tracking-widest">
              المركز الإعلامي
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestFeed;
