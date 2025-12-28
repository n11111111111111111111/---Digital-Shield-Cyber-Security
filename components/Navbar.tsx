
import React, { useState } from 'react';
import { Waves, Bell, LayoutGrid, Zap, BarChart3, ShieldAlert, Newspaper, Users, Home, Info, Mail, GraduationCap } from 'lucide-react';
import { AppView } from '../App';

interface NavbarProps {
  onNavigate: (view: AppView) => void;
  currentView: AppView;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [showDepartments, setShowDepartments] = useState(false);

  const departments: { title: string; icon: any; view: AppView; anchor?: string }[] = [
    { title: 'أخبار السايبر', icon: Newspaper, view: 'home', anchor: 'news' },
    { title: 'تهديدات وتحذيرات', icon: ShieldAlert, view: 'home', anchor: 'threats' },
    { title: 'قصص دجلة', icon: Zap, view: 'home', anchor: 'stories' },
    { title: 'منصة الخبراء', icon: Users, view: 'experts' },
    { title: 'مركز التعلم', icon: GraduationCap, view: 'learning' },
    { title: 'من نحن', icon: Info, view: 'about' },
    { title: 'تواصل معنا', icon: Mail, view: 'contact' },
  ];

  const handleDeptClick = (dept: typeof departments[0]) => {
    onNavigate(dept.view);
    setShowDepartments(false);
    if (dept.anchor && dept.view === 'home') {
      setTimeout(() => {
        const element = document.getElementById(dept.anchor!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full group-hover:bg-cyan-400/40 transition-all"></div>
              <Waves className="w-7 h-7 text-cyan-400 relative z-10" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white italic">دجلة<span className="text-cyan-400">سايبر</span></span>
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <button onClick={() => onNavigate('home')} className={`text-xs font-black transition-all flex items-center gap-2 px-2 py-1 rounded-lg ${currentView === 'home' ? 'text-cyan-400 bg-cyan-500/5' : 'text-slate-300 hover:text-cyan-400'}`}>
              <Home className="w-3.5 h-3.5" /> الرئيسية
            </button>
            
            <button onClick={() => onNavigate('experts')} className={`flex items-center gap-2 text-xs font-black transition-all px-2 py-1 rounded-lg ${currentView === 'experts' ? 'text-cyan-400 bg-cyan-500/5' : 'text-slate-300 hover:text-cyan-400'}`}>
              <Users className="w-3.5 h-3.5" /> الخبراء
            </button>

            <button onClick={() => onNavigate('learning')} className={`flex items-center gap-2 text-xs font-black transition-all px-2 py-1 rounded-lg ${currentView === 'learning' ? 'text-cyan-400 bg-cyan-500/5' : 'text-slate-300 hover:text-cyan-400'}`}>
              <GraduationCap className="w-3.5 h-3.5" /> مركز التعلم
            </button>

            <div className="relative">
              <button onClick={() => setShowDepartments(!showDepartments)} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border ${showDepartments ? 'bg-cyan-600 border-cyan-500 text-white shadow-xl' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30'}`}>
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="text-[10px] font-black uppercase tracking-widest">الأقسام</span>
              </button>

              {showDepartments && (
                <>
                  <div className="fixed inset-0 z-[-1]" onClick={() => setShowDepartments(false)}></div>
                  <div className="absolute left-0 mt-3 w-64 bg-slate-900/95 backdrop-blur-2xl border border-slate-800 shadow-2xl rounded-xl overflow-hidden animate-fade-in p-1 text-right">
                    <div className="grid grid-cols-1 gap-0.5">
                      {departments.map((dept, i) => (
                        <button key={i} onClick={() => handleDeptClick(dept)} className="w-full flex items-center justify-end gap-3 p-2.5 rounded-lg hover:bg-cyan-500/10 transition-all text-[11px] font-bold text-slate-300 group">
                          <span>{dept.title}</span>
                          <dept.icon className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('contact')} className="bg-slate-900 text-slate-300 hover:text-white px-4 py-2 rounded-lg font-bold border border-slate-800 hover:border-cyan-500/30 transition-all text-[11px]">
              اتصل بنا
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
