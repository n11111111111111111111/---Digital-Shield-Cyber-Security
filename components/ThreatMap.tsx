
import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, Minimize2, Shield, RotateCcw, AlertTriangle, Crosshair, Terminal, Activity, Zap, Radio, ShieldAlert, Cpu, Flame, Skull } from 'lucide-react';
import * as d3 from 'd3';

interface Attack {
  id: string;
  sourceName: string;
  targetName: string;
  type: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  timestamp: string;
  color: string;
}

const CITIES: { name: string; nameAr: string; coords: [number, number] }[] = [
  { name: 'London', nameAr: 'لندن', coords: [0, 51] },
  { name: 'New York', nameAr: 'نيويورك', coords: [-74, 40] },
  { name: 'Beijing', nameAr: 'بكين', coords: [116, 39] },
  { name: 'Riyadh', nameAr: 'الرياض', coords: [46.7, 24.7] },
  { name: 'Moscow', nameAr: 'موسكو', coords: [37, 55] },
  { name: 'Tokyo', nameAr: 'طوكيو', coords: [139, 35] },
  { name: 'Sydney', nameAr: 'سيدني', coords: [151, -33] },
  { name: 'Dubai', nameAr: 'دبي', coords: [55, 25] },
  { name: 'Berlin', nameAr: 'برلين', coords: [13, 52] },
  { name: 'Paris', nameAr: 'باريس', coords: [2, 48] },
  { name: 'San Francisco', nameAr: 'سان فرانسيسكو', coords: [-122, 37] },
  { name: 'Cairo', nameAr: 'القاهرة', coords: [31.2, 30] },
];

const ATTACK_CONFIGS = [
  { type: 'هجوم DDoS مكثف', color: '#22d3ee' },
  { type: 'حقن برمجيات فدية', color: '#a855f7' },
  { type: 'ثغرة يوم صفر (Zero-Day)', color: '#ef4444' },
  { type: 'محاولة اختراق SQL', color: '#eab308' },
  { type: 'هجوم القوة الغاشمة', color: '#f97316' },
  { type: 'تسلل عبر الأنفاق', color: '#22c55e' }
];

