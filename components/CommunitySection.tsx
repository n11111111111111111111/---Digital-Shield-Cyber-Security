
import React, { useState } from 'react';
import { UserCheck, Code, Send, Star, ShieldCheck, Mail, MessageCircle, Linkedin, X, ExternalLink } from 'lucide-react';
import { ExpertService, UserRole } from '../types';

interface CommunitySectionProps {
  userRole: UserRole;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ userRole }) => {
  const [selectedExpert, setSelectedExpert] = useState<ExpertService | null>(null);

  // بيانات الخبراء مع إضافة معلومات التواصل الافتراضية
  const services: ExpertService[] = [
    {
      id: '1',
      expertName: 'Matrix_Dev',
      title: 'برمجة أدوات فحص ثغرات مخصصة',
      description: 'كتابة سكربتات متطورة بلغة Python لفحص الثغرات الأمنية في الأنظمة السحابية بشكل تلقائي مع تقارير مفصلة.',
      price: '',
      skills: ['Python', 'Automation', 'Cloud Security'],
      rating: 5
    },
    {
      id: '2',
      expertName: 'Cyber_Audit',
      title: 'اختبار اختراق تطبيقات الويب',
      description: 'تنفيذ هجمات محاكاة (Penetration Testing) لكشف ثغرات OWASP Top 10 وتقديم حلول تقنية فورية.',
      price: '',
      skills: ['Web Security', 'Pentesting', 'SQLi'],
      rating: 4.8
    }
  ];

  const contactOptions = [
    { name: 'واتساب مباشر', icon: MessageCircle, color: 'text-green-500', bg: 'bg-green-500/10', hover: 'hover:border-green-500/50' },
    { name: 'البريد الإلكتروني', icon: Mail, color: 'text-cyan-400', bg: 'bg-cyan-400/10', hover: 'hover:border-cyan-400/50' },
    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-500', bg: 'bg-blue-500/10', hover: 'hover:border-blue-500/50' }
  ];

  return (
    <section id="community" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-right">
            <div className="inline-flex items-center gap-3 text-cyan-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
              <Code className="w-4 h-4" />
              Cyber Expert Directory
            </div>
            <h2 className="text-5xl font-black text-white">منصة <span className="text-cyan-400 italic">الخبراء والمبرمجين</span></h2>
            <p className="text-slate-500 mt-4 max-w-2xl leading-relaxed">
              تصفح نخبة من المحللين والمبرمجين المعتمدين في مجال الأمن السيبراني والتحقيق الرقمي.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/30 transition-all flex flex-col gap-6 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-1.5 h-full bg-cyan-600 opacity-20 group-hover:opacity-100 transition-all"></div>
              
              <div className="flex justify-between items-center flex-row-reverse">
                <div className="flex items-center gap-4 flex-row-reverse">
                  <div className="w-16 h-16 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center text-cyan-500 shadow-inner group-hover:border-cyan-500/30 transition-colors">
                    <UserCheck className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <h4 className="text-white font-black text-lg">{service.expertName}</h4>
                    <div className="flex items-center justify-end gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
                      ))}
                      <span className="text-[10px] text-slate-500 mr-2">({service.rating})</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-500/80 bg-green-500/5 px-3 py-1 rounded-full border border-green-500/10">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                   <span className="text-[9px] font-black uppercase tracking-widest">Verified Expert</span>
                </div>
              </div>

              <div className="text-right">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-12 line-clamp-2">{service.description}</p>
                
                <div className="flex flex-wrap justify-end gap-2 mb-8">
                  {service.skills.map((skill, i) => (
                    <span key={i} className="text-[10px] font-black text-cyan-400 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-slate-800/50 pt-6">
                  <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                    <ShieldCheck className="w-4 h-4 text-cyan-600" />
                    Security Verified
                  </div>
                  <button 
                    onClick={() => setSelectedExpert(service)}
                    className="bg-slate-950 hover:bg-cyan-600 text-white px-10 py-3.5 rounded-lg text-sm font-black transition-all border border-slate-800 hover:border-cyan-500 group/btn flex items-center gap-2"
                  >
                    تواصل للاستشارة
                    <Send className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Modal */}
      {selectedExpert && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md animate-fade-in" onClick={() => setSelectedExpert(null)}></div>
          
          <div className="relative w-full max-w-md bg-slate-900 border border-cyan-500/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(6,182,212,0.15)] animate-slide-up">
            <button 
              onClick={() => setSelectedExpert(null)}
              className="absolute top-6 left-6 text-slate-500 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-slate-950 rounded-2xl border border-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto mb-4">
                <UserCheck className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-white italic">تواصل مع {selectedExpert.expertName}</h3>
              <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest font-bold">بوابة الاستشارة المباشرة</p>
            </div>

            <div className="space-y-3">
              {contactOptions.map((opt, i) => (
                <button 
                  key={i}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950/50 ${opt.hover} transition-all group`}
                >
                  <ExternalLink className="w-4 h-4 text-slate-700 group-hover:text-white transition-colors" />
                  <div className="flex items-center gap-4 text-right">
                    <span className="text-sm font-bold text-slate-200 group-hover:text-white">{opt.name}</span>
                    <div className={`p-2 rounded-lg ${opt.bg} ${opt.color}`}>
                      <opt.icon className="w-5 h-5" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <p className="text-center text-[10px] text-slate-600 mt-8 leading-relaxed">
              * جميع المراسلات عبر هذه المنصة مشفرة وفق معايير دجلة سايبر للأمان الرقمي.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CommunitySection;
