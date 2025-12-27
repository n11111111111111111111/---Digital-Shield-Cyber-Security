
import React from 'react';
import { Waves, Code2, Send, Linkedin, Twitter, LayoutGrid, ShieldCheck, Zap, Globe, Github } from 'lucide-react';
import { AppView } from '../App';

interface FooterProps {
  onNavigate: (view: AppView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20 text-right">
          
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center justify-end gap-3 cursor-pointer group" onClick={() => onNavigate('home')}>
              <span className="text-2xl font-black text-white italic tracking-tighter group-hover:text-cyan-400 transition-colors">
                دجلة<span className="text-cyan-400">سايبر</span>
              </span>
              <div className="p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/20 group-hover:scale-110 transition-transform">
                <Waves className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              المركز الاستخباري الأول للأمن الرقمي في بلاد الرافدين. نسعى لبناء فضاء عراقي آمن ومحمي من كافة التهديدات السيبرانية العالمية.
            </p>
            <div className="flex justify-end gap-3">
               <div className="flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-[10px] font-black text-cyan-500 uppercase tracking-widest">
                  <ShieldCheck className="w-3 h-3" />
                  Verified Intelligence
               </div>
            </div>
          </div>
          
          {/* Main Pillars Column */}
          <div>
            <h4 className="text-white font-black mb-8 text-sm flex items-center justify-end gap-3">
              <span className="w-8 h-[1px] bg-cyan-500/30"></span>
              المحاور الرئيسية
              <LayoutGrid className="w-4 h-4 text-cyan-400" />
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'أحدث الاستخبارات', anchor: 'news' },
                { label: 'تحذيرات التهديدات', anchor: 'threats' },
                { label: 'منصة الخبراء', view: 'experts' as AppView },
                { label: 'قصص العمليات', anchor: 'stories' }
              ].map((item, i) => (
                <li key={i}>
                  <button 
                    onClick={() => {
                      if (item.view) onNavigate(item.view);
                      else {
                        onNavigate('home');
                        if (item.anchor) setTimeout(() => document.getElementById(item.anchor!)?.scrollIntoView({behavior:'smooth'}), 100);
                      }
                    }} 
                    className="text-slate-500 hover:text-cyan-400 text-xs font-bold transition-all flex items-center justify-end gap-2 group w-full"
                  >
                    <span className="group-hover:translate-x-[-4px] transition-transform">{item.label}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-colors"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-white font-black mb-8 text-sm flex items-center justify-end gap-3">
              <span className="w-8 h-[1px] bg-cyan-500/30"></span>
              عن دجلة سايبر
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'من نحن', view: 'about' as AppView },
                { label: 'تواصل معنا', view: 'contact' as AppView },
                { label: 'سياسة الخصوصية', view: 'privacy' as AppView },
                { label: 'شروط الاستخدام', view: 'privacy' as AppView }
              ].map((item, i) => (
                <li key={i}>
                  <button 
                    onClick={() => onNavigate(item.view)} 
                    className="text-slate-500 hover:text-cyan-400 text-xs font-bold transition-all flex items-center justify-end gap-2 group w-full"
                  >
                    <span className="group-hover:translate-x-[-4px] transition-transform">{item.label}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-colors"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-black mb-8 text-sm flex items-center justify-end gap-3">
              <span className="w-8 h-[1px] bg-cyan-500/30"></span>
              اتصال سريع
              <Send className="w-4 h-4 text-cyan-400" />
            </h4>
            <div className="space-y-6">
              <div className="flex justify-end gap-3">
                {[
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Github, href: "#" },
                  { icon: Send, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar - Unified Formatting */}
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row-reverse justify-between items-center gap-6">
          
          {/* Rights & Republic Info */}
          <div className="flex items-center gap-4 flex-row-reverse">
             <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] flex items-center gap-4 flex-row-reverse">
                <span className="text-slate-400">جميع الحقوق محفوظة © 2024</span>
                <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
                <span className="text-slate-400">جمهورية العراق الرقمية</span>
             </div>
          </div>
          
          {/* Developer Credit - Matching Style with Rights Info */}
          <div className="flex items-center gap-4">
             <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                <span>Developed by</span>
                <span className="text-cyan-400 font-black italic tracking-tighter text-xs">Abbas Habib</span>
                <Code2 className="w-3.5 h-3.5 text-slate-700" />
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
