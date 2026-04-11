
import React from 'react';
import { Newspaper, Zap, BarChart3, ArrowUpLeft, Activity, ShieldAlert, Cpu } from 'lucide-react';

const MAIN_PILLARS = [
  {
    title: 'آخر الأخبار',
    subtitle: 'Live Feed',
    desc: 'تغطية فورية وشاملة للأحداث الرقمية الجارية على الساحة العالمية والوطنية.',
    icon: Newspaper,
    color: 'text-cyber-powder',
    glow: 'shadow-cyber-sapphire/20',
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
    color: 'text-cyber-sapphire',
    glow: 'shadow-cyber-sapphire/20',
    link: '#news'
  }
];

const OperationsHub: React.FC = () => {
  return (
    <section id="hub" className="py-16 bg-cyber-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(15,82,186,0.1),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-navy/50 border border-cyber-powder/20 text-cyber-powder text-[9px] font-black uppercase tracking-[0.3em] mb-4">
             <Activity className="w-3.5 h-3.5 animate-pulse" />
             Tigris Cyber Main Dashboard
          </div>
          <h2 className="text-4xl font-black text-white mb-4 italic">القائمة <span className="text-cyber-sapphire">الرئيسية</span></h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">المحاور الثلاثة الأساسية لاستخبارات دجلة سايبر الرقمية.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {MAIN_PILLARS.map((item, idx) => (
            <a 
              key={idx} 
              href={item.link}
              className={`group relative p-6 bg-cyber-ice/5 border border-cyber-powder/20 rounded-2xl hover:bg-cyber-ice/10 hover:border-cyber-sapphire/40 transition-all duration-500 flex flex-col items-center text-center overflow-hidden shadow-xl ${item.glow}`}
            >
              <div className={`absolute -inset-2 opacity-0 group-hover:opacity-5 transition-opacity blur-3xl rounded-full ${item.color.replace('text', 'bg')}`}></div>
              
              <div className={`w-16 h-16 rounded-xl bg-cyber-navy border border-cyber-powder/20 flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-all shadow-inner`}>
                <item.icon className="w-7 h-7" />
              </div>
              
              <div className="relative">
                <span className={`block text-[9px] font-black uppercase tracking-[0.3em] mb-1.5 ${item.color}`}>{item.subtitle}</span>
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-white transition-colors">{item.title}</h3>
              </div>
              
              <p className="text-slate-300 text-xs leading-relaxed mb-8 font-medium">
                {item.desc}
              </p>
              
              <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase text-slate-500 group-hover:text-cyber-sapphire transition-colors tracking-widest">
                <ArrowUpLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                استعراض البيانات
              </div>

              <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-cyber-powder/20 rounded-tl-2xl group-hover:border-cyber-sapphire/30 transition-all"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationsHub;
