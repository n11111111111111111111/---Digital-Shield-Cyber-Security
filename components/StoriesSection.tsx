
import React from 'react';
import { BookOpen, Clock, ChevronLeft, Sparkles } from 'lucide-react';
import { Story } from '../types';

interface StoriesSectionProps {
  stories: Story[];
}

const StoriesSection: React.FC<StoriesSectionProps> = ({ stories }) => {
  return (
    <section id="stories" className="py-24 bg-slate-950/50 border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-right">
            <div className="inline-flex items-center gap-2 text-cyan-500 text-xs font-black uppercase tracking-[0.3em] mb-4">
              <Sparkles className="w-3 h-3" />
              Digital Chronicles
            </div>
            <h2 className="text-4xl font-black text-white">قصص <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-500">من الخطوط الأمامية</span></h2>
            <p className="text-slate-500 mt-4 max-w-xl">تعلم من تجارب حقيقية وحوادث غيرت مجرى تاريخ الأمن الرقمي الوطني.</p>
          </div>
          <button className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 font-bold transition-colors">
            تصفح الأرشيف الكامل <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="group relative bg-slate-900/40 border border-slate-800 p-8 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden backdrop-blur-md"
            >
              {/* Background Decoration */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl">{story.icon}</span>
                  <span className="px-3 py-1 bg-slate-950 border border-slate-800 text-[10px] text-cyan-400 font-black uppercase tracking-widest rounded-full">
                    {story.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {story.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {story.preview}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-800/50">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    {story.readTime}
                  </div>
                  <button className="inline-flex items-center gap-2 text-xs font-black text-white group/btn">
                    ابدأ القراءة
                    <BookOpen className="w-4 h-4 text-cyan-500 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-slate-800 group-hover:border-cyan-500/50 transition-colors"></div>
            </div>
          ))}
          {stories.length === 0 && (
             <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-900 rounded-3xl">
               <p className="text-slate-600 font-bold">لا توجد قصص منشورة حالياً في هذا القطاع.</p>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
