
import React from 'react';
import { Terminal, ShieldCheck, Zap, Radio } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-40 cyber-grid transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 dark:from-slate-950 via-transparent to-slate-50 dark:to-slate-950"></div>
      
      {/* Animated Scan Line */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10">
        <div className="h-full w-[1px] bg-cyan-600 dark:bg-cyan-400 absolute left-1/2 -translate-x-1/2 animate-scan"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-sm bg-cyan-500/5 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10 animate-pulse">
          <Radio className="w-4 h-4" />
          Intel Gathering System: Active
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tighter italic">
          حماية <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 dark:from-cyan-400 via-blue-600 dark:via-blue-500 to-cyan-600 dark:to-cyan-400 animate-gradient-x">أفقك الرقمي</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400 text-xl md:text-2xl mb-16 leading-relaxed font-light">
          الدرع الرقمي هو منصتك المركزية لاستخبارات التهديدات، تتبع الحوادث العالمية الحية، والتحليل الأمني المتقدم المدعوم بالذكاء الاصطناعي.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="min-w-[220px] bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white px-10 py-5 rounded-sm font-black text-lg transition-all flex items-center justify-center gap-3 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 group backdrop-blur-md shadow-sm dark:shadow-none">
            <Terminal className="w-6 h-6 text-cyan-600 dark:text-cyan-500 group-hover:animate-pulse" />
            استشارة ذكية
          </button>
          
          <a href="#threats" className="min-w-[220px] bg-cyan-600 hover:bg-cyan-700 dark:hover:bg-cyan-500 text-white px-10 py-5 rounded-sm font-black text-lg transition-all flex items-center justify-center gap-3 glow-cyan group">
            <ShieldCheck className="w-6 h-6 group-hover:scale-110 transition-transform" />
            رصد التهديدات
          </a>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { left: 0; opacity: 0; }
          50% { opacity: 0.5; }
          100% { left: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
