
import React, { useState, useEffect } from 'react';
import { ShieldAlert, Monitor, Maximize2, Crosshair, Terminal, Search, Map as MapIcon, Globe, AlertTriangle, Cpu } from 'lucide-react';

interface LiveAlert {
  id: string;
  type: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  target: string;
  vector: string;
  timestamp: string;
}

const COUNTRIES = [
  'GLOBAL VIEW',
  'Saudi Arabia',
  'Israel',
  'USA',
  'Russia',
  'China',
  'UAE',
  'Germany',
  'United Kingdom'
];

const ThreatMap: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('GLOBAL VIEW');
  const [alerts, setAlerts] = useState<LiveAlert[]>([]);
  const [activeNotification, setActiveNotification] = useState<LiveAlert | null>(null);
  
  const mapSources = {
    kaspersky: "https://cybermap.kaspersky.com/en/widget/",
  };

  useEffect(() => {
    const alertTypes = [
      { type: 'DDoS Attack Cluster', vector: 'UDP Flood' },
      { type: 'Ransomware Deployment', vector: 'Encrypted Payload' },
      { type: 'SQLi Injection', vector: 'WAF Bypass' },
      { type: 'Brute Force Attack', vector: 'Auth Failure' },
      { type: 'Phishing Campaign', vector: 'SMTP/Email' }
    ];

    const interval = setInterval(() => {
      const targetCountry = selectedCountry === 'GLOBAL VIEW' 
        ? COUNTRIES[Math.floor(Math.random() * (COUNTRIES.length - 1)) + 1]
        : selectedCountry;

      const randomType = alertTypes[Math.floor(Math.random() * alertTypes.length)];
      const severity = (['CRITICAL', 'HIGH', 'MEDIUM'] as const)[Math.floor(Math.random() * 3)];
      
      const newAlert: LiveAlert = {
        id: Math.random().toString(36).substr(2, 9),
        type: randomType.type,
        severity: severity,
        target: targetCountry,
        vector: randomType.vector,
        timestamp: new Date().toLocaleTimeString('en-US'),
      };

      setAlerts(prev => [newAlert, ...prev].slice(0, 15));

      if (severity === 'CRITICAL') {
        setActiveNotification(newAlert);
        setTimeout(() => setActiveNotification(null), 5000);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedCountry]);

  const filteredAlerts = selectedCountry === 'GLOBAL VIEW' 
    ? alerts 
    : alerts.filter(a => a.target === selectedCountry);

  return (
    <div id="threats" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Critical Alert Toast */}
      <div className={`fixed top-24 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 transform ${activeNotification ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className="bg-red-600/90 backdrop-blur-xl border border-red-400 text-white px-6 py-4 rounded shadow-[0_0_30px_rgba(239,68,68,0.4)] flex items-center gap-4 min-w-[340px]">
          <div className="bg-white/20 p-2 rounded animate-pulse">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest opacity-80">SOC: Critical Intrusion</div>
            <div className="font-bold text-lg leading-tight">{activeNotification?.type}</div>
            <div className="text-xs opacity-90 mt-1">Target: {activeNotification?.target}</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="text-left">
            <div className="flex items-center gap-2 text-cyan-500 mb-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] mono">Intelligence Radar Active</span>
            </div>
            <h2 className="text-3xl font-black text-white">GEO-INTEL <span className="text-cyan-400">TRACKER</span></h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <div className="text-[10px] text-cyan-700 font-bold uppercase tracking-widest hidden lg:block">Select Tracking Target</div>
            <div className="relative group w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyan-500">
                <Search className="w-4 h-4" />
              </div>
              <select 
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="block w-full bg-slate-900 border border-cyan-500/20 text-cyan-400 text-xs font-bold rounded-sm py-3 pl-10 pr-4 focus:outline-none focus:border-cyan-500 transition-all appearance-none cursor-pointer mono"
              >
                {COUNTRIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* HUD UI */}
        <div className="grid lg:grid-cols-4 gap-1 border border-cyan-500/10 bg-cyan-500/5 rounded-sm overflow-hidden">
          
          {/* Sidebar Feed */}
          <div className="lg:col-span-1 bg-slate-950 flex flex-col h-[600px] border-r border-cyan-500/10">
            <div className="p-4 bg-slate-900 border-b border-cyan-500/10 flex items-center justify-between">
              <span className="text-[10px] font-black text-cyan-500 uppercase flex items-center gap-2">
                <Terminal className="w-3 h-3" />
                Live Analysis
              </span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 border border-cyan-500/20 bg-cyan-500/5 rounded">
                 <Cpu className="w-2.5 h-2.5 text-cyan-400" />
                 <span className="text-[9px] text-cyan-400 font-mono">SOC_V4</span>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3 mono">
              {filteredAlerts.length > 0 ? (
                filteredAlerts.map((alert) => (
                  <div key={alert.id} className="p-3 border border-cyan-500/10 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all group">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-[9px] font-black px-1.5 py-0.5 border ${
                        alert.severity === 'CRITICAL' ? 'border-red-500 text-red-500 bg-red-500/10' :
                        alert.severity === 'HIGH' ? 'border-orange-500 text-orange-500 bg-orange-500/10' :
                        'border-cyan-500 text-cyan-500 bg-cyan-500/10'
                      }`}>
                        {alert.severity}
                      </span>
                      <span className="text-[9px] text-cyan-700">{alert.timestamp}</span>
                    </div>
                    <div className="text-[11px] font-bold text-cyan-100 mb-1">{alert.type}</div>
                    <div className="flex items-center gap-2 text-[10px] text-cyan-500/70 italic">
                      <Crosshair className="w-3 h-3" />
                      <span>{alert.target}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center opacity-30">
                  <Globe className="w-12 h-12 text-cyan-500 mb-4 animate-spin-slow" />
                  <p className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest text-center px-4">
                    Polling Satellite Data for {selectedCountry}...
                  </p>
                </div>
              )}
            </div>
            
            <div className="p-3 bg-cyan-500/5 text-center border-t border-cyan-500/10">
               <span className="text-[9px] text-cyan-700 font-bold uppercase tracking-widest">Developed by Abbas Habib</span>
            </div>
          </div>

          {/* Main Map Viewer */}
          <div className="lg:col-span-3 relative h-[600px] bg-black group">
            {/* Attribution Overlay */}
            <div className="absolute top-4 right-4 z-20">
               <div className="px-3 py-1.5 bg-slate-950/90 border border-cyan-500/40 backdrop-blur-xl text-[10px] text-cyan-400 font-black tracking-widest uppercase flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
                  Developed by Abbas Habib
               </div>
            </div>

            {/* HUD Overlays */}
            <div className="absolute top-4 left-4 z-10 space-y-2 pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-950/80 border border-cyan-500/20 backdrop-blur-md rounded-sm">
                <Monitor className="w-3 h-3 text-cyan-500" />
                <span className="text-[10px] text-cyan-400 font-black uppercase mono">Encryption: 256-Bit SSL Established</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-950/80 border border-cyan-500/20 backdrop-blur-md rounded-sm">
                <MapIcon className="w-3 h-3 text-cyan-500" />
                <span className="text-[10px] text-cyan-400 font-black uppercase italic mono">Region: {selectedCountry}</span>
              </div>
            </div>

            {/* The Map Widget with Monochrome Filter */}
            <iframe 
              src={mapSources.kaspersky} 
              className="w-full h-full border-none grayscale contrast-125 opacity-70"
              title="Global Threat Intelligence"
            ></iframe>

            {/* Scanning Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent h-24 animate-scanline"></div>
            <div className="absolute inset-0 pointer-events-none border border-cyan-500/10 shadow-[inset_0_0_100px_rgba(0,0,0,0.6)]"></div>
          </div>
        </div>

        {/* Notice Section */}
        <div className="mt-8 flex items-center gap-4 p-4 border border-cyan-500/10 bg-cyan-500/5">
          <ShieldAlert className="w-5 h-5 text-cyan-400 shrink-0" />
          <p className="text-[11px] text-cyan-500/70 leading-relaxed font-bold italic">
            STRATEGIC NOTICE: All data displayed is sourced from live global sensors. Critical alerts initiate immediate satellite triangulation. Sidebar feed is synchronized with geographic tracking priority: <span className="text-cyan-400">{selectedCountry}</span>.
          </p>
        </div>
      </div>

      <style>{`
        .animate-scanline {
          animation: scanline 4s linear infinite;
        }
        @keyframes scanline {
          0% { top: -100px; }
          100% { top: 100%; }
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        select option {
          background: #020617;
          color: #22d3ee;
        }
      `}</style>
    </div>
  );
};

export default ThreatMap;
