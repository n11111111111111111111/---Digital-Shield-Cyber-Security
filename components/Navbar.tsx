
import React, { useState } from 'react';
import { Waves, Bell, LayoutGrid, Zap, BarChart3, ShieldAlert, Newspaper, Users, Home, Info, Mail, PenSquare } from 'lucide-react';
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
    { title: 'تحليلات وتقارير', icon: BarChart3, view: 'home', anchor: 'news' },
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
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full group-hover:bg-cyan-400/40 transition-all"></div>
              <Waves className="w-10 h-10 text-cyan-400 relative z-10" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white italic">دجلة<span className="text-cyan-400">سايبر</span></span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button 
              onClick={() => onNavigate('home')} 
              className={`text-sm font-black transition-all flex items-center gap-2 px-3 py-1.5 rounded-lg ${currentView === 'home' ? 'text-cyan-400 bg-cyan-500/5' : 'text-slate-300 hover:text-cyan-400'}`}
            >
              <Home className="w-4 h-4" />
              الرئيسية
            </button>
            
            <button 
              onClick={() => onNavigate('experts')} 
              className={`flex items-center gap-2 text-sm font-black transition-all px-3 py-1.5 rounded-lg ${currentView === 'experts' ? 'text-cyan-400 bg-cyan-500/5' : 'text-slate-300 hover:text-cyan-400'}`}
            >
              <Users className="w-4 h-4" />
              الخبراء
            </button>

            {/* All Sections Mega Icon */}
            <div className="relative">
              <button 
                onClick={() => setShowDepartments(!showDepartments)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all border ${showDepartments ? 'bg-cyan-600 border-cyan-500 text-white shadow-2xl' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30'}`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-widest">تصفح الأقسام</span>
              </button>

              {showDepartments && (
                <>
                  <div className="fixed inset-0 z-[-1]" onClick={() => setShowDepartments(false)}></div>
                  <div className="absolute left-0 mt-4 w-72 bg-slate-900/95 backdrop-blur-2xl border border-slate-800 shadow-2xl rounded-2xl overflow-hidden animate-fade-in p-2 text-right">
                    <div className="p-3 mb-2 border-b border-slate-800 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">دليل الاستخبارات</div>
                    <div className="grid grid-cols-1 gap-1">
                      {departments.map((dept, i) => (
                        <button 
                          key={i} 
                          onClick={() => handleDeptClick(dept)}
                          className="w-full flex items-center justify-end gap-4 p-3.5 rounded-xl hover:bg-cyan-500/10 transition-all text-xs font-bold text-slate-300 group"
                        >
                          <span className="group-hover:text-white transition-colors">{dept.title}</span>
                          <div className="p-1.5 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-cyan-500/30 transition-all">
                             <dept.icon className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-slate-900 text-slate-300 hover:text-white px-5 py-2.5 rounded-xl font-bold border border-slate-800 hover:border-cyan-500/30 transition-all text-xs"
            >
              اتصل بنا
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