const ThreatMap: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [liveLog, setLiveLog] = useState<Attack[]>([]);
  const [activeAlert, setActiveAlert] = useState<Attack | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<{name: string, x: number, y: number} | null>(null);
  
  const mapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 1000;
    const height = 600;
    const svg = d3.select(svgRef.current);
    const g = d3.select(gRef.current);

    const projection = d3.geoEquirectangular()
      .scale(160)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    d3.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson').then((data: any) => {
      g.selectAll('path')
        .data(data.features)
        .enter()
        .append('path')
        .attr('d', path as any)
        .attr('fill', '#05070a')
        .attr('stroke', '#22d3ee10')
        .attr('stroke-width', 0.5)
        .attr('class', 'country-path cursor-crosshair transition-all duration-300')
        .on('mouseover', function(event, d: any) {
          d3.select(this).attr('fill', '#0f172a').attr('stroke', '#22d3ee44');
          setHoveredCountry({
            name: d.properties.name,
            x: event.clientX,
            y: event.clientY
          });
        })
        .on('mousemove', function(event) {
          setHoveredCountry(prev => prev ? { ...prev, x: event.clientX, y: event.clientY } : null);
        })
        .on('mouseout', function() {
          d3.select(this).attr('fill', '#05070a').attr('stroke', '#22d3ee10');
          setHoveredCountry(null);
        });

      CITIES.forEach(city => {
        const [cx, cy] = projection(city.coords)!;
        g.append('circle')
          .attr('cx', cx).attr('cy', cy).attr('r', 1)
          .attr('fill', '#22d3ee').attr('opacity', 0.3);
      });
    });

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 15])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    const triggerAttack = () => {
      const source = CITIES[Math.floor(Math.random() * CITIES.length)];
      let target = CITIES[Math.floor(Math.random() * CITIES.length)];
      while (target.name === source.name) {
        target = CITIES[Math.floor(Math.random() * CITIES.length)];
      }

      const id = Math.random().toString(36).substring(7);
      const config = ATTACK_CONFIGS[Math.floor(Math.random() * ATTACK_CONFIGS.length)];
      const severity = config.color === '#ef4444' ? 'CRITICAL' : (Math.random() > 0.6 ? 'HIGH' : 'MEDIUM');
      
      const newAttack: Attack = {
        id,
        sourceName: source.nameAr,
        targetName: target.nameAr,
        type: config.type,
        severity,
        color: config.color,
        timestamp: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      };

      setLiveLog(prev => [newAttack, ...prev].slice(0, 15));

      if (severity === 'CRITICAL') {
        setActiveAlert(newAttack);
        setTimeout(() => setActiveAlert(null), 5000);
      }

      const [x0, y0] = projection(source.coords)!;
      const [x1, y1] = projection(target.coords)!;
      const midX = (x0 + x1) / 2;
      const midY = Math.min(y0, y1) - (Math.abs(x1 - x0) * 0.25);

      const attackG = g.append('g').attr('class', `attack-group-${id}`);

      const arcPath = attackG.append('path')
        .attr('d', `M${x0},${y0} Q${midX},${midY} ${x1},${y1}`)
        .attr('fill', 'none')
        .attr('stroke', config.color)
        .attr('stroke-width', severity === 'CRITICAL' ? 1.8 : 1.2)
        .attr('stroke-dasharray', '1000')
        .attr('stroke-dashoffset', '1000')
        .style('filter', `drop-shadow(0 0 5px ${config.color})`);

      arcPath.transition()
        .duration(1500)
        .ease(d3.easeCubicOut)
        .attr('stroke-dashoffset', 0)
        .on('end', () => {
          const hit = attackG.append('circle')
            .attr('cx', x1).attr('cy', y1)
            .attr('r', 1.5)
            .attr('fill', config.color);
            
          hit.transition()
            .duration(1000)
            .attr('r', 6)
            .attr('opacity', 0)
            .remove();

          setTimeout(() => {
            attackG.transition().duration(800).style('opacity', 0).remove();
          }, 1000);
        });
    };

    const interval = setInterval(triggerAttack, 1200);
    return () => {
      clearInterval(interval);
      svg.on('.zoom', null);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!mapRef.current) return;
    if (!document.fullscreenElement) {
      mapRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const resetZoom = () => {
    if (svgRef.current) {
      d3.select(svgRef.current)
        .transition()
        .duration(750)
        .call(d3.zoom<SVGSVGElement, unknown>().transform, d3.zoomIdentity);
    }
  };

  return (
    <div id="threats" className="py-12 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03),transparent_70%)] pointer-events-none"></div>
      
      {/* ⚠️ إشعار التهديد الحرج - الحجم المصغر (Sleek Mode) */}
      <div className={`fixed top-32 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-700 transform pointer-events-auto ${activeAlert ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-64 opacity-0 scale-90 pointer-events-none'}`}>
        <div className="relative group">
          {/* تأثيرات الضوء المحيطي المصغرة */}
          <div className="absolute -inset-3 bg-red-600/20 blur-2xl rounded-xl animate-pulse"></div>
          
          <div className="relative bg-[#0d0202]/95 backdrop-blur-3xl border border-red-500/50 px-6 py-4 rounded-xl shadow-[0_0_60px_rgba(239,68,68,0.3)] flex items-center gap-6 min-w-[380px] max-w-[420px] overflow-hidden">
            
            {/* أنيميشن الرادار الداخلي */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0)_0%,rgba(239,68,68,0.1)_50%,rgba(239,68,68,0)_100%)] h-10 w-full -translate-y-full animate-radar-scan opacity-40"></div>
            
            {/* أيقونة التنبيه المصغرة */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-red-600/30 blur-xl rounded-full animate-ping"></div>
              <div className="relative w-12 h-12 bg-red-950/60 border border-red-500/60 rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
                <Skull className="w-7 h-7 text-red-500" />
              </div>
            </div>

            <div className="text-right flex-1 relative">
              <div className="flex items-center justify-end gap-2 mb-1">
                 <div className="flex items-center gap-1.5 px-2 py-0.5 bg-red-600/20 border border-red-500/30 rounded text-[8px] font-black uppercase tracking-[0.2em] text-red-400 animate-pulse">
                   <Flame className="w-3 h-3" />
                   CRITICAL BREACH
                 </div>
                 <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
              </div>
              
              <h4 className="text-lg font-black text-white leading-tight mb-1.5 tracking-tighter italic uppercase text-shadow-red">
                {activeAlert?.type}
              </h4>
              
              <div className="flex items-center justify-end gap-4 text-[11px] font-bold text-slate-300">
                <span className="flex items-center gap-1.5"><Crosshair className="w-3 h-3 text-red-600" /> {activeAlert?.targetName}</span>
                <span className="bg-red-600/20 text-red-400 px-2 py-0.5 rounded border border-red-500/30 mono font-black">
                  {activeAlert?.timestamp}
                </span>
              </div>
            </div>

            {/* الحواف التزيينية المصغرة */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500/60"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500/60"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-5 h-[720px]">
          
          {/* سجل الرصد (يسار) */}
          <div className="w-full lg:w-72 h-full flex flex-col bg-slate-900/30 border border-slate-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
            <div className="bg-slate-900/50 p-3.5 border-b border-slate-800/50 flex items-center justify-between">
              <h3 className="text-xs font-black text-cyan-500 flex items-center gap-2 uppercase tracking-widest">
                <Terminal className="w-4 h-4" />
                رصد البيانات
              </h3>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3 space-y-2.5 custom-scrollbar">
              {liveLog.map((log) => (
                <div key={log.id} className="group relative border-r-2 pr-3 py-2 bg-slate-900/40 rounded-sm animate-fade-in hover:bg-slate-800/50 transition-colors" style={{ borderRightColor: log.color }}>
                  <div className="flex justify-between items-center mb-1 text-[9px]">
                    <span className="text-slate-500 mono">{log.timestamp}</span>
                    <span className="font-black" style={{ color: log.color }}>{log.severity}</span>
                  </div>
                  <div className="text-[11px] text-white font-bold truncate leading-tight">
                    {log.type}
                  </div>
                  <div className="text-[9px] text-slate-400 mt-1 flex items-center gap-1.5">
                    <span className="truncate max-w-[70px]">{log.sourceName}</span>
                    <span className="opacity-20 text-cyan-400">→</span>
                    <span className="font-bold text-slate-300 truncate max-w-[70px]">{log.targetName}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* الخريطة (يمين) */}
          <div 
            ref={mapRef}
            className={`flex-1 relative bg-[#02050a] border border-cyan-500/10 rounded-lg overflow-hidden transition-all duration-500 shadow-2xl ${
              isFullscreen ? 'fixed inset-0 z-[200] rounded-none' : ''
            }`}
          >
            <div className="absolute top-4 right-4 z-30 flex items-center gap-2.5 bg-slate-950/80 p-1.5 px-2.5 backdrop-blur-md border border-cyan-500/20 rounded shadow-lg">
              <div className="flex flex-col items-end">
                <span className="text-[6px] text-cyan-500/40 font-bold tracking-[0.4em] uppercase mono">Lead</span>
                <span className="text-[11px] font-black text-white glow-text mono">Abbas Habib</span>
              </div>
              <div className="w-6 h-6 border border-cyan-500/20 rounded flex items-center justify-center bg-cyan-500/5">
                <Shield className="w-3.5 h-3.5 text-cyan-400/80" />
              </div>
            </div>

            <div className="absolute bottom-4 right-4 z-30 flex flex-col gap-2">
              <button onClick={toggleFullscreen} className="p-2 bg-slate-900/80 border border-slate-800 text-cyan-500/70 hover:bg-cyan-600 hover:text-white transition-all rounded">
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button onClick={resetZoom} className="p-2 bg-slate-900/80 border border-slate-800 text-cyan-500/70 hover:bg-cyan-600 hover:text-white transition-all rounded">
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <svg ref={svgRef} viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full cursor-crosshair outline-none">
              <rect width="1000" height="600" fill="transparent" />
              <g ref={gRef}></g>
            </svg>

            <div className="absolute inset-0 pointer-events-none opacity-5">
              <div className="h-[1px] bg-cyan-400 w-full absolute animate-radar-scan-map"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes radar-scan {
          0% { transform: translateY(-50px); }
          100% { transform: translateY(200px); }
        }
        @keyframes radar-scan-map {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-radar-scan {
          animation: radar-scan 4s linear infinite;
        }
        .animate-radar-scan-map {
          animation: radar-scan-map 8s linear infinite;
        }
        .text-shadow-red {
          text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
        }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(34, 211, 238, 0.1); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default ThreatMap;
