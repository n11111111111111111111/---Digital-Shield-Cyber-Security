
import React from 'react';
import { Terminal, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-16 pb-32 cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 animate-pulse">
          <Zap className="w-4 h-4" />
          The Future of Protection Starts Here
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
          Defending Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digital Horizon</span> <br />
          Against Tomorrow's Threats
        </h1>
        
        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12 leading-relaxed">
          Digital Shield is your primary destination for learning cybersecurity, tracking global incidents, and receiving advanced AI-powered security advice.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-2 glow-cyan group">
            <ShieldCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Start Learning
          </button>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-2 border border-slate-700">
            <Terminal className="w-5 h-5" />
            AI Consultation
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-slate-800 pt-12">
          <div>
            <div className="text-3xl font-black text-white glow-text">500K+</div>
            <div className="text-slate-500 text-sm mt-1 uppercase font-bold tracking-wider">Threats Detected</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white glow-text">150+</div>
            <div className="text-slate-500 text-sm mt-1 uppercase font-bold tracking-wider">Expert Courses</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white glow-text">50K+</div>
            <div className="text-slate-500 text-sm mt-1 uppercase font-bold tracking-wider">Active Experts</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white glow-text">24/7</div>
            <div className="text-slate-500 text-sm mt-1 uppercase font-bold tracking-wider">SOC Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
