
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Cpu } from 'lucide-react';
import { getCyberAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'مرحباً! أنا مساعدك الذكي في الأمن السيبراني. كيف يمكنني مساعدتك اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getCyberAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-cyan-600 hover:bg-cyan-500 text-white p-5 rounded-full shadow-[0_0_30px_rgba(8,145,178,0.4)] flex items-center justify-center transition-all transform hover:scale-110 group relative border border-cyan-400/30"
          title="اسأل الذكاء الاصطناعي"
        >
          <div className="absolute inset-0 rounded-full border border-cyan-400/50 animate-ping opacity-20"></div>
          <Bot className="w-8 h-8 group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-950"></div>
        </button>
      ) : (
        <div className="relative animate-fade-in">
          <div className="bg-slate-900/95 w-[90vw] sm:w-[400px] h-[550px] rounded-xl border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden backdrop-blur-xl">
            <div className="p-4 bg-slate-800/80 border-b border-cyan-500/20 flex justify-between items-center">
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-700 rounded-md">
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="block font-black text-white text-[12px] uppercase tracking-tighter">Cyber Sentinel AI</span>
                  <span className="block text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Online</span>
                </div>
                <div className="bg-cyan-600 p-2 rounded-lg shadow-inner">
                  <Cpu className="w-5 h-5 text-white animate-pulse" />
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.05),transparent_50%)] pointer-events-none"></div>
              
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'} relative z-10`}>
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-lg ${
                    msg.role === 'user' 
                      ? 'bg-cyan-600 text-white rounded-br-none border border-cyan-500 shadow-cyan-900/20' 
                      : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700 shadow-black/40'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-end relative z-10">
                  <div className="bg-slate-800 p-3 rounded-2xl border border-slate-700 flex gap-1.5 items-center">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-950/50 border-t border-slate-800 relative z-10">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="كيف يمكنني تأمين بريدي الإلكتروني؟"
                  className="flex-1 bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-slate-600"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-cyan-600 hover:bg-cyan-500 text-white p-2.5 rounded-xl disabled:opacity-50 transition-all active:scale-95 shadow-lg shadow-cyan-900/20"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        .animate-fade-in { animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(20px) scale(0.95); } 
          to { opacity: 1; transform: translateY(0) scale(1); } 
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default AIChat;
