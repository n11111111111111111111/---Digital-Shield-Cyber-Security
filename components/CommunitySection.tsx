
import React, { useState } from 'react';
import { UserCheck, Code, Send, Star, ShieldCheck, Mail, MessageCircle, Linkedin, X, ExternalLink, Binary, Cloud, Lock } from 'lucide-react';
import { ExpertService, UserRole } from '../types';

interface CommunitySectionProps {
  userRole: UserRole;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ userRole }) => {
  const [selectedExpert, setSelectedExpert] = useState<ExpertService | null>(null);

  const services: ExpertService[] = [
    {
      id: '1',
      expertName: 'عباس حبيب',
      title: 'خبير أمن سيبراني',
      description: 'متخصص في حماية البنى التحتية الحساسة وإدارة المخاطر الرقمية.',
      price: '',
      skills: ['Network Security', 'Risk Management'],
      rating: 5
    },
    {
      id: '2',
      expertName: 'عبدلله بركان',
      title: 'محلل برمجيات خبيثة',
      description: 'خبير في الهندسة العكسية وتحليل الفيروسات والبرمجيات الضارة.',
      price: '',
      skills: ['Reverse Engineering', 'Malware Analysis'],
      rating: 4.9
    },
    {
      id: '3',
      expertName: 'حسن غسان',
      title: 'مختبر اختراق',
      description: 'متخصص في اكتشاف الثغرات الأمنية في تطبيقات الويب والموبايل.',
      price: '',
      skills: ['Penetration Testing', 'Web Security'],
      rating: 4.8
    },
    {
      id: '4',
      expertName: 'امين حازم',
      title: 'مهندس أمن سحابي',
      description: 'تصميم وتنفيذ حلول أمنية متكاملة للبيئات السحابية الهجينة.',
      price: '',
      skills: ['Cloud Security', 'AWS/Azure'],
      rating: 4.7
    },
    {
      id: '5',
      expertName: 'مبين ارسلان',
      title: 'خبير استجابة للحوادث',
      description: 'متخصص في التعامل مع الاختراقات النشطة واستعادة الأنظمة المتضررة.',
      price: '',
      skills: ['Incident Response', 'Digital Forensics'],
      rating: 5
    },
    {
      id: '6',
      expertName: 'عبدلله طارق',
      title: 'مطور أدوات أمنية',
      description: 'برمجة أدوات مخصصة للأتمتة الأمنية وفحص الثغرات التلقائي.',
      price: '',
      skills: ['Python', 'Automation'],
      rating: 4.6
    },
    {
      id: '7',
      expertName: 'محمد وسام',
      title: 'مستشار أمن معلومات',
      description: 'تقديم استشارات استراتيجية للشركات للامتثال للمعايير الأمنية العالمية.',
      price: '',
      skills: ['ISO 27001', 'Compliance'],
      rating: 4.9
    },
    {
      id: '8',
      expertName: 'عبدلله بلال',
      title: 'خبير تشفير',
      description: 'متخصص في بروتوكولات التشفير وحماية البيانات الحساسة أثناء النقل والتخزين.',
      price: '',
      skills: ['Cryptography', 'Data Privacy'],
      rating: 4.8
    }
  ];

  const contactOptions = [
    { name: 'واتساب', icon: MessageCircle, color: 'text-green-500', bg: 'bg-green-500/10' },
    { name: 'البريد', icon: Mail, color: 'text-cyber-powder', bg: 'bg-cyber-powder/10' },
    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-500', bg: 'bg-blue-500/10' }
  ];

  return (
    <section id="community" className="py-12 bg-cyber-navy relative overflow-hidden border-t border-cyber-powder/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-right mb-10">
          <div className="inline-flex items-center gap-2 text-cyber-sapphire text-[8px] font-black uppercase tracking-[0.3em] mb-3">
            <Code className="w-3 h-3" />
            Cyber Experts
          </div>
          <h2 className="text-3xl font-black text-white italic">منصة <span className="text-cyber-sapphire">الخبراء</span></h2>
          <p className="text-slate-400 mt-1 max-w-lg ml-auto text-[11px] font-medium leading-relaxed">
            نخبة من المحللين والمبرمجين المعتمدين المتوفرين للاستشارة المباشرة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.id} className="group bg-cyber-ice/5 border border-cyber-powder/20 p-4 rounded-xl hover:border-cyber-sapphire/30 transition-all flex flex-col gap-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1 h-full bg-cyber-sapphire opacity-20 group-hover:opacity-100 transition-all"></div>
              
              <div className="flex justify-between items-start flex-row-reverse">
                <div className="w-10 h-10 bg-cyber-navy rounded-lg border border-cyber-powder/20 flex items-center justify-center text-cyber-sapphire group-hover:border-cyber-sapphire/30 transition-colors">
                  {service.id === '3' ? <Binary className="w-5 h-5" /> : service.id === '4' ? <Cloud className="w-5 h-5" /> : service.id === '6' ? <Lock className="w-5 h-5" /> : <UserCheck className="w-5 h-5" />}
                </div>
                <div className="text-right">
                  <h4 className="text-white font-black text-sm">{service.expertName}</h4>
                  <div className="flex items-center justify-end gap-1 text-yellow-500">
                    <Star className="w-2.5 h-2.5 fill-current" />
                    <span className="text-[9px] text-slate-500">{service.rating}</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <h3 className="text-[13px] font-bold text-white mb-1.5 group-hover:text-cyber-sapphire transition-colors line-clamp-1">{service.title}</h3>
                <p className="text-slate-300 text-[10px] leading-relaxed mb-3 h-8 line-clamp-2">{service.description}</p>
                
                <div className="flex flex-wrap justify-end gap-1 mb-4">
                  {service.skills.map((skill, i) => (
                    <span key={i} className="text-[8px] font-bold text-cyber-powder bg-cyber-navy border border-cyber-powder/20 px-1.5 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-cyber-powder/10 pt-3">
                  <div className="flex items-center gap-1 text-slate-500 text-[8px] font-bold uppercase tracking-widest">
                    <ShieldCheck className="w-3 h-3 text-cyber-sapphire" />
                    Verified
                  </div>
                  <button onClick={() => setSelectedExpert(service)} className="bg-cyber-navy hover:bg-cyber-sapphire text-white px-4 py-1.5 rounded-lg text-[10px] font-black transition-all border border-cyber-powder/20 flex items-center gap-2">
                    استشارة
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedExpert && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-cyber-navy/90 backdrop-blur-md" onClick={() => setSelectedExpert(null)}></div>
          <div className="relative w-full max-w-xs bg-cyber-navy border border-cyber-sapphire/30 rounded-xl p-6 shadow-2xl animate-slide-up">
            <button onClick={() => setSelectedExpert(null)} className="absolute top-3 left-3 text-slate-500 hover:text-white"><X className="w-4 h-4" /></button>
            <div className="text-center mb-5">
              <div className="w-12 h-12 bg-cyber-navy rounded-lg border border-cyber-sapphire/20 flex items-center justify-center text-cyber-powder mx-auto mb-2"><UserCheck className="w-6 h-6" /></div>
              <h3 className="text-base font-black text-white italic">{selectedExpert.expertName}</h3>
            </div>
            <div className="space-y-2">
              {contactOptions.map((opt, i) => (
                <button key={i} className="w-full flex items-center justify-between p-3 rounded-lg border border-cyber-powder/20 bg-cyber-navy/50 hover:border-cyber-sapphire/50 transition-all group">
                  <ExternalLink className="w-3 h-3 text-slate-700 group-hover:text-white" />
                  <div className="flex items-center gap-3 text-right">
                    <span className="text-[11px] font-bold text-slate-200">{opt.name}</span>
                    <div className={`p-1.5 rounded-md ${opt.bg} ${opt.color}`}><opt.icon className="w-3.5 h-3.5" /></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CommunitySection;
