
import React, { useState } from 'react';
import { Shield, Menu, X, Bell, Search, LogOut, User, AlertCircle, Cpu, Zap } from 'lucide-react';
import { NOTIFICATIONS } from '../constants';

interface NavbarProps {
  onOpenLogin: () => void;
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenLogin, isAuthenticated, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Shield className="w-10 h-10 text-cyan-400 glow-text" />
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">الدرع<span className="text-cyan-400">الرقمي</span></span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8 space-x-reverse">
              <a href="#" className="text-cyan-400 px-3 py-2 text-sm font-bold uppercase tracking-widest border-b-2 border-cyan-400">الرئيسية</a>
              <a href="#news" className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-bold">الأخبار</a>
              <a href="#community" className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-bold">مجتمع الخبراء</a>
              <a href="#threats" className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-bold">خريطة التهديدات</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-slate-400 hover:text-cyan-400 transition-colors relative group"
              >
                <Bell className={`w-5 h-5 ${showNotifications ? 'text-cyan-400' : ''}`} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_5px_red]"></span>
              </button>
              
              {showNotifications && (
                <div className="absolute left-0 mt-4 w-96 bg-slate-900/95 border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] rounded-xl overflow-hidden animate-fade-in z-[60] backdrop-blur-2xl">
                  <div className="p-5 bg-slate-800/40 border-b border-slate-700/50 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
                      <span className="text-[11px] font-black uppercase text-cyan-400 tracking-[0.2em]">Live Intelligence Feed</span>
                    </div>
                    <button onClick={() => setShowNotifications(false)} className="text-slate-500 hover:text-white transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                    {NOTIFICATIONS.length > 0 ? NOTIFICATIONS.map(notif => (
                      <div key={notif.id} className={`p-5 border-b border-slate-800/50 hover:bg-cyan-500/5 transition-all cursor-pointer relative group/item ${notif.unread ? 'bg-cyan-500/[0.03]' : ''}`}>
                        <div className="flex gap-4">
                          <div className={`mt-1 w-10 h-10 rounded-lg shrink-0 flex items-center justify-center border ${
                            notif.type === 'alert' ? 'bg-red-500/10 border-red-500/20 text-red-500' : 
                            notif.type === 'security' ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-500' : 
                            'bg-yellow-500/10 border-yellow-500/20 text-yellow-500'
                          }`}>
                            {notif.type === 'alert' ? <AlertCircle className="w-5 h-5" /> : <Cpu className="w-5 h-5" />}
                          </div>
                          <div className="text-right flex-1">
                            <p className="text-[12px] text-slate-200 leading-relaxed font-bold group-hover/item:text-white transition-colors">{notif.title}</p>
                            <div className="flex items-center justify-end gap-2 mt-2">
                              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mono">{notif.time}</span>
                              {notif.unread && <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_5px_cyan]"></span>}
                            </div>
                          </div>
                        </div>
                      </div>
                    )) : (
                      <div className="p-10 text-center">
                        <p className="text-slate-500 text-xs">لا يوجد تنبيهات حالياً</p>
                      </div>
                    )}
                  </div>
                  <button className="w-full p-4 bg-slate-950/80 text-[10px] font-black text-slate-400 hover:text-cyan-400 uppercase tracking-widest border-t border-slate-800 transition-colors">
                    مشاهدة السجل الأمني الكامل
                  </button>
                </div>
              )}
            </div>

            {isAuthenticated ? (
              <button 
                onClick={onLogout}
                className="bg-slate-800 hover:bg-red-900/30 text-white px-6 py-2 rounded-sm font-bold transition-all border border-slate-700 flex items-center gap-2 group"
              >
                خروج
                <LogOut className="w-4 h-4 text-slate-400 group-hover:text-red-400" />
              </button>
            ) : (
              <button 
                onClick={onOpenLogin}
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-sm font-bold transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                تسجيل الدخول
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-cyan-500/20 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block text-cyan-400 px-3 py-2 rounded-md text-base font-bold text-right">الرئيسية</a>
          <a href="#news" className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-bold text-right">الأخبار</a>
          <a href="#community" className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-bold text-right">مجتمع الخبراء</a>
          <a href="#threats" className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-bold text-right">خريطة التهديدات</a>
          {!isAuthenticated && (
            <button 
              onClick={onOpenLogin}
              className="w-full text-right bg-cyan-600 text-white px-3 py-2 rounded-md text-base font-bold mt-4"
            >
              تسجيل الدخول
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
