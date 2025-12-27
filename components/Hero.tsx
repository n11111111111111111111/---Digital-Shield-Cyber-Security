
import React from 'react';
import { ShieldAlert, Network, LayoutGrid } from 'lucide-react';
import { AppView } from '../App';

interface HeroProps {
  onNavigate: (view: AppView) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden pt-32 pb-40 cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-12 animate-pulse">
          <Network className="w-4 h-4" />
          Intelligence Network: Online
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-none tracking-tighter italic">
          دجلة<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">سايبر</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-slate-400 text-xl md:text-2xl mb-16 leading-relaxed font-light">
          استكشف آخر مستجدات الفضاء الرقمي، حلل التهديدات الكبرى، وواكب التحقيقات الاستخباراتية في قلب بغداد.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => onNavigate('home')}
            className="min-w-[220px] bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-5 rounded-xl font-black text-lg transition-all glow-cyan flex items-center justify-center gap-3"
          >
            <LayoutGrid className="w-6 h-6" />
            القائمة الرئيسية
          </button>
          <button 
            onClick={() => onNavigate('home')}
            className="min-w-[220px] bg-slate-900 text-white border border-slate-800 hover:border-cyan-500 px-10 py-5 rounded-xl font-black text-lg transition-all flex items-center justify-center gap-3 group"
          >
            <ShieldAlert className="w-6 h-6 text-cyan-500 group-hover:scale-110 transition-transform" />
            تحذيرات عاجلة
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
