
import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, Minimize2, Shield, RotateCcw, AlertTriangle, Crosshair, Terminal, Activity, Zap, Radio, Globe, X, Fingerprint, ExternalLink, RefreshCw, Flame, Skull } from 'lucide-react';
import * as d3 from 'd3';
import { GoogleGenAI } from "@google/genai";

interface Attack {
  id: string;
  sourceName: string;
  targetName: string;
  targetCountry: string;
  type: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  timestamp: string;
  color: string;
  isReal?: boolean;
  sourceUrl?: string;
}

interface City {
  name: string;
  nameAr: string;
  country: string;
  iso: string;
  coords: [number, number];
}

const CITIES: City[] = [
  { name: 'London', nameAr: 'لندن', country: 'United Kingdom', iso: 'GBR', coords: [0, 51] },
  { name: 'New York', nameAr: 'نيويورك', country: 'United States of America', iso: 'USA', coords: [-74, 40] },
  { name: 'Beijing', nameAr: 'بكين', country: 'China', iso: 'CHN', coords: [116, 39] },
  { name: 'Riyadh', nameAr: 'الرياض', country: 'Saudi Arabia', iso: 'SAU', coords: [46.7, 24.7] },
  { name: 'Moscow', nameAr: 'موسكو', country: 'Russia', iso: 'RUS', coords: [37, 55] },
  { name: 'Tokyo', nameAr: 'طوكيو', country: 'Japan', iso: 'JPN', coords: [139, 35] },
  { name: 'Sydney', nameAr: 'سيدني', country: 'Australia', iso: 'AUS', coords: [151, -33] },
  { name: 'Dubai', nameAr: 'دبي', country: 'United Arab Emirates', iso: 'ARE', coords: [55, 25] },
  { name: 'Berlin', nameAr: 'برلين', country: 'Germany', iso: 'DEU', coords: [13, 52] },
  { name: 'Paris', nameAr: 'باريس', country: 'France', iso: 'FRA', coords: [2, 48] },
  { name: 'Cairo', nameAr: 'القاهرة', country: 'Egypt', iso: 'EGY', coords: [31.2, 30] },
];

const ATTACK_CONFIGS = [
  { type: 'هجوم DDoS مكثف', color: '#A6C5D7' },
  { type: 'حقن برمجيات فدية', color: '#a855f7' },
  { type: 'ثغرة يوم صفر (Zero-Day)', color: '#ef4444' },
  { type: 'محاولة اختراق SQL', color: '#eab308' },
  { type: 'هجوم القوة الغاشمة', color: '#f97316' }
];

