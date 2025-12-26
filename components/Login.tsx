
import React, { useState } from 'react';
import { Shield, Lock, User, Fingerprint, ChevronRight, Monitor, Activity, Database, X } from 'lucide-react';

interface LoginProps {
  onLogin: (isDemo: boolean) => void;
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onClose }) => {
  const [isHoveringDemo, setIsHoveringDemo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(false);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#010409]/90 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-lg animate-fade-in">
        <div className="bg-slate-900/60 backdrop-blur-3xl border border-cyan-500/20 rounded-2xl p-8 lg:p-12 shadow-[0_0_100px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 left-6 p-2 text-slate-500 hover:text-white transition-colors bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/30"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Security Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

          <div className="text-center mb-10">
            <div className="relative inline-flex mb-6">
              <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full animate-pulse"></div>
              <div className="relative p-5 bg-slate-950 rounded-2xl border border-cyan-500/20">
                <Shield className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">بوابة<span className="text-cyan-400">التحقق</span></h2>
            <p className="text-slate-500 text-[10px] mt-3 font-black tracking-[0.4em] uppercase mono">Secure Intel Access Point</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative group">
                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-cyan-400 transition-colors" />
                <input 
                  type="text" 
                  placeholder="معرف الهوية الرقمية"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-lg py-4 pr-12 pl-4 text-sm text-white focus:outline-none focus:border-cyan-500/30 transition-all placeholder:text-slate-700 text-right"
                />
              </div>

              <div className="relative group">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-cyan-400 transition-colors" />
                <input 
                  type="password" 
                  placeholder="شفرة الوصول"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-lg py-4 pr-12 pl-4 text-sm text-white focus:outline-none focus:border-cyan-500/30 transition-all placeholder:text-slate-700 text-right"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-4 rounded-lg border border-slate-700 transition-all flex items-center justify-center gap-2 group text-sm"
              >
                تسجيل دخول المحترفين
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>
            </form>

            <div className="relative flex items-center justify-center py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
              <span className="relative bg-[#0b111a] px-4 text-[10px] text-slate-600 font-black uppercase tracking-widest">خيارات المطور والمالك</span>
            </div>

            {/* Demo Access Button */}
            <button 
              onClick={() => onLogin(true)}
              onMouseEnter={() => setIsHoveringDemo(true)}
              onMouseLeave={() => setIsHoveringDemo(false)}
              className="relative w-full overflow-hidden bg-cyan-600 hover:bg-cyan-500 text-white font-black py-5 rounded-lg shadow-[0_0_30px_rgba(8,145,178,0.3)] transition-all flex items-center justify-center gap-3 group active:scale-[0.98]"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ${isHoveringDemo ? 'translate-x-[200%]' : '-translate-x-[200%]'}`}></div>
              <Monitor className="w-5 h-5 animate-pulse" />
              تشغيل نسخة العرض (DEMO MODE)
              <Activity className="w-4 h-4 text-cyan-200" />
            </button>
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              هذه البوابة مخصصة للخبراء المعتمدين فقط
            </p>
          </div>
        </div>

        {/* Technical Metadata Footer */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2 text-[8px] text-slate-700 font-black uppercase tracking-widest">
            <Database className="w-3 h-3" />
            SEC_DB: ACTIVE
          </div>
          <div className="flex items-center gap-2 text-[8px] text-slate-700 font-black uppercase tracking-widest justify-center">
            <Activity className="w-3 h-3 text-green-500/50" />
            ENCRYPTION: AES-256
          </div>
          <div className="flex items-center gap-2 text-[8px] text-slate-700 font-black uppercase tracking-widest justify-end">
            Shield OS v4.5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
