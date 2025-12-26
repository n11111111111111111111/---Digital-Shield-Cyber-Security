
import React, { useState } from 'react';
import { Shield, Menu, X, Bell, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Shield className="w-10 h-10 text-cyan-400 glow-text" />
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Digital<span className="text-cyan-400">Shield</span></span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a href="#" className="text-cyan-400 px-3 py-2 text-sm font-bold uppercase tracking-widest border-b-2 border-cyan-400">Home</a>
              <a href="#news" className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-bold">News</a>
              <a href="#academy" className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-bold">Academy</a>
              <a href="#threats" className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-bold">Threat Map</a>
              <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-bold">About</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors relative group">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-sm font-bold transition-all shadow-lg shadow-cyan-500/20">
              Sign In
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
          <a href="#" className="block text-cyan-400 px-3 py-2 rounded-md text-base font-bold">Home</a>
          <a href="#news" className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-bold">News</a>
          <a href="#academy" className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-bold">Academy</a>
          <a href="#threats" className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-bold">Threat Map</a>
          <button className="w-full mt-4 bg-cyan-600 text-white px-3 py-3 rounded-md font-bold">Member Portal</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
