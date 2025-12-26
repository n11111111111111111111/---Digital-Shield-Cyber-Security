
import React from 'react';
import { Shield, Twitter, Linkedin, Github, Mail, Code2, Facebook, MessageSquare, Send, Instagram, Video } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Main Info - Right Side (RTL Focus) */}
          <div className="lg:col-span-1 text-right order-1">
            <div className="flex items-center justify-start gap-3 mb-8 flex-row-reverse">
              <Shield className="w-10 h-10 text-cyan-400 glow-text" />
              <span className="text-2xl font-black text-white italic uppercase tracking-tighter">الدرع<span className="text-cyan-400">الرقمي</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-xs ml-auto mr-0">
              المنصة الرائدة لاستخبارات الأمن السيبراني. نهدف لبناء مجتمع آمن وواعٍ بالتهديدات الرقمية الحديثة من خلال الرصد والتحليل المستمر.
            </p>
            <div className="flex justify-start gap-3 flex-wrap flex-row-reverse">
              <a href="#" title="Facebook" className="p-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" title="Twitter" className="p-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" title="Instagram" className="p-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-400 hover:text-pink-500 hover:border-pink-500/50 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" title="Discord" className="p-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-400 hover:text-indigo-400 hover:border-indigo-400/50 transition-all">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" title="Telegram" className="p-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" title="TikTok" className="p-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-white/50 transition-all">
                <Video className="w-5 h-5" />
              </a>
              <a href="#" title="Github" className="p-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-white/50 transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-right order-2">
            <h4 className="text-white font-black mb-8 text-sm uppercase tracking-[0.2em] text-cyan-500/80">المحتوى</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-bold">
              <li><a href="#news" className="hover:text-cyan-400 transition-colors">أحدث التقارير</a></li>
              <li><a href="#community" className="hover:text-cyan-400 transition-colors">مجتمع الخبراء</a></li>
              <li><a href="#threats" className="hover:text-cyan-400 transition-colors">خريطة التهديدات</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">أرشيف الاستخبارات</a></li>
            </ul>
          </div>

          <div className="text-right order-3">
            <h4 className="text-white font-black mb-8 text-sm uppercase tracking-[0.2em] text-cyan-500/80">الدعم الفني</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-bold">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          <div className="text-right order-4">
            <h4 className="text-white font-black mb-8 text-sm uppercase tracking-[0.2em] text-cyan-500/80">النشرة الاستخباراتية</h4>
            <p className="text-slate-500 text-xs mb-8 italic">اشترك للحصول على تنبيهات الثغرات والتهديدات العاجلة.</p>
            <div className="flex gap-2 flex-row-reverse">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني"
                className="flex-1 bg-slate-900 border border-slate-800 rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-500 transition-all text-right"
              />
              <button className="bg-cyan-600 hover:bg-cyan-500 text-white p-3 rounded transition-all shadow-lg shadow-cyan-900/20">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Right-Aligned Copyright & Credits */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 border-t border-slate-900 pt-12">
          <div className="flex flex-col items-end gap-2 text-right">
            <div className="flex items-center gap-3 mb-1 flex-row-reverse">
              <span className="text-xl font-black text-cyan-400 tracking-widest uppercase mono">Abbas Habib</span>
              <div className="flex items-center gap-2">
                 <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Developed by</p>
                 <Code2 className="w-4 h-4 text-cyan-500" />
              </div>
            </div>
            <div className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 flex-row-reverse">
              <span className="text-cyan-800/50">Digital Shield</span>
              <span>•</span>
              <span>© 2024 جميع الحقوق محفوظة</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-700">
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
               <span>Server Status: Operational</span>
            </div>
            <span>Global Region Node</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
