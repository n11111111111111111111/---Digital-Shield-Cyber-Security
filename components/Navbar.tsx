
import React, { useState } from 'react';
import { Shield, Menu, X, Bell, Search } from 'lucide-react';
import { NOTIFICATIONS } from '../constants';

const Navbar: React.FC = () => {
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
              <a href="#stories" className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-bold">قصص سيبرانية</a>
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
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              {showNotifications && (
                <div className="absolute left-0 mt-4 w-80 bg-slate-900 border border-slate-800 shadow-2xl rounded-sm overflow-hidden animate-fade-in z-[60]">
                  <div className="p-4 bg-slate-800/50 border-b border-slate-700 flex justify-between items-center">
                    <span className="text-xs font-black uppercase text-cyan-400 tracking-widest">التنبيهات الأمنية</span>
                    <button onClick={() => setShowNotifications(false)}><X className="w-4 h-4 text-slate-500 hover:text-white" /></button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {NOTIFICATIONS.map(notif => (
                      <div key={notif.id} className={`p-4 border-b border-slate-800 hover:bg-slate-800/30 transition-colors cursor-pointer ${notif.unread ? 'bg-cyan-500/5' : ''}`}>
                        <div className="flex gap-3">
                          <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${notif.type === 'alert' ? 'bg-red-500' : notif.type === 'security' ? 'bg-cyan-500' : 'bg-yellow-500'}`}></div>
                          <div>
                            <p className="text-xs text-slate-200 leading-relaxed font-bold">{notif.title}</p>
                            <span className="text-[10px] text-slate-500 mt-2 block mono">{notif.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full p-3 bg-slate-950 text-[10px] font-black text-slate-500 hover:text-cyan-400 uppercase tracking-widest border-t border-slate-800">مشاهدة جميع الإشعارات</button>
                </div>
              )}
            </div>

            <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-sm font-bold transition-all shadow-lg shadow-cyan-500/20">
              تسجيل الدخول
            </button>
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
          <a href="#" className="block text-cyan-400 px-3 py-2 rounded-md text-base font-bold">الرئيسية</a>
          <a href="#news" className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-bold">الأخبار</a>
          <a href="#stories" className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-bold">قصص سيبرانية</a>
          <a href="#threats" className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-bold">خريطة التهديدات</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
