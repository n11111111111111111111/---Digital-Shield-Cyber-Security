
import React, { useState, useEffect } from 'react';
import { Shield, Lock, User, Activity, Database, X, Terminal, Key, Smartphone, Fingerprint, RefreshCw } from 'lucide-react';
import { UserRole } from '../types';

interface LoginProps {
  onLogin: (role: UserRole) => void;
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onClose }) => {
  const [adminPass, setAdminPass] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [verificationStep, setVerificationStep] = useState(false);
  const [vCode, setVCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  const handleExpertLogin = () => onLogin('expert');

  const handleAdminAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPass === 'admin123') {
      const code = Math.floor(1000 + Math.random() * 9000).toString();
      setGeneratedCode(code);
      setVerificationStep(true);
    } else {
      alert('شفرة الوصول غير صحيحة. تم تسجيل محاولة الدخول الفاشلة.');
    }
  };

  const handleFinalVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      if (vCode === generatedCode) {
        onLogin('admin');
      } else {
        alert('رمز التحقق غير صحيح.');
        setIsVerifying(false);
      }
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#010409]/95 backdrop-blur-md cursor-pointer" onClick={onClose}></div>

      <div className="relative w-full max-w-lg animate-fade-in">
        <div className="bg-slate-900/80 backdrop-blur-3xl border border-cyan-500/20 rounded-2xl p-8 lg:p-12 shadow-[0_0_100px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          <button onClick={onClose} className="absolute top-6 left-6 p-2 text-slate-500 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-10">
            <div className="relative inline-flex mb-6">
              <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full animate-pulse"></div>
              <div className="relative p-5 bg-slate-950 rounded-2xl border border-cyan-500/20 text-cyan-400">
                <Shield className="w-12 h-12" />
              </div>
            </div>
            <h2 className="text-3xl font-black text-white italic uppercase">بوابة <span className="text-cyan-400">التحقق الأمنية</span></h2>
            {!verificationStep && <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest font-bold">Secure Gateway v4.0.1</p>}
          </div>

          <div className="space-y-6">
            {!showAdminLogin ? (
              <>
                <button 
                  onClick={handleExpertLogin}
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-black py-4 rounded-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-cyan-900/20"
                >
                  <Terminal className="w-5 h-5" />
                  دخول الخبراء (عرض الخدمات)
                </button>
                <button 
                  onClick={() => setShowAdminLogin(true)}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-400 font-bold py-4 rounded-lg border border-slate-700 flex items-center justify-center gap-3 transition-all"
                >
                  <Key className="w-5 h-5" />
                  دخول المسؤول (الإدارة)
                </button>
              </>
            ) : !verificationStep ? (
              <form onSubmit={handleAdminAuth} className="space-y-4 animate-slide-up">
                <div className="relative">
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                  <input 
                    type="password" 
                    autoFocus
                    value={adminPass}
                    onChange={(e) => setAdminPass(e.target.value)}
                    placeholder="أدخل شفرة الإدارة العليا"
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-lg py-4 pr-12 pl-4 text-white focus:border-cyan-500 focus:outline-none text-right"
                  />
                </div>
                <div className="flex gap-2">
                   <button type="submit" className="flex-1 bg-red-600 hover:bg-red-500 text-white font-black py-4 rounded-lg">التالي: خطوة التحقق</button>
                   <button type="button" onClick={() => setShowAdminLogin(false)} className="px-6 bg-slate-800 text-slate-400 rounded-lg">إلغاء</button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleFinalVerify} className="space-y-6 animate-slide-up text-center">
                <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl mb-4">
                   {/* Fixed typo: Using correctly imported 'Smartphone' icon component */}
                   <Smartphone className="w-10 h-10 text-cyan-500 mx-auto mb-4" />
                   <p className="text-xs text-slate-400 mb-2 font-bold uppercase tracking-widest">تم إرسال رمز التحقق الآلي</p>
                   <p className="text-xl font-black text-white mono tracking-[0.5em] bg-slate-950 py-2 rounded border border-slate-800">
                     {generatedCode}
                   </p>
                   <p className="text-[9px] text-slate-600 mt-2 italic">(محاكاة لخطوة التحقق الثنائية 2FA)</p>
                </div>
                
                <input 
                  type="text" 
                  maxLength={4}
                  required
                  autoFocus
                  value={vCode}
                  onChange={(e) => setVCode(e.target.value)}
                  placeholder="أدخل الرمز هنا"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg py-4 px-4 text-center text-2xl font-black text-cyan-400 focus:border-cyan-500 focus:outline-none mono"
                />

                <button 
                  disabled={isVerifying}
                  type="submit" 
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-black py-4 rounded-lg flex items-center justify-center gap-3 transition-all disabled:opacity-50"
                >
                  {isVerifying ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Fingerprint className="w-5 h-5" />}
                  {isVerifying ? 'جاري التحقق الرقمي...' : 'تأكيد الهوية والدخول'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
