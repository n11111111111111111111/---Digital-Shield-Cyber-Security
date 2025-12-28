
import React from 'react';
import { Waves, Code2, Send, Linkedin, Twitter, LayoutGrid, ShieldCheck, Github } from 'lucide-react';
import { AppView } from '../App';

interface FooterProps {
  onNavigate: (view: AppView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-12 pb-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-10 text-right">
          
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center justify-end gap-2 cursor-pointer group" onClick={() => onNavigate('home')}>
              <span className="text-xl font-black text-white italic tracking-tighter group-hover:text-cyan-400 transition-colors">
                دجلة<span className="text-cyan-400">سايبر</span>
              </span>
              <Waves className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-slate-400 text-[10px] leading-relaxed font-medium">
              المركز الاستخباري الأول للأمن الرقمي في العراق. نحمي الفضاء الرقمي الوطني بأدوات ذكية.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-5 text-[10px] flex items-center justify-end gap-2">
              المحاور
              <LayoutGrid className="w-3 h-3 text-cyan-400" />
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'أحدث الاستخبارات', anchor: 'news' },
                { label: 'منصة الخبراء', view: 'experts' as AppView },
                { label: 'مركز التعلم', view: 'learning' as AppView }
              ].map((item, i) => (
                <li key={i}>
                  <button onClick={() => { if (item.view) onNavigate(item.view); else { onNavigate('home'); if (item.anchor) setTimeout(() => document.getElementById(item.anchor!)?.scrollIntoView({behavior:'smooth'}), 100); } }} className="text-slate-500 hover:text-cyan-400 text-[9px] font-bold transition-all flex items-center justify-end gap-2 group w-full">
                    <span>{item.label}</span>
                    <div className="w-0.5 h-0.5 rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-colors"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-5 text-[10px] flex items-center justify-end gap-2">
              عن دجلة
              <ShieldCheck className="w-3 h-3 text-cyan-400" />
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'من نحن', view: 'about' as AppView },
                { label: 'تواصل معنا', view: 'contact' as AppView },
                { label: 'الخصوصية', view: 'privacy' as AppView }
              ].map((item, i) => (
                <li key={i}>
                  <button onClick={() => onNavigate(item.view)} className="text-slate-500 hover:text-cyan-400 text-[9px] font-bold transition-all flex items-center justify-end gap-2 group w-full">
                    <span>{item.label}</span>
                    <div className="w-0.5 h-0.5 rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-colors"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-5 text-[10px] flex items-center justify-end gap-2">
              اتصال
              <Send className="w-3 h-3 text-cyan-400" />
            </h4>
            <div className="flex justify-end gap-2">
              {[Twitter, Linkedin, Github, Send].map((Icon, i) => (
                <a key={i} href="#" className="p-1.5 bg-slate-900 border border-slate-800 rounded text-slate-500 hover:text-cyan-400 transition-all">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Enhanced Clarity and Alignment */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row-reverse justify-between items-center gap-6">
          
          {/* Copyright Information */}
          <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
            <span className="text-cyan-500/80 font-black">العراق الرقمي</span>
            <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
            <span>جميع الحقوق محفوظة © 2024</span>
          </div>

          {/* Developer Attribution - Prominent and Clear Formatting */}
          <div className="flex items-center group">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-[8px] font-black text-slate-600 uppercase tracking-[0.3em] mb-1">Engineered By</span>
              <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/80 border border-slate-800 rounded-lg group-hover:border-cyan-500/50 transition-all shadow-xl">
                <Code2 className="w-4 h-4 text-cyan-500" />
                <span className="text-sm font-black text-white tracking-[0.1em] mono uppercase group-hover:text-cyan-400 transition-colors">
                  ABBAS <span className="text-cyan-400 group-hover:text-white transition-colors">HABIB</span>
                </span>
              </div>
            </div>
          </div>

          {/* Trust Badge / Status */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-slate-900/30 border border-slate-800/50 rounded-full">
            <div className="relative flex h-2 w-2">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
              <div className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></div>
            </div>
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">System Integrity: Optimal</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
