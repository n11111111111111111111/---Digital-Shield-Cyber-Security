
import React from 'react';
import { ShieldAlert, Network, LayoutGrid } from 'lucide-react';
import { AppView } from '../App';

interface HeroProps {
  onNavigate: (view: AppView) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden pt-20 pb-24 cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] font-black uppercase tracking-[0.2em] mb-8 animate-pulse">
          <Network className="w-3.5 h-3.5" />
          Intelligence Network: Online
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tighter italic">
          دجلة<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">سايبر</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg mb-12 leading-relaxed font-medium">
          استكشف آخر مستجدات الفضاء الرقمي، حلل التهديدات الكبرى، وواكب التحقيقات الاستخباراتية في قلب بغداد.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => onNavigate('home')}
            className="min-w-[180px] bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3.5 rounded-lg font-black text-base transition-all glow-cyan flex items-center justify-center gap-2"
          >
            <LayoutGrid className="w-5 h-5" />
            القائمة الرئيسية
          </button>
          <button 
            onClick={() => onNavigate('home')}
            className="min-w-[180px] bg-slate-900 text-white border border-slate-800 hover:border-cyan-500 px-8 py-3.5 rounded-lg font-black text-base transition-all flex items-center justify-center gap-2 group"
          >
            <ShieldAlert className="w-5 h-5 text-cyan-500 group-hover:scale-110 transition-transform" />
            تحذيرات عاجلة
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
