
import React, { useState } from 'react';
import { COMMUNITY_POSTS } from '../constants';
import { UserCheck, ShieldAlert, Share2, Info, Clock, Terminal, Send, Lock, AlertCircle } from 'lucide-react';
import { CommunityPost } from '../types';

interface CommunitySectionProps {
  isAuthenticated: boolean;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ isAuthenticated }) => {
  const [posts, setPosts] = useState<CommunityPost[]>(COMMUNITY_POSTS);
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '', tag: 'Intelligence' });

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return;

    const post: CommunityPost = {
      id: Date.now().toString(),
      author: 'Expert_Contributor',
      rank: 'Verified Member',
      title: newPost.title,
      content: newPost.content,
      timestamp: 'الآن',
      tag: newPost.tag
    };

    setPosts([post, ...posts]);
    setNewPost({ title: '', content: '', tag: 'Intelligence' });
    setShowForm(false);
  };

  return (
    <section id="community" className="py-24 bg-slate-950 border-y border-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-right">
            <div className="inline-flex items-center gap-3 text-cyan-500 text-[10px] font-black uppercase tracking-[0.5em] mb-6 px-3 py-1 bg-cyan-500/5 border border-cyan-500/20 rounded-sm">
              <Terminal className="w-4 h-4" />
              Intelligence Bulletin Board
            </div>
            <h2 className="text-5xl font-black text-white">لوحة <span className="text-cyan-400 italic">الاستخبارات</span></h2>
            <p className="text-slate-500 mt-4 max-w-2xl leading-relaxed">
              منصة النشر الموحد للمعلومات الاستخباراتية. يقتصر التفاعل على استهلاك المعرفة التقنية وتحديثات التهديدات العالمية.
            </p>
          </div>
          
          <button 
            onClick={() => {
              if (isAuthenticated) setShowForm(!showForm);
              else alert('يجب تسجيل الدخول كخبير لتتمكن من النشر في هذا القسم.');
            }}
            className={`group relative overflow-hidden px-10 py-4 rounded-lg font-black transition-all flex items-center gap-3 shadow-2xl ${
              isAuthenticated 
                ? 'bg-slate-900 hover:bg-cyan-600 text-cyan-400 hover:text-white border border-cyan-500/30' 
                : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60'
            }`}
          >
            {showForm ? 'إلغاء التقرير' : 'إرسال استخبارات جديدة'}
            <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </div>

        {!isAuthenticated && (
          <div className="mb-12 bg-cyan-900/10 border border-cyan-500/20 p-4 rounded-lg flex items-center justify-between flex-row-reverse text-right">
            <div className="flex items-center gap-3">
              <span className="text-sm text-cyan-300 font-bold">يمكنك تصفح التقارير، لكن النشر متاح فقط للخبراء المعتمدين.</span>
              <AlertCircle className="w-5 h-5 text-cyan-500" />
            </div>
          </div>
        )}

        {showForm && isAuthenticated && (
          <div className="mb-16 animate-fade-in">
            <div className="bg-slate-900/60 border border-cyan-500/20 p-10 rounded-2xl backdrop-blur-xl shadow-inner">
              <div className="flex items-center gap-2 mb-8 text-cyan-500/60">
                <Lock className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Secure Posting Module</span>
              </div>
              <form onSubmit={handlePost} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
                  <div className="space-y-3">
                    <label className="text-[11px] text-slate-400 font-black uppercase tracking-widest mr-1">عنوان التقرير</label>
                    <input 
                      type="text" 
                      value={newPost.title}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      placeholder="مثال: رصد هجمات استغلال لثغرة CVE-2024-XXXX"
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 text-right transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] text-slate-400 font-black uppercase tracking-widest mr-1">التصنيف الأمني</label>
                    <select 
                      value={newPost.tag}
                      onChange={(e) => setNewPost({...newPost, tag: e.target.value})}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 text-right appearance-none cursor-pointer"
                    >
                      <option value="Intelligence">معلومات عامة (OSINT)</option>
                      <option value="Malware">تحليل برمجيات (Malware)</option>
                      <option value="Network">أمن البنية التحتية</option>
                      <option value="Breach">تقارير اختراق</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3 text-right">
                  <label className="text-[11px] text-slate-400 font-black uppercase tracking-widest mr-1">المحتوى التقني (Technical Summary)</label>
                  <textarea 
                    rows={5}
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    placeholder="قم بإدراج تفاصيل التهديد، مؤشرات الاختراق (IOCs)، والتوصيات الفنية..."
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 text-right transition-all"
                  ></textarea>
                </div>
                <div className="flex justify-start">
                  <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 text-white px-12 py-4 rounded-xl font-black transition-all flex items-center gap-3 group shadow-lg shadow-cyan-900/30">
                    تأكيد النشر الرسمي
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rotate-180" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="group bg-slate-900/30 border border-slate-800/40 p-8 rounded-2xl hover:border-cyan-500/20 transition-all flex flex-col md:flex-row gap-10 items-start relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-1.5 h-full bg-cyan-600/10 group-hover:bg-cyan-500 transition-colors"></div>
              
              <div className="shrink-0 flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center text-cyan-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all">
                  <UserCheck className="w-10 h-10" />
                </div>
                <div className="text-center">
                  <p className="text-white text-[12px] font-black">{post.author}</p>
                  <span className="text-[9px] text-cyan-600 font-bold uppercase tracking-[0.2em]">{post.rank}</span>
                </div>
              </div>

              <div className="flex-1 text-right">
                <div className="flex flex-wrap flex-row-reverse gap-5 items-center mb-5">
                  <span className="px-4 py-1.5 bg-cyan-500/5 border border-cyan-500/10 text-[10px] text-cyan-400 font-black uppercase tracking-widest rounded-md">
                    {post.tag}
                  </span>
                  <span className="text-[11px] text-slate-500 flex items-center gap-2 mono font-bold">
                    {post.timestamp}
                    <Clock className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-[15px] leading-relaxed mb-8">
                  {post.content}
                </p>
                
                <div className="flex flex-wrap justify-end items-center gap-8 pt-6 border-t border-slate-800/50">
                   <div className="flex items-center gap-2 text-[10px] text-slate-600 font-black uppercase tracking-widest">
                     <Info className="w-4 h-4" />
                     Data Integrity Verified
                   </div>
                   <div className="flex items-center gap-2 text-[10px] text-slate-600 font-black uppercase tracking-widest">
                     <ShieldAlert className="w-4 h-4 text-cyan-700" />
                     Broadcasting Mode: Active
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-700 text-[9px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-slate-800"></span>
            End of Intelligence Briefing
            <span className="w-12 h-[1px] bg-slate-800"></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
