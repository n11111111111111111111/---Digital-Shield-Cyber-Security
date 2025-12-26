
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
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
          className="bg-cyan-600 hover:bg-cyan-500 text-white p-4 rounded-full shadow-2xl shadow-cyan-500/50 flex items-center gap-3 transition-all transform hover:scale-110"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="font-bold text-sm pr-2 hidden sm:inline">اسأل الذكاء الاصطناعي</span>
        </button>
      ) : (
        <div className="bg-slate-900 w-[90vw] sm:w-[400px] h-[500px] rounded-xl border border-cyan-500/30 shadow-2xl flex flex-col overflow-hidden">
          <div className="p-4 bg-slate-800 border-b border-cyan-500/20 flex justify-between items-center">
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">مساعد الدرع</span>
              <div className="bg-cyan-600 p-1.5 rounded-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-cyan-600 text-white rounded-br-none' 
                    : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 flex gap-1">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-slate-950 border-t border-slate-800">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="اسأل عن التشفير، الجدران النارية..."
                className="flex-1 bg-slate-900 border border-slate-800 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-cyan-600 hover:bg-cyan-500 text-white p-2 rounded disabled:opacity-50 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
