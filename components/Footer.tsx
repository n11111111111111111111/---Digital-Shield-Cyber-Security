
import React from 'react';
import { Shield, Twitter, Linkedin, Github, Mail, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1 text-right">
            <div className="flex items-center justify-end gap-2 mb-6">
              <span className="text-xl font-black text-white italic uppercase tracking-tighter">الدرع<span className="text-cyan-400">الرقمي</span></span>
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              المنصة الرائدة لاستخبارات الأمن السيبراني. نهدف لبناء مجتمع آمن وواعٍ بالتهديدات الرقمية الحديثة.
            </p>
            <div className="flex justify-end gap-4">
              <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-right">
            <h4 className="text-white font-bold mb-6 text-lg">روابط سريعة</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">أحدث التقارير</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">مدونة التقنية</a></li>
              <li><a href="#threats" className="hover:text-cyan-400 transition-colors">خريطة التهديدات</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">أدوات الفحص</a></li>
            </ul>
          </div>

          <div className="text-right">
            <h4 className="text-white font-bold mb-6 text-lg">الدعم</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          <div className="text-right">
            <h4 className="text-white font-bold mb-6 text-lg">النشرة الإخبارية</h4>
            <p className="text-slate-500 text-sm mb-6 italic">اشترك للحصول على تنبيهات الثغرات الفورية.</p>
            <div className="flex gap-2 flex-row-reverse">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني"
                className="flex-1 bg-slate-900 border border-slate-800 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 text-right"
              />
              <button className="bg-cyan-600 hover:bg-cyan-500 text-white p-2 rounded transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Centered Credit Section */}
        <div className="flex flex-col items-center gap-6 mt-12 border-t border-slate-900 pt-12">
          <div className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] text-center">
            <p>© 2024 الدرع الرقمي - جميع الحقوق محفوظة</p>
          </div>

          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-cyan-500" />
              Developed by
            </p>
            <span className="text-lg font-black text-cyan-400 glow-text tracking-widest uppercase mono">
              Abbas Habib
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
