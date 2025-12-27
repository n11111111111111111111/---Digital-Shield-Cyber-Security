
import React, { useState } from 'react';
import { PlusCircle, FileText, BookOpen, Trash2, Edit3, ShieldCheck, Database, LayoutGrid } from 'lucide-react';
import { Article, Story } from '../types';

interface AdminDashboardProps {
  articles: Article[];
  stories: Story[];
  onAddArticle: (article: Article) => void;
  onAddStory: (story: Story) => void;
  onDeleteArticle: (id: string) => void;
  onDeleteStory: (id: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  articles, stories, onAddArticle, onAddStory, onDeleteArticle, onDeleteStory 
}) => {
  const [activeTab, setActiveTab] = useState<'articles' | 'stories'>('articles');
  const [showAddForm, setShowAddForm] = useState(false);

  // Form States
  const [newTitle, setNewTitle] = useState('');
  const [newExcerpt, setNewExcerpt] = useState('');
  const [newCategory, setNewCategory] = useState<any>('Cyber News');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'articles') {
      const art: Article = {
        id: `art-${Date.now()}`,
        title: newTitle,
        excerpt: newExcerpt,
        category: newCategory,
        date: new Date().toISOString().split('T')[0],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
        author: 'Admin'
      };
      onAddArticle(art);
    } else {
      const sto: Story = {
        id: `sto-${Date.now()}`,
        title: newTitle,
        preview: newExcerpt,
        content: 'محتوى القصة الكامل يكتب هنا...',
        readTime: '5 دقائق',
        category: 'إدارة',
        icon: '📝'
      };
      onAddStory(sto);
    }
    setNewTitle('');
    setNewExcerpt('');
    setShowAddForm(false);
  };

  return (
    <div className="py-32 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center mb-12 gap-6 bg-slate-900/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-xl">
          <div className="text-right">
            <h1 className="text-3xl font-black text-white italic">مركز التحكم <span className="text-cyan-400">الاستراتيجي</span></h1>
            <p className="text-slate-500 mt-2">إدارة الأخبار، التحقيقات، والمحتوى الاستخباراتي.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => { setActiveTab('articles'); setShowAddForm(false); }}
              className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'articles' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-500'}`}
            >
              الأخبار والمقالات
            </button>
            <button 
              onClick={() => { setActiveTab('stories'); setShowAddForm(false); }}
              className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'stories' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-500'}`}
            >
              القصص والتحقيقات
            </button>
          </div>
        </div>

        {/* Add Button */}
        <div className="mb-8 flex justify-end">
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-black transition-all shadow-lg shadow-green-900/20"
          >
            {showAddForm ? 'إلغاء' : (activeTab === 'articles' ? 'إضافة مقال جديد' : 'كتابة قصة جديدة')}
            <PlusCircle className="w-5 h-5" />
          </button>
        </div>

        {/* Add Form */}
        {showAddForm && (
          <form onSubmit={handleAdd} className="mb-12 bg-slate-900 border border-cyan-500/20 p-8 rounded-2xl animate-fade-in text-right">
            <h3 className="text-xl font-black text-white mb-6 border-b border-slate-800 pb-4">
              إنشاء محتوى جديد
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-slate-500 text-xs font-bold">العنوان</label>
                <input 
                  type="text" required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-cyan-500 outline-none" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-slate-500 text-xs font-bold">التصنيف</label>
                <select 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-cyan-500 outline-none"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                >
                  <option value="Cyber News">أخبار السايبر</option>
                  <option value="Cyber Iraq">سايبر العراق</option>
                  <option value="Famous Hacks">اختراقات مشهورة</option>
                  <option value="Opinion & Analysis">رأي وتحليل</option>
                </select>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <label className="text-slate-500 text-xs font-bold">ملخص / معاينة</label>
              <textarea 
                rows={3} required
                value={newExcerpt}
                onChange={(e) => setNewExcerpt(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-cyan-500 outline-none"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-cyan-600 px-10 py-3 rounded-lg font-black text-white">نشر المحتوى فوراً</button>
            </div>
          </form>
        )}

        {/* Content List */}
        <div className="grid gap-4">
          {(activeTab === 'articles' ? articles : stories).map((item: any) => (
            <div key={item.id} className="bg-slate-900/30 border border-slate-800 p-6 rounded-2xl flex items-center justify-between hover:border-slate-700 transition-all">
              <div className="flex gap-4">
                <button onClick={() => activeTab === 'articles' ? onDeleteArticle(item.id) : onDeleteStory(item.id)} className="p-3 bg-red-900/10 text-red-500 rounded-lg border border-red-900/20 hover:bg-red-900/20 transition-all">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="p-3 bg-slate-800 text-slate-400 rounded-lg border border-slate-700 hover:text-white transition-all">
                  <Edit3 className="w-5 h-5" />
                </button>
              </div>
              <div className="text-right">
                <h4 className="text-white font-bold">{item.title}</h4>
                <div className="flex items-center justify-end gap-3 mt-1">
                  <span className="text-[10px] text-slate-500 mono">{item.date || item.readTime}</span>
                  <span className="text-[10px] px-2 py-0.5 bg-slate-800 rounded text-cyan-500 font-bold uppercase">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl text-right">
            <Database className="w-8 h-8 text-cyan-500 mb-4 ml-auto" />
            <span className="block text-3xl font-black text-white">{articles.length + stories.length}</span>
            <span className="text-xs text-slate-500 font-bold uppercase">إجمالي المحتوى المؤرشف</span>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl text-right">
            <ShieldCheck className="w-8 h-8 text-green-500 mb-4 ml-auto" />
            <span className="block text-3xl font-black text-white">Active</span>
            <span className="text-xs text-slate-500 font-bold uppercase">حالة الأنظمة الدفاعية</span>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl text-right">
            <LayoutGrid className="w-8 h-8 text-blue-500 mb-4 ml-auto" />
            <span className="block text-3xl font-black text-white">4.2 TB</span>
            <span className="text-xs text-slate-500 font-bold uppercase">حجم مخزن البيانات الاستخباري</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
