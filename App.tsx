
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LatestFeed from './components/LatestFeed';
import ThreatMap from './components/ThreatMap';
import StoriesSection from './components/StoriesSection';
import CommunitySection from './components/CommunitySection';
import BlogSection from './components/BlogSection';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import Login from './components/Login';
import InteractiveBackground from './components/InteractiveBackground';
import { Target, Users, ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // تثبيت الوضع الداكن عند تحميل التطبيق
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleLogin = (demo: boolean) => {
    setIsAuthenticated(true);
    setIsDemoMode(demo);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsDemoMode(false);
  };

  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-white bg-slate-950 transition-colors duration-300 overflow-x-hidden">
      <InteractiveBackground />
      
      {/* Login Modal Overlay */}
      {showLoginModal && (
        <Login 
          onLogin={handleLogin} 
          onClose={() => setShowLoginModal(false)} 
        />
      )}

      {/* Auth Status Banner */}
      {(isAuthenticated || isDemoMode) && (
        <div className="fixed top-24 left-8 z-[60] animate-fade-in pointer-events-none">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 px-4 py-2 rounded-lg flex items-center gap-3 shadow-2xl shadow-black/10">
            <div className="relative">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-white uppercase tracking-tighter">
                {isDemoMode ? 'وضع العرض (DEMO)' : 'حساب خبير نشط'}
              </p>
              <p className="text-[8px] text-cyan-400 font-bold uppercase tracking-widest">Verified Session</p>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10">
        <Navbar 
          onOpenLogin={() => setShowLoginModal(true)} 
          isAuthenticated={isAuthenticated} 
          onLogout={handleLogout}
        />
        
        <main>
          <Hero />
          
          <LatestFeed />
          <ThreatMap />
          
          <CommunitySection isAuthenticated={isAuthenticated || isDemoMode} />
          
          <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900/50">
            <div className="grid md:grid-cols-2 gap-12 text-right">
              <div className="p-10 bg-slate-900/40 border border-slate-800/50 hover:border-cyan-500/30 transition-all group rounded-xl backdrop-blur-md relative overflow-hidden shadow-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="w-16 h-16 bg-purple-600/20 text-purple-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform mr-0 ml-auto border border-purple-500/20">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">الاستخبارات الفنية</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  نظام تحليل تهديدات هجين يجمع بين ذكاء المحللين البشريين وقدرات المعالجة الذاتية للذكاء الاصطناعي لرصد الهجمات قبل وقوعها.
                </p>
              </div>
              
              <div className="p-10 bg-slate-900/40 border border-slate-800/50 hover:border-cyan-500/30 transition-all group rounded-xl backdrop-blur-md relative overflow-hidden shadow-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="w-16 h-16 bg-green-600/20 text-green-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform mr-0 ml-auto border border-green-500/20">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">شبكة الاستجابة</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  بيئة مخصصة لتبادل المعلومات الحساسة والمؤشرات التقنية للاختراق (IOCs) لتمكين المؤسسات من الاستجابة السريعة للحوادث.
                </p>
              </div>
            </div>
          </section>

          <StoriesSection />
          <BlogSection />
        </main>
        
        <AIChat />
        <Footer />
      </div>
    </div>
  );
};

export default App;
