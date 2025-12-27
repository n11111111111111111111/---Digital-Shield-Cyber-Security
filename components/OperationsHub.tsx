
import React from 'react';
import { Newspaper, Zap, BarChart3, ArrowUpLeft, Activity, ShieldAlert, Cpu } from 'lucide-react';

const MAIN_PILLARS = [
  {
    title: 'آخر الأخبار',
    subtitle: 'Live Feed',
    desc: 'تغطية فورية وشاملة للأحداث الرقمية الجارية على الساحة العالمية والوطنية.',
    icon: Newspaper,
    color: 'text-cyan-400',
    glow: 'shadow-cyan-500/20',
    link: '#news'
  },
  {
    title: 'أبرز الهجمات',
    subtitle: 'Threat Alerts',
    desc: 'رصد وتحليل لأخطر الهجمات السيبرانية النشطة، برمجيات الفدية، وحملات التصيد.',
    icon: ShieldAlert,
    color: 'text-red-400',
    glow: 'shadow-red-500/20',
    link: '#news'
  },
  {
    title: 'أهم التحليلات',
    subtitle: 'Strategic Analysis',
    desc: 'قراءة معمقة في التقارير الأمنية، اتجاهات التهديدات المستقبلية، ودراسات الحالة.',
    icon: BarChart3,
    color: 'text-blue-400',
    glow: 'shadow-blue-500/20',
    link: '#news'
  }
];

const OperationsHub: React.FC = () => {
  return (
    <section id="hub" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.08),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
             <Activity className="w-4 h-4 animate-pulse" />
             Tigris Cyber Main Dashboard
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 italic">القائمة <span className="text-cyan-400">الرئيسية</span></h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed">المحاور الثلاثة الأساسية لاستخبارات دجلة سايبر الرقمية.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {MAIN_PILLARS.map((item, idx) => (
            <a 
              key={idx} 
              href={item.link}
              className={`group relative p-10 bg-slate-900/40 border border-slate-800 rounded-3xl hover:bg-slate-900 hover:border-cyan-500/40 transition-all duration-700 flex flex-col items-center text-center overflow-hidden shadow-2xl ${item.glow}`}
            >
              {/* Background Glow Overlay */}
              <div className={`absolute -inset-2 opacity-0 group-hover:opacity-10 transition-opacity blur-3xl rounded-full ${item.color.replace('text', 'bg')}`}></div>
              
              <div className={`w-24 h-24 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center ${item.color} mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner`}>
                <item.icon className="w-10 h-10" />
              </div>
              
              <div className="relative">
                <span className={`block text-[10px] font-black uppercase tracking-[0.4em] mb-2 ${item.color}`}>{item.subtitle}</span>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-white transition-colors">{item.title}</h3>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-10 font-medium">
                {item.desc}
              </p>
              
              <div className="mt-auto flex items-center gap-3 text-xs font-black uppercase text-slate-500 group-hover:text-cyan-400 transition-colors tracking-widest">
                <ArrowUpLeft className="w-4 h-4 group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform" />
                استعراض البيانات
              </div>

              {/* Holographic Decoration */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-slate-800 rounded-tl-3xl group-hover:border-cyan-500/30 transition-all"></div>
              <div className="absolute bottom-4 right-4 text-[8px] font-black text-slate-800 group-hover:text-cyan-900/20 transition-colors uppercase mono tracking-tighter">
                Sector_{idx + 1}_Secure
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationsHub;