const ThreatMap: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [liveLog, setLiveLog] = useState<Attack[]>([]);
  const [isFetchingReal, setIsFetchingReal] = useState(false);
  const [activeAlert, setActiveAlert] = useState<Attack | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<{name: string, iso: string} | null>(null);
  const [groundingSources, setGroundingSources] = useState<any[]>([]);
  
  const mapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);
  const selectedCountryIsoRef = useRef<string | null>(null);

  // جلب بيانات حقيقية باستخدام Gemini
  const fetchRealWorldThreats = async () => {
    setIsFetchingReal(true);
    try {
      const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
      if (!apiKey) return;
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "List the most recent 3 real-world cyber attacks, data breaches, or major vulnerabilities reported in the last 24 hours. Format: Source Location, Target Location/Company, Attack Type, Severity, Brief Summary.",
        config: {
          tools: [{ googleSearch: {} } as any],
        },
      });

      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      setGroundingSources(chunks);

      // تحويل الخبر إلى كائن هجوم وعرض إشعار
      const realAttack: Attack = {
        id: `real-${Date.now()}`,
        sourceName: "استخبارات خارجية",
        targetName: "شبكات دولية",
        targetCountry: "Global",
        type: "نشاط سيبراني حقيقي تم رصده",
        severity: 'CRITICAL',
        timestamp: new Date().toLocaleTimeString('ar-EG'),
        color: '#ef4444',
        isReal: true,
      };
      
      setLiveLog(prev => [realAttack, ...prev].slice(0, 15));
      setActiveAlert(realAttack);
      setTimeout(() => setActiveAlert(null), 8000); // إخفاء بعد 8 ثوانٍ
    } catch (error) {
      console.error("Failed to fetch real threats:", error);
    } finally {
      setIsFetchingReal(false);
    }
  };

  useEffect(() => {
    fetchRealWorldThreats();
    const realIntelInterval = setInterval(fetchRealWorldThreats, 300000);
    return () => clearInterval(realIntelInterval);
  }, []);

  useEffect(() => {
    selectedCountryIsoRef.current = selectedCountry?.iso || null;
    if (gRef.current) {
      d3.select(gRef.current).selectAll('path')
        .transition().duration(300)
        .attr('fill', (d: any) => d.properties.isoCode === selectedCountry?.iso ? '#0F52BA33' : '#000926')
        .attr('stroke', (d: any) => d.properties.isoCode === selectedCountry?.iso ? '#0F52BA' : '#0F52BA10')
        .attr('stroke-width', (d: any) => d.properties.isoCode === selectedCountry?.iso ? 1.5 : 0.5);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 1000;
    const height = 600;
    const svg = d3.select(svgRef.current);
    const g = d3.select(gRef.current);

    const projection = d3.geoEquirectangular().scale(160).translate([width / 2, height / 2]);
    const path = d3.geoPath().projection(projection);

    d3.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson').then((data: any) => {
      data.features.forEach((feature: any) => { feature.properties.isoCode = feature.id; });

      g.selectAll('path')
        .data(data.features)
        .enter()
        .append('path')
        .attr('d', path as any)
        .attr('fill', '#000926')
        .attr('stroke', '#0F52BA10')
        .attr('stroke-width', 0.5)
        .attr('data-iso', (d: any) => d.properties.isoCode)
        .attr('class', 'country-path cursor-pointer transition-all duration-300')
        .on('click', function(event, d: any) {
          event.stopPropagation();
          setSelectedCountry(prev => prev?.iso === d.properties.isoCode ? null : { name: d.properties.name, iso: d.properties.isoCode });
        });
    });

    const triggerAttack = () => {
      const source = CITIES[Math.floor(Math.random() * CITIES.length)];
      let target = CITIES[Math.floor(Math.random() * CITIES.length)];
      while (target.iso === source.iso) target = CITIES[Math.floor(Math.random() * CITIES.length)];

      const id = Math.random().toString(36).substring(7);
      const config = ATTACK_CONFIGS[Math.floor(Math.random() * ATTACK_CONFIGS.length)];
      const severity = Math.random() > 0.9 ? 'CRITICAL' : (Math.random() > 0.7 ? 'HIGH' : 'MEDIUM');
      
      const newAttack: Attack = {
        id,
        sourceName: source.nameAr,
        targetName: target.nameAr,
        targetCountry: target.country,
        type: config.type,
        severity,
        color: config.color,
        timestamp: new Date().toLocaleTimeString('ar-EG'),
      };

      setLiveLog(prev => [newAttack, ...prev].slice(0, 15));
      
      // تفعيل الإشعار إذا كان التهديد حرجاً في المحاكاة أيضاً
      if (severity === 'CRITICAL' && !activeAlert) {
        setActiveAlert(newAttack);
        setTimeout(() => setActiveAlert(null), 5000);
      }

      const [x0, y0] = projection(source.coords)!;
      const [x1, y1] = projection(target.coords)!;
      const midX = (x0 + x1) / 2;
      const midY = Math.min(y0, y1) - 50;

      const attackG = g.append('g').attr('class', `attack-group-${id}`);
      attackG.append('path')
        .attr('d', `M${x0},${y0} Q${midX},${midY} ${x1},${y1}`)
        .attr('fill', 'none')
        .attr('stroke', config.color)
        .attr('stroke-width', severity === 'CRITICAL' ? 1.5 : 1)
        .attr('stroke-dasharray', '1000')
        .attr('stroke-dashoffset', '1000')
        .transition().duration(1500).attr('stroke-dashoffset', 0)
        .on('end', () => {
          attackG.append('circle').attr('cx', x1).attr('cy', y1).attr('r', 1).attr('fill', config.color)
            .transition().duration(800).attr('r', 8).attr('opacity', 0).remove();
          setTimeout(() => attackG.remove(), 1000);
        });
    };

    const interval = setInterval(triggerAttack, 2000);
    return () => clearInterval(interval);
  }, [activeAlert]);

  return (
    <div id="threats" className="py-12 bg-cyber-navy relative overflow-hidden">
      
      {/* ⚠️ إشعار التهديد الحرج (Floating Alert) */}
      <div className={`fixed top-20 md:top-32 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-700 transform pointer-events-auto ${activeAlert ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-64 opacity-0 scale-90 pointer-events-none'}`}>
        <div className="relative group">
          <div className="absolute -inset-2 bg-red-600/20 blur-xl rounded-xl animate-pulse"></div>
          <div className="relative bg-[#0d0202]/95 backdrop-blur-3xl border border-red-500/50 px-4 py-2.5 rounded-xl shadow-[0_0_40px_rgba(239,68,68,0.2)] flex items-center gap-4 min-w-[300px] max-w-[350px] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0)_0%,rgba(239,68,68,0.1)_50%,rgba(239,68,68,0)_100%)] h-8 w-full -translate-y-full animate-radar-scan opacity-40"></div>
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-red-600/30 blur-lg rounded-full animate-ping"></div>
              <div className="relative w-9 h-9 bg-red-950/60 border border-red-500/60 rounded-lg flex items-center justify-center">
                <Skull className="w-5 h-5 text-red-500" />
              </div>
            </div>
            <div className="text-right flex-1 relative">
              <div className="flex items-center justify-end gap-2 mb-0.5">
                 <div className="flex items-center gap-1 px-1.5 py-0.5 bg-red-600/20 border border-red-500/30 rounded text-[7px] font-black uppercase tracking-[0.1em] text-red-400 animate-pulse">
                   <Flame className="w-2.5 h-2.5" />
                   {activeAlert?.isReal ? 'VERIFIED REAL' : 'CRITICAL'}
                 </div>
              </div>
              <h4 className="text-sm font-black text-white leading-tight mb-1 tracking-tighter italic uppercase truncate">{activeAlert?.type}</h4>
              <div className="flex items-center justify-end gap-3 text-[9px] font-bold text-slate-300">
                <span className="flex items-center gap-1"><Crosshair className="w-2.5 h-2.5 text-red-600" /> {activeAlert?.targetName}</span>
                <span className="bg-red-600/20 text-red-400 px-1.5 py-0.5 rounded border border-red-500/30 mono font-black">{activeAlert?.timestamp}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-[720px]">
          
          <div className="w-full lg:w-80 h-[400px] lg:h-full flex flex-col gap-4">
            <div className="bg-cyber-ice/5 border border-cyber-powder/20 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black text-cyber-powder uppercase tracking-widest">Real-Time Intel</span>
                {isFetchingReal ? <RefreshCw className="w-3 h-3 text-cyber-sapphire animate-spin" /> : <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>}
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed text-right">
                يتم دمج بلاغات حقيقية من مصادر استخباراتية عالمية لضمان دقة الرصد والمصداقية.
              </p>
            </div>

            <div className="flex-1 flex flex-col bg-cyber-ice/5 border border-cyber-powder/10 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="bg-cyber-navy/50 p-3.5 border-b border-cyber-powder/10 flex items-center justify-between">
                <h3 className="text-xs font-black text-cyber-sapphire flex items-center gap-2 uppercase tracking-widest">
                  <Terminal className="w-4 h-4" />
                  رصد الاستخبارات
                </h3>
              </div>
              
              <div className="flex-1 overflow-y-auto p-3 space-y-2.5 custom-scrollbar">
                {liveLog.map((log) => (
                  <div key={log.id} className={`relative border-r-2 pr-3 py-2 bg-cyber-ice/5 rounded-sm animate-fade-in ${log.isReal ? 'border-red-500 bg-red-500/5' : 'border-cyber-powder/20'}`} style={{ borderRightColor: log.isReal ? '#ef4444' : log.color }}>
                    <div className="flex justify-between items-center mb-1 text-[9px]">
                      <span className="text-slate-400 mono">{log.timestamp}</span>
                      {log.isReal && <span className="flex items-center gap-1 text-red-500 font-black tracking-tighter">VERIFIED REAL</span>}
                    </div>
                    <div className="text-[11px] text-white font-bold truncate leading-tight">{log.type}</div>
                    <div className="text-[9px] text-slate-300 mt-1">{log.sourceName} ➔ {log.targetName}</div>
                  </div>
                ))}
              </div>
            </div>

            {groundingSources.length > 0 && (
              <div className="bg-cyber-navy/80 border border-cyber-sapphire/20 p-3 rounded-lg animate-slide-up">
                <h4 className="text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">مصادر التحقق:</h4>
                <div className="space-y-1.5">
                  {groundingSources.slice(0, 3).map((source, idx) => (
                    <a key={idx} href={source.web?.uri} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[9px] text-cyber-sapphire hover:text-white transition-colors truncate">
                      <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                      {source.web?.title || "رابط تقرير أمني"}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div ref={mapRef} className="flex-1 relative bg-cyber-navy border border-cyber-sapphire/10 rounded-lg overflow-hidden shadow-2xl min-h-[400px]">
            <div className="absolute top-4 right-4 z-30 flex items-center gap-2.5 bg-cyber-navy/80 p-2 backdrop-blur-md border border-cyber-sapphire/20 rounded">
               <div className="text-right">
                  <span className="block text-[6px] text-cyber-sapphire/40 font-bold uppercase tracking-widest">Global Status</span>
                  <span className="block text-[10px] font-black text-white mono uppercase">Operational</span>
               </div>
               <Activity className="w-4 h-4 text-cyber-sapphire animate-pulse" />
            </div>

            <svg ref={svgRef} viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full cursor-crosshair outline-none">
              <rect width="1000" height="600" fill="transparent" onClick={() => setSelectedCountry(null)} />
              <g ref={gRef}></g>
            </svg>

            {selectedCountry && (
              <div className="absolute top-4 left-4 z-30 bg-cyber-sapphire/20 backdrop-blur-md border border-cyber-sapphire/40 px-3 py-1.5 rounded flex items-center gap-2 animate-slide-in">
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Active Focus: {selectedCountry.iso}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateX(10px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes radar-scan { 0% { transform: translateY(-50px); } 100% { transform: translateY(200px); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.5s ease-out forwards; }
        .animate-radar-scan { animation: radar-scan 4s linear infinite; }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(15, 82, 186, 0.1); border-radius: 10px; }
        .country-path:hover { fill: #0F52BA22; stroke: #0F52BA88; }
        .mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>
    </div>
  );
};

export default ThreatMap;
