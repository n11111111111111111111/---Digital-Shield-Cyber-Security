
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThreatMap from './components/ThreatMap';
import BlogSection from './components/BlogSection';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Features Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 bg-cyan-600/20 text-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Pro Academy</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Integrated learning paths starting from zero to mastery in penetration testing and digital forensics.
              </p>
            </div>
            
            <div className="p-8 bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 bg-purple-600/20 text-purple-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Analysis</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Advanced threat analysis tools providing instant intelligence reports for rapid decision making.
              </p>
            </div>
            
            <div className="p-8 bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 bg-green-600/20 text-green-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Expert Community</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Join a vibrant hub of security experts and enthusiasts to exchange knowledge and tactical experiences.
              </p>
            </div>
          </div>
        </section>

        <ThreatMap />
        <BlogSection />
      </main>
      
      <AIChat />
      <Footer />
    </div>
  );
};

export default App;
