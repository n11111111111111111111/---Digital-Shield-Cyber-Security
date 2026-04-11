
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
    <nav className="sticky top-0 z-50 bg-cyber-navy/80 backdrop-blur-xl border-b border-cyber-sapphire/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => {
            if (window.innerWidth < 768) {
              setShowDepartments(!showDepartments);
            } else {
              onNavigate('home');
            }
          }}>
            <div className="relative flex items-center">
              <div className="absolute inset-0 bg-cyber-sapphire/20 blur-lg rounded-full group-hover:bg-cyber-sapphire/40 transition-all"></div>
              <Waves className={`w-7 h-7 text-cyber-powder relative z-10 transition-transform ${showDepartments ? 'scale-110 text-white' : ''}`} />
            </div>
            <span className="text-xl font-black tracking-tighter text-white italic">دجلة<span className="text-cyber-sapphire">سايبر</span></span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <button onClick={() => onNavigate('home')} className={`text-xs font-black transition-all flex items-center gap-2 px-2 py-1 rounded-lg ${currentView === 'home' ? 'text-cyber-sapphire bg-cyber-sapphire/10' : 'text-slate-300 hover:text-cyber-sapphire'}`}>
                <Home className="w-3.5 h-3.5" /> الرئيسية
              </button>
              
              <button onClick={() => onNavigate('experts')} className={`flex items-center gap-2 text-xs font-black transition-all px-2 py-1 rounded-lg ${currentView === 'experts' ? 'text-cyber-sapphire bg-cyber-sapphire/10' : 'text-slate-300 hover:text-cyber-sapphire'}`}>
                <Users className="w-3.5 h-3.5" /> الخبراء
              </button>
              
              <button onClick={() => onNavigate('learning')} className={`flex items-center gap-2 text-xs font-black transition-all px-2 py-1 rounded-lg ${currentView === 'learning' ? 'text-cyber-sapphire bg-cyber-sapphire/10' : 'text-slate-300 hover:text-cyber-sapphire'}`}>
                <GraduationCap className="w-3.5 h-3.5" /> مركز التعلم
              </button>
            </div>

            <div className="relative">
              <button onClick={() => setShowDepartments(!showDepartments)} className={`hidden md:flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all border ${showDepartments ? 'bg-cyber-sapphire border-cyber-sapphire text-white shadow-xl' : 'bg-cyber-navy/50 border-cyber-powder/20 text-slate-400 hover:text-cyber-sapphire hover:border-cyber-sapphire/30'}`}>
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="text-[10px] font-black uppercase tracking-widest">الأقسام</span>
              </button>

              {showDepartments && (
                <>
                  <div className="fixed inset-0 z-[100] bg-cyber-navy/60 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none" onClick={() => setShowDepartments(false)}></div>
                  
                  {/* Desktop Dropdown */}
                  <div className="hidden md:block absolute left-0 mt-3 w-64 bg-cyber-navy/95 backdrop-blur-2xl border border-cyber-powder/20 shadow-2xl rounded-xl overflow-hidden animate-fade-in p-1 text-right z-[110]">
                    <div className="grid grid-cols-1 gap-0.5">
                      {departments.map((dept, i) => (
                        <button key={i} onClick={() => handleDeptClick(dept)} className="w-full flex items-center justify-end gap-3 p-2.5 rounded-lg hover:bg-cyber-sapphire/10 transition-all text-[11px] font-bold text-slate-300 group">
                          <span>{dept.title}</span>
                          <dept.icon className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyber-sapphire" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Sidebar (Drawer) */}
                  <div className="md:hidden fixed top-0 right-0 h-full w-80 bg-cyber-navy border-l border-cyber-sapphire/30 shadow-[-20px_0_80px_rgba(0,0,0,0.8)] z-[10001] animate-slide-in-right p-0 text-right flex flex-col">
                    <div className="p-6 border-b border-cyber-powder/10 bg-cyber-ice/5">
                      <div className="flex items-center justify-between mb-2">
                        <button onClick={() => setShowDepartments(false)} className="p-2 hover:bg-cyber-sapphire/20 rounded-xl transition-colors border border-cyber-powder/10">
                          <Waves className="w-8 h-8 text-cyber-sapphire" />
                        </button>
                        <span className="text-2xl font-black text-white italic tracking-tighter">الأقسام</span>
                      </div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Tigris Cyber Navigation</p>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-4 space-y-1.5 custom-scrollbar">
                      <div className="grid grid-cols-1 gap-1">
                        <button onClick={() => { onNavigate('home'); setShowDepartments(false); }} className={`w-full flex items-center justify-end gap-4 p-4 rounded-2xl transition-all text-base font-black group ${currentView === 'home' ? 'bg-cyber-sapphire text-white shadow-lg' : 'text-slate-300 hover:bg-cyber-sapphire/10'}`}>
                          <span>الرئيسية</span>
                          <Home className={`w-6 h-6 ${currentView === 'home' ? 'text-white' : 'text-slate-500 group-hover:text-cyber-sapphire'}`} />
                        </button>
                        <button onClick={() => { onNavigate('experts'); setShowDepartments(false); }} className={`w-full flex items-center justify-end gap-4 p-4 rounded-2xl transition-all text-base font-black group ${currentView === 'experts' ? 'bg-cyber-sapphire text-white shadow-lg' : 'text-slate-300 hover:bg-cyber-sapphire/10'}`}>
                          <span>الخبراء</span>
                          <Users className={`w-6 h-6 ${currentView === 'experts' ? 'text-white' : 'text-slate-500 group-hover:text-cyber-sapphire'}`} />
                        </button>
                        <button onClick={() => { onNavigate('learning'); setShowDepartments(false); }} className={`w-full flex items-center justify-end gap-4 p-4 rounded-2xl transition-all text-base font-black group ${currentView === 'learning' ? 'bg-cyber-sapphire text-white shadow-lg' : 'text-slate-300 hover:bg-cyber-sapphire/10'}`}>
                          <span>مركز التعلم</span>
                          <GraduationCap className={`w-6 h-6 ${currentView === 'learning' ? 'text-white' : 'text-slate-500 group-hover:text-cyber-sapphire'}`} />
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-4 my-6 px-4">
                        <div className="h-[1px] flex-1 bg-cyber-powder/10"></div>
                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">المزيد</span>
                        <div className="h-[1px] flex-1 bg-cyber-powder/10"></div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-1">
                        {departments.map((dept, i) => (
                          <button key={i} onClick={() => handleDeptClick(dept)} className="w-full flex items-center justify-end gap-4 p-4 rounded-2xl hover:bg-cyber-sapphire/10 transition-all text-base font-black text-slate-300 group">
                            <span>{dept.title}</span>
                            <dept.icon className="w-6 h-6 text-slate-500 group-hover:text-cyber-sapphire" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 bg-cyber-ice/5 border-t border-cyber-powder/10">
                       <button onClick={() => { onNavigate('contact'); setShowDepartments(false); }} className="w-full bg-cyber-sapphire hover:bg-cyber-sapphire/90 text-white py-5 rounded-2xl font-black text-base shadow-xl shadow-cyber-sapphire/30 transition-all active:scale-95 flex items-center justify-center gap-3">
                          <Mail className="w-5 h-5" />
                          تواصل معنا
                       </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('contact')} className="hidden sm:block bg-cyber-navy/50 text-slate-300 hover:text-white px-4 py-2 rounded-lg font-bold border border-cyber-powder/20 hover:border-cyber-sapphire/30 transition-all text-[11px]">
              اتصل بنا
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slide-in-right { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </nav>
  );
};

export default Navbar;
