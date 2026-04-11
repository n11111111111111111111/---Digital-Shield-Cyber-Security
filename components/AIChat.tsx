
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
    <div className="fixed bottom-6 left-6 z-[10002]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-cyber-sapphire hover:bg-cyber-sapphire/90 text-white w-16 h-16 rounded-full shadow-[0_0_40px_rgba(15,82,186,0.4)] flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group relative border border-cyber-powder/30"
          title="اسأل حارس دجلة"
        >
          <div className="absolute inset-0 rounded-full border border-cyber-powder/50 animate-ping opacity-20"></div>
          <Bot className="w-8 h-8" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-cyber-navy animate-pulse"></div>
        </button>
      ) : (
        <div className="relative animate-fade-in">
          <div className="bg-cyber-navy w-[92vw] sm:w-[400px] h-[550px] rounded-3xl border border-cyber-sapphire/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden backdrop-blur-2xl">
            <div className="p-5 bg-cyber-ice/5 border-b border-cyber-sapphire/20 flex justify-between items-center">
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
              <div className="text-right flex items-center gap-3">
                <div className="text-right">
                  <span className="block font-black text-white text-[11px] uppercase tracking-wider">Tigris Guardian AI</span>
                  <span className="block text-[9px] text-cyber-powder font-bold">نشط الآن - حارس دجلة</span>
                </div>
                <div className="w-10 h-10 bg-cyber-sapphire/20 rounded-xl border border-cyber-sapphire/30 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-cyber-sapphire" />
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5 custom-scrollbar bg-[radial-gradient(circle_at_50%_50%,rgba(15,82,186,0.03),transparent_70%)]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end animate-slide-up'}`}>
                  <div className={`max-w-[88%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-lg ${
                    msg.role === 'user' 
                      ? 'bg-cyber-sapphire text-white rounded-br-none border border-white/10' 
                      : 'bg-cyber-ice/10 text-slate-100 rounded-bl-none border border-cyber-powder/10 backdrop-blur-md'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-end animate-pulse">
                  <div className="bg-cyber-ice/10 p-4 rounded-2xl rounded-bl-none border border-cyber-powder/10 flex gap-1.5 items-center">
                    <span className="text-[10px] text-slate-500 font-bold ml-2">جاري التفكير</span>
                    <div className="w-1.5 h-1.5 bg-cyber-sapphire rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-cyber-sapphire rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-cyber-sapphire rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 bg-cyber-ice/5 border-t border-cyber-powder/10">
              <div className="flex gap-2 bg-cyber-navy/80 p-1.5 rounded-2xl border border-cyber-powder/20 focus-within:border-cyber-sapphire/50 transition-all">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="تحدث مع حارس دجلة..."
                  className="flex-1 bg-transparent px-4 py-2 text-sm text-white focus:outline-none text-right"
                />
                <button 
                  onClick={handleSend} 
                  disabled={!input.trim() || isLoading}
                  className="bg-cyber-sapphire text-white p-3 rounded-xl hover:bg-cyber-sapphire/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-90"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
