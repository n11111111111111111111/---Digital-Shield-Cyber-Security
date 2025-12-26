
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LatestFeed from './components/LatestFeed';
import ThreatMap from './components/ThreatMap';
import StoriesSection from './components/StoriesSection';
import BlogSection from './components/BlogSection';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import { Target, Users } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-white bg-slate-950">
      <InteractiveBackground />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          
          {/* Features Section */}
          <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900/50">
            <div className="grid md:grid-cols-2 gap-12 text-right">
              <div className="p-8 bg-slate-900/40 border border-slate-800/50 hover:border-cyan-500/30 transition-all group rounded-sm backdrop-blur-md">
                <div className="w-14 h-14 bg-purple-600/20 text-purple-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mr-0 ml-auto">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">التحليل الذكي</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  أدوات تحليل تهديدات متقدمة توفر تقارير استخباراتية فورية لدعم اتخاذ القرار السريع ضد الهجمات السيبرانية.
                </p>
              </div>
              
              <div className="p-8 bg-slate-900/40 border border-slate-800/50 hover:border-cyan-500/30 transition-all group rounded-sm backdrop-blur-md">
                <div className="w-14 h-14 bg-green-600/20 text-green-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mr-0 ml-auto">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">مجتمع الخبراء</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  انضم إلى نخبة من خبراء الأمن السيبراني لتبادل المعرفة والخبرات التكتيكية في بيئة تفاعلية آمنة.
                </p>
              </div>
            </div>
          </section>

          <LatestFeed />
          <ThreatMap />
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
