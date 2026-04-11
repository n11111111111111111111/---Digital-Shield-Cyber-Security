
import React from 'react';
import { Mail, ShieldCheck, Info, Send, MapPin, Phone, Globe } from 'lucide-react';
import { AppView } from '../App';

interface InfoSectionProps {
  type: AppView;
}

const InfoSection: React.FC<InfoSectionProps> = ({ type }) => {
  const content = {
    about: {
      title: 'من نحن',
      subtitle: 'دجلة سايبر - العين الرقمية لبلاد الرافدين',
      icon: Info,
      color: 'text-cyber-powder',
      text: 'دجلة سايبر هي منصة رائدة في مجال الأمن السيبراني مقرها بغداد، تهدف إلى رصد وتحليل التهديدات الرقمية في المنطقة وتقديم حلول استخباراتية متطورة. نحن نجمع بين التقنية والخبرة العراقية لحماية الفضاء الرقمي الوطني.'
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا للإجابة على تساؤلاتكم الأمنية',
      icon: Send,
      color: 'text-green-400',
      text: 'يمكنكم التواصل مع فريق الدعم الفني أو الاستشارات عبر القنوات الرسمية الموضحة أدناه.'
    },
    privacy: {
      title: 'سياسة الخصوصية',
      subtitle: 'حماية بياناتك هي أولويتنا القصوى',
      icon: ShieldCheck,
      color: 'text-cyber-sapphire',
      text: 'نحن نلتزم بأقصى معايير التشفير والسرية في التعامل مع بيانات المستخدمين. دجلة سايبر لا تقوم بمشاركة معلوماتك الشخصية مع أي جهة خارجية دون موافقة صريحة.'
    }
  };

  const active = content[type as keyof typeof content] || content.about;
  const Icon = active.icon;

  return (
    <div className="py-32 bg-cyber-navy relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,82,186,0.05),transparent_70%)]"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className={`w-20 h-20 mx-auto rounded-2xl bg-cyber-navy border border-cyber-powder/20 flex items-center justify-center ${active.color} mb-8 shadow-2xl`}>
          <Icon className="w-10 h-10" />
        </div>
        
        <h1 className="text-5xl font-black text-white mb-4 italic">{active.title}</h1>
        <p className={`text-sm font-bold uppercase tracking-widest ${active.color} mb-8`}>{active.subtitle}</p>
        
        <div className="bg-cyber-ice/5 border border-cyber-powder/20 p-10 rounded-3xl backdrop-blur-xl text-right">
          <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
            {active.text}
          </p>

          {type === 'contact' && (
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-cyber-navy border border-cyber-powder/20 p-6 rounded-2xl flex items-center justify-end gap-4 hover:border-cyber-sapphire/30 transition-all">
                <div className="text-right">
                  <span className="block text-[10px] text-slate-500 font-bold uppercase">البريد الإلكتروني</span>
                  <span className="text-white font-bold block">pbeb4009@mtu.edu.iq</span>
                </div>
                <Mail className="w-6 h-6 text-cyber-powder" />
              </div>
              <div className="bg-cyber-navy border border-cyber-powder/20 p-6 rounded-2xl flex items-center justify-end gap-4 hover:border-cyber-sapphire/30 transition-all">
                <div className="text-right">
                  <span className="block text-[10px] text-slate-500 font-bold uppercase">واتساب</span>
                  <span className="text-white font-bold">07736274737</span>
                </div>
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <div className="md:col-span-2 bg-cyber-navy border border-cyber-powder/20 p-6 rounded-2xl flex items-center justify-end gap-4 hover:border-cyber-sapphire/30 transition-all">
                <div className="text-right">
                  <span className="block text-[10px] text-slate-500 font-bold uppercase">الموقع الجغرافي</span>
                  <span className="text-white font-bold">بغداد، الدورة، الجامعة التقنية الوسطى، الكلية الهندسية الكهربائية</span>
                </div>
                <MapPin className="w-6 h-6 text-red-400" />
              </div>
            </div>
          )}
          
          {type === 'about' && (
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="p-4 border-r border-cyber-sapphire/20 text-right">
                <h4 className="text-white font-bold mb-2">رؤيتنا</h4>
                <p className="text-xs text-slate-500">سيادة رقمية عراقية كاملة.</p>
              </div>
              <div className="p-4 border-r border-cyber-sapphire/20 text-right">
                <h4 className="text-white font-bold mb-2">رسالتنا</h4>
                <p className="text-xs text-slate-500">تحويل البيانات إلى أمن واستقرار.</p>
              </div>
              <div className="p-4 text-right">
                <h4 className="text-white font-bold mb-2">قيمنا</h4>
                <p className="text-xs text-slate-500">الشفافية، الدقة، والوطنية.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
