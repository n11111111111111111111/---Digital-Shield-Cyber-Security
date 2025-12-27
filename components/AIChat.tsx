
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Cpu } from 'lucide-react';
import { getCyberAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'مرحباً بك في دجلة سايبر. أنا "حارس دجلة" مساعدك الذكي للأمن الرقمي. كيف يمكنني تأمين رحلتك التقنية اليوم؟' }
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
          className="bg-cyan-600 hover:bg-cyan-500 text-white p-5 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 group relative border border-cyan-400/30"
          title="اسأل حارس دجلة"
        >
          <div className="absolute inset-0 rounded-full border border-cyan-400/50 animate-ping opacity-20"></div>
          <Bot className="w-8 h-8" />
        </button>
      ) : (
        <div className="relative animate-fade-in">
          <div className="bg-slate-900 w-[90vw] sm:w-[380px] h-[500px] rounded-2xl border border-cyan-500/20 shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl">
            <div className="p-4 bg-slate-800/80 border-b border-cyan-500/10 flex justify-between items-center">
              <button onClick={() => setIsOpen(false)} className="text-slate-400"><X className="w-5 h-5" /></button>
              <div className="text-right">
                <span className="block font-black text-white text-[10px] uppercase">Tigris Guardian AI</span>
                <span className="block text-[8px] text-cyan-400 font-bold">Online & Active</span>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-[12px] leading-relaxed ${
                    msg.role === 'user' ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-slate-800 text-slate-200 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && <div className="text-[10px] text-cyan-500 italic text-right">جاري التحليل...</div>}
            </div>

            <div className="p-4 bg-slate-950/50 border-t border-slate-800">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="اسأل حارس دجلة..."
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 text-right"
                />
                <button onClick={handleSend} className="bg-cyan-600 text-white p-2 rounded-lg"><Send className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
