
import React from 'react';
import { Terminal, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-16 pb-32 cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 animate-pulse">
          <Zap className="w-4 h-4" />
          مستقبل الحماية يبدأ من هنا
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
          حماية <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">أفقك الرقمي</span> <br />
          ضد تهديدات الغد
        </h1>
        
        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12 leading-relaxed">
          الدرع الرقمي هو وجهتك الأساسية لتعلم الأمن السيبراني، تتبع الحوادث العالمية، والحصول على استشارات أمنية مدعومة بالذكاء الاصطناعي.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-2 glow-cyan group">
            <ShieldCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
            ابدأ التعلم
          </button>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-2 border border-slate-700">
            <Terminal className="w-5 h-5" />
            استشارة ذكية
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-slate-800 pt-12">
          <div>
            <div className="text-3xl font-black text-white glow-text">500K+</div>
            <div className="text-slate-500 text-sm mt-1 uppercase font-bold tracking-wider">تهديد تم رصده</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white glow-text">150+</div>
            <div className="text-slate-500 text-sm mt-1 uppercase font-bold tracking-wider">دورة احترافية</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white glow-text">50K+</div>
            <div className="text-slate-500 text-sm mt-1 uppercase font-bold tracking-wider">خبير نشط</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white glow-text">24/7</div>
            <div className="text-slate-500 text-sm mt-1 uppercase font-bold tracking-wider">دعم فني</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
